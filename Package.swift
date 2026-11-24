// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "SentryConventions",
    products: [
        .library(name: "SentryConventions", type: .static, targets: ["SentryConventions"])
    ],
    targets: [
        .target(name: "SentryConventions", path: "swift/Sources/SentryConventions")
    ]
)
