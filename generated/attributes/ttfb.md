<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Ttfb Attributes

- [Deprecated Attributes](#deprecated-attributes)
  - [ttfb.requestTime](#ttfbrequesttime)

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### ttfb.requestTime

The time it takes for the server to process the initial request and send the first byte of a response to the user's browser

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `1554.5814` |
| Deprecated | Yes, use `browser.web_vital.ttfb.request_time` instead |
| Deprecation Reason | This attribute is being deprecated in favor of browser.web_vital.ttfb.request_time |
| Aliases | `browser.web_vital.ttfb.request_time` |

