---
name: no-yarn-resolutions
description: User prefers not to use yarn resolutions to fix transitive dependency vulnerabilities in sentry-conventions
type: feedback
---

Do not use `resolutions` in package.json to fix transitive dependency vulnerabilities.

**Why:** User preference — they want to solve dependency issues by upgrading direct dependencies instead.

**How to apply:** When fixing Dependabot alerts for transitive deps, upgrade the direct dependency that pulls them in rather than adding resolutions overrides.
