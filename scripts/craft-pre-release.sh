#!/bin/bash
set -eux

ROOT_DIR="$(realpath $(dirname "$0")/..)"

OLD_VERSION="${1}"
NEW_VERSION="${2}"

echo "Current version: $OLD_VERSION"
echo "Bumping to version: $NEW_VERSION"

# ==================== Attribute Changelogs ====================

cd $ROOT_DIR

npx tsx scripts/bump_attribute_changelog.ts "${NEW_VERSION}"

# --frozen-lockfile: the release only needs node_modules to run `yarn generate`, it must
# not re-resolve dependencies. A plain `yarn install` writes the lockfile back from the
# release runner's perspective, dropping every optional native binary that doesn't match
# it (linux-x64) and leaving the lockfile broken for every other platform.
yarn install --frozen-lockfile
yarn generate

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
