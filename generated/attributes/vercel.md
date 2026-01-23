<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Vercel Attributes

- [Stable Attributes](#stable-attributes)
  - [vercel.branch](#vercelbranch)
  - [vercel.build_id](#vercelbuild_id)
  - [vercel.deployment_id](#verceldeployment_id)
  - [vercel.destination](#verceldestination)
  - [vercel.edge_type](#verceledge_type)
  - [vercel.entrypoint](#vercelentrypoint)
  - [vercel.execution_region](#vercelexecution_region)
  - [vercel.id](#vercelid)
  - [vercel.ja3_digest](#vercelja3_digest)
  - [vercel.ja4_digest](#vercelja4_digest)
  - [vercel.log_type](#vercellog_type)
  - [vercel.project_id](#vercelproject_id)
  - [vercel.project_name](#vercelproject_name)
  - [vercel.proxy.cache_id](#vercelproxycache_id)
  - [vercel.proxy.client_ip](#vercelproxyclient_ip)
  - [vercel.proxy.host](#vercelproxyhost)
  - [vercel.proxy.lambda_region](#vercelproxylambda_region)
  - [vercel.proxy.method](#vercelproxymethod)
  - [vercel.proxy.path](#vercelproxypath)
  - [vercel.proxy.path_type](#vercelproxypath_type)
  - [vercel.proxy.path_type_variant](#vercelproxypath_type_variant)
  - [vercel.proxy.referer](#vercelproxyreferer)
  - [vercel.proxy.region](#vercelproxyregion)
  - [vercel.proxy.response_byte_size](#vercelproxyresponse_byte_size)
  - [vercel.proxy.scheme](#vercelproxyscheme)
  - [vercel.proxy.status_code](#vercelproxystatus_code)
  - [vercel.proxy.timestamp](#vercelproxytimestamp)
  - [vercel.proxy.user_agent](#vercelproxyuser_agent)
  - [vercel.proxy.vercel_cache](#vercelproxyvercel_cache)
  - [vercel.proxy.vercel_id](#vercelproxyvercel_id)
  - [vercel.proxy.waf_action](#vercelproxywaf_action)
  - [vercel.proxy.waf_rule_id](#vercelproxywaf_rule_id)
  - [vercel.request_id](#vercelrequest_id)
  - [vercel.source](#vercelsource)
  - [vercel.status_code](#vercelstatus_code)

## Stable Attributes

### vercel.branch

Git branch name for Vercel project

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `main` |

### vercel.build_id

Identifier for the Vercel build (only present on build logs)

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `bld_cotnkcr76` |

### vercel.deployment_id

Identifier for the Vercel deployment

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `dpl_233NRGRjVZX1caZrXWtz5g1TAksD` |

### vercel.destination

Origin of the external content in Vercel (only on external logs)

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `https://vitals.vercel-insights.com/v1` |

### vercel.edge_type

Type of edge runtime in Vercel

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `edge-function` |

### vercel.entrypoint

Entrypoint for the request in Vercel

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `api/index.js` |

### vercel.execution_region

Region where the request is executed

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `sfo1` |

### vercel.id

Unique identifier for the log entry in Vercel

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1573817187330377061717300000` |

### vercel.ja3_digest

JA3 fingerprint digest of Vercel request

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `769,47-53-5-10-49161-49162-49171-49172-50-56-19-4,0-10-11,23-24-25,0` |

### vercel.ja4_digest

JA4 fingerprint digest

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `t13d1516h2_8daaf6152771_02713d6af862` |

### vercel.log_type

Vercel log output type

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `stdout` |

### vercel.project_id

Identifier for the Vercel project

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `gdufoJxB6b9b1fEqr1jUtFkyavUU` |

### vercel.project_name

Name of the Vercel project

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `my-app` |

### vercel.proxy.cache_id

Original request ID when request is served from cache

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `pdx1::v8g4b-1744143786684-93dafbc0f70d` |

### vercel.proxy.client_ip

Client IP address

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `120.75.16.101` |

### vercel.proxy.host

Hostname of the request

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `test.vercel.app` |

### vercel.proxy.lambda_region

Region where lambda function executed

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `sfo1` |

### vercel.proxy.method

HTTP method of the request

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `GET` |

### vercel.proxy.path

Request path with query parameters

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `/dynamic/some-value.json?route=some-value` |

### vercel.proxy.path_type

How the request was served based on its path and project configuration

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `func` |

### vercel.proxy.path_type_variant

Variant of the path type

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `api` |

### vercel.proxy.referer

Referer of the request

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `*.vercel.app` |

### vercel.proxy.region

Region where the request is processed

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `sfo1` |

### vercel.proxy.response_byte_size

Size of the response in bytes

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `1024` |

### vercel.proxy.scheme

Protocol of the request

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `https` |

### vercel.proxy.status_code

HTTP status code of the proxy request

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `200` |

### vercel.proxy.timestamp

Unix timestamp when the proxy request was made

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `1573817250172` |

### vercel.proxy.user_agent

User agent strings of the request

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `["Mozilla/5.0..."]` |

### vercel.proxy.vercel_cache

Cache status sent to the browser

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `REVALIDATED` |

### vercel.proxy.vercel_id

Vercel-specific identifier

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `sfo1::abc123` |

### vercel.proxy.waf_action

Action taken by firewall rules

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `deny` |

### vercel.proxy.waf_rule_id

ID of the firewall rule that matched

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `rule_gAHz8jtSB1Gy` |

### vercel.request_id

Identifier of the Vercel request

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `643af4e3-975a-4cc7-9e7a-1eda11539d90` |

### vercel.source

Origin of the Vercel log (build, edge, lambda, static, external, or firewall)

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `build` |

### vercel.status_code

HTTP status code of the request (-1 means no response returned and the lambda crashed)

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `200` |

