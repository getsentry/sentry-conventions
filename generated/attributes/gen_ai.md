<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Gen_ai Attributes

- [Stable Attributes](#stable-attributes)
  - [gen_ai.agent.name](#gen_aiagentname)
  - [gen_ai.assistant.message](#gen_aiassistantmessage)
  - [gen_ai.choice](#gen_aichoice)
  - [gen_ai.cost.input_tokens](#gen_aicostinput_tokens)
  - [gen_ai.cost.input_tokens.cached](#gen_aicostinput_tokenscached)
  - [gen_ai.cost.output_tokens](#gen_aicostoutput_tokens)
  - [gen_ai.cost.output_tokens.reasoning](#gen_aicostoutput_tokensreasoning)
  - [gen_ai.operation.name](#gen_aioperationname)
  - [gen_ai.pipeline.name](#gen_aipipelinename)
  - [gen_ai.prompt](#gen_aiprompt)
  - [gen_ai.request.available_tools](#gen_airequestavailable_tools)
  - [gen_ai.request.frequency_penalty](#gen_airequestfrequency_penalty)
  - [gen_ai.request.max_tokens](#gen_airequestmax_tokens)
  - [gen_ai.request.messages](#gen_airequestmessages)
  - [gen_ai.request.model](#gen_airequestmodel)
  - [gen_ai.request.presence_penalty](#gen_airequestpresence_penalty)
  - [gen_ai.request.seed](#gen_airequestseed)
  - [gen_ai.request.temperature](#gen_airequesttemperature)
  - [gen_ai.request.top_k](#gen_airequesttop_k)
  - [gen_ai.request.top_p](#gen_airequesttop_p)
  - [gen_ai.response.finish_reasons](#gen_airesponsefinish_reasons)
  - [gen_ai.response.id](#gen_airesponseid)
  - [gen_ai.response.model](#gen_airesponsemodel)
  - [gen_ai.response.streaming](#gen_airesponsestreaming)
  - [gen_ai.response.text](#gen_airesponsetext)
  - [gen_ai.response.tokens_per_second](#gen_airesponsetokens_per_second)
  - [gen_ai.response.tool_calls](#gen_airesponsetool_calls)
  - [gen_ai.system](#gen_aisystem)
  - [gen_ai.system.message](#gen_aisystemmessage)
  - [gen_ai.tool.description](#gen_aitooldescription)
  - [gen_ai.tool.input](#gen_aitoolinput)
  - [gen_ai.tool.message](#gen_aitoolmessage)
  - [gen_ai.tool.name](#gen_aitoolname)
  - [gen_ai.tool.output](#gen_aitooloutput)
  - [gen_ai.tool.type](#gen_aitooltype)
  - [gen_ai.usage.input_tokens](#gen_aiusageinput_tokens)
  - [gen_ai.usage.input_tokens.cached](#gen_aiusageinput_tokenscached)
  - [gen_ai.usage.output_tokens](#gen_aiusageoutput_tokens)
  - [gen_ai.usage.output_tokens.reasoning](#gen_aiusageoutput_tokensreasoning)
  - [gen_ai.usage.total_cost](#gen_aiusagetotal_cost)
  - [gen_ai.usage.total_tokens](#gen_aiusagetotal_tokens)
  - [gen_ai.user.message](#gen_aiusermessage)
- [Deprecated Attributes](#deprecated-attributes)
  - [gen_ai.usage.completion_tokens](#gen_aiusagecompletion_tokens)
  - [gen_ai.usage.prompt_tokens](#gen_aiusageprompt_tokens)

## Stable Attributes

### gen_ai.agent.name

The name of the agent being used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `ResearchAssistant` |

### gen_ai.assistant.message

The assistant message passed to the model.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `get_weather tool call` |

### gen_ai.choice

The model's response message.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `The weather in Paris is rainy and overcast, with temperatures around 57°F` |

### gen_ai.cost.input_tokens

The cost of tokens used to process the AI input (prompt) in USD (without cached input tokens).

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123.45` |

### gen_ai.cost.input_tokens.cached

The cost of cached tokens used to process the AI input (prompt) in USD.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123.45` |

### gen_ai.cost.output_tokens

The cost of tokens used for creating the AI output in USD (without reasoning tokens).

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123.45` |

### gen_ai.cost.output_tokens.reasoning

The cost of tokens used for reasoning to create the AI output in USD.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123.45` |

### gen_ai.operation.name

The name of the operation being performed.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `chat` |

### gen_ai.pipeline.name

Name of the AI pipeline or chain being executed.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `Autofix Pipeline` |
| Aliases | `ai.pipeline.name` |

### gen_ai.prompt

The input messages sent to the model

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | Yes |
| Example | `[{"role": "user", "message": "hello"}]` |

### gen_ai.request.available_tools

The available tools for the model. It has to be a stringified version of an array of objects.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `[{"name": "get_weather", "description": "Get the weather for a given location"}, {"name": "get_news", "description": "Get the news for a given topic"}]` |

### gen_ai.request.frequency_penalty

Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `0.5` |
| Aliases | `ai.frequency_penalty` |

### gen_ai.request.max_tokens

The maximum number of tokens to generate in the response.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `2048` |

### gen_ai.request.messages

The messages passed to the model. It has to be a stringified version of an array of objects. The "content" can be a string or an array of objects.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `[{"role": "system", "content": "Generate a random number."}, {"role": "user", "content": [{"text": "Generate a random number between 0 and 10.", "type": "text"}]}]` |

### gen_ai.request.model

The model identifier being used for the request.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `gpt-4-turbo-preview` |

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

Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `35` |
| Aliases | `ai.top_k` |

### gen_ai.request.top_p

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

### gen_ai.response.id

Unique identifier for the completion.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `gen_123abc` |
| Aliases | `ai.generation_id` |

### gen_ai.response.model

The vendor-specific ID of the model used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `gpt-4` |
| Aliases | `ai.model_id` |

### gen_ai.response.streaming

Whether or not the AI model call's response was streamed back asynchronously

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `true` |
| Aliases | `ai.streaming` |

### gen_ai.response.text

The model's response text messages. It has to be a stringified version of an array of response text messages.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `["The weather in Paris is rainy and overcast, with temperatures around 57°F", "The weather in London is sunny and warm, with temperatures around 65°F"]` |

### gen_ai.response.tokens_per_second

The total output tokens per seconds throughput

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `12345.67` |

### gen_ai.response.tool_calls

The tool calls in the model's response. It has to be a stringified version of an array of objects.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `[{"name": "get_weather", "arguments": {"location": "Paris"}}]` |

### gen_ai.system

The provider of the model.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `openai` |
| Aliases | `ai.model.provider` |

### gen_ai.system.message

The system instructions passed to the model.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `You are a helpful assistant` |

### gen_ai.tool.description

The description of the tool being used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `Searches the web for current information about a topic` |

### gen_ai.tool.input

The input of the tool being used. It has to be a stringified version of the input to the tool.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `{"location": "Paris"}` |

### gen_ai.tool.message

The response from a tool or function call passed to the model.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `rainy, 57°F` |

### gen_ai.tool.name

Name of the tool utilized by the agent.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `Flights` |
| Aliases | `ai.function_call` |

### gen_ai.tool.output

The output of the tool being used. It has to be a stringified version of the output of the tool.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe |
| Exists in OpenTelemetry | No |
| Example | `rainy, 57°F` |

### gen_ai.tool.type

The type of tool being used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `function` |

### gen_ai.usage.input_tokens

The number of tokens used to process the AI input (prompt) without cached input tokens.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `10` |
| Aliases | `ai.prompt_tokens.used`, `gen_ai.usage.prompt_tokens` |

### gen_ai.usage.input_tokens.cached

The number of cached tokens used to process the AI input (prompt).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `50` |

### gen_ai.usage.output_tokens

The number of tokens used for creating the AI output (without reasoning tokens).

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | Yes |
| Example | `10` |
| Aliases | `ai.completion_tokens.used`, `gen_ai.usage.completion_tokens` |

### gen_ai.usage.output_tokens.reasoning

The number of tokens used for reasoning to create the AI output.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `75` |

### gen_ai.usage.total_cost

The total cost for the tokens used.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `12.34` |

### gen_ai.usage.total_tokens

The total number of tokens used to process the prompt. (input tokens plus output todkens)

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `20` |
| Aliases | `ai.total_tokens.used` |

### gen_ai.user.message

The user message passed to the model.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `What's the weather in Paris?` |

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

