# Sentry Conventions Documentation

This is the Astro-based documentation site for Sentry Semantic Conventions.

## Features

- **Static Site Generation** - Built with [Astro](https://astro.build) for fast, static pages
- **Instant Search** - cmd+k / ctrl+k search powered by [Pagefind](https://pagefind.app)
- **Type-Safe Content** - Content collections with Zod schema validation
- **Interactive Components** - React islands for search and forms
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

## Project Structure

```
docs/
├── src/
│   ├── components/       # Astro and React components
│   │   ├── AttributeCard.astro
│   │   ├── AttributeForm.tsx
│   │   ├── PiiBadge.astro
│   │   ├── SearchModal.tsx
│   │   └── TypeBadge.astro
│   ├── content.config.ts # Content collection schemas
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── attributes/   # Attribute documentation
│   │   └── names/        # Span name documentation
│   └── styles/
│       └── global.css
├── public/
│   ├── favicon.svg
│   └── .nojekyll
├── astro.config.mjs
└── package.json
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

For client-side interactivity, create a React component (`.tsx`) and use the `client:load` directive:

```astro
---
import MyComponent from '../components/MyComponent';
---

<MyComponent client:load />
```

### Styling

Global styles are in `src/styles/global.css` using CSS custom properties. Component-specific styles use Astro's scoped `<style>` blocks.
