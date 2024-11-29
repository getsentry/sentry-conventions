import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/measurements.schema.json';

const traceFolders = path.resolve(__dirname, '../model/measurements');

describe('measurements json', async () => {
  const filesIterator = await fs.promises.glob(`${traceFolders}/**/*.json`);
  const files = await Array.fromAsync(filesIterator);

  for (const file of files) {
    const name = path.basename(file);
    describe(name, async () => {
      const content = JSON.parse(await fs.promises.readFile(file, 'utf-8'));

      it('should follow the measurements json schema', () => {
        const ajv = new Ajv();
        ajv.validate(schema, content);
        expect(ajv.errors).toBe(null);
      });
    });
  }
});
