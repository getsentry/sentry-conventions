// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [svelte()],
  vite: {
    plugins: [tailwindcss()],
  },
  // Configure for GitHub Pages - the site will be at https://getsentry.github.io/sentry-conventions/
  site: 'https://getsentry.github.io',
  base: '/sentry-conventions/',
  output: 'static',
});
