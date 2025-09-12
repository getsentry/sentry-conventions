#!/bin/bash
set -eux

# Move to the project root
SCRIPT_DIR="$(dirname "$0")"
cd $SCRIPT_DIR/..

OLD_VERSION="${1}"
NEW_VERSION="${2}"

echo "Current version: $OLD_VERSION"
echo "Bumping to version: $NEW_VERSION"

# ==================== JS ====================

cd javascript/sentry-conventions

# Do not tag and commit changes made by "npm version"
export npm_config_git_tag_version=false

npm version "${NEW_VERSION}"

# ==================== PY ====================

cd ..
cd python

uv version "$NEW_VERSION"
