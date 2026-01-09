// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  // Configure for GitHub Pages - the site will be at https://getsentry.github.io/sentry-conventions/
  site: 'https://getsentry.github.io',
  base: '/sentry-conventions/',
  output: 'static',
});
