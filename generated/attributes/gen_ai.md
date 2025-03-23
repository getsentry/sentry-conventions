<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Gen_ai Attributes

- [Stable Attributes](#stable-attributes)
  - [gen_ai.prompt](#gen_aiprompt)
  - [gen_ai.response.model](#gen_airesponsemodel)
  - [gen_ai.usage.input_tokens](#gen_aiusageinput_tokens)
  - [gen_ai.usage.output_tokens](#gen_aiusageoutput_tokens)
- [Deprecated Attributes](#deprecated-attributes)
  - [gen_ai.usage.completion_tokens](#gen_ai-usage-completion_tokens)
  - [gen_ai.usage.prompt_tokens](#gen_ai-usage-prompt_tokens)

## Stable Attributes

### gen_ai.prompt

The input messages sent to the model

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `[{"role": "user", "message": "hello"}]` |

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

