import { describe, expect, it } from 'vitest';

import {
  ATTRIBUTE_METADATA,
  GEN_AI_TOOL_CALL_RESULT,
  MCP_TOOL_RESULT_CONTENT,
} from '../javascript/sentry-conventions/src/attributes';
import { ATTRIBUTE_SEARCH_METADATA } from '../javascript/sentry-conventions/src/search';

const toolResultFields = [
  'content_type',
  'mime_type',
  'uri',
  'name',
  'data_size',
  'resource_uri',
  'resource_mime_type',
] as const;
const legacyToolResults = [
  ...toolResultFields.map((field) => `mcp.tool.result.${field}` as const),
  ...([...toolResultFields, 'content'] as const).map((field) => `mcp.tool.result.<key>.${field}` as const),
];

describe('legacy MCP result attributes', () => {
  it('deprecates all 15 newly registered tool fields without rewriting ingestion or search keys', () => {
    expect(legacyToolResults).toHaveLength(15);

    for (const key of legacyToolResults) {
      const metadata = ATTRIBUTE_METADATA[key];
      expect(metadata.keys).toEqual([key]);
      expect(metadata.deprecation).toEqual({ reason: expect.stringContaining(GEN_AI_TOOL_CALL_RESULT) });
      expect(metadata.aliases).toBeUndefined();
      expect(ATTRIBUTE_METADATA[GEN_AI_TOOL_CALL_RESULT].keys).not.toContain(key);
      expect(ATTRIBUTE_SEARCH_METADATA[key]).toMatchObject({
        canonicalName: key,
        deprecated: true,
        deprecationChain: [key],
      });
      expect(ATTRIBUTE_SEARCH_METADATA[GEN_AI_TOOL_CALL_RESULT]?.deprecationChain).not.toContain(key);
    }
  });

  it('preserves the existing singleton content backfill', () => {
    expect(ATTRIBUTE_METADATA[MCP_TOOL_RESULT_CONTENT].deprecation).toMatchObject({
      status: 'backfill',
      replacement: GEN_AI_TOOL_CALL_RESULT,
    });
  });

  it('keeps both indexed prompt fields independent and non-deprecated', () => {
    const promptResults = Object.entries(ATTRIBUTE_METADATA).filter(([key]) =>
      key.startsWith('mcp.prompt.result.<key>.'),
    );
    expect(promptResults).toHaveLength(2);

    for (const [key, metadata] of promptResults) {
      expect(metadata.keys).toEqual([key]);
      expect(metadata.deprecation).toBeUndefined();
      expect(metadata.aliases).toBeUndefined();
      expect(ATTRIBUTE_SEARCH_METADATA[key]).toMatchObject({ canonicalName: key, deprecationChain: [key] });
      expect(ATTRIBUTE_SEARCH_METADATA[key]?.deprecated).toBeUndefined();
      expect(ATTRIBUTE_METADATA[GEN_AI_TOOL_CALL_RESULT].keys).not.toContain(key);
      expect(ATTRIBUTE_SEARCH_METADATA[GEN_AI_TOOL_CALL_RESULT]?.deprecationChain).not.toContain(key);
    }
  });
});
