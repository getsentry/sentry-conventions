import fs from 'node:fs';
import path from 'node:path';
import yaml from 'js-yaml';
import type { NamespaceJson } from './types';

/** The file in a namespace folder that describes the namespace. */
export const NAMESPACE_README = 'README.md';

export interface NamespaceReadme {
  frontmatter: unknown;
  body: string;
}

/**
 * Splits a namespace README into its YAML frontmatter and its Markdown body.
 * The frontmatter is not validated here, test/namespaces.test.ts does that.
 */
export function parseNamespaceReadme(content: string): NamespaceReadme {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)([\s\S]*)$/);
  if (!match) {
    throw new Error(`A namespace ${NAMESPACE_README} must start with a YAML frontmatter block`);
  }

  return { frontmatter: yaml.load(match[1] ?? ''), body: (match[2] ?? '').trim() };
}

/** Reads the README of a namespace folder, or returns undefined if the namespace has none. */
export function readNamespaceReadme(attributesDir: string, namespace: string): NamespaceReadme | undefined {
  const readmePath = path.join(attributesDir, namespace, NAMESPACE_README);
  if (!fs.existsSync(readmePath)) {
    return undefined;
  }

  return parseNamespaceReadme(fs.readFileSync(readmePath, 'utf-8'));
}

/** Formats a namespace README with the given frontmatter and an optional Markdown body. */
export function formatNamespaceReadme(namespace: NamespaceJson, body = ''): string {
  const frontmatter = yaml.dump(namespace, { lineWidth: -1 });
  return `---\n${frontmatter}---\n${body ? `\n${body.trim()}\n` : ''}`;
}

/** Formats what belongs in a namespace and what doesn't, for display in the terminal. */
export function formatNamespaceScope(namespace: NamespaceJson): string {
  const lines = [namespace.brief];

  if (namespace.includes?.length) {
    lines.push('', 'Belongs here:', ...namespace.includes.map((include) => `  - ${include}`));
  }

  if (namespace.excludes?.length) {
    lines.push(
      '',
      'Does not belong here:',
      ...namespace.excludes.map((exclude) => `  - ${exclude.description} → use \`${exclude.see}\``),
    );
  }

  return lines.join('\n');
}
