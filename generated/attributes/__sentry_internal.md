<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# __sentry_internal Attributes

- [Stable Attributes](#stable-attributes)
  - [__sentry_internal_old_segment_id](#__sentry_internal_old_segment_id)
  - [__sentry_internal_span_buffer_outcome](#__sentry_internal_span_buffer_outcome)

## Stable Attributes

### __sentry_internal_old_segment_id

Used by the span buffer to record the segment ID of the original span in the incoming transaction before reconstruction.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `["same","different"]` |

### __sentry_internal_span_buffer_outcome

Used by the span buffer to indicate whether reconstructing the segment resulted in the same segment ID as the original transaction.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `["same","different"]` |

