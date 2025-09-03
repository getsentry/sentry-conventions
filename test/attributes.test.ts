import fs from 'node:fs';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/attribute.schema.json';
import type { AttributeJson } from '../scripts/types';
import { attributeKeyToFileName, fileNameToAttributeKey } from '../scripts/utils';

const traceFolders = path.resolve(__dirname, '../model/attributes');

describe('attribute json', async () => {
  const filesIterator = await fs.promises.glob(`${traceFolders}/**/*.json`);
  const files = await Array.fromAsync(filesIterator);

  for (const file of files) {
    const name = path.basename(file);
    describe(name, async () => {
      const content: AttributeJson = JSON.parse(await fs.promises.readFile(file, 'utf-8'));

      it('should follow the attribute json schema', () => {
        const ajv = new Ajv();
        ajv.validate(schema, content);
        expect(ajv.errors).toBe(null);
      });

      it('should set pii to false if type is not string or string[]', () => {
        if (content.type !== 'string' && content.type !== 'string[]') {
          expect(content.pii.key).toBe('false');
        }
      });

      it('should have an example that follows the type set unless has_dynamic_suffix is true', () => {
        if (content.has_dynamic_suffix) {
          expect(typeof content.example).toBe('string');
          return;
        }

        if (!content.example) {
          return;
        }
        switch (content.type) {
          case 'integer':
          case 'double':
            expect(typeof content.example).toBe('number');
            break;
          case 'integer[]':
          case 'double[]':
            expect(Array.isArray(content.example)).toBe(true);
            expect((content.example as number[]).every((e: number) => typeof e === 'number')).toBe(true);
            break;
          case 'string':
            expect(typeof content.example).toBe('string');
            break;
          case 'string[]':
            expect(Array.isArray(content.example)).toBe(true);
            expect((content.example as string[]).every((e: string) => typeof e === 'string')).toBe(true);
            break;
          case 'boolean':
            expect(typeof content.example).toBe('boolean');
            break;
          case 'boolean[]':
            expect(Array.isArray(content.example)).toBe(true);
            expect((content.example as boolean[]).every((e: boolean) => typeof e === 'boolean')).toBe(true);
            break;
          default:
            throw new Error('Invalid type');
        }
      });

      it('should follow the correct naming convention', () => {
        expect(fileNameToAttributeKey(name)).toMatch(content.key);
      });

      it('its replacement should exist', async () => {
        if (!content.deprecation?.replacement) {
          return;
        }
        const replacement = content.deprecation?.replacement;
        const replacementFileName = attributeKeyToFileName(replacement);
        let replacementFilePath: string;

        if (replacement.includes('.')) {
          const namespace = replacement.split('.')[0] as string;
          replacementFilePath = path.join(traceFolders, namespace, replacementFileName);
        } else {
          replacementFilePath = path.join(traceFolders, replacementFileName);
        }

        const replacementExists = await fs.promises
          .access(replacementFilePath, fs.constants.F_OK)
          .then(() => true)
          .catch(() => false);
        expect(replacementExists);
      });

      it('all of its aliases should exist', async () => {
        if (!content.alias || content.alias.length === 0) {
          return;
        }

        const missingAliases: string[] = [];

        for (const alias of content.alias) {
          const aliasFileName = attributeKeyToFileName(alias);
          let aliasFilePath: string;

          if (alias.includes('.')) {
            const namespace = alias.split('.')[0] as string;
            aliasFilePath = path.join(traceFolders, namespace, aliasFileName);
          } else {
            aliasFilePath = path.join(traceFolders, aliasFileName);
          }

          const aliasExists = await fs.promises
            .access(aliasFilePath, fs.constants.F_OK)
            .then(() => true)
            .catch(() => false);

          if (!aliasExists) {
            missingAliases.push(alias);
          }
        }

        expect(missingAliases).toEqual([]);
      });

      it('should not be a replacement of itself', async () => {
        if (!content.deprecation?.replacement) {
          return;
        }
        const replacement = content.deprecation?.replacement;
        expect(content.key !== replacement);
      });

      it('should not alias itself', async () => {
        if (!content.alias || content.alias.length === 0) {
          return;
        }
        for (const alias of content.alias) {
          expect(content.key !== alias);
        }
      });
    });
  }
});

describe('alias group consistency', async () => {
  const filesIterator = await fs.promises.glob(`${traceFolders}/**/*.json`);
  const files = await Array.fromAsync(filesIterator);

  // Load all attributes
  const attributes = new Map<string, AttributeJson>();
  for (const file of files) {
    const content: AttributeJson = JSON.parse(await fs.promises.readFile(file, 'utf-8'));
    attributes.set(content.key, content);
  }

  it('aliases should be symmetric', () => {
    // Build alias groups: if X has aliases [Y, Z], then the group is [X, Y, Z]
    const aliasGroups = new Map<string, Set<string>>();
    const processedKeys = new Set<string>();

    for (const [key, content] of attributes) {
      if (processedKeys.has(key)) continue;

      if (!content.alias || content.alias.length === 0) continue;

      // Create the group with the current key and all its aliases
      const group = new Set([key, ...content.alias]);

      // Mark all keys in this group as processed
      for (const groupKey of group) {
        processedKeys.add(groupKey);
      }

      // Store the group using a canonical key (sorted first key)
      const canonicalKey = Array.from(group).sort()[0] as string;
      aliasGroups.set(canonicalKey, group);
    }

    const failedGroups: Array<{ group: string[]; missingAliases: Array<{ key: string; missing: string[] }> }> = [];

    // Validate each group
    for (const [canonicalKey, group] of aliasGroups) {
      const groupArray = Array.from(group).sort();
      const missingAliases: Array<{ key: string; missing: string[] }> = [];

      for (const key of groupArray) {
        const attribute = attributes.get(key);
        if (!attribute) {
          // Key doesn't exist, skip validation for this key
          continue;
        }

        const expectedAliases = groupArray.filter((k) => k !== key).sort();
        const actualAliases = (attribute.alias || []).sort();

        const missing = expectedAliases.filter((alias) => !actualAliases.includes(alias));

        if (missing.length > 0) {
          missingAliases.push({ key, missing });
        }
      }

      if (missingAliases.length > 0) {
        failedGroups.push({
          group: groupArray,
          missingAliases,
        });
      }
    }

    if (failedGroups.length > 0) {
      const errorMessages = failedGroups
        .map(({ group, missingAliases }) => {
          const groupStr = `[${group.join(', ')}]`;
          const missingStr = missingAliases
            .map(({ key, missing }) => `  ${key} is missing aliases: [${missing.join(', ')}]`)
            .join('\n');
          return `Group ${groupStr}:\n${missingStr}`;
        })
        .join('\n\n');

      throw new Error(`Attribute alias relationship should be symmetric:\n\n${errorMessages}`);
    }
  });
});
