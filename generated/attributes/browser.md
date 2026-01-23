<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Browser Attributes

- [Stable Attributes](#stable-attributes)
  - [browser.name](#browsername)
  - [browser.report.type](#browserreporttype)
  - [browser.script.invoker](#browserscriptinvoker)
  - [browser.script.invoker_type](#browserscriptinvoker_type)
  - [browser.script.source_char_position](#browserscriptsource_char_position)
  - [browser.version](#browserversion)
  - [browser.web_vital.cls.value](#browserweb_vitalclsvalue)
  - [browser.web_vital.inp.value](#browserweb_vitalinpvalue)
  - [browser.web_vital.lcp.value](#browserweb_vitallcpvalue)

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

### browser.web_vital.cls.value

The value of the recorded Cumulative Layout Shift (CLS) web vital

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `0.2361` |
| Aliases | `cls` |

### browser.web_vital.inp.value

The value of the recorded Interaction to Next Paint (INP) web vital

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `200` |
| Aliases | `inp` |

### browser.web_vital.lcp.value

The value of the recorded Largest Contentful Paint (LCP) web vital

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `2500` |
| Aliases | `lcp` |

