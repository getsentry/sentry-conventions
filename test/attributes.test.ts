import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/attribute.schema.json';

const traceFolders = path.resolve(__dirname, '../model/attributes');

describe('attribute json', async () => {
  const filesIterator = await fs.promises.glob(`${traceFolders}/**/*.json`);
  const files = await Array.fromAsync(filesIterator);

  for (const file of files) {
    const name = path.basename(file);
    describe(name, async () => {
      const content = JSON.parse(await fs.promises.readFile(file, 'utf-8'));

      it('should follow the attribute json schema', () => {
        const ajv = new Ajv();
        ajv.validate(schema, content);
        expect(ajv.errors).toBe(null);
      });

      it('should set pii to false if type is not string or string[]', () => {
        if (content.type !== 'string' && content.type !== 'string[]') {
          expect(content.pii.key).toBe('false');
        }
      });

      it('should have an example that follows the type set unless has_dynamic_suffix is true', () => {
        if (content.has_dynamic_suffix) {
          expect(typeof content.example).toBe('string');
          return;
        }

        switch (content.type) {
          case 'integer':
          case 'number':
            expect(typeof content.example).toBe('number');
            break;
          case 'integer[]':
          case 'number[]':
            expect(Array.isArray(content.example)).toBe(true);
            expect(content.example.every((e: number) => typeof e === 'number')).toBe(true);
            break;
          case 'string':
            expect(typeof content.example).toBe('string');
            break;
          case 'string[]':
            expect(Array.isArray(content.example)).toBe(true);
            expect(content.example.every((e: string) => typeof e === 'string')).toBe(true);
            break;
          case 'boolean':
            expect(typeof content.example).toBe('boolean');
            break;
          case 'boolean[]':
            expect(Array.isArray(content.example)).toBe(true);
            expect(content.example.every((e: boolean) => typeof e === 'boolean')).toBe(true);
            break;
          default:
            throw new Error('Invalid type');
        }
      });

      it('should follow the correct naming convention', () => {
        expect(name.replaceAll('__', '.').replace('.json', '')).toMatch(content.key);
      });
    });
  }
});
