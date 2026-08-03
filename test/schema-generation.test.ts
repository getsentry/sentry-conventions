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
const legacyAnchors: Record<string, { root: string; nested?: string }> = {
  'name.schema.json': { root: 'SpanName', nested: 'SpanOperation' },
  'description.schema.json': { root: 'SpanDescription', nested: 'SpanOperation' },
  'op.schema.json': { root: 'SpanOperation', nested: 'Field' },
};

function resolveRootSchema(schema: Record<string, unknown>): Record<string, unknown> {
  if (typeof schema.$ref !== 'string') {
    return schema;
  }

  const definitionName = schema.$ref.replace('#/definitions/', '');
  return (schema.definitions as Record<string, Record<string, unknown>>)[definitionName]!;
}

function collectDescriptions(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.flatMap(collectDescriptions);
  }
  if (value === null || typeof value !== 'object') {
    return [];
  }

  const object = value as Record<string, unknown>;
  return [
    ...(typeof object.description === 'string' ? [object.description] : []),
    ...Object.values(object).flatMap(collectDescriptions),
  ];
}

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
      expect(firstText).not.toMatch(/#\/definitions\/__schema\d+/);
      const schema = JSON.parse(firstText);
      expect(schema.$schema).toBe('http://json-schema.org/draft-07/schema#');
      const rootSchema = resolveRootSchema(schema);
      expect(rootSchema.title).toBe(expectedMetadata[fileName]?.title);
      expect(rootSchema.description).toBe(expectedMetadata[fileName]?.description);
      expect(() => new Ajv().compile(schema)).not.toThrow();

      const legacyAnchor = legacyAnchors[fileName];
      if (legacyAnchor) {
        expect(schema.$ref).toBe(`#/definitions/${legacyAnchor.root}`);
        expect(schema.definitions).toHaveProperty(legacyAnchor.root);
        expect(schema.definitions).toHaveProperty(legacyAnchor.nested!);
      }

      if (fileName === 'attribute.schema.json') {
        // Keep the required structural union, but catch accidental combinatorial expansion.
        expect(firstText.split('\n').length).toBeLessThan(6000);
      }
    }
  });

  it('preserves legacy authoring descriptions', () => {
    const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'schema-descriptions-'));
    tempDirs.push(directory);
    generateSchemas(directory);

    const descriptionsByArtifact = Object.fromEntries(
      schemaArtifacts.map(({ fileName }) => {
        const schema = JSON.parse(fs.readFileSync(path.join(directory, fileName), 'utf-8'));
        return [fileName, collectDescriptions(schema)];
      }),
    );

    expect(descriptionsByArtifact['attribute.schema.json']).toEqual(
      expect.arrayContaining([
        'The name of the attribute, for ex. http.route',
        "How PII scrubbing should be applied to the attribute value. 'auto' scrubs automatically, 'manual' requires manual scrubbing rules, 'never' is never scrubbed. Optionally include a reason about why this mode applies",
        'The sentry-conventions release version',
      ]),
    );
    expect(descriptionsByArtifact['measurements.schema.json']).toEqual(
      expect.arrayContaining([
        'The full name of the measurement, for ex. largest contentful paint',
        'What platform the measurement is collected in',
      ]),
    );
    expect(descriptionsByArtifact['attribute_transformation.schema.json']).toEqual(
      expect.arrayContaining([
        'Attributes consumed by this transformation',
        'Ordered description of the value transformations to apply. This describes behavior; Relay owns the implementation.',
      ]),
    );
  });
});
