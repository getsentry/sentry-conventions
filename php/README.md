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

[![Packagist Version](https://img.shields.io/packagist/v/sentry/conventions.svg)](https://packagist.org/packages/sentry/conventions)
[![Discord Chat](https://img.shields.io/discord/621778831602221064.svg)](https://discord.gg/sentry)

![GitHub Actions](https://github.com/getsentry/sentry-conventions/actions/workflows/build.yml/badge.svg)
[![Codecov](https://codecov.io/gh/getsentry/sentry-conventions/graph/badge.svg?token=fQNlGihNOf)](https://codecov.io/gh/getsentry/sentry-conventions)

## Installation

```bash
composer require sentry/conventions
```

## Usage

The package exports:

- `Sentry\Conventions\Attributes`: contains constants for all attribute names and their types, as defined in the Sentry semantic conventions
- `Sentry\Conventions\Op`: contains constants for span operations used in Sentry

### Example

```php
<?php

use Sentry\Conventions\Attributes;
use Sentry\Conventions\Op;

// Use attribute constants
$attributes = [
    Attributes::HTTP_REQUEST_METHOD => 'GET',
    Attributes::URL_FULL => 'https://example.com/api/users',
];

// Use operation constants
$spanOp = Op::HTTP_CLIENT;
```

