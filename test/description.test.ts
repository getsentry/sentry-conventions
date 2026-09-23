import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/description.schema.json';
import type { DescriptionJson } from '../scripts/types';
import { findTemplateAttributeIssues } from './template-attributes';

const descriptionsFolder = path.resolve(__dirname, '../model/description');

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

      it('should have attributes in every template', () => {
        for (const operation of content.operations) {
          for (const tmpl of operation.templates) {
            expect(tmpl, `template "${tmpl}" should reference an attribute`).toContain('{{');
          }
        }
      });

      it('only references existing, non-replaced attributes', async () => {
        const { missing, deprecated } = await findTemplateAttributeIssues(content);

        expect(missing, `template attributes without definitions: ${missing.join(', ')}`).toEqual([]);
        expect(
          deprecated,
          `template references deprecated attributes with replacements: ${deprecated.join(', ')}`,
        ).toEqual([]);
      });
    });
  }
});
