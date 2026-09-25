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
    define: {
      'import.meta.env.VERCEL_ENV': JSON.stringify(process.env.VERCEL_ENV ?? ''),
    },
  },
  // Vercel previews serve from the root; production stays on GitHub Pages.
  site: process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://getsentry.github.io',
  base: process.env.VERCEL === '1' ? '/' : '/sentry-conventions/',
  output: 'static',
});
