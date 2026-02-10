/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Background colors
        'bg-primary': 'var(--color-bg-primary)',
        'bg-secondary': 'var(--color-bg-secondary)',
        'bg-elevated': 'var(--color-bg-elevated)',
        'bg-hover': 'var(--color-bg-hover)',

        // Text colors
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'text-muted': 'var(--color-text-muted)',

        // Accent
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          soft: 'var(--color-accent-soft)',
        },

        // Border colors
        border: {
          DEFAULT: 'var(--color-border)',
          light: 'var(--color-border-light)',
        },

        // Semantic colors
        success: {
          DEFAULT: 'var(--color-success)',
          soft: 'var(--color-success-soft)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          soft: 'var(--color-warning-soft)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          soft: 'var(--color-error-soft)',
        },
        info: {
          DEFAULT: 'var(--color-info)',
          soft: 'var(--color-info-soft)',
        },

        // Code syntax highlighting
        'code-string': 'var(--color-code-string)',
        'code-number': 'var(--color-code-number)',

        // PII indicator colors
        pii: {
          true: 'var(--color-pii-true)',
          'true-soft': 'var(--color-pii-true-soft)',
          maybe: 'var(--color-pii-maybe)',
          'maybe-soft': 'var(--color-pii-maybe-soft)',
          false: 'var(--color-pii-false)',
          'false-soft': 'var(--color-pii-false-soft)',
        },

        // OTEL indicator colors
        otel: {
          true: 'var(--color-otel-true)',
          'true-soft': 'var(--color-otel-true-soft)',
          false: 'var(--color-otel-false)',
          'false-soft': 'var(--color-otel-false-soft)',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Consolas', 'monospace'],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
      },
      spacing: {
        header: '64px',
        sidebar: '260px',
      },
      maxWidth: {
        content: '1280px',
        form: '700px',
        page: '768px',
        'content-wide': '896px',
      },
      borderRadius: {
        sm: '4px',
        md: '8px',
        lg: '12px',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.3)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.3)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.4)',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
      },
    },
  },
  plugins: [],
};
