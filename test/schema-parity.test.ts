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

type Fixture = {
  name: string;
  value: unknown;
  expected: boolean;
};

function expectParity(zodSchema: SafeParser, jsonSchema: object, value: unknown, expected: boolean) {
  const zodResult = zodSchema.safeParse(value).success;
  const ajvResult = new Ajv().validate(jsonSchema, value) as boolean;
  expect(zodResult).toBe(expected);
  expect(ajvResult).toBe(expected);
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

const attributeFixtures: Fixture[] = [
  { name: 'accepts a base attribute', value: baseAttribute, expected: true },
  ...matchingExamples.flatMap(([type, example]) => [
    {
      name: `accepts a matching singular ${type} example`,
      value: { ...baseAttribute, type, example },
      expected: true,
    },
    {
      name: `accepts matching plural ${type} examples`,
      value: { ...baseAttribute, type, examples: [example] },
      expected: true,
    },
  ]),
  ...mismatchedExamples.flatMap(([type, example]) => [
    {
      name: `rejects a mismatched singular ${type} example`,
      value: { ...baseAttribute, type, example },
      expected: false,
    },
    {
      name: `rejects mismatched plural ${type} examples`,
      value: { ...baseAttribute, type, examples: [example] },
      expected: false,
    },
  ]),
  {
    name: 'rejects an empty examples list',
    value: { ...baseAttribute, examples: [] },
    expected: false,
  },
  {
    name: 'rejects singular and plural examples together',
    value: { ...baseAttribute, example: 'one', examples: ['two'] },
    expected: false,
  },
  { name: 'rejects an unknown attribute property', value: { ...baseAttribute, unknown: true }, expected: false },
  { name: 'rejects a missing attribute property', value: { ...baseAttribute, brief: undefined }, expected: false },
  {
    name: 'accepts an empty array-valued example',
    value: { ...baseAttribute, type: 'string[]', examples: [[]] },
    expected: true,
  },
  {
    name: 'rejects a dynamic attribute without examples',
    value: { ...baseAttribute, key: 'test.<key>', has_dynamic_suffix: true },
    expected: false,
  },
  {
    name: 'accepts a dynamic attribute singular example',
    value: { ...baseAttribute, key: 'test.<key>', has_dynamic_suffix: true, example: 'suffix' },
    expected: true,
  },
  { name: 'accepts dynamic attribute plural examples', value: pluralDynamicAttribute, expected: true },
  {
    name: 'rejects a non-string dynamic attribute example',
    value: { ...baseAttribute, key: 'test.<key>', has_dynamic_suffix: true, example: 1 },
    expected: false,
  },
  {
    name: 'rejects apply-scrubbing without a key',
    value: { ...baseAttribute, apply_scrubbing: {} },
    expected: false,
  },
  {
    name: 'rejects an unknown apply-scrubbing property',
    value: { ...baseAttribute, apply_scrubbing: { key: 'never', unknown: true } },
    expected: false,
  },
  {
    name: 'rejects a changelog entry without a version',
    value: { ...baseAttribute, changelog: [{ description: 'Changed' }] },
    expected: false,
  },
  {
    name: 'rejects an unknown changelog entry property',
    value: { ...baseAttribute, changelog: [{ version: 'next', unknown: true }] },
    expected: false,
  },
  {
    name: 'rejects deprecation without a status',
    value: missingDeprecationStatusAttribute,
    expected: false,
  },
  {
    name: 'rejects an unknown deprecation property',
    value: { ...baseAttribute, deprecation: { _status: null, unknown: true } },
    expected: false,
  },
  {
    name: 'rejects transform deprecation without a transformation',
    value: {
      ...baseAttribute,
      deprecation: { _status: 'transform', replacement: 'test.replacement' },
    },
    expected: false,
  },
  {
    name: 'accepts transform deprecation with a transformation',
    value: {
      ...baseAttribute,
      deprecation: {
        _status: 'transform',
        replacement: 'test.replacement',
        transformation: 'test_to_replacement',
      },
    },
    expected: true,
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

const nameFixtures: Fixture[] = [
  { name: 'accepts a name document', value: { brief: 'HTTP names', operations: [nameOperation] }, expected: true },
  {
    name: 'accepts OTel notes',
    value: {
      brief: 'HTTP names',
      operations: [{ ...nameOperation, is_in_otel: true, otel_notes: '' }],
    },
    expected: true,
  },
  {
    name: 'rejects missing OTel notes',
    value: {
      brief: 'HTTP names',
      operations: [{ ...nameOperation, is_in_otel: true, otel_notes: undefined }],
    },
    expected: false,
  },
  {
    name: 'rejects an unknown name operation property',
    value: { brief: 'HTTP names', operations: [{ ...nameOperation, unexpected: true }] },
    expected: false,
  },
  {
    name: 'rejects a missing non-OTel name operation field',
    value: { brief: 'HTTP names', operations: [{ ...nameOperation, brief: undefined }] },
    expected: false,
  },
  {
    name: 'rejects an unknown name document property',
    value: { brief: 'HTTP names', operations: [nameOperation], unexpected: true },
    expected: false,
  },
  { name: 'rejects a missing name brief', value: { operations: [nameOperation] }, expected: false },
];

const descriptionFixtures: Fixture[] = [
  {
    name: 'accepts a description document',
    value: { brief: 'Descriptions', operations: [descriptionOperation] },
    expected: true,
  },
  { name: 'rejects empty description operations', value: { brief: 'Descriptions', operations: [] }, expected: false },
  {
    name: 'rejects empty description ops',
    value: { brief: 'Descriptions', operations: [{ ...descriptionOperation, ops: [] }] },
    expected: false,
  },
  {
    name: 'rejects empty description templates',
    value: { brief: 'Descriptions', operations: [{ ...descriptionOperation, templates: [] }] },
    expected: false,
  },
  {
    name: 'rejects an unknown description operation property',
    value: { brief: 'Descriptions', operations: [{ ...descriptionOperation, unexpected: true }] },
    expected: false,
  },
  {
    name: 'rejects a missing description operation field',
    value: { brief: 'Descriptions', operations: [{ ...descriptionOperation, brief: undefined }] },
    expected: false,
  },
  {
    name: 'rejects an unknown description document property',
    value: { brief: 'Descriptions', operations: [descriptionOperation], unexpected: true },
    expected: false,
  },
  { name: 'rejects a missing description brief', value: { operations: [descriptionOperation] }, expected: false },
];

const transformationFixtures: Fixture[] = [
  { name: 'accepts a transformation document', value: transformation, expected: true },
  { name: 'rejects an invalid transformation id', value: { ...transformation, id: 'Old-To-New' }, expected: false },
  { name: 'rejects empty transformation inputs', value: { ...transformation, inputs: [] }, expected: false },
  { name: 'rejects empty transformation outputs', value: { ...transformation, outputs: [] }, expected: false },
  { name: 'rejects empty transformation actions', value: { ...transformation, actions: [] }, expected: false },
  { name: 'rejects empty transformation examples', value: { ...transformation, examples: [] }, expected: false },
  {
    name: 'rejects an unknown transformation property',
    value: { ...transformation, unexpected: true },
    expected: false,
  },
  {
    name: 'rejects a missing transformation property',
    value: { ...transformation, brief: undefined },
    expected: false,
  },
  {
    name: 'rejects a transformation reference without an attribute',
    value: { ...transformation, inputs: [{ brief: 'Missing attribute' }] },
    expected: false,
  },
  {
    name: 'rejects an unknown transformation reference property',
    value: { ...transformation, outputs: [{ attribute: 'new', unexpected: true }] },
    expected: false,
  },
  {
    name: 'rejects a transformation example without a name',
    value: { ...transformation, examples: [{ input: { old: 1 }, output: { new: 1 } }] },
    expected: false,
  },
  {
    name: 'rejects an unknown transformation example property',
    value: {
      ...transformation,
      examples: [{ name: 'copy', input: { old: 1 }, output: { new: 1 }, unexpected: true }],
    },
    expected: false,
  },
];

const measurementFixtures: Fixture[] = [
  {
    name: 'accepts a measurement document',
    value: {
      key: 'lcp',
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'web',
    },
    expected: true,
  },
  {
    name: 'rejects an invalid measurement platform',
    value: {
      key: 'lcp',
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'desktop',
    },
    expected: false,
  },
  {
    name: 'rejects a missing measurement property',
    value: {
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'web',
    },
    expected: false,
  },
  {
    name: 'rejects an unknown measurement property',
    value: {
      key: 'lcp',
      full_name: 'largest contentful paint',
      unit: 'millisecond',
      platform: 'web',
      unexpected: true,
    },
    expected: false,
  },
];

const opFixtures: Fixture[] = [
  { name: 'accepts an op document', value: { name: 'http', fields: [{ name: 'http.client' }] }, expected: true },
  { name: 'accepts an op without fields', value: { name: 'http', fields: [] }, expected: true },
  { name: 'rejects a missing op name', value: { fields: [{ name: 'http.client' }] }, expected: false },
  {
    name: 'rejects an op field without a name',
    value: { name: 'http', fields: [{ description: 'missing name' }] },
    expected: false,
  },
  {
    name: 'rejects an unknown op field property',
    value: { name: 'http', fields: [{ name: 'http.client', unexpected: true }] },
    expected: false,
  },
  {
    name: 'rejects an unknown op property',
    value: { name: 'http', fields: [], unexpected: true },
    expected: false,
  },
];

describe('generated schema parity', () => {
  it.each(attributeFixtures)('$name', ({ value, expected }) => {
    expectParity(attributeSchema, attributeJsonSchema, value, expected);
  });

  it.each(nameFixtures)('$name', ({ value, expected }) => {
    expectParity(nameSchema, nameJsonSchema, value, expected);
  });

  it.each(descriptionFixtures)('$name', ({ value, expected }) => {
    expectParity(descriptionSchema, descriptionJsonSchema, value, expected);
  });

  it.each(transformationFixtures)('$name', ({ value, expected }) => {
    expectParity(attributeTransformationSchema, transformationJsonSchema, value, expected);
  });

  it.each(measurementFixtures)('$name', ({ value, expected }) => {
    expectParity(measurementSchema, measurementJsonSchema, value, expected);
  });

  it.each(opFixtures)('$name', ({ value, expected }) => {
    expectParity(opSchema, opJsonSchema, value, expected);
  });
});
