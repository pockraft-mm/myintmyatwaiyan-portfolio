# Architecture

The project keeps the reference skeleton but separates data, presentation, and reusable primitives.

```text
index.html
└── src/main.tsx
    └── App.tsx
        └── MainLayout
            ├── Header
            ├── Active page
            │   ├── LandingPage
            │   │   ├── HeroSection
            │   │   ├── FeaturesSection
            │   │   ├── ProcessSection
            │   │   ├── PricingSection
            │   │   └── CtaSection
            │   └── DemoPage
            └── Footer
```

`src/data/project.ts` is the content boundary. `src/components/ui/` holds stable visual primitives. Pages remain thin composition layers, so a section can be reordered, replaced, or reused without rewriting the rest of the route.

Tailwind CSS v4 is integrated through the official Vite plugin. Project tokens and custom utilities live in `src/styles/globals.css`; ordinary styling stays next to the markup as utility classes.
