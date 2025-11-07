## Unreleased

### Features

#### Changes to attributes

- MCP attributes ([#171](https://github.com/getsentry/sentry-conventions/pull/171))
- Make `sentry.exclusive_time` floating point milliseconds ([#160](https://github.com/getsentry/sentry-conventions/pull/160))

#### Changes to generated packages

- (Python) Make ATTRIBUTE_METADATA public ([#189](https://github.com/getsentry/sentry-conventions/pull/189))

## 0.2.1

### Fixes

- fix(js): Export constants correctly ([#172](https://github.com/getsentry/sentry-conventions/pull/172))

## 0.2.0

### Features

#### Changes to generated packages

- feat: export metadata in JS package ([#161](https://github.com/getsentry/sentry-conventions/pull/161))
  - An `ATTRIBUTE_METADATA` map is now exported from the JS package to power in-product usecases such as search.

#### Changes to attributes

- feat(ai): Document `sentry._internal.segment.contains_gen_ai_spans` attribute ([#150](https://github.com/getsentry/sentry-conventions/pull/150))
- feat(sentry): Add sentry.observed_timestamp_nanos ([#137](https://github.com/getsentry/sentry-conventions/pull/137))
- dynamic-sampling: add field conventions for dynamic sampling context ([#128](https://github.com/getsentry/sentry-conventions/pull/128))
- chore(ai): Clean up of `sentry._internal.segment.contains_gen_ai_spans` ([#155](https://github.com/getsentry/sentry-conventions/pull/155))
- feat(attributes): Add sentry._internal.replay_is_buffering ([#159](https://github.com/getsentry/sentry-conventions/pull/159))
- feat: Add vercel log drain attributes ([#163](https://github.com/getsentry/sentry-conventions/pull/163))
- feat(attributes) add MCP related attributes ([#164](https://github.com/getsentry/sentry-conventions/pull/164))
- feat(attributes): Add MDC log attributes ([#167](https://github.com/getsentry/sentry-conventions/pull/167))


### Fixes

- fix(name): Remove duplicate GraphQL op ([#152](https://github.com/getsentry/sentry-conventions/pull/152))

### Internal

- test(name): verify attribute usage in template lists ([#153](https://github.com/getsentry/sentry-conventions/pull/153))
- build: Restructure scripts in package.json ([#166](https://github.com/getsentry/sentry-conventions/pull/166))
- docs: add PR template and more info to README and CONTRIBUTING ([#165](https://github.com/getsentry/sentry-conventions/pull/165))

## 0.1.1

This is a patch release with the sole purpose of releasing the Python package to our internal PyPI registry.

## 0.1.0

This is the first release of the Sentry Conventions packages.
