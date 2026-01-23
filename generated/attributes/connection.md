<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Connection Attributes

- [Deprecated Attributes](#deprecated-attributes)
  - [connection.rtt](#connectionrtt)

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### connection.rtt

The estimated request round trip time (RTT) in milliseconds based on the current connection's quality. Values are always multiples of 25 milliseconds.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `50` |
| Deprecated | Yes, use `browser.connection.rtt` instead |
| Deprecation Reason | This attribute is being deprecated in favor of browser.connection.rtt |
| Aliases | `browser.connection.rtt` |

