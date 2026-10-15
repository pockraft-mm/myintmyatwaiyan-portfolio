# Portfolio design system and factory guide

This guide keeps future visual changes low-coupled: change design tokens or a named component style without changing project content, links, or the rest of the page.

## Active files

The current page loads its existing generated portfolio assets from `index.html`:

- `public/portfolio-state.js` owns the rendered portfolio and its current content.
- `public/portfolio-state.css` is the generated/base stylesheet. Leave it alone for visual tuning.
- `public/portfolio-design-system.css` is the custom design layer, loaded after the base stylesheet. Make visual changes here.

The stylesheet uses stable component classes such as `.site-header`, `.portfolio-hero`, `.project`, `.section-heading`, and `.service`. Prefer those classes over selectors that depend on deep markup, such as `.section > div > p`.

## Change the current look

Start with the token block at the top of `public/portfolio-design-system.css`:

```css
:root {
  --background: #fafafa;
  --foreground: #1d1d1f;
  --muted-foreground: #6e6e73;
  --border: #e8e8ed;
  --radius-control: 16px;
  --radius-card: 40px;
  --space-1: 8px;
  --space-2: 16px;
  --space-3: 24px;
  --space-4: 32px;
  --space-5: 48px;
  --space-section: 128px;
}
```

Change a token to update every component that consumes it. If a single component needs a special treatment, add a rule under that component's section in the custom stylesheet instead of changing its content or the generated bundle.

## Factory pattern for reusable themes

A theme factory supplies shared defaults and accepts focused overrides. Components consume the result through CSS variables; they do not import or know which preset created it.

```ts
export type PortfolioTheme = {
  background: string;
  foreground: string;
  mutedForeground: string;
  border: string;
  radiusControl: string;
  radiusCard: string;
  sectionSpace: string;
};

const defaultTheme: PortfolioTheme = {
  background: '#fafafa',
  foreground: '#1d1d1f',
  mutedForeground: '#6e6e73',
  border: '#e8e8ed',
  radiusControl: '16px',
  radiusCard: '40px',
  sectionSpace: '128px',
};

export function createPortfolioTheme(
  overrides: Partial<PortfolioTheme> = {},
): PortfolioTheme {
  return Object.freeze({ ...defaultTheme, ...overrides });
}
```

A future theme can be created without editing components:

```ts
const warmTheme = createPortfolioTheme({
  background: '#fbf8f3',
  foreground: '#24211e',
});
```

At the composition root, map the chosen theme to CSS custom properties once. Keep that adapter separate from content and card components. Avoid adding theme decisions inside `ProjectCard` or importing a project preset from a shared component.

## Keep project cards loosely coupled

When the portfolio is moved back into maintained TypeScript source, keep the data and view separate:

```ts
type Project = {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  url: string;
};

function ProjectCard({ project }: { project: Project }) {
  // Render one project using semantic classes from the design stylesheet.
}
```

The project list should own project details and URLs. `ProjectCard` should receive one project through props and only render it. The section should map the list to cards. This keeps edits to project content independent from visual styling.

## Safe editing workflow

1. Adjust global colors, radii, or spacing in the token block.
2. Adjust one component under its named selector if the token change is not enough.
3. Keep project copy, image paths, order, and links in the content source.
4. Keep `public/portfolio-state.css` and the generated JavaScript out of routine style edits.
5. Add any new styling to `public/portfolio-design-system.css`; its link is already after the base stylesheet in `index.html`.
