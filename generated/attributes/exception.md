<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Exception Attributes

- [Stable Attributes](#stable-attributes)
  - [exception.escaped](#exceptionescaped)
  - [exception.message](#exceptionmessage)
  - [exception.stacktrace](#exceptionstacktrace)
  - [exception.type](#exceptiontype)

## Stable Attributes

### exception.escaped

SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `true` |

### exception.message

The error message.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `ENOENT: no such file or directory` |

### exception.stacktrace

A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `Exception in thread "main" java.lang.RuntimeException: Test exception
 at com.example.GenerateTrace.methodB(GenerateTrace.java:13)
 at com.example.GenerateTrace.methodA(GenerateTrace.java:9)
 at com.example.GenerateTrace.main(GenerateTrace.java:5)` |

### exception.type

The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `OSError` |

