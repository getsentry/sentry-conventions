<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Resource Attributes

- [Stable Attributes](#stable-attributes)
  - [resource.render_blocking_status](#resourcerender_blocking_status)
- [Deprecated Attributes](#deprecated-attributes)
  - [resource.deployment.environment.name](#resourcedeploymentenvironmentname)

## Stable Attributes

### resource.render_blocking_status

The render blocking status of the resource.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `non-blocking` |

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### resource.deployment.environment.name

The software deployment environment name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `production` |
| Deprecated | Yes, use `sentry.environment` instead |

