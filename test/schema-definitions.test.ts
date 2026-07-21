import { describe, expect, it } from 'vitest';
import { attributeTransformationSchema, descriptionSchema, measurementSchema, nameSchema, opSchema } from '../schemas';

describe('nameSchema', () => {
  const baseOperation = {
    brief: 'HTTP client span',
    ops: ['http.client'],
    templates: ['{method}'],
  };

  it('requires OTel notes for OTel operations', () => {
    expect(
      nameSchema.safeParse({
        brief: 'HTTP names',
        operations: [{ ...baseOperation, is_in_otel: true }],
      }).success,
    ).toBe(false);
    expect(
      nameSchema.safeParse({
        brief: 'HTTP names',
        operations: [{ ...baseOperation, is_in_otel: true, otel_notes: '' }],
      }).success,
    ).toBe(true);
  });

  it('rejects unknown fields', () => {
    expect(
      nameSchema.safeParse({
        brief: 'HTTP names',
        operations: [{ ...baseOperation, is_in_otel: false, unexpected: true }],
      }).success,
    ).toBe(false);
  });
});

describe('descriptionSchema', () => {
  const operation = {
    brief: 'HTTP description',
    ops: ['http.client'],
    templates: ['{{http.request.method}}'],
  };

  it.each([
    { brief: 'Descriptions', operations: [] },
    { brief: 'Descriptions', operations: [{ ...operation, ops: [] }] },
    { brief: 'Descriptions', operations: [{ ...operation, templates: [] }] },
  ])('rejects empty required arrays: %#', (value) => {
    expect(descriptionSchema.safeParse(value).success).toBe(false);
  });
});

describe('opSchema', () => {
  it('accepts the existing op shape and rejects unknown fields', () => {
    expect(opSchema.safeParse({ name: 'http', fields: [{ name: 'http.client' }] }).success).toBe(true);
    expect(opSchema.safeParse({ name: 'http', fields: [], unexpected: true }).success).toBe(false);
  });
});

describe('measurementSchema', () => {
  it('accepts supported platforms only', () => {
    const base = { key: 'lcp', full_name: 'largest contentful paint', unit: 'millisecond' };
    expect(measurementSchema.safeParse({ ...base, platform: 'web' }).success).toBe(true);
    expect(measurementSchema.safeParse({ ...base, platform: 'desktop' }).success).toBe(false);
  });
});

describe('attributeTransformationSchema', () => {
  const valid = {
    id: 'old_to_new',
    brief: 'Convert old to new',
    inputs: [{ attribute: 'example.old' }],
    outputs: [{ attribute: 'example.new' }],
    actions: ['Copy the value'],
    examples: [{ name: 'copy', input: { 'example.old': 1 }, output: { 'example.new': 1 } }],
  };

  it('accepts a complete transformation', () => {
    expect(attributeTransformationSchema.safeParse(valid).success).toBe(true);
  });

  it.each([
    { ...valid, id: 'Old-To-New' },
    { ...valid, inputs: [] },
    { ...valid, outputs: [] },
    { ...valid, actions: [] },
    { ...valid, examples: [] },
  ])('rejects an invalid transformation: %#', (value) => {
    expect(attributeTransformationSchema.safeParse(value).success).toBe(false);
  });
});
