/**
 * Replaces "next" changelog entries in attribute JSON files with a concrete release version.
 *
 * - Scans all JSON files under model/attributes/
 * - Finds changelog entries with version "next" and replaces them with the given version
 * - If a "next" entry has no PRs, looks up git history to fill them in automatically
 * - Merges PRs and descriptions if an entry for the target version already exists
 * - Re-sorts the changelog newest-first
 * - Called by craft-pre-release.sh before `yarn generate`
 */

import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import type { AttributeJson } from './types';
import {
  getAllJsonFiles,
  compareVersions,
  getCommitsInRange,
  extractPrNumber,
  isCommitIgnored,
  type ChangelogEntry,
} from './generate_attribute_changelog';

const SEMVER_RE = /^\d+\.\d+\.\d+$/;

type Changelog = NonNullable<AttributeJson['changelog']>;

function getLatestTag(): string | null {
  try {
    const output = execSync('git tag --sort=-version:refname', { encoding: 'utf-8' });
    const tags = output
      .trim()
      .split('\n')
      .filter((tag) => SEMVER_RE.test(tag));
    return tags[0] ?? null;
  } catch {
    return null;
  }
}

function lookupPrsFromGit(gitPath: string, latestTag: string | null): number[] {
  const range = latestTag ? `${latestTag}..HEAD` : 'HEAD';
  const commits = getCommitsInRange(gitPath, range);
  const prs = new Set<number>();

  for (const commit of commits) {
    if (isCommitIgnored(commit.hash)) continue;
    const pr = extractPrNumber(commit.message);
    if (pr !== undefined) prs.add(pr);
  }

  return Array.from(prs).sort((a, b) => a - b);
}

function mergeEntries(entries: ChangelogEntry[], targetVersion: string): ChangelogEntry {
  const prs = new Set<number>();
  let description: string | undefined;

  for (const entry of entries) {
    if (entry.prs) {
      for (const pr of entry.prs) {
        prs.add(pr);
      }
    }
    if (entry.description) {
      description = entry.description;
    }
  }

  const merged: ChangelogEntry = { version: targetVersion };
  if (prs.size > 0) {
    merged.prs = Array.from(prs).sort((a, b) => a - b);
  }
  if (description) {
    merged.description = description;
  }
  return merged;
}

function bumpChangelog(changelog: Changelog, targetVersion: string): Changelog | null {
  const nextEntries = changelog.filter((e) => e.version === 'next');
  if (nextEntries.length === 0) {
    return null;
  }

  const existingTarget = changelog.find((e) => e.version === targetVersion);
  const entriesToMerge = existingTarget ? [...nextEntries, existingTarget] : nextEntries;
  const merged = mergeEntries(entriesToMerge, targetVersion);

  const remaining = changelog.filter((e) => e.version !== 'next' && e.version !== targetVersion);
  remaining.push(merged);
  remaining.sort((a, b) => compareVersions(b.version, a.version));

  return remaining;
}

async function bumpNextChangelog(targetVersion: string): Promise<void> {
  const attributesDir = path.join(__dirname, '..', 'model', 'attributes');
  const files = await getAllJsonFiles(attributesDir);
  const latestTag = getLatestTag();
  let updatedCount = 0;
  let prsFilledCount = 0;

  for (const relativeFile of files) {
    const filePath = path.join(attributesDir, relativeFile);
    const content = await fs.promises.readFile(filePath, 'utf-8');
    const json: AttributeJson = JSON.parse(content);

    if (!json.changelog || !json.changelog.length) {
      continue;
    }

    const nextEntry = json.changelog.find((e) => e.version === 'next');
    if (!nextEntry) {
      continue;
    }

    if (!nextEntry.prs || nextEntry.prs.length === 0) {
      const gitPath = path.join('model', 'attributes', relativeFile);
      const prs = lookupPrsFromGit(gitPath, latestTag);
      if (prs.length > 0) {
        nextEntry.prs = prs;
        prsFilledCount++;
      }
    }

    const bumped = bumpChangelog(json.changelog, targetVersion);
    if (!bumped) {
      continue;
    }

    json.changelog = bumped;
    await fs.promises.writeFile(filePath, `${JSON.stringify(json, null, 2)}\n`, 'utf-8');
    updatedCount++;
  }

  console.log(`Bumped "next" to "${targetVersion}" in ${updatedCount} attribute file(s).`);
  if (prsFilledCount > 0) {
    console.log(`Filled in PRs from git history for ${prsFilledCount} file(s).`);
  }
}

const targetVersion = process.argv[2];

if (!targetVersion) {
  console.error('Usage: tsx scripts/bump_attribute_changelog.ts <version>');
  console.error('Example: tsx scripts/bump_attribute_changelog.ts 0.2.0');
  process.exit(1);
}

if (!SEMVER_RE.test(targetVersion)) {
  console.error(`Invalid version format: "${targetVersion}". Expected X.Y.Z (e.g. 0.2.0)`);
  process.exit(1);
}

bumpNextChangelog(targetVersion).catch((err) => {
  console.error(err);
  process.exit(1);
});
