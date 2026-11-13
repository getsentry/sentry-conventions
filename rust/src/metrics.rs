// This is an auto-generated file. Do not edit!

// Path: model/metrics/browser/browser__bfcache__navigation.json

/// Counts back/forward navigations and whether the page was restored from the back/forward cache.
///
/// Instrument: counter
/// Unit: none
/// Attributes: `browser.bfcache.outcome`, `browser.bfcache.not_restored_reason_count`, `sentry.segment.name`
pub const BROWSER_BFCACHE_NAVIGATION: &str = "browser.bfcache.navigation";

// Path: model/metrics/browser/browser__bfcache__not_restored.json

/// Counts the reasons a back/forward navigation was not restored from the back/forward cache, emitted once per reason.
///
/// Instrument: counter
/// Unit: none
/// Attributes: `browser.bfcache.reason`, `browser.bfcache.frame`, `sentry.segment.name`
pub const BROWSER_BFCACHE_NOT_RESTORED: &str = "browser.bfcache.not_restored";

// Path: model/metrics/browser/browser__bfcache__reload__duration.json

/// The duration of the full page reload when a back/forward navigation missed the back/forward cache.
///
/// Instrument: distribution
/// Unit: millisecond
/// Attributes: `sentry.segment.name`
pub const BROWSER_BFCACHE_RELOAD_DURATION: &str = "browser.bfcache.reload.duration";

// Path: model/metrics/messaging/messaging__bullmq__jobs__completed.json

/// The number of BullMQ jobs that completed.
///
/// Instrument: counter
/// Unit: none
/// Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
pub const MESSAGING_BULLMQ_JOBS_COMPLETED: &str = "messaging.bullmq.jobs.completed";

// Path: model/metrics/messaging/messaging__bullmq__jobs__delayed.json

/// The number of BullMQ jobs that moved to the delayed state, for a retry with a backoff delay or through Job.moveToDelayed().
///
/// Instrument: counter
/// Unit: none
/// Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
pub const MESSAGING_BULLMQ_JOBS_DELAYED: &str = "messaging.bullmq.jobs.delayed";

// Path: model/metrics/messaging/messaging__bullmq__jobs__failed.json

/// The number of BullMQ jobs that failed and are not retried.
///
/// Instrument: counter
/// Unit: none
/// Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
pub const MESSAGING_BULLMQ_JOBS_FAILED: &str = "messaging.bullmq.jobs.failed";

// Path: model/metrics/messaging/messaging__bullmq__jobs__retried.json

/// The number of failed BullMQ jobs that are retried without a delay.
///
/// Instrument: counter
/// Unit: none
/// Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
pub const MESSAGING_BULLMQ_JOBS_RETRIED: &str = "messaging.bullmq.jobs.retried";

// Path: model/metrics/messaging/messaging__bullmq__jobs__waiting.json

/// The number of BullMQ jobs that Job.moveToWait() moved back to the wait state.
///
/// Instrument: counter
/// Unit: none
/// Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
pub const MESSAGING_BULLMQ_JOBS_WAITING: &str = "messaging.bullmq.jobs.waiting";

// Path: model/metrics/messaging/messaging__bullmq__jobs__waiting_children.json

/// The number of BullMQ jobs that moved to the waiting-children state to wait for their child jobs.
///
/// Instrument: counter
/// Unit: none
/// Attributes: `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
pub const MESSAGING_BULLMQ_JOBS_WAITING_CHILDREN: &str = "messaging.bullmq.jobs.waiting_children";

// Path: model/metrics/messaging/messaging__bullmq__queue__jobs.json

/// The number of BullMQ jobs in a queue in one job state, as counted by Queue.recordJobCountsMetric().
///
/// Instrument: gauge
/// Unit: none
/// Attributes: `messaging.destination.name`, `messaging.bullmq.queue.jobs.state`
pub const MESSAGING_BULLMQ_QUEUE_JOBS: &str = "messaging.bullmq.queue.jobs";

// Path: model/metrics/messaging/messaging__process__duration.json

/// The duration of the operation that processes a message.
///
/// Instrument: distribution
/// Unit: second
/// Attributes: `messaging.system`, `messaging.operation.name`, `messaging.destination.name`, `messaging.bullmq.job.name`, `messaging.bullmq.job.state`
pub const MESSAGING_PROCESS_DURATION: &str = "messaging.process.duration";

// Path: model/metrics/process/process__runtime__elixir__atom__count.json

/// Number of atoms currently existing in the BEAM.
///
/// Instrument: gauge
/// Unit: none
pub const PROCESS_RUNTIME_ELIXIR_ATOM_COUNT: &str = "process.runtime.elixir.atom.count";

// Path: model/metrics/process/process__runtime__elixir__atom__limit.json

/// Maximum number of atoms that can exist at the same time in the BEAM.
///
/// Instrument: gauge
/// Unit: none
pub const PROCESS_RUNTIME_ELIXIR_ATOM_LIMIT: &str = "process.runtime.elixir.atom.limit";

// Path: model/metrics/process/process__runtime__elixir__atom__utilization.json

/// Ratio of existing atoms to the maximum the BEAM allows, between 0.0 and 1.0.
///
/// Instrument: gauge
/// Unit: ratio
pub const PROCESS_RUNTIME_ELIXIR_ATOM_UTILIZATION: &str = "process.runtime.elixir.atom.utilization";

// Path: model/metrics/process/process__runtime__elixir__memory__used.json

/// Memory allocated by the BEAM, broken down by memory type. Summing across types gives the total VM memory.
///
/// Instrument: gauge
/// Unit: byte
/// Attributes: `process.runtime.elixir.memory.type`
pub const PROCESS_RUNTIME_ELIXIR_MEMORY_USED: &str = "process.runtime.elixir.memory.used";

// Path: model/metrics/process/process__runtime__elixir__port__count.json

/// Number of ports currently existing in the BEAM.
///
/// Instrument: gauge
/// Unit: none
pub const PROCESS_RUNTIME_ELIXIR_PORT_COUNT: &str = "process.runtime.elixir.port.count";

// Path: model/metrics/process/process__runtime__elixir__port__limit.json

/// Maximum number of ports that can exist at the same time in the BEAM.
///
/// Instrument: gauge
/// Unit: none
pub const PROCESS_RUNTIME_ELIXIR_PORT_LIMIT: &str = "process.runtime.elixir.port.limit";

// Path: model/metrics/process/process__runtime__elixir__port__utilization.json

/// Ratio of existing ports to the maximum the BEAM allows, between 0.0 and 1.0.
///
/// Instrument: gauge
/// Unit: ratio
pub const PROCESS_RUNTIME_ELIXIR_PORT_UTILIZATION: &str = "process.runtime.elixir.port.utilization";

// Path: model/metrics/process/process__runtime__elixir__process__count.json

/// Number of processes currently existing in the BEAM.
///
/// Instrument: gauge
/// Unit: none
pub const PROCESS_RUNTIME_ELIXIR_PROCESS_COUNT: &str = "process.runtime.elixir.process.count";

// Path: model/metrics/process/process__runtime__elixir__process__limit.json

/// Maximum number of processes that can exist at the same time in the BEAM.
///
/// Instrument: gauge
/// Unit: none
pub const PROCESS_RUNTIME_ELIXIR_PROCESS_LIMIT: &str = "process.runtime.elixir.process.limit";

// Path: model/metrics/process/process__runtime__elixir__process__utilization.json

/// Ratio of existing processes to the maximum the BEAM allows, between 0.0 and 1.0.
///
/// Instrument: gauge
/// Unit: ratio
pub const PROCESS_RUNTIME_ELIXIR_PROCESS_UTILIZATION: &str = "process.runtime.elixir.process.utilization";

// Path: model/metrics/process/process__runtime__elixir__run_queue__length.json

/// Number of processes and ports ready to run but waiting in a run queue, broken down by run queue type.
///
/// Instrument: gauge
/// Unit: none
/// Attributes: `process.runtime.elixir.run_queue.type`
pub const PROCESS_RUNTIME_ELIXIR_RUN_QUEUE_LENGTH: &str = "process.runtime.elixir.run_queue.length";

// Path: model/metrics/process/process__runtime__elixir__scheduler__utilization.json

/// Fraction of wall time the normal BEAM schedulers spent busy since the previous sample, between 0.0 and 1.0.
///
/// Instrument: gauge
/// Unit: ratio
pub const PROCESS_RUNTIME_ELIXIR_SCHEDULER_UTILIZATION: &str = "process.runtime.elixir.scheduler.utilization";

// Path: model/metrics/ui/ui__element__load_time.json

/// The time at which the resource of an element marked with the elementtiming attribute finished loading, relative to the time origin.
///
/// Instrument: distribution
/// Unit: millisecond
/// Attributes: `ui.element.identifier`, `ui.element.paint_type`, `ui.element.id`, `ui.element.type`, `ui.element.url`, `ui.element.width`, `ui.element.height`
pub const UI_ELEMENT_LOAD_TIME: &str = "ui.element.load_time";

// Path: model/metrics/ui/ui__element__render_time.json

/// The time at which an element marked with the elementtiming attribute was rendered, relative to the time origin.
///
/// Instrument: distribution
/// Unit: millisecond
/// Attributes: `ui.element.identifier`, `ui.element.paint_type`, `ui.element.id`, `ui.element.type`, `ui.element.url`, `ui.element.width`, `ui.element.height`
pub const UI_ELEMENT_RENDER_TIME: &str = "ui.element.render_time";