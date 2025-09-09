<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Otel Attributes

- [Stable Attributes](#stable-attributes)
  - [otel.scope.name](#otelscopename)
  - [otel.scope.version](#otelscopeversion)
  - [otel.status_code](#otelstatus_code)
  - [otel.status_description](#otelstatus_description)

## Stable Attributes

### otel.scope.name

The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `io.opentelemetry.contrib.mongodb` |

### otel.scope.version

The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `2.4.5` |

### otel.status_code

Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `OK` |

### otel.status_description

Description of the Status if it has a value, otherwise not set.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `resource not found` |

