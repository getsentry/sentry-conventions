import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { ATTRIBUTE_MIGRATIONS } from '../javascript/sentry-conventions/src/migrations';
import type { AttributeJson } from '../scripts/types';
import { attributeKeyToFileName } from '../scripts/utils';

const attributesFolder = path.resolve(__dirname, '../model/attributes');

async function readAttribute(key: string): Promise<AttributeJson> {
  const fileName = attributeKeyToFileName(key);
  const filePath = key.includes('.')
    ? path.join(attributesFolder, key.split('.')[0] as string, fileName)
    : path.join(attributesFolder, fileName);
  return JSON.parse(await fs.promises.readFile(filePath, 'utf-8')) as AttributeJson;
}

describe('attribute migration references', () => {
  it('migration source and target refs match registered migrations', async () => {
    for (const migration of ATTRIBUTE_MIGRATIONS) {
      for (const source of migration.sources) {
        const sourceAttribute = await readAttribute(source);
        expect(sourceAttribute.deprecation?.replacement).toBe(migration.replacement);
        expect(sourceAttribute.deprecation?._status).toBeOneOf(['backfill', 'normalize']);
        expect(sourceAttribute.migration?.source_for).toContain(migration.id);
      }

      const replacementAttribute = await readAttribute(migration.replacement);
      expect(replacementAttribute.deprecation).toBeUndefined();
      expect(replacementAttribute.migration?.target_of).toContain(migration.id);
    }
  });

  it('all source_for and target_of refs point to registered migrations', async () => {
    const migrationIds = new Set(ATTRIBUTE_MIGRATIONS.map((migration) => migration.id));
    const filesIterator = await fs.promises.glob(`${attributesFolder}/**/*.json`);
    const files = await Array.fromAsync(filesIterator);

    for (const file of files) {
      const attribute = JSON.parse(await fs.promises.readFile(file, 'utf-8')) as AttributeJson;
      for (const migrationId of attribute.migration?.source_for ?? []) {
        expect(migrationIds.has(migrationId), `${attribute.key} source_for ${migrationId}`).toBe(true);
      }
      for (const migrationId of attribute.migration?.target_of ?? []) {
        expect(migrationIds.has(migrationId), `${attribute.key} target_of ${migrationId}`).toBe(true);
      }
    }
  });
});
