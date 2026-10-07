import { describe, expect, it } from 'vitest';
import { attributeUrl } from './attributeUrl';

describe('attributeUrl', () => {
  // These anchor URLs are linked from all over the Sentry codebase and must stay stable.
  it.each([
    ['http.request.method', '/sentry-conventions/attributes/http/#http-request-method'],
    ['mdc.<key>', '/sentry-conventions/attributes/mdc/#mdc-key'],
    ['environment', '/sentry-conventions/attributes/general/#environment'],
  ])('links %s to its category page anchor', (key, expected) => {
    expect(attributeUrl(key, '/sentry-conventions/')).toBe(expected);
  });
});
