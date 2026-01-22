<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# All Attributes

This page lists all available attributes across all categories.

Total attributes: 427

## Stable Attributes

| Attribute | Description |
| --- | --- |
| [`ai.citations`](./ai.md#aicitations) | References or sources cited by the AI model in its response. |
| [`ai.documents`](./ai.md#aidocuments) | Documents or content chunks used as context for the AI model. |
| [`ai.is_search_required`](./ai.md#aiis_search_required) | Boolean indicating if the model needs to perform a search. |
| [`ai.metadata`](./ai.md#aimetadata) | Extra metadata passed to an AI pipeline step. |
| [`ai.preamble`](./ai.md#aipreamble) | For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style. |
| [`ai.raw_prompting`](./ai.md#airaw_prompting) | When enabled, the user’s prompt will be sent to the model without any pre-processing. |
| [`ai.response_format`](./ai.md#airesponse_format) | For an AI model call, the format of the response |
| [`ai.search_queries`](./ai.md#aisearch_queries) | Queries used to search for relevant context or documents. |
| [`ai.search_results`](./ai.md#aisearch_results) | Results returned from search queries for context. |
| [`ai.tags`](./ai.md#aitags) | Tags that describe an AI pipeline step. |
| [`ai.texts`](./ai.md#aitexts) | Raw text inputs provided to the model. |
| [`ai.total_cost`](./ai.md#aitotal_cost) | The total cost for the tokens used. |
| [`ai.warnings`](./ai.md#aiwarnings) | Warning messages generated during model execution. |
| [`app_start_type`](./general.md#app_start_type) | Mobile app start variant. Either cold or warm. |
| [`blocked_main_thread`](./general.md#blocked_main_thread) | Whether the main thread was blocked by the span. |
| [`browser.name`](./browser.md#browsername) | The name of the browser. |
| [`browser.report.type`](./browser.md#browserreporttype) | A browser report sent via reporting API.. |
| [`browser.script.invoker`](./browser.md#browserscriptinvoker) | How a script was called in the browser. |
| [`browser.script.invoker_type`](./browser.md#browserscriptinvoker_type) | Browser script entry point type. |
| [`browser.script.source_char_position`](./browser.md#browserscriptsource_char_position) | A number representing the script character position of the script. |
| [`browser.version`](./browser.md#browserversion) | The version of the browser. |
| [`browser.web_vital.cls.value`](./browser.md#browserweb_vitalclsvalue) | The value of the recorded Cumulative Layout Shift (CLS) web vital |
| [`browser.web_vital.inp.value`](./browser.md#browserweb_vitalinpvalue) | The value of the recorded Interaction to Next Paint (INP) web vital |
| [`browser.web_vital.lcp.value`](./browser.md#browserweb_vitallcpvalue) | The value of the recorded Largest Contentful Paint (LCP) web vital |
| [`cache.hit`](./cache.md#cachehit) | If the cache was hit during this span. |
| [`cache.item_size`](./cache.md#cacheitem_size) | The size of the requested item in the cache. In bytes. |
| [`cache.key`](./cache.md#cachekey) | The key of the cache accessed. |
| [`cache.operation`](./cache.md#cacheoperation) | The operation being performed on the cache. |
| [`cache.ttl`](./cache.md#cachettl) | The ttl of the cache in seconds |
| [`channel`](./general.md#channel) | The channel name that is being used. |
| [`client.address`](./client.md#clientaddress) | Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. |
| [`client.port`](./client.md#clientport) | Client port number. |
| [`cloudflare.d1.duration`](./cloudflare.md#cloudflared1duration) | The duration of a Cloudflare D1 operation. |
| [`cloudflare.d1.rows_read`](./cloudflare.md#cloudflared1rows_read) | The number of rows read in a Cloudflare D1 operation. |
| [`cloudflare.d1.rows_written`](./cloudflare.md#cloudflared1rows_written) | The number of rows written in a Cloudflare D1 operation. |
| [`code.file.path`](./code.md#codefilepath) | The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path). |
| [`code.function.name`](./code.md#codefunctionname) | The method or function name, or equivalent (usually rightmost part of the code unit's name). |
| [`code.line.number`](./code.md#codelinenumber) | The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function |
| [`db.collection.name`](./db.md#dbcollectionname) | The name of a collection (table, container) within the database. |
| [`db.namespace`](./db.md#dbnamespace) | The name of the database being accessed. |
| [`db.operation.name`](./db.md#dboperationname) | The name of the operation being executed. |
| [`db.query.parameter.\<key\>`](./db.md#dbqueryparameterkey) | A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value. |
| [`db.query.summary`](./db.md#dbquerysummary) | A database query being executed. Should be paramaterized. The full version of the query is in `db.query.text`. |
| [`db.query.text`](./db.md#dbquerytext) | The database query being executed. Should be the full query, not a parameterized version. The parameterized version is in `db.query.summary`. |
| [`db.redis.connection`](./db.md#dbredisconnection) | The redis connection name. |
| [`db.redis.parameters`](./db.md#dbredisparameters) | The array of command parameters given to a redis command. |
| [`db.system.name`](./db.md#dbsystemname) | An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers. |
| [`db.user`](./db.md#dbuser) | The database user. |
| [`device.brand`](./device.md#devicebrand) | The brand of the device. |
| [`device.family`](./device.md#devicefamily) | The family of the device. |
| [`device.model`](./device.md#devicemodel) | The model of the device. |
| [`error.type`](./error.md#errortype) | Describes a class of error the operation ended with. |
| [`event.id`](./event.md#eventid) | The unique identifier for this event (log record) |
| [`event.name`](./event.md#eventname) | The name that uniquely identifies this event (log record) |
| [`exception.escaped`](./exception.md#exceptionescaped) | SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span. |
| [`exception.message`](./exception.md#exceptionmessage) | The error message. |
| [`exception.stacktrace`](./exception.md#exceptionstacktrace) | A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG. |
| [`exception.type`](./exception.md#exceptiontype) | The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it. |
| [`faas.coldstart`](./faas.md#faascoldstart) | A boolean that is true if the serverless function is executed for the first time (aka cold-start). |
| [`faas.cron`](./faas.md#faascron) | A string containing the schedule period as Cron Expression. |
| [`faas.time`](./faas.md#faastime) | A string containing the function invocation time in the ISO 8601 format expressed in UTC. |
| [`faas.trigger`](./faas.md#faastrigger) | Type of the trigger which caused this function invocation. |
| [`flag.evaluation.\<key\>`](./flag.md#flagevaluationkey) | An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag. |
| [`frames.delay`](./frames.md#framesdelay) | The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/). |
| [`frames.frozen`](./frames.md#framesfrozen) | The number of frozen frames rendered during the lifetime of the span. |
| [`frames.slow`](./frames.md#framesslow) | The number of slow frames rendered during the lifetime of the span. |
| [`frames.total`](./frames.md#framestotal) | The number of total frames rendered during the lifetime of the span. |
| [`gen_ai.agent.name`](./gen_ai.md#gen_aiagentname) | The name of the agent being used. |
| [`gen_ai.assistant.message`](./gen_ai.md#gen_aiassistantmessage) | The assistant message passed to the model. |
| [`gen_ai.choice`](./gen_ai.md#gen_aichoice) | The model's response message. |
| [`gen_ai.cost.input_tokens`](./gen_ai.md#gen_aicostinput_tokens) | The cost of tokens used to process the AI input (prompt) in USD (without cached input tokens). |
| [`gen_ai.cost.output_tokens`](./gen_ai.md#gen_aicostoutput_tokens) | The cost of tokens used for creating the AI output in USD (without reasoning tokens). |
| [`gen_ai.cost.total_tokens`](./gen_ai.md#gen_aicosttotal_tokens) | The total cost for the tokens used. |
| [`gen_ai.embeddings.input`](./gen_ai.md#gen_aiembeddingsinput) | The input to the embeddings model. |
| [`gen_ai.input.messages`](./gen_ai.md#gen_aiinputmessages) | The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`. |
| [`gen_ai.operation.name`](./gen_ai.md#gen_aioperationname) | The name of the operation being performed. It has the following list of well-known values: 'chat', 'create_agent', 'embeddings', 'execute_tool', 'generate_content', 'invoke_agent', 'text_completion'. If one of them applies, then that value MUST be used. Otherwise a custom value MAY be used. |
| [`gen_ai.operation.type`](./gen_ai.md#gen_aioperationtype) | The type of AI operation. Must be one of 'agent', 'ai_client', 'tool', 'handoff', 'guardrail'. Makes querying for spans in the UI easier. |
| [`gen_ai.output.messages`](./gen_ai.md#gen_aioutputmessages) | The model's response messages. It has to be a stringified version of an array of message objects, which can include text responses and tool calls. |
| [`gen_ai.pipeline.name`](./gen_ai.md#gen_aipipelinename) | Name of the AI pipeline or chain being executed. |
| [`gen_ai.request.frequency_penalty`](./gen_ai.md#gen_airequestfrequency_penalty) | Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation. |
| [`gen_ai.request.max_tokens`](./gen_ai.md#gen_airequestmax_tokens) | The maximum number of tokens to generate in the response. |
| [`gen_ai.request.model`](./gen_ai.md#gen_airequestmodel) | The model identifier being used for the request. |
| [`gen_ai.request.presence_penalty`](./gen_ai.md#gen_airequestpresence_penalty) | Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies. |
| [`gen_ai.request.seed`](./gen_ai.md#gen_airequestseed) | The seed, ideally models given the same seed and same other parameters will produce the exact same output. |
| [`gen_ai.request.temperature`](./gen_ai.md#gen_airequesttemperature) | For an AI model call, the temperature parameter. Temperature essentially means how random the output will be. |
| [`gen_ai.request.top_k`](./gen_ai.md#gen_airequesttop_k) | Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered). |
| [`gen_ai.request.top_p`](./gen_ai.md#gen_airequesttop_p) | Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered). |
| [`gen_ai.response.finish_reasons`](./gen_ai.md#gen_airesponsefinish_reasons) | The reason why the model stopped generating. |
| [`gen_ai.response.id`](./gen_ai.md#gen_airesponseid) | Unique identifier for the completion. |
| [`gen_ai.response.model`](./gen_ai.md#gen_airesponsemodel) | The vendor-specific ID of the model used. |
| [`gen_ai.response.streaming`](./gen_ai.md#gen_airesponsestreaming) | Whether or not the AI model call's response was streamed back asynchronously |
| [`gen_ai.response.tokens_per_second`](./gen_ai.md#gen_airesponsetokens_per_second) | The total output tokens per seconds throughput |
| [`gen_ai.system`](./gen_ai.md#gen_aisystem) | The provider of the model. |
| [`gen_ai.system_instructions`](./gen_ai.md#gen_aisystem_instructions) | The system instructions passed to the model. |
| [`gen_ai.tool.call.arguments`](./gen_ai.md#gen_aitoolcallarguments) | The arguments of the tool call. It has to be a stringified version of the arguments to the tool. |
| [`gen_ai.tool.call.result`](./gen_ai.md#gen_aitoolcallresult) | The result of the tool call. It has to be a stringified version of the result of the tool. |
| [`gen_ai.tool.definitions`](./gen_ai.md#gen_aitooldefinitions) | The list of source system tool definitions available to the GenAI agent or model. |
| [`gen_ai.tool.description`](./gen_ai.md#gen_aitooldescription) | The description of the tool being used. |
| [`gen_ai.tool.input`](./gen_ai.md#gen_aitoolinput) | The input of the tool being used. It has to be a stringified version of the input to the tool. |
| [`gen_ai.tool.message`](./gen_ai.md#gen_aitoolmessage) | The response from a tool or function call passed to the model. |
| [`gen_ai.tool.name`](./gen_ai.md#gen_aitoolname) | Name of the tool utilized by the agent. |
| [`gen_ai.tool.output`](./gen_ai.md#gen_aitooloutput) | The output of the tool being used. It has to be a stringified version of the output of the tool. |
| [`gen_ai.tool.type`](./gen_ai.md#gen_aitooltype) | The type of tool being used. |
| [`gen_ai.usage.input_tokens`](./gen_ai.md#gen_aiusageinput_tokens) | The number of tokens used to process the AI input (prompt) without cached input tokens. |
| [`gen_ai.usage.input_tokens.cache_write`](./gen_ai.md#gen_aiusageinput_tokenscache_write) | The number of tokens written to the cache when processing the AI input (prompt). |
| [`gen_ai.usage.input_tokens.cached`](./gen_ai.md#gen_aiusageinput_tokenscached) | The number of cached tokens used to process the AI input (prompt). |
| [`gen_ai.usage.output_tokens`](./gen_ai.md#gen_aiusageoutput_tokens) | The number of tokens used for creating the AI output (without reasoning tokens). |
| [`gen_ai.usage.output_tokens.reasoning`](./gen_ai.md#gen_aiusageoutput_tokensreasoning) | The number of tokens used for reasoning to create the AI output. |
| [`gen_ai.usage.total_tokens`](./gen_ai.md#gen_aiusagetotal_tokens) | The total number of tokens used to process the prompt. (input tokens plus output todkens) |
| [`gen_ai.user.message`](./gen_ai.md#gen_aiusermessage) | The user message passed to the model. |
| [`graphql.operation.name`](./graphql.md#graphqloperationname) | The name of the operation being executed. |
| [`graphql.operation.type`](./graphql.md#graphqloperationtype) | The type of the operation being executed. |
| [`http.decoded_response_content_length`](./http.md#httpdecoded_response_content_length) | The decoded body size of the response (in bytes). |
| [`http.fragment`](./http.md#httpfragment) | The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not. |
| [`http.query`](./http.md#httpquery) | The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not. |
| [`http.request.connect_start`](./http.md#httprequestconnect_start) | The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource. |
| [`http.request.connection_end`](./http.md#httprequestconnection_end) | The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication. |
| [`http.request.domain_lookup_end`](./http.md#httprequestdomain_lookup_end) | The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource. |
| [`http.request.domain_lookup_start`](./http.md#httprequestdomain_lookup_start) | The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource. |
| [`http.request.fetch_start`](./http.md#httprequestfetch_start) | The UNIX timestamp representing the time immediately before the browser starts to fetch the resource. |
| [`http.request.header.\<key\>`](./http.md#httprequestheaderkey) | HTTP request headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values. |
| [`http.request.method`](./http.md#httprequestmethod) | The HTTP method used. |
| [`http.request.redirect_end`](./http.md#httprequestredirect_end) | The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect |
| [`http.request.redirect_start`](./http.md#httprequestredirect_start) | The UNIX timestamp representing the start time of the fetch which that initiates the redirect. |
| [`http.request.request_start`](./http.md#httprequestrequest_start) | The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request. |
| [`http.request.resend_count`](./http.md#httprequestresend_count) | The ordinal number of request resending attempt (for any reason, including redirects). |
| [`http.request.response_end`](./http.md#httprequestresponse_end) | The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. |
| [`http.request.response_start`](./http.md#httprequestresponse_start) | The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request. |
| [`http.request.secure_connection_start`](./http.md#httprequestsecure_connection_start) | The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero. |
| [`http.request.time_to_first_byte`](./http.md#httprequesttime_to_first_byte) | The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests |
| [`http.request.worker_start`](./http.md#httprequestworker_start) | The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running. |
| [`http.response.body.size`](./http.md#httpresponsebodysize) | The encoded body size of the response (in bytes). |
| [`http.response.header.\<key\>`](./http.md#httpresponseheaderkey) | HTTP response headers, <key> being the normalized HTTP Header name (lowercase), the value being the header values. |
| [`http.response.header.content-length`](./http.md#httpresponseheadercontentlength) | The size of the message body sent to the recipient (in bytes) |
| [`http.response.size`](./http.md#httpresponsesize) | The transfer size of the response (in bytes). |
| [`http.response.status_code`](./http.md#httpresponsestatus_code) | The status code of the HTTP response. |
| [`http.route`](./http.md#httproute) | The matched route, that is, the path template in the format used by the respective server framework. |
| [`id`](./general.md#id) | A unique identifier for the span. |
| [`jvm.gc.action`](./jvm.md#jvmgcaction) | Name of the garbage collector action. |
| [`jvm.gc.name`](./jvm.md#jvmgcname) | Name of the garbage collector. |
| [`jvm.memory.pool.name`](./jvm.md#jvmmemorypoolname) | Name of the memory pool. |
| [`jvm.memory.type`](./jvm.md#jvmmemorytype) | Name of the memory pool. |
| [`jvm.thread.daemon`](./jvm.md#jvmthreaddaemon) | Whether the thread is daemon or not. |
| [`jvm.thread.state`](./jvm.md#jvmthreadstate) | State of the thread. |
| [`lcp.element`](./lcp.md#lcpelement) | The dom element responsible for the largest contentful paint. |
| [`lcp.id`](./lcp.md#lcpid) | The id of the dom element responsible for the largest contentful paint. |
| [`lcp.size`](./lcp.md#lcpsize) | The size of the largest contentful paint element. |
| [`lcp.url`](./lcp.md#lcpurl) | The url of the dom element responsible for the largest contentful paint. |
| [`logger.name`](./logger.md#loggername) | The name of the logger that generated this event. |
| [`mcp.cancelled.reason`](./mcp.md#mcpcancelledreason) | Reason for the cancellation of an MCP operation. |
| [`mcp.cancelled.request_id`](./mcp.md#mcpcancelledrequest_id) | Request ID of the cancelled MCP operation. |
| [`mcp.client.name`](./mcp.md#mcpclientname) | Name of the MCP client application. |
| [`mcp.client.title`](./mcp.md#mcpclienttitle) | Display title of the MCP client application. |
| [`mcp.client.version`](./mcp.md#mcpclientversion) | Version of the MCP client application. |
| [`mcp.lifecycle.phase`](./mcp.md#mcplifecyclephase) | Lifecycle phase indicator for MCP operations. |
| [`mcp.logging.data_type`](./mcp.md#mcploggingdata_type) | Data type of the logged message content. |
| [`mcp.logging.level`](./mcp.md#mcplogginglevel) | Log level for MCP logging operations. |
| [`mcp.logging.logger`](./mcp.md#mcplogginglogger) | Logger name for MCP logging operations. |
| [`mcp.logging.message`](./mcp.md#mcploggingmessage) | Log message content from MCP logging operations. |
| [`mcp.method.name`](./mcp.md#mcpmethodname) | The name of the MCP request or notification method being called. |
| [`mcp.progress.current`](./mcp.md#mcpprogresscurrent) | Current progress value of an MCP operation. |
| [`mcp.progress.message`](./mcp.md#mcpprogressmessage) | Progress message describing the current state of an MCP operation. |
| [`mcp.progress.percentage`](./mcp.md#mcpprogresspercentage) | Calculated progress percentage of an MCP operation. Computed from current/total * 100. |
| [`mcp.progress.token`](./mcp.md#mcpprogresstoken) | Token for tracking progress of an MCP operation. |
| [`mcp.progress.total`](./mcp.md#mcpprogresstotal) | Total progress target value of an MCP operation. |
| [`mcp.prompt.name`](./mcp.md#mcppromptname) | Name of the MCP prompt template being used. |
| [`mcp.prompt.result.description`](./mcp.md#mcppromptresultdescription) | Description of the prompt result. |
| [`mcp.prompt.result.message_content`](./mcp.md#mcppromptresultmessage_content) | Content of the message in the prompt result. Used for single message results only. |
| [`mcp.prompt.result.message_count`](./mcp.md#mcppromptresultmessage_count) | Number of messages in the prompt result. |
| [`mcp.prompt.result.message_role`](./mcp.md#mcppromptresultmessage_role) | Role of the message in the prompt result. Used for single message results only. |
| [`mcp.protocol.ready`](./mcp.md#mcpprotocolready) | Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready. |
| [`mcp.protocol.version`](./mcp.md#mcpprotocolversion) | MCP protocol version used in the session. |
| [`mcp.request.argument.\<key\>`](./mcp.md#mcprequestargumentkey) | MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value. |
| [`mcp.request.argument.name`](./mcp.md#mcprequestargumentname) | Name argument from prompts/get MCP request. |
| [`mcp.request.argument.uri`](./mcp.md#mcprequestargumenturi) | URI argument from resources/read MCP request. |
| [`mcp.request.id`](./mcp.md#mcprequestid) | JSON-RPC request identifier for the MCP request. Unique within the MCP session. |
| [`mcp.resource.protocol`](./mcp.md#mcpresourceprotocol) | Protocol of the resource URI being accessed, extracted from the URI. |
| [`mcp.resource.uri`](./mcp.md#mcpresourceuri) | The resource URI being accessed in an MCP operation. |
| [`mcp.server.name`](./mcp.md#mcpservername) | Name of the MCP server application. |
| [`mcp.server.title`](./mcp.md#mcpservertitle) | Display title of the MCP server application. |
| [`mcp.server.version`](./mcp.md#mcpserverversion) | Version of the MCP server application. |
| [`mcp.session.id`](./mcp.md#mcpsessionid) | Identifier for the MCP session. |
| [`mcp.tool.name`](./mcp.md#mcptoolname) | Name of the MCP tool being called. |
| [`mcp.tool.result.content`](./mcp.md#mcptoolresultcontent) | The content of the tool result. |
| [`mcp.tool.result.content_count`](./mcp.md#mcptoolresultcontent_count) | Number of content items in the tool result. |
| [`mcp.tool.result.is_error`](./mcp.md#mcptoolresultis_error) | Whether a tool execution resulted in an error. |
| [`mcp.transport`](./mcp.md#mcptransport) | Transport method used for MCP communication. |
| [`mdc.\<key\>`](./mdc.md#mdckey) | Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request. |
| [`messaging.destination.connection`](./messaging.md#messagingdestinationconnection) | The message destination connection. |
| [`messaging.destination.name`](./messaging.md#messagingdestinationname) | The message destination name. |
| [`messaging.message.body.size`](./messaging.md#messagingmessagebodysize) | The size of the message body in bytes. |
| [`messaging.message.envelope.size`](./messaging.md#messagingmessageenvelopesize) | The size of the message body and metadata in bytes. |
| [`messaging.message.id`](./messaging.md#messagingmessageid) | A value used by the messaging system as an identifier for the message, represented as a string. |
| [`messaging.message.receive.latency`](./messaging.md#messagingmessagereceivelatency) | The latency between when the message was published and received. |
| [`messaging.message.retry.count`](./messaging.md#messagingmessageretrycount) | The amount of attempts to send the message. |
| [`messaging.operation.type`](./messaging.md#messagingoperationtype) | A string identifying the type of the messaging operation |
| [`messaging.system`](./messaging.md#messagingsystem) | The messaging system as identified by the client instrumentation. |
| [`navigation.type`](./navigation.md#navigationtype) | The type of navigation done by a client-side router. |
| [`nel.elapsed_time`](./nel.md#nelelapsed_time) | The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent. |
| [`nel.phase`](./nel.md#nelphase) | If request failed, the phase of its network error. If request succeeded, "application". |
| [`nel.referrer`](./nel.md#nelreferrer) | request's referrer, as determined by the referrer policy associated with its client. |
| [`nel.sampling_function`](./nel.md#nelsampling_function) | The sampling function used to determine if the request should be sampled. |
| [`nel.type`](./nel.md#neltype) | If request failed, the type of its network error. If request succeeded, "ok". |
| [`network.local.address`](./network.md#networklocaladdress) | Local address of the network connection - IP address or Unix domain socket name. |
| [`network.local.port`](./network.md#networklocalport) | Local port number of the network connection. |
| [`network.peer.address`](./network.md#networkpeeraddress) | Peer address of the network connection - IP address or Unix domain socket name. |
| [`network.peer.port`](./network.md#networkpeerport) | Peer port number of the network connection. |
| [`network.protocol.name`](./network.md#networkprotocolname) | OSI application layer or non-OSI equivalent. |
| [`network.protocol.version`](./network.md#networkprotocolversion) | The actual version of the protocol used for network communication. |
| [`network.transport`](./network.md#networktransport) | OSI transport layer or inter-process communication method. |
| [`network.type`](./network.md#networktype) | OSI network layer or non-OSI equivalent. |
| [`os.build_id`](./os.md#osbuild_id) | The build ID of the operating system. |
| [`os.description`](./os.md#osdescription) | Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands. |
| [`os.name`](./os.md#osname) | Human readable operating system name. |
| [`os.type`](./os.md#ostype) | The operating system type. |
| [`os.version`](./os.md#osversion) | The version of the operating system. |
| [`otel.scope.name`](./otel.md#otelscopename) | The name of the instrumentation scope - (InstrumentationScope.Name in OTLP). |
| [`otel.scope.version`](./otel.md#otelscopeversion) | The version of the instrumentation scope - (InstrumentationScope.Version in OTLP). |
| [`otel.status_code`](./otel.md#otelstatus_code) | Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET. |
| [`otel.status_description`](./otel.md#otelstatus_description) | Description of the Status if it has a value, otherwise not set. |
| [`params.\<key\>`](./params.md#paramskey) | Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router. |
| [`previous_route`](./general.md#previous_route) | Also used by mobile SDKs to indicate the previous route in the application. |
| [`process.executable.name`](./process.md#processexecutablename) | The name of the executable that started the process. |
| [`process.pid`](./process.md#processpid) | The process ID of the running process. |
| [`process.runtime.description`](./process.md#processruntimedescription) | An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context. |
| [`process.runtime.name`](./process.md#processruntimename) | The name of the runtime. Equivalent to `name` in the Sentry runtime context. |
| [`process.runtime.version`](./process.md#processruntimeversion) | The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context. |
| [`remix.action_form_data.\<key\>`](./remix.md#remixaction_form_datakey) | Remix form data, <key> being the form data key, the value being the form data value. |
| [`resource.render_blocking_status`](./resource.md#resourcerender_blocking_status) | The render blocking status of the resource. |
| [`rpc.grpc.status_code`](./rpc.md#rpcgrpcstatus_code) | The numeric status code of the gRPC request. |
| [`rpc.service`](./rpc.md#rpcservice) | The full (logical) name of the service being called, including its package name, if applicable. |
| [`sentry.action`](./sentry.md#sentryaction) | Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans. |
| [`sentry.cancellation_reason`](./sentry.md#sentrycancellation_reason) | The reason why a span ended early. |
| [`sentry.category`](./sentry.md#sentrycategory) | The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI). Known values include: 'ai', 'ai.pipeline', 'app', 'browser', 'cache', 'console', 'db', 'event', 'file', 'function.aws', 'function.azure', 'function.gcp', 'function.nextjs', 'function.remix', 'graphql', 'grpc', 'http', 'measure', 'middleware', 'navigation', 'pageload', 'queue', 'resource', 'rpc', 'serialize', 'subprocess', 'template', 'topic', 'ui', 'ui.angular', 'ui.ember', 'ui.react', 'ui.svelte', 'ui.vue', 'view', 'websocket'. |
| [`sentry.client_sample_rate`](./sentry.md#sentryclient_sample_rate) | Rate at which a span was sampled in the SDK. |
| [`sentry.description`](./sentry.md#sentrydescription) | The human-readable description of a span. |
| [`sentry.dist`](./sentry.md#sentrydist) | The sentry dist. |
| [`sentry.domain`](./sentry.md#sentrydomain) | Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans. |
| [`sentry.dsc.environment`](./sentry.md#sentrydscenvironment) | The environment from the dynamic sampling context. |
| [`sentry.dsc.public_key`](./sentry.md#sentrydscpublic_key) | The public key from the dynamic sampling context. |
| [`sentry.dsc.release`](./sentry.md#sentrydscrelease) | The release identifier from the dynamic sampling context. |
| [`sentry.dsc.sample_rate`](./sentry.md#sentrydscsample_rate) | The sample rate from the dynamic sampling context. |
| [`sentry.dsc.sampled`](./sentry.md#sentrydscsampled) | Whether the event was sampled according to the dynamic sampling context. |
| [`sentry.dsc.trace_id`](./sentry.md#sentrydsctrace_id) | The trace ID from the dynamic sampling context. |
| [`sentry.dsc.transaction`](./sentry.md#sentrydsctransaction) | The transaction name from the dynamic sampling context. |
| [`sentry.environment`](./sentry.md#sentryenvironment) | The sentry environment. |
| [`sentry.exclusive_time`](./sentry.md#sentryexclusive_time) | The exclusive time duration of the span in milliseconds. |
| [`sentry.graphql.operation`](./sentry.md#sentrygraphqloperation) | Indicates the type of graphql operation, emitted by the Javascript SDK. |
| [`sentry.group`](./sentry.md#sentrygroup) | Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end. |
| [`sentry.http.prefetch`](./sentry.md#sentryhttpprefetch) | If an http request was a prefetch request. |
| [`sentry.idle_span_finish_reason`](./sentry.md#sentryidle_span_finish_reason) | The reason why an idle span ended early. |
| [`sentry.is_remote`](./sentry.md#sentryis_remote) | Indicates whether a span's parent is remote. |
| [`sentry.kind`](./sentry.md#sentrykind) | Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name. |
| [`sentry.message.parameter.\<key\>`](./sentry.md#sentrymessageparameterkey) | A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc) |
| [`sentry.message.template`](./sentry.md#sentrymessagetemplate) | The parameterized template string. |
| [`sentry.module.\<key\>`](./sentry.md#sentrymodulekey) | A module that was loaded in the process. The key is the name of the module. |
| [`sentry.nextjs.ssr.function.route`](./sentry.md#sentrynextjsssrfunctionroute) | A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known. |
| [`sentry.nextjs.ssr.function.type`](./sentry.md#sentrynextjsssrfunctiontype) | A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions. |
| [`sentry.normalized_db_query`](./sentry.md#sentrynormalized_db_query) | The normalized version of `db.query.text`. |
| [`sentry.normalized_db_query.hash`](./sentry.md#sentrynormalized_db_queryhash) | The hash of `sentry.normalized_db_query`. |
| [`sentry.normalized_description`](./sentry.md#sentrynormalized_description) | Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc). |
| [`sentry.observed_timestamp_nanos`](./sentry.md#sentryobserved_timestamp_nanos) | The timestamp at which an envelope was received by Relay, in nanoseconds. |
| [`sentry.op`](./sentry.md#sentryop) | The operation of a span. |
| [`sentry.origin`](./sentry.md#sentryorigin) | The origin of the instrumentation (e.g. span, log, etc.) |
| [`sentry.platform`](./sentry.md#sentryplatform) | The sdk platform that generated the event. |
| [`sentry.profile_id`](./sentry.md#sentryprofile_id) | The id of the sentry profile. |
| [`sentry.release`](./sentry.md#sentryrelease) | The sentry release. |
| [`sentry.replay_id`](./sentry.md#sentryreplay_id) | The id of the sentry replay. |
| [`sentry.replay_is_buffering`](./sentry.md#sentryreplay_is_buffering) | A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate). |
| [`sentry.sdk.integrations`](./sentry.md#sentrysdkintegrations) | A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations. |
| [`sentry.sdk.name`](./sentry.md#sentrysdkname) | The sentry sdk name. |
| [`sentry.sdk.version`](./sentry.md#sentrysdkversion) | The sentry sdk version. |
| [`sentry.segment.id`](./sentry.md#sentrysegmentid) | The segment ID of a span |
| [`sentry.segment.name`](./sentry.md#sentrysegmentname) | The segment name of a span |
| [`sentry.server_sample_rate`](./sentry.md#sentryserver_sample_rate) | Rate at which a span was sampled in Relay. |
| [`sentry.span.source`](./sentry.md#sentryspansource) | The source of a span, also referred to as transaction source. Known values are:  `'custom'`, `'url'`, `'route'`, `'component'`, `'view'`, `'task'`. |
| [`sentry.status_code`](./sentry.md#sentrystatus_code) | The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients. |
| [`sentry.status.message`](./sentry.md#sentrystatusmessage) | The from OTLP extracted status message. |
| [`sentry.trace.parent_span_id`](./sentry.md#sentrytraceparent_span_id) | The span id of the span that was active when the log was collected. This should not be set if there was no active span. |
| [`sentry.transaction`](./sentry.md#sentrytransaction) | The sentry transaction (segment name). |
| [`server.address`](./server.md#serveraddress) | Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. |
| [`server.port`](./server.md#serverport) | Server port number. |
| [`service.name`](./service.md#servicename) | Logical name of the service. |
| [`service.version`](./service.md#serviceversion) | The version string of the service API or implementation. The format is not defined by these conventions. |
| [`thread.id`](./thread.md#threadid) | Current “managed” thread ID. |
| [`thread.name`](./thread.md#threadname) | Current thread name. |
| [`timber.tag`](./timber.md#timbertag) | The log tag provided by the timber logging framework. |
| [`type`](./general.md#type) | More granular type of the operation happening. |
| [`ui.component_name`](./ui.md#uicomponent_name) | The name of the associated component. |
| [`ui.contributes_to_ttfd`](./ui.md#uicontributes_to_ttfd) | Whether the span execution contributed to the TTFD (time to fully drawn) metric. |
| [`ui.contributes_to_ttid`](./ui.md#uicontributes_to_ttid) | Whether the span execution contributed to the TTID (time to initial display) metric. |
| [`url.domain`](./url.md#urldomain) | Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name. |
| [`url.fragment`](./url.md#urlfragment) | The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does. |
| [`url.full`](./url.md#urlfull) | The URL of the resource that was fetched. |
| [`url.path`](./url.md#urlpath) | The URI path component. |
| [`url.path.parameter.\<key\>`](./url.md#urlpathparameterkey) | Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router. |
| [`url.port`](./url.md#urlport) | Server port number. |
| [`url.query`](./url.md#urlquery) | The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does. |
| [`url.scheme`](./url.md#urlscheme) | The URI scheme component identifying the used protocol. |
| [`url.template`](./url.md#urltemplate) | The low-cardinality template of an absolute path reference. |
| [`user_agent.original`](./user_agent.md#user_agentoriginal) | Value of the HTTP User-Agent header sent by the client. |
| [`user.email`](./user.md#useremail) | User email address. |
| [`user.full_name`](./user.md#userfull_name) | User's full name. |
| [`user.geo.city`](./user.md#usergeocity) | Human readable city name. |
| [`user.geo.country_code`](./user.md#usergeocountry_code) | Two-letter country code (ISO 3166-1 alpha-2). |
| [`user.geo.region`](./user.md#usergeoregion) | Human readable region name or code. |
| [`user.geo.subdivision`](./user.md#usergeosubdivision) | Human readable subdivision name. |
| [`user.hash`](./user.md#userhash) | Unique user hash to correlate information for a user in anonymized form. |
| [`user.id`](./user.md#userid) | Unique identifier of the user. |
| [`user.ip_address`](./user.md#userip_address) | The IP address of the user. |
| [`user.name`](./user.md#username) | Short name or login/username of the user. |
| [`user.roles`](./user.md#userroles) | Array of user roles at the time of the event. |
| [`vercel.branch`](./vercel.md#vercelbranch) | Git branch name for Vercel project |
| [`vercel.build_id`](./vercel.md#vercelbuild_id) | Identifier for the Vercel build (only present on build logs) |
| [`vercel.deployment_id`](./vercel.md#verceldeployment_id) | Identifier for the Vercel deployment |
| [`vercel.destination`](./vercel.md#verceldestination) | Origin of the external content in Vercel (only on external logs) |
| [`vercel.edge_type`](./vercel.md#verceledge_type) | Type of edge runtime in Vercel |
| [`vercel.entrypoint`](./vercel.md#vercelentrypoint) | Entrypoint for the request in Vercel |
| [`vercel.execution_region`](./vercel.md#vercelexecution_region) | Region where the request is executed |
| [`vercel.id`](./vercel.md#vercelid) | Unique identifier for the log entry in Vercel |
| [`vercel.ja3_digest`](./vercel.md#vercelja3_digest) | JA3 fingerprint digest of Vercel request |
| [`vercel.ja4_digest`](./vercel.md#vercelja4_digest) | JA4 fingerprint digest |
| [`vercel.log_type`](./vercel.md#vercellog_type) | Vercel log output type |
| [`vercel.project_id`](./vercel.md#vercelproject_id) | Identifier for the Vercel project |
| [`vercel.project_name`](./vercel.md#vercelproject_name) | Name of the Vercel project |
| [`vercel.proxy.cache_id`](./vercel.md#vercelproxycache_id) | Original request ID when request is served from cache |
| [`vercel.proxy.client_ip`](./vercel.md#vercelproxyclient_ip) | Client IP address |
| [`vercel.proxy.host`](./vercel.md#vercelproxyhost) | Hostname of the request |
| [`vercel.proxy.lambda_region`](./vercel.md#vercelproxylambda_region) | Region where lambda function executed |
| [`vercel.proxy.method`](./vercel.md#vercelproxymethod) | HTTP method of the request |
| [`vercel.proxy.path`](./vercel.md#vercelproxypath) | Request path with query parameters |
| [`vercel.proxy.path_type`](./vercel.md#vercelproxypath_type) | How the request was served based on its path and project configuration |
| [`vercel.proxy.path_type_variant`](./vercel.md#vercelproxypath_type_variant) | Variant of the path type |
| [`vercel.proxy.referer`](./vercel.md#vercelproxyreferer) | Referer of the request |
| [`vercel.proxy.region`](./vercel.md#vercelproxyregion) | Region where the request is processed |
| [`vercel.proxy.response_byte_size`](./vercel.md#vercelproxyresponse_byte_size) | Size of the response in bytes |
| [`vercel.proxy.scheme`](./vercel.md#vercelproxyscheme) | Protocol of the request |
| [`vercel.proxy.status_code`](./vercel.md#vercelproxystatus_code) | HTTP status code of the proxy request |
| [`vercel.proxy.timestamp`](./vercel.md#vercelproxytimestamp) | Unix timestamp when the proxy request was made |
| [`vercel.proxy.user_agent`](./vercel.md#vercelproxyuser_agent) | User agent strings of the request |
| [`vercel.proxy.vercel_cache`](./vercel.md#vercelproxyvercel_cache) | Cache status sent to the browser |
| [`vercel.proxy.vercel_id`](./vercel.md#vercelproxyvercel_id) | Vercel-specific identifier |
| [`vercel.proxy.waf_action`](./vercel.md#vercelproxywaf_action) | Action taken by firewall rules |
| [`vercel.proxy.waf_rule_id`](./vercel.md#vercelproxywaf_rule_id) | ID of the firewall rule that matched |
| [`vercel.request_id`](./vercel.md#vercelrequest_id) | Identifier of the Vercel request |
| [`vercel.source`](./vercel.md#vercelsource) | Origin of the Vercel log (build, edge, lambda, static, external, or firewall) |
| [`vercel.status_code`](./vercel.md#vercelstatus_code) | HTTP status code of the request (-1 means no response returned and the lambda crashed) |

## Deprecated Attributes

| Attribute | Replacement |
| --- | --- |
| [`ai.completion_tokens.used`](./ai.md#aicompletion_tokensused) | [`gen_ai.usage.output_tokens`](./gen_ai.md#gen_aiusageoutput_tokens) |
| [`ai.finish_reason`](./ai.md#aifinish_reason) | `gen_ai.response.finish_reason` |
| [`ai.frequency_penalty`](./ai.md#aifrequency_penalty) | [`gen_ai.request.frequency_penalty`](./gen_ai.md#gen_airequestfrequency_penalty) |
| [`ai.function_call`](./ai.md#aifunction_call) | [`gen_ai.tool.name`](./gen_ai.md#gen_aitoolname) |
| [`ai.generation_id`](./ai.md#aigeneration_id) | [`gen_ai.response.id`](./gen_ai.md#gen_airesponseid) |
| [`ai.input_messages`](./ai.md#aiinput_messages) | [`gen_ai.request.messages`](./gen_ai.md#gen_airequestmessages) |
| [`ai.model_id`](./ai.md#aimodel_id) | [`gen_ai.response.model`](./gen_ai.md#gen_airesponsemodel) |
| [`ai.model.provider`](./ai.md#aimodelprovider) | [`gen_ai.system`](./gen_ai.md#gen_aisystem) |
| [`ai.pipeline.name`](./ai.md#aipipelinename) | [`gen_ai.pipeline.name`](./gen_ai.md#gen_aipipelinename) |
| [`ai.presence_penalty`](./ai.md#aipresence_penalty) | [`gen_ai.request.presence_penalty`](./gen_ai.md#gen_airequestpresence_penalty) |
| [`ai.prompt_tokens.used`](./ai.md#aiprompt_tokensused) | [`gen_ai.usage.input_tokens`](./gen_ai.md#gen_aiusageinput_tokens) |
| [`ai.responses`](./ai.md#airesponses) | [`gen_ai.response.text`](./gen_ai.md#gen_airesponsetext) |
| [`ai.seed`](./ai.md#aiseed) | [`gen_ai.request.seed`](./gen_ai.md#gen_airequestseed) |
| [`ai.streaming`](./ai.md#aistreaming) | [`gen_ai.response.streaming`](./gen_ai.md#gen_airesponsestreaming) |
| [`ai.temperature`](./ai.md#aitemperature) | [`gen_ai.request.temperature`](./gen_ai.md#gen_airequesttemperature) |
| [`ai.tool_calls`](./ai.md#aitool_calls) | [`gen_ai.response.tool_calls`](./gen_ai.md#gen_airesponsetool_calls) |
| [`ai.tools`](./ai.md#aitools) | [`gen_ai.request.available_tools`](./gen_ai.md#gen_airequestavailable_tools) |
| [`ai.top_k`](./ai.md#aitop_k) | [`gen_ai.request.top_k`](./gen_ai.md#gen_airequesttop_k) |
| [`ai.top_p`](./ai.md#aitop_p) | [`gen_ai.request.top_p`](./gen_ai.md#gen_airequesttop_p) |
| [`ai.total_tokens.used`](./ai.md#aitotal_tokensused) | [`gen_ai.usage.total_tokens`](./gen_ai.md#gen_aiusagetotal_tokens) |
| [`cls`](./general.md#cls) | [`browser.web_vital.cls.value`](./browser.md#browserweb_vitalclsvalue) |
| [`code.filepath`](./code.md#codefilepath) | [`code.file.path`](./code.md#codefilepath) |
| [`code.function`](./code.md#codefunction) | [`code.function.name`](./code.md#codefunctionname) |
| [`code.lineno`](./code.md#codelineno) | [`code.line.number`](./code.md#codelinenumber) |
| [`code.namespace`](./code.md#codenamespace) | [`code.function.name`](./code.md#codefunctionname) |
| [`db.name`](./db.md#dbname) | [`db.namespace`](./db.md#dbnamespace) |
| [`db.operation`](./db.md#dboperation) | [`db.operation.name`](./db.md#dboperationname) |
| [`db.sql.bindings`](./db.md#dbsqlbindings) | [`db.query.parameter.\<key\>`](./db.md#dbqueryparameterkey) |
| [`db.statement`](./db.md#dbstatement) | [`db.query.text`](./db.md#dbquerytext) |
| [`db.system`](./db.md#dbsystem) | [`db.system.name`](./db.md#dbsystemname) |
| [`environment`](./general.md#environment) | [`sentry.environment`](./sentry.md#sentryenvironment) |
| [`fs_error`](./general.md#fs_error) | [`error.type`](./error.md#errortype) |
| [`gen_ai.prompt`](./gen_ai.md#gen_aiprompt) | No replacement |
| [`gen_ai.request.available_tools`](./gen_ai.md#gen_airequestavailable_tools) | [`gen_ai.tool.definitions`](./gen_ai.md#gen_aitooldefinitions) |
| [`gen_ai.request.messages`](./gen_ai.md#gen_airequestmessages) | [`gen_ai.input.messages`](./gen_ai.md#gen_aiinputmessages) |
| [`gen_ai.response.text`](./gen_ai.md#gen_airesponsetext) | [`gen_ai.output.messages`](./gen_ai.md#gen_aioutputmessages) |
| [`gen_ai.response.tool_calls`](./gen_ai.md#gen_airesponsetool_calls) | [`gen_ai.output.messages`](./gen_ai.md#gen_aioutputmessages) |
| [`gen_ai.system.message`](./gen_ai.md#gen_aisystemmessage) | [`gen_ai.system_instructions`](./gen_ai.md#gen_aisystem_instructions) |
| [`gen_ai.usage.completion_tokens`](./gen_ai.md#gen_aiusagecompletion_tokens) | [`gen_ai.usage.output_tokens`](./gen_ai.md#gen_aiusageoutput_tokens) |
| [`gen_ai.usage.prompt_tokens`](./gen_ai.md#gen_aiusageprompt_tokens) | [`gen_ai.usage.input_tokens`](./gen_ai.md#gen_aiusageinput_tokens) |
| [`http.client_ip`](./http.md#httpclient_ip) | [`client.address`](./client.md#clientaddress) |
| [`http.flavor`](./http.md#httpflavor) | [`network.protocol.version`](./network.md#networkprotocolversion) |
| [`http.host`](./http.md#httphost) | [`server.address`](./server.md#serveraddress) |
| [`http.method`](./http.md#httpmethod) | [`http.request.method`](./http.md#httprequestmethod) |
| [`http.response_content_length`](./http.md#httpresponse_content_length) | [`http.response.body.size`](./http.md#httpresponsebodysize) |
| [`http.response_transfer_size`](./http.md#httpresponse_transfer_size) | [`http.response.size`](./http.md#httpresponsesize) |
| [`http.scheme`](./http.md#httpscheme) | [`url.scheme`](./url.md#urlscheme) |
| [`http.server_name`](./http.md#httpserver_name) | [`server.address`](./server.md#serveraddress) |
| [`http.status_code`](./http.md#httpstatus_code) | [`http.response.status_code`](./http.md#httpresponsestatus_code) |
| [`http.target`](./http.md#httptarget) | [`url.path`](./url.md#urlpath) |
| [`http.url`](./http.md#httpurl) | [`url.full`](./url.md#urlfull) |
| [`http.user_agent`](./http.md#httpuser_agent) | [`user_agent.original`](./user_agent.md#user_agentoriginal) |
| [`lcp`](./general.md#lcp) | [`browser.web_vital.lcp.value`](./browser.md#browserweb_vitallcpvalue) |
| [`method`](./general.md#method) | [`http.request.method`](./http.md#httprequestmethod) |
| [`net.host.ip`](./net.md#nethostip) | [`network.local.address`](./network.md#networklocaladdress) |
| [`net.host.name`](./net.md#nethostname) | [`server.address`](./server.md#serveraddress) |
| [`net.host.port`](./net.md#nethostport) | [`server.port`](./server.md#serverport) |
| [`net.peer.ip`](./net.md#netpeerip) | [`network.peer.address`](./network.md#networkpeeraddress) |
| [`net.peer.name`](./net.md#netpeername) | [`server.address`](./server.md#serveraddress) |
| [`net.peer.port`](./net.md#netpeerport) | [`server.port`](./server.md#serverport) |
| [`net.protocol.name`](./net.md#netprotocolname) | [`network.protocol.name`](./network.md#networkprotocolname) |
| [`net.protocol.version`](./net.md#netprotocolversion) | [`network.protocol.version`](./network.md#networkprotocolversion) |
| [`net.sock.family`](./net.md#netsockfamily) | [`network.transport`](./network.md#networktransport) |
| [`net.sock.host.addr`](./net.md#netsockhostaddr) | [`network.local.address`](./network.md#networklocaladdress) |
| [`net.sock.host.port`](./net.md#netsockhostport) | [`network.local.port`](./network.md#networklocalport) |
| [`net.sock.peer.addr`](./net.md#netsockpeeraddr) | [`network.peer.address`](./network.md#networkpeeraddress) |
| [`net.sock.peer.name`](./net.md#netsockpeername) | No replacement |
| [`net.sock.peer.port`](./net.md#netsockpeerport) | [`network.peer.port`](./network.md#networkpeerport) |
| [`net.transport`](./net.md#nettransport) | [`network.transport`](./network.md#networktransport) |
| [`profile_id`](./general.md#profile_id) | [`sentry.profile_id`](./sentry.md#sentryprofile_id) |
| [`query.\<key\>`](./query.md#querykey) | [`url.query`](./url.md#urlquery) |
| [`release`](./general.md#release) | [`sentry.release`](./sentry.md#sentryrelease) |
| [`replay_id`](./general.md#replay_id) | [`sentry.replay_id`](./sentry.md#sentryreplay_id) |
| [`resource.deployment.environment.name`](./resource.md#resourcedeploymentenvironmentname) | [`sentry.environment`](./sentry.md#sentryenvironment) |
| [`route`](./general.md#route) | [`http.route`](./http.md#httproute) |
| [`sentry.browser.name`](./sentry.md#sentrybrowsername) | [`browser.name`](./browser.md#browsername) |
| [`sentry.browser.version`](./sentry.md#sentrybrowserversion) | [`browser.version`](./browser.md#browserversion) |
| [`sentry.segment_id`](./sentry.md#sentrysegment_id) | [`sentry.segment.id`](./sentry.md#sentrysegmentid) |
| [`transaction`](./general.md#transaction) | [`sentry.transaction`](./sentry.md#sentrytransaction) |
| [`url`](./general.md#url) | [`url.full`](./url.md#urlfull) |

