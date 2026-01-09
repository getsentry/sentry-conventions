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

  return (
    <div className="attribute-form">
      <div className="form-section">
        <h3>Basic Information</h3>
        
        <div className="form-group">
          <label htmlFor="category">Category *</label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) => updateField('category', e.target.value)}
            className={errors.category ? 'error' : ''}
          >
            <option value="">Select a category...</option>
            {CATEGORIES.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <span className="error-message">{errors.category}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="key">Attribute Key *</label>
          <input
            id="key"
            type="text"
            placeholder="e.g., http.request.method"
            value={formData.key}
            onChange={(e) => updateField('key', e.target.value)}
            className={errors.key ? 'error' : ''}
          />
          <span className="hint">Use lowercase with dots. For dynamic keys, use &lt;key&gt;.</span>
          {errors.key && <span className="error-message">{errors.key}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="brief">Description *</label>
          <textarea
            id="brief"
            placeholder="A brief description of what this attribute represents"
            value={formData.brief}
            onChange={(e) => updateField('brief', e.target.value)}
            rows={3}
            className={errors.brief ? 'error' : ''}
          />
          {errors.brief && <span className="error-message">{errors.brief}</span>}
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="type">Type *</label>
            <select
              id="type"
              value={formData.type}
              onChange={(e) => updateField('type', e.target.value)}
            >
              {ATTRIBUTE_TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="example">Example Value</label>
            <input
              id="example"
              type="text"
              placeholder="e.g., GET"
              value={formData.example}
              onChange={(e) => updateField('example', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>PII Information</h3>
        
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="piiKey">Contains PII? *</label>
            <select
              id="piiKey"
              value={formData.piiKey}
              onChange={(e) => updateField('piiKey', e.target.value as 'true' | 'maybe' | 'false')}
            >
              <option value="false">No - never contains PII</option>
              <option value="maybe">Maybe - could contain PII</option>
              <option value="true">Yes - always contains PII</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="piiReason">PII Reason</label>
            <input
              id="piiReason"
              type="text"
              placeholder="Optional explanation"
              value={formData.piiReason}
              onChange={(e) => updateField('piiReason', e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-section">
        <h3>Additional Options</h3>
        
        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={formData.isInOtel}
              onChange={(e) => updateField('isInOtel', e.target.checked)}
            />
            <span>Defined in OpenTelemetry Semantic Conventions</span>
          </label>
        </div>

        <div className="checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={formData.hasDynamicSuffix}
              onChange={(e) => updateField('hasDynamicSuffix', e.target.checked)}
            />
            <span>Has dynamic suffix (e.g., http.response.header.&lt;key&gt;)</span>
          </label>
        </div>

        <div className="form-group">
          <label htmlFor="aliases">Aliases</label>
          <input
            id="aliases"
            type="text"
            placeholder="Comma-separated list of aliases"
            value={formData.aliases}
            onChange={(e) => updateField('aliases', e.target.value)}
          />
          <span className="hint">Other attribute names that map to this one</span>
        </div>
      </div>

      <div className="form-actions">
        <button type="button" className="btn-secondary" onClick={handlePreview}>
          Preview JSON
        </button>
        <button type="button" className="btn-primary" onClick={handleSubmit}>
          Create on GitHub
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
          </svg>
        </button>
      </div>

      {jsonPreview && (
        <div className="json-preview">
          <h4>JSON Preview</h4>
          <pre><code>{jsonPreview}</code></pre>
        </div>
      )}

      <style>{`
        .attribute-form {
          max-width: 700px;
        }
        
        .form-section {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-6);
          margin-bottom: var(--space-6);
        }
        
        .form-section h3 {
          font-size: var(--text-lg);
          margin-bottom: var(--space-5);
          padding-bottom: var(--space-3);
          border-bottom: 1px solid var(--color-border);
        }
        
        .form-group {
          margin-bottom: var(--space-4);
        }
        
        .form-group label {
          display: block;
          font-size: var(--text-sm);
          font-weight: 500;
          color: var(--color-text-primary);
          margin-bottom: var(--space-2);
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: var(--space-3);
          background: var(--color-bg-elevated);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-md);
          font-size: var(--text-sm);
          color: var(--color-text-primary);
          font-family: var(--font-sans);
          transition: border-color var(--transition-fast);
        }
        
        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-accent);
        }
        
        .form-group input.error,
        .form-group select.error,
        .form-group textarea.error {
          border-color: var(--color-error);
        }
        
        .form-group .hint {
          display: block;
          font-size: var(--text-xs);
          color: var(--color-text-muted);
          margin-top: var(--space-1);
        }
        
        .error-message {
          display: block;
          font-size: var(--text-xs);
          color: var(--color-error);
          margin-top: var(--space-1);
        }
        
        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4);
        }
        
        .checkbox-group {
          margin-bottom: var(--space-3);
        }
        
        .checkbox-group label {
          display: flex;
          align-items: center;
          gap: var(--space-2);
          font-size: var(--text-sm);
          color: var(--color-text-secondary);
          cursor: pointer;
        }
        
        .checkbox-group input[type="checkbox"] {
          width: 18px;
          height: 18px;
          accent-color: var(--color-accent);
        }
        
        .form-actions {
          display: flex;
          gap: var(--space-3);
          justify-content: flex-end;
        }
        
        .btn-primary,
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: var(--space-2);
          padding: var(--space-3) var(--space-5);
          font-size: var(--text-sm);
          font-weight: 600;
          border-radius: var(--radius-md);
          border: none;
          cursor: pointer;
          transition: all var(--transition-fast);
          font-family: var(--font-sans);
        }
        
        .btn-primary {
          background: var(--color-accent);
          color: white;
        }
        
        .btn-primary:hover {
          background: var(--color-accent-hover);
        }
        
        .btn-secondary {
          background: var(--color-bg-elevated);
          color: var(--color-text-primary);
          border: 1px solid var(--color-border);
        }
        
        .btn-secondary:hover {
          background: var(--color-bg-hover);
          border-color: var(--color-border-light);
        }
        
        .json-preview {
          background: var(--color-bg-secondary);
          border: 1px solid var(--color-border);
          border-radius: var(--radius-lg);
          padding: var(--space-4);
          margin-top: var(--space-6);
        }
        
        .json-preview h4 {
          font-size: var(--text-sm);
          margin-bottom: var(--space-3);
          color: var(--color-text-muted);
        }
        
        .json-preview pre {
          margin: 0;
          background: var(--color-bg-elevated);
        }
        
        @media (max-width: 640px) {
          .form-row {
            grid-template-columns: 1fr;
          }
          
          .form-actions {
            flex-direction: column;
          }
          
          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
}
