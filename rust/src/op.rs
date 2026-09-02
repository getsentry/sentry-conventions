// This is an auto-generated file. Do not edit!

// Path: model/op/browser.json
// Name: browser

/// A full page load of a web application.
pub const PAGELOAD: &str = "pageload";

/// Client-side browser history change in a web application.
pub const NAVIGATION: &str = "navigation";

/// A client-side automatic redirect navigation (e.g. from framework router redirects) triggerign a browser history change.
pub const NAVIGATION_REDIRECT: &str = "navigation.redirect";

/// Resource as per [Performance Resource Timing](https://w3c.github.io/resource-timing/#sec-performanceresourcetiming). Defaults to resource.other if resource cannot be indentified.
pub const RESOURCE: &str = "resource";

pub const RESOURCE_SCRIPT: &str = "resource.script";

pub const RESOURCE_LINK: &str = "resource.link";

pub const RESOURCE_IMG: &str = "resource.img";

pub const RESOURCE_CSS: &str = "resource.css";

pub const RESOURCE_AUDIO: &str = "resource.audio";

pub const RESOURCE_VIDEO: &str = "resource.video";

pub const RESOURCE_IFRAME: &str = "resource.iframe";

pub const RESOURCE_OTHER: &str = "resource.other";

/// Loading of a resource initiated by a worker (e.g. Web Worker or Service Worker).
pub const RESOURCE_WORKER: &str = "resource.worker";

/// Loading of an icon resource.
pub const RESOURCE_ICON: &str = "resource.icon";

/// Loading of a resource initiated by a frame.
pub const RESOURCE_FRAME: &str = "resource.frame";

/// Loading of a resource initiated by an `<object>` element.
pub const RESOURCE_OBJECT: &str = "resource.object";

/// A hyperlink auditing ping request.
pub const RESOURCE_PING: &str = "resource.ping";

/// Loading of a `<track>` element resource (e.g. subtitles or captions).
pub const RESOURCE_TRACK: &str = "resource.track";

/// Usage of browser APIs or functionality
pub const BROWSER: &str = "browser";

pub const BROWSER_PAINT: &str = "browser.paint";

/// The unload event phase of a browser navigation.
pub const BROWSER_UNLOAD_EVENT: &str = "browser.unload_event";

/// The redirect phase of a browser navigation.
pub const BROWSER_REDIRECT: &str = "browser.redirect";

/// The DOMContentLoaded event phase of a browser navigation.
pub const BROWSER_DOM_CONTENT_LOADED_EVENT: &str = "browser.dom_content_loaded_event";

/// The load event phase of a browser navigation.
pub const BROWSER_LOAD_EVENT: &str = "browser.load_event";

/// The connection phase of a browser navigation.
pub const BROWSER_CONNECT: &str = "browser.connect";

/// The secure connection (TLS/SSL) phase of a browser navigation.
pub const BROWSER_TLS_SSL: &str = "browser.tls_ssl";

/// The cache lookup / fetch start phase of a browser navigation.
pub const BROWSER_CACHE: &str = "browser.cache";

/// The DNS domain lookup phase of a browser navigation.
pub const BROWSER_DNS: &str = "browser.dns";

/// The request phase of a browser navigation.
pub const BROWSER_REQUEST: &str = "browser.request";

/// The response phase of a browser navigation.
pub const BROWSER_RESPONSE: &str = "browser.response";

/// Operations related to browser UI
pub const UI: &str = "ui";

/// A task that is taken on the main UI thread. Typically used to indicate to users about things like the [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming).
pub const UI_TASK: &str = "ui.task";

pub const UI_RENDER: &str = "ui.render";

/// Mounting of a UI component or application (e.g. initial render/bootstrap).
pub const UI_MOUNT: &str = "ui.mount";

/// Updating of an already-mounted UI component.
pub const UI_UPDATE: &str = "ui.update";

/// Unmounting/teardown of a UI component.
pub const UI_UNMOUNT: &str = "ui.unmount";

/// A long task on the main UI thread, as reported by the Long Tasks API.
pub const UI_LONG_TASK: &str = "ui.long_task";

/// A long animation frame, as reported by the Long Animation Frames API.
pub const UI_LONG_ANIMATION_FRAME: &str = "ui.long_animation_frame";

/// A click interaction measured via Interaction to Next Paint (INP).
pub const UI_INTERACTION_CLICK: &str = "ui.interaction.click";

/// A hover interaction measured via Interaction to Next Paint (INP).
pub const UI_INTERACTION_HOVER: &str = "ui.interaction.hover";

/// A drag interaction measured via Interaction to Next Paint (INP).
pub const UI_INTERACTION_DRAG: &str = "ui.interaction.drag";

/// A key press interaction measured via Interaction to Next Paint (INP).
pub const UI_INTERACTION_PRESS: &str = "ui.interaction.press";

/// A Largest Contentful Paint (LCP) web vital measurement.
pub const UI_WEBVITAL_LCP: &str = "ui.webvital.lcp";

/// A Cumulative Layout Shift (CLS) web vital measurement.
pub const UI_WEBVITAL_CLS: &str = "ui.webvital.cls";

pub const UI_ACTION: &str = "ui.action";

pub const UI_ACTION_CLICK: &str = "ui.action.click";

pub const UI_REACT: &str = "ui.react";

pub const UI_REACT_MOUNT: &str = "ui.react.mount";

pub const UI_REACT_RENDER: &str = "ui.react.render";

pub const UI_REACT_UPDATE: &str = "ui.react.update";

pub const UI_VUE: &str = "ui.vue";

pub const UI_SVELTE: &str = "ui.svelte";

pub const UI_ANGULAR: &str = "ui.angular";

pub const UI_EMBER: &str = "ui.ember";

pub const UI_LIVEWIRE: &str = "ui.livewire";

// Path: model/op/database.json
// Name: database

// Description: Database related spans are expected to follow OpenTelemetry's Database semantic conventions when possible.
pub const DB: &str = "db";

pub const DB_QUERY: &str = "db.query";

pub const CACHE: &str = "cache";

pub const CACHE_GET: &str = "cache.get";

pub const CACHE_PUT: &str = "cache.put";

pub const CACHE_REMOVE: &str = "cache.remove";

// Path: model/op/faas.json
// Name: faas

// Description: Serverless (FAAS)
pub const GRPC: &str = "grpc";

pub const FUNCTION_GCP: &str = "function.gcp";

pub const FUNCTION_AWS: &str = "function.aws";

pub const FUNCTION_AZURE: &str = "function.azure";

// Path: model/op/gen_ai.json
// Name: gen_ai

// Description: Operations related to Generative AI interactions
/// A chat interaction with a generative AI model
pub const GEN_AI_CHAT: &str = "gen_ai.chat";

/// Execution of a tool or function by a generative AI model
pub const GEN_AI_EXECUTE_TOOL: &str = "gen_ai.execute_tool";

/// Handoff of control between different AI agents or components
pub const GEN_AI_HANDOFF: &str = "gen_ai.handoff";

/// Invocation of an AI agent to perform a task
pub const GEN_AI_INVOKE_AGENT: &str = "gen_ai.invoke_agent";

/// Generation of embeddings by a generative AI model
pub const GEN_AI_EMBEDDINGS: &str = "gen_ai.embeddings";

/// Content generation by a generative AI model
pub const GEN_AI_GENERATE_CONTENT: &str = "gen_ai.generate_content";

/// Reranking of documents or results by a generative AI model
pub const GEN_AI_RERANK: &str = "gen_ai.rerank";

/// Creation of an AI agent that can later be invoked to perform a task
pub const GEN_AI_CREATE_AGENT: &str = "gen_ai.create_agent";

/// An interaction with a generative AI model through a responses API
pub const GEN_AI_RESPONSES: &str = "gen_ai.responses";

/// A text completion request to a generative AI model
pub const GEN_AI_TEXT_COMPLETION: &str = "gen_ai.text_completion";

// Path: model/op/general.json
// Name: general

/// A general point-in-time span indicating an event
pub const MARK: &str = "mark";

/// The time it took for a set of instructions to execute
pub const FUNCTION: &str = "function";

/// A user-defined measurement of the duration between two points in time
pub const MEASURE: &str = "measure";

// Path: model/op/mcp.json
// Name: mcp

// Description: Operations related to Model Context Protocol (MCP) interactions
/// A request handled by an MCP server (e.g. a tool call, resource read, or prompt request).
pub const MCP_SERVER: &str = "mcp.server";

/// A notification sent from an MCP client to an MCP server.
pub const MCP_NOTIFICATION_CLIENT_TO_SERVER: &str = "mcp.notification.client_to_server";

/// A notification sent from an MCP server to an MCP client.
pub const MCP_NOTIFICATION_SERVER_TO_CLIENT: &str = "mcp.notification.server_to_client";

// Path: model/op/messaging.json
// Name: messaging

// Description: Messaging related spans represent operations on topics in streaming data systems and queues, such as producing and consuming messages in Kafka, RabbitMQ.
/// A general queue operation.
pub const QUEUE: &str = "queue";

/// Publishing a message to a queue.
pub const QUEUE_PUBLISH: &str = "queue.publish";

/// Creating a queue or a message for later publishing.
pub const QUEUE_CREATE: &str = "queue.create";

/// Receiving a message from a queue.
pub const QUEUE_RECEIVE: &str = "queue.receive";

/// Processing a message from a queue.
pub const QUEUE_PROCESS: &str = "queue.process";

/// Settling a message, e.g. acknowledging or rejecting it.
pub const QUEUE_SETTLE: &str = "queue.settle";

/// Publishing a message to an arq queue.
pub const QUEUE_SUBMIT_ARQ: &str = "queue.submit.arq";

/// Processing a message from an arq queue.
pub const QUEUE_TASK_ARQ: &str = "queue.task.arq";

/// Publishing a message to a Celery broker.
pub const QUEUE_SUBMIT_CELERY: &str = "queue.submit.celery";

/// Processing a message from a Celery queue.
pub const QUEUE_TASK_CELERY: &str = "queue.task.celery";

/// Processing a message from a Dramatiq queue.
pub const QUEUE_TASK_DRAMATIQ: &str = "queue.task.dramatiq";

/// Publishing a message to a Huey instance.
pub const QUEUE_SUBMIT_HUEY: &str = "queue.submit.huey";

/// Processing a message from a Huey instance.
pub const QUEUE_TASK_HUEY: &str = "queue.task.huey";

/// Processing a message from an RQ queue.
pub const QUEUE_TASK_RQ: &str = "queue.task.rq";

// Path: model/op/mobile.json
// Name: mobile

pub const APP: &str = "app";

pub const FILE: &str = "file";

pub const SERIALIZE: &str = "serialize";

// Path: model/op/object.json
// Name: object

// Description: Object storage related spans represent operations on object storage systems such as Cloudflare R2, Amazon S3, and compatible services.
/// Retrieving an object from an object store.
pub const OBJECT_GET: &str = "object.get";

/// Retrieving the metadata of an object from an object store.
pub const OBJECT_HEAD: &str = "object.head";

/// Storing an object in an object store.
pub const OBJECT_PUT: &str = "object.put";

/// Deleting an object from an object store.
pub const OBJECT_DELETE: &str = "object.delete";

/// Listing objects in an object store.
pub const OBJECT_LIST: &str = "object.list";

/// Uploading a single part of a multipart upload to an object store.
pub const OBJECT_UPLOAD_PART: &str = "object.upload_part";

/// Aborting a multipart upload to an object store.
pub const OBJECT_MULTIPART_UPLOAD_ABORT: &str = "object.multipart_upload.abort";

/// Creating a multipart upload to an object store.
pub const OBJECT_MULTIPART_UPLOAD_CREATE: &str = "object.multipart_upload.create";

/// Completing a multipart upload to an object store.
pub const OBJECT_MULTIPART_UPLOAD_COMPLETE: &str = "object.multipart_upload.complete";

// Path: model/op/routing.json
// Name: routing

// Description: Routing related spans represent work performed by frontend and backend application routers.
/// A framework-neutral operation for work performed by an application router.
pub const ROUTER: &str = "router";

// Path: model/op/web_server.json
// Name: web_server

/// A general point-in-time span indicating an event
pub const HTTP: &str = "http";

pub const HTTP_CLIENT: &str = "http.client";

/// Consumption of a streaming HTTP client response body
pub const HTTP_CLIENT_STREAM: &str = "http.client.stream";

pub const HTTP_SERVER: &str = "http.server";

pub const WEBSOCKET: &str = "websocket";

pub const RPC: &str = "rpc";

pub const GRAPHQL: &str = "graphql";

pub const SUBPROCESS: &str = "subprocess";

pub const MIDDLEWARE: &str = "middleware";

/// Handling of an incoming request by a web server route handler
pub const HANDLER: &str = "handler";

pub const VIEW: &str = "view";

pub const TEMPLATE: &str = "template";

pub const FUNCTION_REMIX: &str = "function.remix";

pub const FUNCTION_NEXTJS: &str = "function.nextjs";

pub const CONSOLE: &str = "console";