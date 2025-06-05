// This is an auto-generated file. Do not edit!

// Path: model/op/browser.json
// Name: browser

/// A full page load of a web application.
pub const BROWSER_PAGELOAD_SPAN_OP: &str = "pageload";

/// Client-side browser history change in a web application.
pub const BROWSER_NAVIGATION_SPAN_OP: &str = "navigation";

/// Resource as per [Performance Resource Timing](https://w3c.github.io/resource-timing/#sec-performanceresourcetiming). Defaults to resource.other if resource cannot be indentified.
pub const BROWSER_RESOURCE_SPAN_OP: &str = "resource";

pub const BROWSER_RESOURCE_SCRIPT_SPAN_OP: &str = "resource.script";

pub const BROWSER_RESOURCE_LINK_SPAN_OP: &str = "resource.link";

pub const BROWSER_RESOURCE_IMG_SPAN_OP: &str = "resource.img";

pub const BROWSER_RESOURCE_CSS_SPAN_OP: &str = "resource.css";

pub const BROWSER_RESOURCE_OTHER_SPAN_OP: &str = "resource.other";

/// Usage of browser APIs or functionality
pub const BROWSER_BROWSER_SPAN_OP: &str = "browser";

pub const BROWSER_BROWSER_PAINT_SPAN_OP: &str = "browser.paint";

/// Operations related to browser UI
pub const BROWSER_UI_SPAN_OP: &str = "ui";

/// A task that is taken on the main UI thread. Typically used to indicate to users about things like the [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming).
pub const BROWSER_UI_TASK_SPAN_OP: &str = "ui.task";

pub const BROWSER_UI_RENDER_SPAN_OP: &str = "ui.render";

pub const BROWSER_UI_ACTION_SPAN_OP: &str = "ui.action";

pub const BROWSER_UI_ACTION_CLICK_SPAN_OP: &str = "ui.action.click";

pub const BROWSER_UI_REACT_SPAN_OP: &str = "ui.react";

pub const BROWSER_UI_REACT_MOUNT_SPAN_OP: &str = "ui.react.mount";

pub const BROWSER_UI_REACT_RENDER_SPAN_OP: &str = "ui.react.render";

pub const BROWSER_UI_REACT_UPDATE_SPAN_OP: &str = "ui.react.update";

pub const BROWSER_UI_VUE_SPAN_OP: &str = "ui.vue";

pub const BROWSER_UI_SVELTE_SPAN_OP: &str = "ui.svelte";

pub const BROWSER_UI_ANGULAR_SPAN_OP: &str = "ui.angular";

pub const BROWSER_UI_EMBER_SPAN_OP: &str = "ui.ember";

pub const BROWSER_UI_LIVEWIRE_SPAN_OP: &str = "ui.livewire";

// Path: model/op/database.json
// Name: database

// Description: Database related spans are expected to follow OpenTelemetry's Database semantic conventions when possible.
pub const DATABASE_DB_SPAN_OP: &str = "db";

pub const DATABASE_DB_QUERY_SPAN_OP: &str = "db.query";

pub const DATABASE_CACHE_SPAN_OP: &str = "cache";

// Path: model/op/faas.json
// Name: faas

// Description: Serverless (FAAS)
pub const FAAS_HTTP_SPAN_OP: &str = "http";

pub const FAAS_GRPC_SPAN_OP: &str = "grpc";

pub const FAAS_FUNCTION_GCP_SPAN_OP: &str = "function.gcp";

pub const FAAS_FUNCTION_AWS_SPAN_OP: &str = "function.aws";

pub const FAAS_FUNCTION_AZURE_SPAN_OP: &str = "function.azure";

// Path: model/op/gen_ai.json
// Name: gen_ai

// Description: Operations related to Generative AI interactions
/// A chat interaction with a generative AI model
pub const GEN_AI_CHAT_SPAN_OP: &str = "chat";

/// Execution of a tool or function by a generative AI model
pub const GEN_AI_EXECUTE_TOOL_SPAN_OP: &str = "execute_tool";

/// Handoff of control between different AI agents or components
pub const GEN_AI_HANDOFF_SPAN_OP: &str = "handoff";

/// Invocation of an AI agent to perform a task
pub const GEN_AI_INVOKE_AGENT_SPAN_OP: &str = "invoke_agent";

// Path: model/op/general.json
// Name: general

/// A general point-in-time span indicating an event
pub const GENERAL_MARK_SPAN_OP: &str = "mark";

/// The time it took for a set of instructions to execute
pub const GENERAL_FUNCTION_SPAN_OP: &str = "function";

// Path: model/op/mobile.json
// Name: mobile

pub const MOBILE_APP_SPAN_OP: &str = "app";

pub const MOBILE_UI_SPAN_OP: &str = "ui";

pub const MOBILE_NAVIGATION_SPAN_OP: &str = "navigation";

pub const MOBILE_FILE_SPAN_OP: &str = "file";

pub const MOBILE_SERIALIZE_SPAN_OP: &str = "serialize";

pub const MOBILE_HTTP_SPAN_OP: &str = "http";

// Path: model/op/web_server.json
// Name: web_server

/// A general point-in-time span indicating an event
pub const WEB_SERVER_HTTP_SPAN_OP: &str = "http";

pub const WEB_SERVER_HTTP_CLIENT_SPAN_OP: &str = "http.client";

pub const WEB_SERVER_HTTP_SERVER_SPAN_OP: &str = "http.server";

pub const WEB_SERVER_WEBSOCKET_SPAN_OP: &str = "websocket";

pub const WEB_SERVER_RPC_SPAN_OP: &str = "rpc";

pub const WEB_SERVER_GRPC_SPAN_OP: &str = "grpc";

pub const WEB_SERVER_GRAPHQL_SPAN_OP: &str = "graphql";

pub const WEB_SERVER_SUBPROCESS_SPAN_OP: &str = "subprocess";

pub const WEB_SERVER_MIDDLEWARE_SPAN_OP: &str = "middleware";

pub const WEB_SERVER_VIEW_SPAN_OP: &str = "view";

pub const WEB_SERVER_TEMPLATE_SPAN_OP: &str = "template";

pub const WEB_SERVER_FUNCTION_SPAN_OP: &str = "function";

pub const WEB_SERVER_FUNCTION_REMIX_SPAN_OP: &str = "function.remix";

pub const WEB_SERVER_FUNCTION_NEXTJS_SPAN_OP: &str = "function.nextjs";

pub const WEB_SERVER_SERIALIZE_SPAN_OP: &str = "serialize";

pub const WEB_SERVER_CONSOLE_SPAN_OP: &str = "console";

pub const WEB_SERVER_FILE_SPAN_OP: &str = "file";

pub const WEB_SERVER_APP_SPAN_OP: &str = "app";