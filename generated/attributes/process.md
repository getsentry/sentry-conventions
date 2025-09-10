<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Process Attributes

- [Stable Attributes](#stable-attributes)
  - [process.executable.name](#processexecutablename)
  - [process.pid](#processpid)
  - [process.runtime.description](#processruntimedescription)
  - [process.runtime.name](#processruntimename)
  - [process.runtime.version](#processruntimeversion)

## Stable Attributes

### process.executable.name

The name of the executable that started the process.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `getsentry` |

### process.pid

The process ID of the running process.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `12345` |

### process.runtime.description

An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `Eclipse OpenJ9 VM openj9-0.21.0` |

### process.runtime.name

The name of the runtime. Equivalent to `name` in the Sentry runtime context.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `node` |

### process.runtime.version

The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `18.04.2` |

