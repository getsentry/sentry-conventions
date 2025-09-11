<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Jvm Attributes

- [Stable Attributes](#stable-attributes)
  - [jvm.gc.action](#jvmgcaction)
  - [jvm.gc.name](#jvmgcname)
  - [jvm.memory.pool.name](#jvmmemorypoolname)
  - [jvm.memory.type](#jvmmemorytype)
  - [jvm.thread.daemon](#jvmthreaddaemon)
  - [jvm.thread.state](#jvmthreadstate)

## Stable Attributes

### jvm.gc.action

Name of the garbage collector action.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `end of minor GC` |

### jvm.gc.name

Name of the garbage collector.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `G1 Young Generation` |

### jvm.memory.pool.name

Name of the memory pool.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `G1 Old Gen` |

### jvm.memory.type

Name of the memory pool.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `G1 Old Gen` |

### jvm.thread.daemon

Whether the thread is daemon or not.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `true` |

### jvm.thread.state

State of the thread.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `blocked` |

