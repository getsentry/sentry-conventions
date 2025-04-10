<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Sentry Attributes

- [Stable Attributes](#stable-attributes)
  - [sentry.cancellation_reason](#sentrycancellation_reason)
  - [sentry.dist](#sentrydist)
  - [sentry.environment](#sentryenvironment)
  - [sentry.exclusive_time](#sentryexclusive_time)
  - [sentry.http.prefetch](#sentryhttpprefetch)
  - [sentry.idle_span_finish_reason](#sentryidle_span_finish_reason)
  - [sentry.op](#sentryop)
  - [sentry.origin](#sentryorigin)
  - [sentry.platform](#sentryplatform)
  - [sentry.profile_id](#sentryprofile_id)
  - [sentry.release](#sentryrelease)
  - [sentry.replay_id](#sentryreplay_id)
  - [sentry.sample_rate](#sentrysample_rate)
  - [sentry.sdk.name](#sentrysdkname)
  - [sentry.sdk.version](#sentrysdkversion)
  - [sentry.source](#sentrysource)
  - [sentry.transaction](#sentrytransaction)

## Stable Attributes

### sentry.cancellation_reason

The reason why a span ended early.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `document.hidden` |

### sentry.dist

The sentry dist.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1.0` |

### sentry.environment

The sentry environment.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `production` |
| Aliases | `environment` |

### sentry.exclusive_time

The exclusive time duration of the span.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1234` |

### sentry.http.prefetch

If an http request was a prefetch request.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

### sentry.idle_span_finish_reason

The reason why an idle span ended early.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `idleTimeout` |

### sentry.op

The operation of a span.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `http.client` |

### sentry.origin

The origin of a span.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `auto.http.otel.fastify` |

### sentry.platform

The sdk platform that generated the event.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `php` |

### sentry.profile_id

The id of the sentry profile.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123e4567e89b12d3a456426614174000` |
| Aliases | `profile_id` |

### sentry.release

The sentry release.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `7.0.0` |
| Aliases | `service.version`, `release` |

### sentry.replay_id

The id of the sentry replay.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123e4567e89b12d3a456426614174000` |
| Aliases | `replay_id` |

### sentry.sample_rate

The sample rate of the span.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `0.5` |

### sentry.sdk.name

The sentry sdk name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `@sentry/react` |

### sentry.sdk.version

The sentry sdk version.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `7.0.0` |

### sentry.source

The source of a span, also referred to as transaction source.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `route` |

### sentry.transaction

The sentry transaction (segment name).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `GET /` |
| Aliases | `transaction` |

