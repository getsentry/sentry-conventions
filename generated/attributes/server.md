<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Server Attributes

- [Stable Attributes](#stable-attributes)
  - [server.address](#serveraddress)
  - [server.port](#serverport)

## Stable Attributes

### server.address

Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `example.com` |
| Aliases | `http.server_name`, `net.host.name` |

### server.port

Server port number.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `1337` |
| Aliases | `net.host.port` |

