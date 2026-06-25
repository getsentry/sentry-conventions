import { describe, expect, it } from 'vitest';

import {
  GEN_AI_INPUT_MESSAGES,
  GEN_AI_OUTPUT_MESSAGES,
  GEN_AI_REQUEST_MESSAGES,
  GEN_AI_RESPONSE_TEXT,
  GEN_AI_RESPONSE_TOOL_CALLS,
  type AttributeValue,
} from '../javascript/sentry-conventions/src/attributes';
import { migrateAttributeValue, migrateDeprecatedAttributes } from '../javascript/sentry-conventions/src/migrations';

function migrateRequestMessages(value: AttributeValue): unknown {
  return JSON.parse(migrateAttributeValue(GEN_AI_REQUEST_MESSAGES, value) as string);
}

function migrateAttributes(
  attributes: Record<string, AttributeValue | undefined>,
): Record<string, AttributeValue | undefined> {
  migrateDeprecatedAttributes(attributes);
  return attributes;
}

function outputMessages(attributes: Record<string, AttributeValue | undefined>): unknown {
  return JSON.parse(attributes[GEN_AI_OUTPUT_MESSAGES] as string);
}

describe('gen_ai_request_messages_to_input_messages', () => {
  it.each([
    {
      name: 'plain string',
      input: 'hello',
      expected: [{ role: 'user', parts: [{ type: 'text', content: 'hello' }] }],
    },
    {
      name: 'string array',
      input: JSON.stringify(['hello', 'world']),
      expected: [
        { role: 'user', parts: [{ type: 'text', content: 'hello' }] },
        { role: 'user', parts: [{ type: 'text', content: 'world' }] },
      ],
    },
    {
      name: 'message objects with content string',
      input: JSON.stringify([{ role: 'user', content: 'hello' }]),
      expected: [{ role: 'user', parts: [{ type: 'text', content: 'hello' }] }],
    },
    {
      name: 'message objects with metadata',
      input: JSON.stringify([{ role: 'system', content: 'hello', response_metadata: {} }]),
      expected: [{ role: 'system', response_metadata: {}, parts: [{ type: 'text', content: 'hello' }] }],
    },
    {
      name: 'message objects with content array',
      input: JSON.stringify([{ role: 'user', content: [{ type: 'text', text: 'hello' }] }]),
      expected: [{ role: 'user', parts: [{ type: 'text', text: 'hello', content: 'hello' }] }],
    },
    {
      name: 'already migrated parts',
      input: JSON.stringify([{ role: 'user', parts: [{ type: 'text', content: 'hello' }] }]),
      expected: [{ role: 'user', parts: [{ type: 'text', content: 'hello' }] }],
    },
  ])('migrates $name', ({ input, expected }) => {
    expect(migrateRequestMessages(input)).toEqual(expected);
  });

  it.each([42, true, ['hello']])('leaves non-string values unchanged: %j', (input) => {
    expect(migrateAttributeValue(GEN_AI_REQUEST_MESSAGES, input as AttributeValue)).toEqual(input);
  });

  it('normalizes through migrateDeprecatedAttributes', () => {
    const attributes = migrateAttributes({ [GEN_AI_REQUEST_MESSAGES]: JSON.stringify(['hello']) });

    expect(attributes[GEN_AI_REQUEST_MESSAGES]).toBeUndefined();
    expect(JSON.parse(attributes[GEN_AI_INPUT_MESSAGES] as string)).toEqual([
      { role: 'user', parts: [{ type: 'text', content: 'hello' }] },
    ]);
  });
});

describe('gen_ai_response_to_output_messages', () => {
  it.each([
    {
      name: 'plain string',
      text: 'The capital of France is Paris.',
      expectedParts: [{ type: 'text', content: 'The capital of France is Paris.' }],
    },
    {
      name: 'JSON string array',
      text: JSON.stringify(['The capital of France is Paris.']),
      expectedParts: [{ type: 'text', content: 'The capital of France is Paris.' }],
    },
    {
      name: 'JSON object with content',
      text: JSON.stringify({ content: 'Paris.', role: 'assistant', tool_calls: 'None' }),
      expectedParts: [{ type: 'text', content: 'Paris.' }],
    },
    {
      name: 'JSON object with content and extra fields',
      text: JSON.stringify({ content: 'Paris.', role: 'assistant', annotations: [], audio: 'None', refusal: 'None' }),
      expectedParts: [{ type: 'text', content: 'Paris.' }],
    },
    {
      name: 'message array with assistant message',
      text: JSON.stringify([{ role: 'assistant', content: 'The capital of France is Paris.' }]),
      expectedParts: [{ type: 'text', content: 'The capital of France is Paris.' }],
    },
    {
      name: 'message array with existing parts',
      text: JSON.stringify([{ role: 'assistant', parts: [{ type: 'text', content: 'hello' }] }]),
      expectedParts: [{ type: 'text', content: 'hello' }],
    },
  ])('migrates response text: $name', ({ text, expectedParts }) => {
    const attributes = migrateAttributes({ [GEN_AI_RESPONSE_TEXT]: text });

    expect(attributes[GEN_AI_RESPONSE_TEXT]).toBeUndefined();
    expect(outputMessages(attributes)).toEqual([{ role: 'assistant', parts: expectedParts }]);
  });

  it('migrates tool calls only', () => {
    const attributes = migrateAttributes({
      [GEN_AI_RESPONSE_TOOL_CALLS]: JSON.stringify([{ name: 'get_weather', arguments: { location: 'Paris' } }]),
    });

    expect(attributes[GEN_AI_RESPONSE_TOOL_CALLS]).toBeUndefined();
    expect(outputMessages(attributes)).toEqual([
      {
        role: 'assistant',
        parts: [{ type: 'tool_call', name: 'get_weather', arguments: { location: 'Paris' } }],
      },
    ]);
  });

  it('merges response text and tool calls', () => {
    const attributes = migrateAttributes({
      [GEN_AI_RESPONSE_TEXT]: JSON.stringify(['The weather is rainy.']),
      [GEN_AI_RESPONSE_TOOL_CALLS]: JSON.stringify([{ name: 'get_weather', arguments: { location: 'Paris' } }]),
    });

    expect(attributes[GEN_AI_RESPONSE_TEXT]).toBeUndefined();
    expect(attributes[GEN_AI_RESPONSE_TOOL_CALLS]).toBeUndefined();
    expect(outputMessages(attributes)).toEqual([
      {
        role: 'assistant',
        parts: [
          { type: 'text', content: 'The weather is rainy.' },
          { type: 'tool_call', name: 'get_weather', arguments: { location: 'Paris' } },
        ],
      },
    ]);
  });

  it('preserves existing replacement and removes sources', () => {
    const existing = JSON.stringify([{ role: 'assistant', parts: [{ type: 'text', content: 'existing' }] }]);
    const attributes = migrateAttributes({
      [GEN_AI_RESPONSE_TEXT]: JSON.stringify(['new']),
      [GEN_AI_OUTPUT_MESSAGES]: existing,
    });

    expect(attributes[GEN_AI_RESPONSE_TEXT]).toBeUndefined();
    expect(attributes[GEN_AI_OUTPUT_MESSAGES]).toBe(existing);
  });
});

describe('migration orchestration', () => {
  it('leaves unknown attributes unchanged in direct value migration', () => {
    expect(migrateAttributeValue('unknown', 'x')).toBe('x');
  });

  it('preserves unrelated attributes', () => {
    const attributes = migrateAttributes({
      unrelated: 'kept',
      [GEN_AI_REQUEST_MESSAGES]: JSON.stringify(['hello']),
    });

    expect(attributes.unrelated).toBe('kept');
  });
});
