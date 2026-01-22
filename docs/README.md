# Sentry Conventions Documentation

This is the Astro-based documentation site for Sentry Semantic Conventions.

## Features

- **Static Site Generation** - Built with [Astro](https://astro.build) for fast, static pages
- **Instant Search** - cmd+k / ctrl+k search powered by [Pagefind](https://pagefind.app)
- **Type-Safe Content** - Content collections with Zod schema validation
- **Interactive Components** - Svelte components for search and forms
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Attribute Creation** - Form-based attribute creation with GitHub PR integration

## Development

```bash
# Install dependencies (from repo root, docs is a workspace)
yarn install

# Start dev server
yarn workspace docs dev

# Build for production
yarn workspace docs build

# Preview production build
yarn workspace docs preview
```

Or from within the `docs/` directory:

```bash
yarn dev
yarn build
yarn preview
```

## Content Collections

The site reads directly from the `model/` directory in the repository root:

- **Attributes**: `model/attributes/**/*.json` - Span and breadcrumb attribute definitions
- **Names**: `model/name/*.json` - Span name template definitions

Content is validated against Zod schemas matching the JSON schemas in `schemas/`.

## Deployment

The site is automatically deployed to GitHub Pages via the `.github/workflows/docs.yml` workflow:

1. On push to `main`, the workflow builds the Astro site
2. Pagefind generates the search index
3. The `dist/` folder is deployed to GitHub Pages

The site is available at: https://getsentry.github.io/sentry-conventions/

## Adding New Features

### Adding a new page

Create a new `.astro` file in `src/pages/`. The file path determines the URL:
- `src/pages/foo.astro` → `/sentry-conventions/foo/`
- `src/pages/bar/index.astro` → `/sentry-conventions/bar/`

### Adding interactive components

For client-side interactivity, create a Svelte component (`.svelte`) and use the `client:load` directive:

```astro
---
import MyComponent from '../components/MyComponent.svelte';
---

<MyComponent client:load />
```

### Styling

The project uses Tailwind CSS with a custom design system:

- **Global styles**: `src/styles/global.css` contains Tailwind directives, base styles, and custom component classes
- **Tailwind config**: `tailwind.config.mjs` defines the design tokens (colors, spacing, etc.)
- **Component styles**: Use Tailwind utility classes in Astro/Svelte components, or Astro's scoped `<style>` blocks for component-specific styles
