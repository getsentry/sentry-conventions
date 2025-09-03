<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Url Attributes

- [Stable Attributes](#stable-attributes)
  - [url.domain](#urldomain)
  - [url.fragment](#urlfragment)
  - [url.full](#urlfull)
  - [url.path](#urlpath)
  - [url.path.parameter.\<key\>](#urlpathparameterkey)
  - [url.port](#urlport)
  - [url.query](#urlquery)
  - [url.scheme](#urlscheme)
  - [url.template](#urltemplate)

## Stable Attributes

### url.domain

Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `example.com` |

### url.fragment

The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `details` |

### url.full

The URL of the resource that was fetched.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `https://example.com/test?foo=bar#buzz` |
| Aliases | `http.url`, `url` |

### url.path

The URI path component.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `/foo` |

### url.path.parameter.\<key\>

Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Has dynamic suffix | Yes |
| Example | `url.path.parameter.id='123'` |
| Aliases | `params.\<key\>` |

### url.port

Server port number.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `1337` |

### url.query

The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe (Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.) |
| Exists in OpenTelemetry | Yes |
| Example | `foo=bar&bar=baz` |

### url.scheme

The URI scheme component identifying the used protocol.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `https` |
| Aliases | `http.scheme` |

### url.template

The low-cardinality template of an [absolute path reference](https://www.rfc-editor.org/rfc/rfc3986#section-4.2).

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `/users/:id` |

