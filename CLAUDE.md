# CLAUDE.md — AI Assistant Guide for wengkhong.github.io

This file provides context and conventions for AI assistants working on this repository.

---

## Project Overview

Personal academic website for **Weng Khong Lim, PhD** — a computational genomics researcher at Duke-NUS / GIS / SingHealth. The site presents research in clinical genomics, variant interpretation, population genomics (SG10K/SG100K), and AI-driven computational methods.

Live site: https://wengkhong.github.io

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Astro](https://astro.build/) v6.0.8 |
| Language | TypeScript (strict mode) |
| Styling | Plain CSS (single `global.css`) |
| Deployment | GitHub Pages via GitHub Actions |
| Node version | >=22.12.0 |

No UI component libraries, no CSS frameworks, no client-side JavaScript frameworks. Keep it that way unless explicitly requested.

---

## Repository Structure

```
wengkhong.github.io/
├── .github/
│   └── workflows/
│       └── astro.yml           # CI/CD: build & deploy to GitHub Pages on push to main
├── public/                     # Static assets served at root
│   ├── motifs/                 # SVG decorative elements (e.g., genome-network.svg)
│   ├── logos/                  # Institutional logos (Duke-NUS, GIS, SingHealth) in SVG/PNG
│   ├── WK_Profile.png          # Profile photo
│   ├── favicon.ico / .svg
│   └── *.png                   # Additional institution logos
├── src/
│   ├── layouts/
│   │   └── MainLayout.astro    # Single shared layout for all pages
│   ├── pages/                  # One .astro file per route
│   │   ├── index.astro         # /
│   │   ├── about.astro         # /about
│   │   ├── research.astro      # /research
│   │   ├── publications.astro  # /publications
│   │   ├── tools.astro         # /tools
│   │   ├── grants.astro        # /grants
│   │   ├── talks.astro         # /talks
│   │   └── contact.astro       # /contact
│   └── styles/
│       └── global.css          # All styles live here — one file, no modules
├── astro.config.mjs            # Minimal config: sets site URL only
├── package.json
├── tsconfig.json               # Extends astro/tsconfigs/strict
├── COPY.md                     # Content reference for all page copy
├── TODO.md                     # In-progress site tasks tracker
└── README.md                   # Project overview and dev commands
```

---

## Development Commands

```bash
npm install         # Install dependencies
npm run dev         # Start dev server at http://localhost:4321 with hot reload
npm run build       # Build static output to dist/
npm run preview     # Preview the production build locally
npm run astro       # Direct Astro CLI access
```

Always use `npm` (not yarn or pnpm). The CI uses `npm ci` with `package-lock.json`.

---

## Navigation Architecture

Primary nav (always visible): **Home, Research, Publications, Contact**

Secondary nav (under "More" dropdown): includes **Tools, Grants, Talks**. The **About** page may also appear there in the hardcoded nav, but note that `/about` is not currently included in the `isMoreActive` logic.

This is hardcoded in `MainLayout.astro`. When adding or renaming pages, update:
1. The `navItems` array in `src/layouts/MainLayout.astro`
2. The primary nav `<a>` tags in the header (currently `navItems[0]`, `[2]`, `[3]`, `[7]`)
3. The `isMoreActive` condition for any page in the dropdown that should cause "More" to appear active (for example, include `/about` there if that is the intended behavior)

---

## Layout & Component Conventions

- **One layout to rule them all:** `MainLayout.astro` wraps every page. Props: `title: string`, `description?: string`.
- **No component library.** Reusable UI (cards, grids, sections) is achieved via CSS classes defined in `global.css`.
- **Slot pattern:** Each page simply uses `<MainLayout title="..."><content here /></MainLayout>`.
- **No client-side JS.** All interactivity (dropdown nav uses `<details>/<summary>`) is handled via native HTML/CSS.

---

## CSS Conventions

All styles are in `src/styles/global.css`. There are no CSS modules, no Tailwind, no scoped styles in `.astro` files.

### Design tokens (CSS custom properties)

```css
--bg: #f8f7f3;           /* Warm beige page background */
--surface: #ffffff;       /* Card/component background */
--surface-soft: #f2f0e8;  /* Subtle alternate surface */
--ink: #1b1f23;           /* Primary text */
--ink-muted: #4e5963;     /* Body text (p, li) */
--ink-soft: #6c7780;      /* Secondary/caption text */
--accent: #0f4c5c;        /* Links, primary accent (teal) */
--accent-2: #1f6f8b;      /* Secondary accent (lighter teal) */
--border: #d8d8d1;        /* Dividers and card borders */
--radius: 12px;           /* Card border-radius */
--container: 1120px;      /* Max content width */
--spacing-1 to --spacing-6: 0.5rem to 3rem  /* Spacing scale */
```

### Typography

- **Body:** `"Source Serif 4", "Iowan Old Style", Palatino, serif` — used for body text
- **Headings:** `"Avenir Next", "Trebuchet MS", "Segoe UI", sans-serif` — used for h1–h4
- **Font sizes:** Use `clamp()` for fluid responsive scaling (already established in global.css)
- **Base font size:** 18px

### Key CSS classes

| Class | Purpose |
|---|---|
| `.site-shell` | Max-width container with horizontal padding |
| `.site-header` | Sticky header with backdrop blur |
| `.site-nav` | Primary navigation row |
| `.nav-more` | `<details>` dropdown for secondary nav |
| `.hero` | Full-width hero section (index page) |
| `.card` | Bordered, rounded content card |
| `.page-title` | Consistent `<h1>` style across inner pages |
| `.page-intro` | Lead paragraph beneath page title |

### Responsive breakpoint

Single breakpoint at **900px** for mobile layout changes. Keep mobile styles in `@media (max-width: 900px)` blocks.

### Design philosophy

- Light mode only — no dark mode toggle
- Typography-first hierarchy — let spacing and type weight carry structure
- Minimal visual chrome — avoid gradients on most components and avoid heavy shadows; limited exceptions like the homepage `.hero` gradient are acceptable
- The background has a subtle radial gradient applied at `body` level; don't replicate that treatment broadly across components

---

## Content Guidelines

- **Audience:** Collaborators, clinicians, funders, and research community — not the general public
- **Tone:** Clear, concise, high-signal; avoid jargon where possible
- **Copy source:** `COPY.md` contains the canonical text for all pages — consult it before editing page content
- **Email:** Uses obfuscation (`wengkhong [at] ...` pattern) to reduce spam — preserve this convention in the contact page
- **External links:** Open in new tab (`target="_blank" rel="noopener noreferrer"`) for links to Google Scholar, institutional sites, etc.

---

## Adding a New Page

1. Create `src/pages/<name>.astro`
2. Use `MainLayout` with a descriptive `title` and `description`
3. Add the route to `navItems` in `MainLayout.astro`
4. Wire it into the primary nav or "More" dropdown (update `isMoreActive` if needed)
5. Add CSS classes to `global.css` — no page-scoped styles

---

## Adding Assets

- Images/SVGs go in `public/` — they are served at the root URL (e.g., `public/foo.png` → `/foo.png`)
- Logos go in `public/logos/`
- Decorative SVG motifs go in `public/motifs/`
- Prefer SVG over PNG for logos

---

## CI/CD and Deployment

- **Branch:** `main` — all merges to `main` trigger automatic deployment
- **Workflow:** `.github/workflows/astro.yml`
- **Process:** checkout → detect package manager → setup Node 22.12.0 → `npm ci` → `astro build` → upload `dist/` → deploy to GitHub Pages
- **Concurrency:** Only one deployment runs at a time; in-progress deployments are never cancelled
- **No staging environment** — the only live environment is https://wengkhong.github.io

Never push directly to `main` for experimental or in-progress changes. Use feature branches.

---

## TypeScript

- Config extends `astro/tsconfigs/strict` — strict mode is on
- Astro component props should use `interface Props` with typed fields
- The `description` prop in `MainLayout` has a default value; follow this pattern for optional props

---

## What Not to Do

- Do not add CSS frameworks (Tailwind, Bootstrap, etc.)
- Do not add JavaScript frameworks (React, Vue, Svelte, etc.) as Astro integrations unless explicitly requested
- Do not add dark mode — it is intentionally excluded
- Do not create separate CSS files per page or component — all styles go in `global.css`
- Do not add new npm dependencies without explicit need — the current zero-dependency-beyond-astro stance is intentional
- Do not modify `astro.config.mjs` without reason — it is intentionally minimal
- Do not commit `dist/`, `.astro/`, `node_modules/`, or `.env*` files (covered by `.gitignore`)
