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
- `attributes.ATTRIBUTE_NAMES.<ATTRIBUTE>_KEYS`: contains lookup keys for an attribute
- `attributes.get_attribute_value`: reads an attribute using its lookup keys
- `attributes.Attributes`: represents a bag of typed attributes
- `attributes.ATTRIBUTE_METADATA`: provides metadata about attributes, such as their type, scrubbing definition, and deprecation info

## Reading Attributes

Pass an `ATTRIBUTE_NAMES.<ATTRIBUTE>_KEYS` tuple to `get_attribute_value`:

```python
from sentry_conventions.attributes import ATTRIBUTE_NAMES, get_attribute_value

method = get_attribute_value(attributes, ATTRIBUTE_NAMES.HTTP_REQUEST_METHOD_KEYS)
```

Each tuple lists the stable key first, followed by deprecated predecessors in alphabetical order. The helper returns the raw value from the first key present in the mapping. It does not validate or transform values.

Keys that contain a dynamic `<key>` segment are patterns, not literal lookup keys. Materialize each pattern by replacing `<key>` with the actual segment before calling the helper. The generated package does not include expanded lists for dynamic keys.
