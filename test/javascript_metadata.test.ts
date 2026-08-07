import { describe, expect, it } from 'vitest';

import { ATTRIBUTE_DOCUMENTATION } from '../javascript/sentry-conventions/src/attributeDocumentation';
import { ATTRIBUTE_METADATA } from '../javascript/sentry-conventions/src/attributes';

describe('JavaScript attribute metadata', () => {
  it('has matching runtime metadata and documentation entries', () => {
    expect(Object.keys(ATTRIBUTE_METADATA)).toEqual(Object.keys(ATTRIBUTE_DOCUMENTATION));
  });

  it('keeps documentation fields out of runtime metadata', () => {
    for (const metadata of Object.values(ATTRIBUTE_METADATA)) {
      expect(metadata).not.toHaveProperty('brief');
      expect(metadata).not.toHaveProperty('example');
      expect(metadata).not.toHaveProperty('examples');
      expect(metadata).not.toHaveProperty('changelog');
      expect(metadata).not.toHaveProperty('additionalContext');
    }
  });
});
