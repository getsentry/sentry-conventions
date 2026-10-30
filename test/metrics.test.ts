import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/metric.schema.json';
import { generateMetrics } from '../scripts/generate_metrics';
import type { AttributeJson } from '../scripts/types';
import { attributeKeyToFileName } from '../scripts/utils';

const metricsFolder = path.resolve(__dirname, '../model/metrics');
const attributesFolder = path.resolve(__dirname, '../model/attributes');
const validate = new Ajv().compile(schema);

// Schema fixtures only; these do not register metric conventions.
const metric = {
  key: 'example.memory.used',
  brief: 'Memory used by the example runtime.',
  instrument: 'gauge',
  unit: 'byte',
  is_in_otel: false,
  requirement_level: 'recommended',
};

describe('metric definitions', async () => {
  it('accepts a minimal definition and optional attributes', () => {
    expect(validate(metric)).toBe(true);
    expect(
      validate({
        ...metric,
        attributes: ['example.memory.type'],
      }),
    ).toBe(true);
  });
  const files = await Array.fromAsync(fs.promises.glob(`${metricsFolder}/**/*.json`));

  for (const file of files) {
    describe(path.basename(file), async () => {
      const content = JSON.parse(await fs.promises.readFile(file, 'utf-8'));

      it('should follow the metric schema', () => {
        expect(validate(content), JSON.stringify(validate.errors)).toBe(true);
      });

      it('should use the metric key as its file path', () => {
        expect(file).toBe(path.join(metricsFolder, content.key.split('.')[0], attributeKeyToFileName(content.key)));
      });

      it('should reference existing, non-replaced attributes', async () => {
        for (const key of content.attributes ?? []) {
          const namespace = key.includes('.') ? key.split('.')[0] : '';
          const attributePath = path.join(attributesFolder, namespace, attributeKeyToFileName(key));
          const attribute: AttributeJson = JSON.parse(await fs.promises.readFile(attributePath, 'utf-8'));
          expect(attribute.key).toBe(key);
          expect(attribute.deprecation?.replacement).toBeUndefined();
        }
      });
    });
  }
});

describe('generateMetrics', () => {
  it('emits a documented constant per metric in JavaScript and Rust', async () => {
    const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));
    const metricsDir = path.join(temporaryDirectory, 'metrics');
    const jsOutputFilePath = path.join(temporaryDirectory, 'metrics.ts');
    const rustOutputFilePath = path.join(temporaryDirectory, 'metrics.rs');
    fs.mkdirSync(path.join(metricsDir, 'example'), { recursive: true });
    fs.writeFileSync(
      path.join(metricsDir, 'example', 'example__memory__used.json'),
      JSON.stringify({ ...metric, attributes: ['example.memory.type'] }),
    );

    try {
      await generateMetrics({ metricsDir, jsOutputFilePath, rustOutputFilePath });

      expect(fs.readFileSync(jsOutputFilePath, 'utf8')).toContain(
        [
          '// Path: model/metrics/example/example__memory__used.json',
          '',
          '/**',
          ' * Memory used by the example runtime.',
          ' *',
          ' * Instrument: gauge',
          ' * Unit: byte',
          ' * Attributes: `example.memory.type`',
          ' */',
          "export const EXAMPLE_MEMORY_USED = 'example.memory.used';",
        ].join('\n'),
      );
      expect(fs.readFileSync(rustOutputFilePath, 'utf8')).toContain(
        [
          '/// Memory used by the example runtime.',
          '///',
          '/// Instrument: gauge',
          '/// Unit: byte',
          '/// Attributes: `example.memory.type`',
          'pub const EXAMPLE_MEMORY_USED: &str = "example.memory.used";',
        ].join('\n'),
      );
    } finally {
      fs.rmSync(temporaryDirectory, { recursive: true, force: true });
    }
  });
});
