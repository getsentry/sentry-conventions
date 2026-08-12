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

[![PyPI version](https://img.shields.io/pypi/v/sentry-conventions.svg)](https://pypi.org/project/sentry-conventions/)
[![PyPI pyversions](https://img.shields.io/pypi/pyversions/sentry-conventions.svg)](https://pypi.org/project/sentry-conventions/)
[![Discord Chat](https://img.shields.io/discord/621778831602221064.svg)](https://discord.gg/sentry)

![GitHub Actions](https://github.com/getsentry/sentry-conventions/actions/workflows/build.yml/badge.svg)
[![Codecov](https://codecov.io/gh/getsentry/sentry-conventions/graph/badge.svg?token=fQNlGihNOf)](https://codecov.io/gh/getsentry/sentry-conventions)

The package exports:

- `attributes.ATTRIBUTE_NAMES`: contains constants for all attribute names and their types, as defined in the Sentry semantic conventions
- `attributes.Attributes`: represents a bag of typed attributes
- `attributes.ATTRIBUTE_METADATA`: provides metadata about attributes, such as their type, scrubbing definition, deprecation info, and lookup keys

## Attribute Key Chains

An attribute's value may be stored under several keys: its own, the names Sentry search exposes it as, and the deprecated attributes it replaces. `ATTRIBUTE_METADATA[key].keys` lists all of them, ordered so that the stable key comes first:

```python
from sentry_conventions.attributes import ATTRIBUTE_METADATA, ATTRIBUTE_NAMES

ATTRIBUTE_METADATA[ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD].keys
# ("http.request.method", "http.method", "http.request_method", "method")
```

The order within a chain is:

1. the stable, non-deprecated attribute, followed by the names it is exposed as in Sentry search
2. its non-deprecated aliases, each followed by their own search names
3. the deprecated attributes it replaces, in alphabetical order, each followed by their own search names