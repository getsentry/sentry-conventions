// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "StrippingVerification",
    dependencies: [.package(name: "SentryConventions", path: "../..")],
    targets: [
        .executableTarget(
            name: "UsedConstants",
            dependencies: [.product(name: "SentryConventions", package: "SentryConventions")]
        ),
        .executableTarget(
            name: "ControlConstants",
            dependencies: [.product(name: "SentryConventions", package: "SentryConventions")]
        )
    ]
)
