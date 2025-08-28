import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline';
import { parseArgs } from 'node:util';
import Ajv from 'ajv';

const HELP_TEXT = `
Usage: yarn create:attribute [options]

Create a new Sentry attribute definition file.

Options:
  --help, -h          Show this help message
  --key, -k           The attribute key (e.g. http.route)
  --description, -d   A description of the attribute
  --type, -t          The type of the attribute (string/boolean/integer/double/string[]/boolean[]/integer[]/double[])
  --has_pii, -p       Whether the attribute contains PII (true/maybe/false)
  --is_in_otel, -o    Whether the attribute is in OpenTelemetry (true/false)
  --example, -e       An example value (optional)
  --alias, -a         Comma-separated list of attributes that alias to this attribute (optional)
  --sdks, -s          Comma-separated list of SDKs that use this attribute (optional)

Examples:
  # Interactive mode
  yarn run create:attribute

  # Non-interactive mode
  yarn run create:attribute --key http.route --description "The route pattern of the request" --type string --has_pii false --is_in_otel true --example "/users/:id" --alias "url.template"
`;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query: string): Promise<string> => {
  return new Promise((resolve) => {
    rl.question(query, resolve);
  });
};

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
        has_pii: { type: 'string', short: 'p' },
        is_in_otel: { type: 'string', short: 'o' },
        example: { type: 'string', short: 'e' },
        alias: { type: 'string', short: 'a' },
        sdks: { type: 'string', short: 's' },
      },
      allowPositionals: true,
    });

    if (values.help) {
      console.log(HELP_TEXT);
      process.exit(0);
    }

    // If any required option is provided, we'll use non-interactive mode
    const isInteractive = !(values.key || values.description || values.type || values.has_pii || values.is_in_otel);

    let key: string | undefined;
    let description: string | undefined;
    let type: string | undefined;
    let piiKey: string | undefined;
    let isInOtel: string | undefined;
    let example: string | undefined;
    let alias: string | undefined;
    let sdks: string | undefined;

    if (isInteractive) {
      key = await question('Enter the attribute key (e.g. http.route): ');
      description = await question('Enter a description: ');
      type = await question('Enter the type (string/boolean/integer/double/string[]/boolean[]/integer[]/double[]): ');
      piiKey = await question('Does this attribute contain PII? (true/maybe/false): ');
      isInOtel = await question('Is this attribute in OpenTelemetry? (true/false): ');
      example = await question('Enter an example value (optional): ');
      alias = await question('Enter attributes that alias to this attribute (comma-separated, optional): ');
      sdks = await question('Enter SDKs that use this attribute (comma-separated, optional): ');
    } else {
      key = values.key;
      description = values.description;
      type = values.type;
      piiKey = values.has_pii;
      isInOtel = values.is_in_otel;
      example = values.example;
      alias = values.alias;
      sdks = values.sdks;
    }

    // Validate required fields
    if (!key || !description || !type || !piiKey || !isInOtel) {
      console.error('Error: Missing required fields. Use --help for usage information.');
      process.exit(1);
    }

    const hasDynamicSuffix = key.includes('.<key>');
    let exampleValue: string | string[] | boolean | boolean[] | number | number[] | undefined;
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

    const attribute = {
      key,
      brief: description,
      ...(hasDynamicSuffix && { has_dynamic_suffix: true }),
      type,
      pii: {
        key: piiKey,
      },
      is_in_otel: isInOtel.toLowerCase() === 'true',
      ...(example && { example: exampleValue }),
      ...(alias && alias.trim() !== '' && { alias: alias.split(',').map((s) => s.trim()) }),
      ...(sdks && sdks.trim() !== '' && { sdks: sdks.split(',').map((s) => s.trim()) }),
    };

    validateSchema(attribute);

    // Create the directory structure based on the key
    key = key.replace('<key>', '$key$');
    const parts = key.split('.');
    let filePath: string;

    if (parts.length === 1) {
      // Handle simple keys like 'replay_id'
      filePath = path.join('model', 'attributes', `${key}.json`);
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
    console.log(`Successfully created attribute file at: ${filePath}`);

    // Ask if user wants to generate docs
    const generateDocs = await question('\nWould you like to generate documentation? (y/n): ');
    if (generateDocs.toLowerCase() === 'y') {
      console.log('Generating documentation...');
      try {
        execSync('yarn run generate', { stdio: 'inherit' });
        console.log('Documentation generated successfully!');
      } catch (error) {
        console.error('Error generating documentation:', error);
        process.exit(1);
      }
    }
  } catch (error) {
    console.error('Error creating attribute:', error);
    process.exit(1);
  } finally {
    rl.close();
  }
};

createAttribute();
