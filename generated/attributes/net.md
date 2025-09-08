<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Net Attributes

- [Deprecated Attributes](#deprecated-attributes)
  - [net.host.ip](#nethostip)
  - [net.host.name](#nethostname)
  - [net.host.port](#nethostport)
  - [net.peer.ip](#netpeerip)
  - [net.peer.name](#netpeername)
  - [net.peer.port](#netpeerport)
  - [net.protocol.name](#netprotocolname)
  - [net.protocol.version](#netprotocolversion)
  - [net.sock.family](#netsockfamily)
  - [net.sock.host.addr](#netsockhostaddr)
  - [net.sock.host.port](#netsockhostport)
  - [net.sock.peer.addr](#netsockpeeraddr)
  - [net.sock.peer.name](#netsockpeername)
  - [net.sock.peer.port](#netsockpeerport)
  - [net.transport](#nettransport)

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### net.host.ip

Local address of the network connection - IP address or Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `192.168.0.1` |
| Deprecated | Yes, use `network.local.address` instead |
| Aliases | `network.local.address`, `net.sock.host.addr` |

### net.host.name

Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `example.com` |
| Deprecated | Yes, use `server.address` instead |
| Aliases | `server.address`, `http.server_name`, `http.host` |

### net.host.port

Server port number.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `1337` |
| Deprecated | Yes, use `server.port` instead |
| Aliases | `server.port` |

### net.peer.ip

Peer address of the network connection - IP address or Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `192.168.0.1` |
| Deprecated | Yes, use `network.peer.address` instead |
| Aliases | `network.peer.address`, `net.sock.peer.addr` |

### net.peer.name

Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `example.com` |
| Deprecated | Yes, use `server.address` instead |
| Deprecation Reason | Deprecated, use server.address on client spans and client.address on server spans. |

### net.peer.port

Peer port number.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `1337` |
| Deprecated | Yes, use `server.port` instead |
| Deprecation Reason | Deprecated, use server.port on client spans and client.port on server spans. |

### net.protocol.name

OSI application layer or non-OSI equivalent.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `http` |
| Deprecated | Yes, use `network.protocol.name` instead |
| Aliases | `network.protocol.name` |

### net.protocol.version

The actual version of the protocol used for network communication.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `1.1` |
| Deprecated | Yes, use `network.protocol.version` instead |
| Aliases | `network.protocol.version`, `http.flavor` |

### net.sock.family

OSI transport and network layer

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `inet` |
| Deprecated | Yes, use `network.transport` instead |
| Deprecation Reason | Deprecated, use network.transport and network.type. |

### net.sock.host.addr

Local address of the network connection mapping to Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `/var/my.sock` |
| Deprecated | Yes, use `network.local.address` instead |
| Aliases | `network.local.address`, `net.host.ip` |

### net.sock.host.port

Local port number of the network connection.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `8080` |
| Deprecated | Yes, use `network.local.port` instead |
| Aliases | `network.local.port` |

### net.sock.peer.addr

Peer address of the network connection - IP address

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `192.168.0.1` |
| Deprecated | Yes, use `network.peer.address` instead |
| Aliases | `network.peer.address`, `net.peer.ip` |

### net.sock.peer.name

Peer address of the network connection - Unix domain socket name

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `/var/my.sock` |
| Deprecated | Yes, use `` instead |
| Deprecation Reason | Deprecated, no replacement at this time |

### net.sock.peer.port

Peer port number of the network connection.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `8080` |
| Deprecated | Yes, use `network.peer.port` instead |

### net.transport

OSI transport layer or inter-process communication method.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `tcp` |
| Deprecated | Yes, use `network.transport` instead |
| Aliases | `network.transport` |

