// This is an auto-generated file. Do not edit!

// Path: model/op/browser.json
// Name: browser

/**
 * A full page load of a web application.
 */
export const BROWSER_PAGELOAD_SPAN_OP = 'pageload';

/**
 * Client-side browser history change in a web application.
 */
export const BROWSER_NAVIGATION_SPAN_OP = 'navigation';

/**
 * A client-side automatic redirect navigation (e.g. from framework router redirects) triggerign a browser history change.
 */
export const BROWSER_NAVIGATION_REDIRECT_SPAN_OP = 'navigation.redirect';

/**
 * Resource as per [Performance Resource Timing](https://w3c.github.io/resource-timing/#sec-performanceresourcetiming). Defaults to resource.other if resource cannot be indentified.
 */
export const BROWSER_RESOURCE_SPAN_OP = 'resource';

export const BROWSER_RESOURCE_SCRIPT_SPAN_OP = 'resource.script';

export const BROWSER_RESOURCE_LINK_SPAN_OP = 'resource.link';

export const BROWSER_RESOURCE_IMG_SPAN_OP = 'resource.img';

export const BROWSER_RESOURCE_CSS_SPAN_OP = 'resource.css';

export const BROWSER_RESOURCE_AUDIO_SPAN_OP = 'resource.audio';

export const BROWSER_RESOURCE_VIDEO_SPAN_OP = 'resource.video';

export const BROWSER_RESOURCE_IFRAME_SPAN_OP = 'resource.iframe';

export const BROWSER_RESOURCE_OTHER_SPAN_OP = 'resource.other';

/**
 * Loading of a resource initiated by a worker (e.g. Web Worker or Service Worker).
 */
export const BROWSER_RESOURCE_WORKER_SPAN_OP = 'resource.worker';

/**
 * Loading of an icon resource.
 */
export const BROWSER_RESOURCE_ICON_SPAN_OP = 'resource.icon';

/**
 * Loading of a resource initiated by a frame.
 */
export const BROWSER_RESOURCE_FRAME_SPAN_OP = 'resource.frame';

/**
 * Loading of a resource initiated by an `<object>` element.
 */
export const BROWSER_RESOURCE_OBJECT_SPAN_OP = 'resource.object';

/**
 * A hyperlink auditing ping request.
 */
export const BROWSER_RESOURCE_PING_SPAN_OP = 'resource.ping';

/**
 * Loading of a `<track>` element resource (e.g. subtitles or captions).
 */
export const BROWSER_RESOURCE_TRACK_SPAN_OP = 'resource.track';

/**
 * Usage of browser APIs or functionality
 */
export const BROWSER_BROWSER_SPAN_OP = 'browser';

export const BROWSER_BROWSER_PAINT_SPAN_OP = 'browser.paint';

/**
 * The unload event phase of a browser navigation.
 */
export const BROWSER_BROWSER_UNLOAD_EVENT_SPAN_OP = 'browser.unload_event';

/**
 * The redirect phase of a browser navigation.
 */
export const BROWSER_BROWSER_REDIRECT_SPAN_OP = 'browser.redirect';

/**
 * The DOMContentLoaded event phase of a browser navigation.
 */
export const BROWSER_BROWSER_DOM_CONTENT_LOADED_EVENT_SPAN_OP = 'browser.dom_content_loaded_event';

/**
 * The load event phase of a browser navigation.
 */
export const BROWSER_BROWSER_LOAD_EVENT_SPAN_OP = 'browser.load_event';

/**
 * The connection phase of a browser navigation.
 */
export const BROWSER_BROWSER_CONNECT_SPAN_OP = 'browser.connect';

/**
 * The secure connection (TLS/SSL) phase of a browser navigation.
 */
export const BROWSER_BROWSER_TLS_SSL_SPAN_OP = 'browser.tls_ssl';

/**
 * The cache lookup / fetch start phase of a browser navigation.
 */
export const BROWSER_BROWSER_CACHE_SPAN_OP = 'browser.cache';

/**
 * The DNS domain lookup phase of a browser navigation.
 */
export const BROWSER_BROWSER_DNS_SPAN_OP = 'browser.dns';

/**
 * The request phase of a browser navigation.
 */
export const BROWSER_BROWSER_REQUEST_SPAN_OP = 'browser.request';

/**
 * The response phase of a browser navigation.
 */
export const BROWSER_BROWSER_RESPONSE_SPAN_OP = 'browser.response';

/**
 * Operations related to browser UI
 */
export const BROWSER_UI_SPAN_OP = 'ui';

/**
 * A task that is taken on the main UI thread. Typically used to indicate to users about things like the [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming).
 */
export const BROWSER_UI_TASK_SPAN_OP = 'ui.task';

export const BROWSER_UI_RENDER_SPAN_OP = 'ui.render';

/**
 * Mounting of a UI component or application (e.g. initial render/bootstrap).
 */
export const BROWSER_UI_MOUNT_SPAN_OP = 'ui.mount';

/**
 * Updating of an already-mounted UI component.
 */
export const BROWSER_UI_UPDATE_SPAN_OP = 'ui.update';

/**
 * Unmounting/teardown of a UI component.
 */
export const BROWSER_UI_UNMOUNT_SPAN_OP = 'ui.unmount';

/**
 * A long task on the main UI thread, as reported by the Long Tasks API.
 */
export const BROWSER_UI_LONG_TASK_SPAN_OP = 'ui.long_task';

/**
 * A long animation frame, as reported by the Long Animation Frames API.
 */
export const BROWSER_UI_LONG_ANIMATION_FRAME_SPAN_OP = 'ui.long_animation_frame';

/**
 * A click interaction measured via Interaction to Next Paint (INP).
 */
export const BROWSER_UI_INTERACTION_CLICK_SPAN_OP = 'ui.interaction.click';

/**
 * A hover interaction measured via Interaction to Next Paint (INP).
 */
export const BROWSER_UI_INTERACTION_HOVER_SPAN_OP = 'ui.interaction.hover';

/**
 * A drag interaction measured via Interaction to Next Paint (INP).
 */
export const BROWSER_UI_INTERACTION_DRAG_SPAN_OP = 'ui.interaction.drag';

/**
 * A key press interaction measured via Interaction to Next Paint (INP).
 */
export const BROWSER_UI_INTERACTION_PRESS_SPAN_OP = 'ui.interaction.press';

/**
 * A Largest Contentful Paint (LCP) web vital measurement.
 */
export const BROWSER_UI_WEBVITAL_LCP_SPAN_OP = 'ui.webvital.lcp';

/**
 * A Cumulative Layout Shift (CLS) web vital measurement.
 */
export const BROWSER_UI_WEBVITAL_CLS_SPAN_OP = 'ui.webvital.cls';

export const BROWSER_UI_ACTION_SPAN_OP = 'ui.action';

export const BROWSER_UI_ACTION_CLICK_SPAN_OP = 'ui.action.click';

export const BROWSER_UI_REACT_SPAN_OP = 'ui.react';

export const BROWSER_UI_REACT_MOUNT_SPAN_OP = 'ui.react.mount';

export const BROWSER_UI_REACT_RENDER_SPAN_OP = 'ui.react.render';

export const BROWSER_UI_REACT_UPDATE_SPAN_OP = 'ui.react.update';

export const BROWSER_UI_VUE_SPAN_OP = 'ui.vue';

export const BROWSER_UI_SVELTE_SPAN_OP = 'ui.svelte';

export const BROWSER_UI_ANGULAR_SPAN_OP = 'ui.angular';

export const BROWSER_UI_EMBER_SPAN_OP = 'ui.ember';

export const BROWSER_UI_LIVEWIRE_SPAN_OP = 'ui.livewire';

// Path: model/op/database.json
// Name: database

// Description: Database related spans are expected to follow OpenTelemetry's Database semantic conventions when possible.

export const DATABASE_DB_SPAN_OP = 'db';

export const DATABASE_DB_QUERY_SPAN_OP = 'db.query';

export const DATABASE_CACHE_SPAN_OP = 'cache';

export const DATABASE_CACHE_GET_SPAN_OP = 'cache.get';

export const DATABASE_CACHE_PUT_SPAN_OP = 'cache.put';

export const DATABASE_CACHE_REMOVE_SPAN_OP = 'cache.remove';

// Path: model/op/faas.json
// Name: faas

// Description: Serverless (FAAS)

export const FAAS_HTTP_SPAN_OP = 'http';

export const FAAS_GRPC_SPAN_OP = 'grpc';

export const FAAS_FUNCTION_GCP_SPAN_OP = 'function.gcp';

export const FAAS_FUNCTION_AWS_SPAN_OP = 'function.aws';

export const FAAS_FUNCTION_AZURE_SPAN_OP = 'function.azure';

// Path: model/op/gen_ai.json
// Name: gen_ai

// Description: Operations related to Generative AI interactions

/**
 * A chat interaction with a generative AI model
 */
export const GEN_AI_GEN_AI_CHAT_SPAN_OP = 'gen_ai.chat';

/**
 * Execution of a tool or function by a generative AI model
 */
export const GEN_AI_GEN_AI_EXECUTE_TOOL_SPAN_OP = 'gen_ai.execute_tool';

/**
 * Handoff of control between different AI agents or components
 */
export const GEN_AI_GEN_AI_HANDOFF_SPAN_OP = 'gen_ai.handoff';

/**
 * Invocation of an AI agent to perform a task
 */
export const GEN_AI_GEN_AI_INVOKE_AGENT_SPAN_OP = 'gen_ai.invoke_agent';

/**
 * Generation of embeddings by a generative AI model
 */
export const GEN_AI_GEN_AI_EMBEDDINGS_SPAN_OP = 'gen_ai.embeddings';

/**
 * Content generation by a generative AI model
 */
export const GEN_AI_GEN_AI_GENERATE_CONTENT_SPAN_OP = 'gen_ai.generate_content';

/**
 * Reranking of documents or results by a generative AI model
 */
export const GEN_AI_GEN_AI_RERANK_SPAN_OP = 'gen_ai.rerank';

// Path: model/op/general.json
// Name: general

/**
 * A general point-in-time span indicating an event
 */
export const GENERAL_MARK_SPAN_OP = 'mark';

/**
 * The time it took for a set of instructions to execute
 */
export const GENERAL_FUNCTION_SPAN_OP = 'function';

/**
 * A user-defined measurement of the duration between two points in time
 */
export const GENERAL_MEASURE_SPAN_OP = 'measure';

// Path: model/op/mcp.json
// Name: mcp

// Description: Operations related to Model Context Protocol (MCP) interactions

/**
 * A request handled by an MCP server (e.g. a tool call, resource read, or prompt request).
 */
export const MCP_MCP_SERVER_SPAN_OP = 'mcp.server';

/**
 * A notification sent from an MCP client to an MCP server.
 */
export const MCP_MCP_NOTIFICATION_CLIENT_TO_SERVER_SPAN_OP = 'mcp.notification.client_to_server';

/**
 * A notification sent from an MCP server to an MCP client.
 */
export const MCP_MCP_NOTIFICATION_SERVER_TO_CLIENT_SPAN_OP = 'mcp.notification.server_to_client';

// Path: model/op/messaging.json
// Name: messaging

// Description: Messaging related spans represent operations on topics in streaming data systems and queues, such as producing and consuming messages in Kafka, RabbitMQ.

/**
 * A general queue operation.
 */
export const MESSAGING_QUEUE_SPAN_OP = 'queue';

/**
 * Publishing a message to a queue.
 */
export const MESSAGING_QUEUE_PUBLISH_SPAN_OP = 'queue.publish';

/**
 * Creating a queue or a message for later publishing.
 */
export const MESSAGING_QUEUE_CREATE_SPAN_OP = 'queue.create';

/**
 * Receiving a message from a queue.
 */
export const MESSAGING_QUEUE_RECEIVE_SPAN_OP = 'queue.receive';

/**
 * Processing a message from a queue.
 */
export const MESSAGING_QUEUE_PROCESS_SPAN_OP = 'queue.process';

/**
 * Settling a message, e.g. acknowledging or rejecting it.
 */
export const MESSAGING_QUEUE_SETTLE_SPAN_OP = 'queue.settle';

/**
 * Publishing a message to an arq queue.
 */
export const MESSAGING_QUEUE_SUBMIT_ARQ_SPAN_OP = 'queue.submit.arq';

/**
 * Processing a message from an arq queue.
 */
export const MESSAGING_QUEUE_TASK_ARQ_SPAN_OP = 'queue.task.arq';

/**
 * Publishing a message to a Celery broker.
 */
export const MESSAGING_QUEUE_SUBMIT_CELERY_SPAN_OP = 'queue.submit.celery';

/**
 * Processing a message from a Celery queue.
 */
export const MESSAGING_QUEUE_TASK_CELERY_SPAN_OP = 'queue.task.celery';

/**
 * Processing a message from a Dramatiq queue.
 */
export const MESSAGING_QUEUE_TASK_DRAMATIQ_SPAN_OP = 'queue.task.dramatiq';

/**
 * Publishing a message to a Huey instance.
 */
export const MESSAGING_QUEUE_SUBMIT_HUEY_SPAN_OP = 'queue.submit.huey';

/**
 * Processing a message from a Huey instance.
 */
export const MESSAGING_QUEUE_TASK_HUEY_SPAN_OP = 'queue.task.huey';

/**
 * Processing a message from an RQ queue.
 */
export const MESSAGING_QUEUE_TASK_RQ_SPAN_OP = 'queue.task.rq';

// Path: model/op/mobile.json
// Name: mobile

export const MOBILE_APP_SPAN_OP = 'app';

export const MOBILE_UI_SPAN_OP = 'ui';

export const MOBILE_NAVIGATION_SPAN_OP = 'navigation';

export const MOBILE_FILE_SPAN_OP = 'file';

export const MOBILE_SERIALIZE_SPAN_OP = 'serialize';

export const MOBILE_HTTP_SPAN_OP = 'http';

// Path: model/op/object.json
// Name: object

// Description: Object storage related spans represent operations on object storage systems such as Cloudflare R2, Amazon S3, and compatible services.

/**
 * Retrieving an object from an object store.
 */
export const OBJECT_OBJECT_GET_SPAN_OP = 'object.get';

/**
 * Retrieving the metadata of an object from an object store.
 */
export const OBJECT_OBJECT_HEAD_SPAN_OP = 'object.head';

/**
 * Storing an object in an object store.
 */
export const OBJECT_OBJECT_PUT_SPAN_OP = 'object.put';

/**
 * Deleting an object from an object store.
 */
export const OBJECT_OBJECT_DELETE_SPAN_OP = 'object.delete';

/**
 * Listing objects in an object store.
 */
export const OBJECT_OBJECT_LIST_SPAN_OP = 'object.list';

/**
 * Uploading a single part of a multipart upload to an object store.
 */
export const OBJECT_OBJECT_UPLOAD_PART_SPAN_OP = 'object.upload_part';

/**
 * Aborting a multipart upload to an object store.
 */
export const OBJECT_OBJECT_MULTIPART_UPLOAD_ABORT_SPAN_OP = 'object.multipart_upload.abort';

/**
 * Creating a multipart upload to an object store.
 */
export const OBJECT_OBJECT_MULTIPART_UPLOAD_CREATE_SPAN_OP = 'object.multipart_upload.create';

/**
 * Completing a multipart upload to an object store.
 */
export const OBJECT_OBJECT_MULTIPART_UPLOAD_COMPLETE_SPAN_OP = 'object.multipart_upload.complete';

// Path: model/op/web_server.json
// Name: web_server

/**
 * A general point-in-time span indicating an event
 */
export const WEB_SERVER_HTTP_SPAN_OP = 'http';

export const WEB_SERVER_HTTP_CLIENT_SPAN_OP = 'http.client';

/**
 * Consumption of a streaming HTTP client response body
 */
export const WEB_SERVER_HTTP_CLIENT_STREAM_SPAN_OP = 'http.client.stream';

export const WEB_SERVER_HTTP_SERVER_SPAN_OP = 'http.server';

export const WEB_SERVER_WEBSOCKET_SPAN_OP = 'websocket';

export const WEB_SERVER_RPC_SPAN_OP = 'rpc';

export const WEB_SERVER_GRPC_SPAN_OP = 'grpc';

export const WEB_SERVER_GRAPHQL_SPAN_OP = 'graphql';

export const WEB_SERVER_SUBPROCESS_SPAN_OP = 'subprocess';

export const WEB_SERVER_MIDDLEWARE_SPAN_OP = 'middleware';

export const WEB_SERVER_VIEW_SPAN_OP = 'view';

export const WEB_SERVER_TEMPLATE_SPAN_OP = 'template';

export const WEB_SERVER_FUNCTION_SPAN_OP = 'function';

export const WEB_SERVER_FUNCTION_REMIX_SPAN_OP = 'function.remix';

export const WEB_SERVER_FUNCTION_NEXTJS_SPAN_OP = 'function.nextjs';

export const WEB_SERVER_SERIALIZE_SPAN_OP = 'serialize';

export const WEB_SERVER_CONSOLE_SPAN_OP = 'console';

export const WEB_SERVER_FILE_SPAN_OP = 'file';

export const WEB_SERVER_APP_SPAN_OP = 'app';
