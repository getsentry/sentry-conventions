import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/name.schema.json';
import type { NameJson } from '../scripts/types';

const namesFolder = path.resolve(__dirname, '../model/name');

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
    });
  }
});
