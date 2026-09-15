# Talkware Project Pitch Landing Page

A modern, reusable React landing-page template based on the structure and content objects of [`MoriartyLink/landing-page-template`](https://github.com/MoriartyLink/landing-page-template).

The visual system is now Tailwind CSS-first, while the original route and section skeleton remains intact:

```text
Header
├── /       Hero → Features → Process → Pricing → CTA
└── /demo   Demo hero → Demo frame → Contact
Footer
```

## Quick start

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

## Fast customization

Most projects only need three editing areas:

1. `src/data/project.ts` — project identity, all feature/process/pricing objects, links, and credits.
2. `src/components/sections/` — landing-page section presentation.
3. `src/styles/globals.css` — Tailwind import, shared tokens, and the two small custom utilities.

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

This follows a small compositional UI approach: data stays separate from presentation, route pages only compose sections, and primitives own repeated visual rules. It keeps the template quick to understand without adding a framework-sized abstraction layer.

## Routes

| Route | Purpose |
| --- | --- |
| `/` | Main project pitch, value, workflow, pricing, and CTA. |
| `/demo` | Product evidence and contact section. |

The lightweight History API router is retained. Configure your host to serve `index.html` for direct requests to `/demo`.

## Attribution

Reference repository creator: **Min Thu Khaing** (GitHub: [`@MoriartyLink`](https://github.com/MoriartyLink)). See [CREDITS.md](CREDITS.md) for full acknowledgements.
