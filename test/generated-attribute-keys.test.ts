import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, expectTypeOf, it } from 'vitest';

import {
  _HTTP_REQUEST_METHOD_KEYS,
  ADDRESS_KEYS,
  CACHE_ITEM_SIZE_KEYS,
  DB_SYSTEM_KEYS,
  DB_SYSTEM_NAME_KEYS,
  HTTP_METHOD_KEYS,
  HTTP_REQUEST_METHOD_KEYS,
  METHOD_KEYS,
  REPLAY_ID_KEYS,
  SENTRY_REPLAY_ID_KEYS,
} from '../javascript/sentry-conventions/src/attributes';
import { deriveAttributeKeyChains } from '../scripts/generate_attributes';

const HTTP_METHOD_ATTRIBUTE_KEYS = ['http.request.method', 'http.method', 'http.request_method', 'method'] as const;

function attribute(
  key: string,
  options: {
    alias?: string[];
    replacement?: string;
    deprecated?: boolean;
    status?: 'backfill' | 'normalize' | 'transform' | null;
    searchAlias?: { name: string; aliases?: string[] };
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
      ...(options.searchAlias ? { search_alias: options.searchAlias } : {}),
      ...(options.deprecated || options.replacement || options.status !== undefined
        ? {
            deprecation: {
              ...(options.replacement ? { replacement: options.replacement } : {}),
              _status: options.status !== undefined ? options.status : ('normalize' as const),
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

  it('includes non-deprecated aliases after the stable key', () => {
    const chains = deriveAttributeKeyChains([
      attribute('stable', { alias: ['alias.b', 'alias.a'] }),
      attribute('alias.a', { alias: ['stable'] }),
      attribute('alias.b', { alias: ['stable'] }),
    ]);

    // Aliases keep their authored order rather than being sorted. None of these attributes is
    // deprecated, so each one heads its own chain.
    expect(chains.get('stable')).toEqual(['stable', 'alias.b', 'alias.a']);
    expect(chains.get('alias.a')).toEqual(['alias.a', 'stable']);
    expect(chains.get('alias.b')).toEqual(['alias.b', 'stable']);
  });

  it('skips deprecated aliases, which join a chain only as predecessors', () => {
    const chains = deriveAttributeKeyChains([
      attribute('stable', { alias: ['replaces.stable', 'unrelated.legacy'] }),
      attribute('replaces.stable', { replacement: 'stable' }),
      attribute('unrelated.legacy', { replacement: 'other' }),
      attribute('other'),
    ]);

    expect(chains.get('stable')).toEqual(['stable', 'replaces.stable']);
    expect(chains.get('other')).toEqual(['other', 'unrelated.legacy']);
  });

  it('expands search aliases for the stable key, its aliases and its predecessors', () => {
    const chains = deriveAttributeKeyChains([
      attribute('stable', {
        alias: ['alias.a'],
        searchAlias: { name: 'stable.search', aliases: ['stable.extra'] },
      }),
      attribute('alias.a', { searchAlias: { name: 'alias.search' } }),
      attribute('legacy', { replacement: 'stable', searchAlias: { name: 'legacy.search' } }),
    ]);
    const expectedFamily = [
      'stable',
      'stable.search',
      'stable.extra',
      'alias.a',
      'alias.search',
      'legacy',
      'legacy.search',
    ];

    expect(chains.get('stable')).toEqual(expectedFamily);
    expect(chains.get('legacy')).toEqual(expectedFamily);
  });

  it('deduplicates a search alias that repeats another key in the chain', () => {
    const chains = deriveAttributeKeyChains([
      attribute('sentry.thread.id', { replacement: 'thread.id', searchAlias: { name: 'thread.id' } }),
      attribute('thread.id'),
    ]);

    expect(chains.get('thread.id')).toEqual(['thread.id', 'sentry.thread.id']);
  });

  it('does not expand aliases of aliases', () => {
    const chains = deriveAttributeKeyChains([
      attribute('stable', { alias: ['alias.a'] }),
      attribute('alias.a', { alias: ['alias.b'] }),
      attribute('alias.b'),
    ]);

    expect(chains.get('stable')).toEqual(['stable', 'alias.a']);
  });

  it.each(['transform', null] as const)('keeps a %s deprecation out of its replacement chain', (status) => {
    const chains = deriveAttributeKeyChains([
      attribute('legacy', { replacement: 'stable', status }),
      attribute('stable'),
    ]);

    expect(chains.get('stable')).toEqual(['stable']);
    expect(chains.get('legacy')).toEqual(['legacy']);
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

  it('includes the search alias of the canonical key and of the attributes it replaces', () => {
    // `sentry.replay_id` is exposed as `replay.id` in search, and replaces `replay_id`.
    const replayIdKeys = ['sentry.replay_id', 'replay.id', 'replay_id'];

    expect(SENTRY_REPLAY_ID_KEYS).toEqual(replayIdKeys);
    expect(REPLAY_ID_KEYS).toEqual(replayIdKeys);
  });

  it('includes additional search alias aliases', () => {
    // `db.system` carries `search_alias.aliases: ["span.system"]` and is replaced by `db.system.name`.
    const dbSystemKeys = ['db.system.name', 'db.system', 'span.system'];

    expect(DB_SYSTEM_NAME_KEYS).toEqual(dbSystemKeys);
    expect(DB_SYSTEM_KEYS).toEqual(dbSystemKeys);
  });

  it('omits deprecated aliases that are not part of the family', () => {
    // `address` aliases several deprecated attributes that are replaced by other keys; only
    // `server.address` (its replacement) and `server_name` (a fellow predecessor) belong here.
    expect(ADDRESS_KEYS).toEqual(['server.address', 'address', 'server_name']);
  });
});
