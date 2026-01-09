// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Configure for GitHub Pages - the site will be at https://getsentry.github.io/sentry-conventions/
  site: 'https://getsentry.github.io',
  base: '/sentry-conventions/',
  output: 'static',
});
