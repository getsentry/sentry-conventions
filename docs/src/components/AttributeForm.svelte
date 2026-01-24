<script lang="ts">
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

const ATTRIBUTE_TYPES = ['string', 'boolean', 'integer', 'double', 'string[]', 'boolean[]', 'integer[]', 'double[]'];

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

let formData: FormData = {
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
};

let errors: Partial<Record<keyof FormData, string>> = {};
let jsonPreview = '';

function updateField(field: keyof FormData, value: string | boolean) {
  formData = { ...formData, [field]: value };
  errors = { ...errors, [field]: undefined };
}

function generateJson(): string {
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
    try {
      const parsed = JSON.parse(formData.example);
      json.example = parsed;
    } catch {
      json.example = formData.example;
    }
  }

  if (formData.aliases.trim()) {
    json.alias = formData.aliases
      .split(',')
      .map((a) => a.trim())
      .filter(Boolean);
  }

  return JSON.stringify(json, null, 2);
}

function validate(): boolean {
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

  errors = newErrors;
  return Object.keys(newErrors).length === 0;
}

function handlePreview() {
  if (validate()) {
    jsonPreview = generateJson();
  }
}

function handleSubmit() {
  if (!validate()) return;

  const json = generateJson();
  const filename = formData.key.replace(/\./g, '__').replace(/<key>/g, '_key_') + '.json';
  const filePath = `model/attributes/${formData.category}/${filename}`;

  const githubUrl = new URL('https://github.com/getsentry/sentry-conventions/new/main');
  githubUrl.searchParams.set('filename', filePath);
  githubUrl.searchParams.set('value', json);
  githubUrl.searchParams.set('message', `feat(attributes): Add ${formData.key} attribute`);
  githubUrl.searchParams.set(
    'description',
    `Adds the \`${formData.key}\` attribute to the ${formData.category} category.\n\n${formData.brief}`,
  );

  window.open(githubUrl.toString(), '_blank');
}
</script>

<div class="max-w-form">
  <div class="bg-bg-secondary border border-border rounded-lg p-6 mb-6">
    <h3 class="text-lg mb-5 pb-3 border-b border-border">Basic Information</h3>
    
    <div class="mb-4">
      <label for="category" class="block text-sm font-medium text-text-primary mb-2">Category *</label>
      <select
        id="category"
        bind:value={formData.category}
        on:change={() => errors = { ...errors, category: undefined }}
        class={errors.category ? "form-input form-input-error" : "form-input"}
      >
        <option value="">Select a category...</option>
        {#each CATEGORIES as cat}
          <option value={cat}>{cat}</option>
        {/each}
      </select>
      {#if errors.category}
        <span class="block text-xs text-error mt-1">{errors.category}</span>
      {/if}
    </div>

    <div class="mb-4">
      <label for="key" class="block text-sm font-medium text-text-primary mb-2">Attribute Key *</label>
      <input
        id="key"
        type="text"
        placeholder="e.g., http.request.method"
        bind:value={formData.key}
        on:input={() => errors = { ...errors, key: undefined }}
        class={errors.key ? "form-input form-input-error" : "form-input"}
      />
      <span class="block text-xs text-text-muted mt-1">Use lowercase with dots. For dynamic keys, use &lt;key&gt;.</span>
      {#if errors.key}
        <span class="block text-xs text-error mt-1">{errors.key}</span>
      {/if}
    </div>

    <div class="mb-4">
      <label for="brief" class="block text-sm font-medium text-text-primary mb-2">Description *</label>
      <textarea
        id="brief"
        placeholder="A brief description of what this attribute represents"
        bind:value={formData.brief}
        on:input={() => errors = { ...errors, brief: undefined }}
        rows="3"
        class={errors.brief ? "form-input form-input-error" : "form-input"}
      ></textarea>
      {#if errors.brief}
        <span class="block text-xs text-error mt-1">{errors.brief}</span>
      {/if}
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="mb-4">
        <label for="type" class="block text-sm font-medium text-text-primary mb-2">Type *</label>
        <select
          id="type"
          bind:value={formData.type}
          class="form-input"
        >
          {#each ATTRIBUTE_TYPES as type}
            <option value={type}>{type}</option>
          {/each}
        </select>
      </div>

      <div class="mb-4">
        <label for="example" class="block text-sm font-medium text-text-primary mb-2">Example Value</label>
        <input
          id="example"
          type="text"
          placeholder="e.g., GET"
          bind:value={formData.example}
          class="form-input"
        />
      </div>
    </div>
  </div>

  <div class="bg-bg-secondary border border-border rounded-lg p-6 mb-6">
    <h3 class="text-lg mb-5 pb-3 border-b border-border">PII Information</h3>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div class="mb-4">
        <label for="piiKey" class="block text-sm font-medium text-text-primary mb-2">Contains PII? *</label>
        <select
          id="piiKey"
          bind:value={formData.piiKey}
          class="form-input"
        >
          <option value="false">No - never contains PII</option>
          <option value="maybe">Maybe - could contain PII</option>
          <option value="true">Yes - always contains PII</option>
        </select>
      </div>

      <div class="mb-4">
        <label for="piiReason" class="block text-sm font-medium text-text-primary mb-2">PII Reason</label>
        <input
          id="piiReason"
          type="text"
          placeholder="Optional explanation"
          bind:value={formData.piiReason}
          class="form-input"
        />
      </div>
    </div>
  </div>

  <div class="bg-bg-secondary border border-border rounded-lg p-6 mb-6">
    <h3 class="text-lg mb-5 pb-3 border-b border-border">Additional Options</h3>
    
    <div class="mb-3">
      <label class="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
        <input
          type="checkbox"
          bind:checked={formData.isInOtel}
          class="w-[18px] h-[18px] accent-accent"
        />
        <span>Defined in OpenTelemetry Semantic Conventions</span>
      </label>
    </div>

    <div class="mb-3">
      <label class="flex items-center gap-2 text-sm text-text-secondary cursor-pointer">
        <input
          type="checkbox"
          bind:checked={formData.hasDynamicSuffix}
          class="w-[18px] h-[18px] accent-accent"
        />
        <span>Has dynamic suffix (e.g., http.response.header.&lt;key&gt;)</span>
      </label>
    </div>

    <div class="mb-4">
      <label for="aliases" class="block text-sm font-medium text-text-primary mb-2">Aliases</label>
      <input
        id="aliases"
        type="text"
        placeholder="Comma-separated list of aliases"
        bind:value={formData.aliases}
        class="form-input"
      />
      <span class="block text-xs text-text-muted mt-1">Other attribute names that map to this one</span>
    </div>
  </div>

  <div class="flex gap-3 justify-end flex-col sm:flex-row">
    <button 
      type="button" 
      class="btn btn-secondary justify-center"
      on:click={handlePreview}
    >
      Preview JSON
    </button>
    <button 
      type="button" 
      class="btn btn-primary justify-center"
      on:click={handleSubmit}
    >
      Create on GitHub
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
      </svg>
    </button>
  </div>

  {#if jsonPreview}
    <div class="bg-bg-secondary border border-border rounded-lg p-4 mt-6">
      <h4 class="text-sm mb-3 text-text-muted">JSON Preview</h4>
      <pre class="m-0 bg-bg-elevated"><code>{jsonPreview}</code></pre>
    </div>
  {/if}
</div>
