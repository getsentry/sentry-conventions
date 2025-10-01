<?php

declare(strict_types=1);

namespace Sentry\Conventions;

// This is an auto-generated file. Do not edit!

/**
 * Contains constants for span operations used in Sentry.
 */
final class Op
{
    // Path: model/op/browser.json
    // Name: browser

    /**
     * A full page load of a web application.
     */
    public const BROWSER_PAGELOAD_SPAN_OP = 'pageload';

    /**
     * Client-side browser history change in a web application.
     */
    public const BROWSER_NAVIGATION_SPAN_OP = 'navigation';

    /**
     * Resource as per [Performance Resource Timing](https://w3c.github.io/resource-timing/#sec-performanceresourcetiming). Defaults to resource.other if resource cannot be indentified.
     */
    public const BROWSER_RESOURCE_SPAN_OP = 'resource';

    public const BROWSER_RESOURCE_SCRIPT_SPAN_OP = 'resource.script';

    public const BROWSER_RESOURCE_LINK_SPAN_OP = 'resource.link';

    public const BROWSER_RESOURCE_IMG_SPAN_OP = 'resource.img';

    public const BROWSER_RESOURCE_CSS_SPAN_OP = 'resource.css';

    public const BROWSER_RESOURCE_OTHER_SPAN_OP = 'resource.other';

    /**
     * Usage of browser APIs or functionality
     */
    public const BROWSER_BROWSER_SPAN_OP = 'browser';

    public const BROWSER_BROWSER_PAINT_SPAN_OP = 'browser.paint';

    /**
     * Operations related to browser UI
     */
    public const BROWSER_UI_SPAN_OP = 'ui';

    /**
     * A task that is taken on the main UI thread. Typically used to indicate to users about things like the [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming).
     */
    public const BROWSER_UI_TASK_SPAN_OP = 'ui.task';

    public const BROWSER_UI_RENDER_SPAN_OP = 'ui.render';

    public const BROWSER_UI_ACTION_SPAN_OP = 'ui.action';

    public const BROWSER_UI_ACTION_CLICK_SPAN_OP = 'ui.action.click';

    public const BROWSER_UI_REACT_SPAN_OP = 'ui.react';

    public const BROWSER_UI_REACT_MOUNT_SPAN_OP = 'ui.react.mount';

    public const BROWSER_UI_REACT_RENDER_SPAN_OP = 'ui.react.render';

    public const BROWSER_UI_REACT_UPDATE_SPAN_OP = 'ui.react.update';

    public const BROWSER_UI_VUE_SPAN_OP = 'ui.vue';

    public const BROWSER_UI_SVELTE_SPAN_OP = 'ui.svelte';

    public const BROWSER_UI_ANGULAR_SPAN_OP = 'ui.angular';

    public const BROWSER_UI_EMBER_SPAN_OP = 'ui.ember';

    public const BROWSER_UI_LIVEWIRE_SPAN_OP = 'ui.livewire';

    // Path: model/op/database.json
    // Name: database
    // Description: Database related spans are expected to follow OpenTelemetry's Database semantic conventions when possible.

    public const DATABASE_DB_SPAN_OP = 'db';

    public const DATABASE_DB_QUERY_SPAN_OP = 'db.query';

    public const DATABASE_CACHE_SPAN_OP = 'cache';

    // Path: model/op/faas.json
    // Name: faas
    // Description: Serverless (FAAS)

    public const FAAS_HTTP_SPAN_OP = 'http';

    public const FAAS_GRPC_SPAN_OP = 'grpc';

    public const FAAS_FUNCTION_GCP_SPAN_OP = 'function.gcp';

    public const FAAS_FUNCTION_AWS_SPAN_OP = 'function.aws';

    public const FAAS_FUNCTION_AZURE_SPAN_OP = 'function.azure';

    // Path: model/op/gen_ai.json
    // Name: gen_ai
    // Description: Operations related to Generative AI interactions

    /**
     * A chat interaction with a generative AI model
     */
    public const GEN_AI_CHAT_SPAN_OP = 'chat';

    /**
     * Execution of a tool or function by a generative AI model
     */
    public const GEN_AI_EXECUTE_TOOL_SPAN_OP = 'execute_tool';

    /**
     * Handoff of control between different AI agents or components
     */
    public const GEN_AI_HANDOFF_SPAN_OP = 'handoff';

    /**
     * Invocation of an AI agent to perform a task
     */
    public const GEN_AI_INVOKE_AGENT_SPAN_OP = 'invoke_agent';

    // Path: model/op/general.json
    // Name: general

    /**
     * A general point-in-time span indicating an event
     */
    public const GENERAL_MARK_SPAN_OP = 'mark';

    /**
     * The time it took for a set of instructions to execute
     */
    public const GENERAL_FUNCTION_SPAN_OP = 'function';

    // Path: model/op/mobile.json
    // Name: mobile

    public const MOBILE_APP_SPAN_OP = 'app';

    public const MOBILE_UI_SPAN_OP = 'ui';

    public const MOBILE_NAVIGATION_SPAN_OP = 'navigation';

    public const MOBILE_FILE_SPAN_OP = 'file';

    public const MOBILE_SERIALIZE_SPAN_OP = 'serialize';

    public const MOBILE_HTTP_SPAN_OP = 'http';

    // Path: model/op/web_server.json
    // Name: web_server

    /**
     * A general point-in-time span indicating an event
     */
    public const WEB_SERVER_HTTP_SPAN_OP = 'http';

    public const WEB_SERVER_HTTP_CLIENT_SPAN_OP = 'http.client';

    public const WEB_SERVER_HTTP_SERVER_SPAN_OP = 'http.server';

    public const WEB_SERVER_WEBSOCKET_SPAN_OP = 'websocket';

    public const WEB_SERVER_RPC_SPAN_OP = 'rpc';

    public const WEB_SERVER_GRPC_SPAN_OP = 'grpc';

    public const WEB_SERVER_GRAPHQL_SPAN_OP = 'graphql';

    public const WEB_SERVER_SUBPROCESS_SPAN_OP = 'subprocess';

    public const WEB_SERVER_MIDDLEWARE_SPAN_OP = 'middleware';

    public const WEB_SERVER_VIEW_SPAN_OP = 'view';

    public const WEB_SERVER_TEMPLATE_SPAN_OP = 'template';

    public const WEB_SERVER_FUNCTION_SPAN_OP = 'function';

    public const WEB_SERVER_FUNCTION_REMIX_SPAN_OP = 'function.remix';

    public const WEB_SERVER_FUNCTION_NEXTJS_SPAN_OP = 'function.nextjs';

    public const WEB_SERVER_SERIALIZE_SPAN_OP = 'serialize';

    public const WEB_SERVER_CONSOLE_SPAN_OP = 'console';

    public const WEB_SERVER_FILE_SPAN_OP = 'file';

    public const WEB_SERVER_APP_SPAN_OP = 'app';

}
