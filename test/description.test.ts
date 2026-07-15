import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/description.schema.json';
import type { AttributeJson, DescriptionJson } from '../scripts/types';
import { attributeKeyToFileName } from '../scripts/utils';

const descriptionsFolder = path.resolve(__dirname, '../model/description');
const attributesFolder = path.resolve(__dirname, '../model/attributes');

describe('Description JSON', async () => {
  const filesIterator = fs.promises.glob(`${descriptionsFolder}/*.json`);
  const files = await Array.fromAsync(filesIterator);
  const ajv = new Ajv();

  for (const file of files) {
    const name = path.basename(file);

    describe(name, async () => {
      const content: DescriptionJson = JSON.parse(await fs.promises.readFile(file, 'utf-8'));

      it('should follow the description json schema', () => {
        ajv.validate(schema, content);
        expect(ajv.errors).toBe(null);
      });

      it('should not have duplicate ops', () => {
        for (const operation of content.operations) {
          expect(new Set(operation.ops).size).toBe(operation.ops.length);
        }
      });

      it('should have attributes in every template except a final literal fallback', () => {
        for (const operation of content.operations) {
          expect(operation.templates.some((tmpl) => tmpl.includes('{{'))).toBe(true);

          for (const tmpl of operation.templates.slice(0, -1)) {
            expect(tmpl, `template "${tmpl}" should reference an attribute`).toContain('{{');
          }
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
