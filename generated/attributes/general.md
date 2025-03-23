<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# General Attributes

## app_start_type

Mobile app start variant. Either cold or warm.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `cold` |

## blocked_main_thread

Whether the main thread was blocked by the span.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

## channel

The channel name that is being used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `mail` |

## environment

The sentry environment.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `production` |
| Deprecated | Yes, use `sentry.environment` instead |
| Aliases | `sentry.environment` |

## fs_error

The error message of a file system error.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `ENOENT: no such file or directory` |
| Deprecated | Yes, use `error.type` instead |
| Deprecation Reason | This attribute is not part of the OpenTelemetry specification and error.type fits much better. |

## id

A unique identifier for the span.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `f47ac10b58cc4372a5670e02b2c3d479` |

## method

The HTTP method used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `GET` |
| Deprecated | Yes, use `http.request.method` instead |
| Aliases | `http.request.method` |

## previous_route

Also used by mobile SDKs to indicate the previous route in the application.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `HomeScreen` |

## profile_id

The id of the sentry profile.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123e4567e89b12d3a456426614174000` |
| Deprecated | Yes, use `sentry.profile_id` instead |
| Aliases | `sentry.profile_id` |

## release

The sentry release.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `production` |
| Deprecated | Yes, use `sentry.release` instead |
| Aliases | `sentry.release` |

## replay_id

The id of the sentry replay.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123e4567e89b12d3a456426614174000` |
| Deprecated | Yes, use `sentry.replay_id` instead |
| Aliases | `sentry.replay_id` |

## route

The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `App\Controller::indexAction` |
| Deprecated | Yes, use `http.route` instead |
| Aliases | `http.route` |

## transaction

The sentry transaction (segment name).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `GET /` |
| Deprecated | Yes, use `sentry.transaction` instead |
| Aliases | `sentry.transaction` |

## type

More granular type of the operation happening.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `fetch` |

## url

The URL of the resource that was fetched.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `https://example.com/test?foo=bar#buzz` |
| Deprecated | Yes, use `url.full` instead |
| Aliases | `url.full`, `http.url` |

