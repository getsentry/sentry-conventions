import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/measurements.schema.json';

const traceFolders = path.resolve(__dirname, '../model/measurements');
const attributeFolder = path.resolve(__dirname, '../model/attributes');

function attribute_path(key: string): string {
  // Replace angle brackets for Windows path safety
  const fileKey = key.replaceAll('<', '[').replaceAll('>', ']');
  // Create the directory structure based on the key
  const parts = fileKey.split('.');
  let filePath: string;

  if (parts.length === 1) {
    // Handle simple keys like 'replay_id'
    filePath = path.join(attributeFolder, `${fileKey}.json`);
  } else {
    // Handle dotted keys like 'http.route'
    const dirPath = path.join(attributeFolder, parts[0] ?? '');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    // Convert rest parts to use double underscores instead of dots
    const fileName = parts.join('__');
    filePath = path.join(dirPath, `${fileName}.json`);
  }

  return filePath;
}

describe('measurements json', async () => {
  const filesIterator = fs.promises.glob(`${traceFolders}/**/*.json`);
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

      it('should have a valid, non-deprecated attribute', async () => {
        const attribute = content.attribute;

        if (attribute !== undefined) {
          const attributeContent = JSON.parse(await fs.promises.readFile(attribute_path(attribute), 'utf-8'));
          const deprecation = attributeContent.deprecation;
          if (deprecation !== undefined) {
            expect(deprecation.replacement).toBe(undefined);
          }
        }
      });
    });
  }
});
