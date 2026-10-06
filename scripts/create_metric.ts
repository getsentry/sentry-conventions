import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { parseArgs } from 'node:util';

import { confirm, intro, isCancel, log, outro, select, text } from '@clack/prompts';
import Ajv from 'ajv';

import { attributeKeyToFileName } from './utils';

const schema = JSON.parse(
  fs.readFileSync(fileURLToPath(new URL('../schemas/metric.schema.json', import.meta.url)), 'utf-8'),
);

const HELP_TEXT = `
Usage: yarn create:metric [options]

Create a new Sentry metric definition file.

Options:
  --help, -h             Show this help message
  --key, -k              Namespaced metric key (e.g. process.memory.usage)
  --description, -d      What the metric measures
  --instrument, -i       The type of the metric (gauge/counter/distribution)
  --unit, -u             The Sentry unit of measurement (e.g. byte, second, none)
  --is_in_otel, -o       Whether the metric is in OpenTelemetry (true/false)
  --requirement_level    Whether collection is required, recommended, or opt-in (required/recommended/opt_in)
  --attributes          Attribute keys that describe the metric's values, e.g. go.memory.detailed_type (comma-separated, optional)

Examples:
  # Interactive mode
  yarn run create:metric

  # Non-interactive mode
  yarn run create:metric --key process.memory.usage --description "The amount of physical memory in use." --instrument gauge --unit byte --is_in_otel true --requirement_level recommended
`;

function validateSchema(data: unknown): asserts data is { key: string } {
  const ajv = new Ajv();
  const validate = ajv.compile(schema);
  const valid = validate(data);

  if (!valid) {
    console.error('Validation errors:', validate.errors);
    throw new Error('Invalid metric data');
  }
}

async function prompt<T>(result: Promise<T | symbol>): Promise<T> {
  const value = await result;
  if (isCancel(value)) {
    process.exit(0);
  }
  return value as T;
}

async function createMetric() {
  try {
    const { values } = parseArgs({
      options: {
        help: { type: 'boolean', short: 'h' },
        key: { type: 'string', short: 'k' },
        description: { type: 'string', short: 'd' },
        instrument: { type: 'string', short: 'i' },
        unit: { type: 'string', short: 'u' },
        is_in_otel: { type: 'string', short: 'o' },
        requirement_level: { type: 'string' },
        attributes: { type: 'string' },
      },
    });

    if (values.help) {
      console.log(HELP_TEXT);
      return;
    }

    if (Object.keys(values).length === 0) {
      if (!process.stdin.isTTY) {
        throw new Error('Supply the required options in non-interactive mode. Use --help for usage.');
      }
      intro('Create new metric');
      values.key = await prompt(text({ message: 'Enter the metric key', placeholder: 'process.memory.usage' }));
      values.description = await prompt(text({ message: 'Enter the metric description' }));
      values.instrument = await prompt(
        select({
          message: 'Select the instrument',
          options: schema.properties.instrument.enum.map((value: string) => ({ value, label: value })),
        }),
      );
      values.unit = await prompt(
        select({
          message: 'Select the Sentry unit',
          options: schema.properties.unit.enum.map((value: string) => ({ value, label: value })),
        }),
      );
      values.is_in_otel = String(await prompt(confirm({ message: 'Is the metric in OpenTelemetry?' })));
      values.requirement_level = await prompt(
        select({
          message: 'Select the requirement level',
          options: schema.properties.requirement_level.enum.map((value: string) => ({ value, label: value })),
        }),
      );
      values.attributes = await prompt(
        text({
          message: "Enter attribute keys that describe the metric's values (comma-separated, optional)",
          placeholder: 'go.memory.detailed_type',
        }),
      );
    }

    const { key, description, instrument, unit, is_in_otel, requirement_level, attributes } = values;
    const metric = {
      key,
      brief: description,
      instrument,
      unit,
      is_in_otel: is_in_otel === 'true' ? true : is_in_otel === 'false' ? false : is_in_otel,
      requirement_level,
      ...(attributes?.trim() && { attributes: attributes.split(',').map((value) => value.trim()) }),
    };
    writeMetric(metric);
    log.success('Successfully created metric file');
  } catch (error) {
    log.error(`Error creating metric: ${error}`);
    process.exitCode = 1;
  } finally {
    outro('Metric creation done!');
  }
}

export function writeMetric(metric: unknown, metricsDir = path.join('model', 'metrics')): void {
  validateSchema(metric);

  const filePath = path.join(metricsDir, metric.key.split('.')[0]!, attributeKeyToFileName(metric.key));
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, `${JSON.stringify(metric, null, 2)}\n`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  createMetric();
}
