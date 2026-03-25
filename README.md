# Weng Khong Lim — Personal Website

This repository contains the source code for my personal academic website:

👉 https://wengkhong.github.io/

## Overview

This site presents my work in:
- Clinical genomics
- Variant interpretation
- Population genomics (SG10K / SG100K)
- AI-driven computational methods in medicine

The goal is to provide a clear, concise, and professional overview of my research, tools, and contributions.

## Tech Stack

- Astro (static site generator)
- Markdown content
- GitHub Pages (deployment)

## Structure
src/
- pages/
- - index.astro
- - about.astro
- - research.astro
- - publications.astro
- - tools.astro
- - grants.astro
- - talks.astro
- - contact.astro
- layouts/
- - MainLayout.astro
- styles/
- - global.css

## Theme Notes
- Minimal academic visual direction
- Light mode only
- Shared layout/navigation across all pages
- Typography-first and content-first hierarchy

## Development

Install dependencies:

```bash
npm install
```
Run locally:
```bash
npm run dev
```
Build site:
```bash
npm run build
```
Preview build:
```bash
npm run preview
```

## Deployment

Deployment is handled via GitHub Actions.
- Push to main branch triggers build
- Output is deployed to GitHub Pages

## Notes
- Keep content concise and high-signal
- Avoid unnecessary visual complexity
- Prioritise clarity for collaborators, clinicians, and funders

## License
- MIT (or adjust as needed)