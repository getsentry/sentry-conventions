import { describe, expect, it } from 'vitest';

import {
  ATTRIBUTE_METADATA,
  GEN_AI_TOOL_CALL_RESULT,
  MCP_TOOL_RESULT_CONTENT,
} from '../javascript/sentry-conventions/src/attributes';

const indexedResults = Object.entries(ATTRIBUTE_METADATA).filter(
  ([key]) => key.startsWith('mcp.tool.result.<key>.') || key.startsWith('mcp.prompt.result.<key>.'),
);

describe('legacy MCP result attributes', () => {
  it('keeps indexed items separate from complete tool results', () => {
    expect(indexedResults).toHaveLength(10);

    for (const [key, metadata] of indexedResults) {
      expect(metadata.keys).toEqual([key]);
      expect(metadata.deprecation).toBeUndefined();
      expect(metadata.aliases).toBeUndefined();
      expect(ATTRIBUTE_METADATA[GEN_AI_TOOL_CALL_RESULT].keys).not.toContain(key);
    }

    expect(ATTRIBUTE_METADATA[MCP_TOOL_RESULT_CONTENT].deprecation).toMatchObject({
      status: 'backfill',
      replacement: GEN_AI_TOOL_CALL_RESULT,
    });
  });

  it('preserves automatic scrubbing for the newly registered string fields', () => {
    const results = Object.entries(ATTRIBUTE_METADATA).filter(
      ([key]) => key.startsWith('mcp.tool.result.') || key.startsWith('mcp.prompt.result.<key>.'),
    );

    for (const [, metadata] of results) {
      if (metadata.type === 'string') {
        expect(metadata.applyScrubbing.key).toBe('auto');
      }
    }
  });
});
