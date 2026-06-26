export type AttributeMigrationId = string;

export interface AttributeJson {
  key: string;
  brief: string;
  has_dynamic_suffix?: boolean;
  type: 'string' | 'boolean' | 'integer' | 'double' | 'string[]' | 'boolean[]' | 'integer[]' | 'double[]' | 'any';
  apply_scrubbing: {
    key: 'auto' | 'manual' | 'never';
    reason?: string;
  };
  is_in_otel: boolean;
  visibility?: 'public' | 'internal';
  example?: string | boolean | number | string[] | boolean[] | number[];
  migration?: {
    source_for?: AttributeMigrationId[];
    target_of?: AttributeMigrationId[];
  };
  deprecation?: {
    replacement?: string;
    reason?: string;
    _status: 'backfill' | 'normalize' | null;
  };
  alias?: string[];
  additional_context?: string[];
  changelog?: { version: string; prs?: number[]; description?: string }[];
}

export interface NameJson {
  brief: string;
  operations: {
    name?: string;
    brief: string;
    is_in_otel: boolean;
    otel_notes?: string;
    ops: string[];
    templates: string[];
    examples?: string[];
  }[];
}

export interface DescriptionJson {
  brief: string;
  operations: {
    name?: string;
    brief: string;
    ops: string[];
    templates: string[];
    examples?: string[];
  }[];
}
