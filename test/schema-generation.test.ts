import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import Ajv from 'ajv';
import { afterEach, describe, expect, it } from 'vitest';
import { generateSchemas } from '../scripts/generate_schemas';
import { schemaArtifacts } from '../schemas/artifacts';

const tempDirs: string[] = [];
const expectedMetadata: Record<string, { title: string; description?: string }> = {
  'attribute.schema.json': {
    title: 'Sentry Span Attribute Schema',
    description: "Describes an attribute and how it's meant to be used",
  },
  'name.schema.json': { title: 'SpanName' },
  'description.schema.json': { title: 'SpanDescription' },
  'op.schema.json': { title: 'SpanOperation' },
  'measurements.schema.json': {
    title: 'Sentry Span Measurement Schema',
    description: "Describes an measurement and it's fields",
  },
  'attribute_transformation.schema.json': {
    title: 'Sentry Attribute Transformation Schema',
    description: 'Describes how one or more deprecated attributes are transformed into replacement attributes',
  },
};

afterEach(() => {
  for (const directory of tempDirs.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe('generateSchemas', () => {
  it('writes deterministic valid Draft 7 artifacts', () => {
    const first = fs.mkdtempSync(path.join(os.tmpdir(), 'schemas-first-'));
    const second = fs.mkdtempSync(path.join(os.tmpdir(), 'schemas-second-'));
    tempDirs.push(first, second);

    generateSchemas(first);
    generateSchemas(second);

    for (const { fileName } of schemaArtifacts) {
      const firstText = fs.readFileSync(path.join(first, fileName), 'utf-8');
      const secondText = fs.readFileSync(path.join(second, fileName), 'utf-8');
      expect(firstText).toBe(secondText);
      expect(firstText.endsWith('\n')).toBe(true);
      const schema = JSON.parse(firstText);
      expect(schema.$schema).toBe('http://json-schema.org/draft-07/schema#');
      expect(schema.title).toBe(expectedMetadata[fileName]?.title);
      expect(schema.description).toBe(expectedMetadata[fileName]?.description);
      expect(() => new Ajv().compile(schema)).not.toThrow();
    }
  });
});
