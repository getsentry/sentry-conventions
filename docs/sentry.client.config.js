import * as Sentry from '@sentry/astro';

Sentry.init({
  dsn: 'https://635643bef6bbe464fcc60fa912acf6bd@o1.ingest.us.sentry.io/4511885612941312',
  // Only report from the deployed site, not from `astro dev` / local builds.
  enabled: import.meta.env.PROD,
  environment: import.meta.env.PROD ? 'production' : 'development',
  integrations: [Sentry.browserTracingIntegration(), Sentry.replayIntegration()],
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});
