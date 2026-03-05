import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import type { AttributeJson } from './types';

/**
 * Full commit hashes to ignore when building changelogs (e.g. the commit that
 * introduced the changelog concept and touched every file, to avoid infinite recursion).
 */
const IGNORED_COMMIT_HASHES = new Set<string>([
  // feat: Add changelog tracking to attribute definitions (#270)
  '0db15becb4b06b592d53bd18aa9f945d7b065a71',
]);

function isCommitIgnored(hash: string): boolean {
  const h = hash.trim().toLowerCase();
  if (!h) return false;
  for (const ignored of IGNORED_COMMIT_HASHES) {
    const i = ignored.trim().toLowerCase();
    if (h === i || h.startsWith(i)) return true;
  }
  return false;
}

export interface ChangelogEntry {
  version: string;
  prs?: number[];
  description?: string;
}

/**
 * Generates attribute changelog entries for all attribute JSON files based on git history.
 *
 * For each attribute file, it finds all commits that touched the file,
 * maps them to release versions using git tags, and extracts PR numbers
 * from commit messages.
 */
export async function generateAttributeChangelog() {
  const attributesDir = path.join(__dirname, '..', 'model', 'attributes');
  const tags = getReleaseTags();

  // Build tag ranges: [{from: null, to: "0.0.0"}, {from: "0.0.0", to: "0.1.0"}, ...]
  const tagRanges: Array<{ from: string | null; to: string }> = [];
  for (let i = 0; i < tags.length; i++) {
    tagRanges.push({
      from: i === 0 ? null : (tags[i - 1] ?? null),
      to: tags[i] as string,
    });
  }

  // Add range from latest tag (or beginning) to HEAD for unreleased changes
  tagRanges.push({
    from: tags.length > 0 ? (tags[tags.length - 1] as string) : null,
    to: 'next',
  });

  const allFiles = await getAllJsonFiles(attributesDir);
  let updatedCount = 0;
  const total = allFiles.length;

  // TODO: This runs O(files × versions) git subprocesses. As the repo accumulates
  // more releases, consider batching: for each version range, query changed files
  // once with `git diff --name-only`, then map files to versions, instead of
  // querying per file.
  for (let i = 0; i < allFiles.length; i++) {
    const relativeFile = allFiles[i] as string;
    process.stdout.write(`\r[${i + 1}/${total}] ${relativeFile.padEnd(60)}`);

    const filePath = path.join(attributesDir, relativeFile);
    const gitPath = path.join('model', 'attributes', relativeFile);
    const { changelog, skippedPrs } = buildChangelog(gitPath, tagRanges);

    if (changelog.length === 0) {
      continue;
    }

    const attributeJson = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as AttributeJson;
    attributeJson.changelog = mergeChangelogs(attributeJson.changelog ?? [], changelog, skippedPrs);
    fs.writeFileSync(filePath, `${JSON.stringify(attributeJson, null, 2)}\n`);
    updatedCount++;
  }

  process.stdout.write('\n');
  console.log(`Updated changelog for ${updatedCount} attribute files.`);
}

function getReleaseTags(): string[] {
  try {
    const output = execSync('git tag --sort=version:refname', { encoding: 'utf-8' });
    return output
      .trim()
      .split('\n')
      .filter((tag) => /^\d+\.\d+\.\d+$/.test(tag));
  } catch {
    return [];
  }
}

interface BuildChangelogResult {
  changelog: ChangelogEntry[];
  skippedPrs: Set<number>;
}

function buildChangelog(gitPath: string, tagRanges: Array<{ from: string | null; to: string }>): BuildChangelogResult {
  const changelog: ChangelogEntry[] = [];
  const skippedPrs = new Set<number>();

  for (const { from, to } of tagRanges) {
    const range = to === 'next' ? (from ? `${from}..HEAD` : 'HEAD') : from ? `${from}..${to}` : to;
    const commits = getCommitsInRange(gitPath, range);

    if (commits.length === 0) {
      continue;
    }

    // Extract PR numbers from all commits in this version (respecting ignore list)
    const prs = new Set<number>();
    for (const commit of commits) {
      if (isCommitIgnored(commit.hash)) {
        const pr = extractPrNumber(commit.message);
        if (pr !== undefined) skippedPrs.add(pr);
        continue;
      }
      const pr = extractPrNumber(commit.message);
      if (pr !== undefined) {
        prs.add(pr);
      }
    }

    // Don't create empty 'next' entries — commits without PR numbers are
    // infrastructure/tooling changes, not real attribute changes
    if (to === 'next' && prs.size === 0) {
      continue;
    }

    const entry: ChangelogEntry = { version: to };
    if (prs.size > 0) {
      entry.prs = Array.from(prs).sort((a, b) => a - b);
    }
    changelog.push(entry);
  }

  return { changelog: changelog.reverse(), skippedPrs };
}

export function compareVersions(a: string, b: string): number {
  if (a === 'next' && b === 'next') return 0;
  if (a === 'next') return 1;
  if (b === 'next') return -1;

  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const numA = partsA[i] ?? 0;
    const numB = partsB[i] ?? 0;
    if (numA !== numB) return numA - numB;
  }
  return 0;
}

export function mergeChangelogs(
  existing: ChangelogEntry[],
  generated: ChangelogEntry[],
  skippedPrs: Set<number> = new Set(),
): ChangelogEntry[] {
  const filterPrs = (prs: number[] | undefined) => (prs ?? []).filter((pr) => !skippedPrs.has(pr));

  // If the existing changelog has a "next" entry but the generated changelog has a real version
  // that accounts for those same commits, promote the old "next" entry to that version.
  const existingPromoted = promoteNextEntries(existing, generated);

  const existingByVersion = new Map<string, ChangelogEntry>();
  for (const entry of existingPromoted) {
    existingByVersion.set(entry.version, entry);
  }

  const generatedByVersion = new Map<string, ChangelogEntry>();
  for (const entry of generated) {
    generatedByVersion.set(entry.version, entry);
  }

  const merged: ChangelogEntry[] = [];

  // Merge generated entries, preserving existing descriptions and unioning PRs (minus skipped)
  for (const genEntry of generated) {
    const existingEntry = existingByVersion.get(genEntry.version);
    if (existingEntry) {
      const prSet = new Set<number>([...filterPrs(existingEntry.prs), ...filterPrs(genEntry.prs)]);
      const mergedEntry: ChangelogEntry = { version: genEntry.version };
      if (prSet.size > 0) {
        mergedEntry.prs = Array.from(prSet).sort((a, b) => a - b);
      }
      if (existingEntry.description) {
        mergedEntry.description = existingEntry.description;
      }
      merged.push(mergedEntry);
    } else {
      const prs = filterPrs(genEntry.prs);
      merged.push({
        ...genEntry,
        prs: prs.length > 0 ? prs : undefined,
      });
    }
  }

  // Preserve manually-created entries not in generated (with skipped PRs filtered out)
  for (const existingEntry of existingPromoted) {
    if (!generatedByVersion.has(existingEntry.version)) {
      const filteredPrs = filterPrs(existingEntry.prs);
      // Don't preserve stale 'next' with no description and no PRs — unless we stripped PRs
      // (skippedPrs), in which case keep the entry to avoid flip-flop between runs.
      if (
        existingEntry.version === 'next' &&
        !existingEntry.description &&
        filteredPrs.length === 0 &&
        skippedPrs.size === 0
      ) {
        continue;
      }
      merged.push({
        ...existingEntry,
        prs: filteredPrs.length > 0 ? filteredPrs : undefined,
      });
    }
  }

  // Sort newest-first ("next" always comes first, handled by compareVersions)
  return merged.sort((a, b) => compareVersions(b.version, a.version));
}

/**
 * When a new release happens, the previously-generated "next" entries should be
 * promoted to the newest version that now covers those commits.
 * This finds the highest non-"next" version in the generated changelog and
 * re-labels any existing "next" entry to that version.
 */
function promoteNextEntries(existing: ChangelogEntry[], generated: ChangelogEntry[]): ChangelogEntry[] {
  const existingNext = existing.find((e) => e.version === 'next');
  if (!existingNext) {
    return existing;
  }

  // Check if generated still has a "next" entry — if so, no promotion needed yet
  const generatedHasNext = generated.some((e) => e.version === 'next');

  // Find the highest real version in generated
  const realVersions = generated.filter((e) => e.version !== 'next').map((e) => e.version);
  if (realVersions.length === 0 || generatedHasNext) {
    return existing;
  }

  const highestVersion = realVersions.sort((a, b) => compareVersions(b, a))[0] as string;

  // Check if this version is newer than what was previously in existing
  // (i.e., was the "next" entry created before this version existed?)
  const existingHasVersion = existing.some((e) => e.version === highestVersion);
  if (existingHasVersion) {
    return existing;
  }

  // Promote: replace "next" with the new version
  return existing.map((e) => (e.version === 'next' ? { ...e, version: highestVersion } : e));
}

interface CommitInfo {
  hash: string;
  message: string;
}

function getCommitsInRange(gitPath: string, range: string): CommitInfo[] {
  try {
    const output = execSync(`git log --no-merges --format="%H %s" ${range} -- "${gitPath}"`, { encoding: 'utf-8' });
    return output
      .trim()
      .split('\n')
      .filter(Boolean)
      .map((line) => {
        const trimmed = line.trim();
        return {
          hash: trimmed.substring(0, 40),
          message: trimmed.substring(41).trim(),
        };
      });
  } catch {
    return [];
  }
}

function extractPrNumber(message: string): number | undefined {
  const match = message.match(/\(#(\d+)\)\s*$/);
  return match ? Number(match[1]) : undefined;
}

export async function getAllJsonFiles(dir: string): Promise<string[]> {
  const allFiles: string[] = [];

  async function scanDir(currentDir: string, relativePath = '') {
    const entries = await fs.promises.readdir(currentDir, { withFileTypes: true });
    for (const entry of entries) {
      const entryPath = path.join(currentDir, entry.name);
      const entryRelativePath = path.join(relativePath, entry.name);
      if (entry.isDirectory()) {
        await scanDir(entryPath, entryRelativePath);
      } else if (entry.isFile() && path.extname(entry.name) === '.json') {
        allFiles.push(entryRelativePath);
      }
    }
  }

  await scanDir(dir);
  return allFiles;
}

// Run directly (not when imported as a module)
if (process.argv[1] === __filename) {
  generateAttributeChangelog();
}
