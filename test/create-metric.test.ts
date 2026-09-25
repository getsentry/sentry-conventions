import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

import { describe, expect, it } from 'vitest';

import { writeMetric } from '../scripts/create_metric';

const metric = {
  key: 'example.memory.used',
  brief: 'Memory used by the example runtime.',
  instrument: 'gauge',
  unit: 'byte',
  is_in_otel: false,
  requirement_level: 'recommended',
  attributes: ['example.memory.type'],
};

describe('generate metric', () => {
  it('writes the definition to its namespace directory', () => {
    const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));
    try {
      writeMetric(metric, temporaryDirectory);
      const filePath = path.join(temporaryDirectory, 'example', 'example__memory__used.json');
      expect(JSON.parse(fs.readFileSync(filePath, 'utf-8'))).toEqual(metric);
    } finally {
      fs.rmSync(temporaryDirectory, { recursive: true });
    }
  });

  it('validates the schema before creating files', () => {
    const temporaryDirectory = fs.mkdtempSync(path.join(os.tmpdir(), 'sentry-conventions-'));
    try {
      expect(() => writeMetric({ ...metric, unit: 'By' }, temporaryDirectory)).toThrow('Invalid metric data');
      expect(fs.readdirSync(temporaryDirectory)).toEqual([]);
    } finally {
      fs.rmSync(temporaryDirectory, { recursive: true });
    }
  });
});
