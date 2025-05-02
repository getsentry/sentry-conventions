<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Messaging Attributes

- [Stable Attributes](#stable-attributes)
  - [messaging.destination.connection](#messagingdestinationconnection)
  - [messaging.destination.name](#messagingdestinationname)
  - [messaging.message.body.size](#messagingmessagebodysize)
  - [messaging.message.envelope.size](#messagingmessageenvelopesize)
  - [messaging.message.id](#messagingmessageid)
  - [messaging.message.receive.latency](#messagingmessagereceivelatency)
  - [messaging.message.retry.count](#messagingmessageretrycount)
  - [messaging.operation.type](#messagingoperationtype)
  - [messaging.system](#messagingsystem)

## Stable Attributes

### messaging.destination.connection

The message destination connection.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `BestTopic` |

### messaging.destination.name

The message destination name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `BestTopic` |

### messaging.message.body.size

The size of the message body in bytes.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `839` |

### messaging.message.envelope.size

The size of the message body and metadata in bytes.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `1045` |

### messaging.message.id

A value used by the messaging system as an identifier for the message, represented as a string.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `f47ac10b58cc4372a5670e02b2c3d479` |

### messaging.message.receive.latency

The latency between when the message was published and received.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732847252` |

### messaging.message.retry.count

The amount of attempts to send the message.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `2` |

### messaging.operation.type

A string identifying the type of the messaging operation

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `create` |

### messaging.system

The messaging system as identified by the client instrumentation.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `activemq` |

