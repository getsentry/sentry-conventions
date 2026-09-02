import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { generateAttributes } from '../scripts/generate_attributes';

describe('generateAttributes', () => {
  it('accepts custom paths for isolated generation', () => {
    expect(generateAttributes).toHaveLength(1);
  });

  it('generates multiple examples while retaining the first legacy example', async () => {
    const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));
    const attributesDir = path.join(temporaryDirectory, 'attributes');
    const jsOutputFilePath = path.join(temporaryDirectory, 'attributes.ts');
    const pythonOutputFilePath = path.join(temporaryDirectory, 'attributes.py');
    fs.mkdirSync(attributesDir);
    fs.writeFileSync(
      path.join(attributesDir, 'test__attribute.json'),
      JSON.stringify({
        key: 'test.attribute',
        brief: 'An attribute used to test generation.',
        type: 'string',
        apply_scrubbing: { key: 'never' },
        is_in_otel: false,
        visibility: 'public',
        examples: ['first', 'second'],
      }),
    );
    fs.writeFileSync(
      path.join(attributesDir, 'test__array.json'),
      JSON.stringify({
        key: 'test.array',
        brief: 'An array-valued attribute used to test generation.',
        type: 'string[]',
        apply_scrubbing: { key: 'never' },
        is_in_otel: false,
        visibility: 'public',
        examples: [['first', 'second'], ['third']],
      }),
    );

    try {
      await generateAttributes({ attributesDir, jsOutputFilePath, pythonOutputFilePath });

      const javascript = fs.readFileSync(jsOutputFilePath, 'utf8');
      expect(javascript).toContain('* @example "first"');
      expect(javascript).toContain('* @example "second"');
      expect(javascript).toContain('example: "first",');
      expect(javascript).toContain('examples: ["first","second"],');
      expect(javascript).toContain('example: ["first","second"],');
      expect(javascript).toContain('examples: [["first","second"],["third"]],');

      const python = fs.readFileSync(pythonOutputFilePath, 'utf8');
      expect(python.indexOf('examples: Optional[List[AttributeValue]]')).toBeGreaterThan(
        python.indexOf('additional_context: Optional[List[str]]'),
      );
      expect(python).toContain('Example: "first"');
      expect(python).toContain('Example: "second"');
      expect(python).toContain('example="first",');
      expect(python).toContain('examples=["first", "second"],');
      expect(python).toContain('example=["first", "second"],');
      expect(python).toContain('examples=[["first", "second"], ["third"]],');
    } finally {
      fs.rmSync(temporaryDirectory, { recursive: true });
    }
  });

  it('generates search metadata keyed by search name with its deprecation chain', async () => {
    const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));
    const attributesDir = path.join(temporaryDirectory, 'attributes');
    const jsOutputFilePath = path.join(temporaryDirectory, 'attributes.ts');
    const pythonOutputFilePath = path.join(temporaryDirectory, 'attributes.py');
    fs.mkdirSync(attributesDir);

    const attributes = [
      {
        key: 'fallback.attribute',
        brief: 'An attribute without explicit search metadata.',
        type: 'boolean',
      },
      {
        key: 'live.attribute',
        brief: 'A live attribute whose search alias differs from its key.',
        type: 'string',
        search_alias: { name: 'live.search' },
      },
      {
        key: 'sentry.item',
        brief: 'A sentry-prefixed attribute with a distinct search alias.',
        type: 'string',
        search_alias: { name: 'item.search' },
      },
      {
        key: 'aws.request_id',
        brief: 'The live AWS request id.',
        type: 'string',
      },
      {
        key: 'aws.request.id',
        brief: 'The deprecated dotted AWS request id.',
        type: 'string',
        deprecation: { replacement: 'aws.request_id', _status: 'backfill' },
      },
      {
        key: 'current.attribute',
        brief: 'The preferred attribute.',
        type: 'integer',
        search_alias: {
          name: 'shared.name',
          type: 'byte',
          deprecated_aliases: ['old.name', 'current.attribute'],
        },
      },
      {
        key: 'shared.name',
        brief: 'The deprecated attribute.',
        type: 'double',
        deprecation: { _status: 'normalize' },
      },
      {
        key: 'standalone.deprecated',
        brief: 'A deprecated attribute with a distinct search name.',
        type: 'double',
        visibility: 'internal',
        search_alias: { name: 'deprecated.search' },
        deprecation: { replacement: 'fallback.attribute', _status: null },
      },
    ];

    for (const attribute of attributes) {
      fs.writeFileSync(
        path.join(attributesDir, `${attribute.key.replaceAll('.', '__')}.json`),
        JSON.stringify({
          apply_scrubbing: { key: 'never' },
          is_in_otel: false,
          visibility: 'public',
          ...attribute,
        }),
      );
    }

    try {
      await generateAttributes({ attributesDir, jsOutputFilePath, pythonOutputFilePath });

      const javascript = fs.readFileSync(jsOutputFilePath, 'utf8');
      const search = fs.readFileSync(path.join(temporaryDirectory, 'search.ts'), 'utf8');
      const compactMetadataStart = search.indexOf('export const ATTRIBUTE_SEARCH_METADATA');
      const compactMetadataEnd = search.indexOf('\n};', compactMetadataStart);
      const compactMetadata = search.slice(compactMetadataStart, compactMetadataEnd);

      expect(javascript).not.toContain('AttributeSearchType');
      expect(javascript).not.toContain('ATTRIBUTE_SEARCH_METADATA');
      expect(search).toContain(
        'export type AttributeSearchType = attributes.AttributeType | attributes.SearchAliasType;',
      );
      expect(search).toContain('internal?: true;');
      expect(search).toContain("export const SEARCH_SHARED_NAME = 'shared.name';");
      expect(search).toContain("export const SEARCH_DEPRECATED_SEARCH = 'deprecated.search';");
      expect(search).toContain("export const SEARCH_OLD_NAME = 'old.name';");
      expect(search).toContain("export const SEARCH_CURRENT_ATTRIBUTE = 'current.attribute';");
      expect(search).toContain("export const SEARCH_STANDALONE_DEPRECATED = 'standalone.deprecated';");
      expect(search).toContain("export const SEARCH_FALLBACK_ATTRIBUTE = 'fallback.attribute';");
      expect(search).toContain("export const SEARCH_LIVE_SEARCH = 'live.search';");
      expect(search).toContain("export const SEARCH_LIVE_ATTRIBUTE = 'live.attribute';");
      expect(search).toContain("export const SEARCH_ITEM_SEARCH = 'item.search';");
      expect(search).toContain("export const SEARCH_ITEM = 'sentry.item';");
      expect(search).not.toContain('export const SEARCH_SENTRY_ITEM');
      expect(search).toContain("export const SEARCH_AWS_REQUEST__ID = 'aws.request_id';");
      expect(search).toContain("export const SEARCH_AWS_REQUEST_ID = 'aws.request.id';");
      expect(search).not.toContain('export const __SEARCH_AWS_REQUEST_ID');
      expect(search).toContain(
        ' * @deprecated Use {@link SEARCH_SHARED_NAME} (`shared.name`) instead\n */\nexport const SEARCH_OLD_NAME',
      );
      expect(search).toContain(
        ' * @deprecated Use {@link SEARCH_SHARED_NAME} (`shared.name`) instead\n */\nexport const SEARCH_CURRENT_ATTRIBUTE',
      );
      expect(search).toContain(
        ' * @deprecated Use {@link SEARCH_DEPRECATED_SEARCH} (`deprecated.search`) instead\n */\nexport const SEARCH_STANDALONE_DEPRECATED',
      );
      expect(search).toContain(
        ' * @deprecated Use {@link SEARCH_LIVE_SEARCH} (`live.search`) instead\n */\nexport const SEARCH_LIVE_ATTRIBUTE',
      );
      expect(search).toContain(
        ' * @deprecated Use {@link SEARCH_ITEM_SEARCH} (`item.search`) instead\n */\nexport const SEARCH_ITEM =',
      );
      expect(search).toContain(
        ' * @deprecated Use {@link SEARCH_AWS_REQUEST__ID} (`aws.request_id`) instead\n */\nexport const SEARCH_AWS_REQUEST_ID',
      );
      expect(search).not.toMatch(/@deprecated[^*]*\*\/\s*export const SEARCH_SHARED_NAME/);
      expect(search).not.toMatch(/@deprecated[^*]*\*\/\s*export const SEARCH_DEPRECATED_SEARCH/);
      expect(search).not.toMatch(/@deprecated[^*]*\*\/\s*export const SEARCH_FALLBACK_ATTRIBUTE/);
      expect(search).not.toMatch(/@deprecated[^*]*\*\/\s*export const SEARCH_LIVE_SEARCH/);
      expect(search).not.toMatch(/@deprecated[^*]*\*\/\s*export const SEARCH_ITEM_SEARCH/);
      expect(search).not.toMatch(/@deprecated[^*]*\*\/\s*export const SEARCH_AWS_REQUEST__ID/);
      expect(search).toContain(
        'export type AttributeSearchName = typeof SEARCH_AWS_REQUEST_ID | typeof SEARCH_AWS_REQUEST__ID | typeof SEARCH_CURRENT_ATTRIBUTE | typeof SEARCH_DEPRECATED_SEARCH | typeof SEARCH_FALLBACK_ATTRIBUTE | typeof SEARCH_ITEM_SEARCH | typeof SEARCH_LIVE_ATTRIBUTE | typeof SEARCH_LIVE_SEARCH | typeof SEARCH_OLD_NAME | typeof SEARCH_ITEM | typeof SEARCH_SHARED_NAME | typeof SEARCH_STANDALONE_DEPRECATED;',
      );
      expect(search).toContain('export const ATTRIBUTE_SEARCH_METADATA: Record<string, AttributeSearchMetadata>');
      expect(compactMetadata).toContain(
        '"fallback.attribute": {\n    canonicalName: "fallback.attribute",\n    type: "boolean",\n    brief: "An attribute without explicit search metadata.",\n    deprecationChain: ["fallback.attribute"],',
      );
      expect(compactMetadata).toContain(
        '"shared.name": {\n    canonicalName: "current.attribute",\n    type: "byte",\n    brief: "The preferred attribute.",\n    deprecationChain: ["current.attribute","shared.name","old.name"],',
      );
      expect(compactMetadata).toContain(
        '"deprecated.search": {\n    canonicalName: "fallback.attribute",\n    type: "double",\n    brief: "A deprecated attribute with a distinct search name.",\n    internal: true,\n    deprecationChain: ["standalone.deprecated","deprecated.search"],',
      );
      expect(compactMetadata).not.toContain('"current.attribute": {');
      expect(compactMetadata).not.toContain('visibility:');

      const searchKeys = [...compactMetadata.matchAll(/^  "([^"]+)": \{$/gm)].map((match) => match[1]);
      expect(searchKeys).toEqual([...searchKeys].sort());

      const compactPropertyNames = [...compactMetadata.matchAll(/^    (\w+):/gm)].map((match) => match[1]);
      expect(new Set(compactPropertyNames)).toEqual(
        new Set(['canonicalName', 'type', 'brief', 'internal', 'deprecationChain']),
      );
    } finally {
      fs.rmSync(temporaryDirectory, { recursive: true });
    }
  });

  it('throws when two attributes share the same search alias', async () => {
    const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));
    const attributesDir = path.join(temporaryDirectory, 'attributes');
    const jsOutputFilePath = path.join(temporaryDirectory, 'attributes.ts');
    const pythonOutputFilePath = path.join(temporaryDirectory, 'attributes.py');
    fs.mkdirSync(attributesDir);

    for (const key of ['first.attribute', 'second.attribute']) {
      fs.writeFileSync(
        path.join(attributesDir, `${key.replaceAll('.', '__')}.json`),
        JSON.stringify({
          key,
          brief: `Attribute ${key}`,
          type: 'string',
          apply_scrubbing: { key: 'never' },
          is_in_otel: false,
          visibility: 'public',
          search_alias: { name: 'duplicate.alias' },
        }),
      );
    }

    try {
      await expect(generateAttributes({ attributesDir, jsOutputFilePath, pythonOutputFilePath })).rejects.toThrow(
        'Duplicate search aliases found:\n  "duplicate.alias": "first.attribute", "second.attribute"',
      );
    } finally {
      fs.rmSync(temporaryDirectory, { recursive: true });
    }
  });
});
