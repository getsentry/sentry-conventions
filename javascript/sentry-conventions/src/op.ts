// This is an auto-generated file. Do not edit!

// Path: model/op/browser.json
// Name: browser

/**
 * A full page load of a web application.
 */
export const PAGELOAD = 'pageload';

/**
 * Client-side browser history change in a web application.
 */
export const NAVIGATION = 'navigation';

/**
 * A client-side automatic redirect navigation (e.g. from framework router redirects) triggerign a browser history change.
 */
export const NAVIGATION_REDIRECT = 'navigation.redirect';

/**
 * Resource as per [Performance Resource Timing](https://w3c.github.io/resource-timing/#sec-performanceresourcetiming). Defaults to resource.other if resource cannot be indentified.
 */
export const RESOURCE = 'resource';

export const RESOURCE_SCRIPT = 'resource.script';

export const RESOURCE_LINK = 'resource.link';

export const RESOURCE_IMG = 'resource.img';

export const RESOURCE_CSS = 'resource.css';

export const RESOURCE_AUDIO = 'resource.audio';

export const RESOURCE_VIDEO = 'resource.video';

export const RESOURCE_IFRAME = 'resource.iframe';

export const RESOURCE_OTHER = 'resource.other';

/**
 * Loading of a resource initiated by a worker (e.g. Web Worker or Service Worker).
 */
export const RESOURCE_WORKER = 'resource.worker';

/**
 * Loading of an icon resource.
 */
export const RESOURCE_ICON = 'resource.icon';

/**
 * Loading of a resource initiated by a frame.
 */
export const RESOURCE_FRAME = 'resource.frame';

/**
 * Loading of a resource initiated by an `<object>` element.
 */
export const RESOURCE_OBJECT = 'resource.object';

/**
 * A hyperlink auditing ping request.
 */
export const RESOURCE_PING = 'resource.ping';

/**
 * Loading of a `<track>` element resource (e.g. subtitles or captions).
 */
export const RESOURCE_TRACK = 'resource.track';

/**
 * Usage of browser APIs or functionality
 */
export const BROWSER = 'browser';

export const BROWSER_PAINT = 'browser.paint';

/**
 * The unload event phase of a browser navigation.
 */
export const BROWSER_UNLOAD_EVENT = 'browser.unload_event';

/**
 * The redirect phase of a browser navigation.
 */
export const BROWSER_REDIRECT = 'browser.redirect';

/**
 * The DOMContentLoaded event phase of a browser navigation.
 */
export const BROWSER_DOM_CONTENT_LOADED_EVENT = 'browser.dom_content_loaded_event';

/**
 * The load event phase of a browser navigation.
 */
export const BROWSER_LOAD_EVENT = 'browser.load_event';

/**
 * The connection phase of a browser navigation.
 */
export const BROWSER_CONNECT = 'browser.connect';

/**
 * The secure connection (TLS/SSL) phase of a browser navigation.
 */
export const BROWSER_TLS_SSL = 'browser.tls_ssl';

/**
 * The cache lookup / fetch start phase of a browser navigation.
 */
export const BROWSER_CACHE = 'browser.cache';

/**
 * The DNS domain lookup phase of a browser navigation.
 */
export const BROWSER_DNS = 'browser.dns';

/**
 * The request phase of a browser navigation.
 */
export const BROWSER_REQUEST = 'browser.request';

/**
 * The response phase of a browser navigation.
 */
export const BROWSER_RESPONSE = 'browser.response';

/**
 * Operations related to browser UI
 */
export const UI = 'ui';

/**
 * A task that is taken on the main UI thread. Typically used to indicate to users about things like the [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming).
 */
export const UI_TASK = 'ui.task';

export const UI_RENDER = 'ui.render';

/**
 * Mounting of a UI component or application (e.g. initial render/bootstrap).
 */
export const UI_MOUNT = 'ui.mount';

/**
 * Updating of an already-mounted UI component.
 */
export const UI_UPDATE = 'ui.update';

/**
 * Unmounting/teardown of a UI component.
 */
export const UI_UNMOUNT = 'ui.unmount';

/**
 * A long task on the main UI thread, as reported by the Long Tasks API.
 */
export const UI_LONG_TASK = 'ui.long_task';

/**
 * A long animation frame, as reported by the Long Animation Frames API.
 */
export const UI_LONG_ANIMATION_FRAME = 'ui.long_animation_frame';

/**
 * A click interaction measured via Interaction to Next Paint (INP).
 */
export const UI_INTERACTION_CLICK = 'ui.interaction.click';

/**
 * A hover interaction measured via Interaction to Next Paint (INP).
 */
export const UI_INTERACTION_HOVER = 'ui.interaction.hover';

/**
 * A drag interaction measured via Interaction to Next Paint (INP).
 */
export const UI_INTERACTION_DRAG = 'ui.interaction.drag';

/**
 * A key press interaction measured via Interaction to Next Paint (INP).
 */
export const UI_INTERACTION_PRESS = 'ui.interaction.press';

/**
 * A Largest Contentful Paint (LCP) web vital measurement.
 */
export const UI_WEBVITAL_LCP = 'ui.webvital.lcp';

/**
 * A Cumulative Layout Shift (CLS) web vital measurement.
 */
export const UI_WEBVITAL_CLS = 'ui.webvital.cls';

export const UI_ACTION = 'ui.action';

export const UI_ACTION_CLICK = 'ui.action.click';

export const UI_REACT = 'ui.react';

export const UI_REACT_MOUNT = 'ui.react.mount';

export const UI_REACT_RENDER = 'ui.react.render';

export const UI_REACT_UPDATE = 'ui.react.update';

export const UI_VUE = 'ui.vue';

export const UI_SVELTE = 'ui.svelte';

export const UI_ANGULAR = 'ui.angular';

export const UI_EMBER = 'ui.ember';

export const UI_LIVEWIRE = 'ui.livewire';

// Path: model/op/database.json
// Name: database

// Description: Database related spans are expected to follow OpenTelemetry's Database semantic conventions when possible.

export const DB = 'db';

export const DB_QUERY = 'db.query';

export const CACHE = 'cache';

export const CACHE_GET = 'cache.get';

export const CACHE_PUT = 'cache.put';

export const CACHE_REMOVE = 'cache.remove';

// Path: model/op/faas.json
// Name: faas

// Description: Serverless (FAAS)

export const GRPC = 'grpc';

export const FUNCTION_GCP = 'function.gcp';

export const FUNCTION_AWS = 'function.aws';

export const FUNCTION_AZURE = 'function.azure';

// Path: model/op/gen_ai.json
// Name: gen_ai

// Description: Operations related to Generative AI interactions

/**
 * A chat interaction with a generative AI model
 */
export const GEN_AI_CHAT = 'gen_ai.chat';

/**
 * Execution of a tool or function by a generative AI model
 */
export const GEN_AI_EXECUTE_TOOL = 'gen_ai.execute_tool';

/**
 * Handoff of control between different AI agents or components
 */
export const GEN_AI_HANDOFF = 'gen_ai.handoff';

/**
 * Invocation of an AI agent to perform a task
 */
export const GEN_AI_INVOKE_AGENT = 'gen_ai.invoke_agent';

/**
 * Generation of embeddings by a generative AI model
 */
export const GEN_AI_EMBEDDINGS = 'gen_ai.embeddings';

/**
 * Content generation by a generative AI model
 */
export const GEN_AI_GENERATE_CONTENT = 'gen_ai.generate_content';

/**
 * Reranking of documents or results by a generative AI model
 */
export const GEN_AI_RERANK = 'gen_ai.rerank';

// Path: model/op/general.json
// Name: general

/**
 * A general point-in-time span indicating an event
 */
export const MARK = 'mark';

/**
 * The time it took for a set of instructions to execute
 */
export const FUNCTION = 'function';

/**
 * A user-defined measurement of the duration between two points in time
 */
export const MEASURE = 'measure';

// Path: model/op/mcp.json
// Name: mcp

// Description: Operations related to Model Context Protocol (MCP) interactions

/**
 * A request handled by an MCP server (e.g. a tool call, resource read, or prompt request).
 */
export const MCP_SERVER = 'mcp.server';

/**
 * A notification sent from an MCP client to an MCP server.
 */
export const MCP_NOTIFICATION_CLIENT_TO_SERVER = 'mcp.notification.client_to_server';

/**
 * A notification sent from an MCP server to an MCP client.
 */
export const MCP_NOTIFICATION_SERVER_TO_CLIENT = 'mcp.notification.server_to_client';

// Path: model/op/messaging.json
// Name: messaging

// Description: Messaging related spans represent operations on topics in streaming data systems and queues, such as producing and consuming messages in Kafka, RabbitMQ.

/**
 * A general queue operation.
 */
export const QUEUE = 'queue';

/**
 * Publishing a message to a queue.
 */
export const QUEUE_PUBLISH = 'queue.publish';

/**
 * Creating a queue or a message for later publishing.
 */
export const QUEUE_CREATE = 'queue.create';

/**
 * Receiving a message from a queue.
 */
export const QUEUE_RECEIVE = 'queue.receive';

/**
 * Processing a message from a queue.
 */
export const QUEUE_PROCESS = 'queue.process';

/**
 * Settling a message, e.g. acknowledging or rejecting it.
 */
export const QUEUE_SETTLE = 'queue.settle';

/**
 * Publishing a message to an arq queue.
 */
export const QUEUE_SUBMIT_ARQ = 'queue.submit.arq';

/**
 * Processing a message from an arq queue.
 */
export const QUEUE_TASK_ARQ = 'queue.task.arq';

/**
 * Publishing a message to a Celery broker.
 */
export const QUEUE_SUBMIT_CELERY = 'queue.submit.celery';

/**
 * Processing a message from a Celery queue.
 */
export const QUEUE_TASK_CELERY = 'queue.task.celery';

/**
 * Processing a message from a Dramatiq queue.
 */
export const QUEUE_TASK_DRAMATIQ = 'queue.task.dramatiq';

/**
 * Publishing a message to a Huey instance.
 */
export const QUEUE_SUBMIT_HUEY = 'queue.submit.huey';

/**
 * Processing a message from a Huey instance.
 */
export const QUEUE_TASK_HUEY = 'queue.task.huey';

/**
 * Processing a message from an RQ queue.
 */
export const QUEUE_TASK_RQ = 'queue.task.rq';

// Path: model/op/mobile.json
// Name: mobile

export const APP = 'app';

export const FILE = 'file';

export const SERIALIZE = 'serialize';

// Path: model/op/object.json
// Name: object

// Description: Object storage related spans represent operations on object storage systems such as Cloudflare R2, Amazon S3, and compatible services.

/**
 * Retrieving an object from an object store.
 */
export const OBJECT_GET = 'object.get';

/**
 * Retrieving the metadata of an object from an object store.
 */
export const OBJECT_HEAD = 'object.head';

/**
 * Storing an object in an object store.
 */
export const OBJECT_PUT = 'object.put';

/**
 * Deleting an object from an object store.
 */
export const OBJECT_DELETE = 'object.delete';

/**
 * Listing objects in an object store.
 */
export const OBJECT_LIST = 'object.list';

/**
 * Uploading a single part of a multipart upload to an object store.
 */
export const OBJECT_UPLOAD_PART = 'object.upload_part';

/**
 * Aborting a multipart upload to an object store.
 */
export const OBJECT_MULTIPART_UPLOAD_ABORT = 'object.multipart_upload.abort';

/**
 * Creating a multipart upload to an object store.
 */
export const OBJECT_MULTIPART_UPLOAD_CREATE = 'object.multipart_upload.create';

/**
 * Completing a multipart upload to an object store.
 */
export const OBJECT_MULTIPART_UPLOAD_COMPLETE = 'object.multipart_upload.complete';

// Path: model/op/routing.json
// Name: routing

// Description: Routing related spans represent work performed by frontend and backend application routers.

/**
 * A framework-neutral operation for work performed by an application router.
 */
export const ROUTER = 'router';

// Path: model/op/web_server.json
// Name: web_server

/**
 * A general point-in-time span indicating an event
 */
export const HTTP = 'http';

export const HTTP_CLIENT = 'http.client';

/**
 * Consumption of a streaming HTTP client response body
 */
export const HTTP_CLIENT_STREAM = 'http.client.stream';

export const HTTP_SERVER = 'http.server';

export const WEBSOCKET = 'websocket';

export const RPC = 'rpc';

export const GRAPHQL = 'graphql';

export const SUBPROCESS = 'subprocess';

export const MIDDLEWARE = 'middleware';

/**
 * Handling of an incoming request by a web server route handler
 */
export const HANDLER = 'handler';

export const VIEW = 'view';

export const TEMPLATE = 'template';

export const FUNCTION_REMIX = 'function.remix';

export const FUNCTION_NEXTJS = 'function.nextjs';

export const CONSOLE = 'console';
