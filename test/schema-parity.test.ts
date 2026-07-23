import Ajv from 'ajv';
import { describe, expect, it } from 'vitest';
import attributeJsonSchema from '../schemas/attribute.schema.json';
import descriptionJsonSchema from '../schemas/description.schema.json';
import measurementJsonSchema from '../schemas/measurements.schema.json';
import nameJsonSchema from '../schemas/name.schema.json';
import opJsonSchema from '../schemas/op.schema.json';
import transformationJsonSchema from '../schemas/attribute_transformation.schema.json';
import {
  attributeSchema,
  attributeTransformationSchema,
  descriptionSchema,
  measurementSchema,
  nameSchema,
  opSchema,
} from '../schemas';

type SafeParser = {
  safeParse(value: unknown): { success: boolean };
};

function expectParity(zodSchema: SafeParser, jsonSchema: object, value: unknown) {
  const zodResult = zodSchema.safeParse(value).success;
  const ajvResult = new Ajv().validate(jsonSchema, value) as boolean;
  expect(ajvResult).toBe(zodResult);
}

const baseAttribute = {
  key: 'test.attribute',
  brief: 'Test attribute',
  type: 'string',
  apply_scrubbing: { key: 'never' },
  is_in_otel: false,
  visibility: 'public',
};

const matchingExamples: Array<[string, unknown]> = [
  ['string', 'value'],
  ['boolean', true],
  ['integer', 1.5],
  ['double', 1.5],
  ['string[]', ['value']],
  ['boolean[]', [true]],
  ['integer[]', [1]],
  ['double[]', [1.5]],
  ['any', ['existing', 'attribute', 'value']],
];

const mismatchedExamples: Array<[string, unknown]> = [
  ['string', 1],
  ['boolean', 'true'],
  ['integer', '1'],
  ['double', false],
  ['string[]', [1]],
  ['boolean[]', ['true']],
  ['integer[]', ['1']],
  ['double[]', [false]],
  ['any', { arbitrary: 'object' }],
];

const pluralDynamicAttribute = {
  ...baseAttribute,
  key: 'test.<key>',
  has_dynamic_suffix: true,
  examples: ['suffix'],
};

const missingDeprecationStatusAttribute = {
  ...baseAttribute,
  deprecation: { replacement: 'test.replacement' },
};

const attributeFixtures = [
  baseAttribute,
  ...matchingExamples.flatMap(([type, example]) => [
    { ...baseAttribute, type, example },
    { ...baseAttribute, type, examples: [example] },
  ]),
  ...mismatchedExamples.flatMap(([type, example]) => [
    { ...baseAttribute, type, example },
    { ...baseAttribute, type, examples: [example] },
  ]),
  { ...baseAttribute, examples: [] },
  { ...baseAttribute, example: 'one', examples: ['two'] },
  { ...baseAttribute, unknown: true },
  { ...baseAttribute, brief: undefined },
  { ...baseAttribute, type: 'string[]', examples: [[]] },
  { ...baseAttribute, key: 'test.<key>', has_dynamic_suffix: true },
  { ...baseAttribute, key: 'test.<key>', has_dynamic_suffix: true, example: 'suffix' },
  pluralDynamicAttribute,
  { ...baseAttribute, key: 'test.<key>', has_dynamic_suffix: true, example: 1 },
  missingDeprecationStatusAttribute,
  {
    ...baseAttribute,
    deprecation: { _status: 'transform', replacement: 'test.replacement' },
  },
  {
    ...baseAttribute,
    deprecation: {
      _status: 'transform',
      replacement: 'test.replacement',
      transformation: 'test_to_replacement',
    },
  },
];

const nameOperation = {
  brief: 'HTTP',
  is_in_otel: false,
  ops: ['http.client'],
  templates: ['HTTP'],
};

const descriptionOperation = {
  brief: 'HTTP',
  ops: ['http.client'],
  templates: ['{{http.request.method}}'],
};

const transformation = {
  id: 'old_to_new',
  brief: 'Convert',
  inputs: [{ attribute: 'old' }],
  outputs: [{ attribute: 'new' }],
  actions: ['Copy'],
  examples: [{ name: 'copy', input: { old: 1 }, output: { new: 1 } }],
};

describe('generated schema parity', () => {
  it.each(attributeFixtures)('matches attribute validation for fixture %#', (value) => {
    expectParity(attributeSchema, attributeJsonSchema, value);
  });

  it('accepts plural dynamic-suffix examples', () => {
    expect(attributeSchema.safeParse(pluralDynamicAttribute).success).toBe(true);
    expect(new Ajv().validate(attributeJsonSchema, pluralDynamicAttribute)).toBe(true);
  });

  it('rejects a deprecation missing _status', () => {
    expect(attributeSchema.safeParse(missingDeprecationStatusAttribute).success).toBe(false);
    expect(new Ajv().validate(attributeJsonSchema, missingDeprecationStatusAttribute)).toBe(false);
  });

  it.each([
    { brief: 'HTTP names', operations: [nameOperation] },
    {
      brief: 'HTTP names',
      operations: [{ ...nameOperation, is_in_otel: true, otel_notes: '' }],
    },
    {
      brief: 'HTTP names',
      operations: [{ ...nameOperation, is_in_otel: true, otel_notes: undefined }],
    },
    {
      brief: 'HTTP names',
      operations: [{ ...nameOperation, unexpected: true }],
    },
    { operations: [nameOperation] },
  ])('matches name validation for fixture %#', (value) => {
    expectParity(nameSchema, nameJsonSchema, value);
  });

  it.each([
    { brief: 'Descriptions', operations: [descriptionOperation] },
    { brief: 'Descriptions', operations: [] },
    { brief: 'Descriptions', operations: [{ ...descriptionOperation, ops: [] }] },
    { brief: 'Descriptions', operations: [{ ...descriptionOperation, templates: [] }] },
    { brief: 'Descriptions', operations: [{ ...descriptionOperation, unexpected: true }] },
    { operations: [descriptionOperation] },
  ])('matches description validation for fixture %#', (value) => {
    expectParity(descriptionSchema, descriptionJsonSchema, value);
  });

  it.each([
    transformation,
    { ...transformation, id: 'Old-To-New' },
    { ...transformation, inputs: [] },
    { ...transformation, outputs: [] },
    { ...transformation, actions: [] },
    { ...transformation, examples: [] },
    { ...transformation, unexpected: true },
    { ...transformation, brief: undefined },
  ])('matches transformation validation for fixture %#', (value) => {
    expectParity(attributeTransformationSchema, transformationJsonSchema, value);
  });

  it.each([
    {
      key: 'lcp',
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'web',
    },
    {
      key: 'lcp',
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'desktop',
    },
    {
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'web',
    },
    {
      key: 'lcp',
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'web',
      unexpected: true,
    },
  ])('matches measurement validation for fixture %#', (value) => {
    expectParity(measurementSchema, measurementJsonSchema, value);
  });

  it.each([
    { name: 'http', fields: [{ name: 'http.client' }] },
    { name: 'http', fields: [] },
    { fields: [{ name: 'http.client' }] },
    { name: 'http', fields: [{ description: 'missing name' }] },
    { name: 'http', fields: [], unexpected: true },
  ])('matches op validation for fixture %#', (value) => {
    expectParity(opSchema, opJsonSchema, value);
  });
});
