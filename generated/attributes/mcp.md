<!-- THIS FILE IS AUTO-GENERATED. DO NOT EDIT DIRECTLY. -->

# Mcp Attributes

- [Stable Attributes](#stable-attributes)
  - [mcp.cancelled.reason](#mcpcancelledreason)
  - [mcp.cancelled.request_id](#mcpcancelledrequest_id)
  - [mcp.client.name](#mcpclientname)
  - [mcp.client.title](#mcpclienttitle)
  - [mcp.client.version](#mcpclientversion)
  - [mcp.lifecycle.phase](#mcplifecyclephase)
  - [mcp.logging.data_type](#mcploggingdata_type)
  - [mcp.logging.level](#mcplogginglevel)
  - [mcp.logging.logger](#mcplogginglogger)
  - [mcp.logging.message](#mcploggingmessage)
  - [mcp.method.name](#mcpmethodname)
  - [mcp.progress.current](#mcpprogresscurrent)
  - [mcp.progress.message](#mcpprogressmessage)
  - [mcp.progress.percentage](#mcpprogresspercentage)
  - [mcp.progress.token](#mcpprogresstoken)
  - [mcp.progress.total](#mcpprogresstotal)
  - [mcp.prompt.name](#mcppromptname)
  - [mcp.prompt.result.description](#mcppromptresultdescription)
  - [mcp.prompt.result.message_content](#mcppromptresultmessage_content)
  - [mcp.prompt.result.message_count](#mcppromptresultmessage_count)
  - [mcp.prompt.result.message_role](#mcppromptresultmessage_role)
  - [mcp.protocol.ready](#mcpprotocolready)
  - [mcp.protocol.version](#mcpprotocolversion)
  - [mcp.request.argument.\<key\>](#mcprequestargumentkey)
  - [mcp.request.argument.name](#mcprequestargumentname)
  - [mcp.request.argument.uri](#mcprequestargumenturi)
  - [mcp.request.id](#mcprequestid)
  - [mcp.resource.protocol](#mcpresourceprotocol)
  - [mcp.resource.uri](#mcpresourceuri)
  - [mcp.server.name](#mcpservername)
  - [mcp.server.title](#mcpservertitle)
  - [mcp.server.version](#mcpserverversion)
  - [mcp.session.id](#mcpsessionid)
  - [mcp.tool.name](#mcptoolname)
  - [mcp.tool.result.content](#mcptoolresultcontent)
  - [mcp.tool.result.content_count](#mcptoolresultcontent_count)
  - [mcp.tool.result.is_error](#mcptoolresultis_error)
  - [mcp.transport](#mcptransport)

## Stable Attributes

### mcp.cancelled.reason

Reason for the cancellation of an MCP operation.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe (Cancellation reasons may contain user-specific or sensitive information) |
| Exists in OpenTelemetry | No |
| Example | `User cancelled the request` |

### mcp.cancelled.request_id

Request ID of the cancelled MCP operation.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `123` |

### mcp.client.name

Name of the MCP client application.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `claude-desktop` |

### mcp.client.title

Display title of the MCP client application.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe (Client titles may reveal user-specific application configurations or custom setups) |
| Exists in OpenTelemetry | No |
| Example | `Claude Desktop` |

### mcp.client.version

Version of the MCP client application.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1.0.0` |

### mcp.lifecycle.phase

Lifecycle phase indicator for MCP operations.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `initialization_complete` |

### mcp.logging.data_type

Data type of the logged message content.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `string` |

### mcp.logging.level

Log level for MCP logging operations.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `info` |

### mcp.logging.logger

Logger name for MCP logging operations.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe (Logger names may be user-defined and could contain sensitive information) |
| Exists in OpenTelemetry | No |
| Example | `mcp_server` |

### mcp.logging.message

Log message content from MCP logging operations.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true (Log messages can contain user data) |
| Exists in OpenTelemetry | No |
| Example | `Tool execution completed successfully` |

### mcp.method.name

The name of the MCP request or notification method being called.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `tools/call` |

### mcp.progress.current

Current progress value of an MCP operation.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `50` |

### mcp.progress.message

Progress message describing the current state of an MCP operation.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe (Progress messages may contain user-specific or sensitive information) |
| Exists in OpenTelemetry | No |
| Example | `Processing 50 of 100 items` |

### mcp.progress.percentage

Calculated progress percentage of an MCP operation. Computed from current/total * 100.

| Property | Value |
| --- | --- |
| Type | `double` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `50` |

### mcp.progress.token

Token for tracking progress of an MCP operation.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `progress-token-123` |

### mcp.progress.total

Total progress target value of an MCP operation.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `100` |

### mcp.prompt.name

Name of the MCP prompt template being used.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe (Prompt names may reveal user behavior patterns or sensitive operations) |
| Exists in OpenTelemetry | No |
| Example | `summarize` |

### mcp.prompt.result.description

Description of the prompt result.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `A summary of the requested information` |

### mcp.prompt.result.message_content

Content of the message in the prompt result. Used for single message results only.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true |
| Exists in OpenTelemetry | No |
| Example | `Please provide a summary of the document` |

### mcp.prompt.result.message_count

Number of messages in the prompt result.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `3` |

### mcp.prompt.result.message_role

Role of the message in the prompt result. Used for single message results only.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `user` |

### mcp.protocol.ready

Protocol readiness indicator for MCP session. Non-zero value indicates the protocol is ready.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1` |

### mcp.protocol.version

MCP protocol version used in the session.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `2024-11-05` |

### mcp.request.argument.\<key\>

MCP request argument with dynamic key suffix. The \<key\> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true (Arguments contain user input) |
| Exists in OpenTelemetry | No |
| Has dynamic suffix | Yes |
| Example | `mcp.request.argument.query='weather in Paris'` |

### mcp.request.argument.name

Name argument from prompts/get MCP request.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true (Prompt names can contain user input) |
| Exists in OpenTelemetry | No |
| Example | `summarize` |

### mcp.request.argument.uri

URI argument from resources/read MCP request.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true (URIs can contain user file paths) |
| Exists in OpenTelemetry | No |
| Example | `file:///path/to/resource` |

### mcp.request.id

JSON-RPC request identifier for the MCP request. Unique within the MCP session.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1` |

### mcp.resource.protocol

Protocol of the resource URI being accessed, extracted from the URI.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `file` |

### mcp.resource.uri

The resource URI being accessed in an MCP operation.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true (URIs can contain sensitive file paths) |
| Exists in OpenTelemetry | No |
| Example | `file:///path/to/file.txt` |

### mcp.server.name

Name of the MCP server application.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `sentry-mcp-server` |

### mcp.server.title

Display title of the MCP server application.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | maybe (Server titles may reveal user-specific application configurations or custom setups) |
| Exists in OpenTelemetry | No |
| Example | `Sentry MCP Server` |

### mcp.server.version

Version of the MCP server application.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `0.1.0` |

### mcp.session.id

Identifier for the MCP session.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `550e8400-e29b-41d4-a716-446655440000` |

### mcp.tool.name

Name of the MCP tool being called.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `calculator` |

### mcp.tool.result.content

The content of the tool result.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | true (Tool results can contain user data) |
| Exists in OpenTelemetry | No |
| Example | `{"output": "rainy", "toolCallId": "1"}` |

### mcp.tool.result.content_count

Number of content items in the tool result.

| Property | Value |
| --- | --- |
| Type | `integer` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `1` |

### mcp.tool.result.is_error

Whether a tool execution resulted in an error.

| Property | Value |
| --- | --- |
| Type | `boolean` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `false` |

### mcp.transport

Transport method used for MCP communication.

| Property | Value |
| --- | --- |
| Type | `string` |
| Has PII | false |
| Exists in OpenTelemetry | No |
| Example | `stdio` |

