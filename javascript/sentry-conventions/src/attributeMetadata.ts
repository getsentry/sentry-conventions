// This is an auto-generated file. Do not edit!

import type { AttributeName } from './attributes';

export type AttributeType =
  | 'string'
  | 'boolean'
  | 'integer'
  | 'double'
  | 'string[]'
  | 'boolean[]'
  | 'integer[]'
  | 'double[]'
  | 'any';

export type ApplyScrubbing = 'auto' | 'manual' | 'never';

export type AttributeVisibility = 'public' | 'internal';

export interface ApplyScrubbingInfo {
  /** How PII scrubbing should be applied to the attribute value */
  key: ApplyScrubbing;
  /** Reason why this scrubbing mode applies */
  reason?: string;
}

export type DeprecationStatus = 'backfill' | 'normalize' | 'transform';

export interface DeprecationInfo {
  /** What this attribute was replaced with */
  replacement?: string;
  /** Reason for deprecation */
  reason?: string;
  /** How the attribute should be handled in the ingestion pipeline */
  status?: DeprecationStatus;
  /** Attribute transformation id to apply when status is transform */
  transformation?: string;
}

export interface AttributeMetadata {
  /** The type of the attribute value */
  type: AttributeType;
  /** How PII scrubbing should be applied to the attribute value */
  applyScrubbing: ApplyScrubbingInfo;
  /** Whether the attribute is defined in OpenTelemetry Semantic Conventions */
  isInOtel: boolean;
  /** Whether the attribute is public or internal to Sentry */
  visibility: AttributeVisibility;
  /** If an attribute has a dynamic suffix */
  hasDynamicSuffix?: boolean;
  /** If an attribute was deprecated, and what it was replaced with */
  deprecation?: DeprecationInfo;
  /** If there are attributes that alias to this attribute */
  aliases?: AttributeName[];
}

export const ATTRIBUTE_TYPE: Record<string, AttributeType> = {
  address: 'string',
  'ai.citations': 'string[]',
  'ai.completion_tokens.used': 'integer',
  'ai.documents': 'string[]',
  'ai.finish_reason': 'string',
  'ai.frequency_penalty': 'double',
  'ai.function_call': 'string',
  'ai.generation_id': 'string',
  'ai.input_messages': 'string',
  'ai.is_search_required': 'boolean',
  'ai.metadata': 'string',
  'ai.model_id': 'string',
  'ai.model.provider': 'string',
  'ai.pipeline.name': 'string',
  'ai.preamble': 'string',
  'ai.presence_penalty': 'double',
  'ai.prompt.messages': 'string',
  'ai.prompt_tokens.used': 'integer',
  'ai.raw_prompting': 'boolean',
  'ai.responses': 'string[]',
  'ai.response_format': 'string',
  'ai.response.text': 'string',
  'ai.response.toolCalls': 'string',
  'ai.search_queries': 'string[]',
  'ai.search_results': 'string[]',
  'ai.seed': 'string',
  'ai.streaming': 'boolean',
  'ai.tags': 'string',
  'ai.temperature': 'double',
  'ai.texts': 'string[]',
  'ai.toolCall.args': 'string',
  'ai.toolCall.result': 'string',
  'ai.tools': 'string[]',
  'ai.tool_calls': 'string[]',
  'ai.top_k': 'integer',
  'ai.top_p': 'double',
  'ai.total_cost': 'double',
  'ai.total_tokens.used': 'integer',
  'ai.warnings': 'string[]',
  'angular.version': 'string',
  'app.app_build': 'string',
  'app.app_identifier': 'string',
  'app.app_name': 'string',
  'app.app_start_time': 'string',
  'app.app_version': 'string',
  'app.build': 'string',
  'app.identifier': 'string',
  'app.in_foreground': 'boolean',
  'app.name': 'string',
  app_start_cold: 'double',
  'app.start_time': 'string',
  app_start_type: 'string',
  app_start_warm: 'double',
  'app.version': 'string',
  'app.vitals.frames.delay.value': 'integer',
  'app.vitals.frames.frozen.count': 'integer',
  'app.vitals.frames.frozen.rate': 'double',
  'app.vitals.frames.slow.count': 'integer',
  'app.vitals.frames.slow.rate': 'double',
  'app.vitals.frames.total.count': 'integer',
  'app.vitals.stall.duration': 'double',
  'app.vitals.stall.percentage': 'double',
  'app.vitals.start.cold.value': 'double',
  'app.vitals.start.prewarmed': 'boolean',
  'app.vitals.start.reason': 'string',
  'app.vitals.start.screen': 'string',
  'app.vitals.start.type': 'string',
  'app.vitals.start.warm.value': 'double',
  'app.vitals.ttfd.value': 'double',
  'app.vitals.ttid.value': 'double',
  'art.gc.blocking_count': 'integer',
  'art.gc.blocking_time': 'double',
  'art.gc.pre_oome_count': 'integer',
  'art.gc.total_count': 'integer',
  'art.gc.total_time': 'double',
  'art.gc.waiting_time': 'double',
  'art.memory.free': 'integer',
  'art.memory.free_until_gc': 'integer',
  'art.memory.free_until_oome': 'integer',
  'art.memory.max': 'integer',
  'art.memory.total': 'integer',
  'aws.cloudwatch.logs.log_group': 'string',
  'aws.cloudwatch.logs.log_stream': 'string',
  'aws.cloudwatch.logs.url': 'string',
  'aws.dynamodb.attribute_definitions': 'string[]',
  'aws.dynamodb.consistent_read': 'boolean',
  'aws.dynamodb.consumed_capacity': 'string[]',
  'aws.dynamodb.count': 'integer',
  'aws.dynamodb.exclusive_start_table': 'string',
  'aws.dynamodb.global_secondary_indexes': 'string[]',
  'aws.dynamodb.global_secondary_index_updates': 'string[]',
  'aws.dynamodb.index_name': 'string',
  'aws.dynamodb.item_collection_metrics': 'string',
  'aws.dynamodb.limit': 'integer',
  'aws.dynamodb.local_secondary_indexes': 'string[]',
  'aws.dynamodb.projection': 'string',
  'aws.dynamodb.provisioned_read_capacity': 'double',
  'aws.dynamodb.provisioned_write_capacity': 'double',
  'aws.dynamodb.scanned_count': 'integer',
  'aws.dynamodb.scan_forward': 'boolean',
  'aws.dynamodb.segment': 'integer',
  'aws.dynamodb.select': 'string',
  'aws.dynamodb.table_count': 'integer',
  'aws.dynamodb.table_names': 'string[]',
  'aws.dynamodb.total_segments': 'integer',
  'aws.extended_request_id': 'string',
  'aws.kinesis.stream_name': 'string',
  'aws.kinesis.stream.name': 'string',
  'aws.lambda.aws_request_id': 'string',
  'aws.lambda.execution_duration_in_millis': 'double',
  'aws.lambda.function_name': 'string',
  'aws.lambda.function_version': 'string',
  'aws.lambda.invoked_arn': 'string',
  'aws.lambda.invoked_function_arn': 'string',
  'aws.lambda.remaining_time_in_millis': 'double',
  'aws.log.group.names': 'string[]',
  'aws.log.stream.names': 'string[]',
  'aws.operation_name': 'string',
  aws_region: 'string',
  'aws.request.extended_id': 'string',
  'aws.request_id': 'string',
  'aws.request.id': 'string',
  'aws.request.url': 'string',
  'aws.s3.bucket': 'string',
  'aws.secretsmanager.secret.arn': 'string',
  'aws.sns.topic.arn': 'string',
  'aws.step_functions.activity.arn': 'string',
  'aws.step_functions.state_machine.arn': 'string',
  blocked_main_thread: 'boolean',
  'browser.bfcache.frame': 'string',
  'browser.bfcache.not_restored_reason_count': 'integer',
  'browser.bfcache.outcome': 'string',
  'browser.bfcache.reason': 'string',
  'browser.name': 'string',
  'browser.performance.navigation.activation_start': 'double',
  'browser.performance.time_origin': 'double',
  'browser.report.type': 'string',
  'browser.script.invoker': 'string',
  'browser.script.invoker_type': 'string',
  'browser.script.source_char_position': 'integer',
  'browser.version': 'string',
  'browser.web_vital.cls.report_event': 'string',
  'browser.web_vital.cls.source.<key>': 'string',
  'browser.web_vital.cls.value': 'double',
  'browser.web_vital.fcp.value': 'double',
  'browser.web_vital.fp.value': 'double',
  'browser.web_vital.inp.value': 'double',
  'browser.web_vital.lcp.element': 'string',
  'browser.web_vital.lcp.id': 'string',
  'browser.web_vital.lcp.load_time': 'integer',
  'browser.web_vital.lcp.render_time': 'integer',
  'browser.web_vital.lcp.report_event': 'string',
  'browser.web_vital.lcp.size': 'integer',
  'browser.web_vital.lcp.url': 'string',
  'browser.web_vital.lcp.value': 'double',
  'browser.web_vital.ttfb.request_time': 'double',
  'browser.web_vital.ttfb.value': 'double',
  'cache.hit': 'boolean',
  'cache.item_size': 'integer',
  'cache.key': 'string[]',
  'cache.operation': 'string',
  'cache.ttl': 'integer',
  'cache.write': 'boolean',
  channel: 'string',
  'client.address': 'string',
  'client.port': 'integer',
  'cloudflare.d1.duration': 'integer',
  'cloudflare.d1.query_type': 'string',
  'cloudflare.d1.rows_read': 'integer',
  'cloudflare.d1.rows_written': 'integer',
  'cloudflare.durable_object.query.bindings': 'integer',
  'cloudflare.durable_object.response.rows_read': 'integer',
  'cloudflare.durable_object.response.rows_written': 'integer',
  'cloudflare.r2.bucket': 'string',
  'cloudflare.r2.operation': 'string',
  'cloudflare.r2.request.delimiter': 'string',
  'cloudflare.r2.request.key': 'string',
  'cloudflare.r2.request.part_number': 'integer',
  'cloudflare.r2.request.prefix': 'string',
  'cloudflare.workflow.attempt': 'integer',
  'cloudflare.workflow.retries.backoff': 'string',
  'cloudflare.workflow.retries.delay': 'string',
  'cloudflare.workflow.retries.limit': 'integer',
  'cloudflare.workflow.timeout': 'string',
  'cloud.account.id': 'string',
  'cloud.availability_zone': 'string',
  'cloud.platform': 'string',
  'cloud.provider': 'string',
  'cloud.region': 'string',
  'cloud.resource_id': 'string',
  cls: 'double',
  'cls.source.<key>': 'string',
  code: 'string',
  'code.filepath': 'string',
  'code.file.path': 'string',
  'code.function': 'string',
  'code.function.name': 'string',
  'code.lineno': 'integer',
  'code.line.number': 'integer',
  'code.namespace': 'string',
  connectionType: 'string',
  'connection.rtt': 'integer',
  'culture.calendar': 'string',
  'culture.display_name': 'string',
  'culture.is_24_hour_format': 'boolean',
  'culture.locale': 'string',
  'culture.timezone': 'string',
  'db.collection.name': 'string',
  'db.driver.name': 'string',
  'db.mongodb.collection': 'string',
  'db.name': 'string',
  'db.namespace': 'string',
  'db.operation': 'string',
  'db.operation.batch.size': 'integer',
  'db.operation.name': 'string',
  'db.params': 'string',
  'db.query.parameter.<key>': 'string',
  'db.query.summary': 'string',
  'db.query.text': 'string',
  'db.redis.connection': 'string',
  'db.redis.key': 'string',
  'db.redis.parameters': 'string[]',
  'db.response.status_code': 'string',
  'db.sql.bindings': 'string[]',
  'db.statement': 'string',
  'db.stored_procedure.name': 'string',
  'db.system': 'string',
  'db.system.name': 'string',
  'db.user': 'string',
  deviceMemory: 'string',
  'device.archs': 'string[]',
  'device.battery_level': 'double',
  'device.battery_temperature': 'double',
  'device.boot_time': 'string',
  'device.brand': 'string',
  'device.charging': 'boolean',
  'device.chipset': 'string',
  'device.class': 'string',
  'device.connection_type': 'string',
  'device.cpu_description': 'string',
  'device.external_free_storage': 'integer',
  'device.external_storage_size': 'integer',
  'device.family': 'string',
  'device.free_memory': 'integer',
  'device.free_storage': 'integer',
  'device.id': 'string',
  'device.locale': 'string',
  'device.low_memory': 'boolean',
  'device.low_power_mode': 'boolean',
  'device.manufacturer': 'string',
  'device.memory.estimated_capacity': 'integer',
  'device.memory_size': 'integer',
  'device.model': 'string',
  'device.model_id': 'string',
  'device.name': 'string',
  'device.online': 'boolean',
  'device.orientation': 'string',
  'device.processor_count': 'integer',
  'device.processor_frequency': 'double',
  'device.screen_density': 'double',
  'device.screen_dpi': 'integer',
  'device.screen_height_pixels': 'integer',
  'device.screen_width_pixels': 'integer',
  'device.simulator': 'boolean',
  'device.storage_size': 'integer',
  'device.thermal_state': 'string',
  'device.timezone': 'string',
  'device.usable_memory': 'integer',
  dist: 'string',
  'django.function_name': 'string',
  'django.middleware_name': 'string',
  effectiveConnectionType: 'string',
  environment: 'string',
  'error.type': 'string',
  'event.id': 'integer',
  'event.name': 'string',
  'exception.escaped': 'boolean',
  'exception.message': 'string',
  'exception.stacktrace': 'string',
  'exception.type': 'string',
  'faas.coldstart': 'boolean',
  'faas.cron': 'string',
  'faas.duration_in_ms': 'integer',
  'faas.entry_point': 'string',
  'faas.execution': 'string',
  'faas.id': 'string',
  'faas.identity': 'string',
  'faas.invocation_id': 'string',
  'faas.invoked_name': 'string',
  'faas.invoked_provider': 'string',
  'faas.invoked_region': 'string',
  'faas.name': 'string',
  'faas.time': 'string',
  'faas.trigger': 'string',
  'faas.version': 'string',
  fcp: 'double',
  'file.path': 'string',
  'file.size': 'integer',
  'flag.evaluation.<key>': 'boolean',
  fp: 'double',
  'frames.delay': 'integer',
  'frames.frozen': 'integer',
  frames_frozen_rate: 'double',
  'frames.slow': 'integer',
  frames_slow_rate: 'double',
  'frames.total': 'integer',
  fs_error: 'string',
  'gcp.function.context.event_id': 'string',
  'gcp.function.context.event_type': 'string',
  'gcp.function.context.id': 'string',
  'gcp.function.context.resource': 'string',
  'gcp.function.context.source': 'string',
  'gcp.function.context.specversion': 'string',
  'gcp.function.context.time': 'string',
  'gcp.function.context.timestamp': 'string',
  'gcp.function.context.type': 'string',
  'gcp.project.id': 'string',
  gcp_region: 'string',
  'gen_ai.agent.name': 'string',
  'gen_ai.context.utilization': 'double',
  'gen_ai.context.window_size': 'integer',
  'gen_ai.conversation.id': 'string',
  'gen_ai.cost.cache_creation.input_tokens': 'double',
  'gen_ai.cost.cache_read.input_tokens': 'double',
  'gen_ai.cost.input_tokens': 'double',
  'gen_ai.cost.output_tokens': 'double',
  'gen_ai.cost.reasoning.output_tokens': 'double',
  'gen_ai.cost.total_tokens': 'double',
  'gen_ai.embeddings.input': 'string',
  'gen_ai.function_id': 'string',
  'gen_ai.input.messages': 'string',
  'gen_ai.operation.name': 'string',
  'gen_ai.operation.type': 'string',
  'gen_ai.output.messages': 'string',
  'gen_ai.pipeline.name': 'string',
  'gen_ai.prompt': 'string',
  'gen_ai.prompt.name': 'string',
  'gen_ai.provider.name': 'string',
  'gen_ai.request.available_tools': 'string',
  'gen_ai.request.frequency_penalty': 'double',
  'gen_ai.request.max_tokens': 'integer',
  'gen_ai.request.messages': 'string',
  'gen_ai.request.model': 'string',
  'gen_ai.request.presence_penalty': 'double',
  'gen_ai.request.reasoning.level': 'string',
  'gen_ai.request.seed': 'string',
  'gen_ai.request.stop_sequences': 'string[]',
  'gen_ai.request.temperature': 'double',
  'gen_ai.request.top_k': 'integer',
  'gen_ai.request.top_p': 'double',
  'gen_ai.response.finish_reason': 'string',
  'gen_ai.response.finish_reasons': 'string',
  'gen_ai.response.id': 'string',
  'gen_ai.response.model': 'string',
  'gen_ai.response.streaming': 'boolean',
  'gen_ai.response.text': 'string',
  'gen_ai.response.time_to_first_chunk': 'double',
  'gen_ai.response.time_to_first_token': 'double',
  'gen_ai.response.tokens_per_second': 'double',
  'gen_ai.response.tool_calls': 'string',
  'gen_ai.system': 'string',
  'gen_ai.system_instructions': 'string',
  'gen_ai.system.message': 'string',
  'gen_ai.tool.call.arguments': 'string',
  'gen_ai.tool.call.result': 'string',
  'gen_ai.tool.definitions': 'string',
  'gen_ai.tool.description': 'string',
  'gen_ai.tool.input': 'string',
  'gen_ai.tool.message': 'string',
  'gen_ai.tool.name': 'string',
  'gen_ai.tool.output': 'string',
  'gen_ai.tool.type': 'string',
  'gen_ai.usage.cache_creation.input_tokens': 'integer',
  'gen_ai.usage.cache_read.input_tokens': 'integer',
  'gen_ai.usage.completion_tokens': 'integer',
  'gen_ai.usage.input_tokens': 'integer',
  'gen_ai.usage.input_tokens.cached': 'integer',
  'gen_ai.usage.input_tokens.cache_write': 'integer',
  'gen_ai.usage.output_tokens': 'integer',
  'gen_ai.usage.output_tokens.reasoning': 'integer',
  'gen_ai.usage.prompt_tokens': 'integer',
  'gen_ai.usage.reasoning.output_tokens': 'integer',
  'gen_ai.usage.total_tokens': 'integer',
  'graphql.document': 'string',
  'graphql.operation.name': 'string',
  'graphql.operation.type': 'string',
  'grpc.error.bad_request.field_violations': 'string[]',
  'grpc.error.debug_info.detail': 'string',
  'grpc.error.debug_info.stack_entries': 'string[]',
  'grpc.error.error_info.domain': 'string',
  'grpc.error.error_info.metadata.<key>': 'string',
  'grpc.error.error_info.reason': 'string',
  'grpc.error.precondition_failure.violations': 'string[]',
  'grpc.error.quota_failure.violations': 'string[]',
  'grpc.error.resource_info.description': 'string',
  'grpc.error.resource_info.owner': 'string',
  'grpc.error.resource_info.resource_name': 'string',
  'grpc.error.resource_info.resource_type': 'string',
  'grpc.error.retry_info.retry_delay_ms': 'integer',
  hardwareConcurrency: 'string',
  'http.client_ip': 'string',
  'http.decoded_response_content_length': 'integer',
  'http.flavor': 'string',
  'http.fragment': 'string',
  'http.host': 'string',
  'http.method': 'string',
  'http.query': 'string',
  'http.request.body.data': 'string',
  'http.request.connection_end': 'double',
  'http.request.connect_start': 'double',
  'http.request.domain_lookup_end': 'double',
  'http.request.domain_lookup_start': 'double',
  'http.request.fetch_start': 'double',
  'http.request.header.<key>': 'string[]',
  'http.request.method': 'string',
  'http.request_method': 'string',
  'http.request.redirect_end': 'double',
  'http.request.redirect_start': 'double',
  'http.request.request_start': 'double',
  'http.request.resend_count': 'integer',
  'http.request.response_end': 'double',
  'http.request.response_start': 'double',
  'http.request.same_origin': 'boolean',
  'http.request.secure_connection_start': 'double',
  'http.request.time_to_first_byte': 'double',
  'http.request.worker_start': 'double',
  'http.response.body.size': 'integer',
  'http.response_content_length': 'integer',
  'http.response.header.content-length': 'string',
  'http.response.header.<key>': 'string[]',
  'http.response.size': 'integer',
  'http.response.status_code': 'integer',
  'http.response_transfer_size': 'integer',
  'http.route': 'string',
  'http.scheme': 'string',
  'http.server_name': 'string',
  'http.server.request.time_in_queue': 'double',
  'http.status_code': 'integer',
  'http.target': 'string',
  'http.url': 'string',
  'http.user_agent': 'string',
  id: 'string',
  inp: 'double',
  'jsonrpc.protocol.version': 'string',
  'jsonrpc.request.id': 'string',
  'jvm.gc.action': 'string',
  'jvm.gc.name': 'string',
  'jvm.memory.pool.name': 'string',
  'jvm.memory.type': 'string',
  'jvm.thread.daemon': 'boolean',
  'jvm.thread.state': 'string',
  'koa.name': 'string',
  'koa.type': 'string',
  lcp: 'double',
  'lcp.element': 'string',
  'lcp.id': 'string',
  'lcp.loadTime': 'integer',
  'lcp.renderTime': 'integer',
  'lcp.size': 'integer',
  'lcp.url': 'string',
  'litestar.middleware_name': 'string',
  'logger.name': 'string',
  'mcp.cancelled.reason': 'string',
  'mcp.cancelled.request_id': 'string',
  'mcp.client.name': 'string',
  'mcp.client.title': 'string',
  'mcp.client.version': 'string',
  'mcp.lifecycle.phase': 'string',
  'mcp.logging.data_type': 'string',
  'mcp.logging.level': 'string',
  'mcp.logging.logger': 'string',
  'mcp.logging.message': 'string',
  'mcp.method.name': 'string',
  'mcp.progress.current': 'integer',
  'mcp.progress.message': 'string',
  'mcp.progress.percentage': 'double',
  'mcp.progress.token': 'string',
  'mcp.progress.total': 'integer',
  'mcp.prompt.name': 'string',
  'mcp.prompt.result.description': 'string',
  'mcp.prompt.result.message_content': 'string',
  'mcp.prompt.result.message_count': 'integer',
  'mcp.prompt.result.message_role': 'string',
  'mcp.protocol.ready': 'integer',
  'mcp.protocol.version': 'string',
  'mcp.request.argument.<key>': 'string',
  'mcp.request.argument.name': 'string',
  'mcp.request.argument.uri': 'string',
  'mcp.request.id': 'string',
  'mcp.resource.protocol': 'string',
  'mcp.resource.uri': 'string',
  'mcp.server.name': 'string',
  'mcp.server.title': 'string',
  'mcp.server.version': 'string',
  'mcp.session.id': 'string',
  'mcp.tool.name': 'string',
  'mcp.tool.result.content': 'string',
  'mcp.tool.result.content_count': 'integer',
  'mcp.tool.result.is_error': 'boolean',
  'mcp.transport': 'string',
  'mdc.<key>': 'string',
  'messaging.batch.message_count': 'integer',
  'messaging.destination': 'string',
  'messaging.destination.connection': 'string',
  'messaging.destination_kind': 'string',
  'messaging.destination.name': 'string',
  'messaging.destination.partition.id': 'string',
  'messaging.kafka.message.key': 'string',
  'messaging.kafka.message.tombstone': 'boolean',
  'messaging.kafka.offset': 'integer',
  'messaging.message.body.size': 'integer',
  'messaging.message.conversation_id': 'string',
  'messaging.message.envelope.size': 'integer',
  'messaging.message.id': 'string',
  'messaging.message.receive.latency': 'integer',
  'messaging.message.retry.count': 'integer',
  'messaging.operation.name': 'string',
  'messaging.operation.type': 'string',
  'messaging.rabbitmq.destination.routing_key': 'string',
  'messaging.system': 'string',
  method: 'string',
  'middleware.name': 'string',
  'navigation.origin': 'string',
  'navigation.route.id': 'string',
  'navigation.type': 'string',
  'nel.elapsed_time': 'integer',
  'nel.phase': 'string',
  'nel.referrer': 'string',
  'nel.sampling_function': 'double',
  'nel.type': 'string',
  'network.connection.effective_type': 'string',
  'network.connection.rtt': 'integer',
  'network.connection.type': 'string',
  'network.local.address': 'string',
  'network.local.port': 'integer',
  'network.peer.address': 'string',
  'network.peer.port': 'integer',
  'network.protocol.name': 'string',
  'network.protocol.version': 'string',
  'network.transport': 'string',
  'network.type': 'string',
  'net.host.ip': 'string',
  'net.host.name': 'string',
  'net.host.port': 'integer',
  'net.peer.ip': 'string',
  'net.peer.name': 'string',
  'net.peer.port': 'integer',
  'net.protocol.name': 'string',
  'net.protocol.version': 'string',
  'net.sock.family': 'string',
  'net.sock.host.addr': 'string',
  'net.sock.host.port': 'integer',
  'net.sock.peer.addr': 'string',
  'net.sock.peer.name': 'string',
  'net.sock.peer.port': 'integer',
  'net.transport': 'string',
  'os.build': 'string',
  'os.build_id': 'string',
  'os.description': 'string',
  'os.kernel_version': 'string',
  'os.name': 'string',
  'os.raw_description': 'string',
  'os.rooted': 'boolean',
  'os.theme': 'string',
  'os.type': 'string',
  'os.version': 'string',
  'otel.kind': 'string',
  'otel.scope.name': 'string',
  'otel.scope.version': 'string',
  'otel.status_code': 'string',
  'otel.status_description': 'string',
  'params.<key>': 'string',
  'performance.activationStart': 'double',
  'performance.timeOrigin': 'double',
  port: 'integer',
  previous_route: 'string',
  'process.command_args': 'string[]',
  'process.executable.name': 'string',
  'process.pid': 'integer',
  'process.runtime.description': 'string',
  'process.runtime.engine.name': 'string',
  'process.runtime.engine.version': 'string',
  'process.runtime.name': 'string',
  'process.runtime.version': 'string',
  profile_id: 'string',
  query: 'string',
  'query.<key>': 'string',
  'react.version': 'string',
  'redis.command': 'string',
  'redis.key': 'string',
  release: 'string',
  'remix.action_form_data.<key>': 'string',
  replay_id: 'string',
  'resource.deployment.environment': 'string',
  'resource.deployment.environment.name': 'string',
  'resource.render_blocking_status': 'string',
  route: 'string',
  'rpc.grpc.status_code': 'integer',
  'rpc.method': 'string',
  'rpc.response.status_code': 'string',
  'rpc.service': 'string',
  'rpc.system': 'string',
  'rpc.system.name': 'string',
  'runtime.build': 'string',
  'runtime.name': 'string',
  'runtime.raw_description': 'string',
  'runtime.version': 'string',
  'score.<key>': 'double',
  'score.ratio.<key>': 'double',
  'score.total': 'double',
  'score.weight.<key>': 'double',
  'sentry.action': 'string',
  'sentry.browser.name': 'string',
  'sentry.browser.version': 'string',
  'sentry.cancellation_reason': 'string',
  'sentry.category': 'string',
  'sentry.client_sample_rate': 'double',
  'sentry.description': 'string',
  'sentry.dist': 'string',
  'sentry.domain': 'string',
  'sentry.dsc.environment': 'string',
  'sentry.dsc.project_id': 'string',
  'sentry.dsc.public_key': 'string',
  'sentry.dsc.release': 'string',
  'sentry.dsc.sampled': 'boolean',
  'sentry.dsc.sample_rate': 'string',
  'sentry.dsc.trace_id': 'string',
  'sentry.dsc.transaction': 'string',
  'sentry.environment': 'string',
  'sentry.event.serialized_breadcrumbs': 'string',
  'sentry.event.serialized_contexts': 'string',
  'sentry.event.serialized_extra': 'string',
  'sentry.exclusive_time': 'double',
  'sentry.frames.frozen': 'integer',
  'sentry.frames.slow': 'integer',
  'sentry.frames.total': 'integer',
  'sentry.graphql.operation': 'string',
  'sentry.group': 'string',
  'sentry.http.prefetch': 'boolean',
  'sentry.idle_span_finish_reason': 'string',
  'sentry.is_remote': 'boolean',
  'sentry.kind': 'string',
  'sentry.main_thread': 'boolean',
  'sentry.message.parameter.<key>': 'string',
  'sentry.message.template': 'string',
  'sentry.metric.source': 'string',
  'sentry.mobile': 'boolean',
  'sentry.module.<key>': 'string',
  'sentry.nextjs.ssr.function.route': 'string',
  'sentry.nextjs.ssr.function.type': 'string',
  'sentry.normalized_db_query': 'string',
  'sentry.normalized_db_query.hash': 'string',
  'sentry.normalized_description': 'string',
  'sentry.observed_timestamp_nanos': 'string',
  'sentry.op': 'string',
  'sentry.origin': 'string',
  'sentry.pageload.span_id': 'string',
  'sentry.platform': 'string',
  'sentry.profiler_id': 'string',
  'sentry.profile_id': 'string',
  'sentry.relay.ingress': 'string',
  'sentry.relay.pipeline': 'string',
  'sentry.release': 'string',
  'sentry.replay_id': 'string',
  'sentry.replay_is_buffering': 'boolean',
  'sentry.report_event': 'string',
  'sentry.sdk.integrations': 'string[]',
  'sentry.sdk.name': 'string',
  'sentry.sdk.version': 'string',
  'sentry.segment.id': 'string',
  'sentry.segment_id': 'string',
  'sentry.segment.name': 'string',
  'sentry.segment.name.source': 'string',
  'sentry.server_sample_rate': 'double',
  'sentry.source': 'string',
  'sentry.span.source': 'string',
  'sentry.status': 'string',
  'sentry.status_code': 'integer',
  'sentry.status.message': 'string',
  'sentry.sveltekit.navigation.from': 'string',
  'sentry.sveltekit.navigation.to': 'string',
  'sentry.sveltekit.navigation.type': 'string',
  'sentry.thread.id': 'integer',
  'sentry.timestamp.sequence': 'integer',
  'sentry.trace_lifecycle': 'string',
  'sentry.trace.parent_span_id': 'string',
  'sentry.trace.status': 'string',
  'sentry.transaction': 'string',
  'sentry.user.email': 'string',
  'sentry.user.geo.city': 'string',
  'sentry.user.geo.country_code': 'string',
  'sentry.user.geo.region': 'string',
  'sentry.user.geo.subdivision': 'string',
  'sentry.user.id': 'string',
  'sentry.user.ip': 'string',
  'sentry.user.username': 'string',
  'server.address': 'string',
  server_name: 'string',
  'server.port': 'integer',
  'service.name': 'string',
  'service.version': 'string',
  'session.id': 'string',
  stall_percentage: 'double',
  stall_total_time: 'double',
  'starlette.middleware_name': 'string',
  'starlite.middleware_name': 'string',
  'state.type': 'string',
  'subprocess.pid': 'integer',
  'thread.id': 'integer',
  'thread.name': 'string',
  'timber.tag': 'string',
  time_to_full_display: 'double',
  time_to_initial_display: 'double',
  transaction: 'string',
  'trpc.procedure_path': 'string',
  'trpc.procedure_type': 'string',
  ttfb: 'double',
  'ttfb.requestTime': 'double',
  type: 'string',
  'ui.component_name': 'string',
  'ui.contributes_to_ttfd': 'boolean',
  'ui.contributes_to_ttid': 'boolean',
  'ui.element.height': 'integer',
  'ui.element.id': 'string',
  'ui.element.identifier': 'string',
  'ui.element.load_time': 'double',
  'ui.element.paint_type': 'string',
  'ui.element.render_time': 'double',
  'ui.element.type': 'string',
  'ui.element.url': 'string',
  'ui.element.width': 'integer',
  url: 'string',
  'url.domain': 'string',
  'url.fragment': 'string',
  'url.full': 'string',
  'url.path': 'string',
  'url.path.parameter.<key>': 'string',
  'url.port': 'integer',
  'url.query': 'string',
  'url.same_origin': 'boolean',
  'url.scheme': 'string',
  'url.template': 'string',
  'user_agent.original': 'string',
  'user.email': 'string',
  'user.full_name': 'string',
  'user.geo.city': 'string',
  'user.geo.country_code': 'string',
  'user.geo.region': 'string',
  'user.geo.subdivision': 'string',
  'user.hash': 'string',
  'user.id': 'string',
  'user.ip_address': 'string',
  'user.name': 'string',
  'user.roles': 'string[]',
  'vercel.branch': 'string',
  'vercel.build_id': 'string',
  'vercel.deployment_id': 'string',
  'vercel.destination': 'string',
  'vercel.edge_type': 'string',
  'vercel.entrypoint': 'string',
  'vercel.execution_region': 'string',
  'vercel.id': 'string',
  'vercel.ja3_digest': 'string',
  'vercel.ja4_digest': 'string',
  'vercel.log_type': 'string',
  'vercel.path': 'string',
  'vercel.project_id': 'string',
  'vercel.project_name': 'string',
  'vercel.proxy.cache_id': 'string',
  'vercel.proxy.client_ip': 'string',
  'vercel.proxy.host': 'string',
  'vercel.proxy.lambda_region': 'string',
  'vercel.proxy.method': 'string',
  'vercel.proxy.path': 'string',
  'vercel.proxy.path_type': 'string',
  'vercel.proxy.path_type_variant': 'string',
  'vercel.proxy.referer': 'string',
  'vercel.proxy.region': 'string',
  'vercel.proxy.response_byte_size': 'integer',
  'vercel.proxy.scheme': 'string',
  'vercel.proxy.status_code': 'integer',
  'vercel.proxy.timestamp': 'integer',
  'vercel.proxy.user_agent': 'string[]',
  'vercel.proxy.vercel_cache': 'string',
  'vercel.proxy.vercel_id': 'string',
  'vercel.proxy.waf_action': 'string',
  'vercel.proxy.waf_rule_id': 'string',
  'vercel.request_id': 'string',
  'vercel.source': 'string',
  'vercel.status_code': 'integer',
};

export const ATTRIBUTE_METADATA: Record<AttributeName, AttributeMetadata> = {
  address: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'server.address',
      reason: 'Old namespace-less attribute, to be replaced with server.address for span-first future',
      status: 'backfill',
    },
    aliases: ['server.address', 'http.server_name', 'net.host.name', 'http.host', 'server_name'],
  },
  'ai.citations': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'ai.completion_tokens.used': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.usage.output_tokens',
      status: 'backfill',
    },
    aliases: ['gen_ai.usage.output_tokens', 'gen_ai.usage.completion_tokens'],
  },
  'ai.documents': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'ai.finish_reason': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.response.finish_reasons',
      status: 'backfill',
    },
    aliases: ['gen_ai.response.finish_reasons'],
  },
  'ai.frequency_penalty': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.request.frequency_penalty',
      status: 'backfill',
    },
    aliases: ['gen_ai.request.frequency_penalty'],
  },
  'ai.function_call': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.name',
      status: 'backfill',
    },
    aliases: ['gen_ai.tool.name', 'mcp.tool.name'],
  },
  'ai.generation_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.response.id',
      status: 'backfill',
    },
    aliases: ['gen_ai.response.id'],
  },
  'ai.input_messages': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.input.messages',
      status: 'backfill',
    },
    aliases: ['gen_ai.request.messages'],
  },
  'ai.is_search_required': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'ai.metadata': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'ai.model_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.request.model',
      status: 'backfill',
    },
    aliases: ['gen_ai.request.model'],
  },
  'ai.model.provider': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.provider.name',
      status: 'backfill',
    },
    aliases: ['gen_ai.provider.name', 'gen_ai.system'],
  },
  'ai.pipeline.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.pipeline.name',
      status: 'backfill',
    },
    aliases: ['gen_ai.pipeline.name'],
  },
  'ai.preamble': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.system_instructions',
      status: 'backfill',
    },
    aliases: ['gen_ai.system_instructions'],
  },
  'ai.presence_penalty': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.request.presence_penalty',
      status: 'backfill',
    },
    aliases: ['gen_ai.request.presence_penalty'],
  },
  'ai.prompt.messages': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.input.messages',
      status: 'backfill',
    },
    aliases: ['gen_ai.input.messages', 'ai.texts', 'gen_ai.prompt'],
  },
  'ai.prompt_tokens.used': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.usage.input_tokens',
      status: 'backfill',
    },
    aliases: ['gen_ai.usage.prompt_tokens', 'gen_ai.usage.input_tokens'],
  },
  'ai.raw_prompting': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'ai.responses': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.output.messages',
      status: 'backfill',
    },
  },
  'ai.response_format': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'ai.response.text': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.output.messages',
      status: 'backfill',
    },
    aliases: ['gen_ai.output.messages', 'ai.response.toolCalls'],
  },
  'ai.response.toolCalls': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.output.messages',
      status: 'backfill',
    },
    aliases: ['gen_ai.output.messages', 'ai.response.text'],
  },
  'ai.search_queries': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'ai.search_results': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'ai.seed': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.request.seed',
      status: 'backfill',
    },
    aliases: ['gen_ai.request.seed'],
  },
  'ai.streaming': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.response.streaming',
      status: 'backfill',
    },
    aliases: ['gen_ai.response.streaming'],
  },
  'ai.tags': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'ai.temperature': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.request.temperature',
      status: 'backfill',
    },
    aliases: ['gen_ai.request.temperature'],
  },
  'ai.texts': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.input.messages',
      status: 'backfill',
    },
    aliases: ['gen_ai.input.messages', 'ai.prompt.messages', 'gen_ai.prompt'],
  },
  'ai.toolCall.args': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.call.arguments',
      status: 'backfill',
    },
    aliases: ['gen_ai.tool.call.arguments', 'gen_ai.tool.input'],
  },
  'ai.toolCall.result': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.call.result',
      status: 'backfill',
    },
    aliases: ['gen_ai.tool.call.result', 'gen_ai.tool.output', 'gen_ai.tool.message', 'mcp.tool.result.content'],
  },
  'ai.tools': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.definitions',
      status: 'backfill',
    },
  },
  'ai.tool_calls': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.output.messages',
      status: 'backfill',
    },
  },
  'ai.top_k': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.request.top_k',
      status: 'backfill',
    },
    aliases: ['gen_ai.request.top_k'],
  },
  'ai.top_p': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.request.top_p',
      status: 'backfill',
    },
    aliases: ['gen_ai.request.top_p'],
  },
  'ai.total_cost': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.cost.total_tokens',
      status: 'backfill',
    },
    aliases: ['gen_ai.cost.total_tokens'],
  },
  'ai.total_tokens.used': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.usage.total_tokens',
      status: 'backfill',
    },
    aliases: ['gen_ai.usage.total_tokens'],
  },
  'ai.warnings': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'angular.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'app.app_build': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.build',
      reason: 'Deprecated in favor of app.build',
      status: 'backfill',
    },
    aliases: ['app.build'],
  },
  'app.app_identifier': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.identifier',
      reason: 'Deprecated in favor of app.identifier',
      status: 'backfill',
    },
    aliases: ['app.identifier'],
  },
  'app.app_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.name',
      reason: 'Deprecated in favor of app.name',
      status: 'backfill',
    },
    aliases: ['app.name'],
  },
  'app.app_start_time': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.start_time',
      reason: 'Deprecated in favor of app.start_time',
      status: 'backfill',
    },
    aliases: ['app.start_time'],
  },
  'app.app_version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.version',
      reason: 'Deprecated in favor of app.version',
      status: 'backfill',
    },
    aliases: ['app.version'],
  },
  'app.build': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['app.app_build'],
  },
  'app.identifier': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['app.app_identifier'],
  },
  'app.in_foreground': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'app.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['app.app_name'],
  },
  app_start_cold: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.start.cold.value',
      reason:
        'Replaced by app.vitals.start.cold.value to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.start.cold.value'],
  },
  'app.start_time': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['app.app_start_time'],
  },
  app_start_type: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.start.type',
      reason:
        'Replaced by app.vitals.start.type to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.start.type'],
  },
  app_start_warm: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.start.warm.value',
      reason:
        'Replaced by app.vitals.start.warm.value to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.start.warm.value'],
  },
  'app.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['app.app_version'],
  },
  'app.vitals.frames.delay.value': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['frames.delay'],
  },
  'app.vitals.frames.frozen.count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['frames.frozen', 'sentry.frames.frozen'],
  },
  'app.vitals.frames.frozen.rate': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['frames_frozen_rate'],
  },
  'app.vitals.frames.slow.count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['frames.slow', 'sentry.frames.slow'],
  },
  'app.vitals.frames.slow.rate': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['frames_slow_rate'],
  },
  'app.vitals.frames.total.count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['frames.total', 'sentry.frames.total'],
  },
  'app.vitals.stall.duration': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['stall_total_time'],
  },
  'app.vitals.stall.percentage': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['stall_percentage'],
  },
  'app.vitals.start.cold.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['app_start_cold'],
  },
  'app.vitals.start.prewarmed': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'app.vitals.start.reason': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'app.vitals.start.screen': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'app.vitals.start.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['app_start_type'],
  },
  'app.vitals.start.warm.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['app_start_warm'],
  },
  'app.vitals.ttfd.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['time_to_full_display'],
  },
  'app.vitals.ttid.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['time_to_initial_display'],
  },
  'art.gc.blocking_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.gc.blocking_time': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.gc.pre_oome_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.gc.total_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.gc.total_time': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.gc.waiting_time': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.memory.free': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.memory.free_until_gc': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.memory.free_until_oome': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.memory.max': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'art.memory.total': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'aws.cloudwatch.logs.log_group': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'aws.cloudwatch.logs.log_stream': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'aws.cloudwatch.logs.url': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'aws.dynamodb.attribute_definitions': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.consistent_read': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.consumed_capacity': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.exclusive_start_table': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.global_secondary_indexes': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.global_secondary_index_updates': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.index_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.item_collection_metrics': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.limit': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.local_secondary_indexes': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.projection': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.provisioned_read_capacity': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.provisioned_write_capacity': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.scanned_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.scan_forward': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.segment': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.select': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.table_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.table_names': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.dynamodb.total_segments': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.extended_request_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['aws.request.extended_id'],
  },
  'aws.kinesis.stream_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['aws.kinesis.stream.name'],
  },
  'aws.kinesis.stream.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'aws.kinesis.stream_name',
      reason:
        'This attribute is being deprecated in favor of aws.kinesis.stream_name, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['aws.kinesis.stream_name'],
  },
  'aws.lambda.aws_request_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'faas.invocation_id',
      reason: 'This attribute is being deprecated in favor of faas.invocation_id',
      status: 'backfill',
    },
    aliases: ['faas.invocation_id', 'faas.execution'],
  },
  'aws.lambda.execution_duration_in_millis': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'aws.lambda.function_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'faas.name',
      reason: 'Use the OTel-aligned faas.name attribute instead',
      status: 'backfill',
    },
    aliases: ['faas.name'],
  },
  'aws.lambda.function_version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'faas.version',
      reason: 'Use the OTel-aligned faas.version attribute instead',
      status: 'backfill',
    },
    aliases: ['faas.version'],
  },
  'aws.lambda.invoked_arn': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['aws.lambda.invoked_function_arn'],
  },
  'aws.lambda.invoked_function_arn': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'aws.lambda.invoked_arn',
      reason: 'This attribute is being deprecated in favor of aws.lambda.invoked_arn',
      status: 'backfill',
    },
    aliases: ['aws.lambda.invoked_arn'],
  },
  'aws.lambda.remaining_time_in_millis': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'aws.log.group.names': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.log.stream.names': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.operation_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'rpc.method',
      reason: 'This attribute is being deprecated in favor of rpc.method, which is the framework-agnostic replacement.',
      status: 'backfill',
    },
    aliases: ['rpc.method'],
  },
  aws_region: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'cloud.region',
      status: 'backfill',
    },
    aliases: ['cloud.region', 'gcp_region'],
  },
  'aws.request.extended_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'aws.extended_request_id',
      reason:
        'This attribute is being deprecated in favor of aws.extended_request_id, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['aws.extended_request_id'],
  },
  'aws.request_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['aws.request.id'],
  },
  'aws.request.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'aws.request_id',
      reason: 'This attribute is being deprecated in favor of aws.request_id, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['aws.request_id'],
  },
  'aws.request.url': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'url.full',
      reason: 'This attribute is being deprecated in favor of url.full, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['url.full', 'http.url', 'url'],
  },
  'aws.s3.bucket': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.secretsmanager.secret.arn': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.sns.topic.arn': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.step_functions.activity.arn': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'aws.step_functions.state_machine.arn': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  blocked_main_thread: {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.bfcache.frame': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.bfcache.not_restored_reason_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.bfcache.outcome': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.bfcache.reason': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.browser.name'],
  },
  'browser.performance.navigation.activation_start': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['performance.activationStart'],
  },
  'browser.performance.time_origin': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['performance.timeOrigin'],
  },
  'browser.report.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.script.invoker': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.script.invoker_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.script.source_char_position': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.browser.version'],
  },
  'browser.web_vital.cls.report_event': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.web_vital.cls.source.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    aliases: ['cls.source.<key>'],
  },
  'browser.web_vital.cls.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['cls'],
  },
  'browser.web_vital.fcp.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['fcp'],
  },
  'browser.web_vital.fp.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['fp'],
  },
  'browser.web_vital.inp.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['inp'],
  },
  'browser.web_vital.lcp.element': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['lcp.element'],
  },
  'browser.web_vital.lcp.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['lcp.id'],
  },
  'browser.web_vital.lcp.load_time': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['lcp.loadTime'],
  },
  'browser.web_vital.lcp.render_time': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['lcp.renderTime'],
  },
  'browser.web_vital.lcp.report_event': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'browser.web_vital.lcp.size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['lcp.size'],
  },
  'browser.web_vital.lcp.url': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['lcp.url'],
  },
  'browser.web_vital.lcp.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['lcp'],
  },
  'browser.web_vital.ttfb.request_time': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['ttfb.requestTime'],
  },
  'browser.web_vital.ttfb.value': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['ttfb'],
  },
  'cache.hit': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cache.item_size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cache.key': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cache.operation': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cache.ttl': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cache.write': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  channel: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'client.address': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['http.client_ip'],
  },
  'client.port': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'cloudflare.d1.duration': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.d1.query_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'db.operation.name',
      status: 'backfill',
    },
    aliases: ['db.operation.name', 'db.operation', 'redis.command'],
  },
  'cloudflare.d1.rows_read': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.d1.rows_written': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.durable_object.query.bindings': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.durable_object.response.rows_read': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.durable_object.response.rows_written': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.r2.bucket': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.r2.operation': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.r2.request.delimiter': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.r2.request.key': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.r2.request.part_number': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.r2.request.prefix': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.workflow.attempt': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.workflow.retries.backoff': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.workflow.retries.delay': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.workflow.retries.limit': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloudflare.workflow.timeout': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'cloud.account.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'cloud.availability_zone': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'cloud.platform': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'cloud.provider': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'cloud.region': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['aws_region', 'gcp_region'],
  },
  'cloud.resource_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['faas.id'],
  },
  cls: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.cls.value',
      reason: 'The CLS web vital is now recorded as a browser.web_vital.cls.value attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.cls.value'],
  },
  'cls.source.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    deprecation: {
      replacement: 'browser.web_vital.cls.source.<key>',
      reason: 'The CLS source is now recorded as a browser.web_vital.cls.source.<key> attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.cls.source.<key>'],
  },
  code: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'rpc.response.status_code',
      status: 'backfill',
    },
    aliases: ['rpc.grpc.status_code', 'rpc.response.status_code'],
  },
  'code.filepath': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'code.file.path',
    },
    aliases: ['code.file.path'],
  },
  'code.file.path': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['code.filepath'],
  },
  'code.function': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['code.function.name', 'django.function_name'],
  },
  'code.function.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['code.function', 'django.function_name'],
  },
  'code.lineno': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'code.line.number',
    },
    aliases: ['code.line.number'],
  },
  'code.line.number': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['code.lineno'],
  },
  'code.namespace': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  connectionType: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'network.connection.type',
      reason: 'Old namespace-less attribute, to be replaced with network.connection.type for span-first future',
      status: 'backfill',
    },
    aliases: ['network.connection.type', 'device.connection_type'],
  },
  'connection.rtt': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'network.connection.rtt',
      reason:
        'Old attribute name (no official namespace), to be replaced with network.connection.rtt for span-first future',
      status: 'backfill',
    },
    aliases: ['network.connection.rtt'],
  },
  'culture.calendar': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'culture.display_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'culture.is_24_hour_format': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'culture.locale': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'culture.timezone': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'db.collection.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['db.mongodb.collection'],
  },
  'db.driver.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'db.mongodb.collection': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'db.collection.name',
      reason:
        'This attribute is being deprecated in favor of db.collection.name, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['db.collection.name'],
  },
  'db.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'db.namespace',
    },
    aliases: ['db.namespace'],
  },
  'db.namespace': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['db.name'],
  },
  'db.operation': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'db.operation.name',
      status: 'normalize',
    },
    aliases: ['db.operation.name', 'cloudflare.d1.query_type', 'redis.command'],
  },
  'db.operation.batch.size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'db.operation.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['db.operation', 'cloudflare.d1.query_type', 'redis.command'],
  },
  'db.params': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'db.query.parameter.<key>',
      reason:
        'Instead of adding every binding in the db.params attribute, add them as individual entries with db.query.parameter.<key>.',
    },
  },
  'db.query.parameter.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'db.query.summary': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'db.query.text': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['db.statement', 'query'],
  },
  'db.redis.connection': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'db.redis.key': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['redis.key'],
  },
  'db.redis.parameters': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'db.response.status_code': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'db.sql.bindings': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'db.query.parameter.<key>',
      reason:
        'Instead of adding every binding in the db.sql.bindings attribute, add them as individual entires with db.query.parameter.<key>.',
    },
  },
  'db.statement': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'db.query.text',
      reason:
        'While this attribute never specifically required parameterization, the replacement, db.query.text, does.',
      status: 'normalize',
    },
    aliases: ['db.query.text', 'query'],
  },
  'db.stored_procedure.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'db.system': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'db.system.name',
      status: 'backfill',
    },
    aliases: ['db.system.name'],
  },
  'db.system.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['db.system'],
  },
  'db.user': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  deviceMemory: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'device.memory.estimated_capacity',
      reason:
        'Old namespace-less attribute, to be replaced with device.memory.estimated_capacity for span-first future',
      status: 'backfill',
    },
    aliases: ['device.memory.estimated_capacity'],
  },
  'device.archs': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.battery_level': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.battery_temperature': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.boot_time': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.brand': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.charging': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.chipset': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.class': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.connection_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'network.connection.type',
      reason: 'This attribute is being deprecated in favor of network.connection.type',
      status: 'backfill',
    },
    aliases: ['network.connection.type', 'connectionType'],
  },
  'device.cpu_description': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.external_free_storage': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.external_storage_size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.family': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.free_memory': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.free_storage': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'device.locale': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.low_memory': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.low_power_mode': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.manufacturer': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'device.memory.estimated_capacity': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['deviceMemory'],
  },
  'device.memory_size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.model': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.model_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.name': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.online': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.orientation': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.processor_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['hardwareConcurrency'],
  },
  'device.processor_frequency': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.screen_density': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.screen_dpi': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.screen_height_pixels': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.screen_width_pixels': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.simulator': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.storage_size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.thermal_state': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.timezone': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'device.usable_memory': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  dist: {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.dist',
      reason: 'This attribute is being deprecated in favor of sentry.dist.',
      status: 'backfill',
    },
    aliases: ['sentry.dist'],
  },
  'django.function_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'code.function.name',
      reason:
        'This attribute is being deprecated in favor of code.function.name, which is the framework-agnostic replacement.',
      status: 'backfill',
    },
    aliases: ['code.function.name', 'code.function'],
  },
  'django.middleware_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'middleware.name',
      reason:
        'This attribute is being deprecated in favor of middleware.name, which is the framework-agnostic replacement.',
      status: 'backfill',
    },
    aliases: ['middleware.name'],
  },
  effectiveConnectionType: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'network.connection.effective_type',
      reason:
        'Old namespace-less attribute, to be replaced with network.connection.effective_type for span-first future',
      status: 'backfill',
    },
    aliases: ['network.connection.effective_type'],
  },
  environment: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.environment',
      status: 'normalize',
    },
    aliases: ['sentry.environment'],
  },
  'error.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'event.id': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'event.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'exception.escaped': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'exception.message': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'exception.stacktrace': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'exception.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'faas.coldstart': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'faas.cron': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'faas.duration_in_ms': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'faas.entry_point': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'faas.execution': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'faas.invocation_id',
      reason:
        'This attribute is being deprecated in favor of faas.invocation_id, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['faas.invocation_id', 'aws.lambda.aws_request_id'],
  },
  'faas.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'cloud.resource_id',
      reason:
        'This attribute is being deprecated in favor of cloud.resource_id, which is the OTel-aligned replacement (renamed in OTel semantic conventions v1.19.0).',
      status: 'backfill',
    },
    aliases: ['cloud.resource_id'],
  },
  'faas.identity': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'faas.invocation_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['aws.lambda.aws_request_id', 'faas.execution'],
  },
  'faas.invoked_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'faas.invoked_provider': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'faas.invoked_region': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'faas.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['aws.lambda.function_name'],
  },
  'faas.time': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'faas.trigger': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'faas.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['aws.lambda.function_version'],
  },
  fcp: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.fcp.value',
      reason: 'This attribute is being deprecated in favor of browser.web_vital.fcp.value',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.fcp.value'],
  },
  'file.path': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'File paths can contain end-user paths (e.g. from stack traces) that may be sensitive.',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'file.size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'flag.evaluation.<key>': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  fp: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.fp.value',
      reason: 'This attribute is being deprecated in favor of browser.web_vital.fp.value',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.fp.value'],
  },
  'frames.delay': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.frames.delay.value',
      reason:
        'Replaced by app.vitals.frames.delay.value to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.frames.delay.value'],
  },
  'frames.frozen': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.frames.frozen.count',
      reason:
        'Replaced by app.vitals.frames.frozen.count to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.frames.frozen.count', 'sentry.frames.frozen'],
  },
  frames_frozen_rate: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.frames.frozen.rate',
      reason:
        'Replaced by app.vitals.frames.frozen.rate to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.frames.frozen.rate'],
  },
  'frames.slow': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.frames.slow.count',
      reason:
        'Replaced by app.vitals.frames.slow.count to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.frames.slow.count', 'sentry.frames.slow'],
  },
  frames_slow_rate: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.frames.slow.rate',
      reason:
        'Replaced by app.vitals.frames.slow.rate to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.frames.slow.rate'],
  },
  'frames.total': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.frames.total.count',
      reason:
        'Replaced by app.vitals.frames.total.count to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.frames.total.count', 'sentry.frames.total'],
  },
  fs_error: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'error.type',
      reason: 'This attribute is not part of the OpenTelemetry specification and error.type fits much better.',
    },
  },
  'gcp.function.context.event_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gcp.function.context.event_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gcp.function.context.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gcp.function.context.resource': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gcp.function.context.source': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gcp.function.context.specversion': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gcp.function.context.time': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gcp.function.context.timestamp': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gcp.function.context.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gcp.project.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  gcp_region: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'cloud.region',
      status: 'backfill',
    },
    aliases: ['cloud.region', 'aws_region'],
  },
  'gen_ai.agent.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'gen_ai.context.utilization': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.context.window_size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.conversation.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'gen_ai.cost.cache_creation.input_tokens': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.cost.cache_read.input_tokens': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.cost.input_tokens': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.cost.output_tokens': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.cost.reasoning.output_tokens': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.cost.total_tokens': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['ai.total_cost'],
  },
  'gen_ai.embeddings.input': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.function_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.input.messages': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.texts', 'ai.prompt.messages', 'gen_ai.prompt'],
  },
  'gen_ai.operation.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'gen_ai.operation.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.output.messages': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.response.toolCalls', 'ai.response.text'],
  },
  'gen_ai.pipeline.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['ai.pipeline.name'],
  },
  'gen_ai.prompt': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.input.messages',
      reason: 'Deprecated from OTEL, use gen_ai.input.messages with the new format instead.',
      status: 'backfill',
    },
    aliases: ['gen_ai.input.messages', 'ai.texts', 'ai.prompt.messages'],
  },
  'gen_ai.prompt.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Prompt names may reveal user behavior patterns or sensitive operations',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['mcp.prompt.name'],
  },
  'gen_ai.provider.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.model.provider', 'gen_ai.system'],
  },
  'gen_ai.request.available_tools': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.definitions',
      status: 'normalize',
    },
  },
  'gen_ai.request.frequency_penalty': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.frequency_penalty'],
  },
  'gen_ai.request.max_tokens': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'gen_ai.request.messages': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.input.messages',
      status: 'transform',
      transformation: 'gen_ai_request_messages_to_input_messages',
    },
    aliases: ['ai.input_messages'],
  },
  'gen_ai.request.model': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.model_id'],
  },
  'gen_ai.request.presence_penalty': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.presence_penalty'],
  },
  'gen_ai.request.reasoning.level': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'gen_ai.request.seed': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.seed'],
  },
  'gen_ai.request.stop_sequences': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'gen_ai.request.temperature': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.temperature'],
  },
  'gen_ai.request.top_k': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.top_k'],
  },
  'gen_ai.request.top_p': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.top_p'],
  },
  'gen_ai.response.finish_reason': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.response.finish_reasons',
      status: 'normalize',
    },
    aliases: ['gen_ai.response.finish_reasons'],
  },
  'gen_ai.response.finish_reasons': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.finish_reason', 'gen_ai.response.finish_reason'],
  },
  'gen_ai.response.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.generation_id'],
  },
  'gen_ai.response.model': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'gen_ai.response.streaming': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['ai.streaming'],
  },
  'gen_ai.response.text': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.output.messages',
      status: 'transform',
      transformation: 'gen_ai_response_to_output_messages',
    },
  },
  'gen_ai.response.time_to_first_chunk': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['gen_ai.response.time_to_first_token'],
  },
  'gen_ai.response.time_to_first_token': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.response.time_to_first_chunk',
      status: 'backfill',
    },
    aliases: ['gen_ai.response.time_to_first_chunk'],
  },
  'gen_ai.response.tokens_per_second': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'gen_ai.response.tool_calls': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.output.messages',
      status: 'transform',
      transformation: 'gen_ai_response_to_output_messages',
    },
  },
  'gen_ai.system': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.provider.name',
      status: 'normalize',
    },
    aliases: ['ai.model.provider', 'gen_ai.provider.name'],
  },
  'gen_ai.system_instructions': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.preamble'],
  },
  'gen_ai.system.message': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.system_instructions',
      status: 'backfill',
    },
  },
  'gen_ai.tool.call.arguments': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['gen_ai.tool.input', 'ai.toolCall.args'],
  },
  'gen_ai.tool.call.result': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['gen_ai.tool.output', 'gen_ai.tool.message', 'mcp.tool.result.content', 'ai.toolCall.result'],
  },
  'gen_ai.tool.definitions': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'gen_ai.tool.description': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'gen_ai.tool.input': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.call.arguments',
      status: 'normalize',
    },
    aliases: ['gen_ai.tool.call.arguments', 'ai.toolCall.args'],
  },
  'gen_ai.tool.message': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.call.result',
      status: 'normalize',
    },
    aliases: ['gen_ai.tool.call.result', 'gen_ai.tool.output', 'mcp.tool.result.content', 'ai.toolCall.result'],
  },
  'gen_ai.tool.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.function_call', 'mcp.tool.name'],
  },
  'gen_ai.tool.output': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.call.result',
      status: 'normalize',
    },
    aliases: ['gen_ai.tool.call.result', 'gen_ai.tool.message', 'mcp.tool.result.content', 'ai.toolCall.result'],
  },
  'gen_ai.tool.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      reason: 'The gen_ai.tool.type attribute is deprecated and should no longer be set.',
    },
  },
  'gen_ai.usage.cache_creation.input_tokens': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['gen_ai.usage.input_tokens.cache_write'],
  },
  'gen_ai.usage.cache_read.input_tokens': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['gen_ai.usage.input_tokens.cached'],
  },
  'gen_ai.usage.completion_tokens': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.usage.output_tokens',
      status: 'backfill',
    },
    aliases: ['ai.completion_tokens.used', 'gen_ai.usage.output_tokens'],
  },
  'gen_ai.usage.input_tokens': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.prompt_tokens.used', 'gen_ai.usage.prompt_tokens'],
  },
  'gen_ai.usage.input_tokens.cached': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.usage.cache_read.input_tokens',
      status: 'backfill',
    },
    aliases: ['gen_ai.usage.cache_read.input_tokens'],
  },
  'gen_ai.usage.input_tokens.cache_write': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.usage.cache_creation.input_tokens',
      status: 'backfill',
    },
    aliases: ['gen_ai.usage.cache_creation.input_tokens'],
  },
  'gen_ai.usage.output_tokens': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['ai.completion_tokens.used', 'gen_ai.usage.completion_tokens'],
  },
  'gen_ai.usage.output_tokens.reasoning': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.usage.reasoning.output_tokens',
      status: 'backfill',
    },
    aliases: ['gen_ai.usage.reasoning.output_tokens'],
  },
  'gen_ai.usage.prompt_tokens': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.usage.input_tokens',
      status: 'backfill',
    },
    aliases: ['ai.prompt_tokens.used', 'gen_ai.usage.input_tokens'],
  },
  'gen_ai.usage.reasoning.output_tokens': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['gen_ai.usage.output_tokens.reasoning'],
  },
  'gen_ai.usage.total_tokens': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['ai.total_tokens.used'],
  },
  'graphql.document': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason:
        'The document may contain sensitive information in arguments or variables. Instrumentation should redact sensitive information when possible.',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'graphql.operation.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'graphql.operation.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'grpc.error.bad_request.field_violations': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.debug_info.detail': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.debug_info.stack_entries': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.error_info.domain': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.error_info.metadata.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'grpc.error.error_info.reason': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.precondition_failure.violations': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.quota_failure.violations': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.resource_info.description': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.resource_info.owner': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.resource_info.resource_name': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.resource_info.resource_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'grpc.error.retry_info.retry_delay_ms': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  hardwareConcurrency: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'device.processor_count',
      reason: 'Old namespace-less attribute, to be replaced with device.processor_count for span-first future',
      status: 'backfill',
    },
    aliases: ['device.processor_count'],
  },
  'http.client_ip': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'client.address',
    },
    aliases: ['client.address'],
  },
  'http.decoded_response_content_length': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.flavor': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.protocol.version',
    },
    aliases: ['network.protocol.version', 'net.protocol.version'],
  },
  'http.fragment': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.host': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'server.address',
      reason: 'Deprecated, use one of `server.address` or `client.address`, depending on the usage',
    },
    aliases: ['address', 'server.address', 'client.address', 'http.server_name', 'net.host.name', 'server_name'],
  },
  'http.method': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'http.request.method',
      status: 'backfill',
    },
    aliases: ['http.request.method', 'http.request_method', 'method'],
  },
  'http.query': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason:
        'Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.body.data': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.connection_end': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.connect_start': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.domain_lookup_end': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.domain_lookup_start': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.fetch_start': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.header.<key>': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'http.request.method': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['method', 'http.method', 'http.request_method'],
  },
  'http.request_method': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'http.request.method',
      status: 'backfill',
    },
    aliases: ['method', 'http.method', 'http.request.method'],
  },
  'http.request.redirect_end': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.redirect_start': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.request_start': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.resend_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.response_end': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.response_start': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.same_origin': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['url.same_origin'],
  },
  'http.request.secure_connection_start': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.time_to_first_byte': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.request.worker_start': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.response.body.size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['http.response_content_length', 'http.response.header.content-length'],
  },
  'http.response_content_length': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'http.response.body.size',
      status: 'backfill',
    },
    aliases: ['http.response.body.size', 'http.response.header.content-length'],
  },
  'http.response.header.content-length': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['http.response_content_length', 'http.response.body.size'],
  },
  'http.response.header.<key>': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'http.response.size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['http.response_transfer_size'],
  },
  'http.response.status_code': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['http.status_code'],
  },
  'http.response_transfer_size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'http.response.size',
      status: 'backfill',
    },
    aliases: ['http.response.size'],
  },
  'http.route': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['route'],
  },
  'http.scheme': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'url.scheme',
    },
    aliases: ['url.scheme'],
  },
  'http.server_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'server.address',
    },
    aliases: ['address', 'server.address', 'net.host.name', 'http.host', 'server_name'],
  },
  'http.server.request.time_in_queue': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'http.status_code': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'http.response.status_code',
    },
    aliases: ['http.response.status_code'],
  },
  'http.target': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'url.path',
      reason: 'This attribute is being deprecated in favor of url.path and url.query',
    },
  },
  'http.url': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'url.full',
    },
    aliases: ['url.full', 'url', 'aws.request.url'],
  },
  'http.user_agent': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'user_agent.original',
    },
    aliases: ['user_agent.original'],
  },
  id: {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  inp: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.inp.value',
      reason: 'The INP web vital is now recorded as a browser.web_vital.inp.value attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.inp.value'],
  },
  'jsonrpc.protocol.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'jsonrpc.request.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['mcp.request.id'],
  },
  'jvm.gc.action': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'jvm.gc.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'jvm.memory.pool.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'jvm.memory.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'jvm.thread.daemon': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'jvm.thread.state': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'koa.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      reason:
        'No single replacement. SDKs should use http.route for router layers and code.function.name for middleware layers instead.',
    },
  },
  'koa.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  lcp: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.lcp.value',
      reason: 'The LCP web vital is now recorded as a browser.web_vital.lcp.value attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.lcp.value'],
  },
  'lcp.element': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.lcp.element',
      reason: 'The LCP element is now recorded as a browser.web_vital.lcp.element attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.lcp.element'],
  },
  'lcp.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.lcp.id',
      reason: 'The LCP id is now recorded as a browser.web_vital.lcp.id attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.lcp.id'],
  },
  'lcp.loadTime': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.lcp.load_time',
      reason: 'The LCP load time is now recorded as a browser.web_vital.lcp.load_time attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.lcp.load_time'],
  },
  'lcp.renderTime': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.lcp.render_time',
      reason: 'The LCP render time is now recorded as a browser.web_vital.lcp.render_time attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.lcp.render_time'],
  },
  'lcp.size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.lcp.size',
      reason: 'The LCP size is now recorded as a browser.web_vital.lcp.size attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.lcp.size'],
  },
  'lcp.url': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.lcp.url',
      reason: 'The LCP url is now recorded as a browser.web_vital.lcp.url attribute.',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.lcp.url'],
  },
  'litestar.middleware_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'middleware.name',
      reason:
        'This attribute is being deprecated in favor of middleware.name, which is the framework-agnostic replacement.',
      status: 'backfill',
    },
    aliases: ['middleware.name'],
  },
  'logger.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.cancelled.reason': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Cancellation reasons may contain user-specific or sensitive information',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.cancelled.request_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.client.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.client.title': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Client titles may reveal user-specific application configurations or custom setups',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.client.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.lifecycle.phase': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.logging.data_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.logging.level': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.logging.logger': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Logger names may be user-defined and could contain sensitive information',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.logging.message': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'Log messages can contain user data',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.method.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'mcp.progress.current': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.progress.message': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Progress messages may contain user-specific or sensitive information',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.progress.percentage': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.progress.token': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.progress.total': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.prompt.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Prompt names may reveal user behavior patterns or sensitive operations',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.prompt.name',
      reason: 'OTel uses gen_ai.prompt.name for MCP prompt names',
      status: 'backfill',
    },
    aliases: ['gen_ai.prompt.name'],
  },
  'mcp.prompt.result.description': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.prompt.result.message_content': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.prompt.result.message_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.prompt.result.message_role': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.protocol.ready': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.protocol.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'mcp.request.argument.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'Arguments contain user input',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'mcp.request.argument.name': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'Prompt names can contain user input',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.request.argument.uri': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'URIs can contain user file paths',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.request.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'jsonrpc.request.id',
      reason: 'OTel models MCP as JSON-RPC, uses jsonrpc.request.id',
      status: 'backfill',
    },
    aliases: ['jsonrpc.request.id'],
  },
  'mcp.resource.protocol': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'network.protocol.name',
      reason: 'OTel uses the generic network.protocol.name attribute',
      status: 'backfill',
    },
    aliases: ['network.protocol.name', 'net.protocol.name'],
  },
  'mcp.resource.uri': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'URIs can contain sensitive file paths',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'mcp.server.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.server.title': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
      reason: 'Server titles may reveal user-specific application configurations or custom setups',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.server.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.session.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'mcp.tool.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.name',
      reason: 'OTel uses gen_ai.tool.name for MCP tool names',
      status: 'backfill',
    },
    aliases: ['gen_ai.tool.name', 'ai.function_call'],
  },
  'mcp.tool.result.content': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason: 'Tool results can contain user data',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'gen_ai.tool.call.result',
      reason: 'OTel uses gen_ai.tool.call.result for MCP tool results',
      status: 'backfill',
    },
    aliases: ['gen_ai.tool.call.result', 'gen_ai.tool.message', 'gen_ai.tool.output', 'ai.toolCall.result'],
  },
  'mcp.tool.result.content_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'mcp.tool.result.is_error': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'error.type',
      reason:
        "OTel uses error.type set to 'tool_error' when isError is true. Cannot be automatically backfilled due to type mismatch (boolean vs string).",
    },
  },
  'mcp.transport': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'network.transport',
      reason: 'OTel uses the generic network.transport attribute',
      status: 'backfill',
    },
    aliases: ['network.transport', 'net.transport'],
  },
  'mdc.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'messaging.batch.message_count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.destination': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'messaging.destination.name',
      reason:
        'This attribute is being deprecated in favor of messaging.destination.name, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['messaging.destination.name'],
  },
  'messaging.destination.connection': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'messaging.destination_kind': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      reason:
        'Deprecated from OTEL, which now models the destination kind via messaging.operation.type and messaging.destination.name.',
    },
  },
  'messaging.destination.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['messaging.destination'],
  },
  'messaging.destination.partition.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.kafka.message.key': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.kafka.message.tombstone': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.kafka.offset': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.message.body.size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.message.conversation_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.message.envelope.size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.message.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.message.receive.latency': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'messaging.message.retry.count': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'messaging.operation.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.operation.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.rabbitmq.destination.routing_key': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'messaging.system': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  method: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'http.request.method',
      status: 'normalize',
    },
    aliases: ['http.request.method', 'http.request_method', 'http.method'],
  },
  'middleware.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: [
      'django.middleware_name',
      'starlite.middleware_name',
      'litestar.middleware_name',
      'starlette.middleware_name',
    ],
  },
  'navigation.origin': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.sveltekit.navigation.from'],
  },
  'navigation.route.id': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'navigation.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.sveltekit.navigation.type'],
  },
  'nel.elapsed_time': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'nel.phase': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'nel.referrer': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'nel.sampling_function': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'nel.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'network.connection.effective_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['effectiveConnectionType'],
  },
  'network.connection.rtt': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['connection.rtt'],
  },
  'network.connection.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['device.connection_type', 'connectionType'],
  },
  'network.local.address': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['net.host.ip', 'net.sock.host.addr'],
  },
  'network.local.port': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['net.sock.host.port'],
  },
  'network.peer.address': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['net.peer.ip', 'net.sock.peer.addr'],
  },
  'network.peer.port': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'network.protocol.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['net.protocol.name', 'mcp.resource.protocol'],
  },
  'network.protocol.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['http.flavor', 'net.protocol.version'],
  },
  'network.transport': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['net.transport', 'mcp.transport'],
  },
  'network.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'net.host.ip': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.local.address',
    },
    aliases: ['network.local.address', 'net.sock.host.addr'],
  },
  'net.host.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'server.address',
    },
    aliases: ['address', 'server.address', 'http.server_name', 'http.host', 'server_name'],
  },
  'net.host.port': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'server.port',
    },
    aliases: ['server.port', 'port'],
  },
  'net.peer.ip': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.peer.address',
    },
    aliases: ['network.peer.address', 'net.sock.peer.addr'],
  },
  'net.peer.name': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'server.address',
      reason: 'Deprecated, use server.address on client spans and client.address on server spans.',
    },
  },
  'net.peer.port': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'server.port',
      reason: 'Deprecated, use server.port on client spans and client.port on server spans.',
    },
  },
  'net.protocol.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.protocol.name',
    },
    aliases: ['network.protocol.name', 'mcp.resource.protocol'],
  },
  'net.protocol.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.protocol.version',
    },
    aliases: ['network.protocol.version', 'http.flavor'],
  },
  'net.sock.family': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.transport',
      reason: 'Deprecated, use network.transport and network.type.',
    },
  },
  'net.sock.host.addr': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.local.address',
    },
    aliases: ['network.local.address', 'net.host.ip'],
  },
  'net.sock.host.port': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.local.port',
    },
    aliases: ['network.local.port'],
  },
  'net.sock.peer.addr': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.peer.address',
    },
    aliases: ['network.peer.address', 'net.peer.ip'],
  },
  'net.sock.peer.name': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      reason: 'Deprecated from OTEL, no replacement at this time',
    },
  },
  'net.sock.peer.port': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.peer.port',
    },
  },
  'net.transport': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'network.transport',
    },
    aliases: ['network.transport', 'mcp.transport'],
  },
  'os.build': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'os.build_id',
      status: 'backfill',
    },
    aliases: ['os.build_id'],
  },
  'os.build_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['os.build'],
  },
  'os.description': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'os.kernel_version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'os.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'os.raw_description': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'os.rooted': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'os.theme': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'os.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'os.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'otel.kind': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.kind',
      reason: 'Deprecated in favor of sentry.kind',
      status: 'backfill',
    },
    aliases: ['sentry.kind'],
  },
  'otel.scope.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'otel.scope.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'otel.status_code': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'otel.status_description': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'params.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    aliases: ['url.path.parameter.<key>'],
  },
  'performance.activationStart': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.performance.navigation.activation_start',
      reason: 'The activationStart is now recorded as the browser.performance.navigation.activation_start attribute.',
      status: 'backfill',
    },
    aliases: ['browser.performance.navigation.activation_start'],
  },
  'performance.timeOrigin': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.performance.time_origin',
      reason: 'The timeOrigin is now recorded as the browser.performance.time_origin attribute.',
      status: 'backfill',
    },
    aliases: ['browser.performance.time_origin'],
  },
  port: {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'server.port',
      reason: 'Old namespace-less attribute, to be replaced with server.port for span-first future',
      status: 'backfill',
    },
    aliases: ['server.port', 'net.host.port'],
  },
  previous_route: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'process.command_args': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'process.executable.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'process.pid': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['subprocess.pid'],
  },
  'process.runtime.description': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['runtime.raw_description'],
  },
  'process.runtime.engine.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'process.runtime.engine.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'process.runtime.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['runtime.name'],
  },
  'process.runtime.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['runtime.version'],
  },
  profile_id: {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.profile_id',
      status: 'normalize',
    },
    aliases: ['sentry.profile_id'],
  },
  query: {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'db.query.text',
      reason:
        'While this attribute never specifically required parameterization, the replacement, db.query.text, does.',
      status: 'backfill',
    },
    aliases: ['db.query.text', 'db.statement'],
  },
  'query.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    deprecation: {
      replacement: 'url.query',
      reason: 'Instead of sending items individually in query.<key>, they should be sent all together with url.query.',
    },
  },
  'react.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'redis.command': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'db.operation.name',
      status: 'backfill',
    },
    aliases: ['cloudflare.d1.query_type', 'db.operation.name', 'db.operation'],
  },
  'redis.key': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'db.redis.key',
      reason: 'This attribute is being deprecated in favor of db.redis.key, which is the preferred replacement.',
      status: 'backfill',
    },
    aliases: ['db.redis.key'],
  },
  release: {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.release',
      status: 'normalize',
    },
    aliases: ['sentry.release'],
  },
  'remix.action_form_data.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  replay_id: {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.replay_id',
      status: 'normalize',
    },
    aliases: ['sentry.replay_id'],
  },
  'resource.deployment.environment': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.environment',
      status: 'backfill',
    },
  },
  'resource.deployment.environment.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.environment',
      status: 'backfill',
    },
  },
  'resource.render_blocking_status': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  route: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'http.route',
    },
    aliases: ['http.route'],
  },
  'rpc.grpc.status_code': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'rpc.response.status_code',
      reason:
        'Cannot be automatically backfilled due to type mismatch (integer vs string); rpc.grpc.status_code is a numeric gRPC status code while rpc.response.status_code is the string status name.',
    },
    aliases: ['code', 'rpc.response.status_code'],
  },
  'rpc.method': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['aws.operation_name'],
  },
  'rpc.response.status_code': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['code', 'rpc.grpc.status_code'],
  },
  'rpc.service': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'rpc.system': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    deprecation: {
      replacement: 'rpc.system.name',
      reason: 'This attribute is being deprecated in favor of rpc.system.name, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['rpc.system.name'],
  },
  'rpc.system.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['rpc.system'],
  },
  'runtime.build': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      reason:
        'The runtime.* namespace is deprecated in favor of process.runtime.*. No direct OTel equivalent exists for this attribute.',
    },
  },
  'runtime.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'process.runtime.name',
      reason: 'Prefer OTel-aligned process.runtime.name',
    },
    aliases: ['process.runtime.name'],
  },
  'runtime.raw_description': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'process.runtime.description',
      reason: 'Prefer OTel-aligned process.runtime.description',
    },
    aliases: ['process.runtime.description'],
  },
  'runtime.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'process.runtime.version',
      reason: 'Prefer OTel-aligned process.runtime.version',
    },
    aliases: ['process.runtime.version'],
  },
  'score.<key>': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'score.ratio.<key>': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'score.total': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'score.weight.<key>': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'sentry.action': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.browser.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.name',
    },
    aliases: ['browser.name'],
  },
  'sentry.browser.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.version',
    },
    aliases: ['browser.version'],
  },
  'sentry.cancellation_reason': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.category': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.client_sample_rate': {
    type: 'double',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.description': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.dist': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['dist'],
  },
  'sentry.domain': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.dsc.environment': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.dsc.project_id': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.dsc.public_key': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.dsc.release': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.dsc.sampled': {
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.dsc.sample_rate': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.dsc.trace_id': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.dsc.transaction': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.environment': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['environment'],
  },
  'sentry.event.serialized_breadcrumbs': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.event.serialized_contexts': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.event.serialized_extra': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.exclusive_time': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.frames.frozen': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.frames.frozen.count',
      reason:
        'Replaced by app.vitals.frames.frozen.count to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.frames.frozen.count', 'frames.frozen'],
  },
  'sentry.frames.slow': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.frames.slow.count',
      reason:
        'Replaced by app.vitals.frames.slow.count to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.frames.slow.count', 'frames.slow'],
  },
  'sentry.frames.total': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.frames.total.count',
      reason:
        'Replaced by app.vitals.frames.total.count to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.frames.total.count', 'frames.total'],
  },
  'sentry.graphql.operation': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.group': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.http.prefetch': {
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.idle_span_finish_reason': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.is_remote': {
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.kind': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['otel.kind'],
  },
  'sentry.main_thread': {
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.message.parameter.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.message.template': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.metric.source': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.mobile': {
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.module.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
  },
  'sentry.nextjs.ssr.function.route': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.nextjs.ssr.function.type': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.normalized_db_query': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.normalized_db_query.hash': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.normalized_description': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.observed_timestamp_nanos': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.op': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.origin': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.pageload.span_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.platform': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.profiler_id': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.profile_id': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['profile_id'],
  },
  'sentry.relay.ingress': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.relay.pipeline': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.release': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['service.version', 'release'],
  },
  'sentry.replay_id': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['replay_id'],
  },
  'sentry.replay_is_buffering': {
    type: 'boolean',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.report_event': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      reason:
        'The report event is now recorded as a browser.web_vital.lcp.report_event or browser.web_vital.cls.report_event attribute. No backfill required.',
    },
  },
  'sentry.sdk.integrations': {
    type: 'string[]',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.sdk.name': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.sdk.version': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.segment.id': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.segment_id'],
  },
  'sentry.segment_id': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.segment.id',
      status: 'backfill',
    },
    aliases: ['sentry.segment.id'],
  },
  'sentry.segment.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.transaction', 'transaction'],
  },
  'sentry.segment.name.source': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'internal',
  },
  'sentry.server_sample_rate': {
    type: 'double',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.source': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      reason:
        'This attribute is superseded by sentry.segment.name.source, which only needs to be set on segment spans.',
    },
  },
  'sentry.span.source': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      reason:
        'This attribute is superseded by sentry.segment.name.source, which only needs to be set on segment spans.',
    },
  },
  'sentry.status': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.status_code': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.status.message': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.sveltekit.navigation.from': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'navigation.origin',
      reason: 'Use the more generic attribute instead',
      status: 'backfill',
    },
    aliases: ['navigation.origin'],
  },
  'sentry.sveltekit.navigation.to': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      reason: 'the navigation destination is already covered by url.* attributes',
    },
  },
  'sentry.sveltekit.navigation.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'navigation.type',
      reason: 'Use the more generic attribute instead',
      status: 'backfill',
    },
    aliases: ['navigation.type'],
  },
  'sentry.thread.id': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'thread.id',
      reason: 'This attribute is being deprecated in favor of the OTel-standard thread.id',
      status: 'backfill',
    },
  },
  'sentry.timestamp.sequence': {
    type: 'integer',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.trace_lifecycle': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.trace.parent_span_id': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {},
  },
  'sentry.trace.status': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'sentry.transaction': {
    type: 'string',
    applyScrubbing: {
      key: 'never',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.segment.name',
      reason: 'This attribute is being deprecated in favor of sentry.segment.name',
      status: 'backfill',
    },
    aliases: ['sentry.segment.name', 'transaction'],
  },
  'sentry.user.email': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.email',
    },
    aliases: ['user.email'],
  },
  'sentry.user.geo.city': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.geo.city',
    },
    aliases: ['user.geo.city'],
  },
  'sentry.user.geo.country_code': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.geo.country_code',
    },
    aliases: ['user.geo.country_code'],
  },
  'sentry.user.geo.region': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.geo.region',
    },
    aliases: ['user.geo.region'],
  },
  'sentry.user.geo.subdivision': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.geo.subdivision',
    },
    aliases: ['user.geo.subdivision'],
  },
  'sentry.user.id': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.id',
    },
    aliases: ['user.id'],
  },
  'sentry.user.ip': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.ip_address',
    },
    aliases: ['user.ip_address'],
  },
  'sentry.user.username': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'user.name',
    },
    aliases: ['user.name'],
  },
  'server.address': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['address', 'http.server_name', 'net.host.name', 'http.host', 'server_name'],
  },
  server_name: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'server.address',
      reason: 'This attribute is being deprecated in favor of server.address, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['address', 'server.address', 'http.server_name', 'net.host.name', 'http.host'],
  },
  'server.port': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['net.host.port', 'port'],
  },
  'service.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'service.version': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['sentry.release'],
  },
  'session.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  stall_percentage: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.stall.percentage',
      reason:
        'Replaced by app.vitals.stall.percentage to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.stall.percentage'],
  },
  stall_total_time: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.stall.duration',
      reason:
        'Replaced by app.vitals.stall.duration to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.stall.duration'],
  },
  'starlette.middleware_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'middleware.name',
      reason:
        'This attribute is being deprecated in favor of middleware.name, which is the framework-agnostic replacement.',
      status: 'backfill',
    },
    aliases: ['middleware.name'],
  },
  'starlite.middleware_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'middleware.name',
      reason:
        'This attribute is being deprecated in favor of middleware.name, which is the framework-agnostic replacement.',
      status: 'backfill',
    },
    aliases: ['middleware.name'],
  },
  'state.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'subprocess.pid': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'process.pid',
      reason: 'This attribute is being deprecated in favor of process.pid, which is the OTel-aligned replacement.',
      status: 'backfill',
    },
    aliases: ['process.pid'],
  },
  'thread.id': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'thread.name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'timber.tag': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  time_to_full_display: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.ttfd.value',
      reason:
        'Replaced by app.vitals.ttfd.value to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.ttfd.value'],
  },
  time_to_initial_display: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'app.vitals.ttid.value',
      reason:
        'Replaced by app.vitals.ttid.value to align with the app.vitals.* namespace for mobile performance attributes',
      status: 'backfill',
    },
    aliases: ['app.vitals.ttid.value'],
  },
  transaction: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'sentry.segment.name',
      status: 'normalize',
    },
    aliases: ['sentry.segment.name', 'sentry.transaction'],
  },
  'trpc.procedure_path': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'trpc.procedure_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  ttfb: {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.ttfb.value',
      reason: 'This attribute is being deprecated in favor of browser.web_vital.ttfb.value',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.ttfb.value'],
  },
  'ttfb.requestTime': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'browser.web_vital.ttfb.request_time',
      reason: 'This attribute is being deprecated in favor of browser.web_vital.ttfb.request_time',
      status: 'backfill',
    },
    aliases: ['browser.web_vital.ttfb.request_time'],
  },
  type: {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.component_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.contributes_to_ttfd': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.contributes_to_ttid': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.element.height': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.element.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.element.identifier': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.element.load_time': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.element.paint_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.element.render_time': {
    type: 'double',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.element.type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.element.url': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'ui.element.width': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  url: {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'url.full',
    },
    aliases: ['url.full', 'http.url', 'aws.request.url'],
  },
  'url.domain': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'url.fragment': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'url.full': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['http.url', 'url', 'aws.request.url'],
  },
  'url.path': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'url.path.parameter.<key>': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    hasDynamicSuffix: true,
    aliases: ['params.<key>'],
  },
  'url.port': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'url.query': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
      reason:
        'Query string values can contain sensitive information. Clients should attempt to scrub parameters that might contain sensitive information.',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'url.same_origin': {
    type: 'boolean',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    deprecation: {
      replacement: 'http.request.same_origin',
      reason: 'This attribute is being deprecated in favor of http.request.same_origin.',
      status: 'backfill',
    },
    aliases: ['http.request.same_origin'],
  },
  'url.scheme': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['http.scheme'],
  },
  'url.template': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'user_agent.original': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['http.user_agent'],
  },
  'user.email': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['sentry.user.email'],
  },
  'user.full_name': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'user.geo.city': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.user.geo.city'],
  },
  'user.geo.country_code': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.user.geo.country_code'],
  },
  'user.geo.region': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.user.geo.region'],
  },
  'user.geo.subdivision': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.user.geo.subdivision'],
  },
  'user.hash': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'user.id': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['sentry.user.id'],
  },
  'user.ip_address': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
    aliases: ['sentry.user.ip'],
  },
  'user.name': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
    aliases: ['sentry.user.username'],
  },
  'user.roles': {
    type: 'string[]',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: true,
    visibility: 'public',
  },
  'vercel.branch': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.build_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.deployment_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.destination': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.edge_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.entrypoint': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.execution_region': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.ja3_digest': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.ja4_digest': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.log_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.path': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.project_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.project_name': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.cache_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.client_ip': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.host': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.lambda_region': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.method': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.path': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.path_type': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.path_type_variant': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.referer': {
    type: 'string',
    applyScrubbing: {
      key: 'auto',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.region': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.response_byte_size': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.scheme': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.status_code': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.timestamp': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.user_agent': {
    type: 'string[]',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.vercel_cache': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.vercel_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.waf_action': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.proxy.waf_rule_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.request_id': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.source': {
    type: 'string',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
  'vercel.status_code': {
    type: 'integer',
    applyScrubbing: {
      key: 'manual',
    },
    isInOtel: false,
    visibility: 'public',
  },
};
