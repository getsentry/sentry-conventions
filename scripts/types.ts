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
  deprecation?: {
    replacement?: string;
    reason?: string;
    _status: 'backfill' | 'normalize' | 'transform' | null;
    transformation?: string;
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

export interface AttributeTransformationJson {
  id: string;
  brief: string;
  inputs: AttributeTransformationAttributeReference[];
  outputs: AttributeTransformationAttributeReference[];
  actions: string[];
  examples: AttributeTransformationExample[];
}

export interface AttributeTransformationAttributeReference {
  attribute: string;
  brief?: string;
}

export interface AttributeTransformationExample {
  name: string;
  input: Record<string, unknown>;
  output: Record<string, unknown>;
}
