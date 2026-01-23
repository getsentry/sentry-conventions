<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Browser Attributes

- [Stable Attributes](#stable-attributes)
  - [browser.connection.rtt](#browserconnectionrtt)
  - [browser.name](#browsername)
  - [browser.report.type](#browserreporttype)
  - [browser.script.invoker](#browserscriptinvoker)
  - [browser.script.invoker_type](#browserscriptinvoker_type)
  - [browser.script.source_char_position](#browserscriptsource_char_position)
  - [browser.version](#browserversion)

## Stable Attributes

### browser.connection.rtt

The estimated request round trip time (RTT) in milliseconds based on the current connection's quality. Values are always multiples of 25 milliseconds.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `50` |
| Aliases | `connection.rtt` |

### browser.name

The name of the browser.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `Chrome` |
| Aliases | `sentry.browser.name` |

### browser.report.type

A browser report sent via reporting API..

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `network-error` |

### browser.script.invoker

How a script was called in the browser.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `Window.requestAnimationFrame` |

### browser.script.invoker_type

Browser script entry point type.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `event-listener` |

### browser.script.source_char_position

A number representing the script character position of the script.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `678` |

### browser.version

The version of the browser.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `120.0.6099.130` |
| Aliases | `sentry.browser.version` |

