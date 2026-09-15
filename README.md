# Pockraft — React Landing Page Template

A polished, reusable landing page for presenting and launching a product. Pockraft is built with React, TypeScript, Vite, and Tailwind CSS, and is based on the structure and content objects of [`MoriartyLink/landing-page-template`](https://github.com/MoriartyLink/landing-page-template).

It includes a complete project-pitch flow and a separate demo route:

```text
Header
├── /       Hero → Features → Process → Pricing → CTA
└── /demo   Demo hero → Demo frame → Contact
Footer
```

## Quick start

Requires Node.js 20 or newer.

```bash
npm install
npm run dev
```

Production checks:

```bash
npm run typecheck
npm run build
npm run preview
```

## Customize the template

Most projects only need three editing areas:

1. `src/data/project.ts` — project identity, feature/process/pricing content, repository links, and credits.
2. `src/components/sections/` — landing-page section presentation.
3. `src/styles/globals.css` — Tailwind import, shared tokens, and the two small custom utilities.

Replace `public/pockraft-logo.png` to use your own brand mark. The header and footer both use this asset through `src/components/Logo.tsx`.

## Structure

```text
src/
  components/
    sections/      One component per landing section
    ui/            Small reusable UI primitives
    Footer.tsx
    Header.tsx
    Logo.tsx
    RouteLink.tsx
  data/
    project.ts      Single source of truth for editable content
  layouts/
    MainLayout.tsx
  lib/
    cn.ts
  pages/
    DemoPage.tsx
    LandingPage.tsx
  styles/
    globals.css
  types/
    content.ts
```

This follows a small compositional UI approach: data stays separate from presentation, route pages only compose sections, and primitives own repeated visual rules. This keeps the template quick to understand without adding a framework-sized abstraction layer.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main project pitch, value, workflow, pricing, and CTA. |
| `/demo` | Product evidence and contact section. |

The template uses a lightweight History API router. Configure your host to serve `index.html` for direct requests to `/demo`.

## Attribution

Reference repository creator: **Min Thu Khaing** (GitHub: [`@MoriartyLink`](https://github.com/MoriartyLink)). See [CREDITS.md](CREDITS.md) for full acknowledgements.
