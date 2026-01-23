<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Lcp Attributes

- [Stable Attributes](#stable-attributes)
  - [lcp.size](#lcpsize)
  - [lcp.url](#lcpurl)
- [Deprecated Attributes](#deprecated-attributes)
  - [lcp.element](#lcpelement)
  - [lcp.id](#lcpid)

## Stable Attributes

### lcp.size

The size of the largest contentful paint element.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `1234` |

### lcp.url

The url of the dom element responsible for the largest contentful paint.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `https://example.com` |

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### lcp.element

The dom element responsible for the largest contentful paint.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `img` |
| Deprecated | Yes, use `browser.web_vital.lcp.element` instead |
| Deprecation Reason | The LCP element is now recorded as a browser.web_vital.lcp.element attribute. |
| Aliases | `browser.web_vital.lcp.element` |

### lcp.id

The id of the dom element responsible for the largest contentful paint.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `#hero` |
| Deprecated | Yes, use `browser.web_vital.lcp.id` instead |
| Deprecation Reason | The LCP id is now recorded as a browser.web_vital.lcp.id attribute. |
| Aliases | `browser.web_vital.lcp.id` |

