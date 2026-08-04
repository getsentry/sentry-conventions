// This is an auto-generated file. Do not edit!

// Path: model/op/browser.json
// Name: browser

/// A full page load of a web application.
pub const BROWSER_PAGELOAD_SPAN_OP: &str = "pageload";

/// Client-side browser history change in a web application.
pub const BROWSER_NAVIGATION_SPAN_OP: &str = "navigation";

/// A client-side automatic redirect navigation (e.g. from framework router redirects) triggerign a browser history change.
pub const BROWSER_NAVIGATION_REDIRECT_SPAN_OP: &str = "navigation.redirect";

/// Resource as per [Performance Resource Timing](https://w3c.github.io/resource-timing/#sec-performanceresourcetiming). Defaults to resource.other if resource cannot be indentified.
pub const BROWSER_RESOURCE_SPAN_OP: &str = "resource";

pub const BROWSER_RESOURCE_SCRIPT_SPAN_OP: &str = "resource.script";

pub const BROWSER_RESOURCE_LINK_SPAN_OP: &str = "resource.link";

pub const BROWSER_RESOURCE_IMG_SPAN_OP: &str = "resource.img";

pub const BROWSER_RESOURCE_CSS_SPAN_OP: &str = "resource.css";

pub const BROWSER_RESOURCE_AUDIO_SPAN_OP: &str = "resource.audio";

pub const BROWSER_RESOURCE_VIDEO_SPAN_OP: &str = "resource.video";

pub const BROWSER_RESOURCE_IFRAME_SPAN_OP: &str = "resource.iframe";

pub const BROWSER_RESOURCE_OTHER_SPAN_OP: &str = "resource.other";

/// Loading of a resource initiated by a worker (e.g. Web Worker or Service Worker).
pub const BROWSER_RESOURCE_WORKER_SPAN_OP: &str = "resource.worker";

/// Loading of an icon resource.
pub const BROWSER_RESOURCE_ICON_SPAN_OP: &str = "resource.icon";

/// Loading of a resource initiated by a frame.
pub const BROWSER_RESOURCE_FRAME_SPAN_OP: &str = "resource.frame";

/// Loading of a resource initiated by an `<object>` element.
pub const BROWSER_RESOURCE_OBJECT_SPAN_OP: &str = "resource.object";

/// A hyperlink auditing ping request.
pub const BROWSER_RESOURCE_PING_SPAN_OP: &str = "resource.ping";

/// Loading of a `<track>` element resource (e.g. subtitles or captions).
pub const BROWSER_RESOURCE_TRACK_SPAN_OP: &str = "resource.track";

/// Usage of browser APIs or functionality
pub const BROWSER_BROWSER_SPAN_OP: &str = "browser";

pub const BROWSER_BROWSER_PAINT_SPAN_OP: &str = "browser.paint";

/// The unload event phase of a browser navigation.
pub const BROWSER_BROWSER_UNLOAD_EVENT_SPAN_OP: &str = "browser.unload_event";

/// The redirect phase of a browser navigation.
pub const BROWSER_BROWSER_REDIRECT_SPAN_OP: &str = "browser.redirect";

/// The DOMContentLoaded event phase of a browser navigation.
pub const BROWSER_BROWSER_DOM_CONTENT_LOADED_EVENT_SPAN_OP: &str = "browser.dom_content_loaded_event";

/// The load event phase of a browser navigation.
pub const BROWSER_BROWSER_LOAD_EVENT_SPAN_OP: &str = "browser.load_event";

/// The connection phase of a browser navigation.
pub const BROWSER_BROWSER_CONNECT_SPAN_OP: &str = "browser.connect";

/// The secure connection (TLS/SSL) phase of a browser navigation.
pub const BROWSER_BROWSER_TLS_SSL_SPAN_OP: &str = "browser.tls_ssl";

/// The cache lookup / fetch start phase of a browser navigation.
pub const BROWSER_BROWSER_CACHE_SPAN_OP: &str = "browser.cache";

/// The DNS domain lookup phase of a browser navigation.
pub const BROWSER_BROWSER_DNS_SPAN_OP: &str = "browser.dns";

/// The request phase of a browser navigation.
pub const BROWSER_BROWSER_REQUEST_SPAN_OP: &str = "browser.request";

/// The response phase of a browser navigation.
pub const BROWSER_BROWSER_RESPONSE_SPAN_OP: &str = "browser.response";

/// Operations related to browser UI
pub const BROWSER_UI_SPAN_OP: &str = "ui";

/// A task that is taken on the main UI thread. Typically used to indicate to users about things like the [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming).
pub const BROWSER_UI_TASK_SPAN_OP: &str = "ui.task";

pub const BROWSER_UI_RENDER_SPAN_OP: &str = "ui.render";

/// Mounting of a UI component or application (e.g. initial render/bootstrap).
pub const BROWSER_UI_MOUNT_SPAN_OP: &str = "ui.mount";

/// Updating of an already-mounted UI component.
pub const BROWSER_UI_UPDATE_SPAN_OP: &str = "ui.update";

/// Unmounting/teardown of a UI component.
pub const BROWSER_UI_UNMOUNT_SPAN_OP: &str = "ui.unmount";

/// A long task on the main UI thread, as reported by the Long Tasks API.
pub const BROWSER_UI_LONG_TASK_SPAN_OP: &str = "ui.long_task";

/// A long animation frame, as reported by the Long Animation Frames API.
pub const BROWSER_UI_LONG_ANIMATION_FRAME_SPAN_OP: &str = "ui.long_animation_frame";

/// A click interaction measured via Interaction to Next Paint (INP).
pub const BROWSER_UI_INTERACTION_CLICK_SPAN_OP: &str = "ui.interaction.click";

/// A hover interaction measured via Interaction to Next Paint (INP).
pub const BROWSER_UI_INTERACTION_HOVER_SPAN_OP: &str = "ui.interaction.hover";

/// A drag interaction measured via Interaction to Next Paint (INP).
pub const BROWSER_UI_INTERACTION_DRAG_SPAN_OP: &str = "ui.interaction.drag";

/// A key press interaction measured via Interaction to Next Paint (INP).
pub const BROWSER_UI_INTERACTION_PRESS_SPAN_OP: &str = "ui.interaction.press";

/// A Largest Contentful Paint (LCP) web vital measurement.
pub const BROWSER_UI_WEBVITAL_LCP_SPAN_OP: &str = "ui.webvital.lcp";

/// A Cumulative Layout Shift (CLS) web vital measurement.
pub const BROWSER_UI_WEBVITAL_CLS_SPAN_OP: &str = "ui.webvital.cls";

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

pub const DATABASE_CACHE_GET_SPAN_OP: &str = "cache.get";

pub const DATABASE_CACHE_PUT_SPAN_OP: &str = "cache.put";

pub const DATABASE_CACHE_REMOVE_SPAN_OP: &str = "cache.remove";

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
pub const GEN_AI_GEN_AI_CHAT_SPAN_OP: &str = "gen_ai.chat";

/// Execution of a tool or function by a generative AI model
pub const GEN_AI_GEN_AI_EXECUTE_TOOL_SPAN_OP: &str = "gen_ai.execute_tool";

/// Handoff of control between different AI agents or components
pub const GEN_AI_GEN_AI_HANDOFF_SPAN_OP: &str = "gen_ai.handoff";

/// Invocation of an AI agent to perform a task
pub const GEN_AI_GEN_AI_INVOKE_AGENT_SPAN_OP: &str = "gen_ai.invoke_agent";

/// Generation of embeddings by a generative AI model
pub const GEN_AI_GEN_AI_EMBEDDINGS_SPAN_OP: &str = "gen_ai.embeddings";

/// Content generation by a generative AI model
pub const GEN_AI_GEN_AI_GENERATE_CONTENT_SPAN_OP: &str = "gen_ai.generate_content";

/// Reranking of documents or results by a generative AI model
pub const GEN_AI_GEN_AI_RERANK_SPAN_OP: &str = "gen_ai.rerank";

// Path: model/op/general.json
// Name: general

/// A general point-in-time span indicating an event
pub const GENERAL_MARK_SPAN_OP: &str = "mark";

/// The time it took for a set of instructions to execute
pub const GENERAL_FUNCTION_SPAN_OP: &str = "function";

/// A user-defined measurement of the duration between two points in time
pub const GENERAL_MEASURE_SPAN_OP: &str = "measure";

// Path: model/op/messaging.json
// Name: messaging

// Description: Messaging related spans represent operations on topics in streaming data systems and queues, such as producing and consuming messages in Kafka, RabbitMQ.
/// A general queue operation.
pub const MESSAGING_QUEUE_SPAN_OP: &str = "queue";

/// Publishing a message to a queue.
pub const MESSAGING_QUEUE_PUBLISH_SPAN_OP: &str = "queue.publish";

/// Creating a queue or a message for later publishing.
pub const MESSAGING_QUEUE_CREATE_SPAN_OP: &str = "queue.create";

/// Receiving a message from a queue.
pub const MESSAGING_QUEUE_RECEIVE_SPAN_OP: &str = "queue.receive";

/// Processing a message from a queue.
pub const MESSAGING_QUEUE_PROCESS_SPAN_OP: &str = "queue.process";

/// Settling a message, e.g. acknowledging or rejecting it.
pub const MESSAGING_QUEUE_SETTLE_SPAN_OP: &str = "queue.settle";

/// Publishing a message to an arq queue.
pub const MESSAGING_QUEUE_SUBMIT_ARQ_SPAN_OP: &str = "queue.submit.arq";

/// Processing a message from an arq queue.
pub const MESSAGING_QUEUE_TASK_ARQ_SPAN_OP: &str = "queue.task.arq";

/// Publishing a message to a Celery broker.
pub const MESSAGING_QUEUE_SUBMIT_CELERY_SPAN_OP: &str = "queue.submit.celery";

/// Processing a message from a Celery queue.
pub const MESSAGING_QUEUE_TASK_CELERY_SPAN_OP: &str = "queue.task.celery";

/// Processing a message from a Dramatiq queue.
pub const MESSAGING_QUEUE_TASK_DRAMATIQ_SPAN_OP: &str = "queue.task.dramatiq";

/// Publishing a message to a Huey instance.
pub const MESSAGING_QUEUE_SUBMIT_HUEY_SPAN_OP: &str = "queue.submit.huey";

/// Processing a message from a Huey instance.
pub const MESSAGING_QUEUE_TASK_HUEY_SPAN_OP: &str = "queue.task.huey";

/// Processing a message from an RQ queue.
pub const MESSAGING_QUEUE_TASK_RQ_SPAN_OP: &str = "queue.task.rq";

// Path: model/op/mobile.json
// Name: mobile

pub const MOBILE_APP_SPAN_OP: &str = "app";

pub const MOBILE_UI_SPAN_OP: &str = "ui";

pub const MOBILE_NAVIGATION_SPAN_OP: &str = "navigation";

pub const MOBILE_FILE_SPAN_OP: &str = "file";

pub const MOBILE_SERIALIZE_SPAN_OP: &str = "serialize";

pub const MOBILE_HTTP_SPAN_OP: &str = "http";

// Path: model/op/object.json
// Name: object

// Description: Object storage related spans represent operations on object storage systems such as Cloudflare R2, Amazon S3, and compatible services.
/// Retrieving an object from an object store.
pub const OBJECT_OBJECT_GET_SPAN_OP: &str = "object.get";

/// Retrieving the metadata of an object from an object store.
pub const OBJECT_OBJECT_HEAD_SPAN_OP: &str = "object.head";

/// Storing an object in an object store.
pub const OBJECT_OBJECT_PUT_SPAN_OP: &str = "object.put";

/// Deleting an object from an object store.
pub const OBJECT_OBJECT_DELETE_SPAN_OP: &str = "object.delete";

/// Listing objects in an object store.
pub const OBJECT_OBJECT_LIST_SPAN_OP: &str = "object.list";

/// Uploading a single part of a multipart upload to an object store.
pub const OBJECT_OBJECT_UPLOAD_PART_SPAN_OP: &str = "object.upload_part";

/// Aborting a multipart upload to an object store.
pub const OBJECT_OBJECT_MULTIPART_UPLOAD_ABORT_SPAN_OP: &str = "object.multipart_upload.abort";

/// Creating a multipart upload to an object store.
pub const OBJECT_OBJECT_MULTIPART_UPLOAD_CREATE_SPAN_OP: &str = "object.multipart_upload.create";

/// Completing a multipart upload to an object store.
pub const OBJECT_OBJECT_MULTIPART_UPLOAD_COMPLETE_SPAN_OP: &str = "object.multipart_upload.complete";

// Path: model/op/routing.json
// Name: routing

// Description: Routing related spans represent work performed by frontend and backend application routers.
/// A framework-neutral operation for work performed by an application router.
pub const ROUTING_ROUTER_SPAN_OP: &str = "router";

// Path: model/op/web_server.json
// Name: web_server

/// A general point-in-time span indicating an event
pub const WEB_SERVER_HTTP_SPAN_OP: &str = "http";

pub const WEB_SERVER_HTTP_CLIENT_SPAN_OP: &str = "http.client";

/// Consumption of a streaming HTTP client response body
pub const WEB_SERVER_HTTP_CLIENT_STREAM_SPAN_OP: &str = "http.client.stream";

pub const WEB_SERVER_HTTP_SERVER_SPAN_OP: &str = "http.server";

pub const WEB_SERVER_WEBSOCKET_SPAN_OP: &str = "websocket";

pub const WEB_SERVER_RPC_SPAN_OP: &str = "rpc";

pub const WEB_SERVER_GRPC_SPAN_OP: &str = "grpc";

pub const WEB_SERVER_GRAPHQL_SPAN_OP: &str = "graphql";

pub const WEB_SERVER_SUBPROCESS_SPAN_OP: &str = "subprocess";

pub const WEB_SERVER_MIDDLEWARE_SPAN_OP: &str = "middleware";

/// Handling of an incoming request by a web server route handler
pub const WEB_SERVER_REQUEST_HANDLER_SPAN_OP: &str = "request_handler";

pub const WEB_SERVER_VIEW_SPAN_OP: &str = "view";

pub const WEB_SERVER_TEMPLATE_SPAN_OP: &str = "template";

pub const WEB_SERVER_FUNCTION_SPAN_OP: &str = "function";

pub const WEB_SERVER_FUNCTION_REMIX_SPAN_OP: &str = "function.remix";

pub const WEB_SERVER_FUNCTION_NEXTJS_SPAN_OP: &str = "function.nextjs";

pub const WEB_SERVER_SERIALIZE_SPAN_OP: &str = "serialize";

pub const WEB_SERVER_CONSOLE_SPAN_OP: &str = "console";

pub const WEB_SERVER_FILE_SPAN_OP: &str = "file";

pub const WEB_SERVER_APP_SPAN_OP: &str = "app";