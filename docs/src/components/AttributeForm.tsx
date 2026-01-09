import { useState, useCallback } from 'react';

interface FormData {
  category: string;
  key: string;
  brief: string;
  type: string;
  piiKey: 'true' | 'maybe' | 'false';
  piiReason: string;
  isInOtel: boolean;
  example: string;
  hasDynamicSuffix: boolean;
  aliases: string;
}

const ATTRIBUTE_TYPES = [
  'string',
  'boolean',
  'integer',
  'double',
  'string[]',
  'boolean[]',
  'integer[]',
  'double[]',
];

const CATEGORIES = [
  'ai',
  'browser',
  'cache',
  'client',
  'cloudflare',
  'code',
  'db',
  'device',
  'error',
  'event',
  'exception',
  'faas',
  'flag',
  'frames',
  'gen_ai',
  'graphql',
  'http',
  'jvm',
  'lcp',
  'logger',
  'mcp',
  'mdc',
  'messaging',
  'navigation',
  'nel',
  'net',
  'network',
  'os',
  'otel',
  'params',
  'process',
  'query',
  'remix',
  'resource',
  'rpc',
  'sentry',
  'server',
  'service',
  'thread',
  'timber',
  'ui',
  'url',
  'user',
  'user_agent',
  'vercel',
];

export default function AttributeForm() {
  const [formData, setFormData] = useState<FormData>({
    category: '',
    key: '',
    brief: '',
    type: 'string',
    piiKey: 'false',
    piiReason: '',
    isInOtel: false,
    example: '',
    hasDynamicSuffix: false,
    aliases: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [jsonPreview, setJsonPreview] = useState<string>('');

  const updateField = useCallback((field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setErrors(prev => ({ ...prev, [field]: undefined }));
  }, []);

  const generateJson = useCallback(() => {
    const json: Record<string, unknown> = {
      key: formData.key,
      brief: formData.brief,
      type: formData.type,
      pii: {
        key: formData.piiKey,
        ...(formData.piiReason && { reason: formData.piiReason }),
      },
      is_in_otel: formData.isInOtel,
    };

    if (formData.hasDynamicSuffix) {
      json.has_dynamic_suffix = true;
    }

    if (formData.example) {
      // Try to parse example as JSON, otherwise use as string
      try {
        const parsed = JSON.parse(formData.example);
        json.example = parsed;
      } catch {
        json.example = formData.example;
      }
    }

    if (formData.aliases.trim()) {
      json.alias = formData.aliases.split(',').map(a => a.trim()).filter(Boolean);
    }

    return JSON.stringify(json, null, 2);
  }, [formData]);

  const validate = useCallback(() => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!formData.category) {
      newErrors.category = 'Category is required';
    }

    if (!formData.key) {
      newErrors.key = 'Key is required';
    } else if (!/^[a-z][a-z0-9_.]*$/.test(formData.key.replace(/<key>/g, ''))) {
      newErrors.key = 'Key must be lowercase with dots, e.g., http.request.method';
    }

    if (!formData.brief) {
      newErrors.brief = 'Description is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handlePreview = useCallback(() => {
    if (validate()) {
      setJsonPreview(generateJson());
    }
  }, [validate, generateJson]);

  const handleSubmit = useCallback(() => {
    if (!validate()) return;

    const json = generateJson();
    const filename = formData.key.replace(/\./g, '__').replace(/<key>/g, '_key_') + '.json';
    const filePath = `model/attributes/${formData.category}/${filename}`;
    
    // Create GitHub URL for new file
    const githubUrl = new URL('https://github.com/getsentry/sentry-conventions/new/main');
    githubUrl.searchParams.set('filename', filePath);
    githubUrl.searchParams.set('value', json);
    githubUrl.searchParams.set('message', `feat(attributes): Add ${formData.key} attribute`);
    githubUrl.searchParams.set('description', `Adds the \`${formData.key}\` attribute to the ${formData.category} category.\n\n${formData.brief}`);

    window.open(githubUrl.toString(), '_blank');
  }, [validate, generateJson, formData]);

  const inputClasses = "w-full p-3 bg-bg-elevated border border-border rounded-md text-sm text-text-primary font-sans transition-colors duration-fast focus:outline-none focus:border-accent";
  const errorInputClasses = "w-full p-3 bg-bg-elevated border border-error rounded-md text-sm text-text-primary font-sans transition-colors duration-fast focus:outline-none focus:border-accent";

  return (
    <div className="max-w-[700px]">
      <div className="bg-bg-secondary border border-border rounded-lg p-6 mb-6">
        <h3 className="text-lg mb-5 pb-3 border-b border-border">Basic Information</h3>
        
        <div className="mb-4">
          <label htmlFor="category" className="block text-sm font-medium text-text-primary mb-2">Category *</label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => updateField('category', e.target.value)}
            className={errors.category ? errorInputClasses : inputClasses}
          >
            <option value="">Select a category...</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span className="block text-xs text-error mt-1">{errors.category}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="key" className="block text-sm font-medium text-text-primary mb-2">Attribute Key *</label>
          <input
            id="key"
            type="text"
            placeholder="e.g., http.request.method"
            value={formData.key}
            onChange={(e) => updateField('key', e.target.value)}
            className={errors.key ? errorInputClasses : inputClasses}
          />
          <span className="block text-xs text-text-muted mt-1">Use lowercase with dots. For dynamic keys, use &lt;key&gt;.</span>
          {errors.key && <span className="block text-xs text-error mt-1">{errors.key}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="brief" className="block text-sm font-medium text-text-primary mb-2">Description *</label>
          <textarea
            id="brief"
            placeholder="A brief description of what this attribute represents"
            value={formData.brief}
            onChange={(e) => updateField('brief', e.target.value)}
            rows={3}
            className={errors.brief ? errorInputClasses : inputClasses}
          />
          {errors.brief && <span className="block text-xs text-error mt-1">{errors.brief}</span>}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="type" className="block text-sm font-medium text-text-primary mb-2">Type *</label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) => updateField('type', e.target.value)}
              className={inputClasses}
            >
              {ATTRIBUTE_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="example" className="block text-sm font-medium text-text-primary mb-2">Example Value</label>
            <input
              id="example"
              type="text"
              placeholder="e.g., GET"
              value={formData.example}
              onChange={(e) => updateField('example', e.target.value)}
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      <div className="bg-bg-secondary border border-border rounded-lg p-6 mb-6">
        <h3 className="text-lg mb-5 pb-3 border-b border-border">PII Information</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="piiKey" className="block text-sm font-medium text-text-primary mb-2">Contains PII? *</label>
            <select
              id="piiKey"
              value={formData.piiKey}
              onChange={(e) => updateField('piiKey', e.target.value as 'true' | 'maybe' | 'false')}
              className={inputClasses}
            >
              <option value="false">No - never contains PII</option>
              <option value="maybe">Maybe - could contain PII</option>
              <option value="true">Yes - always contains PII</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="piiReason" className="block text-sm font-medium text-text-primary mb-2">PII Reason</label>
            <input
              id="piiReason"
              type="text"
              placeholder="Optional explanation"
              value={formData.piiReason}
              onChange={(e) => updateField('piiReason', e.target.value)}
              className={inputClasses}
            />
          </div>
        </div>
      </div>

      <div className="bg-bg-secondary border border-border rounded-lg p-6 mb-6">
        <h3 className="text-lg mb-5 pb-3 border-b border-border">Additional Options</h3>
        
        <div className="mb-3">
          <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
            <input
              type="checkbox"
              checked={formData.isInOtel}
              onChange={(e) => updateField('isInOtel', e.target.checked)}
              className="w-[18px] h-[18px] accent-accent"
            />
            <span>Defined in OpenTelemetry Semantic Conventions</span>
          </label>
        </div>

        <div className="mb-3">
          <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
            <input
              type="checkbox"
              checked={formData.hasDynamicSuffix}
              onChange={(e) => updateField('hasDynamicSuffix', e.target.checked)}
              className="w-[18px] h-[18px] accent-accent"
            />
            <span>Has dynamic suffix (e.g., http.response.header.&lt;key&gt;)</span>
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="aliases" className="block text-sm font-medium text-text-primary mb-2">Aliases</label>
          <input
            id="aliases"
            type="text"
            placeholder="Comma-separated list of aliases"
            value={formData.aliases}
            onChange={(e) => updateField('aliases', e.target.value)}
            className={inputClasses}
          />
          <span className="block text-xs text-text-muted mt-1">Other attribute names that map to this one</span>
        </div>
      </div>

      <div className="flex gap-3 justify-end flex-col sm:flex-row">
        <button 
          type="button" 
          className="btn btn-secondary justify-center"
          onClick={handlePreview}
        >
          Preview JSON
        </button>
        <button 
          type="button" 
          className="btn btn-primary justify-center"
          onClick={handleSubmit}
        >
          Create on GitHub
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </button>
      </div>

      {jsonPreview && (
        <div className="bg-bg-secondary border border-border rounded-lg p-4 mt-6">
          <h4 className="text-sm mb-3 text-text-muted">JSON Preview</h4>
          <pre className="m-0 bg-bg-elevated"><code>{jsonPreview}</code></pre>
        </div>
      )}
    </div>
  );
}
