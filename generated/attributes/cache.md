<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Cache Attributes

- [Stable Attributes](#stable-attributes)
  - [cache.hit](#cachehit)
  - [cache.item_size](#cacheitem_size)
  - [cache.key](#cachekey)
  - [cache.ttl](#cachettl)

## Stable Attributes

### cache.hit

If the cache was hit during this span.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

### cache.item_size

The size of the requested item in the cache. In bytes.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `58` |

### cache.key

The key of the cache accessed.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `my-cache-key` |

### cache.ttl

The ttl of the cache in seconds

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `120` |

