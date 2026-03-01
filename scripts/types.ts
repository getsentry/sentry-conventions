export interface AttributeJson {
  key: string;
  brief: string;
  has_dynamic_suffix?: boolean;
  type: 'string' | 'boolean' | 'integer' | 'double' | 'string[]' | 'boolean[]' | 'integer[]' | 'double[]';
  pii: {
    key: 'true' | 'maybe' | 'false';
    reason?: string;
  };
  is_in_otel: boolean;
  example?: string | boolean | number | string[] | boolean[] | number[];
  deprecation?: {
    replacement?: string;
    reason?: string;
    _status: string;
  };
  alias?: string[];
  sdks?: string[];
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
