import { spawnSync } from 'node:child_process';
import fs from 'node:fs';
import { createRequire } from 'node:module';
import os from 'node:os';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { parseNamespaceReadme } from '../scripts/namespaces';

const require = createRequire(import.meta.url);
const scriptPath = path.resolve(__dirname, '../scripts/create_attribute.ts');
const schemaPath = path.resolve(__dirname, '../schemas/attribute.schema.json');

function withTemporaryRepository(callback: (temporaryDirectory: string) => void) {
  const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));

  try {
    fs.mkdirSync(path.join(temporaryDirectory, 'schemas'));
    fs.copyFileSync(schemaPath, path.join(temporaryDirectory, 'schemas', 'attribute.schema.json'));
    callback(temporaryDirectory);
  } finally {
    fs.rmSync(temporaryDirectory, { recursive: true });
  }
}

function createAttribute(temporaryDirectory: string, key: string, extraArgs: string[] = []) {
  return spawnSync(
    process.execPath,
    [
      require.resolve('tsx/cli'),
      scriptPath,
      '--key',
      key,
      '--description',
      'An attribute used to test the create attribute CLI.',
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
      ...extraArgs,
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
}

describe('create attribute CLI', () => {
  it.each([
    { key: 'mcp.tool.result.<key>.content', hasDynamicSuffix: false },
    { key: 'mcp.request.argument.<key>', hasDynamicSuffix: true },
  ])('only marks a trailing placeholder as a dynamic suffix: $key', ({ key, hasDynamicSuffix }) => {
    withTemporaryRepository((temporaryDirectory) => {
      fs.mkdirSync(path.join(temporaryDirectory, 'model', 'attributes', 'mcp'), { recursive: true });

      const result = createAttribute(temporaryDirectory, key);

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
    });
  });

  it('does not write a README for an existing namespace', () => {
    withTemporaryRepository((temporaryDirectory) => {
      fs.mkdirSync(path.join(temporaryDirectory, 'model', 'attributes', 'mcp'), { recursive: true });

      const result = createAttribute(temporaryDirectory, 'mcp.test', ['--namespace_brief', 'Ignored.']);

      expect(result.status, result.stderr).toBe(0);
      expect(fs.existsSync(path.join(temporaryDirectory, 'model', 'attributes', 'mcp', 'README.md'))).toBe(false);
    });
  });

  it('writes a README when the key starts a new namespace', () => {
    withTemporaryRepository((temporaryDirectory) => {
      const result = createAttribute(temporaryDirectory, 'newspace.test', [
        '--namespace_brief',
        'A namespace used to test the create attribute CLI.',
      ]);

      expect(result.status, result.stderr).toBe(0);
      const readme = parseNamespaceReadme(
        fs.readFileSync(path.join(temporaryDirectory, 'model', 'attributes', 'newspace', 'README.md'), 'utf8'),
      );
      expect(readme.frontmatter).toEqual({
        namespace: 'newspace',
        brief: 'A namespace used to test the create attribute CLI.',
      });
    });
  });

  it('requires a namespace brief when the key starts a new namespace', () => {
    withTemporaryRepository((temporaryDirectory) => {
      const result = createAttribute(temporaryDirectory, 'newspace.test');

      expect(result.status).toBe(1);
      expect(result.stderr).toContain('--namespace_brief');
      expect(fs.existsSync(path.join(temporaryDirectory, 'model', 'attributes', 'newspace'))).toBe(false);
    });
  });
});
