import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';

import schema from '../schemas/op.schema.json';
import { generateOps } from '../scripts/generate_op';
import type { OpJson } from '../scripts/types';

const opsFolder = path.resolve(__dirname, '../model/op');

describe('Op JSON', async () => {
  const filesIterator = fs.promises.glob(`${opsFolder}/*.json`);
  const files = await Array.fromAsync(filesIterator);
  const ajv = new Ajv();

  const categories = await Promise.all(
    files.map(async (file) => ({
      file: path.basename(file),
      content: JSON.parse(await fs.promises.readFile(file, 'utf-8')) as OpJson,
    })),
  );

  const allFields = categories.flatMap(({ content }) => content.fields);
  const opNames = new Set(allFields.map((field) => field.name));
  const deprecatedOpNames = new Set(allFields.filter((field) => field.deprecation).map((field) => field.name));

  for (const { file, content } of categories) {
    describe(file, () => {
      it('should follow the op json schema', () => {
        ajv.validate(schema, content);
        expect(ajv.errors).toBe(null);
      });

      it('should not have duplicate ops', () => {
        const names = content.fields.map((field) => field.name);
        expect(new Set(names).size).toBe(names.length);
      });

      it('should only deprecate ops in favor of an existing, non-deprecated op', () => {
        for (const field of content.fields) {
          const replacement = field.deprecation?.replacement;
          if (replacement === undefined) {
            continue;
          }

          expect(replacement, `${field.name} cannot replace itself`).not.toBe(field.name);
          expect([...opNames], `replacement "${replacement}" of "${field.name}" must exist`).toContain(replacement);
          expect(
            [...deprecatedOpNames],
            `replacement "${replacement}" of "${field.name}" must not be deprecated`,
          ).not.toContain(replacement);
        }
      });
    });
  }

  // Ops defined in multiple categories (e.g. `http`) share a single generated constant, so the
  // deprecation cannot differ between their definitions.
  it('should declare the same deprecation for every definition of an op', () => {
    const deprecationsByOp = new Map<string, string[]>();

    for (const field of allFields) {
      const deprecations = deprecationsByOp.get(field.name) ?? [];
      deprecations.push(JSON.stringify(field.deprecation ?? null));
      deprecationsByOp.set(field.name, deprecations);
    }

    for (const [name, deprecations] of deprecationsByOp) {
      expect(new Set(deprecations).size, `definitions of "${name}" declare different deprecations`).toBe(1);
    }
  });
});

describe('generateOps', () => {
  it('marks deprecated ops in the generated JavaScript and Rust constants', async () => {
    const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));
    const opDir = path.join(temporaryDirectory, 'op');
    const jsOutputFilePath = path.join(temporaryDirectory, 'op.ts');
    const rustOutputFilePath = path.join(temporaryDirectory, 'op.rs');
    fs.mkdirSync(opDir);
    fs.writeFileSync(
      path.join(opDir, 'test.json'),
      JSON.stringify({
        name: 'test',
        fields: [
          { name: 'test.new', description: 'The replacement op.' },
          {
            name: 'test.old',
            description: 'The deprecated op.',
            deprecation: { replacement: 'test.new', reason: 'Renamed for consistency' },
          },
          { name: 'test.gone', deprecation: {} },
        ],
      }),
    );

    try {
      await generateOps({ opDir, jsOutputFilePath, rustOutputFilePath });

      const javascript = fs.readFileSync(jsOutputFilePath, 'utf8');
      expect(javascript).toContain(
        ' * @deprecated Use {@link TEST_NEW} (test.new) instead - Renamed for consistency\n',
      );
      expect(javascript).toContain(" * @deprecated\n */\nexport const TEST_GONE = 'test.gone';");
      expect(javascript).toContain("export const TEST_OLD = 'test.old';");

      const rust = fs.readFileSync(rustOutputFilePath, 'utf8');
      expect(rust).toContain('#[deprecated(note = "Use `TEST_NEW` (test.new) instead - Renamed for consistency")]\n');
      expect(rust).toContain('#[deprecated]\npub const TEST_GONE: &str = "test.gone";');
      expect(rust).toContain('/// The replacement op.\npub const TEST_NEW: &str = "test.new";');
    } finally {
      fs.rmSync(temporaryDirectory, { recursive: true, force: true });
    }
  });
});
