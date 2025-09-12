#!/bin/bash
set -eux

# Move to the project root
SCRIPT_DIR="$( dirname "$0" )"
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

function replace() {
    ! grep "$2" $3
    perl -i -pe "s/$1/$2/g" $3
    grep "$2" $3  # verify that replacement was successful
}

replace "version = \"$OLD_VERSION\"" "version = \"$NEW_VERSION\"" ./pyproject.toml
