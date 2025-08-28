import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/attribute.schema.json';
import type { AttributeJson } from '../scripts/types';
import { attributeKeyToFileName, fileNameToAttributeKey } from '../scripts/utils';

const traceFolders = path.resolve(__dirname, '../model/attributes');

describe('attribute json', async () => {
  const filesIterator = await fs.promises.glob(`${traceFolders}/**/*.json`);
  const files = await Array.fromAsync(filesIterator);

  for (const file of files) {
    const name = path.basename(file);
    describe(name, async () => {
      const content: AttributeJson = JSON.parse(await fs.promises.readFile(file, 'utf-8'));

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

        if (!content.example) {
          return;
        }
        switch (content.type) {
          case 'integer':
          case 'double':
            expect(typeof content.example).toBe('number');
            break;
          case 'integer[]':
          case 'double[]':
            expect(Array.isArray(content.example)).toBe(true);
            expect((content.example as number[]).every((e: number) => typeof e === 'number')).toBe(true);
            break;
          case 'string':
            expect(typeof content.example).toBe('string');
            break;
          case 'string[]':
            expect(Array.isArray(content.example)).toBe(true);
            expect((content.example as string[]).every((e: string) => typeof e === 'string')).toBe(true);
            break;
          case 'boolean':
            expect(typeof content.example).toBe('boolean');
            break;
          case 'boolean[]':
            expect(Array.isArray(content.example)).toBe(true);
            expect((content.example as boolean[]).every((e: boolean) => typeof e === 'boolean')).toBe(true);
            break;
          default:
            throw new Error('Invalid type');
        }
      });

      it('should follow the correct naming convention', () => {
        expect(fileNameToAttributeKey(name)).toMatch(content.key);
      });

      it('all of its aliases should exist', async () => {
        if (!content.alias || content.alias.length === 0) {
          return;
        }

        for (const alias of content.alias) {
          const aliasFileName = attributeKeyToFileName(alias);
          let aliasFilePath: string;

          if (alias.includes('.')) {
            const namespace = alias.split('.')[0] as string;
            aliasFilePath = path.join(traceFolders, namespace, aliasFileName);
          } else {
            aliasFilePath = path.join(traceFolders, aliasFileName);
          }

          const aliasExists = await fs.promises
            .access(aliasFilePath, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false);

          expect(aliasExists).toBe(true);
        }
      });
    });
  }
});
