"""Span operation constants as defined in the Sentry Semantic Conventions registry."""

# This is an auto-generated file. Do not edit!

# Path: model/op/browser.json
# Name: browser

BROWSER_PAGELOAD_SPAN_OP: str = "pageload"
"""A full page load of a web application."""

BROWSER_NAVIGATION_SPAN_OP: str = "navigation"
"""Client-side browser history change in a web application."""

BROWSER_RESOURCE_SPAN_OP: str = "resource"
"""Resource as per [Performance Resource Timing](https://w3c.github.io/resource-timing/#sec-performanceresourcetiming). Defaults to resource.other if resource cannot be indentified."""

BROWSER_RESOURCE_SCRIPT_SPAN_OP: str = "resource.script"

BROWSER_RESOURCE_LINK_SPAN_OP: str = "resource.link"

BROWSER_RESOURCE_IMG_SPAN_OP: str = "resource.img"

BROWSER_RESOURCE_CSS_SPAN_OP: str = "resource.css"

BROWSER_RESOURCE_OTHER_SPAN_OP: str = "resource.other"

BROWSER_BROWSER_SPAN_OP: str = "browser"
"""Usage of browser APIs or functionality"""

BROWSER_BROWSER_PAINT_SPAN_OP: str = "browser.paint"

BROWSER_UI_SPAN_OP: str = "ui"
"""Operations related to browser UI"""

BROWSER_UI_TASK_SPAN_OP: str = "ui.task"
"""A task that is taken on the main UI thread. Typically used to indicate to users about things like the [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming)."""

BROWSER_UI_RENDER_SPAN_OP: str = "ui.render"

BROWSER_UI_ACTION_SPAN_OP: str = "ui.action"

BROWSER_UI_ACTION_CLICK_SPAN_OP: str = "ui.action.click"

BROWSER_UI_REACT_SPAN_OP: str = "ui.react"

BROWSER_UI_REACT_MOUNT_SPAN_OP: str = "ui.react.mount"

BROWSER_UI_REACT_RENDER_SPAN_OP: str = "ui.react.render"

BROWSER_UI_REACT_UPDATE_SPAN_OP: str = "ui.react.update"

BROWSER_UI_VUE_SPAN_OP: str = "ui.vue"

BROWSER_UI_SVELTE_SPAN_OP: str = "ui.svelte"

BROWSER_UI_ANGULAR_SPAN_OP: str = "ui.angular"

BROWSER_UI_EMBER_SPAN_OP: str = "ui.ember"

BROWSER_UI_LIVEWIRE_SPAN_OP: str = "ui.livewire"

# Path: model/op/database.json
# Name: database

# Description: Database related spans are expected to follow OpenTelemetry's Database semantic conventions when possible.

DATABASE_DB_SPAN_OP: str = "db"

DATABASE_DB_QUERY_SPAN_OP: str = "db.query"

DATABASE_CACHE_SPAN_OP: str = "cache"

# Path: model/op/faas.json
# Name: faas

# Description: Serverless (FAAS)

FAAS_HTTP_SPAN_OP: str = "http"

FAAS_GRPC_SPAN_OP: str = "grpc"

FAAS_FUNCTION_GCP_SPAN_OP: str = "function.gcp"

FAAS_FUNCTION_AWS_SPAN_OP: str = "function.aws"

FAAS_FUNCTION_AZURE_SPAN_OP: str = "function.azure"

# Path: model/op/gen_ai.json
# Name: gen_ai

# Description: Operations related to Generative AI interactions

GEN_AI_CHAT_SPAN_OP: str = "chat"
"""A chat interaction with a generative AI model"""

GEN_AI_EXECUTE_TOOL_SPAN_OP: str = "execute_tool"
"""Execution of a tool or function by a generative AI model"""

GEN_AI_HANDOFF_SPAN_OP: str = "handoff"
"""Handoff of control between different AI agents or components"""

GEN_AI_INVOKE_AGENT_SPAN_OP: str = "invoke_agent"
"""Invocation of an AI agent to perform a task"""

# Path: model/op/general.json
# Name: general

GENERAL_MARK_SPAN_OP: str = "mark"
"""A general point-in-time span indicating an event"""

GENERAL_FUNCTION_SPAN_OP: str = "function"
"""The time it took for a set of instructions to execute"""

# Path: model/op/mobile.json
# Name: mobile

MOBILE_APP_SPAN_OP: str = "app"

MOBILE_UI_SPAN_OP: str = "ui"

MOBILE_NAVIGATION_SPAN_OP: str = "navigation"

MOBILE_FILE_SPAN_OP: str = "file"

MOBILE_SERIALIZE_SPAN_OP: str = "serialize"

MOBILE_HTTP_SPAN_OP: str = "http"

# Path: model/op/web_server.json
# Name: web_server

WEB_SERVER_HTTP_SPAN_OP: str = "http"
"""A general point-in-time span indicating an event"""

WEB_SERVER_HTTP_CLIENT_SPAN_OP: str = "http.client"

WEB_SERVER_HTTP_SERVER_SPAN_OP: str = "http.server"

WEB_SERVER_WEBSOCKET_SPAN_OP: str = "websocket"

WEB_SERVER_RPC_SPAN_OP: str = "rpc"

WEB_SERVER_GRPC_SPAN_OP: str = "grpc"

WEB_SERVER_GRAPHQL_SPAN_OP: str = "graphql"

WEB_SERVER_SUBPROCESS_SPAN_OP: str = "subprocess"

WEB_SERVER_MIDDLEWARE_SPAN_OP: str = "middleware"

WEB_SERVER_VIEW_SPAN_OP: str = "view"

WEB_SERVER_TEMPLATE_SPAN_OP: str = "template"

WEB_SERVER_FUNCTION_SPAN_OP: str = "function"

WEB_SERVER_FUNCTION_REMIX_SPAN_OP: str = "function.remix"

WEB_SERVER_FUNCTION_NEXTJS_SPAN_OP: str = "function.nextjs"

WEB_SERVER_SERIALIZE_SPAN_OP: str = "serialize"

WEB_SERVER_CONSOLE_SPAN_OP: str = "console"

WEB_SERVER_FILE_SPAN_OP: str = "file"

WEB_SERVER_APP_SPAN_OP: str = "app"
