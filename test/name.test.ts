import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/name.schema.json';

const namesFolder = path.resolve(__dirname, '../model/name');

describe('Name JSON', async () => {
  const filesIterator = fs.promises.glob(`${namesFolder}/*.json`);
  const files = await Array.fromAsync(filesIterator);
  const ajv = new Ajv();

  for (const file of files) {
    const name = path.basename(file);

    it(name, async () => {
      const content = JSON.parse(await fs.promises.readFile(file, 'utf-8'));

      ajv.validate(schema, content);
      expect(ajv.errors).toBe(null);
    });
  }
});
