#!/usr/bin/env bash
set -euo pipefail
: "${SWIFT_VERSION:?SWIFT_VERSION is required}"

export SWIFTLY_HOME_DIR="$SWIFT_CACHE_PATH/home"
export SWIFTLY_BIN_DIR="$SWIFT_CACHE_PATH/bin"
export SWIFTLY_TOOLCHAINS_DIR="$SWIFT_CACHE_PATH/toolchains"

# Keep Swiftly's version selection outside the checked-out repository.
mkdir -p "$SWIFT_CACHE_PATH"
cd "$SWIFT_CACHE_PATH"

if [[ ! -f "$SWIFT_CACHE_PATH.complete" ]]; then
  # Ubuntu 26.04 requires a matching toolchain built against its libxml2 ABI.
  SWIFTLY_VERSION=1.2.0
  DOWNLOAD_DIR=$(mktemp -d "$RUNNER_TEMP/setup-swift.XXXXXX")

  case "$RUNNER_OS" in
    Linux)
      URL="https://download.swift.org/swiftly/linux"
      URL="$URL/swiftly-$SWIFTLY_VERSION-$(uname -m).tar.gz"
      curl --fail --silent --show-error --location "$URL" \
        --output "$DOWNLOAD_DIR/swiftly.tar.gz"
      curl --fail --silent --show-error --location "$URL.sig" \
        --output "$DOWNLOAD_DIR/swiftly.tar.gz.sig"
      curl --compressed --fail --silent --show-error --location \
        https://swift.org/keys/all-keys.asc \
        --output "$DOWNLOAD_DIR/swift-keys.asc"
      # Swiftly's bootstrap signature must be checked before executing it.
      gpg --batch --import "$DOWNLOAD_DIR/swift-keys.asc"
      gpg --batch --verify "$DOWNLOAD_DIR/swiftly.tar.gz.sig" \
        "$DOWNLOAD_DIR/swiftly.tar.gz"
      tar -xzf "$DOWNLOAD_DIR/swiftly.tar.gz" -C "$DOWNLOAD_DIR"
      SWIFTLY="$DOWNLOAD_DIR/swiftly"
      ;;
    macOS)
      URL="https://download.swift.org/swiftly/darwin"
      curl --fail --silent --show-error --location \
        "$URL/swiftly-$SWIFTLY_VERSION.pkg" \
        --output "$DOWNLOAD_DIR/swiftly.pkg"
      pkgutil --check-signature "$DOWNLOAD_DIR/swiftly.pkg"
      pkgutil --expand "$DOWNLOAD_DIR/swiftly.pkg" "$DOWNLOAD_DIR/package"
      mkdir -p "$DOWNLOAD_DIR/extracted"
      tar -xf "$DOWNLOAD_DIR/package"/swiftly-*/Payload \
        -C "$DOWNLOAD_DIR/extracted"
      SWIFTLY="$DOWNLOAD_DIR/extracted/bin/swiftly"
      ;;
    *)
      echo "::error::Unsupported runner OS: $RUNNER_OS"
      exit 1
      ;;
  esac

  "$SWIFTLY" init --skip-install --quiet-shell-followup \
    --assume-yes --no-modify-profile
  "$SWIFTLY_BIN_DIR/swiftly" install "$SWIFT_VERSION" --use --assume-yes \
    --post-install-file "$SWIFT_CACHE_PATH/post-install.sh"
fi

# A restored toolchain still needs its system dependencies on a fresh runner.
if [[ -f "$SWIFT_CACHE_PATH/post-install.sh" ]]; then
  if [[ "$RUNNER_OS" == Linux ]]; then
    sudo apt-get update
  fi
  sudo bash "$SWIFT_CACHE_PATH/post-install.sh"
fi

TOOLCHAIN=$("$SWIFTLY_BIN_DIR/swiftly" use --print-location)
SWIFT_BIN="$TOOLCHAIN/usr/bin"
VERSION_OUTPUT=$("$SWIFT_BIN/swift" --version)
printf '%s\n' "$VERSION_OUTPUT"
ACTUAL_VERSION=$(printf '%s\n' "$VERSION_OUTPUT" \
  | sed -nE 's/.*Swift version ([0-9]+\.[0-9]+(\.[0-9]+)?).*/\1/p')
if [[ "$ACTUAL_VERSION" =~ ^[0-9]+\.[0-9]+$ ]]; then
  ACTUAL_VERSION="$ACTUAL_VERSION.0"
fi
if [[ "$ACTUAL_VERSION" != "$SWIFT_VERSION" ]]; then
  echo "::error::Expected Swift $SWIFT_VERSION, got $ACTUAL_VERSION"
  exit 1
fi

# SwiftPM loads libraries that `swift --version` does not exercise.
"$SWIFT_BIN/swift-build" --version
"$SWIFT_BIN/swift-test" --version

# Match the runner tool-cache convention: publish only complete installations.
touch "$SWIFT_CACHE_PATH.complete"
printf '%s\n' "$SWIFT_BIN" >> "$GITHUB_PATH"
