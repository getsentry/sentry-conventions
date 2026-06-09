import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/name.schema.json';
import type { AttributeJson, NameJson } from '../scripts/types';
import { attributeKeyToFileName } from '../scripts/utils';

const namesFolder = path.resolve(__dirname, '../model/name');
const attributesFolder = path.resolve(__dirname, '../model/attributes');

describe('Name JSON', async () => {
  const filesIterator = fs.promises.glob(`${namesFolder}/*.json`);
  const files = await Array.fromAsync(filesIterator);
  const ajv = new Ajv();

  for (const file of files) {
    const name = path.basename(file);

    describe(name, async () => {
      const content: NameJson = JSON.parse(await fs.promises.readFile(file, 'utf-8'));

      it('should follow the name json schema', () => {
        ajv.validate(schema, content);
        expect(ajv.errors).toBe(null);
      });

      it('should not have duplicate ops', () => {
        for (const operation of content.operations) {
          expect(new Set(operation.ops).size).toBe(operation.ops.length);
        }
      });

      // This invariant is important for the span-to-name code generation inside Relay.
      it('should fall back to a template without attributes', () => {
        for (const operation of content.operations) {
          for (const nameTemplate of operation.templates.slice(0, -1)) {
            expect(nameTemplate, 'all but the last template should reference an attribute').toContain('{{');
          }

          const lastNameTemplate = operation.templates.at(-1);
          expect(lastNameTemplate, "the last template shouldn't reference any attributes").not.toContain('{{');
        }
      });

      it('only references existing, non-replaced attributes', async () => {
        const placeholder = /\{\{([^}]+)\}\}/g;
        const missing: string[] = [];
        const deprecated: string[] = [];

        for (const operation of content.operations) {
          for (const tmpl of operation.templates) {
            for (const match of tmpl.matchAll(placeholder)) {
              const key = match[1] as string;
              const fileName = attributeKeyToFileName(key);
              const namespace = key.includes('.') ? (key.split('.')[0] as string) : undefined;
              const filePath = namespace
                ? path.join(attributesFolder, namespace, fileName)
                : path.join(attributesFolder, fileName);

              const exists = await fs.promises
                .access(filePath, fs.constants.F_OK)
                .then(() => true)
                .catch(() => false);

              if (!exists) {
                missing.push(key);
                continue;
              }

              const attr: AttributeJson = JSON.parse(await fs.promises.readFile(filePath, 'utf-8'));
              if (attr.deprecation?.replacement) {
                deprecated.push(key);
              }
            }
          }
        }

        expect(missing, `template attributes without definitions: ${missing.join(', ')}`).toEqual([]);
        expect(
          deprecated,
          `template references deprecated attributes with replacements: ${deprecated.join(', ')}`,
        ).toEqual([]);
      });
    });
  }
});
