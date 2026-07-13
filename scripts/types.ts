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
    _status: string;
  };
  alias?: string[];
  search_aliases?: {
    public_alias: string;
    internal_name: string;
    search_type:
      | 'string'
      | 'boolean'
      | 'integer'
      | 'number'
      | 'byte'
      | 'currency'
      | 'millisecond'
      | 'percentage'
      | 'second';
    secondary_alias?: boolean;
    private?: boolean;
    dataset_mappings: {
      spans?: string;
      eap?: string;
    };
  }[];
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
