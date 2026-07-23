import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, describe, expect, it } from 'vitest';
import { z } from 'zod';
import { parseJsonValue, readJsonFile } from '../scripts/read_json';

const tempDirs: string[] = [];

function writeTempFile(name: string, content: string): string {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));
  tempDirs.push(directory);
  const filePath = path.join(directory, name);
  fs.writeFileSync(filePath, content);
  return filePath;
}

afterEach(() => {
  for (const directory of tempDirs.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe('readJsonFile', () => {
  const schema = z.strictObject({ key: z.string() });

  it('returns validated data', () => {
    const filePath = writeTempFile('valid.json', '{"key":"value"}');
    expect(readJsonFile(filePath, schema)).toEqual({ key: 'value' });
  });

  it('throws with the filename and property path for invalid data', () => {
    const filePath = writeTempFile('invalid.json', '{"key":42}');
    expect(() => readJsonFile(filePath, schema)).toThrow(filePath);
    expect(() => readJsonFile(filePath, schema)).toThrow(/key/);
  });

  it('throws with the filename and syntax context for malformed JSON', () => {
    const filePath = writeTempFile('malformed.json', '{"key":');
    expect(() => readJsonFile(filePath, schema)).toThrow(filePath);
    expect(() => readJsonFile(filePath, schema)).toThrow(/JSON/);
  });
});

describe('parseJsonValue', () => {
  it('validates CLI JSON without a type assertion', () => {
    expect(parseJsonValue('["one"]', z.array(z.string()).min(1))).toEqual(['one']);
    expect(() => parseJsonValue('[]', z.array(z.string()).min(1))).toThrow();
  });
});
