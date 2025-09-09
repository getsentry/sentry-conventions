<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Rpc Attributes

- [Stable Attributes](#stable-attributes)
  - [rpc.grpc.status_code](#rpcgrpcstatus_code)
  - [rpc.service](#rpcservice)

## Stable Attributes

### rpc.grpc.status_code

The numeric status code of the gRPC request.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `2` |

### rpc.service

The full (logical) name of the service being called, including its package name, if applicable.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `myService.BestService` |

