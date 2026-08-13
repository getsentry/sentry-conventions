import { describe, expect, it } from 'vitest';

import type { AttributeMetadata, AttributeName } from '../javascript/sentry-conventions/src/attributes';
import { ATTRIBUTE_METADATA } from '../javascript/sentry-conventions/src/attributes';
import { deriveAttributeKeyChains } from '../scripts/generate_attributes';

// Chains contain search-only aliases as well as attribute keys, so look ups are widened to string.
const metadataByKey = ATTRIBUTE_METADATA as Record<string, AttributeMetadata | undefined>;

const HTTP_METHOD_ATTRIBUTE_KEYS: AttributeName[] = [
  'http.request.method',
  'http.method',
  'http.request_method',
  'method',
];

function attribute(
  key: string,
  options: {
    alias?: string[];
    replacement?: string;
    deprecated?: boolean;
    status?: 'backfill' | 'normalize' | 'transform' | null;
    searchAlias?: { name: string; deprecated_aliases?: string[] };
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
        searchAlias: { name: 'stable.search', deprecated_aliases: ['stable.extra'] },
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

  it('includes the predecessors of an alias, which hold the same value as the head', () => {
    // `legacy` is rewritten onto `alias.a`, and `alias.a` holds the same value as `stable`, so
    // `legacy` is readable under `stable` too. Both members must agree on chain membership.
    const chains = deriveAttributeKeyChains([
      attribute('stable', { alias: ['alias.a'] }),
      attribute('alias.a', { alias: ['stable'] }),
      attribute('legacy', { replacement: 'alias.a', status: 'backfill' }),
    ]);

    expect(chains.get('stable')).toEqual(['stable', 'alias.a', 'legacy']);
    expect(chains.get('alias.a')).toEqual(['alias.a', 'stable', 'legacy']);
    expect(chains.get('legacy')).toEqual(['alias.a', 'stable', 'legacy']);
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

  it.each(['transform', null] as const)(
    'does not expand the aliases of a %s deprecation, including its replacement',
    (status) => {
      const chains = deriveAttributeKeyChains([
        // The registry commonly lists a replacement under `alias` as well. The value is not
        // rewritten onto either alias, so neither is readable in place of `legacy`.
        attribute('legacy', { replacement: 'stable', status, alias: ['stable', 'other'] }),
        attribute('stable'),
        attribute('other'),
      ]);

      expect(chains.get('legacy')).toEqual(['legacy']);
      expect(chains.get('stable')).toEqual(['stable']);
      expect(chains.get('other')).toEqual(['other']);
    },
  );

  it('still expands the search aliases of a non-rewriting deprecation', () => {
    // Its own search names read the same value, unlike its aliases.
    const chains = deriveAttributeKeyChains([
      attribute('legacy', {
        replacement: 'stable',
        status: null,
        alias: ['stable'],
        searchAlias: { name: 'legacy.search', deprecated_aliases: ['legacy.extra'] },
      }),
      attribute('stable'),
    ]);

    expect(chains.get('legacy')).toEqual(['legacy', 'legacy.search', 'legacy.extra']);
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

describe('generated attribute key chains', () => {
  it('exposes a non-empty key chain on every metadata entry', () => {
    const entries = Object.entries(ATTRIBUTE_METADATA);
    const missingKeyChains = entries.filter(([, metadata]) => !metadata.keys?.length).map(([key]) => key);
    // Every attribute is readable under its own key, so it always appears in its own chain.
    const chainsMissingTheirOwnKey = entries
      .filter(([key, metadata]) => !metadata.keys.includes(key))
      .map(([key]) => key);

    expect(entries.length).toBeGreaterThan(0);
    expect(missingKeyChains).toEqual([]);
    expect(chainsMissingTheirOwnKey).toEqual([]);
  });

  it('only ever chains keys the same value is readable under', () => {
    // A non-rewriting deprecation keeps its value under its own key, so it must never appear in
    // another attribute's chain, and its own chain must not reach for a replacement or alias.
    const leakedNonRewritingKeys = Object.entries(ATTRIBUTE_METADATA).flatMap(([key, metadata]) =>
      metadata.keys
        .filter((chainKey) => chainKey !== key)
        .filter((chainKey) => {
          // Search-only aliases have no metadata entry of their own, and a non-deprecated key holds
          // the value for its whole family, so neither is ever a leak.
          const deprecation = metadataByKey[chainKey]?.deprecation;
          if (!deprecation) {
            return false;
          }
          // An absent status is `_status: null`, which does not rewrite the value either.
          return deprecation.status !== 'backfill' && deprecation.status !== 'normalize';
        })
        .map((chainKey) => `${key} -> ${chainKey}`),
    );

    expect(leakedNonRewritingKeys).toEqual([]);
  });

  it('gives a non-rewriting deprecation a chain of only its own names', () => {
    // `http.url` names `url.full` as its replacement and also lists it under `alias`, but its value
    // is never rewritten there, so the chain stops at itself.
    expect(ATTRIBUTE_METADATA['http.url']?.keys).toEqual(['http.url']);
    expect(ATTRIBUTE_METADATA['url.full']?.keys).not.toContain('http.url');
    // `http.host` aliases both `server.address` and `client.address`; neither is a substitute.
    expect(ATTRIBUTE_METADATA['http.host']?.keys).toEqual(['http.host']);
  });

  it('shares one chain across every member of a family', () => {
    // Each member's chain is the family chain, so a read prefers the same key either way.
    for (const key of HTTP_METHOD_ATTRIBUTE_KEYS) {
      expect(ATTRIBUTE_METADATA[key]?.keys).toEqual(HTTP_METHOD_ATTRIBUTE_KEYS);
    }
  });

  it('reads the same keys from either member of a mutual alias pair', () => {
    // `code.function` and `code.function.name` alias each other, and `django.function_name` is
    // backfilled onto `code.function.name`, so it is readable under both.
    const codeFunctionFamily = ['code.function', 'code.function.name', 'django.function_name'];

    expect(ATTRIBUTE_METADATA['code.function']?.keys.toSorted()).toEqual(codeFunctionFamily);
    expect(ATTRIBUTE_METADATA['code.function.name']?.keys.toSorted()).toEqual(codeFunctionFamily);
    expect(ATTRIBUTE_METADATA['django.function_name']?.keys.toSorted()).toEqual(codeFunctionFamily);
  });

  it('agrees on chain membership between every pair of chained attributes', () => {
    // A non-rewriting deprecation is exempt: its chain is only its own names, and one of those names
    // may be a search alias that collides with an unrelated attribute's key.
    const isNonRewriting = (key: string) => {
      const deprecation = metadataByKey[key]?.deprecation;
      return deprecation != null && deprecation.status !== 'backfill' && deprecation.status !== 'normalize';
    };

    const disagreements = Object.entries(ATTRIBUTE_METADATA)
      .filter(([key]) => !isNonRewriting(key))
      .flatMap(([key, metadata]) => {
        const family = JSON.stringify(metadata.keys.toSorted());
        return metadata.keys
          .filter((chainKey) => chainKey !== key && metadataByKey[chainKey] && !isNonRewriting(chainKey))
          .filter((chainKey) => JSON.stringify(metadataByKey[chainKey]?.keys.toSorted()) !== family)
          .map((chainKey) => `${key} -> ${chainKey}`);
      });

    expect(disagreements).toEqual([]);
  });

  it('generates a chain for a standalone attribute', () => {
    // Its search alias repeats its key, so the chain collapses to a single entry.
    expect(ATTRIBUTE_METADATA['cache.item_size']?.keys).toEqual(['cache.item_size']);
  });

  it('includes the search alias of the canonical key and of the attributes it replaces', () => {
    // `sentry.replay_id` is exposed as `replay.id` in search, and replaces `replay_id`.
    const replayIdKeys = ['sentry.replay_id', 'replay.id', 'replay_id'];

    expect(ATTRIBUTE_METADATA['sentry.replay_id']?.keys).toEqual(replayIdKeys);
    expect(ATTRIBUTE_METADATA['replay_id']?.keys).toEqual(replayIdKeys);
  });

  it('includes deprecated search aliases', () => {
    // `db.system` carries `search_alias.deprecated_aliases: ["span.system"]` and is replaced by
    // `db.system.name`.
    const dbSystemKeys = ['db.system.name', 'db.system', 'span.system'];

    expect(ATTRIBUTE_METADATA['db.system.name']?.keys).toEqual(dbSystemKeys);
    expect(ATTRIBUTE_METADATA['db.system']?.keys).toEqual(dbSystemKeys);
  });

  it('omits deprecated aliases that are not part of the family', () => {
    // `address` aliases several deprecated attributes that are replaced by other keys; only
    // `server.address` (its replacement) and `server_name` (a fellow predecessor) belong here.
    expect(ATTRIBUTE_METADATA['address']?.keys).toEqual(['server.address', 'address', 'server_name']);
  });
});
