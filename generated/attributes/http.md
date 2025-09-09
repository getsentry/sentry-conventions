<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Http Attributes

- [Stable Attributes](#stable-attributes)
  - [http.decoded_response_content_length](#httpdecoded_response_content_length)
  - [http.fragment](#httpfragment)
  - [http.query](#httpquery)
  - [http.request.connect_start](#httprequestconnect_start)
  - [http.request.connection_end](#httprequestconnection_end)
  - [http.request.domain_lookup_end](#httprequestdomain_lookup_end)
  - [http.request.domain_lookup_start](#httprequestdomain_lookup_start)
  - [http.request.fetch_start](#httprequestfetch_start)
  - [http.request.header.\<key\>](#httprequestheaderkey)
  - [http.request.method](#httprequestmethod)
  - [http.request.redirect_end](#httprequestredirect_end)
  - [http.request.redirect_start](#httprequestredirect_start)
  - [http.request.request_start](#httprequestrequest_start)
  - [http.request.resend_count](#httprequestresend_count)
  - [http.request.response_end](#httprequestresponse_end)
  - [http.request.response_start](#httprequestresponse_start)
  - [http.request.secure_connection_start](#httprequestsecure_connection_start)
  - [http.request.worker_start](#httprequestworker_start)
  - [http.response.body.size](#httpresponsebodysize)
  - [http.response.header.\<key\>](#httpresponseheaderkey)
  - [http.response.header.content-length](#httpresponseheadercontentlength)
  - [http.response.size](#httpresponsesize)
  - [http.response.status_code](#httpresponsestatus_code)
  - [http.route](#httproute)
- [Deprecated Attributes](#deprecated-attributes)
  - [http.client_ip](#httpclient_ip)
  - [http.flavor](#httpflavor)
  - [http.host](#httphost)
  - [http.method](#httpmethod)
  - [http.response_content_length](#httpresponse_content_length)
  - [http.response_transfer_size](#httpresponse_transfer_size)
  - [http.scheme](#httpscheme)
  - [http.server_name](#httpserver_name)
  - [http.status_code](#httpstatus_code)
  - [http.target](#httptarget)
  - [http.url](#httpurl)
  - [http.user_agent](#httpuser_agent)

## Stable Attributes

### http.decoded_response_content_length

The decoded body size of the response (in bytes).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `456` |

### http.fragment

The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `#details` |

### http.query

The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe (Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.) |
| Exists in OpenTelemetry | No |
| Example | `?foo=bar&bar=baz` |

### http.request.connect_start

The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.connection_end

The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.domain_lookup_end

The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.domain_lookup_start

The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.fetch_start

The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.header.\<key\>

HTTP request headers, \<key\> being the normalized HTTP Header name (lowercase), the value being the header values.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Has dynamic suffix | Yes |
| Example | `http.request.header.custom-header=['foo', 'bar']` |

### http.request.method

The HTTP method used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `GET` |
| Aliases | `method`, `http.method` |

### http.request.redirect_end

The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829558` |

### http.request.redirect_start

The UNIX timestamp representing the start time of the fetch which that initiates the redirect.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.request_start

The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.resend_count

The ordinal number of request resending attempt (for any reason, including redirects).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `2` |

### http.request.response_end

The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.response_start

The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.secure_connection_start

The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829555` |

### http.request.worker_start

The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1732829553` |

### http.response.body.size

The encoded body size of the response (in bytes).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `123` |
| Aliases | `http.response_content_length`, `http.response.header.content-length` |

### http.response.header.\<key\>

HTTP response headers, \<key\> being the normalized HTTP Header name (lowercase), the value being the header values.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Has dynamic suffix | Yes |
| Example | `http.response.header.custom-header=['foo', 'bar']` |

### http.response.header.content-length

The size of the message body sent to the recipient (in bytes)

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `http.response.header.custom-header=['foo', 'bar']` |
| Aliases | `http.response_content_length`, `http.response.body.size` |

### http.response.size

The transfer size of the response (in bytes).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `456` |
| Aliases | `http.response_transfer_size` |

### http.response.status_code

The status code of the HTTP response.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `404` |
| Aliases | `http.status_code` |

### http.route

The matched route, that is, the path template in the format used by the respective server framework.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `/users/:id` |
| Aliases | `url.template` |

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### http.client_ip

Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | Yes |
| Example | `example.com` |
| Deprecated | Yes, use `client.address` instead |
| Aliases | `client.address` |

### http.flavor

The actual version of the protocol used for network communication.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `1.1` |
| Deprecated | Yes, use `network.protocol.version` instead |
| Aliases | `network.protocol.version`, `net.protocol.version` |

### http.host

The domain name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `example.com` |
| Deprecated | Yes, use `server.address` instead |
| Deprecation Reason | Deprecated, use one of `server.address` or `client.address`, depending on the usage |
| Aliases | `server.address`, `client.address`, `http.server_name`, `net.host.name` |

### http.method

The HTTP method used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `GET` |
| Deprecated | Yes, use `http.request.method` instead |
| Aliases | `http.request.method` |

### http.response_content_length

The encoded body size of the response (in bytes).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `123` |
| Deprecated | Yes, use `http.response.body.size` instead |
| Aliases | `http.response.body.size`, `http.response.header.content-length` |

### http.response_transfer_size

The transfer size of the response (in bytes).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `456` |
| Deprecated | Yes, use `http.response.size` instead |
| Aliases | `http.response.size` |

### http.scheme

The URI scheme component identifying the used protocol.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `https` |
| Deprecated | Yes, use `url.scheme` instead |
| Aliases | `url.scheme` |

### http.server_name

The server domain name

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `example.com` |
| Deprecated | Yes, use `server.address` instead |
| Aliases | `server.address`, `net.host.name`, `http.host` |

### http.status_code

The status code of the HTTP response.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `404` |
| Deprecated | Yes, use `http.response.status_code` instead |
| Aliases | `http.response.status_code` |

### http.target

The pathname and query string of the URL.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `/test?foo=bar#buzz` |
| Deprecated | Yes, use `url.path` instead |
| Deprecation Reason | This attribute is being deprecated in favor of url.path and url.query |

### http.url

The URL of the resource that was fetched.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `https://example.com/test?foo=bar#buzz` |
| Deprecated | Yes, use `url.full` instead |
| Aliases | `url.full`, `url` |

### http.user_agent

Value of the HTTP User-Agent header sent by the client.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `Mozilla/5.0 (iPhone; CPU iPhone OS 14_7_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1.2 Mobile/15E148 Safari/604.1` |
| Deprecated | Yes, use `user_agent.original` instead |
| Aliases | `user_agent.original` |

