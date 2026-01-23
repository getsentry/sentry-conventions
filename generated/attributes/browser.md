<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Browser Attributes

- [Stable Attributes](#stable-attributes)
  - [browser.name](#browsername)
  - [browser.report.type](#browserreporttype)
  - [browser.script.invoker](#browserscriptinvoker)
  - [browser.script.invoker_type](#browserscriptinvoker_type)
  - [browser.script.source_char_position](#browserscriptsource_char_position)
  - [browser.version](#browserversion)
  - [browser.web_vital.lcp.element](#browserweb_vitallcpelement)
  - [browser.web_vital.lcp.id](#browserweb_vitallcpid)
  - [browser.web_vital.lcp.size](#browserweb_vitallcpsize)
  - [browser.web_vital.lcp.url](#browserweb_vitallcpurl)

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

### browser.web_vital.lcp.element

The HTML element selector or component name for which LCP was reported

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `body > div#app > div#container > div` |
| Aliases | `lcp.element` |

### browser.web_vital.lcp.id

The id of the dom element responsible for the largest contentful paint

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `#gero` |
| Aliases | `lcp.id` |

### browser.web_vital.lcp.size

The size of the largest contentful paint element

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1024` |
| Aliases | `lcp.size` |

### browser.web_vital.lcp.url

The url of the dom element responsible for the largest contentful paint

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `https://example.com/static/img.png` |
| Aliases | `lcp.url` |

