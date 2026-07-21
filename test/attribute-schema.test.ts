import { describe, expect, it } from 'vitest';
import { attributeSchema } from '../schemas';

const base = {
  key: 'test.attribute',
  brief: 'Test attribute',
  apply_scrubbing: { key: 'never' },
  is_in_otel: false,
  visibility: 'public',
} as const;

describe('attributeSchema', () => {
  it.each([
    ['string', 'value'],
    ['boolean', true],
    ['integer', 1.5],
    ['double', 1.5],
    ['string[]', ['a']],
    ['boolean[]', [true]],
    ['integer[]', [1]],
    ['double[]', [1.5]],
    ['any', ['still', 'the', 'existing', 'domain']],
  ])('accepts matching %s examples', (type, example) => {
    expect(attributeSchema.safeParse({ ...base, type, example }).success).toBe(true);
    expect(attributeSchema.safeParse({ ...base, type, examples: [example] }).success).toBe(true);
  });

  it.each([
    ['string', 1],
    ['boolean', 'true'],
    ['integer', '1'],
    ['double', false],
    ['string[]', [1]],
    ['boolean[]', ['true']],
    ['integer[]', ['1']],
    ['double[]', [false]],
  ])('rejects mismatched %s examples', (type, example) => {
    expect(attributeSchema.safeParse({ ...base, type, example }).success).toBe(false);
    expect(attributeSchema.safeParse({ ...base, type, examples: [example] }).success).toBe(false);
  });

  it('allows no examples for non-dynamic attributes', () => {
    expect(attributeSchema.safeParse({ ...base, type: 'string' }).success).toBe(true);
  });

  it('rejects singular and plural examples together', () => {
    expect(attributeSchema.safeParse({ ...base, type: 'string', example: 'one', examples: ['two'] }).success).toBe(
      false,
    );
  });

  it('rejects an empty outer examples list', () => {
    expect(attributeSchema.safeParse({ ...base, type: 'string', examples: [] }).success).toBe(false);
  });

  it('accepts an empty array-valued example', () => {
    expect(attributeSchema.safeParse({ ...base, type: 'string[]', examples: [[]] }).success).toBe(true);
  });

  it('requires string examples for dynamic suffixes', () => {
    const dynamic = { ...base, key: 'test.<key>', type: 'integer', has_dynamic_suffix: true };
    expect(attributeSchema.safeParse(dynamic).success).toBe(false);
    expect(attributeSchema.safeParse({ ...dynamic, example: 'suffix' }).success).toBe(true);
    expect(attributeSchema.safeParse({ ...dynamic, example: 1 }).success).toBe(false);
  });

  it('requires a transformation id for transform deprecations', () => {
    const attribute = {
      ...base,
      type: 'string',
      deprecation: { _status: 'transform', replacement: 'test.replacement' },
    };
    expect(attributeSchema.safeParse(attribute).success).toBe(false);
    expect(
      attributeSchema.safeParse({
        ...attribute,
        deprecation: { ...attribute.deprecation, transformation: 'test_to_replacement' },
      }).success,
    ).toBe(true);
  });

  it('rejects unknown properties', () => {
    expect(attributeSchema.safeParse({ ...base, type: 'string', unknown: true }).success).toBe(false);
  });
});
