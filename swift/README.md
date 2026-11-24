# Sentry Conventions for Swift

Swift string constants for [Sentry Semantic Conventions](../README.md), generated from the shared convention definitions. Use them when naming attributes, span operations, and metrics.

## Installation

Add this repository to your application's `Package.swift`, then add the `SentryConventions` product to the target that uses it:

```swift
// In Package.dependencies:
.package(
    url: "https://github.com/getsentry/sentry-conventions.git",
    branch: "main"
)

// In your target's dependencies:
.product(name: "SentryConventions", package: "sentry-conventions")
```

The selected revision must contain the repository's root `Package.swift`. For a local checkout, use `.package(path: "../sentry-conventions")` instead. Pin an appropriate release or commit revision for reproducible application builds.

In Xcode, add the repository URL through **File > Add Package Dependencies**, then select the `SentryConventions` product for your target.

## Usage

```swift
import SentryConventions

let attributes = [AttributeNames.httpRequestMethod: "GET"]
let operation = SpanOperations.httpClient
let metric = MetricNames.uiElementRenderTime
```

These properties return ordinary `String` values:

- `AttributeNames.httpRequestMethod` returns `"http.request.method"`.
- `SpanOperations.httpClient` returns `"http.client"`.
- `MetricNames.uiElementRenderTime` returns `"ui.element.render_time"`.

Property names use lowerCamelCase. Deprecated conventions carry Swift deprecation annotations, including a replacement recommendation when one is defined.

### Dynamic attribute keys

A property ending in `Key` preserves the convention's `<key>` placeholder. For conventions with a dynamic suffix, the corresponding `KeyBase` property omits `.<key>` so callers can append a concrete suffix:

```swift
let template = AttributeNames.mcpRequestArgumentKey
// "mcp.request.argument.<key>"

let argumentKey = AttributeNames.mcpRequestArgumentKeyBase + ".name"
// "mcp.request.argument.name"
```

For intermediate placeholders, replace `<key>` in the template with the appropriate segment. See the [contribution guide](../CONTRIBUTING.md#dynamic-attribute-keys) for the convention rules.

## Inlining and dead-code stripping

SDKs usually reference only a small subset of the convention registry. The generated API therefore exposes individual computed static properties on non-instantiable structs, rather than an aggregate collection that would retain every string.

Each property uses `@inlinable` and `@_alwaysEmitIntoClient`:

```swift
@_alwaysEmitIntoClient
@inlinable
public static var httpRequestMethod: String { "http.request.method" }
```

`@inlinable` exposes the getter body for cross-module optimization. It does not by itself ensure that the library-side getter and its string literal can be discarded. In our macOS release-build investigation, public getters were marked `dont-dead-strip` and unused literals remained in the consuming executable.

`@_alwaysEmitIntoClient` emits the getter implementation into the consuming module instead of relying on a library-side getter symbol. This lets the release consumer retain the strings it uses without pulling in unused getter implementations and their literals.

This is an underscored Swift compiler attribute, not a stable language-level guarantee. Its behavior must be checked when changing the generator or upgrading the toolchain. Convention values are compiled into consumers, so consumers must rebuild to pick up changed values.

### Verification

From the repository root on Linux or macOS with the Swift toolchain installed, run:

```sh
yarn test:swift
```

This runs the [release consumer verification](../scripts/verify_swift.ts). The verification builds a [separate consuming package](Verification/Package.swift) in release mode, exercising the generated API across a package boundary rather than compiling the constants directly into the test sources.

The consuming package has two executables:

- **[UsedConstants](Verification/Sources/UsedConstants/main.swift)** represents an application that references only a few conventions. The verifier runs it to check the expected attribute, operation, and metric values, then inspects its binary to confirm that representative strings it does not use are absent. A used string must remain detectable in the binary.
- **[ControlConstants](Verification/Sources/ControlConstants/main.swift)** deliberately references those otherwise-unused strings. The verifier checks both its output and the presence of those strings in its binary. This is a positive control for the binary inspection: without it, a missing string in `UsedConstants` could indicate either successful stripping or a detection method that cannot find the literal.

Both conditions must hold: a probe string is present when referenced by `ControlConstants`, and absent when unreferenced by `UsedConstants`. If an unused probe remains or a control probe cannot be found, verification fails.

The probes use long strings to avoid Swift's inline small-string representation. They verify the tested consumer and toolchain, not every possible application build configuration. The same checks run in CI on Linux and macOS.

## Development

Follow the repository's [contribution and setup instructions](../CONTRIBUTING.md). Edit convention definitions in `model/`, not generated Swift sources. From the repository root, regenerate and verify changes with:

```sh
yarn generate
yarn test
yarn lint
```

## License

[MIT](../LICENSE).
