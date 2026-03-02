import { execSync } from 'node:child_process';
import * as fs from 'node:fs';
import * as path from 'node:path';
import type { AttributeJson } from './types';

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

  if (tags.length === 0) {
    console.log('No release tags found, skipping changelog generation.');
    return;
  }

  // Build tag ranges: [{from: null, to: "0.0.0"}, {from: "0.0.0", to: "0.1.0"}, ...]
  const tagRanges: Array<{ from: string | null; to: string }> = [];
  for (let i = 0; i < tags.length; i++) {
    tagRanges.push({
      from: i === 0 ? null : tags[i - 1],
      to: tags[i] as string,
    });
  }

  const allFiles = await getAllJsonFiles(attributesDir);
  let updatedCount = 0;

  for (const relativeFile of allFiles) {
    const filePath = path.join(attributesDir, relativeFile);
    const gitPath = path.join('model', 'attributes', relativeFile);
    const changelog = buildChangelog(gitPath, tagRanges);

    if (changelog.length === 0) {
      continue;
    }

    const attributeJson = JSON.parse(fs.readFileSync(filePath, 'utf-8')) as AttributeJson;
    attributeJson.changelog = mergeChangelogs(attributeJson.changelog ?? [], changelog);
    fs.writeFileSync(filePath, `${JSON.stringify(attributeJson, null, 2)}\n`);
    updatedCount++;
  }

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

function buildChangelog(gitPath: string, tagRanges: Array<{ from: string | null; to: string }>): ChangelogEntry[] {
  const changelog: ChangelogEntry[] = [];

  for (const { from, to } of tagRanges) {
    const range = from ? `${from}..${to}` : to;
    const commits = getCommitsInRange(gitPath, range);

    if (commits.length === 0) {
      continue;
    }

    // Extract PR numbers from all commits in this version
    const prs = new Set<number>();
    for (const commit of commits) {
      const pr = extractPrNumber(commit.message);
      if (pr !== undefined) {
        prs.add(pr);
      }
    }

    const entry: ChangelogEntry = { version: to };
    if (prs.size > 0) {
      entry.prs = Array.from(prs).sort((a, b) => a - b);
    }
    changelog.push(entry);
  }

  return changelog.reverse();
}

function compareVersions(a: string, b: string): number {
  const partsA = a.split('.').map(Number);
  const partsB = b.split('.').map(Number);
  for (let i = 0; i < Math.max(partsA.length, partsB.length); i++) {
    const numA = partsA[i] ?? 0;
    const numB = partsB[i] ?? 0;
    if (numA !== numB) return numA - numB;
  }
  return 0;
}

export function mergeChangelogs(existing: ChangelogEntry[], generated: ChangelogEntry[]): ChangelogEntry[] {
  const existingByVersion = new Map<string, ChangelogEntry>();
  for (const entry of existing) {
    existingByVersion.set(entry.version, entry);
  }

  const generatedByVersion = new Map<string, ChangelogEntry>();
  for (const entry of generated) {
    generatedByVersion.set(entry.version, entry);
  }

  const merged: ChangelogEntry[] = [];

  // Merge generated entries, preserving existing descriptions and unioning PRs
  for (const genEntry of generated) {
    const existingEntry = existingByVersion.get(genEntry.version);
    if (existingEntry) {
      const prSet = new Set<number>([...(existingEntry.prs ?? []), ...(genEntry.prs ?? [])]);
      const mergedEntry: ChangelogEntry = { version: genEntry.version };
      if (prSet.size > 0) {
        mergedEntry.prs = Array.from(prSet).sort((a, b) => a - b);
      }
      if (existingEntry.description) {
        mergedEntry.description = existingEntry.description;
      }
      merged.push(mergedEntry);
    } else {
      merged.push({ ...genEntry });
    }
  }

  // Preserve manually-created entries not in generated
  for (const existingEntry of existing) {
    if (!generatedByVersion.has(existingEntry.version)) {
      merged.push({ ...existingEntry });
    }
  }

  // Sort newest-first
  return merged.sort((a, b) => compareVersions(b.version, a.version));
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
      .map((line) => ({
        hash: line.substring(0, 40),
        message: line.substring(41),
      }));
  } catch {
    return [];
  }
}

function extractPrNumber(message: string): number | undefined {
  const match = message.match(/\(#(\d+)\)\s*$/);
  return match ? Number(match[1]) : undefined;
}

async function getAllJsonFiles(dir: string): Promise<string[]> {
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

// Run directly
generateAttributeChangelog();
