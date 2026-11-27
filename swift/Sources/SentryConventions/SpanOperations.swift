// This is an auto-generated file. Do not edit!

public struct SpanOperations {
    private init() {}

    @_alwaysEmitIntoClient
    @inlinable
    public static var app: String { "app" }

    /// The time it takes to check for an available over-the-air (OTA) update.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appUpdateCheck: String { "app.update.check" }

    /// The time it takes to download an over-the-air (OTA) update.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appUpdateDownload: String { "app.update.download" }

    /// Usage of browser APIs or functionality
    @_alwaysEmitIntoClient
    @inlinable
    public static var browser: String { "browser" }

    /// The cache lookup / fetch start phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserCache: String { "browser.cache" }

    /// The connection phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserConnect: String { "browser.connect" }

    /// The DNS domain lookup phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserDns: String { "browser.dns" }

    /// The DOMContentLoaded event phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserDomContentLoadedEvent: String { "browser.dom_content_loaded_event" }

    /// The load event phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserLoadEvent: String { "browser.load_event" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var browserPaint: String { "browser.paint" }

    /// The redirect phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserRedirect: String { "browser.redirect" }

    /// The request phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserRequest: String { "browser.request" }

    /// The response phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserResponse: String { "browser.response" }

    /// The secure connection (TLS/SSL) phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserTlsSsl: String { "browser.tls_ssl" }

    /// The unload event phase of a browser navigation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserUnloadEvent: String { "browser.unload_event" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var cache: String { "cache" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheGet: String { "cache.get" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var cachePut: String { "cache.put" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheRemove: String { "cache.remove" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var console: String { "console" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var db: String { "db" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var dbQuery: String { "db.query" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var file: String { "file" }

    /// The time it took for a set of instructions to execute
    @_alwaysEmitIntoClient
    @inlinable
    public static var function: String { "function" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var functionAws: String { "function.aws" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var functionAzure: String { "function.azure" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var functionGcp: String { "function.gcp" }

    /// A chat interaction with a generative AI model
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiChat: String { "gen_ai.chat" }

    /// Creation of an AI agent that can later be invoked to perform a task
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiCreateAgent: String { "gen_ai.create_agent" }

    /// Decision on a set of typed questions (e.g., boolean, choice, or score) about a shared state by a generative AI model
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiDecide: String { "gen_ai.decide" }

    /// Generation of embeddings by a generative AI model
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiEmbeddings: String { "gen_ai.embeddings" }

    /// Execution of a tool or function by a generative AI model
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiExecuteTool: String { "gen_ai.execute_tool" }

    /// Extraction of a set of typed fields (e.g., text, date, number, list, or estimate) from a shared state by a generative AI model
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiExtract: String { "gen_ai.extract" }

    /// Content generation by a generative AI model
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiGenerateContent: String { "gen_ai.generate_content" }

    /// Invocation of an AI agent to perform a task
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiInvokeAgent: String { "gen_ai.invoke_agent" }

    /// A memory store or memory record operation performed by a generative AI agent
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiMemoryClient: String { "gen_ai.memory.client" }

    /// A text completion request to a generative AI model
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiTextCompletion: String { "gen_ai.text_completion" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var graphql: String { "graphql" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var grpc: String { "grpc" }

    /// Handling of an incoming request by a web server route handler
    @_alwaysEmitIntoClient
    @inlinable
    public static var handler: String { "handler" }

    /// A general point-in-time span indicating an event
    @_alwaysEmitIntoClient
    @inlinable
    public static var http: String { "http" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var httpClient: String { "http.client" }

    /// Consumption of a streaming HTTP client response body
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpClientStream: String { "http.client.stream" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var httpServer: String { "http.server" }

    /// A general point-in-time span indicating an event
    @_alwaysEmitIntoClient
    @inlinable
    public static var mark: String { "mark" }

    /// A notification sent from an MCP client to an MCP server.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpNotificationClientToServer: String { "mcp.notification.client_to_server" }

    /// A notification sent from an MCP server to an MCP client.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpNotificationServerToClient: String { "mcp.notification.server_to_client" }

    /// A request handled by an MCP server (e.g. a tool call, resource read, or prompt request).
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpServer: String { "mcp.server" }

    /// A user-defined measurement of the duration between two points in time
    @_alwaysEmitIntoClient
    @inlinable
    public static var measure: String { "measure" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var middleware: String { "middleware" }

    /// Client-side browser history change in a web application.
    @_alwaysEmitIntoClient
    @inlinable
    public static var navigation: String { "navigation" }

    /// A client-side automatic redirect navigation (e.g. from framework router redirects) triggerign a browser history change.
    @_alwaysEmitIntoClient
    @inlinable
    public static var navigationRedirect: String { "navigation.redirect" }

    /// Copying an object within or between object stores.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectCopy: String { "object.copy" }

    /// Deleting an object from an object store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectDelete: String { "object.delete" }

    /// Retrieving an object from an object store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectGet: String { "object.get" }

    /// Retrieving the metadata of an object from an object store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectHead: String { "object.head" }

    /// Listing objects in an object store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectList: String { "object.list" }

    /// Aborting a multipart upload to an object store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectMultipartUploadAbort: String { "object.multipart_upload.abort" }

    /// Completing a multipart upload to an object store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectMultipartUploadComplete: String { "object.multipart_upload.complete" }

    /// Creating a multipart upload to an object store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectMultipartUploadCreate: String { "object.multipart_upload.create" }

    /// Storing an object in an object store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectPut: String { "object.put" }

    /// Uploading a single part of a multipart upload to an object store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var objectUploadPart: String { "object.upload_part" }

    /// A full page load of a web application.
    @_alwaysEmitIntoClient
    @inlinable
    public static var pageload: String { "pageload" }

    /// A general queue operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var queue: String { "queue" }

    /// Creating a queue or a message for later publishing.
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueCreate: String { "queue.create" }

    /// Processing a message from a queue.
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueProcess: String { "queue.process" }

    /// Publishing a message to a queue.
    @_alwaysEmitIntoClient
    @inlinable
    public static var queuePublish: String { "queue.publish" }

    /// Receiving a message from a queue.
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueReceive: String { "queue.receive" }

    /// Settling a message, e.g. acknowledging or rejecting it.
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueSettle: String { "queue.settle" }

    /// Resource as per [Performance Resource Timing](https://w3c.github.io/resource-timing/#sec-performanceresourcetiming). Defaults to resource.other if resource cannot be identified.
    @_alwaysEmitIntoClient
    @inlinable
    public static var resource: String { "resource" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceAudio: String { "resource.audio" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceCss: String { "resource.css" }

    /// Loading of a resource initiated by a frame.
    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceFrame: String { "resource.frame" }

    /// Loading of an icon resource.
    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceIcon: String { "resource.icon" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceIframe: String { "resource.iframe" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceImg: String { "resource.img" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceLink: String { "resource.link" }

    /// Loading of a resource initiated by an `<object>` element.
    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceObject: String { "resource.object" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceOther: String { "resource.other" }

    /// A hyperlink auditing ping request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var resourcePing: String { "resource.ping" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceScript: String { "resource.script" }

    /// Loading of a `<track>` element resource (e.g. subtitles or captions).
    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceTrack: String { "resource.track" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceVideo: String { "resource.video" }

    /// Loading of a resource initiated by a worker (e.g. Web Worker or Service Worker).
    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceWorker: String { "resource.worker" }

    /// A framework-neutral operation for work performed by an application router.
    @_alwaysEmitIntoClient
    @inlinable
    public static var router: String { "router" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var rpc: String { "rpc" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var serialize: String { "serialize" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var subprocess: String { "subprocess" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var template: String { "template" }

    /// A call from JavaScript into a React Native native module, or an aggregate of such calls.
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModule: String { "turbo_module" }

    /// Operations related to browser UI
    @_alwaysEmitIntoClient
    @inlinable
    public static var ui: String { "ui" }

    /// A user interaction that starts a new trace segment and collects the work it triggers.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiAction: String { "ui.action" }

    /// A click that starts a new idle span, collecting work the interaction triggers.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiActionClick: String { "ui.action.click" }

    /// A click interaction measured via Interaction to Next Paint (INP).
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiInteractionClick: String { "ui.interaction.click" }

    /// A drag interaction measured via Interaction to Next Paint (INP).
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiInteractionDrag: String { "ui.interaction.drag" }

    /// A hover interaction measured via Interaction to Next Paint (INP).
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiInteractionHover: String { "ui.interaction.hover" }

    /// A key press interaction measured via Interaction to Next Paint (INP).
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiInteractionPress: String { "ui.interaction.press" }

    /// A long animation frame, as reported by the Long Animation Frames API.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiLongAnimationFrame: String { "ui.long_animation_frame" }

    /// A long task on the main UI thread, as reported by the Long Tasks API.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiLongTask: String { "ui.long_task" }

    /// Mounting of a UI component or application (e.g. initial render/bootstrap).
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiMount: String { "ui.mount" }

    /// Rendering of a UI component.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiRender: String { "ui.render" }

    /// Looking up which component a name in a template refers to, before that component renders. Ember does this for every component it renders. The render itself is a separate `ui.render` span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiResolve: String { "ui.resolve" }

    /// A task that is taken on the main UI thread. Typically used to indicate to users about things like the [Long Tasks API](https://developer.mozilla.org/en-US/docs/Web/API/PerformanceLongTaskTiming).
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiTask: String { "ui.task" }

    /// Unmounting/teardown of a UI component.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiUnmount: String { "ui.unmount" }

    /// Updating of an already-mounted UI component.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiUpdate: String { "ui.update" }

    /// A Cumulative Layout Shift (CLS) web vital measurement.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiWebvitalCls: String { "ui.webvital.cls" }

    /// A Largest Contentful Paint (LCP) web vital measurement.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiWebvitalLcp: String { "ui.webvital.lcp" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var view: String { "view" }

    /// Rendering of a view.
    @_alwaysEmitIntoClient
    @inlinable
    public static var viewRender: String { "view.render" }

    @_alwaysEmitIntoClient
    @inlinable
    public static var websocket: String { "websocket" }

    @available(*, deprecated, message: "Use gen_ai.chat instead - Provider-specific AI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiChatCompletionsCreateCohere: String { "ai.chat_completions.create.cohere" }

    @available(*, deprecated, message: "Use gen_ai.embeddings instead - Provider-specific AI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiEmbeddingsCreateCohere: String { "ai.embeddings.create.cohere" }

    @available(*, deprecated, message: "Use db.query instead - Provider-specific Redis ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbRedis: String { "db.redis" }

    @available(*, deprecated, message: "Use function instead - Framework-specific event ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var eventDjango: String { "event.django" }

    @available(*, deprecated, message: "Use function instead - Framework-specific function ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var functionNextjs: String { "function.nextjs" }

    @available(*, deprecated, message: "Use function instead - Framework-specific function ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var functionRemix: String { "function.remix" }

    /// Evaluation of typed questions (e.g., boolean, choice, or score) about a shared state by a generative AI model
    @available(*, deprecated, message: "Use gen_ai.decide instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiEvaluate: String { "gen_ai.evaluate" }

    /// Handoff of control between different AI agents or components
    @available(*, deprecated, message: "Handoff information already lives in tool execution spans.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiHandoff: String { "gen_ai.handoff" }

    /// Reranking of documents or results by a generative AI model
    @available(*, deprecated, message: "Product does not support rerank spans. \"rerank\" is not a recognized gen_ai.operation.name in OTel.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRerank: String { "gen_ai.rerank" }

    /// An interaction with a generative AI model through a responses API
    @available(*, deprecated, message: "Use gen_ai.chat instead - responses is not a well-defined value for gen_ai.operation.name")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponses: String { "gen_ai.responses" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareDjango: String { "middleware.django" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareLitestar: String { "middleware.litestar" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareLitestarReceive: String { "middleware.litestar.receive" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareLitestarSend: String { "middleware.litestar.send" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareStarlette: String { "middleware.starlette" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareStarletteReceive: String { "middleware.starlette.receive" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareStarletteSend: String { "middleware.starlette.send" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareStarlite: String { "middleware.starlite" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareStarliteReceive: String { "middleware.starlite.receive" }

    @available(*, deprecated, message: "Use middleware instead - Framework-specific middleware ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareStarliteSend: String { "middleware.starlite.send" }

    /// Publishing a message to an arq queue.
    @available(*, deprecated, message: "Use queue.publish instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueSubmitArq: String { "queue.submit.arq" }

    /// Publishing a message to a Celery broker.
    @available(*, deprecated, message: "Use queue.publish instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueSubmitCelery: String { "queue.submit.celery" }

    /// Publishing a message to a Django queue.
    @available(*, deprecated, message: "Use queue.publish instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueSubmitDjango: String { "queue.submit.django" }

    /// Publishing a message to a Huey instance.
    @available(*, deprecated, message: "Use queue.publish instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueSubmitHuey: String { "queue.submit.huey" }

    /// Publishing a message to a Ray queue.
    @available(*, deprecated, message: "Use queue.publish instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueSubmitRay: String { "queue.submit.ray" }

    /// Processing a message from an arq queue.
    @available(*, deprecated, message: "Use queue.process instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueTaskArq: String { "queue.task.arq" }

    /// Processing a message from a Celery queue.
    @available(*, deprecated, message: "Use queue.process instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueTaskCelery: String { "queue.task.celery" }

    /// Processing a message from a Dramatiq queue.
    @available(*, deprecated, message: "Use queue.process instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueTaskDramatiq: String { "queue.task.dramatiq" }

    /// Processing a message from a Huey instance.
    @available(*, deprecated, message: "Use queue.process instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueTaskHuey: String { "queue.task.huey" }

    /// Processing a message from a Ray queue.
    @available(*, deprecated, message: "Use queue.process instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueTaskRay: String { "queue.task.ray" }

    /// Processing a message from an RQ queue.
    @available(*, deprecated, message: "Use queue.process instead - Framework-specific queue ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queueTaskRq: String { "queue.task.rq" }

    /// Legacy Angular UI operation. Prefer general `ui` or `function` ops instead.
    @available(*, deprecated, message: "Use ui.mount instead - Use `ui.mount`, `ui.update` or `function` instead, depending on the operation. Framework-specific UI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiAngular: String { "ui.angular" }

    /// Legacy Ember UI operation. Prefer ui.mount, ui.render, ui.task, and ui.resolve.
    @available(*, deprecated, message: "Use `ui.mount`, `ui.render`, `ui.task` or `ui.resolve` instead, depending on the operation. Framework-specific UI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiEmber: String { "ui.ember" }

    /// Legacy Livewire UI operation. Prefer ui.mount, ui.render, and ui.update.
    @available(*, deprecated, message: "Use `ui.mount`, `ui.render` or `ui.update` instead, depending on the operation. Framework-specific UI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiLivewire: String { "ui.livewire" }

    /// Legacy React UI operation. Prefer ui.mount, ui.render, and ui.update.
    @available(*, deprecated, message: "Use `ui.mount`, `ui.render` or `ui.update` instead, depending on the operation. Framework-specific UI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiReact: String { "ui.react" }

    /// Legacy React component mount. Prefer ui.mount.
    @available(*, deprecated, message: "Use ui.mount instead - Framework-specific UI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiReactMount: String { "ui.react.mount" }

    /// Legacy React component render. Prefer ui.render.
    @available(*, deprecated, message: "Use ui.render instead - Framework-specific UI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiReactRender: String { "ui.react.render" }

    /// Legacy React component update. Prefer ui.update.
    @available(*, deprecated, message: "Use ui.update instead - Framework-specific UI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiReactUpdate: String { "ui.react.update" }

    /// Legacy Svelte UI operation. Prefer ui.mount and ui.update.
    @available(*, deprecated, message: "Use `ui.mount`, `ui.render` or `ui.update` instead, depending on the operation. Framework-specific UI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiSvelte: String { "ui.svelte" }

    /// Legacy Vue UI operation. Prefer ui.mount, ui.render, ui.update, and ui.unmount.
    @available(*, deprecated, message: "Use `ui.mount`, `ui.render`, `ui.update` or `ui.unmount` instead, depending on the operation. Framework-specific UI ops are replaced by framework-agnostic ones.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiVue: String { "ui.vue" }

    @available(*, deprecated, message: "Use view instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var viewAuthenticate: String { "view.authenticate" }

    @available(*, deprecated, message: "Use view.render instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var viewResponseRender: String { "view.response.render" }
}
