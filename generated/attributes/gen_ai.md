<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Gen_ai Attributes

- [Stable Attributes](#stable-attributes)
  - [gen_ai.prompt](#gen_aiprompt)
  - [gen_ai.request.frequency_penalty](#gen_airequestfrequency_penalty)
  - [gen_ai.request.presence_penalty](#gen_airequestpresence_penalty)
  - [gen_ai.request.seed](#gen_airequestseed)
  - [gen_ai.request.temperature](#gen_airequesttemperature)
  - [gen_ai.request.top_k](#gen_airequesttop_k)
  - [gen_ai.response.finish_reasons](#gen_airesponsefinish_reasons)
  - [gen_ai.response.model](#gen_airesponsemodel)
  - [gen_ai.usage.input_tokens](#gen_aiusageinput_tokens)
  - [gen_ai.usage.output_tokens](#gen_aiusageoutput_tokens)
- [Deprecated Attributes](#deprecated-attributes)
  - [gen_ai.usage.completion_tokens](#gen_aiusagecompletion_tokens)
  - [gen_ai.usage.prompt_tokens](#gen_aiusageprompt_tokens)

## Stable Attributes

### gen_ai.prompt

The input messages sent to the model

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `[{"role": "user", "message": "hello"}]` |

### gen_ai.request.frequency_penalty

Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `0.5` |
| Aliases | `ai.frequency_penalty` |

### gen_ai.request.presence_penalty

Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `0.5` |
| Aliases | `ai.presence_penalty` |

### gen_ai.request.seed

The seed, ideally models given the same seed and same other parameters will produce the exact same output.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `1234567890` |
| Aliases | `ai.seed` |

### gen_ai.request.temperature

For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `0.1` |
| Aliases | `ai.temperature` |

### gen_ai.request.top_k

Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `0.7` |
| Aliases | `ai.top_p` |

### gen_ai.response.finish_reasons

The reason why the model stopped generating.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `COMPLETE` |
| Aliases | `ai.finish_reason` |

### gen_ai.response.model

The vendor-specific ID of the model used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `gpt-4` |
| Aliases | `ai.model_id` |

### gen_ai.usage.input_tokens

The number of tokens used in the GenAI input (prompt).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `10` |
| Aliases | `ai.prompt_tokens.used`, `gen_ai.usage.prompt_tokens` |

### gen_ai.usage.output_tokens

The number of tokens used in the GenAI response (completion).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `10` |
| Aliases | `ai.completion_tokens.used`, `gen_ai.usage.completion_tokens` |

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### gen_ai.usage.completion_tokens

The number of tokens used in the GenAI response (completion).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `10` |
| Deprecated | Yes, use `gen_ai.usage.output_tokens` instead |
| Aliases | `ai.completion_tokens.used`, `gen_ai.usage.output_tokens` |

### gen_ai.usage.prompt_tokens

The number of tokens used in the GenAI input (prompt).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `20` |
| Deprecated | Yes, use `gen_ai.usage.input_tokens` instead |
| Aliases | `ai.prompt_tokens.used`, `gen_ai.usage.input_tokens` |

