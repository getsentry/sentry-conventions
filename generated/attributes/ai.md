<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Ai Attributes

- [Stable Attributes](#stable-attributes)
  - [ai.citations](#aicitations)
  - [ai.completion_tokens.used](#aicompletion_tokensused)
  - [ai.documents](#aidocuments)
  - [ai.finish_reason](#aifinish_reason)
  - [ai.function_call](#aifunction_call)
  - [ai.generation_id](#aigeneration_id)
  - [ai.input_messages](#aiinput_messages)
  - [ai.is_search_required](#aiis_search_required)
  - [ai.metadata](#aimetadata)
  - [ai.model_id](#aimodel_id)
  - [ai.pipeline.name](#aipipelinename)
  - [ai.preamble](#aipreamble)
  - [ai.prompt_tokens.used](#aiprompt_tokensused)
  - [ai.raw_prompting](#airaw_prompting)
  - [ai.response_format](#airesponse_format)
  - [ai.responses](#airesponses)
  - [ai.search_queries](#aisearch_queries)
  - [ai.search_results](#aisearch_results)
  - [ai.streaming](#aistreaming)
  - [ai.tags](#aitags)
  - [ai.texts](#aitexts)
  - [ai.tool_calls](#aitool_calls)
  - [ai.tools](#aitools)
  - [ai.total_cost](#aitotal_cost)
  - [ai.total_tokens.used](#aitotal_tokensused)
  - [ai.warnings](#aiwarnings)
- [Deprecated Attributes](#deprecated-attributes)
  - [ai.frequency_penalty](#aifrequency_penalty)
  - [ai.presence_penalty](#aipresence_penalty)
  - [ai.seed](#aiseed)
  - [ai.temperature](#aitemperature)
  - [ai.top_k](#aitop_k)
  - [ai.top_p](#aitop_p)

## Stable Attributes

### ai.citations

References or sources cited by the AI model in its response.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `["Citation 1","Citation 2"]` |

### ai.completion_tokens.used

The number of tokens used to respond to the message.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `10` |
| Aliases | `gen_ai.usage.output_tokens`, `gen_ai.usage.completion_tokens` |

### ai.documents

Documents or content chunks used as context for the AI model.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `["document1.txt","document2.pdf"]` |

### ai.finish_reason

The reason why the model stopped generating.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `COMPLETE` |

### ai.function_call

For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `function_name` |

### ai.generation_id

Unique identifier for the completion.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `gen_123abc` |

### ai.input_messages

The input messages sent to the model

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `[{"role": "user", "message": "hello"}]` |
| Aliases | `gen_ai.prompt` |

### ai.is_search_required

Boolean indicating if the model needs to perform a search.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `false` |

### ai.metadata

Extra metadata passed to an AI pipeline step.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `{"user_id": 123, "session_id": "abc123"}` |

### ai.model_id

The vendor-specific ID of the model used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `gpt-4` |
| Aliases | `gen_ai.response.model` |

### ai.pipeline.name

The name of the AI pipeline.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `Autofix Pipeline` |

### ai.preamble

For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `You are now a clown.` |

### ai.prompt_tokens.used

The number of tokens used to process just the prompt.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `20` |
| Aliases | `gen_ai.usage.prompt_tokens`, `gen_ai.usage.input_tokens` |

### ai.raw_prompting

When enabled, the user’s prompt will be sent to the model without any pre-processing.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

### ai.response_format

For an AI model call, the format of the response

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `json_object` |

### ai.responses

The response messages sent back by the AI model.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `["hello","world"]` |

### ai.search_queries

Queries used to search for relevant context or documents.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `["climate change effects","renewable energy"]` |

### ai.search_results

Results returned from search queries for context.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `["search_result_1, search_result_2"]` |

### ai.streaming

Whether the request was streamed back.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |

### ai.tags

Tags that describe an AI pipeline step.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `{"executed_function": "add_integers"}` |

### ai.texts

Raw text inputs provided to the model.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `["Hello, how are you?","What is the capital of France?"]` |

### ai.tool_calls

For an AI model call, the tool calls that were made.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `["tool_call_1","tool_call_2"]` |

### ai.tools

For an AI model call, the functions that are available

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `["function_1","function_2"]` |

### ai.total_cost

The total cost for the tokens used.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `12.34` |

### ai.total_tokens.used

The total number of tokens used to process the prompt.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `30` |

### ai.warnings

Warning messages generated during model execution.

| Property | Value |
| --- | --- |
| Type | `string[]` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `["Token limit exceeded"]` |

## Deprecated Attributes

These attributes are deprecated and will be removed in a future version. Please use the recommended replacements.

### ai.frequency_penalty

Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `0.5` |
| Deprecated | Yes, use `gen_ai.request.frequency_penalty` instead |

### ai.presence_penalty

Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `0.5` |
| Deprecated | Yes, use `gen_ai.request.presence_penalty` instead |

### ai.seed

The seed, ideally models given the same seed and same other parameters will produce the exact same output.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1234567890` |
| Deprecated | Yes, use `gen_ai.request.seed` instead |

### ai.temperature

For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `0.1` |
| Deprecated | Yes, use `gen_ai.request.temperature` instead |

### ai.top_k

Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `35` |
| Deprecated | Yes, use `gen_ai.request.top_k` instead |

### ai.top_p

Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `0.7` |
| Deprecated | Yes, use `gen_ai.request.top_p` instead |

