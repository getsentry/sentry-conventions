<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Ai Attributes

- [Stable Attributes](#stable-attributes)
  - [ai.completion_tokens.used](#aicompletion_tokensused)
  - [ai.input_messages](#aiinput_messages)
  - [ai.model_id](#aimodel_id)
  - [ai.prompt_tokens.used](#aiprompt_tokensused)
  - [ai.responses](#airesponses)
  - [ai.streaming](#aistreaming)
  - [ai.total_tokens.used](#aitotal_tokensused)

## Stable Attributes

### ai.completion_tokens.used

The number of tokens used to respond to the message.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `10` |
| Aliases | `gen_ai.usage.output_tokens`, `gen_ai.usage.completion_tokens` |

### ai.input_messages

The input messages sent to the model

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `[{"role": "user", "message": "hello"}]` |
| Aliases | `gen_ai.prompt` |

### ai.model_id

The vendor-specific ID of the model used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `gpt-4` |
| Aliases | `gen_ai.response.model` |

### ai.prompt_tokens.used

The number of tokens used to process just the prompt.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `20` |
| Aliases | `gen_ai.usage.prompt_tokens`, `gen_ai.usage.input_tokens` |

### ai.responses

The response messages sent back by the AI model.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `["hello","world"]` |

### ai.streaming

Whether the request was streamed back.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

### ai.total_tokens.used

The total number of tokens used to process the prompt.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `30` |

