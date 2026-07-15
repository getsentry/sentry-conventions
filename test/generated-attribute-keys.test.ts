import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, expectTypeOf, it } from 'vitest';

import { getAttributeValue } from '../javascript/sentry-conventions/src/attribute-utils';
import {
  _HTTP_REQUEST_METHOD_KEYS,
  CACHE_ITEM_SIZE_KEYS,
  HTTP_METHOD_KEYS,
  HTTP_REQUEST_METHOD_KEYS,
  METHOD_KEYS,
} from '../javascript/sentry-conventions/src/attributes';
import { deriveAttributeKeyChains } from '../scripts/generate_attributes';

const HTTP_METHOD_ATTRIBUTE_KEYS = ['http.request.method', 'http.method', 'http.request_method', 'method'] as const;

function attribute(
  key: string,
  options: {
    alias?: string[];
    replacement?: string;
    deprecated?: boolean;
  } = {},
) {
  return {
    key,
    attributeJson: {
      key,
      brief: key,
      type: 'string' as const,
      apply_scrubbing: { key: 'never' as const },
      is_in_otel: false,
      ...(options.alias ? { alias: options.alias } : {}),
      ...(options.deprecated || options.replacement
        ? {
            deprecation: {
              ...(options.replacement ? { replacement: options.replacement } : {}),
              _status: 'normalize',
            },
          }
        : {}),
    },
  };
}

describe('deriveAttributeKeyChains', () => {
  it('puts the stable key first and sorts predecessors for every family member', () => {
    const chains = deriveAttributeKeyChains([
      attribute('legacy.z', { replacement: 'stable' }),
      attribute('unrelated'),
      attribute('stable'),
      attribute('legacy.a', { replacement: 'stable' }),
    ]);
    const expectedFamily = ['stable', 'legacy.a', 'legacy.z'];

    expect(chains.get('stable')).toEqual(expectedFamily);
    expect(chains.get('legacy.a')).toEqual(expectedFamily);
    expect(chains.get('legacy.z')).toEqual(expectedFamily);
    expect(chains.get('unrelated')).toEqual(['unrelated']);
  });

  it('ignores alias relationships', () => {
    const chains = deriveAttributeKeyChains([
      attribute('stable', { alias: ['alias-only'] }),
      attribute('alias-only', { alias: ['stable'] }),
    ]);

    expect(chains.get('stable')).toEqual(['stable']);
    expect(chains.get('alias-only')).toEqual(['alias-only']);
  });

  it('throws when a replacement target does not exist', () => {
    expect(() => deriveAttributeKeyChains([attribute('legacy', { replacement: 'missing' })])).toThrowError(
      'Replacement target "missing" for deprecated attribute "legacy" does not exist',
    );
  });

  it('throws when a replacement target is deprecated', () => {
    expect(() =>
      deriveAttributeKeyChains([
        attribute('legacy', { replacement: 'deprecated-target' }),
        attribute('deprecated-target', { deprecated: true }),
      ]),
    ).toThrowError('Replacement target "deprecated-target" for deprecated attribute "legacy" must not be deprecated');
  });
});

describe('generated attribute key tuples', () => {
  it('exports a readonly key tuple for every generated attribute constant', () => {
    const attributesSource = fs.readFileSync(
      path.resolve(__dirname, '../javascript/sentry-conventions/src/attributes.ts'),
      'utf8',
    );
    const attributeNames = Array.from(
      attributesSource.matchAll(/^export const ([A-Z_][A-Z0-9_]*) = '[^']+';$/gm),
      (match) => match[1]!,
    ).filter((name) => !name.endsWith('_BASE'));
    const keyTupleDeclarations = new Map(
      Array.from(
        attributesSource.matchAll(/^export const ([A-Z_][A-Z0-9_]*_KEYS) = ([\s\S]*?);$/gm),
        (match) => [match[1]!, match[2]!] as const,
      ),
    );

    const missingKeyTuples = attributeNames.filter((name) => !keyTupleDeclarations.has(`${name}_KEYS`));
    const mutableKeyTuples = attributeNames.filter((name) => {
      const declaration = keyTupleDeclarations.get(`${name}_KEYS`);
      return declaration !== undefined && !/\bas const\s*$/.test(declaration);
    });

    expect(attributeNames.length).toBeGreaterThan(0);
    expect(missingKeyTuples).toEqual([]);
    expect(mutableKeyTuples).toEqual([]);
    expect(attributesSource).not.toMatch(/^export const [A-Z_][A-Z0-9_]*_BASE_KEYS =/m);
  });

  it('orders the HTTP request method family with the canonical key first', () => {
    expect(HTTP_REQUEST_METHOD_KEYS).toEqual(HTTP_METHOD_ATTRIBUTE_KEYS);
    expect(HTTP_METHOD_KEYS).toEqual(HTTP_METHOD_ATTRIBUTE_KEYS);
    expect(_HTTP_REQUEST_METHOD_KEYS).toEqual(HTTP_METHOD_ATTRIBUTE_KEYS);
    expect(METHOD_KEYS).toEqual(HTTP_METHOD_ATTRIBUTE_KEYS);

    expectTypeOf(HTTP_REQUEST_METHOD_KEYS).toEqualTypeOf<typeof HTTP_METHOD_ATTRIBUTE_KEYS>();
    expectTypeOf(HTTP_METHOD_KEYS).toEqualTypeOf<typeof HTTP_METHOD_ATTRIBUTE_KEYS>();
    expectTypeOf(_HTTP_REQUEST_METHOD_KEYS).toEqualTypeOf<typeof HTTP_METHOD_ATTRIBUTE_KEYS>();
    expectTypeOf(METHOD_KEYS).toEqualTypeOf<typeof HTTP_METHOD_ATTRIBUTE_KEYS>();
  });

  it('generates a tuple for a standalone attribute', () => {
    expect(CACHE_ITEM_SIZE_KEYS).toEqual(['cache.item_size']);
  });
});

describe('getAttributeValue', () => {
  it('prefers the canonical key over deprecated keys', () => {
    const attributes = {
      'http.request.method': 'POST',
      'http.method': 'GET',
      'http.request_method': 'PUT',
      method: 'DELETE',
    };

    expect(getAttributeValue(attributes, HTTP_REQUEST_METHOD_KEYS)).toBe('POST');
  });

  it('falls back to a deprecated predecessor', () => {
    expect(getAttributeValue({ 'http.method': 'GET' }, HTTP_REQUEST_METHOD_KEYS)).toBe('GET');
  });

  it('returns undefined when none of the keys are present', () => {
    expect(getAttributeValue({}, HTTP_REQUEST_METHOD_KEYS)).toBeUndefined();
  });

  it.each([false, 0, ''])('preserves the falsy value %j', (value) => {
    expect(getAttributeValue({ 'http.request.method': value }, HTTP_REQUEST_METHOD_KEYS)).toBe(value);
  });

  it('supports an explicit generic return type', () => {
    const value = getAttributeValue<string>({ 'http.request.method': 'GET' }, HTTP_REQUEST_METHOD_KEYS);

    expectTypeOf(value).toEqualTypeOf<string | undefined>();
    expect(value).toBe('GET');
  });
});
