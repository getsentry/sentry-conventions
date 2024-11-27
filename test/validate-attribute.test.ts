import path from 'node:path';
import fs from 'node:fs';

import Ajv from 'ajv';
import { describe, it, expect } from 'vitest';

import attributeSchema from '../schemas/attribute.schema.json';

const traceFolders = path.resolve(__dirname, '../model/trace');

describe('attribute json follows json schema', async () => {
  const files = await fs.promises.glob(`${traceFolders}/**/*.json`);
  for await (const file of files) {
    const filename = path.basename(file);

    it(`${filename}`, async () => {
      const ajv = new Ajv();
      const content = JSON.parse(await fs.promises.readFile(file, 'utf-8'));
      ajv.validate(attributeSchema, content);
      expect(ajv.errors).toBe(null);
    });
  }
});
