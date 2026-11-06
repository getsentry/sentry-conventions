import fs from 'node:fs';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { NAMESPACE_README, formatNamespaceReadme, parseNamespaceReadme } from '../scripts/namespaces';
import type { AttributeJson, NamespaceJson } from '../scripts/types';
import { UNDOCUMENTED_NAMESPACES } from './undocumented-namespaces';

const attributesFolder = path.resolve(__dirname, '../model/attributes');

const namespaceFolders = fs
  .readdirSync(attributesFolder, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)
  .sort();

const documentedNamespaces = namespaceFolders.filter((namespace) =>
  fs.existsSync(path.join(attributesFolder, namespace, NAMESPACE_README)),
);

// Every prefix of an attribute key that ends at a dot, e.g. `browser` and `browser.web_vital` for
// `browser.web_vital.lcp.value`. These are the namespaces a README can point to.
const knownNamespaces = new Set(
  fs
    .globSync('**/*.json', { cwd: attributesFolder })
    .map((file) => (JSON.parse(fs.readFileSync(path.join(attributesFolder, file), 'utf-8')) as AttributeJson).key)
    .flatMap((key) => {
      const segments = key.split('.');
      return segments.slice(1).map((_, index) => segments.slice(0, index + 1).join('.'));
    }),
);

const isNonEmptyString = (value: unknown): value is string => typeof value === 'string' && value !== '';

/** Returns what's wrong with the frontmatter of a namespace README. Only `namespace` and `brief` are required. */
function findFrontmatterIssues(frontmatter: unknown): string[] {
  if (typeof frontmatter !== 'object' || frontmatter === null || Array.isArray(frontmatter)) {
    return ['The frontmatter must be a YAML mapping'];
  }

  const { namespace, brief, includes, excludes, ...unknownFields } = frontmatter as Record<string, unknown>;
  const issues = Object.keys(unknownFields).map((field) => `Unknown field \`${field}\``);

  if (!isNonEmptyString(namespace)) {
    issues.push('`namespace` must be a non-empty string');
  }
  if (!isNonEmptyString(brief)) {
    issues.push('`brief` must be a non-empty string');
  }
  if (includes !== undefined && !(Array.isArray(includes) && includes.length > 0 && includes.every(isNonEmptyString))) {
    issues.push('`includes` must be a non-empty list of strings');
  }
  if (
    excludes !== undefined &&
    !(
      Array.isArray(excludes) &&
      excludes.length > 0 &&
      excludes.every(
        (exclude) =>
          typeof exclude === 'object' &&
          exclude !== null &&
          Object.keys(exclude).length === 2 &&
          isNonEmptyString(exclude.description) &&
          isNonEmptyString(exclude.see),
      )
    )
  ) {
    issues.push('`excludes` must be a non-empty list of entries with only a `description` and a `see`');
  }

  return issues;
}

describe('namespace README frontmatter', () => {
  it('only requires the namespace and a brief', () => {
    expect(findFrontmatterIssues({ namespace: 'test', brief: 'A namespace used to test the frontmatter.' })).toEqual(
      [],
    );
    expect(findFrontmatterIssues({ namespace: 'test' })).toEqual(['`brief` must be a non-empty string']);
    expect(findFrontmatterIssues({ brief: 'A namespace used to test the frontmatter.' })).toEqual([
      '`namespace` must be a non-empty string',
    ]);
  });

  it('rejects unknown fields and malformed lists', () => {
    expect(
      findFrontmatterIssues({
        namespace: 'test',
        brief: 'A namespace used to test the frontmatter.',
        include: ['A typo'],
        excludes: [{ description: 'Something else' }],
      }),
    ).toEqual([
      'Unknown field `include`',
      '`excludes` must be a non-empty list of entries with only a `description` and a `see`',
    ]);
  });
});

describe('namespace READMEs', () => {
  it('exist for every namespace that is not allowlisted', () => {
    const missing = namespaceFolders.filter(
      (namespace) => !documentedNamespaces.includes(namespace) && !UNDOCUMENTED_NAMESPACES.has(namespace),
    );

    expect(
      missing,
      `Add a ${NAMESPACE_README} to model/attributes/<namespace>/ that describes the namespace (see CONTRIBUTING.md)`,
    ).toEqual([]);
  });

  it('are not missing from namespaces that are still allowlisted', () => {
    const stale = [...UNDOCUMENTED_NAMESPACES].filter(
      (namespace) => !namespaceFolders.includes(namespace) || documentedNamespaces.includes(namespace),
    );

    expect(stale, 'Remove these namespaces from test/undocumented-namespaces.ts').toEqual([]);
  });

  it('are the only files besides attribute definitions in a namespace folder', () => {
    const unexpectedFiles = namespaceFolders.flatMap((namespace) =>
      fs
        .readdirSync(path.join(attributesFolder, namespace))
        .filter((file) => !file.endsWith('.json') && file !== NAMESPACE_README)
        .map((file) => `${namespace}/${file}`),
    );

    expect(unexpectedFiles).toEqual([]);
  });

  describe.each(documentedNamespaces)('%s', (namespace) => {
    const { frontmatter } = parseNamespaceReadme(
      fs.readFileSync(path.join(attributesFolder, namespace, NAMESPACE_README), 'utf-8'),
    );

    it('has valid frontmatter', () => {
      expect(findFrontmatterIssues(frontmatter)).toEqual([]);
    });

    it('names the folder it is in', () => {
      expect((frontmatter as NamespaceJson).namespace).toBe(namespace);
    });

    it('only points to other, existing namespaces', () => {
      const invalidReferences = ((frontmatter as NamespaceJson).excludes ?? [])
        .map((exclude) => exclude.see)
        .filter((see) => see === namespace || !knownNamespaces.has(see));

      expect(invalidReferences).toEqual([]);
    });
  });
});

describe('parseNamespaceReadme', () => {
  it('reads back what formatNamespaceReadme writes', () => {
    const namespace: NamespaceJson = {
      namespace: 'test',
      brief: 'A namespace used to test: parsing.',
      excludes: [{ description: 'Something else', see: 'other' }],
    };

    expect(parseNamespaceReadme(formatNamespaceReadme(namespace))).toEqual({ frontmatter: namespace, body: '' });
    expect(parseNamespaceReadme(formatNamespaceReadme(namespace, 'Some *Markdown*.'))).toEqual({
      frontmatter: namespace,
      body: 'Some *Markdown*.',
    });
  });

  it('rejects a README without frontmatter', () => {
    expect(() => parseNamespaceReadme('# test\n')).toThrow('YAML frontmatter');
  });
});
