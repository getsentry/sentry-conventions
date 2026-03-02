import { describe, expect, it } from 'vitest';
import { type ChangelogEntry, mergeChangelogs } from '../scripts/generate_attribute_changelog';

describe('mergeChangelogs', () => {
  it('should return generated entries when existing is empty', () => {
    const generated: ChangelogEntry[] = [
      { version: '0.2.0', prs: [10] },
      { version: '0.1.0', prs: [5] },
    ];
    const result = mergeChangelogs([], generated);
    expect(result).toEqual([
      { version: '0.2.0', prs: [10] },
      { version: '0.1.0', prs: [5] },
    ]);
  });

  it('should preserve manual-only entries not in generated', () => {
    const existing: ChangelogEntry[] = [
      { version: '0.3.0', description: 'Manual entry for unreleased work' },
      { version: '0.1.0', prs: [5] },
    ];
    const generated: ChangelogEntry[] = [{ version: '0.1.0', prs: [5] }];
    const result = mergeChangelogs(existing, generated);
    expect(result).toEqual([
      { version: '0.3.0', description: 'Manual entry for unreleased work' },
      { version: '0.1.0', prs: [5] },
    ]);
  });

  it('should preserve descriptions from existing entries on overlapping versions', () => {
    const existing: ChangelogEntry[] = [{ version: '0.2.0', prs: [10], description: 'Added new field' }];
    const generated: ChangelogEntry[] = [{ version: '0.2.0', prs: [10] }];
    const result = mergeChangelogs(existing, generated);
    expect(result).toEqual([{ version: '0.2.0', prs: [10], description: 'Added new field' }]);
  });

  it('should union PR numbers from both existing and generated', () => {
    const existing: ChangelogEntry[] = [{ version: '0.2.0', prs: [10, 15] }];
    const generated: ChangelogEntry[] = [{ version: '0.2.0', prs: [10, 20] }];
    const result = mergeChangelogs(existing, generated);
    expect(result).toEqual([{ version: '0.2.0', prs: [10, 15, 20] }]);
  });

  it('should sort results newest-first', () => {
    const existing: ChangelogEntry[] = [{ version: '0.1.0', prs: [1] }];
    const generated: ChangelogEntry[] = [
      { version: '0.1.0', prs: [1] },
      { version: '0.3.0', prs: [15] },
      { version: '0.2.0', prs: [10] },
    ];
    const result = mergeChangelogs(existing, generated);
    expect(result.map((e) => e.version)).toEqual(['0.3.0', '0.2.0', '0.1.0']);
  });

  it('should handle both empty inputs', () => {
    const result = mergeChangelogs([], []);
    expect(result).toEqual([]);
  });

  it('should return existing entries when generated is empty', () => {
    const existing: ChangelogEntry[] = [{ version: '0.1.0', description: 'Manual note' }];
    const result = mergeChangelogs(existing, []);
    expect(result).toEqual([{ version: '0.1.0', description: 'Manual note' }]);
  });

  it('should handle entries with no PRs on either side', () => {
    const existing: ChangelogEntry[] = [{ version: '0.1.0', description: 'Initial release' }];
    const generated: ChangelogEntry[] = [{ version: '0.1.0' }];
    const result = mergeChangelogs(existing, generated);
    expect(result).toEqual([{ version: '0.1.0', description: 'Initial release' }]);
  });

  it('should place "next" entries first when sorting', () => {
    const generated: ChangelogEntry[] = [
      { version: 'next', prs: [30] },
      { version: '0.2.0', prs: [20] },
      { version: '0.1.0', prs: [10] },
    ];
    const result = mergeChangelogs([], generated);
    expect(result.map((e) => e.version)).toEqual(['next', '0.2.0', '0.1.0']);
  });

  it('should promote existing "next" entry to new version when release happens', () => {
    // Previously, there were unreleased changes under "next"
    const existing: ChangelogEntry[] = [
      { version: 'next', prs: [25] },
      { version: '0.1.0', prs: [10] },
    ];
    // Now a new version 0.2.0 has been released that covers those commits
    // and there are no more unreleased changes
    const generated: ChangelogEntry[] = [
      { version: '0.2.0', prs: [25] },
      { version: '0.1.0', prs: [10] },
    ];
    const result = mergeChangelogs(existing, generated);
    expect(result).toEqual([
      { version: '0.2.0', prs: [25] },
      { version: '0.1.0', prs: [10] },
    ]);
  });

  it('should promote "next" and preserve its description when release happens', () => {
    const existing: ChangelogEntry[] = [
      { version: 'next', prs: [25], description: 'Added new field' },
      { version: '0.1.0', prs: [10] },
    ];
    const generated: ChangelogEntry[] = [
      { version: '0.2.0', prs: [25] },
      { version: '0.1.0', prs: [10] },
    ];
    const result = mergeChangelogs(existing, generated);
    expect(result).toEqual([
      { version: '0.2.0', prs: [25], description: 'Added new field' },
      { version: '0.1.0', prs: [10] },
    ]);
  });

  it('should not promote "next" if generated still has "next" (no release yet)', () => {
    const existing: ChangelogEntry[] = [
      { version: 'next', prs: [25] },
      { version: '0.1.0', prs: [10] },
    ];
    const generated: ChangelogEntry[] = [
      { version: 'next', prs: [25, 30] },
      { version: '0.1.0', prs: [10] },
    ];
    const result = mergeChangelogs(existing, generated);
    expect(result).toEqual([
      { version: 'next', prs: [25, 30] },
      { version: '0.1.0', prs: [10] },
    ]);
  });

  it('should merge PRs between existing and generated "next" entries', () => {
    const existing: ChangelogEntry[] = [{ version: 'next', prs: [25] }];
    const generated: ChangelogEntry[] = [{ version: 'next', prs: [25, 30] }];
    const result = mergeChangelogs(existing, generated);
    expect(result).toEqual([{ version: 'next', prs: [25, 30] }]);
  });

  it('should handle "next" as the only generated entry with no prior tags', () => {
    const generated: ChangelogEntry[] = [{ version: 'next', prs: [5] }];
    const result = mergeChangelogs([], generated);
    expect(result).toEqual([{ version: 'next', prs: [5] }]);
  });

  it('should promote "next" to highest new version and union PRs from generated', () => {
    const existing: ChangelogEntry[] = [
      { version: 'next', prs: [25, 26] },
      { version: '0.1.0', prs: [10] },
    ];
    // A release happened and there are additional PRs discovered by git
    const generated: ChangelogEntry[] = [
      { version: '0.2.0', prs: [25, 26, 27] },
      { version: '0.1.0', prs: [10] },
    ];
    const result = mergeChangelogs(existing, generated);
    // The promoted "next" (now 0.2.0) merges with generated 0.2.0
    expect(result).toEqual([
      { version: '0.2.0', prs: [25, 26, 27] },
      { version: '0.1.0', prs: [10] },
    ]);
  });
});
