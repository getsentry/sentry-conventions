# Sentry Semantic Conventions

> [!WARNING]  
> This repository is currently in WIP status. It is not meant for production usage yet.

This repository contains the Sentry Semantic Conventions as defined by [RFC #116](https://github.com/getsentry/rfcs/blob/main/text/0116-sentry-semantic-conventions.md).

Sentry's semantic conventions align with [OpenTelemetry's semantic conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/), and currently apply to span and breadcrumb attributes (`span.data` and `breadcrumb.data` for backwards compatibility).

These will be a standardized naming scheme for operations and data that will be shared across the SDKs, ingest, and the product. This allows us to have a single source of truth for the semantic conventions, and also allows us to generate code for all parts of the stack (ingest, frontend, backend, data pipelines) that need to be aware of this.

To see the current list of attributes, see [the generated documentation](generated/attributes/index.md).

# Contributing

Running this repo requires the usage of [volta](https://volta.sh/). See instructions on installing volta on their documentation [here](https://docs.volta.sh/guide/getting-started).

To install required dependencies, run `yarn`.

```bash
yarn
```

# Related Links

- [Sentry Span Data conventions](https://develop.sentry.dev/sdk/performance/span-data-conventions/)
- [Sentry Span Operation conventions](https://develop.sentry.dev/sdk/performance/span-operations/)
