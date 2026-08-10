// @ts-check
import { defineConfig } from 'astro/config';
import svelte from '@astrojs/svelte';
import sentry from '@sentry/astro';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    sentry({
      org: 'sentry',
      project: 'conventions',
      authToken: process.env.SENTRY_AUTH_TOKEN,
      // This is a fully static site: the "server" SDK would only ever run during the build.
      enabled: { client: true, server: false },
      sourcemaps: {
        // Without a token nothing can be uploaded, so don't generate maps at all.
        disable: !process.env.SENTRY_AUTH_TOKEN,
        // Astro's static build emits maps to `dist/_astro/`, which the SDK's default
        // cleanup glob doesn't match. Delete them explicitly so they aren't published.
        filesToDeleteAfterUpload: ['./dist/**/*.map'],
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  // Configure for GitHub Pages - the site will be at https://getsentry.github.io/sentry-conventions/
  site: 'https://getsentry.github.io',
  base: '/sentry-conventions/',
  output: 'static',
});
