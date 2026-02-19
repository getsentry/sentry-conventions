# Sentry Semantic Conventions

This repository contains the Sentry Semantic Conventions as defined by [RFC #116](https://github.com/getsentry/rfcs/blob/main/text/0116-sentry-semantic-conventions.md).

Sentry's semantic conventions align with [OpenTelemetry's semantic conventions](https://opentelemetry.io/docs/concepts/semantic-conventions/), and currently apply to span, breadcrumb and log attributes (`span.data` and `breadcrumb.data` for backwards compatibility).

These will be a standardized naming scheme for operations and data that will be shared across the SDKs, ingest, and the product. This allows us to have a single source of truth for the semantic conventions, and also allows us to generate code for all parts of the stack (ingest, frontend, backend, data pipelines) that need to be aware of this.

Conventions may also map attributes from OpenTelemetry resource attributes into Sentry's semantic attributes. Such OpenTelemetry resource attributes are ingested into Sentry as regular attributes prefixed with `resource.`. For example, see definitions in [the `model/attributes/resource` directory](model/attributes/resource).

To see the current list of attributes, see [the generated documentation for attributes](https://getsentry.github.io/sentry-conventions/attributes/).

To learn about creating span `name` fields, see [the generated documentation for span `name`](https://getsentry.github.io/sentry-conventions/names/)

# Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on how to contribute to this repository.

# Related Links

- [Sentry Span Data conventions](https://develop.sentry.dev/sdk/performance/span-data-conventions/)
- [Sentry Span Operation conventions](https://develop.sentry.dev/sdk/performance/span-operations/)
