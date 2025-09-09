<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Code Attributes

- [Stable Attributes](#stable-attributes)
  - [code.file.path](#codefilepath)
  - [code.function.name](#codefunctionname)
  - [code.line.number](#codelinenumber)
- [Deprecated Attributes](#deprecated-attributes)
  - [code.filepath](#codefilepath)
  - [code.function](#codefunction)
  - [code.lineno](#codelineno)
  - [code.namespace](#codenamespace)

## Stable Attributes

### code.file.path

The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `/app/myapplication/http/handler/server.py` |
| Aliases | `code.filepath` |

### code.function.name

The method or function name, or equivalent (usually rightmost part of the code unit's name).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `server_request` |
| Aliases | `code.function` |

### code.line.number

The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `42` |
| Aliases | `code.lineno` |

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### code.filepath

The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `/app/myapplication/http/handler/server.py` |
| Deprecated | Yes, use `code.file.path` instead |
| Aliases | `code.file.path` |

### code.function

The method or function name, or equivalent (usually rightmost part of the code unit's name).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `server_request` |
| Deprecated | Yes, use `code.function.name` instead |
| Aliases | `code.function.name` |

### code.lineno

The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `42` |
| Deprecated | Yes, use `code.line.number` instead |
| Aliases | `code.line.number` |

### code.namespace

The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `http.handler` |
| Deprecated | Yes, use `code.function.name` instead |
| Deprecation Reason | code.function.name should include the namespace. |

