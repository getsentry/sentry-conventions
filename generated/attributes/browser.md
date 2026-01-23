<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Browser Attributes

- [Stable Attributes](#stable-attributes)
  - [browser.name](#browsername)
  - [browser.report.type](#browserreporttype)
  - [browser.script.invoker](#browserscriptinvoker)
  - [browser.script.invoker_type](#browserscriptinvoker_type)
  - [browser.script.source_char_position](#browserscriptsource_char_position)
  - [browser.version](#browserversion)
  - [browser.web_vital.fcp.value](#browserweb_vitalfcpvalue)
  - [browser.web_vital.fp.value](#browserweb_vitalfpvalue)
  - [browser.web_vital.ttfb.request_time](#browserweb_vitalttfbrequest_time)
  - [browser.web_vital.ttfb.value](#browserweb_vitalttfbvalue)

## Stable Attributes

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

### browser.web_vital.fcp.value

The time it takes for the browser to render the first piece of meaningful content on the screen

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `547.6951` |
| Aliases | `fcp` |

### browser.web_vital.fp.value

The time in milliseconds it takes for the browser to render the first pixel on the screen

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `477.1926` |
| Aliases | `fp` |

### browser.web_vital.ttfb.request_time

The time it takes for the server to process the initial request and send the first byte of a response to the user's browser

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `1554.5814` |
| Aliases | `ttfb.requestTime` |

### browser.web_vital.ttfb.value

The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `194.3322` |
| Aliases | `ttfb` |

