import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { parseArgs } from 'node:util';
import { confirm, intro, isCancel, log, outro, select, text } from '@clack/prompts';
import Ajv from 'ajv';
import { parseAttributeExamples, type AttributeValue } from './types';

const getNextPrNumber = (): number | undefined => {
  try {
    const result = execSync(
      'gh api "repos/getsentry/sentry-conventions/issues?per_page=1&state=all" --jq ".[0].number"',
      { encoding: 'utf-8', stdio: ['pipe', 'pipe', 'pipe'] },
    ).trim();
    const latest = Number.parseInt(result, 10);
    return Number.isNaN(latest) ? undefined : latest + 1;
  } catch {
    return undefined;
  }
};

const HELP_TEXT = `
Usage: yarn create:attribute [options]

Create a new Sentry attribute definition file.

Options:
  --help, -h          Show this help message
  --key, -k           The attribute key (e.g. http.route)
  --description, -d   A description of the attribute
  --type, -t          The type of the attribute (string/boolean/integer/double/string[]/boolean[]/integer[]/double[])
  --apply_scrubbing, -s   How PII scrubbing should be applied (auto/manual/never)
  --is_in_otel, -o    Whether the attribute is in OpenTelemetry (true/false)
  --visibility, -v   The visibility of the attribute (public/internal)
  --examples          Example values as a non-empty JSON array (optional, preferred)
  --example, -e       A single example value (optional, legacy)
  --alias, -a         Comma-separated list of attributes that alias to this attribute (optional)

Examples:
  # Interactive mode
  yarn run create:attribute

  # Non-interactive mode
  yarn run create:attribute --key http.route --description "The route pattern of the request" --type string --apply_scrubbing never --is_in_otel true --visibility public --examples '["/users/:id","/teams/:id"]' --alias "url.template"
`;

const validateSchema = (data: unknown) => {
  const schema = JSON.parse(fs.readFileSync('schemas/attribute.schema.json', 'utf-8'));
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    console.error('Validation errors:', validate.errors);
    throw new Error('Invalid attribute data');
  }
};

const createAttribute = async () => {
  try {
    const { values } = parseArgs({
      options: {
        help: { type: 'boolean', short: 'h' },
        key: { type: 'string', short: 'k' },
        description: { type: 'string', short: 'd' },
        type: { type: 'string', short: 't' },
        apply_scrubbing: { type: 'string', short: 's' },
        is_in_otel: { type: 'string', short: 'o' },
        visibility: { type: 'string', short: 'v' },
        examples: { type: 'string' },
        example: { type: 'string', short: 'e' },
        alias: { type: 'string', short: 'a' },
      },
      allowPositionals: true,
    });

    if (values.help) {
      console.log(HELP_TEXT);
      process.exit(0);
    }

    intro('Create new attribute');

    // If any required option is provided, we'll use non-interactive mode
    const isInteractive = !(
      values.key ||
      values.description ||
      values.type ||
      values.apply_scrubbing ||
      values.is_in_otel ||
      values.visibility
    );

    let key: string | undefined;
    let description: string | undefined;
    let type: string | undefined;
    let applyScrubbingKey: string | undefined;
    let isInOtel: string | undefined;
    let visibility: string | undefined;
    let examples: string | undefined;
    let example: string | undefined;
    let alias: string | undefined;

    if (isInteractive) {
      key = await askForAttributeName();
      description = await askForAttributeDescription();
      type = await askForAttributeType();
      applyScrubbingKey = await askForApplyScrubbing();
      isInOtel = String(await askForAttributeIsInOtel());
      visibility = await askForAttributeVisibility();
      examples = await askForAttributeExamples();
      alias = await askForAttributeAlias();
    } else {
      key = values.key;
      description = values.description;
      type = values.type;
      applyScrubbingKey = values.apply_scrubbing;
      isInOtel = values.is_in_otel;
      visibility = values.visibility;
      examples = values.examples;
      example = values.example;
      alias = values.alias;
    }

    // Validate required fields
    if (!key || !description || !type || !applyScrubbingKey || !isInOtel || !visibility) {
      console.error('Error: Missing required fields. Use --help for usage information.');
      process.exit(1);
    }

    if (visibility !== 'public' && visibility !== 'internal') {
      console.error('Error: visibility must be "public" or "internal".');
      process.exit(1);
    }

    if (examples !== undefined && example !== undefined) {
      console.error('Error: Use either --examples or --example, not both.');
      process.exit(1);
    }

    const hasDynamicSuffix = key.includes('.<key>');
    let examplesValue: AttributeValue[] | undefined;
    if (examples) {
      examplesValue = parseAttributeExamples(examples);
    }

    let exampleValue: AttributeValue | undefined;
    if (example) {
      if (type === 'string[]' || type === 'boolean[]' || type === 'integer[]' || type === 'double[]') {
        exampleValue = JSON.parse(example);
      } else if (type === 'boolean') {
        exampleValue = example === 'true';
      } else if (type === 'integer') {
        exampleValue = Number.parseInt(example);
      } else if (type === 'double') {
        exampleValue = Number.parseFloat(example);
      } else {
        exampleValue = example;
      }
    }

    const nextPrNumber = getNextPrNumber();

    const attribute = {
      key,
      brief: description,
      ...(hasDynamicSuffix && { has_dynamic_suffix: true }),
      type,
      apply_scrubbing: {
        key: applyScrubbingKey,
      },
      is_in_otel: isInOtel.toLowerCase() === 'true',
      visibility,
      ...(examplesValue && { examples: examplesValue }),
      ...(example && { example: exampleValue }),
      ...(alias && alias.trim() !== '' && { alias: alias.split(',').map((s) => s.trim()) }),
      changelog: [
        {
          version: 'next',
          ...(nextPrNumber && { prs: [nextPrNumber] }),
          description: `Added ${key} attribute`,
        },
      ],
    };

    validateSchema(attribute);

    // Replace angle brackets for Windows path safety
    const fileKey = key.replaceAll('<', '[').replaceAll('>', ']');
    // Create the directory structure based on the key
    const parts = fileKey.split('.');
    let filePath: string;

    if (parts.length === 1) {
      // Handle simple keys like 'replay_id'
      filePath = path.join('model', 'attributes', `${fileKey}.json`);
    } else {
      // Handle dotted keys like 'http.route'
      const dirPath = path.join('model', 'attributes', parts[0] ?? '');
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      // Convert rest parts to use double underscores instead of dots
      const fileName = parts.join('__');
      filePath = path.join(dirPath, `${fileName}.json`);
    }

    fs.writeFileSync(filePath, `${JSON.stringify(attribute, null, 2)}\n`);
    log.success(`Successfully created attribute file at: ${filePath}`);

    // Ask if user wants to generate docs
    const generateDocs = await askForGenerateDocs();
    if (generateDocs) {
      log.info('Generating documentation...');
      try {
        execSync('yarn run generate', { stdio: 'inherit' });
        log.success('Documentation generated successfully!');
      } catch (error) {
        log.error(`Error generating documentation: ${error}`);
        process.exit(1);
      }
    }
  } catch (error) {
    log.error(`Error creating attribute: ${error}`);
    process.exit(1);
  } finally {
    outro('Attribute creation done!');
  }
};

createAttribute();

async function askForAttributeName() {
  return abortIfCancelled(
    text({
      message: 'Enter the attribute key',
      placeholder: 'http.route',
      validate: (value) => {
        if (!value) {
          return 'Attribute key is required';
        }
        return undefined;
      },
    }),
  );
}

async function askForAttributeDescription() {
  return abortIfCancelled(
    text({
      message: 'Enter the attribute description',
      placeholder: 'The route pattern of the request',
      validate: (value) => {
        if (!value) {
          return 'Attribute description is required';
        }
        return undefined;
      },
    }),
  );
}

async function askForAttributeType() {
  return abortIfCancelled(
    select({
      message: 'Enter the type',
      options: [
        { value: 'string', label: 'String' },
        { value: 'integer', label: 'Integer' },
        { value: 'boolean', label: 'Boolean' },
        { value: 'double', label: 'Double' },
        { value: 'string[]', label: 'String Array' },
        { value: 'integer[]', label: 'Integer Array' },
        { value: 'boolean[]', label: 'Boolean Array' },
        { value: 'double[]', label: 'Double Array' },
      ],
    }),
  );
}

async function askForApplyScrubbing() {
  return abortIfCancelled(
    select({
      message: 'How should PII scrubbing be applied?',
      options: [
        { value: 'manual', label: 'Manual' },
        { value: 'auto', label: 'Auto' },
        { value: 'never', label: 'Never' },
      ],
      initialValue: 'manual',
    }),
  );
}

async function askForAttributeIsInOtel() {
  return abortIfCancelled(
    confirm({
      message: 'Is the attribute in OpenTelemetry?',
      initialValue: true,
    }),
  );
}

async function askForAttributeVisibility() {
  return abortIfCancelled(
    select({
      message: 'What is the visibility of the attribute?',
      options: [
        { value: 'public', label: 'Public' },
        { value: 'internal', label: 'Internal' },
      ],
    }),
  );
}

async function askForAttributeExamples() {
  return abortIfCancelled(
    text({
      message: 'Enter example values as a JSON array (optional)',
      placeholder: '["GET /users/:id", "GET /teams/:id"]',
    }),
  );
}

async function askForAttributeAlias() {
  return abortIfCancelled(
    text({
      message: 'Enter attributes that alias to this attribute (comma-separated, optional)',
      placeholder: 'url.route,http.routename',
    }),
  );
}

async function askForGenerateDocs() {
  return abortIfCancelled(
    confirm({
      message: 'Would you like to generate documentation?',
      initialValue: true,
    }),
  );
}

async function abortIfCancelled<T>(input: T | Promise<T>): Promise<Exclude<T, symbol>> {
  if (isCancel(await input)) {
    process.exit(0);
  } else {
    return input as Exclude<T, symbol>;
  }
}
