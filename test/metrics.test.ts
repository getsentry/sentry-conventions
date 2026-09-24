import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/metric.schema.json';
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
