import { ATTRIBUTE_METADATA, GEN_AI_INPUT_MESSAGES, GEN_AI_OUTPUT_MESSAGES, type AttributeValue } from './attributes';

export type AttributeMigrationId = 'gen_ai_request_messages_to_input_messages' | 'gen_ai_response_to_output_messages';

const GEN_AI_REQUEST_MESSAGES = 'gen_ai.request.messages';
const GEN_AI_RESPONSE_TEXT = 'gen_ai.response.text';
const GEN_AI_RESPONSE_TOOL_CALLS = 'gen_ai.response.tool_calls';

type AttributeMap = Record<string, AttributeValue | undefined>;
type AttributeMigrationFn = (attributes: AttributeMap) => AttributeValue | undefined;

export interface AttributeMigration {
  id: AttributeMigrationId;
  sources: string[];
  replacement: string;
  migrate: AttributeMigrationFn;
}

const attributeMigrations: AttributeMigration[] = [];

function defineAttributeMigration(
  metadata: Omit<AttributeMigration, 'migrate'>,
  migrate: AttributeMigrationFn,
): AttributeMigrationFn {
  attributeMigrations.push({ ...metadata, migrate });
  return migrate;
}

// Utilities

function parseJson(value: AttributeValue): unknown | undefined {
  if (typeof value !== 'string') {
    return undefined;
  }

  try {
    return JSON.parse(value);
  } catch {
    return undefined;
  }
}

function parseJsonArray(value: AttributeValue): unknown[] | undefined {
  const parsed = parseJson(value);
  return Array.isArray(parsed) ? parsed : undefined;
}

function textPart(content: string): Record<string, unknown> {
  return { type: 'text', content };
}

function normalizeMessageContent(content: unknown): unknown[] {
  if (typeof content === 'string') {
    return [textPart(content)];
  }

  if (Array.isArray(content)) {
    return content.map((part) => {
      if (typeof part === 'string') {
        return textPart(part);
      }

      if (part && typeof part === 'object' && 'text' in part && !('content' in part)) {
        return { ...part, content: (part as { text: unknown }).text };
      }

      return part;
    });
  }

  return [content];
}

function migrateGenAiRequestMessagesValue(value: AttributeValue): AttributeValue {
  if (typeof value === 'string' && parseJson(value) === undefined) {
    return JSON.stringify([{ role: 'user', parts: [textPart(value)] }]);
  }

  const messages = parseJsonArray(value);
  if (!messages) {
    return value;
  }

  if (messages.every((message) => typeof message === 'string')) {
    return JSON.stringify(messages.map((message) => ({ role: 'user', parts: [textPart(message as string)] })));
  }

  if (messages.every((message) => message && typeof message === 'object')) {
    return JSON.stringify(
      messages.map((message) => {
        const input = message as Record<string, unknown>;
        if ('parts' in input) {
          return input;
        }
        if ('content' in input) {
          const { content, ...rest } = input;
          return { ...rest, parts: normalizeMessageContent(content) };
        }
        return input;
      }),
    );
  }

  return value;
}

function extractResponseTextParts(value: AttributeValue | undefined): Record<string, unknown>[] {
  if (value === undefined) {
    return [];
  }

  const parsed = parseJson(value);
  if (typeof value === 'string' && parsed === undefined) {
    return [textPart(value)];
  }

  if (typeof parsed === 'string') {
    return [textPart(parsed)];
  }

  if (Array.isArray(parsed)) {
    return parsed.flatMap((message) => {
      if (typeof message === 'string') {
        return [textPart(message)];
      }
      if (message && typeof message === 'object') {
        const input = message as Record<string, unknown>;
        if (typeof input.content === 'string') {
          return [textPart(input.content)];
        }
        if (Array.isArray(input.parts)) {
          return input.parts as Record<string, unknown>[];
        }
      }
      return [];
    });
  }

  if (parsed && typeof parsed === 'object') {
    const input = parsed as Record<string, unknown>;
    if (typeof input.content === 'string') {
      return [textPart(input.content)];
    }
    if (Array.isArray(input.parts)) {
      return input.parts as Record<string, unknown>[];
    }
  }

  return [];
}

// Migrations

defineAttributeMigration(
  {
    id: 'gen_ai_request_messages_to_input_messages',
    sources: [GEN_AI_REQUEST_MESSAGES],
    replacement: GEN_AI_INPUT_MESSAGES,
  },
  (attributes) => {
    const value = attributes[GEN_AI_REQUEST_MESSAGES];
    return value === undefined ? undefined : migrateGenAiRequestMessagesValue(value);
  },
);

defineAttributeMigration(
  {
    id: 'gen_ai_response_to_output_messages',
    sources: [GEN_AI_RESPONSE_TEXT, GEN_AI_RESPONSE_TOOL_CALLS],
    replacement: GEN_AI_OUTPUT_MESSAGES,
  },
  (attributes) => {
    const textValue = attributes[GEN_AI_RESPONSE_TEXT];
    const toolCallsValue = attributes[GEN_AI_RESPONSE_TOOL_CALLS];
    const parts: Record<string, unknown>[] = extractResponseTextParts(textValue);

    const toolCalls = toolCallsValue === undefined ? undefined : parseJsonArray(toolCallsValue);
    if (toolCalls) {
      for (const toolCall of toolCalls) {
        if (toolCall && typeof toolCall === 'object') {
          parts.push({ ...(toolCall as Record<string, unknown>), type: 'tool_call' });
        }
      }
    }

    if (parts.length > 0) {
      return JSON.stringify([{ role: 'assistant', parts }]);
    }

    return textValue ?? toolCallsValue;
  },
);

export const ATTRIBUTE_MIGRATIONS = attributeMigrations as readonly AttributeMigration[];

// Public API

export function migrateAttributeValue(attributeName: string, value: AttributeValue): AttributeValue {
  const migration = ATTRIBUTE_MIGRATIONS.find(
    (candidate) => candidate.sources.length === 1 && candidate.sources[0] === attributeName,
  );
  if (!migration) {
    return value;
  }

  return migration.migrate({ [attributeName]: value }) ?? value;
}

export function migrateDeprecatedAttributes(attributes: AttributeMap): void {
  for (const migration of ATTRIBUTE_MIGRATIONS) {
    if (!migration.sources.some((source) => attributes[source] !== undefined)) {
      continue;
    }

    if (attributes[migration.replacement] === undefined) {
      const migratedValue = migration.migrate(attributes);
      if (migratedValue !== undefined) {
        attributes[migration.replacement] = migratedValue;
      }
    }

    if (migration.sources.some((source) => ATTRIBUTE_METADATA[source]?.deprecation?.status === 'normalize')) {
      for (const source of migration.sources) {
        delete attributes[source];
      }
    }
  }
}
