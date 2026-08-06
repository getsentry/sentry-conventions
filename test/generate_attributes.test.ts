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
});
