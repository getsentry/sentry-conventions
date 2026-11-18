// This is an auto-generated file. Do not edit!

// Path: model/metrics/browser/browser__bfcache__navigation.json

/**
 * Counts back/forward navigations and whether the page was restored from the back/forward cache.
 *
 * Instrument: counter
 * Unit: none
 * Attributes: `browser.bfcache.outcome`, `browser.bfcache.not_restored_reason_count`, `sentry.segment.name`
 */
export const BROWSER_BFCACHE_NAVIGATION = 'browser.bfcache.navigation';

// Path: model/metrics/browser/browser__bfcache__not_restored.json

/**
 * Counts the reasons a back/forward navigation was not restored from the back/forward cache, emitted once per reason.
 *
 * Instrument: counter
 * Unit: none
 * Attributes: `browser.bfcache.reason`, `browser.bfcache.frame`, `sentry.segment.name`
 */
export const BROWSER_BFCACHE_NOT_RESTORED = 'browser.bfcache.not_restored';

// Path: model/metrics/browser/browser__bfcache__reload__duration.json

/**
 * The duration of the full page reload when a back/forward navigation missed the back/forward cache.
 *
 * Instrument: distribution
 * Unit: millisecond
 * Attributes: `sentry.segment.name`
 */
export const BROWSER_BFCACHE_RELOAD_DURATION = 'browser.bfcache.reload.duration';

// Path: model/metrics/messaging/messaging__bullmq__jobs__completed.json

/**
 * The number of BullMQ jobs that completed.
 *
 * Instrument: counter
 * Unit: none
 * Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
 */
export const MESSAGING_BULLMQ_JOBS_COMPLETED = 'messaging.bullmq.jobs.completed';

// Path: model/metrics/messaging/messaging__bullmq__jobs__delayed.json

/**
 * The number of BullMQ jobs that moved to the delayed state, for a retry with a backoff delay or through Job.moveToDelayed().
 *
 * Instrument: counter
 * Unit: none
 * Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
 */
export const MESSAGING_BULLMQ_JOBS_DELAYED = 'messaging.bullmq.jobs.delayed';

// Path: model/metrics/messaging/messaging__bullmq__jobs__failed.json

/**
 * The number of BullMQ jobs that failed and are not retried.
 *
 * Instrument: counter
 * Unit: none
 * Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
 */
export const MESSAGING_BULLMQ_JOBS_FAILED = 'messaging.bullmq.jobs.failed';

// Path: model/metrics/messaging/messaging__bullmq__jobs__retried.json

/**
 * The number of failed BullMQ jobs that are retried without a delay.
 *
 * Instrument: counter
 * Unit: none
 * Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
 */
export const MESSAGING_BULLMQ_JOBS_RETRIED = 'messaging.bullmq.jobs.retried';

// Path: model/metrics/messaging/messaging__bullmq__jobs__waiting.json

/**
 * The number of BullMQ jobs that Job.moveToWait() moved back to the wait state.
 *
 * Instrument: counter
 * Unit: none
 * Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
 */
export const MESSAGING_BULLMQ_JOBS_WAITING = 'messaging.bullmq.jobs.waiting';

// Path: model/metrics/messaging/messaging__bullmq__jobs__waiting_children.json

/**
 * The number of BullMQ jobs that moved to the waiting-children state to wait for their child jobs.
 *
 * Instrument: counter
 * Unit: none
 * Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
 */
export const MESSAGING_BULLMQ_JOBS_WAITING_CHILDREN = 'messaging.bullmq.jobs.waiting_children';

// Path: model/metrics/messaging/messaging__bullmq__queue__jobs.json

/**
 * The number of BullMQ jobs in a queue in one job state, as counted by Queue.recordJobCountsMetric().
 *
 * Instrument: gauge
 * Unit: none
 * Attributes: `messaging.destination.name`, `messaging.bullmq.queue.jobs.state`
 */
export const MESSAGING_BULLMQ_QUEUE_JOBS = 'messaging.bullmq.queue.jobs';

// Path: model/metrics/messaging/messaging__process__duration.json

/**
 * The duration of the operation that processes a message.
 *
 * Instrument: distribution
 * Unit: second
 * Attributes: `messaging.system`, `messaging.operation.name`, `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
 */
export const MESSAGING_PROCESS_DURATION = 'messaging.process.duration';

// Path: model/metrics/process/process__runtime__elixir__atom__count.json

/**
 * Number of atoms currently existing in the BEAM.
 *
 * Instrument: gauge
 * Unit: none
 */
export const PROCESS_RUNTIME_ELIXIR_ATOM_COUNT = 'process.runtime.elixir.atom.count';

// Path: model/metrics/process/process__runtime__elixir__atom__limit.json

/**
 * Maximum number of atoms that can exist at the same time in the BEAM.
 *
 * Instrument: gauge
 * Unit: none
 */
export const PROCESS_RUNTIME_ELIXIR_ATOM_LIMIT = 'process.runtime.elixir.atom.limit';

// Path: model/metrics/process/process__runtime__elixir__atom__utilization.json

/**
 * Ratio of existing atoms to the maximum the BEAM allows, between 0.0 and 1.0.
 *
 * Instrument: gauge
 * Unit: ratio
 */
export const PROCESS_RUNTIME_ELIXIR_ATOM_UTILIZATION = 'process.runtime.elixir.atom.utilization';

// Path: model/metrics/process/process__runtime__elixir__memory__used.json

/**
 * Memory allocated by the BEAM, broken down by memory type. Summing across types gives the total VM memory.
 *
 * Instrument: gauge
 * Unit: byte
 * Attributes: `process.runtime.elixir.memory.type`
 */
export const PROCESS_RUNTIME_ELIXIR_MEMORY_USED = 'process.runtime.elixir.memory.used';

// Path: model/metrics/process/process__runtime__elixir__port__count.json

/**
 * Number of ports currently existing in the BEAM.
 *
 * Instrument: gauge
 * Unit: none
 */
export const PROCESS_RUNTIME_ELIXIR_PORT_COUNT = 'process.runtime.elixir.port.count';

// Path: model/metrics/process/process__runtime__elixir__port__limit.json

/**
 * Maximum number of ports that can exist at the same time in the BEAM.
 *
 * Instrument: gauge
 * Unit: none
 */
export const PROCESS_RUNTIME_ELIXIR_PORT_LIMIT = 'process.runtime.elixir.port.limit';

// Path: model/metrics/process/process__runtime__elixir__port__utilization.json

/**
 * Ratio of existing ports to the maximum the BEAM allows, between 0.0 and 1.0.
 *
 * Instrument: gauge
 * Unit: ratio
 */
export const PROCESS_RUNTIME_ELIXIR_PORT_UTILIZATION = 'process.runtime.elixir.port.utilization';

// Path: model/metrics/process/process__runtime__elixir__process__count.json

/**
 * Number of processes currently existing in the BEAM.
 *
 * Instrument: gauge
 * Unit: none
 */
export const PROCESS_RUNTIME_ELIXIR_PROCESS_COUNT = 'process.runtime.elixir.process.count';

// Path: model/metrics/process/process__runtime__elixir__process__limit.json

/**
 * Maximum number of processes that can exist at the same time in the BEAM.
 *
 * Instrument: gauge
 * Unit: none
 */
export const PROCESS_RUNTIME_ELIXIR_PROCESS_LIMIT = 'process.runtime.elixir.process.limit';

// Path: model/metrics/process/process__runtime__elixir__process__utilization.json

/**
 * Ratio of existing processes to the maximum the BEAM allows, between 0.0 and 1.0.
 *
 * Instrument: gauge
 * Unit: ratio
 */
export const PROCESS_RUNTIME_ELIXIR_PROCESS_UTILIZATION = 'process.runtime.elixir.process.utilization';

// Path: model/metrics/process/process__runtime__elixir__run_queue__length.json

/**
 * Number of processes and ports ready to run but waiting in a run queue, broken down by run queue type.
 *
 * Instrument: gauge
 * Unit: none
 * Attributes: `process.runtime.elixir.run_queue.type`
 */
export const PROCESS_RUNTIME_ELIXIR_RUN_QUEUE_LENGTH = 'process.runtime.elixir.run_queue.length';

// Path: model/metrics/process/process__runtime__elixir__scheduler__utilization.json

/**
 * Fraction of wall time the normal BEAM schedulers spent busy since the previous sample, between 0.0 and 1.0.
 *
 * Instrument: gauge
 * Unit: ratio
 */
export const PROCESS_RUNTIME_ELIXIR_SCHEDULER_UTILIZATION = 'process.runtime.elixir.scheduler.utilization';

// Path: model/metrics/ui/ui__element__load_time.json

/**
 * The time at which the resource of an element marked with the elementtiming attribute finished loading, relative to the time origin.
 *
 * Instrument: distribution
 * Unit: millisecond
 * Attributes: `ui.element.identifier`, `ui.element.paint_type`, `ui.element.id`, `ui.element.type`, `ui.element.url`, `ui.element.width`, `ui.element.height`
 */
export const UI_ELEMENT_LOAD_TIME = 'ui.element.load_time';

// Path: model/metrics/ui/ui__element__render_time.json

/**
 * The time at which an element marked with the elementtiming attribute was rendered, relative to the time origin.
 *
 * Instrument: distribution
 * Unit: millisecond
 * Attributes: `ui.element.identifier`, `ui.element.paint_type`, `ui.element.id`, `ui.element.type`, `ui.element.url`, `ui.element.width`, `ui.element.height`
 */
export const UI_ELEMENT_RENDER_TIME = 'ui.element.render_time';
