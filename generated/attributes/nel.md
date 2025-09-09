<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Nel Attributes

- [Stable Attributes](#stable-attributes)
  - [nel.elapsed_time](#nelelapsed_time)
  - [nel.phase](#nelphase)
  - [nel.referrer](#nelreferrer)
  - [nel.sampling_function](#nelsampling_function)
  - [nel.type](#neltype)

## Stable Attributes

### nel.elapsed_time

The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `100` |

### nel.phase

If request failed, the phase of its network error. If request succeeded, "application".

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `application` |

### nel.referrer

request's referrer, as determined by the referrer policy associated with its client.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `https://example.com/foo?bar=baz` |

### nel.sampling_function

The sampling function used to determine if the request should be sampled.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `0.5` |

### nel.type

If request failed, the type of its network error. If request succeeded, "ok".

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `dns.unreachable` |

