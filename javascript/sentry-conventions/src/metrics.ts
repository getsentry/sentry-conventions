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
