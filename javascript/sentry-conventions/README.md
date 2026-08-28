<p align="center">
  <a href="https://sentry.io/?utm_source=github&utm_medium=logo" target="_blank">
    <picture>
      <source srcset="https://sentry-brand.storage.googleapis.com/sentry-logo-white.png" media="(prefers-color-scheme: dark)" />
      <source srcset="https://sentry-brand.storage.googleapis.com/sentry-logo-black.png" media="(prefers-color-scheme: light), (prefers-color-scheme: no-preference)" />
      <img src="https://sentry-brand.storage.googleapis.com/sentry-logo-black.png" alt="Sentry" width="280">
    </picture>
  </a>
</p>

<h1>Sentry Conventions</h1>

<h4>The Sentry Conventions are a set of semantic conventions for naming and describing events in Sentry.</h4>

[![npm version](https://img.shields.io/npm/v/@sentry/conventions.svg)](https://www.npmjs.com/package/@sentry/conventions)
[![npm dm](https://img.shields.io/npm/dm/@sentry/conventions.svg)](https://www.npmjs.com/package/@sentry/conventions)
[![npm dt](https://img.shields.io/npm/dt/@sentry/conventions.svg)](https://www.npmjs.com/package/@sentry/conventions)
[![Discord Chat](https://img.shields.io/discord/621778831602221064.svg)](https://discord.gg/sentry)

![GitHub Actions](https://github.com/getsentry/sentry-conventions/actions/workflows/build.yml/badge.svg)
[![Codecov](https://codecov.io/gh/getsentry/sentry-conventions/graph/badge.svg?token=fQNlGihNOf)](https://codecov.io/gh/getsentry/sentry-conventions)

The package exports:

- `attributes`: contains constants for all attribute names and their types, as defined in the Sentry semantic conventions
- `attributes.ATTRIBUTE_METADATA`: provides metadata about attributes, such as their type, scrubbing definition, deprecation info, and lookup keys
- `attributes.Attributes`: represents a bag of typed attributes
- `op`: contains constants for span operations used in Sentry

## Attribute Key Chains

An attribute's value may be readable under several keys: its own, the names Sentry search exposes it as, and the deprecated attributes it replaces. `ATTRIBUTE_METADATA[key].keys` lists all of them, most preferred first:

```ts
import { ATTRIBUTE_METADATA, HTTP_METHOD } from '@sentry/conventions/attributes';

ATTRIBUTE_METADATA[HTTP_METHOD].keys;
// ['http.request.method', 'http.method', 'http.request_method', 'method']
```

The order within a chain is:

1. the attribute heading the chain, followed by the names it is exposed as in Sentry search
2. its non-deprecated aliases, each followed by their own search names
3. the deprecated attributes it replaces, in alphabetical order, each followed by their own search names

Deprecated attributes are only added to a chain if their status is `normalize` or `backfill`.
If an attribute is deprecated with another status or status `null`, it's own `keys` array will not contain any
replacing attribute. Therefore, there's **no guarantee** for a stable attribute in a key chain.
