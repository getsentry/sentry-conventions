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
- `attributes.<ATTRIBUTE>_KEYS`: contains readonly lookup keys for an attribute
- `attribute-utils.getAttributeValue`: reads an attribute using its lookup keys
- `attributes.Attributes`: represents a bag of typed attributes
- `op`: contains constants for span operations used in Sentry

## Reading Attributes

Import a readonly `<ATTRIBUTE>_KEYS` tuple from `@sentry/conventions/attributes` and pass it to `getAttributeValue<T>` from `@sentry/conventions/attribute-utils`:

```ts
import { getAttributeValue } from '@sentry/conventions/attribute-utils';
import { HTTP_REQUEST_METHOD_KEYS } from '@sentry/conventions/attributes';

const method = getAttributeValue<string>(attributes, HTTP_REQUEST_METHOD_KEYS);
```

Each tuple lists the stable key first, followed by deprecated predecessors in alphabetical order. The helper returns the raw value from the first key whose value is not `undefined`. It does not validate or transform values. The caller-supplied generic is only a TypeScript type assertion and adds no runtime checks.

Keys that contain a dynamic `<key>` segment are patterns, not literal lookup keys. Materialize each pattern by replacing `<key>` with the actual segment before calling the helper. The generated package does not include expanded lists for dynamic keys.
