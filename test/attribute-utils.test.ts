import { describe, expect, expectTypeOf, it } from 'vitest';

import { getAttributeValue } from '../javascript/sentry-conventions/src/attribute-utils';

const KEYS = ['canonical', 'deprecated'] as const;

describe('getAttributeValue', () => {
  it('returns the first defined value', () => {
    expect(getAttributeValue({ canonical: 'new', deprecated: 'old' }, KEYS)).toBe('new');
    expect(getAttributeValue({ deprecated: 'old' }, KEYS)).toBe('old');
    expect(getAttributeValue({ canonical: undefined, deprecated: 'old' }, KEYS)).toBe('old');
  });

  it('returns undefined when no key has a defined value', () => {
    expect(getAttributeValue({ canonical: undefined }, KEYS)).toBeUndefined();
  });

  it.each([null, false, 0, ''])('preserves the falsy value %j', (value) => {
    expect(getAttributeValue({ canonical: value }, KEYS)).toBe(value);
  });

  it('supports an explicit generic return type', () => {
    const value = getAttributeValue<string>({ canonical: 'value' }, KEYS);

    expectTypeOf(value).toEqualTypeOf<string | undefined>();
  });
});
