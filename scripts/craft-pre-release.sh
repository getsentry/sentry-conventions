#!/bin/bash
set -eux

ROOT_DIR="$(realpath $(dirname "$0")/..)"

OLD_VERSION="${1}"
NEW_VERSION="${2}"

echo "Current version: $OLD_VERSION"
echo "Bumping to version: $NEW_VERSION"

# ==================== JS ====================

cd $ROOT_DIR
cd javascript/sentry-conventions

# Do not tag and commit changes made by "npm version"
export npm_config_git_tag_version=false

npm version "${NEW_VERSION}"

# ==================== PY ====================

cd $ROOT_DIR
cd python

uv version "$NEW_VERSION"
