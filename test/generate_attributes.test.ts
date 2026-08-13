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
        key: 'legacy.attribute',
        brief: 'The deprecated attribute.',
        type: 'double',
        search_alias: {
          name: 'shared.name',
          type: 'percentage',
          deprecated_aliases: ['older.name'],
        },
        deprecation: { _status: 'normalize' },
      },
      {
        key: 'standalone.deprecated',
        brief: 'A deprecated attribute with a distinct search name.',
        type: 'double',
        search_alias: { name: 'deprecated.search' },
        deprecation: { _status: 'normalize' },
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
      const compactMetadataStart = javascript.indexOf('export const ATTRIBUTE_SEARCH_METADATA');
      const compactMetadataEnd = javascript.indexOf('\n};', compactMetadataStart);
      const compactMetadata = javascript.slice(compactMetadataStart, compactMetadataEnd);

      expect(javascript).toContain('export type AttributeSearchType = AttributeType | SearchAliasType;');
      expect(compactMetadata).toContain(
        '"fallback.attribute": {\n    type: "boolean",\n    brief: "An attribute without explicit search metadata.",\n    deprecationChain: ["fallback.attribute"],',
      );
      expect(compactMetadata).toContain(
        '"shared.name": {\n    type: "byte",\n    brief: "The preferred attribute.",\n    deprecationChain: ["current.attribute","shared.name","old.name","legacy.attribute","older.name"],',
      );
      expect(compactMetadata).toContain(
        '"deprecated.search": {\n    type: "double",\n    brief: "A deprecated attribute with a distinct search name.",\n    deprecationChain: ["standalone.deprecated","deprecated.search"],',
      );
      expect(compactMetadata).not.toContain('"current.attribute": {');
      expect(compactMetadata).not.toContain('"legacy.attribute": {');
      expect(compactMetadata).not.toContain('type: "percentage"');

      const searchKeys = [...compactMetadata.matchAll(/^  "([^"]+)": \{$/gm)].map((match) => match[1]);
      expect(searchKeys).toEqual([...searchKeys].sort());

      const compactPropertyNames = [...compactMetadata.matchAll(/^    (\w+):/gm)].map((match) => match[1]);
      expect(new Set(compactPropertyNames)).toEqual(new Set(['type', 'brief', 'deprecationChain']));
    } finally {
      fs.rmSync(temporaryDirectory, { recursive: true });
    }
  });
});
