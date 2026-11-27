// This is an auto-generated file. Do not edit!

public struct MetricNames {
    private init() {}

    /// Counts back/forward navigations and whether the page was restored from the back/forward cache.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserBfcacheNavigation: String { "browser.bfcache.navigation" }

    /// Counts the reasons a back/forward navigation was not restored from the back/forward cache, emitted once per reason.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserBfcacheNotRestored: String { "browser.bfcache.not_restored" }

    /// The duration of the full page reload when a back/forward navigation missed the back/forward cache.
    @_alwaysEmitIntoClient
    @inlinable
    public static var browserBfcacheReloadDuration: String { "browser.bfcache.reload.duration" }

    /// The number of BullMQ jobs that completed.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobsCompleted: String { "messaging.bullmq.jobs.completed" }

    /// The number of BullMQ jobs that moved to the delayed state, for a retry with a backoff delay or through Job.moveToDelayed().
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobsDelayed: String { "messaging.bullmq.jobs.delayed" }

    /// The number of BullMQ jobs that failed and are not retried.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobsFailed: String { "messaging.bullmq.jobs.failed" }

    /// The number of failed BullMQ jobs that are retried without a delay.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobsRetried: String { "messaging.bullmq.jobs.retried" }

    /// The number of BullMQ jobs that Job.moveToWait() moved back to the wait state.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobsWaiting: String { "messaging.bullmq.jobs.waiting" }

    /// The number of BullMQ jobs that moved to the waiting-children state to wait for their child jobs.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqJobsWaitingChildren: String { "messaging.bullmq.jobs.waiting_children" }

    /// The number of BullMQ jobs in a queue in one job state, as counted by Queue.recordJobCountsMetric().
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingBullmqQueueJobs: String { "messaging.bullmq.queue.jobs" }

    /// The duration of the operation that processes a message.
    @_alwaysEmitIntoClient
    @inlinable
    public static var messagingProcessDuration: String { "messaging.process.duration" }

    /// Number of atoms currently existing in the BEAM.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirAtomCount: String { "process.runtime.elixir.atom.count" }

    /// Maximum number of atoms that can exist at the same time in the BEAM.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirAtomLimit: String { "process.runtime.elixir.atom.limit" }

    /// Ratio of existing atoms to the maximum the BEAM allows, between 0.0 and 1.0.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirAtomUtilization: String { "process.runtime.elixir.atom.utilization" }

    /// Memory allocated by the BEAM, broken down by memory type. Summing across types gives the total VM memory.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirMemoryUsed: String { "process.runtime.elixir.memory.used" }

    /// Number of ports currently existing in the BEAM.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirPortCount: String { "process.runtime.elixir.port.count" }

    /// Maximum number of ports that can exist at the same time in the BEAM.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirPortLimit: String { "process.runtime.elixir.port.limit" }

    /// Ratio of existing ports to the maximum the BEAM allows, between 0.0 and 1.0.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirPortUtilization: String { "process.runtime.elixir.port.utilization" }

    /// Number of processes currently existing in the BEAM.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirProcessCount: String { "process.runtime.elixir.process.count" }

    /// Maximum number of processes that can exist at the same time in the BEAM.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirProcessLimit: String { "process.runtime.elixir.process.limit" }

    /// Ratio of existing processes to the maximum the BEAM allows, between 0.0 and 1.0.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirProcessUtilization: String { "process.runtime.elixir.process.utilization" }

    /// Number of processes and ports ready to run but waiting in a run queue, broken down by run queue type.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirRunQueueLength: String { "process.runtime.elixir.run_queue.length" }

    /// Fraction of wall time the normal BEAM schedulers spent busy since the previous sample, between 0.0 and 1.0.
    @_alwaysEmitIntoClient
    @inlinable
    public static var processRuntimeElixirSchedulerUtilization: String { "process.runtime.elixir.scheduler.utilization" }

    /// The time at which the resource of an element marked with the elementtiming attribute finished loading, relative to the time origin.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementLoadTime: String { "ui.element.load_time" }

    /// The time at which an element marked with the elementtiming attribute was rendered, relative to the time origin.
    @_alwaysEmitIntoClient
    @inlinable
    public static var uiElementRenderTime: String { "ui.element.render_time" }
}
