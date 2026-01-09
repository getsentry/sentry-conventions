/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Background colors
        'bg-primary': '#111318',
        'bg-secondary': '#181b21',
        'bg-elevated': '#1f2329',
        'bg-hover': '#262b33',

        // Text colors
        'text-primary': '#d4d7db',
        'text-secondary': '#8b919a',
        'text-muted': '#5c6370',

        // Accent
        accent: {
          DEFAULT: '#9580ff',
          hover: '#a899ff',
          soft: 'rgba(149, 128, 255, 0.12)',
        },

        // Border colors
        border: {
          DEFAULT: '#282d36',
          light: '#343a45',
        },

        // Semantic colors
        success: '#50a060',
        warning: '#d4a72c',
        error: '#c25450',
        info: '#5c9fd4',

        // PII indicator colors
        pii: {
          true: '#c25450',
          maybe: '#d4a72c',
          false: '#50a060',
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
