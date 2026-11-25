// This is an auto-generated file. Do not edit!

public struct AttributeNames {
    private init() {}

    /// The version of the Angular framework
    @_alwaysEmitIntoClient
    @inlinable
    public static var angularVersion: String { "angular.version" }

    /// Internal build identifier, as it appears on the platform.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appBuild: String { "app.build" }

    /// Version-independent application identifier, often a dotted bundle ID.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appIdentifier: String { "app.identifier" }

    /// Whether the application is currently in the foreground.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appInForeground: String { "app.in_foreground" }

    /// Human readable application name, as it appears on the platform.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appName: String { "app.name" }

    /// Formatted UTC timestamp when the user started the application.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appStartTime: String { "app.start_time" }

    /// Human readable application version, as it appears on the platform.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVersion: String { "app.version" }

    /// The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsFramesDelayValue: String { "app.vitals.frames.delay.value" }

    /// The number of frozen frames rendered during the lifetime of the span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsFramesFrozenCount: String { "app.vitals.frames.frozen.count" }

    /// The fraction of rendered frames that were frozen, calculated as `app.vitals.frames.frozen.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsFramesFrozenRate: String { "app.vitals.frames.frozen.rate" }

    /// The number of slow frames rendered during the lifetime of the span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsFramesSlowCount: String { "app.vitals.frames.slow.count" }

    /// The fraction of rendered frames that were slow, calculated as `app.vitals.frames.slow.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsFramesSlowRate: String { "app.vitals.frames.slow.rate" }

    /// The number of total frames rendered during the lifetime of the span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsFramesTotalCount: String { "app.vitals.frames.total.count" }

    /// The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsStallDuration: String { "app.vitals.stall.duration" }

    /// The fraction of transaction duration during which the app was stalled, between 0.0 and 1.0. For example, 0.8 represents 80%. Only applies to React Native. This is computed by Relay.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsStallPercentage: String { "app.vitals.stall.percentage" }

    /// The duration of a cold app start in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsStartColdValue: String { "app.vitals.start.cold.value" }

    /// Whether the app start was prewarmed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsStartPrewarmed: String { "app.vitals.start.prewarmed" }

    /// The reason that triggered the app start.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsStartReason: String { "app.vitals.start.reason" }

    /// The screen that is rendered when the app start is complete. This is the screen the user first sees and can interact with after launch. The absence of this attribute on the app start span indicates a background app start where no UI was rendered.
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsStartScreen: String { "app.vitals.start.screen" }

    /// The type of app start, for example `cold` or `warm`
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsStartType: String { "app.vitals.start.type" }

    /// The duration of a warm app start in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsStartWarmValue: String { "app.vitals.start.warm.value" }

    /// The duration of time to full display in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsTtfdValue: String { "app.vitals.ttfd.value" }

    /// The duration of time to initial display in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var appVitalsTtidValue: String { "app.vitals.ttid.value" }

    /// Total number of blocking (stop-the-world) garbage collections performed by the Android Runtime
    @_alwaysEmitIntoClient
    @inlinable
    public static var artGcBlockingCount: String { "art.gc.blocking_count" }

    /// Total time spent in blocking (stop-the-world) garbage collections by the Android Runtime, in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var artGcBlockingTime: String { "art.gc.blocking_time" }

    /// Total number of garbage collections triggered as a last resort before an OutOfMemoryError by the Android Runtime
    @_alwaysEmitIntoClient
    @inlinable
    public static var artGcPreOomeCount: String { "art.gc.pre_oome_count" }

    /// Total number of garbage collections performed by the Android Runtime
    @_alwaysEmitIntoClient
    @inlinable
    public static var artGcTotalCount: String { "art.gc.total_count" }

    /// Total time spent in garbage collection by the Android Runtime, in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var artGcTotalTime: String { "art.gc.total_time" }

    /// Total time threads spent waiting for garbage collection to complete in the Android Runtime, in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var artGcWaitingTime: String { "art.gc.waiting_time" }

    /// Free memory available to the process as reported by the Android Runtime, in bytes
    @_alwaysEmitIntoClient
    @inlinable
    public static var artMemoryFree: String { "art.memory.free" }

    /// Free memory available before a garbage collection would be triggered by the Android Runtime, in bytes
    @_alwaysEmitIntoClient
    @inlinable
    public static var artMemoryFreeUntilGc: String { "art.memory.free_until_gc" }

    /// Free memory available before an OutOfMemoryError would be thrown by the Android Runtime, in bytes
    @_alwaysEmitIntoClient
    @inlinable
    public static var artMemoryFreeUntilOome: String { "art.memory.free_until_oome" }

    /// Maximum memory the process is allowed to use as reported by the Android Runtime, in bytes
    @_alwaysEmitIntoClient
    @inlinable
    public static var artMemoryMax: String { "art.memory.max" }

    /// Total memory currently allocated to the process by the Android Runtime, in bytes
    @_alwaysEmitIntoClient
    @inlinable
    public static var artMemoryTotal: String { "art.memory.total" }

    /// The name of the CloudWatch Logs log group
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsCloudwatchLogsLogGroup: String { "aws.cloudwatch.logs.log_group" }

    /// The name of the CloudWatch Logs log stream
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsCloudwatchLogsLogStream: String { "aws.cloudwatch.logs.log_stream" }

    /// The URL to the CloudWatch Logs log group
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsCloudwatchLogsUrl: String { "aws.cloudwatch.logs.url" }

    /// The JSON-serialized value of each item in the `AttributeDefinitions` request field.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbAttributeDefinitions: String { "aws.dynamodb.attribute_definitions" }

    /// The value of the `AttributesToGet` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbAttributesToGet: String { "aws.dynamodb.attributes_to_get" }

    /// The value of the `ConsistentRead` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbConsistentRead: String { "aws.dynamodb.consistent_read" }

    /// The JSON-serialized value of each item in the `ConsumedCapacity` response field.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbConsumedCapacity: String { "aws.dynamodb.consumed_capacity" }

    /// The value of the `Count` response parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbCount: String { "aws.dynamodb.count" }

    /// The value of the `ExclusiveStartTableName` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbExclusiveStartTable: String { "aws.dynamodb.exclusive_start_table" }

    /// The JSON-serialized value of each item in the `GlobalSecondaryIndexUpdates` request field.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbGlobalSecondaryIndexUpdates: String { "aws.dynamodb.global_secondary_index_updates" }

    /// The JSON-serialized value of each item of the `GlobalSecondaryIndexes` request field.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbGlobalSecondaryIndexes: String { "aws.dynamodb.global_secondary_indexes" }

    /// The value of the `IndexName` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbIndexName: String { "aws.dynamodb.index_name" }

    /// The JSON-serialized value of the `ItemCollectionMetrics` response field.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbItemCollectionMetrics: String { "aws.dynamodb.item_collection_metrics" }

    /// The value of the `Limit` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbLimit: String { "aws.dynamodb.limit" }

    /// The JSON-serialized value of each item of the `LocalSecondaryIndexes` request field.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbLocalSecondaryIndexes: String { "aws.dynamodb.local_secondary_indexes" }

    /// The value of the `ProjectionExpression` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbProjection: String { "aws.dynamodb.projection" }

    /// The value of the `ProvisionedThroughput.ReadCapacityUnits` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbProvisionedReadCapacity: String { "aws.dynamodb.provisioned_read_capacity" }

    /// The value of the `ProvisionedThroughput.WriteCapacityUnits` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbProvisionedWriteCapacity: String { "aws.dynamodb.provisioned_write_capacity" }

    /// The value of the `ScanIndexForward` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbScanForward: String { "aws.dynamodb.scan_forward" }

    /// The value of the `ScannedCount` response parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbScannedCount: String { "aws.dynamodb.scanned_count" }

    /// The value of the `Segment` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbSegment: String { "aws.dynamodb.segment" }

    /// The value of the `Select` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbSelect: String { "aws.dynamodb.select" }

    /// The number of items in the `TableNames` response parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbTableCount: String { "aws.dynamodb.table_count" }

    /// The keys in the `RequestItems` object field.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbTableNames: String { "aws.dynamodb.table_names" }

    /// The value of the `TotalSegments` request parameter.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsDynamodbTotalSegments: String { "aws.dynamodb.total_segments" }

    /// The AWS extended request ID as returned in the response headers.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsExtendedRequestId: String { "aws.extended_request_id" }

    /// The name of the AWS Kinesis stream the request refers to.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsKinesisStreamName: String { "aws.kinesis.stream_name" }

    /// The execution duration of the Lambda function invocation in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaExecutionDurationInMillis: String { "aws.lambda.execution_duration_in_millis" }

    /// How AWS Lambda initialized the execution environment, as reported by AWS_LAMBDA_INITIALIZATION_TYPE.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaInitializationType: String { "aws.lambda.initialization_type" }

    /// The full ARN of the Lambda function that was invoked
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaInvokedArn: String { "aws.lambda.invoked_arn" }

    /// The remaining time in milliseconds before the Lambda function times out
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaRemainingTimeInMillis: String { "aws.lambda.remaining_time_in_millis" }

    /// The UUID of the [AWS Lambda EventSource Mapping](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-eventsourcemapping.html). An event source is mapped to a lambda function. Its contents are read by Lambda and used to trigger a function. This isn't available in the lambda execution context or the lambda runtime environment. This is going to be populated by the AWS SDK for each language when that UUID is present. Some of these operations are Create/Delete/Get/List/Update EventSourceMapping.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaResourceMappingId: String { "aws.lambda.resource_mapping.id" }

    /// The name of the AWS Lambda function that an AWS SDK call acts on.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaTargetFunctionName: String { "aws.lambda.target_function.name" }

    /// The name of the AWS Lambda Web Function endpoint that received the request, as reported by the lambda-web-endpoint-name request header.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaWebEndpointName: String { "aws.lambda.web.endpoint_name" }

    /// The name(s) of the AWS log group(s) an application is writing to.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLogGroupNames: String { "aws.log.group.names" }

    /// The name(s) of the AWS log stream(s) an application is writing to.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLogStreamNames: String { "aws.log.stream.names" }

    /// The AWS request ID as returned in the response headers.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsRequestId: String { "aws.request_id" }

    /// The S3 bucket name the request refers to.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsS3Bucket: String { "aws.s3.bucket" }

    /// The source object (in the form bucket/key) for the copy operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsS3CopySource: String { "aws.s3.copy_source" }

    /// The JSON-serialized value of Delete request field, which specifies the objects to be deleted.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsS3Delete: String { "aws.s3.delete" }

    /// The S3 object key the request refers to. Corresponds to the --key parameter of the S3 API operations.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsS3Key: String { "aws.s3.key" }

    /// The part number of the part being uploaded in a multipart-upload operation. This is a positive integer between 1 and 10,000.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsS3PartNumber: String { "aws.s3.part_number" }

    /// Upload ID that identifies the multipart upload.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsS3UploadId: String { "aws.s3.upload_id" }

    /// The ARN of the Secret stored in Secrets Manager.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsSecretsmanagerSecretArn: String { "aws.secretsmanager.secret.arn" }

    /// The name of the secret stored in AWS Secrets Manager.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsSecretsmanagerSecretName: String { "aws.secretsmanager.secret.name" }

    /// The ARN of the AWS SNS Topic. An Amazon SNS topic is a logical access point that acts as a communication channel.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsSnsTopicArn: String { "aws.sns.topic.arn" }

    /// The URL of the AWS SQS Queue. It’s a unique identifier for a queue in Amazon Simple Queue Service (SQS) and is used to access the queue and perform actions on it.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsSqsQueueUrl: String { "aws.sqs.queue.url" }

    /// The ARN of the AWS Step Functions Activity.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsStepFunctionsActivityArn: String { "aws.step_functions.activity.arn" }

    /// The name of the AWS Step Functions activity.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsStepFunctionsActivityName: String { "aws.step_functions.activity.name" }

    /// The ARN of the AWS Step Functions Execution.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsStepFunctionsExecutionArn: String { "aws.step_functions.execution.arn" }

    /// The ARN of the AWS Step Functions State Machine.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsStepFunctionsStateMachineArn: String { "aws.step_functions.state_machine.arn" }

    /// The name of the AWS Step Functions state machine.
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsStepFunctionsStateMachineName: String { "aws.step_functions.state_machine.name" }

    /// Whether the main thread was blocked by the span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var blockedMainThread: String { "blocked_main_thread" }

    /// Which frame in the page's frame tree a back/forward cache not-restored reason originated from: the top document or a child frame.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserBfcacheFrame: String { "browser.bfcache.frame" }

    /// The number of reported reasons a page was not restored from the back/forward cache on a back/forward navigation. 0 when the browser reported no reasons (e.g. non-Chromium browsers).
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserBfcacheNotRestoredReasonCount: String { "browser.bfcache.not_restored_reason_count" }

    /// Whether a back/forward navigation was restored from the browser's back/forward cache (bfcache). 'hit' means the page was restored; 'miss' means it was reloaded.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserBfcacheOutcome: String { "browser.bfcache.outcome" }

    /// A browser-reported reason a page was not restored from the back/forward cache on a back/forward navigation, taken from the notRestoredReasons API. Reported per reason (a single miss can have several). Currently Chromium-only.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserBfcacheReason: String { "browser.bfcache.reason" }

    /// The name of the browser.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserName: String { "browser.name" }

    /// The identifier of the navigation the measurement belongs to, incremented by the browser for each navigation within a page's lifetime.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserNavigationId: String { "browser.navigation.id" }

    /// The type of navigation the browser performed to arrive at the page the metrics were measured on.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserNavigationType: String { "browser.navigation.type" }

    /// The type of paint timing entry reported by the browser.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserPaintType: String { "browser.paint.type" }

    /// The time between initiating a navigation to a page and the browser activating the page
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserPerformanceNavigationActivationStart: String { "browser.performance.navigation.activation_start" }

    /// The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserPerformanceTimeOrigin: String { "browser.performance.time_origin" }

    /// A browser report sent via reporting API..
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserReportType: String { "browser.report.type" }

    /// How a script was called in the browser.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserScriptInvoker: String { "browser.script.invoker" }

    /// Browser script entry point type.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserScriptInvokerType: String { "browser.script.invoker_type" }

    /// A number representing the script character position of the script.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserScriptSourceCharPosition: String { "browser.script.source_char_position" }

    /// The version of the browser.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserVersion: String { "browser.version" }

    /// The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalClsSourceKey: String { "browser.web_vital.cls.source.<key>" }

    /// The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalClsSourceKeyBase: String { "browser.web_vital.cls.source" }

    /// The value of the recorded Cumulative Layout Shift (CLS) web vital
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalClsValue: String { "browser.web_vital.cls.value" }

    /// The time it takes for the browser to render the first piece of meaningful content on the screen
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalFcpValue: String { "browser.web_vital.fcp.value" }

    /// The time in milliseconds it takes for the browser to render the first pixel on the screen
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalFpValue: String { "browser.web_vital.fp.value" }

    /// The time between the user interacting with the page and the browser starting to run the event handlers, for the interaction INP was reported on, in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalInpInputDelay: String { "browser.web_vital.inp.input_delay" }

    /// The kind of user interaction INP was reported on
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalInpInteractionType: String { "browser.web_vital.inp.interaction_type" }

    /// The time between the event handlers finishing and the browser presenting the next frame, for the interaction INP was reported on, in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalInpPresentationDelay: String { "browser.web_vital.inp.presentation_delay" }

    /// The time it took the event handlers to run, for the interaction INP was reported on, in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalInpProcessingDuration: String { "browser.web_vital.inp.processing_duration" }

    /// The HTML element selector or component name of the element the user interacted with, for the interaction INP was reported on
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalInpTarget: String { "browser.web_vital.inp.target" }

    /// The value of the recorded Interaction to Next Paint (INP) web vital
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalInpValue: String { "browser.web_vital.inp.value" }

    /// The HTML element selector or component name for which LCP was reported
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpElement: String { "browser.web_vital.lcp.element" }

    /// The time between the LCP resource finishing loading and the LCP element being rendered, in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpElementRenderDelay: String { "browser.web_vital.lcp.element_render_delay" }

    /// The id of the dom element responsible for the largest contentful paint
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpId: String { "browser.web_vital.lcp.id" }

    /// The time it took for the LCP element to be loaded
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpLoadTime: String { "browser.web_vital.lcp.load_time" }

    /// The time it took for the LCP element to be rendered
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpRenderTime: String { "browser.web_vital.lcp.render_time" }

    /// The time between the first byte of the document arriving and the browser starting to load the LCP resource, in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpResourceLoadDelay: String { "browser.web_vital.lcp.resource_load_delay" }

    /// The time it took to load the LCP resource, in milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpResourceLoadDuration: String { "browser.web_vital.lcp.resource_load_duration" }

    /// The size of the largest contentful paint element
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpSize: String { "browser.web_vital.lcp.size" }

    /// The url of the dom element responsible for the largest contentful paint
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpUrl: String { "browser.web_vital.lcp.url" }

    /// The value of the recorded Largest Contentful Paint (LCP) web vital
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpValue: String { "browser.web_vital.lcp.value" }

    /// The time it takes for the server to process the initial request and send the first byte of a response to the user's browser
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalTtfbRequestTime: String { "browser.web_vital.ttfb.request_time" }

    /// The value of the recorded Time To First Byte (TTFB) web vital in Milliseconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalTtfbValue: String { "browser.web_vital.ttfb.value" }

    /// If the cache was hit during this span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheHit: String { "cache.hit" }

    /// The age of the cache entry in seconds, measured at read time.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheItemAge: String { "cache.item_age" }

    /// The size of the requested item in the cache. In bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheItemSize: String { "cache.item_size" }

    /// The key of the cache accessed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheKey: String { "cache.key" }

    /// The operation being performed on the cache.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheOperation: String { "cache.operation" }

    /// The tags attached to the cache entry. Tags group entries so a cache can invalidate them together.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheTags: String { "cache.tags" }

    /// The TTL (maximum lifetime) of the cache entry in seconds
    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheTtl: String { "cache.ttl" }

    /// If the cache operation resulted in a write to the cache.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cacheWrite: String { "cache.write" }

    /// The channel name that is being used.
    @_alwaysEmitIntoClient
    @inlinable
    public static var channel: String { "channel" }

    /// Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var clientAddress: String { "client.address" }

    /// Autonomous system number (ASN) associated with the client IP address.
    @_alwaysEmitIntoClient
    @inlinable
    public static var clientAsNumber: String { "client.as.number" }

    /// The name of the organization associated with the autonomous system of the client IP address.
    @_alwaysEmitIntoClient
    @inlinable
    public static var clientAsOrganization: String { "client.as.organization" }

    /// Client port number.
    @_alwaysEmitIntoClient
    @inlinable
    public static var clientPort: String { "client.port" }

    /// The cloud account ID the resource is assigned to
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudAccountId: String { "cloud.account.id" }

    /// Cloud regions often have multiple, isolated locations known as zones to increase availability
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudAvailabilityZone: String { "cloud.availability_zone" }

    /// The cloud platform in use
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudPlatform: String { "cloud.platform" }

    /// Name of the cloud provider
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudProvider: String { "cloud.provider" }

    /// The geographical region the resource is running
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudRegion: String { "cloud.region" }

    /// Cloud provider-specific native identifier of the monitored cloud resource
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudResourceId: String { "cloud.resource_id" }

    /// The duration of a Cloudflare D1 operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareD1Duration: String { "cloudflare.d1.duration" }

    /// The number of rows read in a Cloudflare D1 operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareD1RowsRead: String { "cloudflare.d1.rows_read" }

    /// The number of rows written in a Cloudflare D1 operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareD1RowsWritten: String { "cloudflare.d1.rows_written" }

    /// The number of bound parameters passed to the SQL exec call.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareDurableObjectQueryBindings: String { "cloudflare.durable_object.query.bindings" }

    /// The number of rows read by a Cloudflare Durable Object SQL operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareDurableObjectResponseRowsRead: String { "cloudflare.durable_object.response.rows_read" }

    /// The number of rows written by a Cloudflare Durable Object SQL operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareDurableObjectResponseRowsWritten: String { "cloudflare.durable_object.response.rows_written" }

    /// The name of the Cloudflare R2 bucket binding
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareR2Bucket: String { "cloudflare.r2.bucket" }

    /// The R2 API operation being performed
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareR2Operation: String { "cloudflare.r2.operation" }

    /// The delimiter used to group objects in an R2 list operation
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareR2RequestDelimiter: String { "cloudflare.r2.request.delimiter" }

    /// The object key used in the R2 operation
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareR2RequestKey: String { "cloudflare.r2.request.key" }

    /// The part number in a multipart upload operation
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareR2RequestPartNumber: String { "cloudflare.r2.request.part_number" }

    /// The prefix used to filter objects in an R2 list operation
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareR2RequestPrefix: String { "cloudflare.r2.request.prefix" }

    /// The current attempt number for a Cloudflare Workflow step
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareWorkflowAttempt: String { "cloudflare.workflow.attempt" }

    /// The backoff strategy for Cloudflare Workflow step retries
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareWorkflowRetriesBackoff: String { "cloudflare.workflow.retries.backoff" }

    /// The delay between Cloudflare Workflow step retries
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareWorkflowRetriesDelay: String { "cloudflare.workflow.retries.delay" }

    /// The maximum number of retries for a Cloudflare Workflow step
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareWorkflowRetriesLimit: String { "cloudflare.workflow.retries.limit" }

    /// The timeout duration for a Cloudflare Workflow step
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareWorkflowTimeout: String { "cloudflare.workflow.timeout" }

    /// The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
    @_alwaysEmitIntoClient
    @inlinable
    public static var codeFilePath: String { "code.file.path" }

    /// The method or function name, or equivalent (usually rightmost part of the code unit's name).
    @_alwaysEmitIntoClient
    @inlinable
    public static var codeFunction: String { "code.function" }

    /// The method or function fully-qualified name without arguments.
    @_alwaysEmitIntoClient
    @inlinable
    public static var codeFunctionName: String { "code.function.name" }

    /// The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function
    @_alwaysEmitIntoClient
    @inlinable
    public static var codeLineNumber: String { "code.line.number" }

    /// The 'namespace' within which code.function is defined. Usually the qualified class or module name, such that code.namespace + some separator + code.function form a unique identifier for the code unit.
    @_alwaysEmitIntoClient
    @inlinable
    public static var codeNamespace: String { "code.namespace" }

    /// The calendar system used by the culture.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cultureCalendar: String { "culture.calendar" }

    /// Human readable name of the culture.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cultureDisplayName: String { "culture.display_name" }

    /// Whether the culture uses 24-hour time format.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cultureIs24HourFormat: String { "culture.is_24_hour_format" }

    /// The locale identifier following RFC 4646.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cultureLocale: String { "culture.locale" }

    /// The timezone of the culture, as a geographic timezone identifier.
    @_alwaysEmitIntoClient
    @inlinable
    public static var cultureTimezone: String { "culture.timezone" }

    /// The name of a collection (table, container) within the database.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbCollectionName: String { "db.collection.name" }

    /// The name of the driver used for the database connection.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbDriverName: String { "db.driver.name" }

    /// The name of the database being accessed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbNamespace: String { "db.namespace" }

    /// The number of queries included in a batch operation. Operations are only considered batches when they contain two or more operations, and so db.operation.batch.size SHOULD never be 1.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbOperationBatchSize: String { "db.operation.batch.size" }

    /// The name of the operation being executed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbOperationName: String { "db.operation.name" }

    /// A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbQueryParameterKey: String { "db.query.parameter.<key>" }

    /// A query parameter used in db.query.text, with <key> being the parameter name, and the attribute value being a string representation of the parameter value.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbQueryParameterKeyBase: String { "db.query.parameter" }

    /// A shortened representation of operation(s) in the full query. This attribute must be low-cardinality and should only contain the operation table names.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbQuerySummary: String { "db.query.summary" }

    /// The database parameterized query being executed. Any parameter values (filters, insertion values, etc) should be replaced with parameter placeholders. If applicable, use `db.query.parameter.<key>` to add the parameter value.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbQueryText: String { "db.query.text" }

    /// The redis connection name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbRedisConnection: String { "db.redis.connection" }

    /// The key the Redis command is operating on.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbRedisKey: String { "db.redis.key" }

    /// The array of command parameters given to a redis command.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbRedisParameters: String { "db.redis.parameters" }

    /// The number of rows returned by the database operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbResponseReturnedRows: String { "db.response.returned_rows" }

    /// Database response status code. The status code returned by the database. Usually it represents an error code, but may also represent partial success, warning, or differentiate between various types of successful outcomes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbResponseStatusCode: String { "db.response.status_code" }

    /// The name of a stored procedure being called.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbStoredProcedureName: String { "db.stored_procedure.name" }

    /// An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbSystemName: String { "db.system.name" }

    /// The database user.
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbUser: String { "db.user" }

    /// The CPU architectures of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceArchs: String { "device.archs" }

    /// The battery level of the device as a percentage (0-100).
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceBatteryLevel: String { "device.battery_level" }

    /// The battery temperature of the device in Celsius.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceBatteryTemperature: String { "device.battery_temperature" }

    /// A formatted UTC timestamp when the system was booted.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceBootTime: String { "device.boot_time" }

    /// The brand of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceBrand: String { "device.brand" }

    /// Whether the device was charging or not.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceCharging: String { "device.charging" }

    /// The chipset of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceChipset: String { "device.chipset" }

    /// The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceClass: String { "device.class" }

    /// A description of the CPU of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceCpuDescription: String { "device.cpu_description" }

    /// External storage free size in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceExternalFreeStorage: String { "device.external_free_storage" }

    /// External storage total size in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceExternalStorageSize: String { "device.external_storage_size" }

    /// The family of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceFamily: String { "device.family" }

    /// Free system memory in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceFreeMemory: String { "device.free_memory" }

    /// Free device storage in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceFreeStorage: String { "device.free_storage" }

    /// Unique device identifier.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceId: String { "device.id" }

    /// The locale of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceLocale: String { "device.locale" }

    /// Whether the device was low on memory.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceLowMemory: String { "device.low_memory" }

    /// Whether the device is in Low Power Mode.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceLowPowerMode: String { "device.low_power_mode" }

    /// The manufacturer of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceManufacturer: String { "device.manufacturer" }

    /// The estimated total memory capacity of the device, only a rough estimation in gigabytes. Browsers report estimations in buckets of powers of 2, mostly capped at 8 GB
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceMemoryEstimatedCapacity: String { "device.memory.estimated_capacity" }

    /// Total system memory available in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceMemorySize: String { "device.memory_size" }

    /// The model of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceModel: String { "device.model" }

    /// An internal hardware revision to identify the device exactly.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceModelId: String { "device.model_id" }

    /// The user-assigned name of the mobile device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceName: String { "device.name" }

    /// Whether the device was online or not.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceOnline: String { "device.online" }

    /// The orientation of the device, either "portrait" or "landscape".
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceOrientation: String { "device.orientation" }

    /// Number of "logical processors".
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceProcessorCount: String { "device.processor_count" }

    /// Processor frequency in MHz.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceProcessorFrequency: String { "device.processor_frequency" }

    /// The screen density of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceScreenDensity: String { "device.screen_density" }

    /// The screen density in dots-per-inch (DPI) of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceScreenDpi: String { "device.screen_dpi" }

    /// The height of the device screen in pixels.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceScreenHeightPixels: String { "device.screen_height_pixels" }

    /// The width of the device screen in pixels.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceScreenWidthPixels: String { "device.screen_width_pixels" }

    /// Whether the device is a simulator or an actual device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceSimulator: String { "device.simulator" }

    /// Total device storage in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceStorageSize: String { "device.storage_size" }

    /// The thermal state of the device. Based on Apple's `ProcessInfo.ThermalState` enum.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceThermalState: String { "device.thermal_state" }

    /// The timezone of the device.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceTimezone: String { "device.timezone" }

    /// Memory usable for the app in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceUsableMemory: String { "device.usable_memory" }

    /// Describes a class of error the operation ended with.
    @_alwaysEmitIntoClient
    @inlinable
    public static var errorType: String { "error.type" }

    /// The unique identifier for this event (log record)
    @_alwaysEmitIntoClient
    @inlinable
    public static var eventId: String { "event.id" }

    /// The name that uniquely identifies this event (log record)
    @_alwaysEmitIntoClient
    @inlinable
    public static var eventName: String { "event.name" }

    /// SHOULD be set to true if the exception event is recorded at a point where it is known that the exception is escaping the scope of the span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var exceptionEscaped: String { "exception.escaped" }

    /// The error message.
    @_alwaysEmitIntoClient
    @inlinable
    public static var exceptionMessage: String { "exception.message" }

    /// A stacktrace as a string in the natural representation for the language runtime. The representation is to be determined and documented by each language SIG.
    @_alwaysEmitIntoClient
    @inlinable
    public static var exceptionStacktrace: String { "exception.stacktrace" }

    /// The type of the exception (its fully-qualified class name, if applicable). The dynamic type of the exception should be preferred over the static type in languages that support it.
    @_alwaysEmitIntoClient
    @inlinable
    public static var exceptionType: String { "exception.type" }

    /// A boolean that is true if the serverless function is executed for the first time (aka cold-start).
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasColdstart: String { "faas.coldstart" }

    /// A string containing the schedule period as Cron Expression.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasCron: String { "faas.cron" }

    /// The name of the source on which the triggering operation was performed. For example, in Cloud Storage or S3 corresponds to the bucket name, and in Cosmos DB to the database name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasDocumentCollection: String { "faas.document.collection" }

    /// The document name/table subjected to the operation. For example, in Cloud Storage or S3 is the name of the file, and in Cosmos DB the table name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasDocumentName: String { "faas.document.name" }

    /// Describes the type of the operation that was performed on the data.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasDocumentOperation: String { "faas.document.operation" }

    /// A string containing the time when the data was accessed in the ISO 8601 format expressed in UTC.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasDocumentTime: String { "faas.document.time" }

    /// The duration a function took to run, in milliseconds.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasDurationInMs: String { "faas.duration_in_ms" }

    /// The code that's run when the cloud provider invokes your function.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasEntryPoint: String { "faas.entry_point" }

    /// The Service Account (GCP), IAM Execution Role (AWS), or Managed Identity (Azure) used by the serverless function when interacting with other cloud services
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasIdentity: String { "faas.identity" }

    /// The execution environment ID as a string, that will be potentially reused for other invocations to the same function/function version.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasInstance: String { "faas.instance" }

    /// The invocation ID of the current function invocation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasInvocationId: String { "faas.invocation_id" }

    /// The name of the invoked function.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasInvokedName: String { "faas.invoked_name" }

    /// The cloud provider of the invoked function.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasInvokedProvider: String { "faas.invoked_provider" }

    /// The cloud region of the invoked function.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasInvokedRegion: String { "faas.invoked_region" }

    /// The amount of memory available to the serverless function, in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasMaxMemory: String { "faas.max_memory" }

    /// The name of the serverless function
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasName: String { "faas.name" }

    /// A string containing the function invocation time in the ISO 8601 format expressed in UTC.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasTime: String { "faas.time" }

    /// Type of the trigger which caused this function invocation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasTrigger: String { "faas.trigger" }

    /// The version of the function that was invoked
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasVersion: String { "faas.version" }

    /// Path to the file.
    @_alwaysEmitIntoClient
    @inlinable
    public static var filePath: String { "file.path" }

    /// File size in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var fileSize: String { "file.size" }

    /// An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.
    @_alwaysEmitIntoClient
    @inlinable
    public static var flagEvaluationKey: String { "flag.evaluation.<key>" }

    /// An instance of a feature flag evaluation. The value of this attribute is the boolean representing the evaluation result. The <key> suffix is the name of the feature flag.
    @_alwaysEmitIntoClient
    @inlinable
    public static var flagEvaluationKeyBase: String { "flag.evaluation" }

    /// The event ID from the legacy GCP Cloud Function context (1st gen)
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpFunctionContextEventId: String { "gcp.function.context.event_id" }

    /// The type of the GCP Cloud Function event
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpFunctionContextEventType: String { "gcp.function.context.event_type" }

    /// The unique event ID from the GCP CloudEvents context (2nd gen Cloud Functions)
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpFunctionContextId: String { "gcp.function.context.id" }

    /// The resource that triggered the GCP Cloud Function event
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpFunctionContextResource: String { "gcp.function.context.resource" }

    /// The source of the GCP Cloud Function event
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpFunctionContextSource: String { "gcp.function.context.source" }

    /// The CloudEvents specification version of the GCP Cloud Function event
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpFunctionContextSpecversion: String { "gcp.function.context.specversion" }

    /// The timestamp of the GCP Cloud Function event
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpFunctionContextTime: String { "gcp.function.context.time" }

    /// The legacy timestamp of the GCP Cloud Function event
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpFunctionContextTimestamp: String { "gcp.function.context.timestamp" }

    /// The type of the GCP Cloud Function event context
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpFunctionContextType: String { "gcp.function.context.type" }

    /// The ID of the project in GCP that this resource is associated with
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpProjectId: String { "gcp.project.id" }

    /// The name of the agent being used.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiAgentName: String { "gen_ai.agent.name" }

    /// The fraction of the model context window utilized by this generation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiContextUtilization: String { "gen_ai.context.utilization" }

    /// The maximum context window size supported by the model for this generation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiContextWindowSize: String { "gen_ai.context.window_size" }

    /// The unique identifier for a conversation (session, thread), used to store and correlate messages within this conversation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiConversationId: String { "gen_ai.conversation.id" }

    /// The cost of input tokens written to cache in USD.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiCostCacheCreationInputTokens: String { "gen_ai.cost.cache_creation.input_tokens" }

    /// The cost of cached input tokens in USD.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiCostCacheReadInputTokens: String { "gen_ai.cost.cache_read.input_tokens" }

    /// The total cost of all input tokens in USD (includes cached and cache creation tokens).
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiCostInputTokens: String { "gen_ai.cost.input_tokens" }

    /// The total cost of all output tokens in USD (includes reasoning tokens).
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiCostOutputTokens: String { "gen_ai.cost.output_tokens" }

    /// The cost of reasoning output tokens in USD.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiCostReasoningOutputTokens: String { "gen_ai.cost.reasoning.output_tokens" }

    /// The total cost for the tokens used.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiCostTotalTokens: String { "gen_ai.cost.total_tokens" }

    /// The input to the embeddings model.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiEmbeddingsInput: String { "gen_ai.embeddings.input" }

    /// Framework-specific tracing label for the execution of a function or other unit of execution in a generative AI system.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiFunctionId: String { "gen_ai.function_id" }

    /// The messages passed to the model. It has to be a stringified version of an array of objects in the format `{role: "...", parts: [...]}`. The `role` must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. Each part is an object with a `type`, such as `{type: "text", content: "..."}`. Other part types include `"reasoning"`, `"tool_call"`, and `"tool_call_response"`. Put the model's thinking in a `{type: "reasoning", content: "..."}` part, not a `"text"` part. Sentry shows reasoning separately from user-visible messages. The legacy format `{role, content}` is also accepted. The first example shows this shape. Some operations use a different shape. See the additional context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiInputMessages: String { "gen_ai.input.messages" }

    /// The search query used to retrieve memories. Only applicable to 'search_memory'. Opt-in: instrumentations SHOULD NOT capture this by default and SHOULD gate it behind explicit user opt-in, as it may contain sensitive information.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiMemoryQueryText: String { "gen_ai.memory.query.text" }

    /// The number of memory records relevant to the operation. For 'search_memory' this is the number returned; for 'create_memory', 'update_memory', 'upsert_memory' and 'delete_memory' it is the number the operation attempted to create, modify, create-or-update, or delete respectively.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiMemoryRecordCount: String { "gen_ai.memory.record.count" }

    /// The unique identifier of the memory record. Set when the operation applies to a specific memory record. For 'delete_memory', its absence may indicate the operation intends to delete all memory records in the store.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiMemoryRecordId: String { "gen_ai.memory.record.id" }

    /// The memory records stored or retrieved in a memory operation. Stringified JSON array; each element follows the OTel MemoryRecord schema: {content (required), id, metadata, score}. Opt-in: instrumentations SHOULD NOT capture this by default and SHOULD gate it behind explicit user opt-in, as it may contain sensitive information including user/PII data.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiMemoryRecords: String { "gen_ai.memory.records" }

    /// The unique identifier of the memory store the operation targets. What this maps to is implementation-specific (e.g. a collection, namespace, or vector index) and SHOULD be documented per integration.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiMemoryStoreId: String { "gen_ai.memory.store.id" }

    /// The name of the operation being performed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiOperationName: String { "gen_ai.operation.name" }

    /// The type of AI operation. Added during ingestion based on span.op and gen_ai.operation.type. Used to filter and aggregate data in the UI
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiOperationType: String { "gen_ai.operation.type" }

    /// Messages returned by the model where each message represents a specific model response (choice, candidate). It has to be a stringified version of an array of message objects in the format `{role: "assistant", parts: [...]}`, which can include text responses and tool calls. Each part is an object with a `type`, such as `{type: "text", content: "..."}`. Other part types include `"reasoning"` and `"tool_call"`. Put the model's thinking in a `{type: "reasoning", content: "..."}` part, not a `"text"` part. Sentry shows reasoning separately from user-visible messages. The first example shows this shape. Some operations use a different shape. See the additional context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiOutputMessages: String { "gen_ai.output.messages" }

    /// Name of the AI pipeline or chain being executed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiPipelineName: String { "gen_ai.pipeline.name" }

    /// The name of the prompt that uniquely identifies it.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiPromptName: String { "gen_ai.prompt.name" }

    /// Variables supplied to the prompt template. The <key> is the variable name, and the value is the variable value serialized as a string.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiPromptVariableKey: String { "gen_ai.prompt.variable.<key>" }

    /// Variables supplied to the prompt template. The <key> is the variable name, and the value is the variable value serialized as a string.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiPromptVariableKeyBase: String { "gen_ai.prompt.variable" }

    /// The Generative AI provider as identified by the client or server instrumentation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiProviderName: String { "gen_ai.provider.name" }

    /// Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestFrequencyPenalty: String { "gen_ai.request.frequency_penalty" }

    /// The maximum number of tokens to generate in the response.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestMaxTokens: String { "gen_ai.request.max_tokens" }

    /// The model identifier being used for the request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestModel: String { "gen_ai.request.model" }

    /// Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestPresencePenalty: String { "gen_ai.request.presence_penalty" }

    /// The reasoning or thinking effort level requested for a GenAI model. Supported values vary by provider.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestReasoningLevel: String { "gen_ai.request.reasoning.level" }

    /// The seed, ideally models given the same seed and same other parameters will produce the exact same output.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestSeed: String { "gen_ai.request.seed" }

    /// List of sequences that the model will use to stop generating further tokens.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestStopSequences: String { "gen_ai.request.stop_sequences" }

    /// For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestTemperature: String { "gen_ai.request.temperature" }

    /// Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestTopK: String { "gen_ai.request.top_k" }

    /// Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestTopP: String { "gen_ai.request.top_p" }

    /// The reason why the model stopped generating.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseFinishReasons: String { "gen_ai.response.finish_reasons" }

    /// Unique identifier for the completion.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseId: String { "gen_ai.response.id" }

    /// The vendor-specific ID of the model used.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseModel: String { "gen_ai.response.model" }

    /// Whether or not the AI model call's response was streamed back asynchronously
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseStreaming: String { "gen_ai.response.streaming" }

    /// Time from the start of a logical inference operation to the first chunk in its streaming response, in seconds.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseTimeToFirstChunk: String { "gen_ai.response.time_to_first_chunk" }

    /// The total output tokens per seconds throughput
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseTokensPerSecond: String { "gen_ai.response.tokens_per_second" }

    /// The system message or instructions provided to the GenAI model separately from the chat history.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiSystemInstructions: String { "gen_ai.system_instructions" }

    /// The arguments of the tool call.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolCallArguments: String { "gen_ai.tool.call.arguments" }

    /// The result of the tool call.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolCallResult: String { "gen_ai.tool.call.result" }

    /// The UTF-8 byte length of the serialized tool call result, measured before truncation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolCallResultSize: String { "gen_ai.tool.call.result.size" }

    /// The list of source system tool definitions available to the GenAI agent or model. It has to be a stringified version of an array of objects.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolDefinitions: String { "gen_ai.tool.definitions" }

    /// The description of the tool being used.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolDescription: String { "gen_ai.tool.description" }

    /// Name of the tool utilized by the agent.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolName: String { "gen_ai.tool.name" }

    /// The number of tokens written to the cache when processing the AI input (prompt).
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageCacheCreationInputTokens: String { "gen_ai.usage.cache_creation.input_tokens" }

    /// The number of cached tokens used to process the AI input (prompt).
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageCacheReadInputTokens: String { "gen_ai.usage.cache_read.input_tokens" }

    /// The number of tokens used to process the AI input (prompt) including cached input tokens.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageInputTokens: String { "gen_ai.usage.input_tokens" }

    /// The number of tokens used for creating the AI output (including reasoning tokens).
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageOutputTokens: String { "gen_ai.usage.output_tokens" }

    /// The number of tokens used for reasoning to create the AI output.
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageReasoningOutputTokens: String { "gen_ai.usage.reasoning.output_tokens" }

    /// The total number of tokens used to process the prompt. (input tokens plus output tokens)
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageTotalTokens: String { "gen_ai.usage.total_tokens" }

    /// The GraphQL document being executed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var graphqlDocument: String { "graphql.document" }

    /// The name of the operation being executed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var graphqlOperationName: String { "graphql.operation.name" }

    /// The type of the operation being executed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var graphqlOperationType: String { "graphql.operation.type" }

    /// The type of processing represented by this span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var graphqlProcessingType: String { "graphql.processing.type" }

    /// The individual field violations from a google.rpc.BadRequest error detail. Each entry is a JSON-encoded object with field, description, reason, and (optional) localized_message keys, mirroring google.rpc.BadRequest.FieldViolation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorBadRequestFieldViolations: String { "grpc.error.bad_request.field_violations" }

    /// Additional debugging information, such as a server-side stack trace, from a google.rpc.DebugInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorDebugInfoDetail: String { "grpc.error.debug_info.detail" }

    /// The server-side stack trace entries from a google.rpc.DebugInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorDebugInfoStackEntries: String { "grpc.error.debug_info.stack_entries" }

    /// The logical grouping to which the gRPC error reason belongs, from the google.rpc.ErrorInfo error detail.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorErrorInfoDomain: String { "grpc.error.error_info.domain" }

    /// Additional structured metadata attached to a google.rpc.ErrorInfo error detail, with <key> being the metadata key name. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorErrorInfoMetadataKey: String { "grpc.error.error_info.metadata.<key>" }

    /// Additional structured metadata attached to a google.rpc.ErrorInfo error detail, with <key> being the metadata key name. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorErrorInfoMetadataKeyBase: String { "grpc.error.error_info.metadata" }

    /// The reason for the gRPC error, as defined by the service that generated it, from the google.rpc.ErrorInfo error detail.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorErrorInfoReason: String { "grpc.error.error_info.reason" }

    /// The individual precondition violations from a google.rpc.PreconditionFailure error detail. Each entry is a JSON-encoded object with type, subject, and description keys. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly, since violation subjects may identify specific resources or users.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorPreconditionFailureViolations: String { "grpc.error.precondition_failure.violations" }

    /// The individual quota violations from a google.rpc.QuotaFailure error detail. Each entry is a JSON-encoded object with subject, description, api_service, quota_metric, quota_id, quota_dimensions, quota_value, and (optional) future_quota_value keys, mirroring google.rpc.QuotaFailure.Violation. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly, since violation subjects may identify specific resources or users.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorQuotaFailureViolations: String { "grpc.error.quota_failure.violations" }

    /// A description of the error that occurred while accessing the resource, from a google.rpc.ResourceInfo error detail.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorResourceInfoDescription: String { "grpc.error.resource_info.description" }

    /// The owner of the resource being accessed (e.g. project or account owning it), from a google.rpc.ResourceInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorResourceInfoOwner: String { "grpc.error.resource_info.owner" }

    /// The name of the resource being accessed, from a google.rpc.ResourceInfo error detail. SDKs should only send this attribute when sendDefaultPii is enabled or dataCollection is configured accordingly.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorResourceInfoResourceName: String { "grpc.error.resource_info.resource_name" }

    /// The type of resource being accessed, from a google.rpc.ResourceInfo error detail.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorResourceInfoResourceType: String { "grpc.error.resource_info.resource_type" }

    /// How long the client should wait before retrying the gRPC call, in milliseconds, from the google.rpc.RetryInfo error detail.
    @_alwaysEmitIntoClient
    @inlinable
    public static var grpcErrorRetryInfoRetryDelayMs: String { "grpc.error.retry_info.retry_delay_ms" }

    /// The request lifecycle extension point where the Hapi extension function runs.
    @_alwaysEmitIntoClient
    @inlinable
    public static var hapiExtType: String { "hapi.ext.type" }

    /// The name of the Hapi plugin that registered the route.
    @_alwaysEmitIntoClient
    @inlinable
    public static var hapiPluginName: String { "hapi.plugin.name" }

    /// The type of the Hapi layer that the span describes: `router`, `plugin`, or `server.ext`.
    @_alwaysEmitIntoClient
    @inlinable
    public static var hapiType: String { "hapi.type" }

    /// Name of the Heroku dyno serving the request or emitting telemetry
    @_alwaysEmitIntoClient
    @inlinable
    public static var herokuDynoName: String { "heroku.dyno.name" }

    /// Heroku error code reported by a router or platform log
    @_alwaysEmitIntoClient
    @inlinable
    public static var herokuErrorCode: String { "heroku.error.code" }

    /// Description of the Heroku error reported by a router or platform log
    @_alwaysEmitIntoClient
    @inlinable
    public static var herokuErrorDescription: String { "heroku.error.description" }

    /// Identifier of the Heroku log drain that delivered the log, from the Logplex-Drain-Token header
    @_alwaysEmitIntoClient
    @inlinable
    public static var herokuLogplexDrainToken: String { "heroku.logplex.drain_token" }

    /// Time in milliseconds the Heroku router spent establishing a connection to the dyno
    @_alwaysEmitIntoClient
    @inlinable
    public static var herokuRouterConnect: String { "heroku.router.connect" }

    /// Request identifier reported by the Heroku router
    @_alwaysEmitIntoClient
    @inlinable
    public static var herokuRouterRequestId: String { "heroku.router.request_id" }

    /// Time in milliseconds spent proxying data between the backend dyno and the client, as reported by the Heroku router
    @_alwaysEmitIntoClient
    @inlinable
    public static var herokuRouterService: String { "heroku.router.service" }

    /// Logplex source of a Heroku log line.
    @_alwaysEmitIntoClient
    @inlinable
    public static var herokuSource: String { "heroku.source" }

    /// The fragments present in the URI. Note that this contains the leading # character, while the `url.fragment` attribute does not.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpFragment: String { "http.fragment" }

    /// The query string present in the URL. Note that this contains the leading ? character, while the `url.query` attribute does not.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpQuery: String { "http.query" }

    /// HTTP request body data. Can be given as string or structural data of any format.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestBodyData: String { "http.request.body.data" }

    /// The decoded body size of the request (in bytes).
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestBodyDecodedSize: String { "http.request.body.decoded_size" }

    /// The encoded body size of the request (in bytes).
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestBodySize: String { "http.request.body.size" }

    /// The UNIX timestamp representing the time immediately before the user agent starts establishing the connection to the server to retrieve the resource.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestConnectStart: String { "http.request.connect_start" }

    /// The UNIX timestamp representing the time immediately after the browser finishes establishing the connection to the server to retrieve the resource. The timestamp value includes the time interval to establish the transport connection, as well as other time intervals such as TLS handshake and SOCKS authentication.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestConnectionEnd: String { "http.request.connection_end" }

    /// The UNIX timestamp representing the time immediately after the browser finishes the domain-name lookup for the resource.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestDomainLookupEnd: String { "http.request.domain_lookup_end" }

    /// The UNIX timestamp representing the time immediately before the browser starts the domain name lookup for the resource.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestDomainLookupStart: String { "http.request.domain_lookup_start" }

    /// The duration of a HTTP request, in milliseconds.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestDuration: String { "http.request.duration" }

    /// The UNIX timestamp representing the time immediately before the browser starts to fetch the resource.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestFetchStart: String { "http.request.fetch_start" }

    /// HTTP request headers, <key> being the lower-cased, but otherwise unchanged HTTP Header name, the value being the header values.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestHeaderKey: String { "http.request.header.<key>" }

    /// HTTP request headers, <key> being the lower-cased, but otherwise unchanged HTTP Header name, the value being the header values.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestHeaderKeyBase: String { "http.request.header" }

    /// The HTTP method used.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestMethod: String { "http.request.method" }

    /// The UNIX timestamp representing the timestamp immediately after receiving the last byte of the response of the last redirect
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestRedirectEnd: String { "http.request.redirect_end" }

    /// The UNIX timestamp representing the start time of the fetch which that initiates the redirect.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestRedirectStart: String { "http.request.redirect_start" }

    /// The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestRequestStart: String { "http.request.request_start" }

    /// The ordinal number of request resending attempt (for any reason, including redirects).
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestResendCount: String { "http.request.resend_count" }

    /// The UNIX timestamp representing the time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestResponseEnd: String { "http.request.response_end" }

    /// The UNIX timestamp representing the time immediately before the browser starts requesting the resource from the server, cache, or local resource. If the transport connection fails and the browser retires the request, the value returned will be the start of the retry request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestResponseStart: String { "http.request.response_start" }

    /// Indicates that a URL has the same origin as the current page's origin in the browser.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestSameOrigin: String { "http.request.same_origin" }

    /// The UNIX timestamp representing the time immediately before the browser starts the handshake process to secure the current connection. If a secure connection is not used, the property returns zero.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestSecureConnectionStart: String { "http.request.secure_connection_start" }

    /// The time in seconds from the browser's timeorigin to when the first byte of the request's response was received. See https://web.dev/articles/ttfb#measure-resource-requests
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestTimeToFirstByte: String { "http.request.time_to_first_byte" }

    /// The UNIX timestamp representing the timestamp immediately before dispatching the FetchEvent if a Service Worker thread is already running, or immediately before starting the Service Worker thread if it is not already running.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestWorkerStart: String { "http.request.worker_start" }

    /// The decoded body size of the response (in bytes).
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseBodyDecodedSize: String { "http.response.body.decoded_size" }

    /// The encoded body size of the response (in bytes).
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseBodySize: String { "http.response.body.size" }

    /// The delivery type of the resource, as reported by the browser's PerformanceResourceTiming.deliveryType property.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseDeliveryType: String { "http.response.delivery_type" }

    /// HTTP response headers, <key> being the lower-cased, but otherwise unchanged HTTP Header name, the value being the header values.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseHeaderKey: String { "http.response.header.<key>" }

    /// HTTP response headers, <key> being the lower-cased, but otherwise unchanged HTTP Header name, the value being the header values.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseHeaderKeyBase: String { "http.response.header" }

    /// The size of the message body sent to the recipient (in bytes)
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseHeaderContentLength: String { "http.response.header.content-length" }

    /// The transfer size of the response (in bytes).
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseSize: String { "http.response.size" }

    /// The status code of the HTTP response.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseStatusCode: String { "http.response.status_code" }

    /// The reason phrase of the HTTP response.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseStatusText: String { "http.response.status_text" }

    /// The matched route, that is, the path template in the format used by the respective server framework.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRoute: String { "http.route" }

    /// The time in milliseconds the request spent in the server queue before processing began. Measured from the X-Request-Start header set by reverse proxies (e.g., Nginx, HAProxy, Heroku) to when the application started handling the request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpServerRequestTimeInQueue: String { "http.server.request.time_in_queue" }

    /// A unique identifier for the span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var id: String { "id" }

    /// The URL of the resource blocked by the integrity policy.
    @_alwaysEmitIntoClient
    @inlinable
    public static var integrityBlockedUrl: String { "integrity.blocked_url" }

    /// The destination type of the resource affected by the integrity policy.
    @_alwaysEmitIntoClient
    @inlinable
    public static var integrityDestination: String { "integrity.destination" }

    /// The URL of the document where the integrity violation occurred.
    @_alwaysEmitIntoClient
    @inlinable
    public static var integrityDocumentUrl: String { "integrity.document_url" }

    /// Whether the integrity violation was generated by a report-only policy.
    @_alwaysEmitIntoClient
    @inlinable
    public static var integrityReportOnly: String { "integrity.report_only" }

    /// The version of the JSON-RPC protocol used.
    @_alwaysEmitIntoClient
    @inlinable
    public static var jsonrpcProtocolVersion: String { "jsonrpc.protocol.version" }

    /// The JSON-RPC request identifier, used to correlate a request with its response.
    @_alwaysEmitIntoClient
    @inlinable
    public static var jsonrpcRequestId: String { "jsonrpc.request.id" }

    /// Name of the garbage collector action.
    @_alwaysEmitIntoClient
    @inlinable
    public static var jvmGcAction: String { "jvm.gc.action" }

    /// Name of the garbage collector.
    @_alwaysEmitIntoClient
    @inlinable
    public static var jvmGcName: String { "jvm.gc.name" }

    /// Name of the memory pool.
    @_alwaysEmitIntoClient
    @inlinable
    public static var jvmMemoryPoolName: String { "jvm.memory.pool.name" }

    /// Name of the memory pool.
    @_alwaysEmitIntoClient
    @inlinable
    public static var jvmMemoryType: String { "jvm.memory.type" }

    /// Whether the thread is daemon or not.
    @_alwaysEmitIntoClient
    @inlinable
    public static var jvmThreadDaemon: String { "jvm.thread.daemon" }

    /// State of the thread.
    @_alwaysEmitIntoClient
    @inlinable
    public static var jvmThreadState: String { "jvm.thread.state" }

    /// The type of the Koa layer that handled the request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var koaType: String { "koa.type" }

    /// The name of the logger that generated this event.
    @_alwaysEmitIntoClient
    @inlinable
    public static var loggerName: String { "logger.name" }

    /// Registered OAuth client application name associated with the authenticated MCP request. Taken from OAuth client registration metadata (client_name) made available by the authentication layer. This is distinct from the MCP implementation name in mcp.client.name; omit it when the OAuth client name is unavailable.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpAuthClientName: String { "mcp.auth.client.name" }

    /// Reason for the cancellation of an MCP operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpCancelledReason: String { "mcp.cancelled.reason" }

    /// Request ID of the cancelled MCP operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpCancelledRequestId: String { "mcp.cancelled.request_id" }

    /// Name of the MCP client implementation, as declared in clientInfo. This is distinct from the registered OAuth application name in mcp.auth.client.name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpClientName: String { "mcp.client.name" }

    /// Display title of the MCP client implementation, as declared in clientInfo.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpClientTitle: String { "mcp.client.title" }

    /// Version of the MCP client implementation, as declared in clientInfo.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpClientVersion: String { "mcp.client.version" }

    /// Lifecycle phase indicator for MCP operations.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpLifecyclePhase: String { "mcp.lifecycle.phase" }

    /// Data type of the logged message content.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpLoggingDataType: String { "mcp.logging.data_type" }

    /// Log level for MCP logging operations.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpLoggingLevel: String { "mcp.logging.level" }

    /// Logger name for MCP logging operations.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpLoggingLogger: String { "mcp.logging.logger" }

    /// Log message content from MCP logging operations.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpLoggingMessage: String { "mcp.logging.message" }

    /// The name of the MCP request or notification method being called.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpMethodName: String { "mcp.method.name" }

    /// Current progress value of an MCP operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpProgressCurrent: String { "mcp.progress.current" }

    /// Progress message describing the current state of an MCP operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpProgressMessage: String { "mcp.progress.message" }

    /// Calculated progress percentage of an MCP operation. Computed from current/total * 100.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpProgressPercentage: String { "mcp.progress.percentage" }

    /// Token for tracking progress of an MCP operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpProgressToken: String { "mcp.progress.token" }

    /// Total progress target value of an MCP operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpProgressTotal: String { "mcp.progress.total" }

    /// Legacy text content of an indexed message in a multi-message MCP prompt result.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpPromptResultKeyContent: String { "mcp.prompt.result.<key>.content" }

    /// Legacy role of an indexed message in a multi-message MCP prompt result.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpPromptResultKeyRole: String { "mcp.prompt.result.<key>.role" }

    /// Description of the prompt result.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpPromptResultDescription: String { "mcp.prompt.result.description" }

    /// Content of the message in the prompt result. Used for single message results only.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpPromptResultMessageContent: String { "mcp.prompt.result.message_content" }

    /// Number of messages in the prompt result.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpPromptResultMessageCount: String { "mcp.prompt.result.message_count" }

    /// Role of the message in the prompt result. Used for single message results only.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpPromptResultMessageRole: String { "mcp.prompt.result.message_role" }

    /// Readiness indicator for the legacy MCP initialization handshake. A non-zero value indicates that notifications/initialized has completed initialization. Omit for protocol versions without this handshake.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpProtocolReady: String { "mcp.protocol.ready" }

    /// Version of the Model Context Protocol used for the operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpProtocolVersion: String { "mcp.protocol.version" }

    /// MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpRequestArgumentKey: String { "mcp.request.argument.<key>" }

    /// MCP request argument with dynamic key suffix. The <key> is replaced with the actual argument name. The value is a JSON-stringified representation of the argument value.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpRequestArgumentKeyBase: String { "mcp.request.argument" }

    /// Name argument from prompts/get MCP request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpRequestArgumentName: String { "mcp.request.argument.name" }

    /// URI argument from resources/read MCP request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpRequestArgumentUri: String { "mcp.request.argument.uri" }

    /// URI scheme of the MCP resource being accessed, extracted from its URI. This is distinct from the network protocol used to communicate with the MCP server.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpResourceProtocol: String { "mcp.resource.protocol" }

    /// The resource URI being accessed in an MCP operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpResourceUri: String { "mcp.resource.uri" }

    /// Name of the MCP server implementation, as declared in serverInfo.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpServerName: String { "mcp.server.name" }

    /// Display title of the MCP server implementation, as declared in serverInfo.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpServerTitle: String { "mcp.server.title" }

    /// Version of the MCP server implementation, as declared in serverInfo.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpServerVersion: String { "mcp.server.version" }

    /// Identifier for an MCP protocol session, when the operation belongs to a session.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpSessionId: String { "mcp.session.id" }

    /// MCP transport implementation name, such as the transport class name. This identifies the implementation, not the network transport or application protocol.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpTransport: String { "mcp.transport" }

    /// Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mdcKey: String { "mdc.<key>" }

    /// Attributes from the Mapped Diagnostic Context (MDC) present at the moment the log record was created. The MDC is supported by all the most popular logging solutions in the Java ecosystem, and it's usually implemented as a thread-local map that stores context for e.g. a specific request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var mdcKeyBase: String { "mdc" }

    /// The number of messages sent, received, or processed in the scope of the batching operation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBatchMessageCount: String { "messaging.batch.message_count" }

    /// The name of the root job of the BullMQ flow that FlowProducer.add() adds.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqFlowName: String { "messaging.bullmq.flow.name" }

    /// The time in milliseconds since the Unix epoch when the current attempt of the BullMQ job finished.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobAttemptFinishedTimestamp: String { "messaging.bullmq.job.attempt_finished_timestamp" }

    /// The names of the BullMQ jobs or flows that one bulk operation adds, for example Queue.addBulk().
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobBulkNames: String { "messaging.bullmq.job.bulk.names" }

    /// The deduplication ID that Queue.removeDeduplicationKey() removes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobDeduplicationKey: String { "messaging.bullmq.job.deduplication.key" }

    /// The IDs of the BullMQ jobs that Queue.clean() removed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobIds: String { "messaging.bullmq.job.ids" }

    /// The key that a BullMQ remove operation for a debounce or repeatable key gets, for example Queue.removeDebounceKey().
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobKey: String { "messaging.bullmq.job.key" }

    /// The name of the BullMQ job, which the user passes to Queue.add() to identify the kind of work.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobName: String { "messaging.bullmq.job.name" }

    /// The time in milliseconds since the Unix epoch when the Worker started to process the BullMQ job.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobProcessedTimestamp: String { "messaging.bullmq.job.processed_timestamp" }

    /// The ID of the BullMQ job scheduler that adds the job.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobSchedulerId: String { "messaging.bullmq.job.scheduler.id" }

    /// The state of the BullMQ job that a job metric counts.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobState: String { "messaging.bullmq.job.state" }

    /// The job state from which Queue.clean() removes BullMQ jobs.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobType: String { "messaging.bullmq.job.type" }

    /// The number of BullMQ jobs that Queue.clean() removed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqQueueCleanCount: String { "messaging.bullmq.queue.clean.count" }

    /// The maximum number of BullMQ jobs that Queue.clean() removes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqQueueCleanLimit: String { "messaging.bullmq.queue.clean.limit" }

    /// Whether Queue.drain() also removes the delayed BullMQ jobs.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqQueueDrainDelay: String { "messaging.bullmq.queue.drain.delay" }

    /// The maximum number of events that Queue.trimEvents() keeps in the BullMQ event stream.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqQueueEventMaxLength: String { "messaging.bullmq.queue.event.max_length" }

    /// The grace period in milliseconds that Queue.clean() uses. Only BullMQ jobs that are older are removed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqQueueGrace: String { "messaging.bullmq.queue.grace" }

    /// The BullMQ job state that the queue job count metric counts.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqQueueJobsState: String { "messaging.bullmq.queue.jobs.state" }

    /// The time in milliseconds for which Queue.rateLimit() rate-limits the BullMQ queue.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqQueueRateLimit: String { "messaging.bullmq.queue.rate_limit" }

    /// Whether Worker.pause() returns without waiting for the active BullMQ jobs to finish.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqWorkerDoNotWaitActive: String { "messaging.bullmq.worker.do_not_wait_active" }

    /// Whether Worker.close() closes the Worker without waiting for the active BullMQ jobs to finish.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqWorkerForceClose: String { "messaging.bullmq.worker.force_close" }

    /// The IDs of the BullMQ jobs whose locks the Worker extends.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqWorkerJobsToExtendLocks: String { "messaging.bullmq.worker.jobs_to_extend_locks" }

    /// The name that the user gives to the BullMQ Worker in its options.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqWorkerName: String { "messaging.bullmq.worker.name" }

    /// The time in milliseconds for which Worker.rateLimit() rate-limits the BullMQ Worker.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqWorkerRateLimit: String { "messaging.bullmq.worker.rate_limit" }

    /// The IDs of the stalled BullMQ jobs that the Worker moved back to the wait state.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqWorkerStalledJobs: String { "messaging.bullmq.worker.stalled_jobs" }

    /// A unique identifier for the client that consumes or produces a message.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingClientId: String { "messaging.client.id" }

    /// The message destination connection.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingDestinationConnection: String { "messaging.destination.connection" }

    /// The message destination name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingDestinationName: String { "messaging.destination.name" }

    /// The identifier of the partition messages are sent to or received from, unique within the messaging.destination.name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingDestinationPartitionId: String { "messaging.destination.partition.id" }

    /// Message keys in Kafka are used for grouping alike messages to ensure they're processed on the same partition. They differ from messaging.message.id in that they're not unique. If the key is null, the attribute MUST NOT be set.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingKafkaMessageKey: String { "messaging.kafka.message.key" }

    /// A boolean that is true if the message is a tombstone.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingKafkaMessageTombstone: String { "messaging.kafka.message.tombstone" }

    /// The offset of a record in the corresponding Kafka partition.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingKafkaOffset: String { "messaging.kafka.offset" }

    /// The size of the message body in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingMessageBodySize: String { "messaging.message.body.size" }

    /// The conversation ID identifying the conversation to which the message belongs, represented as a string. Sometimes called "Correlation ID".
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingMessageConversationId: String { "messaging.message.conversation_id" }

    /// The size of the message body and metadata in bytes.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingMessageEnvelopeSize: String { "messaging.message.envelope.size" }

    /// A value used by the messaging system as an identifier for the message, represented as a string.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingMessageId: String { "messaging.message.id" }

    /// The latency between when the message was published and received.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingMessageReceiveLatency: String { "messaging.message.receive.latency" }

    /// The amount of attempts to send the message.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingMessageRetryCount: String { "messaging.message.retry.count" }

    /// The name of the messaging operation being performed
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingOperationName: String { "messaging.operation.name" }

    /// A string identifying the type of the messaging operation
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingOperationType: String { "messaging.operation.type" }

    /// RabbitMQ message routing key.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingRabbitmqDestinationRoutingKey: String { "messaging.rabbitmq.destination.routing_key" }

    /// The messaging system as identified by the client instrumentation.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingSystem: String { "messaging.system" }

    /// The name of the middleware.
    @_alwaysEmitIntoClient
    @inlinable
    public static var middlewareName: String { "middleware.name" }

    /// The elapsed number of milliseconds between the start of the resource fetch and when it was completed or aborted by the user agent.
    @_alwaysEmitIntoClient
    @inlinable
    public static var nelElapsedTime: String { "nel.elapsed_time" }

    /// If request failed, the phase of its network error. If request succeeded, "application".
    @_alwaysEmitIntoClient
    @inlinable
    public static var nelPhase: String { "nel.phase" }

    /// request's referrer, as determined by the referrer policy associated with its client.
    @_alwaysEmitIntoClient
    @inlinable
    public static var nelReferrer: String { "nel.referrer" }

    /// The sampling fraction used to determine if the request should be sampled.
    @_alwaysEmitIntoClient
    @inlinable
    public static var nelSamplingFraction: String { "nel.sampling_fraction" }

    /// If request failed, the type of its network error. If request succeeded, "ok".
    @_alwaysEmitIntoClient
    @inlinable
    public static var nelType: String { "nel.type" }

    /// Specifies the effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkConnectionEffectiveType: String { "network.connection.effective_type" }

    /// Specifies the estimated effective round-trip time of the current connection, in milliseconds.
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkConnectionRtt: String { "network.connection.rtt" }

    /// Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkConnectionType: String { "network.connection.type" }

    /// Local address of the network connection - IP address or Unix domain socket name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkLocalAddress: String { "network.local.address" }

    /// Local port number of the network connection.
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkLocalPort: String { "network.local.port" }

    /// Peer address of the network connection - IP address or Unix domain socket name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkPeerAddress: String { "network.peer.address" }

    /// Peer port number of the network connection.
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkPeerPort: String { "network.peer.port" }

    /// OSI application layer or non-OSI equivalent.
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkProtocolName: String { "network.protocol.name" }

    /// The actual version of the protocol used for network communication.
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkProtocolVersion: String { "network.protocol.version" }

    /// OSI transport layer or inter-process communication method.
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkTransport: String { "network.transport" }

    /// OSI network layer or non-OSI equivalent.
    @_alwaysEmitIntoClient
    @inlinable
    public static var networkType: String { "network.type" }

    /// The build ID of the operating system.
    @_alwaysEmitIntoClient
    @inlinable
    public static var osBuildId: String { "os.build_id" }

    /// Human readable (not intended to be parsed) OS version information, like e.g. reported by ver or lsb_release -a commands.
    @_alwaysEmitIntoClient
    @inlinable
    public static var osDescription: String { "os.description" }

    /// An independent kernel version string. Typically the entire output of the `uname` syscall.
    @_alwaysEmitIntoClient
    @inlinable
    public static var osKernelVersion: String { "os.kernel_version" }

    /// Human readable operating system name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var osName: String { "os.name" }

    /// An unprocessed description string obtained by the operating system. For some well-known runtimes, Sentry will attempt to parse `name` and `version` from this string, if they are not explicitly given.
    @_alwaysEmitIntoClient
    @inlinable
    public static var osRawDescription: String { "os.raw_description" }

    /// Whether the operating system has been jailbroken or rooted.
    @_alwaysEmitIntoClient
    @inlinable
    public static var osRooted: String { "os.rooted" }

    /// Whether the OS runs in dark mode or light mode.
    @_alwaysEmitIntoClient
    @inlinable
    public static var osTheme: String { "os.theme" }

    /// The operating system type.
    @_alwaysEmitIntoClient
    @inlinable
    public static var osType: String { "os.type" }

    /// The version of the operating system.
    @_alwaysEmitIntoClient
    @inlinable
    public static var osVersion: String { "os.version" }

    /// The name of the instrumentation scope - (InstrumentationScope.Name in OTLP).
    @_alwaysEmitIntoClient
    @inlinable
    public static var otelScopeName: String { "otel.scope.name" }

    /// The version of the instrumentation scope - (InstrumentationScope.Version in OTLP).
    @_alwaysEmitIntoClient
    @inlinable
    public static var otelScopeVersion: String { "otel.scope.version" }

    /// Name of the code, either “OK” or “ERROR”. MUST NOT be set if the status code is UNSET.
    @_alwaysEmitIntoClient
    @inlinable
    public static var otelStatusCode: String { "otel.status_code" }

    /// Description of the Status if it has a value, otherwise not set.
    @_alwaysEmitIntoClient
    @inlinable
    public static var otelStatusDescription: String { "otel.status_description" }

    /// Set on a pageload span. The time in seconds from the start of the server render of the reused part of the page to the start of the span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var pageServerRenderingAge: String { "page.server_rendering.age" }

    /// Set on a pageload span. Describes how the server rendered the content of the page: to reuse it for other requests, only for this request, or a mix of both.
    @_alwaysEmitIntoClient
    @inlinable
    public static var pageServerRenderingType: String { "page.server_rendering.type" }

    /// Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
    @_alwaysEmitIntoClient
    @inlinable
    public static var paramsKey: String { "params.<key>" }

    /// Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
    @_alwaysEmitIntoClient
    @inlinable
    public static var paramsKeyBase: String { "params" }

    /// Also used by mobile SDKs to indicate the previous route in the application.
    @_alwaysEmitIntoClient
    @inlinable
    public static var previousRoute: String { "previous_route" }

    /// All the command arguments (including the command/executable itself) as received by the process.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processCommandArgs: String { "process.command_args" }

    /// The name of the executable that started the process.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processExecutableName: String { "process.executable.name" }

    /// The process ID of the running process.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processPid: String { "process.pid" }

    /// An additional description about the runtime of the process, for example a specific vendor customization of the runtime environment. Equivalent to `raw_description` in the Sentry runtime context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeDescription: String { "process.runtime.description" }

    /// The kind of BEAM memory a measurement covers: processes, atom, binary, code, ets, or other for the rest of the VM total.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirMemoryType: String { "process.runtime.elixir.memory.type" }

    /// The kind of BEAM run queue a measurement covers: cpu for the normal and dirty CPU scheduler run queues, io for the dirty IO run queue.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirRunQueueType: String { "process.runtime.elixir.run_queue.type" }

    /// The name of the runtime engine.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeEngineName: String { "process.runtime.engine.name" }

    /// The version of the runtime engine.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeEngineVersion: String { "process.runtime.engine.version" }

    /// The name of the runtime. Equivalent to `name` in the Sentry runtime context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeName: String { "process.runtime.name" }

    /// The version of the runtime of this process, as returned by the runtime without modification. Equivalent to `version` in the Sentry runtime context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeVersion: String { "process.runtime.version" }

    /// The version of the React framework
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactVersion: String { "react.version" }

    /// The React Native architecture the app is running on. `new` for the New Architecture, where native modules are resolved as TurboModules through `TurboModuleRegistry`, `legacy` for the Old Architecture bridge.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeArchitecture: String { "react_native.architecture" }

    /// The number of native module calls observed during the lifetime of the span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleCallCount: String { "react_native.module.call.count" }

    /// The number of distinct native module and method pairs called during the lifetime of the span. Useful as a cardinality signal when the per-method breakdown has been truncated.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleCallDistinctCount: String { "react_native.module.call.distinct_count" }

    /// The duration of the slowest single native module call observed during the lifetime of the span, in milliseconds.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleDurationMax: String { "react_native.module.duration.max" }

    /// The combined wall-clock duration of all native module calls observed during the lifetime of the span, in milliseconds. Calls overlap, so this can exceed the span duration.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleDurationTotal: String { "react_native.module.duration.total" }

    /// The number of native module calls that failed during the lifetime of the span. A call counts as failed when it threw, rejected, or — on the Old Architecture bridge only — invoked its failure callback.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleErrorCount: String { "react_native.module.error.count" }

    /// Whether the native module call completed synchronously or reported completion later through a Promise or a callback. One of `sync` or `async`.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleKind: String { "react_native.module.kind" }

    /// The name of the native module method that was called.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleMethod: String { "react_native.module.method" }

    /// The name of the native module the call was dispatched to. On the New Architecture this is the TurboModule name, on the Old Architecture the `NativeModules` key.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleName: String { "react_native.module.name" }

    /// The total duration attributed to `react_native.module.top.name`, in milliseconds.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleTopDuration: String { "react_native.module.top.duration" }

    /// The native module and method that accounted for the most total duration during the lifetime of the span, formatted as `<module>.<method>`.
    @_alwaysEmitIntoClient
    @inlinable
    public static var reactNativeModuleTopName: String { "react_native.module.top.name" }

    /// Remix form data, <key> being the form data key, the value being the form data value.
    @_alwaysEmitIntoClient
    @inlinable
    public static var remixActionFormDataKey: String { "remix.action_form_data.<key>" }

    /// Remix form data, <key> being the form data key, the value being the form data value.
    @_alwaysEmitIntoClient
    @inlinable
    public static var remixActionFormDataKeyBase: String { "remix.action_form_data" }

    /// The render blocking status of the resource.
    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceRenderBlockingStatus: String { "resource.render_blocking_status" }

    /// The origin of the navigation (usually client side router navigations). Should preferably be a parameterized template (like url.template) or a URL path otherwise.
    @_alwaysEmitIntoClient
    @inlinable
    public static var routerNavigationOrigin: String { "router.navigation.origin" }

    /// The identifier of the matched client-side route, as assigned by the routing framework (e.g., vue-router name, react-router id).
    @_alwaysEmitIntoClient
    @inlinable
    public static var routerNavigationRouteId: String { "router.navigation.route.id" }

    /// The type of navigation done by a client-side router.
    @_alwaysEmitIntoClient
    @inlinable
    public static var routerNavigationType: String { "router.navigation.type" }

    /// The fully-qualified logical name of the method from the RPC interface perspective.
    @_alwaysEmitIntoClient
    @inlinable
    public static var rpcMethod: String { "rpc.method" }

    /// Status code of the RPC returned by the RPC server or generated by the client.
    @_alwaysEmitIntoClient
    @inlinable
    public static var rpcResponseStatusCode: String { "rpc.response.status_code" }

    /// The full (logical) name of the service being called, including its package name, if applicable.
    @_alwaysEmitIntoClient
    @inlinable
    public static var rpcService: String { "rpc.service" }

    /// A string identifying the remoting system.
    @_alwaysEmitIntoClient
    @inlinable
    public static var rpcSystemName: String { "rpc.system.name" }

    /// The weighted performance score for a web vital. This is defined as `score.weight.<key>` * `score.ratio.<key>`.
    @_alwaysEmitIntoClient
    @inlinable
    public static var scoreKey: String { "score.<key>" }

    /// The weighted performance score for a web vital. This is defined as `score.weight.<key>` * `score.ratio.<key>`.
    @_alwaysEmitIntoClient
    @inlinable
    public static var scoreKeyBase: String { "score" }

    /// The score for a web vital, normalized to a number between 0 and 1.
    @_alwaysEmitIntoClient
    @inlinable
    public static var scoreRatioKey: String { "score.ratio.<key>" }

    /// The score for a web vital, normalized to a number between 0 and 1.
    @_alwaysEmitIntoClient
    @inlinable
    public static var scoreRatioKeyBase: String { "score.ratio" }

    /// The total performance score of a span. This is the sum of individual weighted web vital scores (see `score.<key>`).
    @_alwaysEmitIntoClient
    @inlinable
    public static var scoreTotal: String { "score.total" }

    /// The relative weight of a web vital in a span's performance score.
    @_alwaysEmitIntoClient
    @inlinable
    public static var scoreWeightKey: String { "score.weight.<key>" }

    /// The relative weight of a web vital in a span's performance score.
    @_alwaysEmitIntoClient
    @inlinable
    public static var scoreWeightKeyBase: String { "score.weight" }

    /// Used as a generic attribute representing the action depending on the type of span. For instance, this is the database query operation for DB spans, and the request method for HTTP spans.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryAction: String { "sentry.action" }

    /// The reason why a span ended early.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryCancellationReason: String { "sentry.cancellation_reason" }

    /// The high-level category of a span, derived from the span operation or span attributes. This categorizes spans by their general purpose (e.g., database, HTTP, UI).
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryCategory: String { "sentry.category" }

    /// Rate at which a telemetry item (e.g. a span, or metric) was sampled in the SDK.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryClientSampleRate: String { "sentry.client_sample_rate" }

    /// The human-readable description of a span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDescription: String { "sentry.description" }

    /// The sentry dist.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDist: String { "sentry.dist" }

    /// Used as a generic attribute representing the domain depending on the type of span. For instance, this is the collection/table name for database spans, and the server address for HTTP spans.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDomain: String { "sentry.domain" }

    /// The environment from the dynamic sampling context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDscEnvironment: String { "sentry.dsc.environment" }

    /// The ID of the project where the trace originated (i.e. the project of the SDK that started the trace). Propagated through the dynamic sampling context and set by Relay during ingestion.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDscProjectId: String { "sentry.dsc.project_id" }

    /// The public key from the dynamic sampling context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDscPublicKey: String { "sentry.dsc.public_key" }

    /// The release identifier from the dynamic sampling context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDscRelease: String { "sentry.dsc.release" }

    /// The sample rate from the dynamic sampling context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDscSampleRate: String { "sentry.dsc.sample_rate" }

    /// Whether the event was sampled according to the dynamic sampling context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDscSampled: String { "sentry.dsc.sampled" }

    /// The trace ID from the dynamic sampling context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDscTraceId: String { "sentry.dsc.trace_id" }

    /// The transaction name from the dynamic sampling context.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDscTransaction: String { "sentry.dsc.transaction" }

    /// The sentry environment.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryEnvironment: String { "sentry.environment" }

    /// JSON-serialized `breadcrumbs` property from a Sentry event.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryEventSerializedBreadcrumbs: String { "sentry.event.serialized_breadcrumbs" }

    /// JSON-serialized `contexts` property from a Sentry event.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryEventSerializedContexts: String { "sentry.event.serialized_contexts" }

    /// JSON-serialized `extra` property from a Sentry event.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryEventSerializedExtra: String { "sentry.event.serialized_extra" }

    /// JSON-serialized `_meta` for the `sentry.event.serialized_*` properties from a Sentry event.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryEventSerializedMeta: String { "sentry.event.serialized_meta" }

    /// The exclusive time duration of the span in milliseconds.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryExclusiveTime: String { "sentry.exclusive_time" }

    /// Indicates the type of graphql operation, emitted by the Javascript SDK.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryGraphqlOperation: String { "sentry.graphql.operation" }

    /// Stores the hash of `sentry.normalized_description`. This is primarily used for grouping spans in the product end.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryGroup: String { "sentry.group" }

    /// If an http request was a prefetch request.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryHttpPrefetch: String { "sentry.http.prefetch" }

    /// The reason why an idle span ended early.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryIdleSpanFinishReason: String { "sentry.idle_span_finish_reason" }

    /// Indicates whether a telemetry item was sent on a host, device or browser on a localhost URL or IP address.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryIsLocalhost: String { "sentry.is_localhost" }

    /// Indicates whether a span's parent is remote, i.e. created in another process, typically another service. See OpenTelemetry's [`SpanContext.IsRemote`](https://opentelemetry.io/docs/specs/otel/trace/api/#isremote).
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryIsRemote: String { "sentry.is_remote" }

    /// Used to clarify the relationship between parents and children, or to distinguish between spans, e.g. a `server` and `client` span with the same name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryKind: String { "sentry.kind" }

    /// Set on a span link. Describes the relationship between the span and the linked span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryLinkType: String { "sentry.link.type" }

    /// Whether the span or event occurred on the main thread. Computed by Relay and should not be set by SDKs.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryMainThread: String { "sentry.main_thread" }

    /// A parameter used in the message template. <key> can either be the number that represent the parameter's position in the template string (sentry.message.parameter.0, sentry.message.parameter.1, etc) or the parameter's name (sentry.message.parameter.item_id, sentry.message.parameter.user_id, etc)
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryMessageParameterKey: String { "sentry.message.parameter.<key>" }

    /// The parameterized template string.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryMessageTemplate: String { "sentry.message.template" }

    /// The provenance of a metric.  For example, this can be set to indicate if a metric was generated by Relay from a span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryMetricSource: String { "sentry.metric.source" }

    /// Whether the application is using a mobile SDK. Computed by Relay and should not be set by SDKs.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryMobile: String { "sentry.mobile" }

    /// A module that was loaded in the process. The key is the name of the module.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryModuleKey: String { "sentry.module.<key>" }

    /// A module that was loaded in the process. The key is the name of the module.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryModuleKeyBase: String { "sentry.module" }

    /// A parameterized route for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions when the file location of the function is known.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryNextjsSsrFunctionRoute: String { "sentry.nextjs.ssr.function.route" }

    /// A descriptor for a for a function in Next.js that contributes to Server-Side Rendering. Should be present on spans that track such functions.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryNextjsSsrFunctionType: String { "sentry.nextjs.ssr.function.type" }

    /// The normalized version of `db.query.text`.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryNormalizedDbQuery: String { "sentry.normalized_db_query" }

    /// The hash of `sentry.normalized_db_query`.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryNormalizedDbQueryHash: String { "sentry.normalized_db_query.hash" }

    /// Used as a generic attribute representing the normalized `sentry.description`. This refers to the legacy use case of `sentry.description` where it holds relevant data depending on the type of span (e.g. database query, resource url, http request description, etc).
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryNormalizedDescription: String { "sentry.normalized_description" }

    /// The timestamp at which an envelope was received by Relay, in nanoseconds.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryObservedTimestampNanos: String { "sentry.observed_timestamp_nanos" }

    /// The operation of a span.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryOp: String { "sentry.op" }

    /// The origin of the instrumentation (e.g. span, log, etc.)
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryOrigin: String { "sentry.origin" }

    /// The id of the pageload span, set by web vital spans and metrics
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryPageloadSpanId: String { "sentry.pageload.span_id" }

    /// The sdk platform that generated the event.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryPlatform: String { "sentry.platform" }

    /// The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryProfileId: String { "sentry.profile_id" }

    /// The id of the currently running profiler (continuous profiling)
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryProfilerId: String { "sentry.profiler_id" }

    /// How an item (span, log, &c.) entered Relay.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryRelayIngress: String { "sentry.relay.ingress" }

    /// An internal descriptor of which processing pipeline an item went through in Relay.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryRelayPipeline: String { "sentry.relay.pipeline" }

    /// The sentry release.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryRelease: String { "sentry.release" }

    /// The id of the sentry replay.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryReplayId: String { "sentry.replay_id" }

    /// A sentinel attribute on log events indicating whether the current Session Replay is being buffered (onErrorSampleRate).
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryReplayIsBuffering: String { "sentry.replay_is_buffering" }

    /// A list of names identifying enabled integrations. The list shouldhave all enabled integrations, including default integrations. Defaultintegrations are included because different SDK releases may contain differentdefault integrations.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySdkIntegrations: String { "sentry.sdk.integrations" }

    /// The sentry sdk name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySdkName: String { "sentry.sdk.name" }

    /// The sentry sdk version.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySdkVersion: String { "sentry.sdk.version" }

    /// The segment ID of a span
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySegmentId: String { "sentry.segment.id" }

    /// The segment name of a span
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySegmentName: String { "sentry.segment.name" }

    /// The source of the segment span name. Should only be set on segment spans.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySegmentNameSource: String { "sentry.segment.name.source" }

    /// Rate at which a span was sampled in Relay.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryServerSampleRate: String { "sentry.server_sample_rate" }

    /// The span's status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryStatus: String { "sentry.status" }

    /// The from OTLP extracted status message.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryStatusMessage: String { "sentry.status.message" }

    /// The HTTP status code used in Sentry Insights. Typically set by Sentry during ingestion, rather than by clients.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryStatusCode: String { "sentry.status_code" }

    /// A sequencing counter for deterministic ordering of logs or metrics when timestamps share the same integer millisecond. Starts at 0 on SDK initialization, increments by 1 for each captured item, and resets to 0 when the integer millisecond of the current item differs from the previous one.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryTimestampSequence: String { "sentry.timestamp.sequence" }

    /// The segment's status (either "ok" or "error"). Older SDKs may set this to a more specific error, but this behaviour is deprecated.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryTraceStatus: String { "sentry.trace.status" }

    /// Indicates the chosen trace lifecycle mode of the SDK (stream or static)
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryTraceLifecycle: String { "sentry.trace_lifecycle" }

    /// Combined identifier of the user, used for the `user` tag and for counting unique users. Set to the first available of the user's ID, username, email address, or IP address, prefixed with which one it is: `id:`, `username:`, `email:`, or `ip:`.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUser: String { "sentry.user" }

    /// Preferably the server domain name if available without reverse DNS lookup, or an IP address or Unix domain socket name. For compatibility, it may contain what the hostname command returns on UNIX systems, the fully qualified hostname, or another name specified by the user.
    @_alwaysEmitIntoClient
    @inlinable
    public static var serverAddress: String { "server.address" }

    /// Server port number.
    @_alwaysEmitIntoClient
    @inlinable
    public static var serverPort: String { "server.port" }

    /// Logical name of the service.
    @_alwaysEmitIntoClient
    @inlinable
    public static var serviceName: String { "service.name" }

    /// The version string of the service API or implementation. The format is not defined by these conventions.
    @_alwaysEmitIntoClient
    @inlinable
    public static var serviceVersion: String { "service.version" }

    /// A unique id identifying the active session at the time of setting this attribute
    @_alwaysEmitIntoClient
    @inlinable
    public static var sessionId: String { "session.id" }

    /// The type of state management library
    @_alwaysEmitIntoClient
    @inlinable
    public static var stateType: String { "state.type" }

    /// The runtime environment in which the SvelteKit load function was executed. Known values are `'server'` and `'client'`.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sveltekitLoadEnvironment: String { "sveltekit.load.environment" }

    /// The path to the SvelteKit load function.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sveltekitLoadNodeId: String { "sveltekit.load.node_id" }

    /// The kind of SvelteKit load function that was executed, distinguishing page from layout and universal from server load functions.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sveltekitLoadNodeType: String { "sveltekit.load.node_type" }

    /// The original span name as emitted by SvelteKit.
    @_alwaysEmitIntoClient
    @inlinable
    public static var sveltekitTracingOriginalName: String { "sveltekit.tracing.original_name" }

    /// Current “managed” thread ID.
    @_alwaysEmitIntoClient
    @inlinable
    public static var threadId: String { "thread.id" }

    /// Current thread name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var threadName: String { "thread.name" }

    /// The log tag provided by the timber logging framework.
    @_alwaysEmitIntoClient
    @inlinable
    public static var timberTag: String { "timber.tag" }

    /// Normalized lowercase protocol name parsed from the negotiated SSL/TLS protocol version
    @_alwaysEmitIntoClient
    @inlinable
    public static var tlsProtocolName: String { "tls.protocol.name" }

    /// Numeric part of the version parsed from the negotiated SSL/TLS protocol version
    @_alwaysEmitIntoClient
    @inlinable
    public static var tlsProtocolVersion: String { "tls.protocol.version" }

    /// The path of the tRPC procedure being called
    @_alwaysEmitIntoClient
    @inlinable
    public static var trpcProcedurePath: String { "trpc.procedure_path" }

    /// The type of the tRPC procedure
    @_alwaysEmitIntoClient
    @inlinable
    public static var trpcProcedureType: String { "trpc.procedure_type" }

    /// More granular type of the operation happening.
    @_alwaysEmitIntoClient
    @inlinable
    public static var type: String { "type" }

    /// The name of the associated component.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiComponentName: String { "ui.component_name" }

    /// Whether the span execution contributed to the TTFD (time to fully drawn) metric.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiContributesToTtfd: String { "ui.contributes_to_ttfd" }

    /// Whether the span execution contributed to the TTID (time to initial display) metric.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiContributesToTtid: String { "ui.contributes_to_ttid" }

    /// The height of the UI element (for Html in pixels)
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementHeight: String { "ui.element.height" }

    /// The id of the UI element
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementId: String { "ui.element.id" }

    /// The identifier used to measure the UI element timing
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementIdentifier: String { "ui.element.identifier" }

    /// The loading time of a UI element (from time origin to finished loading)
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementLoadTime: String { "ui.element.load_time" }

    /// The type of element paint. Can either be 'image-paint' or 'text-paint'
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementPaintType: String { "ui.element.paint_type" }

    /// The rendering time of the UI element (from time origin to finished rendering)
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementRenderTime: String { "ui.element.render_time" }

    /// type of the UI element
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementType: String { "ui.element.type" }

    /// The URL of the UI element (e.g. an img src)
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementUrl: String { "ui.element.url" }

    /// The width of the UI element (for HTML in pixels)
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementWidth: String { "ui.element.width" }

    /// Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlDomain: String { "url.domain" }

    /// The fragments present in the URI. Note that this does not contain the leading # character, while the `http.fragment` attribute does.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlFragment: String { "url.fragment" }

    /// The URL of the resource that was fetched.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlFull: String { "url.full" }

    /// The URI path component.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlPath: String { "url.path" }

    /// Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlPathParameterKey: String { "url.path.parameter.<key>" }

    /// Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlPathParameterKeyBase: String { "url.path.parameter" }

    /// Server port number.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlPort: String { "url.port" }

    /// The query string present in the URL. Note that this does not contain the leading ? character, while the `http.query` attribute does.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlQuery: String { "url.query" }

    /// The URI scheme component identifying the used protocol.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlScheme: String { "url.scheme" }

    /// The low-cardinality template of an absolute URL path reference.
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlTemplate: String { "url.template" }

    /// User email address.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userEmail: String { "user.email" }

    /// User's full name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userFullName: String { "user.full_name" }

    /// Human readable city name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userGeoCity: String { "user.geo.city" }

    /// Two-letter country code (ISO 3166-1 alpha-2).
    @_alwaysEmitIntoClient
    @inlinable
    public static var userGeoCountryCode: String { "user.geo.country_code" }

    /// Human readable region name or code.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userGeoRegion: String { "user.geo.region" }

    /// Human readable subdivision name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userGeoSubdivision: String { "user.geo.subdivision" }

    /// UN M49 subregion code of the user's location, derived from user.geo.country_code. Sub-Saharan Africa and Latin America and the Caribbean are split into their M49 intermediate regions.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userGeoSubregion: String { "user.geo.subregion" }

    /// Unique user hash to correlate information for a user in anonymized form.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userHash: String { "user.hash" }

    /// Unique identifier of the user.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userId: String { "user.id" }

    /// The IP address of the user.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userIpAddress: String { "user.ip_address" }

    /// Short name or login/username of the user.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userName: String { "user.name" }

    /// Array of user roles at the time of the event.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userRoles: String { "user.roles" }

    /// Value of the HTTP User-Agent header sent by the client.
    @_alwaysEmitIntoClient
    @inlinable
    public static var userAgentOriginal: String { "user_agent.original" }

    /// A runtime context property of a Vercel AI SDK call that the app included in telemetry through `telemetry.includeRuntimeContext`, with <key> being the top-level context property name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelAiSettingsContextKey: String { "vercel.ai.settings.context.<key>" }

    /// A runtime context property of a Vercel AI SDK call that the app included in telemetry through `telemetry.includeRuntimeContext`, with <key> being the top-level context property name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelAiSettingsContextKeyBase: String { "vercel.ai.settings.context" }

    /// Metadata passed to a Vercel AI SDK call through `experimental_telemetry.metadata`, with <key> being the metadata key name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelAiTelemetryMetadataKey: String { "vercel.ai.telemetry.metadata.<key>" }

    /// Metadata passed to a Vercel AI SDK call through `experimental_telemetry.metadata`, with <key> being the metadata key name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelAiTelemetryMetadataKeyBase: String { "vercel.ai.telemetry.metadata" }

    /// A tool context property of a Vercel AI SDK tool call that the app included in telemetry through `telemetry.includeToolsContext`, with <key> being the top-level context property name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelAiToolCallContextKey: String { "vercel.ai.tool_call.context.<key>" }

    /// A tool context property of a Vercel AI SDK tool call that the app included in telemetry through `telemetry.includeToolsContext`, with <key> being the top-level context property name.
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelAiToolCallContextKeyBase: String { "vercel.ai.tool_call.context" }

    /// Git branch name for Vercel project
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelBranch: String { "vercel.branch" }

    /// Identifier for the Vercel build (only present on build logs)
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelBuildId: String { "vercel.build_id" }

    /// Identifier for the Vercel deployment
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelDeploymentId: String { "vercel.deployment_id" }

    /// Origin of the external content in Vercel (only on external logs)
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelDestination: String { "vercel.destination" }

    /// Type of edge runtime in Vercel
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelEdgeType: String { "vercel.edge_type" }

    /// Entrypoint for the request in Vercel
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelEntrypoint: String { "vercel.entrypoint" }

    /// Region where the request is executed
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelExecutionRegion: String { "vercel.execution_region" }

    /// Unique identifier for the log entry in Vercel
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelId: String { "vercel.id" }

    /// JA3 fingerprint digest of Vercel request
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelJa3Digest: String { "vercel.ja3_digest" }

    /// JA4 fingerprint digest
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelJa4Digest: String { "vercel.ja4_digest" }

    /// Vercel log output type
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelLogType: String { "vercel.log_type" }

    /// Function or dynamic path of the request in Vercel.
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelPath: String { "vercel.path" }

    /// Identifier for the Vercel project
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProjectId: String { "vercel.project_id" }

    /// Name of the Vercel project
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProjectName: String { "vercel.project_name" }

    /// Original request ID when request is served from cache
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyCacheId: String { "vercel.proxy.cache_id" }

    /// Client IP address
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyClientIp: String { "vercel.proxy.client_ip" }

    /// Hostname of the request
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyHost: String { "vercel.proxy.host" }

    /// Region where lambda function executed
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyLambdaRegion: String { "vercel.proxy.lambda_region" }

    /// HTTP method of the request
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyMethod: String { "vercel.proxy.method" }

    /// Request path with query parameters
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyPath: String { "vercel.proxy.path" }

    /// How the request was served based on its path and project configuration
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyPathType: String { "vercel.proxy.path_type" }

    /// Variant of the path type
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyPathTypeVariant: String { "vercel.proxy.path_type_variant" }

    /// Referer of the request
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyReferer: String { "vercel.proxy.referer" }

    /// Region where the request is processed
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyRegion: String { "vercel.proxy.region" }

    /// Size of the response in bytes
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyResponseByteSize: String { "vercel.proxy.response_byte_size" }

    /// Protocol of the request
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyScheme: String { "vercel.proxy.scheme" }

    /// HTTP status code of the proxy request
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyStatusCode: String { "vercel.proxy.status_code" }

    /// Unix timestamp when the proxy request was made
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyTimestamp: String { "vercel.proxy.timestamp" }

    /// User agent strings of the request
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyUserAgent: String { "vercel.proxy.user_agent" }

    /// Cache status sent to the browser
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyVercelCache: String { "vercel.proxy.vercel_cache" }

    /// Vercel-specific identifier
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyVercelId: String { "vercel.proxy.vercel_id" }

    /// Action taken by firewall rules
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyWafAction: String { "vercel.proxy.waf_action" }

    /// ID of the firewall rule that matched
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelProxyWafRuleId: String { "vercel.proxy.waf_rule_id" }

    /// Identifier of the Vercel request
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelRequestId: String { "vercel.request_id" }

    /// Origin of the Vercel log (build, edge, lambda, static, external, or firewall)
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelSource: String { "vercel.source" }

    /// HTTP status code of the request (-1 means no response returned and the lambda crashed)
    @_alwaysEmitIntoClient
    @inlinable
    public static var vercelStatusCode: String { "vercel.status_code" }

    /// The destination hostname or IP address for a TCP connection.
    @available(*, deprecated, message: "Use server.address instead - Old namespace-less attribute, to be replaced with server.address for span-first future")
    @_alwaysEmitIntoClient
    @inlinable
    public static var address: String { "address" }

    /// References or sources cited by the AI model in its response.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiCitations: String { "ai.citations" }

    /// The number of tokens used to respond to the message.
    @available(*, deprecated, message: "Use gen_ai.usage.output_tokens instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiCompletionTokensUsed: String { "ai.completion_tokens.used" }

    /// Documents or content chunks used as context for the AI model.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiDocuments: String { "ai.documents" }

    /// The reason why the model stopped generating.
    @available(*, deprecated, message: "Use gen_ai.response.finish_reasons instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiFinishReason: String { "ai.finish_reason" }

    /// Used to reduce repetitiveness of generated tokens. The higher the value, the stronger a penalty is applied to previously present tokens, proportional to how many times they have already appeared in the prompt or prior generation.
    @available(*, deprecated, message: "Use gen_ai.request.frequency_penalty instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiFrequencyPenalty: String { "ai.frequency_penalty" }

    /// For an AI model call, the function that was called. This is deprecated for OpenAI, and replaced by tool_calls
    @available(*, deprecated, message: "Use gen_ai.tool.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiFunctionCall: String { "ai.function_call" }

    /// Unique identifier for the completion.
    @available(*, deprecated, message: "Use gen_ai.response.id instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiGenerationId: String { "ai.generation_id" }

    /// The input messages sent to the model
    @available(*, deprecated, message: "Use gen_ai.input.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiInputMessages: String { "ai.input_messages" }

    /// Boolean indicating if the model needs to perform a search.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiIsSearchRequired: String { "ai.is_search_required" }

    /// Extra metadata passed to an AI pipeline step.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiMetadata: String { "ai.metadata" }

    /// The id of the model used by the Vercel AI SDK.
    @available(*, deprecated, message: "Use gen_ai.request.model instead - This attribute is being deprecated in favor of gen_ai.request.model.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiModelId: String { "ai.model.id" }

    /// The provider of the model.
    @available(*, deprecated, message: "Use gen_ai.provider.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiModelProvider: String { "ai.model.provider" }

    /// The vendor-specific ID of the model used.
    @available(*, deprecated, message: "Use gen_ai.request.model instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _aiModelId: String { "ai.model_id" }

    /// The name of the AI pipeline.
    @available(*, deprecated, message: "Use gen_ai.pipeline.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiPipelineName: String { "ai.pipeline.name" }

    /// For an AI model call, the preamble parameter. Preambles are a part of the prompt used to adjust the model's overall behavior and conversation style.
    @available(*, deprecated, message: "Use gen_ai.system_instructions instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiPreamble: String { "ai.preamble" }

    /// Used to reduce repetitiveness of generated tokens. Similar to frequency_penalty, except that this penalty is applied equally to all tokens that have already appeared, regardless of their exact frequencies.
    @available(*, deprecated, message: "Use gen_ai.request.presence_penalty instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiPresencePenalty: String { "ai.presence_penalty" }

    /// The prompt passed to the Vercel AI SDK, as a stringified object.
    @available(*, deprecated, message: "Use gen_ai.input.messages instead - This attribute is being deprecated in favor of gen_ai.input.messages.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiPrompt: String { "ai.prompt" }

    /// The input messages sent to the AI model.
    @available(*, deprecated, message: "Use gen_ai.input.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiPromptMessages: String { "ai.prompt.messages" }

    /// The tools made available to the model, as an array of stringified tool definitions.
    @available(*, deprecated, message: "Use gen_ai.tool.definitions instead - This attribute is being deprecated in favor of gen_ai.tool.definitions.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiPromptTools: String { "ai.prompt.tools" }

    /// The number of tokens used to process just the prompt.
    @available(*, deprecated, message: "Use gen_ai.usage.input_tokens instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiPromptTokensUsed: String { "ai.prompt_tokens.used" }

    /// When enabled, the user’s prompt will be sent to the model without any pre-processing.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiRawPrompting: String { "ai.raw_prompting" }

    /// The id of the response returned by the model.
    @available(*, deprecated, message: "Use gen_ai.response.id instead - This attribute is being deprecated in favor of gen_ai.response.id.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiResponseId: String { "ai.response.id" }

    /// The id of the model that produced the response.
    @available(*, deprecated, message: "Use gen_ai.response.model instead - This attribute is being deprecated in favor of gen_ai.response.model.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiResponseModel: String { "ai.response.model" }

    /// The type of the object returned by the model.
    @available(*, deprecated, message: "This attribute is deprecated. The Sentry conventions have no replacement for the raw Vercel AI response object type.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiResponseObject: String { "ai.response.object" }

    /// The text response from the AI model.
    @available(*, deprecated, message: "Use gen_ai.output.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiResponseText: String { "ai.response.text" }

    /// The ISO 8601 timestamp at which the response was produced.
    @available(*, deprecated, message: "This attribute is deprecated. The span start and end timestamps carry the same information.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiResponseTimestamp: String { "ai.response.timestamp" }

    /// The tool calls in the AI model response.
    @available(*, deprecated, message: "Use gen_ai.output.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiResponseToolCalls: String { "ai.response.toolCalls" }

    /// For an AI model call, the format of the response
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiResponseFormat: String { "ai.response_format" }

    /// The response messages sent back by the AI model.
    @available(*, deprecated, message: "Use gen_ai.output.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiResponses: String { "ai.responses" }

    /// The stringified JSON schema the model output must conform to.
    @available(*, deprecated, message: "This attribute is deprecated. The Sentry conventions have no replacement for the requested output schema.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiSchema: String { "ai.schema" }

    /// Queries used to search for relevant context or documents.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiSearchQueries: String { "ai.search_queries" }

    /// Results returned from search queries for context.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiSearchResults: String { "ai.search_results" }

    /// The seed, ideally models given the same seed and same other parameters will produce the exact same output.
    @available(*, deprecated, message: "Use gen_ai.request.seed instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiSeed: String { "ai.seed" }

    /// Whether the request was streamed back.
    @available(*, deprecated, message: "Use gen_ai.response.streaming instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiStreaming: String { "ai.streaming" }

    /// Tags that describe an AI pipeline step.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiTags: String { "ai.tags" }

    /// For an AI model call, the temperature parameter. Temperature essentially means how random the output will be.
    @available(*, deprecated, message: "Use gen_ai.request.temperature instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiTemperature: String { "ai.temperature" }

    /// Raw text inputs provided to the model.
    @available(*, deprecated, message: "Use gen_ai.input.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiTexts: String { "ai.texts" }

    /// The arguments of the tool call.
    @available(*, deprecated, message: "Use gen_ai.tool.call.arguments instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiToolCallArgs: String { "ai.toolCall.args" }

    /// The result of the tool call.
    @available(*, deprecated, message: "Use gen_ai.tool.call.result instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiToolCallResult: String { "ai.toolCall.result" }

    /// For an AI model call, the tool calls that were made.
    @available(*, deprecated, message: "Use gen_ai.output.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiToolCalls: String { "ai.tool_calls" }

    /// For an AI model call, the functions that are available
    @available(*, deprecated, message: "Use gen_ai.tool.definitions instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiTools: String { "ai.tools" }

    /// Limits the model to only consider the K most likely next tokens, where K is an integer (e.g., top_k=20 means only the 20 highest probability tokens are considered).
    @available(*, deprecated, message: "Use gen_ai.request.top_k instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiTopK: String { "ai.top_k" }

    /// Limits the model to only consider tokens whose cumulative probability mass adds up to p, where p is a float between 0 and 1 (e.g., top_p=0.7 means only tokens that sum up to 70% of the probability mass are considered).
    @available(*, deprecated, message: "Use gen_ai.request.top_p instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiTopP: String { "ai.top_p" }

    /// The total cost for the tokens used.
    @available(*, deprecated, message: "Use gen_ai.cost.total_tokens instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiTotalCost: String { "ai.total_cost" }

    /// The total number of tokens used to process the prompt.
    @available(*, deprecated, message: "Use gen_ai.usage.total_tokens instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiTotalTokensUsed: String { "ai.total_tokens.used" }

    /// The total number of tokens used for the request and the response.
    @available(*, deprecated, message: "Use gen_ai.usage.total_tokens instead - This attribute is being deprecated in favor of gen_ai.usage.total_tokens.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiUsageTokens: String { "ai.usage.tokens" }

    /// The stringified values produced by a Vercel AI SDK object or array generation.
    @available(*, deprecated, message: "This attribute is deprecated. Use gen_ai.output.messages for model output instead.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiValues: String { "ai.values" }

    /// Warning messages generated during model execution.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var aiWarnings: String { "ai.warnings" }

    /// The content of the tool result.
    @available(*, deprecated, message: "Use gen_ai.tool.call.result instead - Use gen_ai.tool.call.result for tool results.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var anthropicToolResultContent: String { "anthropic.tool_result.content" }

    /// Internal build identifier, as it appears on the platform.
    @available(*, deprecated, message: "Use app.build instead - Deprecated in favor of app.build")
    @_alwaysEmitIntoClient
    @inlinable
    public static var appAppBuild: String { "app.app_build" }

    /// Version-independent application identifier, often a dotted bundle ID.
    @available(*, deprecated, message: "Use app.identifier instead - Deprecated in favor of app.identifier")
    @_alwaysEmitIntoClient
    @inlinable
    public static var appAppIdentifier: String { "app.app_identifier" }

    /// Human readable application name, as it appears on the platform.
    @available(*, deprecated, message: "Use app.name instead - Deprecated in favor of app.name")
    @_alwaysEmitIntoClient
    @inlinable
    public static var appAppName: String { "app.app_name" }

    /// Formatted UTC timestamp when the user started the application.
    @available(*, deprecated, message: "Use app.start_time instead - Deprecated in favor of app.start_time")
    @_alwaysEmitIntoClient
    @inlinable
    public static var appAppStartTime: String { "app.app_start_time" }

    /// Human readable application version, as it appears on the platform.
    @available(*, deprecated, message: "Use app.version instead - Deprecated in favor of app.version")
    @_alwaysEmitIntoClient
    @inlinable
    public static var appAppVersion: String { "app.app_version" }

    /// The duration of a cold app start in milliseconds
    @available(*, deprecated, message: "Use app.vitals.start.cold.value instead - Replaced by app.vitals.start.cold.value to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var appStartCold: String { "app_start_cold" }

    /// Mobile app start variant. Either cold or warm.
    @available(*, deprecated, message: "Use app.vitals.start.type instead - Replaced by app.vitals.start.type to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var appStartType: String { "app_start_type" }

    /// The duration of a warm app start in milliseconds
    @available(*, deprecated, message: "Use app.vitals.start.warm.value instead - Replaced by app.vitals.start.warm.value to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var appStartWarm: String { "app_start_warm" }

    /// The name of the AWS Kinesis stream the request refers to.
    @available(*, deprecated, message: "Use aws.kinesis.stream_name instead - This attribute is being deprecated in favor of aws.kinesis.stream_name, which is the OTel-aligned replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _awsKinesisStreamName: String { "aws.kinesis.stream.name" }

    /// The AWS request ID as received by the Lambda function runtime
    @available(*, deprecated, message: "Use faas.invocation_id instead - This attribute is being deprecated in favor of faas.invocation_id")
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaAwsRequestId: String { "aws.lambda.aws_request_id" }

    /// The name of the Lambda function
    @available(*, deprecated, message: "Use faas.name instead - Use the OTel-aligned faas.name attribute instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaFunctionName: String { "aws.lambda.function_name" }

    /// The version of the Lambda function
    @available(*, deprecated, message: "Use faas.version instead - Use the OTel-aligned faas.version attribute instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaFunctionVersion: String { "aws.lambda.function_version" }

    /// The full ARN of the Lambda function that was invoked
    @available(*, deprecated, message: "Use aws.lambda.invoked_arn instead - This attribute is being deprecated in favor of aws.lambda.invoked_arn")
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsLambdaInvokedFunctionArn: String { "aws.lambda.invoked_function_arn" }

    /// The name of the API operation invoked on an AWS service.
    @available(*, deprecated, message: "Use rpc.method instead - This attribute is being deprecated in favor of rpc.method, which is the framework-agnostic replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsOperationName: String { "aws.operation_name" }

    /// The AWS extended request ID as returned in the response headers.
    @available(*, deprecated, message: "Use aws.extended_request_id instead - This attribute is being deprecated in favor of aws.extended_request_id, which is the OTel-aligned replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsRequestExtendedId: String { "aws.request.extended_id" }

    /// The AWS request ID as returned in the response headers.
    @available(*, deprecated, message: "Use aws.request_id instead - This attribute is being deprecated in favor of aws.request_id, which is the OTel-aligned replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _awsRequestId: String { "aws.request.id" }

    /// The URL of the AWS API request.
    @available(*, deprecated, message: "Use url.full instead - This attribute is being deprecated in favor of url.full, which is the OTel-aligned replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsRequestUrl: String { "aws.request.url" }

    /// The geographical region the AWS resource is running
    @available(*, deprecated, message: "Use cloud.region instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var awsRegion: String { "aws_region" }

    /// The event that caused the SDK to report CLS (pagehide or navigation)
    @available(*, deprecated, message: "The JavaScript SDK stopped setting this in v11. With per-navigation web vitals, web-vitals decides when the CLS value is final, so there is no report event to record. No replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalClsReportEvent: String { "browser.web_vital.cls.report_event" }

    /// The event that caused the SDK to report LCP (pagehide or navigation)
    @available(*, deprecated, message: "The JavaScript SDK stopped setting this in v11. With per-navigation web vitals, web-vitals decides when the LCP value is final, so there is no report event to record. No replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserWebVitalLcpReportEvent: String { "browser.web_vital.lcp.report_event" }

    /// The type of query executed in a Cloudflare D1 operation
    @available(*, deprecated, message: "Use db.operation.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var cloudflareD1QueryType: String { "cloudflare.d1.query_type" }

    /// The value of the recorded Cumulative Layout Shift (CLS) web vital
    @available(*, deprecated, message: "Use browser.web_vital.cls.value instead - The CLS web vital is now recorded as a browser.web_vital.cls.value attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var cls: String { "cls" }

    /// The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N
    @available(*, deprecated, message: "Use browser.web_vital.cls.source.<key> instead - The CLS source is now recorded as a browser.web_vital.cls.source.<key> attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var clsSourceKey: String { "cls.source.<key>" }

    /// The HTML elements or components responsible for the layout shift. <key> is a numeric index from 1 to N
    @available(*, deprecated, message: "Use browser.web_vital.cls.source.<key> instead - The CLS source is now recorded as a browser.web_vital.cls.source.<key> attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var clsSourceKeyBase: String { "cls.source" }

    /// Status code of the RPC returned by the RPC server or generated by the client.
    @available(*, deprecated, message: "Use rpc.response.status_code instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var code: String { "code" }

    /// The source code file name that identifies the code unit as uniquely as possible (preferably an absolute file path).
    @available(*, deprecated, message: "Use code.file.path instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var codeFilepath: String { "code.filepath" }

    /// The line number in code.filepath best representing the operation. It SHOULD point within the code unit named in code.function
    @available(*, deprecated, message: "Use code.line.number instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var codeLineno: String { "code.lineno" }

    /// Specifies the estimated effective round-trip time of the current connection, in milliseconds.
    @available(*, deprecated, message: "Use network.connection.rtt instead - Old attribute name (no official namespace), to be replaced with network.connection.rtt for span-first future")
    @_alwaysEmitIntoClient
    @inlinable
    public static var connectionRtt: String { "connection.rtt" }

    /// Specifies the type of the current connection (e.g. wifi, ethernet, cellular , etc).
    @available(*, deprecated, message: "Use network.connection.type instead - Old namespace-less attribute, to be replaced with network.connection.type for span-first future")
    @_alwaysEmitIntoClient
    @inlinable
    public static var connectionType: String { "connectionType" }

    /// The connection string used to connect to the database.
    @available(*, deprecated, message: "This attribute is deprecated. The connection is described by server.address and server.port instead, so the value cannot be copied to a single replacement attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbConnectionString: String { "db.connection_string" }

    /// The MongoDB collection being accessed.
    @available(*, deprecated, message: "Use db.collection.name instead - This attribute is being deprecated in favor of db.collection.name, which is the OTel-aligned replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbMongodbCollection: String { "db.mongodb.collection" }

    /// The name of the database being accessed.
    @available(*, deprecated, message: "Use db.namespace instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbName: String { "db.name" }

    /// The name of the operation being executed.
    @available(*, deprecated, message: "Use db.operation.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbOperation: String { "db.operation" }

    /// The query bindings for a database request.
    @available(*, deprecated, message: "Use db.query.parameter.<key> instead - Instead of adding every binding in the db.params attribute, add them as individual entries with db.query.parameter.<key>.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbParams: String { "db.params" }

    /// The array of query bindings.
    @available(*, deprecated, message: "Use db.query.parameter.<key> instead - Instead of adding every binding in the db.sql.bindings attribute, add them as individual entries with db.query.parameter.<key>.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbSqlBindings: String { "db.sql.bindings" }

    /// The database statement being executed.
    @available(*, deprecated, message: "Use db.query.text instead - While this attribute never specifically required parameterization, the replacement, db.query.text, does.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbStatement: String { "db.statement" }

    /// An identifier for the database management system (DBMS) product being used. See [OpenTelemetry docs](https://github.com/open-telemetry/semantic-conventions/blob/main/docs/database/database-spans.md#notes-and-well-known-identifiers-for-dbsystem) for a list of well-known identifiers.
    @available(*, deprecated, message: "Use db.system.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dbSystem: String { "db.system" }

    /// The internet connection type currently being used by the device.
    @available(*, deprecated, message: "Use network.connection.type instead - This attribute is being deprecated in favor of network.connection.type")
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceConnectionType: String { "device.connection_type" }

    /// The estimated total memory capacity of the device, only a rough estimation in gigabytes.
    @available(*, deprecated, message: "Use device.memory.estimated_capacity instead - Old namespace-less attribute, to be replaced with device.memory.estimated_capacity for span-first future")
    @_alwaysEmitIntoClient
    @inlinable
    public static var deviceMemory: String { "deviceMemory" }

    /// The sentry dist.
    @available(*, deprecated, message: "Use sentry.dist instead - This attribute is being deprecated in favor of sentry.dist.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var dist: String { "dist" }

    /// The fully qualified name of a function used in a Django context.
    @available(*, deprecated, message: "Use code.function.name instead - This attribute is being deprecated in favor of code.function.name, which is the framework-agnostic replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var djangoFunctionName: String { "django.function_name" }

    /// The name of the Django middleware.
    @available(*, deprecated, message: "Use middleware.name instead - This attribute is being deprecated in favor of middleware.name, which is the framework-agnostic replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var djangoMiddlewareName: String { "django.middleware_name" }

    /// Specifies the estimated effective type of the current connection (e.g. slow-2g, 2g, 3g, 4g).
    @available(*, deprecated, message: "Use network.connection.effective_type instead - Old namespace-less attribute, to be replaced with network.connection.effective_type for span-first future")
    @_alwaysEmitIntoClient
    @inlinable
    public static var effectiveConnectionType: String { "effectiveConnectionType" }

    /// The sentry environment.
    @available(*, deprecated, message: "Use sentry.environment instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var environment: String { "environment" }

    /// The execution ID of the current function execution.
    @available(*, deprecated, message: "Use faas.invocation_id instead - This attribute is being deprecated in favor of faas.invocation_id, which is the OTel-aligned replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasExecution: String { "faas.execution" }

    /// The unique ID of the single function that this runtime instance executes.
    @available(*, deprecated, message: "Use cloud.resource_id instead - This attribute is being deprecated in favor of cloud.resource_id, which is the OTel-aligned replacement (renamed in OTel semantic conventions v1.19.0).")
    @_alwaysEmitIntoClient
    @inlinable
    public static var faasId: String { "faas.id" }

    /// The time it takes for the browser to render the first piece of meaningful content on the screen
    @available(*, deprecated, message: "Use browser.web_vital.fcp.value instead - This attribute is being deprecated in favor of browser.web_vital.fcp.value")
    @_alwaysEmitIntoClient
    @inlinable
    public static var fcp: String { "fcp" }

    /// The time it takes for the browser to render the first pixel on the screen
    @available(*, deprecated, message: "Use browser.web_vital.fp.value instead - This attribute is being deprecated in favor of browser.web_vital.fp.value")
    @_alwaysEmitIntoClient
    @inlinable
    public static var fp: String { "fp" }

    /// The sum of all delayed frame durations in seconds during the lifetime of the span. For more information see [frames delay](https://develop.sentry.dev/sdk/performance/frames-delay/).
    @available(*, deprecated, message: "Use app.vitals.frames.delay.value instead - Replaced by app.vitals.frames.delay.value to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var framesDelay: String { "frames.delay" }

    /// The number of frozen frames rendered during the lifetime of the span.
    @available(*, deprecated, message: "Use app.vitals.frames.frozen.count instead - Replaced by app.vitals.frames.frozen.count to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var framesFrozen: String { "frames.frozen" }

    /// The number of slow frames rendered during the lifetime of the span.
    @available(*, deprecated, message: "Use app.vitals.frames.slow.count instead - Replaced by app.vitals.frames.slow.count to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var framesSlow: String { "frames.slow" }

    /// The number of total frames rendered during the lifetime of the span.
    @available(*, deprecated, message: "Use app.vitals.frames.total.count instead - Replaced by app.vitals.frames.total.count to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var framesTotal: String { "frames.total" }

    /// The rate of frozen frames, or `app.vitals.frames.frozen.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.
    @available(*, deprecated, message: "Use app.vitals.frames.frozen.rate instead - Replaced by app.vitals.frames.frozen.rate to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var framesFrozenRate: String { "frames_frozen_rate" }

    /// The rate of slow frames, or `app.vitals.frames.slow.count` divided by `app.vitals.frames.total.count`. This is computed by Relay.
    @available(*, deprecated, message: "Use app.vitals.frames.slow.rate instead - Replaced by app.vitals.frames.slow.rate to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var framesSlowRate: String { "frames_slow_rate" }

    /// The error message of a file system error.
    @available(*, deprecated, message: "Use error.type instead - This attribute is not part of the OpenTelemetry specification and error.type fits much better. The value changes from the full error message to the syscall error code, so the old value cannot be copied over.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var fsError: String { "fs_error" }

    /// The geographical region the GCP resource is running
    @available(*, deprecated, message: "Use cloud.region instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var gcpRegion: String { "gcp_region" }

    /// The input messages sent to the model
    @available(*, deprecated, message: "Use gen_ai.input.messages instead - Deprecated from OTEL, use gen_ai.input.messages with the new format instead.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiPrompt: String { "gen_ai.prompt" }

    /// The available tools for the model. It has to be a stringified version of an array of objects.
    @available(*, deprecated, message: "Use gen_ai.tool.definitions instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestAvailableTools: String { "gen_ai.request.available_tools" }

    /// The messages passed to the model. It has to be a stringified version of an array of objects. The `role` attribute of each object must be `"user"`, `"assistant"`, `"tool"`, or `"system"`. For messages of the role `"tool"`, the `content` can be a string or an arbitrary object with information about the tool call. For other messages the `content` can be either a string or a list of objects in the format `{type: "text", text:"..."}`.
    @available(*, deprecated, message: "Use gen_ai.input.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestMessages: String { "gen_ai.request.messages" }

    /// The stringified JSON schema the model output must conform to.
    @available(*, deprecated, message: "This attribute is deprecated. The Sentry conventions have no replacement for the requested output schema.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiRequestSchema: String { "gen_ai.request.schema" }

    /// The reason why the model stopped generating (singular form).
    @available(*, deprecated, message: "Use gen_ai.response.finish_reasons instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseFinishReason: String { "gen_ai.response.finish_reason" }

    /// The type of the object returned by the model.
    @available(*, deprecated, message: "This attribute is deprecated. The Sentry conventions have no replacement for the raw response object type.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseObject: String { "gen_ai.response.object" }

    /// The model's response text messages. It has to be a stringified version of an array of response text messages.
    @available(*, deprecated, message: "Use gen_ai.output.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseText: String { "gen_ai.response.text" }

    /// Time from the start of a logical inference operation to the first chunk in its streaming response, in seconds.
    @available(*, deprecated, message: "Use gen_ai.response.time_to_first_chunk instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseTimeToFirstToken: String { "gen_ai.response.time_to_first_token" }

    /// The tool calls in the model's response. It has to be a stringified version of an array of objects.
    @available(*, deprecated, message: "Use gen_ai.output.messages instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiResponseToolCalls: String { "gen_ai.response.tool_calls" }

    /// The provider of the model.
    @available(*, deprecated, message: "Use gen_ai.provider.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiSystem: String { "gen_ai.system" }

    /// The system instructions passed to the model.
    @available(*, deprecated, message: "Use gen_ai.system_instructions instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiSystemMessage: String { "gen_ai.system.message" }

    /// The input of the tool being used. It has to be a stringified version of the input to the tool.
    @available(*, deprecated, message: "Use gen_ai.tool.call.arguments instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolInput: String { "gen_ai.tool.input" }

    /// The response from a tool or function call passed to the model.
    @available(*, deprecated, message: "Use gen_ai.tool.call.result instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolMessage: String { "gen_ai.tool.message" }

    /// The output of the tool being used. It has to be a stringified version of the output of the tool.
    @available(*, deprecated, message: "Use gen_ai.tool.call.result instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolOutput: String { "gen_ai.tool.output" }

    /// The type of tool being used.
    @available(*, deprecated, message: "The gen_ai.tool.type attribute is deprecated and should no longer be set.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiToolType: String { "gen_ai.tool.type" }

    /// The number of tokens written to the cache when processing the AI input (prompt).
    @available(*, deprecated, message: "Use gen_ai.usage.cache_creation.input_tokens instead - This attribute is being deprecated in favor of gen_ai.usage.cache_creation.input_tokens.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _genAiUsageCacheCreationInputTokens: String { "gen_ai.usage.cache_creation_input_tokens" }

    /// The number of cached tokens used to process the AI input (prompt).
    @available(*, deprecated, message: "Use gen_ai.usage.cache_read.input_tokens instead - This attribute is being deprecated in favor of gen_ai.usage.cache_read.input_tokens.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _genAiUsageCacheReadInputTokens: String { "gen_ai.usage.cache_read_input_tokens" }

    /// The number of tokens used in the GenAI response (completion).
    @available(*, deprecated, message: "Use gen_ai.usage.output_tokens instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageCompletionTokens: String { "gen_ai.usage.completion_tokens" }

    /// The number of tokens written to the cache when processing the AI input (prompt).
    @available(*, deprecated, message: "Use gen_ai.usage.cache_creation.input_tokens instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageInputTokensCacheWrite: String { "gen_ai.usage.input_tokens.cache_write" }

    /// The number of cached tokens used to process the AI input (prompt).
    @available(*, deprecated, message: "Use gen_ai.usage.cache_read.input_tokens instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageInputTokensCached: String { "gen_ai.usage.input_tokens.cached" }

    /// The number of tokens used for reasoning to create the AI output.
    @available(*, deprecated, message: "Use gen_ai.usage.reasoning.output_tokens instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsageOutputTokensReasoning: String { "gen_ai.usage.output_tokens.reasoning" }

    /// The number of tokens used in the GenAI input (prompt).
    @available(*, deprecated, message: "Use gen_ai.usage.input_tokens instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var genAiUsagePromptTokens: String { "gen_ai.usage.prompt_tokens" }

    /// The GraphQL document being executed.
    @available(*, deprecated, message: "Use graphql.document instead - This attribute is being deprecated in favor of graphql.document, which is the OpenTelemetry name for the same value.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var graphqlSource: String { "graphql.source" }

    /// The number of logical CPU cores available.
    @available(*, deprecated, message: "Use device.processor_count instead - Old namespace-less attribute, to be replaced with device.processor_count for span-first future")
    @_alwaysEmitIntoClient
    @inlinable
    public static var hardwareConcurrency: String { "hardwareConcurrency" }

    /// Client address - domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
    @available(*, deprecated, message: "Use client.address instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpClientIp: String { "http.client_ip" }

    /// The decoded body size of the response (in bytes).
    @available(*, deprecated, message: "Use http.response.body.decoded_size instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpDecodedResponseContentLength: String { "http.decoded_response_content_length" }

    /// The actual version of the protocol used for network communication.
    @available(*, deprecated, message: "Use network.protocol.version instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpFlavor: String { "http.flavor" }

    /// The domain name.
    @available(*, deprecated, message: "Use server.address instead - Deprecated, use one of `server.address` or `client.address`, depending on the usage")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpHost: String { "http.host" }

    /// The HTTP method used.
    @available(*, deprecated, message: "Use http.request.method instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpMethod: String { "http.method" }

    /// The encoded body size of the request (in bytes).
    @available(*, deprecated, message: "Use http.request.body.size instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestContentLength: String { "http.request_content_length" }

    /// The decoded body size of the request (in bytes).
    @available(*, deprecated, message: "Use http.request.body.decoded_size instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpRequestContentLengthUncompressed: String { "http.request_content_length_uncompressed" }

    /// The HTTP method used.
    @available(*, deprecated, message: "Use http.request.method instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _httpRequestMethod: String { "http.request_method" }

    /// The encoded body size of the response (in bytes).
    @available(*, deprecated, message: "Use http.response.body.size instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseContentLength: String { "http.response_content_length" }

    /// The decoded body size of the response (in bytes).
    @available(*, deprecated, message: "Use http.response.body.decoded_size instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseContentLengthUncompressed: String { "http.response_content_length_uncompressed" }

    /// The delivery type of the resource, as reported by the browser's PerformanceResourceTiming.deliveryType property.
    @available(*, deprecated, message: "Use http.response.delivery_type instead - Use http.response.delivery_type, which follows the http.response.* namespace.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _httpResponseDeliveryType: String { "http.response_delivery_type" }

    /// The transfer size of the response (in bytes).
    @available(*, deprecated, message: "Use http.response.size instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpResponseTransferSize: String { "http.response_transfer_size" }

    /// The URI scheme component identifying the used protocol.
    @available(*, deprecated, message: "Use url.scheme instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpScheme: String { "http.scheme" }

    /// The server domain name
    @available(*, deprecated, message: "Use server.address instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpServerName: String { "http.server_name" }

    /// The status code of the HTTP response.
    @available(*, deprecated, message: "Use http.response.status_code instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpStatusCode: String { "http.status_code" }

    /// The reason phrase of the HTTP response
    @available(*, deprecated, message: "Use http.response.status_text instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpStatusText: String { "http.status_text" }

    /// The pathname and query string of the URL.
    @available(*, deprecated, message: "This attribute is being deprecated in favor of url.path, url.query and url.fragment. The value holds all three parts at once, so it has no single replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpTarget: String { "http.target" }

    /// The URL of the resource that was fetched.
    @available(*, deprecated, message: "Use url.full instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpUrl: String { "http.url" }

    /// Value of the HTTP User-Agent header sent by the client.
    @available(*, deprecated, message: "Use user_agent.original instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var httpUserAgent: String { "http.user_agent" }

    /// The value of the recorded Interaction to Next Paint (INP) web vital
    @available(*, deprecated, message: "Use browser.web_vital.inp.value instead - The INP web vital is now recorded as a browser.web_vital.inp.value attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var inp: String { "inp" }

    /// The name of the Koa middleware or matched route that handled the request.
    @available(*, deprecated, message: "No single replacement. SDKs should use http.route for router layers and code.function.name for middleware layers instead.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var koaName: String { "koa.name" }

    /// The name of the LangChain chain being executed.
    @available(*, deprecated, message: "Use gen_ai.pipeline.name instead - This attribute is being deprecated in favor of gen_ai.pipeline.name, which is the SDK-agnostic replacement for the name of the AI pipeline or chain being executed.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var langchainChainName: String { "langchain.chain.name" }

    /// The value of the recorded Largest Contentful Paint (LCP) web vital
    @available(*, deprecated, message: "Use browser.web_vital.lcp.value instead - The LCP web vital is now recorded as a browser.web_vital.lcp.value attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var lcp: String { "lcp" }

    /// The dom element responsible for the largest contentful paint.
    @available(*, deprecated, message: "Use browser.web_vital.lcp.element instead - The LCP element is now recorded as a browser.web_vital.lcp.element attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var lcpElement: String { "lcp.element" }

    /// The id of the dom element responsible for the largest contentful paint.
    @available(*, deprecated, message: "Use browser.web_vital.lcp.id instead - The LCP id is now recorded as a browser.web_vital.lcp.id attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var lcpId: String { "lcp.id" }

    /// The time it took for the LCP element to be loaded
    @available(*, deprecated, message: "Use browser.web_vital.lcp.load_time instead - The LCP load time is now recorded as a browser.web_vital.lcp.load_time attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var lcpLoadTime: String { "lcp.loadTime" }

    /// The time it took for the LCP element to be rendered
    @available(*, deprecated, message: "Use browser.web_vital.lcp.render_time instead - The LCP render time is now recorded as a browser.web_vital.lcp.render_time attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var lcpRenderTime: String { "lcp.renderTime" }

    /// The size of the largest contentful paint element.
    @available(*, deprecated, message: "Use browser.web_vital.lcp.size instead - The LCP size is now recorded as a browser.web_vital.lcp.size attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var lcpSize: String { "lcp.size" }

    /// The url of the dom element responsible for the largest contentful paint.
    @available(*, deprecated, message: "Use browser.web_vital.lcp.url instead - The LCP url is now recorded as a browser.web_vital.lcp.url attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var lcpUrl: String { "lcp.url" }

    /// The name of the Litestar middleware.
    @available(*, deprecated, message: "Use middleware.name instead - This attribute is being deprecated in favor of middleware.name, which is the framework-agnostic replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var litestarMiddlewareName: String { "litestar.middleware_name" }

    /// Name of the MCP prompt template being used.
    @available(*, deprecated, message: "Use gen_ai.prompt.name instead - OTel uses gen_ai.prompt.name for MCP prompt names")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpPromptName: String { "mcp.prompt.name" }

    /// JSON-RPC request identifier for the MCP request, used to correlate the request with its response.
    @available(*, deprecated, message: "Use jsonrpc.request.id instead - OTel models MCP as JSON-RPC, uses jsonrpc.request.id")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpRequestId: String { "mcp.request.id" }

    /// Name of the MCP tool being called.
    @available(*, deprecated, message: "Use gen_ai.tool.name instead - OTel uses gen_ai.tool.name for MCP tool names")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolName: String { "mcp.tool.name" }

    /// Legacy text content of an indexed content item in a multi-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultKeyContent: String { "mcp.tool.result.<key>.content" }

    /// Legacy content type of an indexed content item in a multi-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultKeyContentType: String { "mcp.tool.result.<key>.content_type" }

    /// Legacy length of the data string in UTF-16 code units of an indexed content item in a multi-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultKeyDataSize: String { "mcp.tool.result.<key>.data_size" }

    /// Legacy MIME type of an indexed content item in a multi-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultKeyMimeType: String { "mcp.tool.result.<key>.mime_type" }

    /// Legacy resource link name of an indexed content item in a multi-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultKeyName: String { "mcp.tool.result.<key>.name" }

    /// Legacy embedded resource MIME type of an indexed content item in a multi-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultKeyResourceMimeType: String { "mcp.tool.result.<key>.resource_mime_type" }

    /// Legacy embedded resource URI of an indexed content item in a multi-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultKeyResourceUri: String { "mcp.tool.result.<key>.resource_uri" }

    /// Legacy resource link URI of an indexed content item in a multi-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultKeyUri: String { "mcp.tool.result.<key>.uri" }

    /// The content of the tool result.
    @available(*, deprecated, message: "Use gen_ai.tool.call.result instead - OTel uses gen_ai.tool.call.result for MCP tool results")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultContent: String { "mcp.tool.result.content" }

    /// Number of content items in the tool result.
    @available(*, deprecated, message: "A count can be calculated from the value of the gen_ai.tool.call.result attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultContentCount: String { "mcp.tool.result.content_count" }

    /// Legacy content type of the content item in a single-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultContentType: String { "mcp.tool.result.content_type" }

    /// Legacy length of the data string in UTF-16 code units of the content item in a single-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultDataSize: String { "mcp.tool.result.data_size" }

    /// Whether a tool execution resulted in an error.
    @available(*, deprecated, message: "Use error.type instead - OTel uses error.type set to 'tool_error' when isError is true. Cannot be automatically backfilled due to type mismatch (boolean vs string).")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultIsError: String { "mcp.tool.result.is_error" }

    /// Legacy MIME type of the content item in a single-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultMimeType: String { "mcp.tool.result.mime_type" }

    /// Legacy resource link name of the content item in a single-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultName: String { "mcp.tool.result.name" }

    /// Legacy embedded resource MIME type of the content item in a single-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultResourceMimeType: String { "mcp.tool.result.resource_mime_type" }

    /// Legacy embedded resource URI of the content item in a single-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultResourceUri: String { "mcp.tool.result.resource_uri" }

    /// Legacy resource link URI of the content item in a single-item MCP tool result.
    @available(*, deprecated, message: "Capture the complete tool result in gen_ai.tool.call.result instead. This attribute describes only part of the result and cannot be directly backfilled.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var mcpToolResultUri: String { "mcp.tool.result.uri" }

    /// The conversation ID identifying the conversation to which the message belongs, represented as a string. Sometimes called "Correlation ID".
    @available(*, deprecated, message: "Use messaging.message.conversation_id instead - This attribute is being deprecated in favor of messaging.message.conversation_id.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingConversationId: String { "messaging.conversation_id" }

    /// The message destination name.
    @available(*, deprecated, message: "Use messaging.destination.name instead - This attribute is being deprecated in favor of messaging.destination.name, which is the OTel-aligned replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingDestination: String { "messaging.destination" }

    /// The kind of message destination.
    @available(*, deprecated, message: "Deprecated from OTEL, which now models the destination kind via messaging.operation.type and messaging.destination.name.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingDestinationKind: String { "messaging.destination_kind" }

    /// A value used by the messaging system as an identifier for the message, represented as a string.
    @available(*, deprecated, message: "Use messaging.message.id instead - This attribute is being deprecated in favor of messaging.message.id.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _messagingMessageId: String { "messaging.message_id" }

    /// The name of the messaging operation being performed.
    @available(*, deprecated, message: "Use messaging.operation.name instead - This attribute is being deprecated in favor of messaging.operation.name.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingOperation: String { "messaging.operation" }

    /// OSI application layer or non-OSI equivalent.
    @available(*, deprecated, message: "Use network.protocol.name instead - This attribute is being deprecated in favor of network.protocol.name.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingProtocol: String { "messaging.protocol" }

    /// The actual version of the protocol used for network communication.
    @available(*, deprecated, message: "Use network.protocol.version instead - This attribute is being deprecated in favor of network.protocol.version.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingProtocolVersion: String { "messaging.protocol_version" }

    /// RabbitMQ message routing key.
    @available(*, deprecated, message: "Use messaging.rabbitmq.destination.routing_key instead - This attribute is being deprecated in favor of messaging.rabbitmq.destination.routing_key.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingRabbitmqRoutingKey: String { "messaging.rabbitmq.routing_key" }

    /// The connection string of the messaging broker.
    @available(*, deprecated, message: "Use url.full instead - This attribute is being deprecated in favor of url.full.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingUrl: String { "messaging.url" }

    /// The HTTP method used.
    @available(*, deprecated, message: "Use http.request.method instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var method: String { "method" }

    /// The origin of the navigation (usually client side router navigations). Should preferably be a parameterized template (like url.template) or a URL path otherwise.
    @available(*, deprecated, message: "Use router.navigation.origin instead - Moved to the router.* namespace to separate client-side router navigations from browser navigations.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var navigationOrigin: String { "navigation.origin" }

    /// The identifier of the matched client-side route, as assigned by the routing framework (e.g., vue-router name, react-router id).
    @available(*, deprecated, message: "Use router.navigation.route.id instead - Moved to the router.* namespace to separate client-side router navigations from browser navigations.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var navigationRouteId: String { "navigation.route.id" }

    /// The type of navigation done by a client-side router.
    @available(*, deprecated, message: "Use router.navigation.type instead - Moved to the router.* namespace to separate client-side router navigations from browser navigations.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var navigationType: String { "navigation.type" }

    /// The sampling function used to determine if the request should be sampled.
    @available(*, deprecated, message: "Use nel.sampling_fraction instead - The correct name of this attribute is nel.sampling_fraction")
    @_alwaysEmitIntoClient
    @inlinable
    public static var nelSamplingFunction: String { "nel.sampling_function" }

    /// Local address of the network connection - IP address or Unix domain socket name.
    @available(*, deprecated, message: "Use network.local.address instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netHostIp: String { "net.host.ip" }

    /// Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
    @available(*, deprecated, message: "Use server.address instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netHostName: String { "net.host.name" }

    /// Server port number.
    @available(*, deprecated, message: "Use server.port instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netHostPort: String { "net.host.port" }

    /// Peer address of the network connection - IP address or Unix domain socket name.
    @available(*, deprecated, message: "Use network.peer.address instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netPeerIp: String { "net.peer.ip" }

    /// Server domain name if available without reverse DNS lookup; otherwise, IP address or Unix domain socket name.
    @available(*, deprecated, message: "Use server.address instead - Deprecated, use server.address on client spans and client.address on server spans.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netPeerName: String { "net.peer.name" }

    /// Peer port number.
    @available(*, deprecated, message: "Use server.port instead - Deprecated, use server.port on client spans and client.port on server spans.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netPeerPort: String { "net.peer.port" }

    /// OSI application layer or non-OSI equivalent.
    @available(*, deprecated, message: "Use network.protocol.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netProtocolName: String { "net.protocol.name" }

    /// The actual version of the protocol used for network communication.
    @available(*, deprecated, message: "Use network.protocol.version instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netProtocolVersion: String { "net.protocol.version" }

    /// OSI transport and network layer
    @available(*, deprecated, message: "Use network.transport instead - Deprecated, use network.transport and network.type.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netSockFamily: String { "net.sock.family" }

    /// Local address of the network connection mapping to Unix domain socket name.
    @available(*, deprecated, message: "Use network.local.address instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netSockHostAddr: String { "net.sock.host.addr" }

    /// Local port number of the network connection.
    @available(*, deprecated, message: "Use network.local.port instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netSockHostPort: String { "net.sock.host.port" }

    /// Peer address of the network connection - IP address
    @available(*, deprecated, message: "Use network.peer.address instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netSockPeerAddr: String { "net.sock.peer.addr" }

    /// Peer address of the network connection - Unix domain socket name
    @available(*, deprecated, message: "Deprecated from OTEL, no replacement at this time")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netSockPeerName: String { "net.sock.peer.name" }

    /// Peer port number of the network connection.
    @available(*, deprecated, message: "Use network.peer.port instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netSockPeerPort: String { "net.sock.peer.port" }

    /// OSI transport layer or inter-process communication method.
    @available(*, deprecated, message: "Use network.transport instead - This attribute is being deprecated in favor of network.transport. The values change from ip_tcp and ip_udp to tcp and udp, so the old value cannot be copied over.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var netTransport: String { "net.transport" }

    /// The build ID of the operating system.
    @available(*, deprecated, message: "Use os.build_id instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var osBuild: String { "os.build" }

    /// The span kind (https://opentelemetry.io/docs/concepts/signals/traces/#span-kind). Deprecated, use `sentry.kind` instead.
    @available(*, deprecated, message: "Use sentry.kind instead - Deprecated in favor of sentry.kind")
    @_alwaysEmitIntoClient
    @inlinable
    public static var otelKind: String { "otel.kind" }

    /// The time between initiating a navigation to a page and the browser activating the page
    @available(*, deprecated, message: "Use browser.performance.navigation.activation_start instead - The activationStart is now recorded as the browser.performance.navigation.activation_start attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var performanceActivationStart: String { "performance.activationStart" }

    /// The browser's performance.timeOrigin timestamp representing the time when the pageload was initiated
    @available(*, deprecated, message: "Use browser.performance.time_origin instead - The timeOrigin is now recorded as the browser.performance.time_origin attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var performanceTimeOrigin: String { "performance.timeOrigin" }

    /// The destination port for a TCP connection.
    @available(*, deprecated, message: "Use server.port instead - Old namespace-less attribute, to be replaced with server.port for span-first future")
    @_alwaysEmitIntoClient
    @inlinable
    public static var port: String { "port" }

    /// The ID of the Sentry profile the span is associated with. This is only meaningful for transaction-based profiling.
    @available(*, deprecated, message: "Use sentry.profile_id instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var profileId: String { "profile_id" }

    /// The database query being executed.
    @available(*, deprecated, message: "Use db.query.text instead - While this attribute never specifically required parameterization, the replacement, db.query.text, does.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var query: String { "query" }

    /// An item in a query string. Usually added by client-side routing frameworks like vue-router.
    @available(*, deprecated, message: "Use url.query instead - Instead of sending items individually in query.<key>, they should be sent all together with url.query.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queryKey: String { "query.<key>" }

    /// An item in a query string. Usually added by client-side routing frameworks like vue-router.
    @available(*, deprecated, message: "Use url.query instead - Instead of sending items individually in query.<key>, they should be sent all together with url.query.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var queryKeyBase: String { "query" }

    /// The name of the Redis operation being executed.
    @available(*, deprecated, message: "Use db.operation.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var redisCommand: String { "redis.command" }

    /// The key the Redis command is operating on.
    @available(*, deprecated, message: "Use db.redis.key instead - This attribute is being deprecated in favor of db.redis.key, which is the preferred replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var redisKey: String { "redis.key" }

    /// The sentry release.
    @available(*, deprecated, message: "Use sentry.release instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var release: String { "release" }

    /// The id of the sentry replay.
    @available(*, deprecated, message: "Use sentry.replay_id instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var replayId: String { "replayId" }

    /// The id of the sentry replay.
    @available(*, deprecated, message: "Use sentry.replay_id instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _replayId: String { "replay_id" }

    /// The software deployment environment name.
    @available(*, deprecated, message: "Use sentry.environment instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceDeploymentEnvironment: String { "resource.deployment.environment" }

    /// The software deployment environment name.
    @available(*, deprecated, message: "Use sentry.environment instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var resourceDeploymentEnvironmentName: String { "resource.deployment.environment.name" }

    /// The matched route, that is, the path template in the format used by the respective server framework. Also used by mobile SDKs to indicate the current route in the application.
    @available(*, deprecated, message: "Use http.route instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var route: String { "route" }

    /// The numeric status code of the gRPC request.
    @available(*, deprecated, message: "Use rpc.response.status_code instead - Cannot be automatically backfilled due to type mismatch (integer vs string); rpc.grpc.status_code is a numeric gRPC status code while rpc.response.status_code is the string status name.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var rpcGrpcStatusCode: String { "rpc.grpc.status_code" }

    /// A string identifying the remoting system.
    @available(*, deprecated, message: "Use rpc.system.name instead - This attribute is being deprecated in favor of rpc.system.name, which is the OTel-aligned replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var rpcSystem: String { "rpc.system" }

    /// The application build string, when it is separate from the version.
    @available(*, deprecated, message: "The runtime.* namespace is deprecated in favor of process.runtime.*. No direct OTel equivalent exists for this attribute.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var runtimeBuild: String { "runtime.build" }

    /// The name of the runtime. For example node, CPython, or rustc.
    @available(*, deprecated, message: "Use process.runtime.name instead - Prefer OTel-aligned process.runtime.name")
    @_alwaysEmitIntoClient
    @inlinable
    public static var runtimeName: String { "runtime.name" }

    /// Unprocessed description string as obtained from the runtime. Used to extract name and version for well-known runtimes.
    @available(*, deprecated, message: "Use process.runtime.description instead - Prefer OTel-aligned process.runtime.description")
    @_alwaysEmitIntoClient
    @inlinable
    public static var runtimeRawDescription: String { "runtime.raw_description" }

    /// The version of the runtime.
    @available(*, deprecated, message: "Use process.runtime.version instead - Prefer OTel-aligned process.runtime.version")
    @_alwaysEmitIntoClient
    @inlinable
    public static var runtimeVersion: String { "runtime.version" }

    /// The name of the browser.
    @available(*, deprecated, message: "Use browser.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryBrowserName: String { "sentry.browser.name" }

    /// The version of the browser.
    @available(*, deprecated, message: "Use browser.version instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryBrowserVersion: String { "sentry.browser.version" }

    /// The battery level of the device as a percentage (0-100).
    @available(*, deprecated, message: "Use device.battery_level instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceBatteryLevel: String { "sentry.device.battery_level" }

    /// The brand of the device.
    @available(*, deprecated, message: "Use device.brand instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceBrand: String { "sentry.device.brand" }

    /// Whether the device was charging or not.
    @available(*, deprecated, message: "Use device.charging instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceCharging: String { "sentry.device.charging" }

    /// The classification of the device. For example, `low`, `medium`, or `high`. Typically inferred by Relay - SDKs generally do not need to set this directly.
    @available(*, deprecated, message: "Use device.class instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceClass: String { "sentry.device.class" }

    /// The family of the device.
    @available(*, deprecated, message: "Use device.family instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceFamily: String { "sentry.device.family" }

    /// The locale of the device.
    @available(*, deprecated, message: "Use device.locale instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceLocale: String { "sentry.device.locale" }

    /// The model of the device.
    @available(*, deprecated, message: "Use device.model instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceModel: String { "sentry.device.model" }

    /// An internal hardware revision to identify the device exactly.
    @available(*, deprecated, message: "Use device.model_id instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceModelId: String { "sentry.device.model_id" }

    /// The user-assigned name of the mobile device.
    @available(*, deprecated, message: "Use device.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceName: String { "sentry.device.name" }

    /// Whether the device was online or not.
    @available(*, deprecated, message: "Use device.online instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceOnline: String { "sentry.device.online" }

    /// The orientation of the device, either "portrait" or "landscape".
    @available(*, deprecated, message: "Use device.orientation instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceOrientation: String { "sentry.device.orientation" }

    /// The screen density of the device.
    @available(*, deprecated, message: "Use device.screen_density instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceScreenDensity: String { "sentry.device.screen_density" }

    /// The screen density in dots-per-inch (DPI) of the device.
    @available(*, deprecated, message: "Use device.screen_dpi instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceScreenDpi: String { "sentry.device.screen_dpi" }

    /// The height of the device screen in pixels.
    @available(*, deprecated, message: "Use device.screen_height_pixels instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceScreenHeightPixels: String { "sentry.device.screen_height_pixels" }

    /// The width of the device screen in pixels.
    @available(*, deprecated, message: "Use device.screen_width_pixels instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceScreenWidthPixels: String { "sentry.device.screen_width_pixels" }

    /// Whether the device is a simulator or an actual device.
    @available(*, deprecated, message: "Use device.simulator instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryDeviceSimulator: String { "sentry.device.simulator" }

    /// The number of frozen frames rendered during the lifetime of the span.
    @available(*, deprecated, message: "Use app.vitals.frames.frozen.count instead - Replaced by app.vitals.frames.frozen.count to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryFramesFrozen: String { "sentry.frames.frozen" }

    /// The number of slow frames rendered during the lifetime of the span.
    @available(*, deprecated, message: "Use app.vitals.frames.slow.count instead - Replaced by app.vitals.frames.slow.count to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryFramesSlow: String { "sentry.frames.slow" }

    /// The number of total frames rendered during the lifetime of the span.
    @available(*, deprecated, message: "Use app.vitals.frames.total.count instead - Replaced by app.vitals.frames.total.count to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryFramesTotal: String { "sentry.frames.total" }

    /// The message destination name.
    @available(*, deprecated, message: "Use messaging.destination.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryMessagingDestinationName: String { "sentry.messaging.destination.name" }

    /// A value used by the messaging system as an identifier for the message, represented as a string.
    @available(*, deprecated, message: "Use messaging.message.id instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryMessagingMessageId: String { "sentry.messaging.message.id" }

    /// Human readable operating system name.
    @available(*, deprecated, message: "Use os.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryOsName: String { "sentry.os.name" }

    /// Whether the operating system has been jailbroken or rooted.
    @available(*, deprecated, message: "Use os.rooted instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryOsRooted: String { "sentry.os.rooted" }

    /// (Deprecated) The event that caused the SDK to report CLS or LCP (pagehide or navigation)
    @available(*, deprecated, message: "The report event moved to browser.web_vital.lcp.report_event and browser.web_vital.cls.report_event, which are themselves deprecated without a replacement. No backfill required.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryReportEvent: String { "sentry.report_event" }

    /// The HTTP method used.
    @available(*, deprecated, message: "Use http.request.method instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryRequestMethod: String { "sentry.request.method" }

    /// The URL of the resource that was fetched.
    @available(*, deprecated, message: "Use url.full instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryRequestUrl: String { "sentry.request.url" }

    /// The name of the runtime. Equivalent to `name` in the Sentry runtime context.
    @available(*, deprecated, message: "Use process.runtime.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryRuntimeName: String { "sentry.runtime.name" }

    /// The segment ID of a span
    @available(*, deprecated, message: "Use sentry.segment.id instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var _sentrySegmentId: String { "sentry.segment_id" }

    /// The source of a span, also referred to as transaction source.
    @available(*, deprecated, message: "This attribute is superseded by sentry.segment.name.source, which only needs to be set on segment spans.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySource: String { "sentry.source" }

    /// The source of a span, also referred to as transaction source.
    @available(*, deprecated, message: "This attribute is superseded by sentry.segment.name.source, which only needs to be set on segment spans.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySpanSource: String { "sentry.span.source" }

    /// the navigation origin (sveltekit router)
    @available(*, deprecated, message: "Use router.navigation.origin instead - Use the more generic attribute instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySveltekitNavigationFrom: String { "sentry.sveltekit.navigation.from" }

    /// the navigation destination
    @available(*, deprecated, message: "the navigation destination is already covered by url.* attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySveltekitNavigationTo: String { "sentry.sveltekit.navigation.to" }

    /// The type of navigation event emitted from the sveltekit client router
    @available(*, deprecated, message: "Use router.navigation.type instead - Use the more generic attribute instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentrySveltekitNavigationType: String { "sentry.sveltekit.navigation.type" }

    /// Current "managed" thread ID.
    @available(*, deprecated, message: "Use thread.id instead - This attribute is being deprecated in favor of the OTel-standard thread.id")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryThreadId: String { "sentry.thread.id" }

    /// Current thread name.
    @available(*, deprecated, message: "Use thread.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryThreadName: String { "sentry.thread.name" }

    /// The span id of the span that was active when the log was collected. This should not be set if there was no active span.
    @available(*, deprecated, message: "Deprecated")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryTraceParentSpanId: String { "sentry.trace.parent_span_id" }

    /// The sentry transaction (segment name).
    @available(*, deprecated, message: "Use sentry.segment.name instead - This attribute is being deprecated in favor of sentry.segment.name")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryTransaction: String { "sentry.transaction" }

    /// User email address.
    @available(*, deprecated, message: "Use user.email instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUserEmail: String { "sentry.user.email" }

    /// Human readable city name.
    @available(*, deprecated, message: "Use user.geo.city instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUserGeoCity: String { "sentry.user.geo.city" }

    /// Two-letter country code (ISO 3166-1 alpha-2).
    @available(*, deprecated, message: "Use user.geo.country_code instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUserGeoCountryCode: String { "sentry.user.geo.country_code" }

    /// Human readable region name or code.
    @available(*, deprecated, message: "Use user.geo.region instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUserGeoRegion: String { "sentry.user.geo.region" }

    /// Human readable subdivision name.
    @available(*, deprecated, message: "Use user.geo.subdivision instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUserGeoSubdivision: String { "sentry.user.geo.subdivision" }

    /// UN M49 subregion code of the user's location, derived from user.geo.country_code. Sub-Saharan Africa and Latin America and the Caribbean are split into their M49 intermediate regions.
    @available(*, deprecated, message: "Use user.geo.subregion instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUserGeoSubregion: String { "sentry.user.geo.subregion" }

    /// Unique identifier of the user.
    @available(*, deprecated, message: "Use user.id instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUserId: String { "sentry.user.id" }

    /// The IP address of the user.
    @available(*, deprecated, message: "Use user.ip_address instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUserIp: String { "sentry.user.ip" }

    /// Short name or login/username of the user.
    @available(*, deprecated, message: "Use user.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var sentryUserUsername: String { "sentry.user.username" }

    /// The request lifecycle extension point where the Hapi extension function runs.
    @available(*, deprecated, message: "Use hapi.ext.type instead - Name from the OpenTelemetry Hapi instrumentation. The `server` namespace describes the network endpoint of the server, so the attribute moves to the `hapi` namespace.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var serverExtType: String { "server.ext.type" }

    /// The name of the device. On servers and desktops, this is typically the hostname.
    @available(*, deprecated, message: "Use server.address instead - This attribute is being deprecated in favor of server.address.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var serverName: String { "server_name" }

    /// The fraction of time the app was stalled. Only applies to React Native. This is computed by Relay.
    @available(*, deprecated, message: "Use app.vitals.stall.percentage instead - Replaced by app.vitals.stall.percentage to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var stallPercentage: String { "stall_percentage" }

    /// The combined duration of all stalls in milliseconds. Only applies to React Native. This is computed by Relay.
    @available(*, deprecated, message: "Use app.vitals.stall.duration instead - Replaced by app.vitals.stall.duration to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var stallTotalTime: String { "stall_total_time" }

    /// The name of the Starlette middleware.
    @available(*, deprecated, message: "Use middleware.name instead - This attribute is being deprecated in favor of middleware.name, which is the framework-agnostic replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var starletteMiddlewareName: String { "starlette.middleware_name" }

    /// The name of the Starlite middleware.
    @available(*, deprecated, message: "Use middleware.name instead - This attribute is being deprecated in favor of middleware.name, which is the framework-agnostic replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var starliteMiddlewareName: String { "starlite.middleware_name" }

    /// The process ID of a subprocess.
    @available(*, deprecated, message: "Use process.pid instead - This attribute is being deprecated in favor of process.pid, which is the OTel-aligned replacement.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var subprocessPid: String { "subprocess.pid" }

    /// The duration of time to full display in milliseconds
    @available(*, deprecated, message: "Use app.vitals.ttfd.value instead - Replaced by app.vitals.ttfd.value to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var timeToFullDisplay: String { "time_to_full_display" }

    /// The duration of time to initial display in milliseconds
    @available(*, deprecated, message: "Use app.vitals.ttid.value instead - Replaced by app.vitals.ttid.value to align with the app.vitals.* namespace for mobile performance attributes")
    @_alwaysEmitIntoClient
    @inlinable
    public static var timeToInitialDisplay: String { "time_to_initial_display" }

    /// The sentry transaction (segment name).
    @available(*, deprecated, message: "Use sentry.segment.name instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var transaction: String { "transaction" }

    /// The value of the recorded Time To First Byte (TTFB) web vital in milliseconds
    @available(*, deprecated, message: "Use browser.web_vital.ttfb.value instead - This attribute is being deprecated in favor of browser.web_vital.ttfb.value")
    @_alwaysEmitIntoClient
    @inlinable
    public static var ttfb: String { "ttfb" }

    /// The time it takes for the server to process the initial request and send the first byte of a response to the user's browser
    @available(*, deprecated, message: "Use browser.web_vital.ttfb.request_time instead - This attribute is being deprecated in favor of browser.web_vital.ttfb.request_time")
    @_alwaysEmitIntoClient
    @inlinable
    public static var ttfbRequestTime: String { "ttfb.requestTime" }

    /// The React Native architecture the call was observed on. `new` for a TurboModule resolved through `TurboModuleRegistry`, `legacy` for a module reached over the Old Architecture bridge. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.architecture instead - Replaced by the `react_native.*` namespace, which also covers native module calls made over the Old Architecture bridge, which are not TurboModules")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModuleArch: String { "turbo_module.arch" }

    /// The name of the native module method that was called. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.method instead - Replaced by the `react_native.*` namespace, which also covers native module calls made over the Old Architecture bridge, which are not TurboModules")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModuleMethod: String { "turbo_module.method" }

    /// The name of the native module the call was dispatched to. On the New Architecture this is the TurboModule name, on the Old Architecture the `NativeModules` key. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.name instead - Replaced by the `react_native.*` namespace, which also covers native module calls made over the Old Architecture bridge, which are not TurboModules")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModuleName: String { "turbo_module.name" }

    /// The native module and method that accounted for the most total duration during the lifetime of the span. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.top.name instead - Replaced by the `react_native.module.*` namespace, which also covers native module calls made over the Old Architecture bridge, and which drops the `total_` prefix and `_ms` suffix in favor of dot-separated logical grouping")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModuleTopModule: String { "turbo_module.top_module" }

    /// The total duration attributed to the top native module method, in milliseconds. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.top.duration instead - Replaced by the `react_native.module.*` namespace, which also covers native module calls made over the Old Architecture bridge, and which drops the `total_` prefix and `_ms` suffix in favor of dot-separated logical grouping")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModuleTopModuleDurationMs: String { "turbo_module.top_module_duration_ms" }

    /// The number of native module calls observed during the lifetime of the span. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.call.count instead - Replaced by the `react_native.module.*` namespace, which also covers native module calls made over the Old Architecture bridge, and which drops the `total_` prefix and `_ms` suffix in favor of dot-separated logical grouping")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModuleTotalCallCount: String { "turbo_module.total_call_count" }

    /// The combined duration of all native module calls observed during the lifetime of the span, in milliseconds. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.duration.total instead - Replaced by the `react_native.module.*` namespace, which also covers native module calls made over the Old Architecture bridge, and which drops the `total_` prefix and `_ms` suffix in favor of dot-separated logical grouping")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModuleTotalDurationMs: String { "turbo_module.total_duration_ms" }

    /// The number of native module calls that failed during the lifetime of the span. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.error.count instead - Replaced by the `react_native.module.*` namespace, which also covers native module calls made over the Old Architecture bridge, and which drops the `total_` prefix and `_ms` suffix in favor of dot-separated logical grouping")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModuleTotalErrorCount: String { "turbo_module.total_error_count" }

    /// The number of distinct native module and method pairs called during the lifetime of the span. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.call.distinct_count instead - Replaced by the `react_native.module.*` namespace, which also covers native module calls made over the Old Architecture bridge, and which drops the `total_` prefix and `_ms` suffix in favor of dot-separated logical grouping")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModuleUniqueMethods: String { "turbo_module.unique_methods" }

    /// The number of native module calls in the flushed call aggregate. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.call.count instead - Replaced by the `react_native.module.*` namespace; the SDK emitted the same values under both a singular `turbo_module.*` and a plural `turbo_modules.*` prefix")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModulesTotalCallCount: String { "turbo_modules.total_call_count" }

    /// The combined duration of all native module calls in the flushed call aggregate, in milliseconds. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.duration.total instead - Replaced by the `react_native.module.*` namespace; the SDK emitted the same values under both a singular `turbo_module.*` and a plural `turbo_modules.*` prefix")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModulesTotalDurationMs: String { "turbo_modules.total_duration_ms" }

    /// The number of failed native module calls in the flushed call aggregate. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.error.count instead - Replaced by the `react_native.module.*` namespace; the SDK emitted the same values under both a singular `turbo_module.*` and a plural `turbo_modules.*` prefix")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModulesTotalErrorCount: String { "turbo_modules.total_error_count" }

    /// The number of distinct native module and method pairs in the flushed call aggregate. Only applies to React Native.
    @available(*, deprecated, message: "Use react_native.module.call.distinct_count instead - Replaced by the `react_native.module.*` namespace; the SDK emitted the same values under both a singular `turbo_module.*` and a plural `turbo_modules.*` prefix")
    @_alwaysEmitIntoClient
    @inlinable
    public static var turboModulesUniqueMethods: String { "turbo_modules.unique_methods" }

    /// The URL of the resource that was fetched.
    @available(*, deprecated, message: "Use url.full instead")
    @_alwaysEmitIntoClient
    @inlinable
    public static var url: String { "url" }

    /// Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
    @available(*, deprecated, message: "Use url.path.parameter.<key> instead - This attribute is being deprecated in favor of url.path.parameter.<key>.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlPathParamsKey: String { "url.path.params.<key>" }

    /// Decoded parameters extracted from a URL path. Usually added by client-side routing frameworks like vue-router.
    @available(*, deprecated, message: "Use url.path.parameter.<key> instead - This attribute is being deprecated in favor of url.path.parameter.<key>.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlPathParamsKeyBase: String { "url.path.params" }

    /// Indicates that a URL has the same origin as the current page's origin in the browser.
    @available(*, deprecated, message: "Use http.request.same_origin instead - This attribute is being deprecated in favor of http.request.same_origin.")
    @_alwaysEmitIntoClient
    @inlinable
    public static var urlSameOrigin: String { "url.same_origin" }
}
