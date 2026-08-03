import fs from 'node:fs';
import path from 'node:path';
import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';
import opJsonSchema from '../schemas/op.schema.json';
import { opSchema } from '../schemas';
import { readJsonFile } from '../scripts/read_json';

const opFolder = path.resolve(__dirname, '../model/op');

describe('op JSON', async () => {
  const files = await Array.fromAsync(fs.promises.glob(`${opFolder}/*.json`));

  for (const file of files) {
    it(`${path.basename(file)} follows the canonical and generated schemas`, () => {
      const content = readJsonFile(file, opSchema);
      expect(new Ajv().validate(opJsonSchema, content)).toBe(true);
    });
  }
});
