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
});
