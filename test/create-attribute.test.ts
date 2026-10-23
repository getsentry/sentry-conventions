import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

const require = createRequire(import.meta.url);
const scriptPath = path.resolve(__dirname, '../scripts/create_attribute.ts');
const schemaPath = path.resolve(__dirname, '../schemas/attribute.schema.json');

describe('create attribute CLI', () => {
  it.each([
    { key: 'mcp.tool.result.<key>.content', hasDynamicSuffix: false },
    { key: 'mcp.request.argument.<key>', hasDynamicSuffix: true },
  ])('only marks a trailing placeholder as a dynamic suffix: $key', ({ key, hasDynamicSuffix }) => {
    const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));

    try {
      fs.mkdirSync(path.join(temporaryDirectory, 'schemas'));
      fs.copyFileSync(schemaPath, path.join(temporaryDirectory, 'schemas', 'attribute.schema.json'));

      const result = spawnSync(
        process.execPath,
        [
          require.resolve('tsx/cli'),
          scriptPath,
          '--key',
          key,
          '--description',
          'An attribute used to test dynamic placeholders.',
          '--type',
          'string',
          '--apply_scrubbing',
          'auto',
          '--is_in_otel',
          'false',
          '--visibility',
          'public',
          '--examples',
          '["example"]',
        ],
        {
          cwd: temporaryDirectory,
          // Prevent the optional PR lookup from invoking gh or accessing the network.
          env: { ...process.env, PATH: temporaryDirectory },
          // Cancel the documentation prompt after the definition has been written.
          input: '\u0003',
          encoding: 'utf8',
          timeout: 10_000,
        },
      );

      expect(result.error).toBeUndefined();
      expect(result.status, result.stderr).toBe(0);
      const fileName = `${key.replaceAll('.', '__').replace('<key>', '[key]')}.json`;
      const attribute = JSON.parse(
        fs.readFileSync(path.join(temporaryDirectory, 'model', 'attributes', 'mcp', fileName), 'utf8'),
      );
      expect(attribute.key).toBe(key);
      if (hasDynamicSuffix) {
        expect(attribute.has_dynamic_suffix).toBe(true);
      } else {
        expect(attribute).not.toHaveProperty('has_dynamic_suffix');
      }
    } finally {
      fs.rmSync(temporaryDirectory, { recursive: true });
    }
  });
});
