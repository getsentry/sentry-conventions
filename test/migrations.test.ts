import { describe, expect, it } from 'vitest';

import { migrateAttributeValue, migrateDeprecatedAttributes } from '../javascript/sentry-conventions/src/migrations';

describe('attribute migration utilities', () => {
  it('leaves single values unchanged when no migration is registered', () => {
    expect(migrateAttributeValue('unknown.attribute', 'value')).toBe('value');
  });

  it('leaves attribute maps unchanged when no migration is registered', () => {
    const attributes = { 'unknown.attribute': 'value' };

    migrateDeprecatedAttributes(attributes);

    expect(attributes).toEqual({ 'unknown.attribute': 'value' });
  });
});
