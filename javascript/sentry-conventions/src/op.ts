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
 * Usage of browser APIs or functionality
 */
export const BROWSER_BROWSER_SPAN_OP = 'browser';

export const BROWSER_BROWSER_PAINT_SPAN_OP = 'browser.paint';

/**
 * Operations related to browser UI
 */
export const BROWSER_UI_SPAN_OP = 'ui';

/**
 * A task that is taken on the main UI thread. Typically used to indicate to users about things like the [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming).
 */
export const BROWSER_UI_TASK_SPAN_OP = 'ui.task';

export const BROWSER_UI_RENDER_SPAN_OP = 'ui.render';

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
export const GEN_AI_CHAT_SPAN_OP = 'chat';

/**
 * Execution of a tool or function by a generative AI model
 */
export const GEN_AI_EXECUTE_TOOL_SPAN_OP = 'execute_tool';

/**
 * Handoff of control between different AI agents or components
 */
export const GEN_AI_HANDOFF_SPAN_OP = 'handoff';

/**
 * Invocation of an AI agent to perform a task
 */
export const GEN_AI_INVOKE_AGENT_SPAN_OP = 'invoke_agent';

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
 * Publishing a message from a Dramatiq queue.
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

// Path: model/op/web_server.json
// Name: web_server

/**
 * A general point-in-time span indicating an event
 */
export const WEB_SERVER_HTTP_SPAN_OP = 'http';

export const WEB_SERVER_HTTP_CLIENT_SPAN_OP = 'http.client';

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
