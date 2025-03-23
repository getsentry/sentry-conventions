<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Network Attributes

## network.local.address

Local address of the network connection - IP address or Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `10.1.2.80` |
| Aliases | `net.host.ip`, `net.sock.host.addr` |

## network.local.port

Local port number of the network connection.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `65400` |
| Aliases | `net.sock.host.port` |

## network.peer.address

Peer address of the network connection - IP address or Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `10.1.2.80` |

## network.peer.port

Peer port number of the network connection.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `65400` |

## network.protocol.name

OSI application layer or non-OSI equivalent.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `http` |
| Aliases | `net.protocol.name` |

## network.protocol.version

The actual version of the protocol used for network communication.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `1.1` |
| Aliases | `http.flavor`, `net.protocol.version` |

## network.transport

OSI transport layer or inter-process communication method.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `tcp` |
| Aliases | `net.transport` |

## network.type

OSI network layer or non-OSI equivalent.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `ipv4` |

