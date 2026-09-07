# Website TODO

> Status verified against the live repo (last check: after publications & homepage refresh).
> Deployments are green; tests pass (20/20 locally).

## 🔧 Setup / Infrastructure
- [x] Confirm GitHub Pages deployment is stable
- [x] Verify base URL is correct for root domain (wengkhong.github.io)
- [x] Clean up old repository (wengkhonglim if no longer needed)
- [ ] Add custom domain (optional, future)

## 🏠 Home Page
- [x] Add name, title, and positioning statement
- [x] Add key highlights (Key Contributions cards + Selected Work; the 4-card metrics grid was removed by request)
- [x] Add quick links (Scholar, GitHub)
- [ ] Add CV quick link (no CV asset exists yet — see Future: downloadable CV)
- [x] Ensure clean above-the-fold layout

## 👤 About Page
- [x] Write concise professional bio
- [x] Add career trajectory
- [x] Add research philosophy
- [ ] Optional: teaching / leadership

## 🔬 Research Page (HIGH PRIORITY)
- [x] Structure into 4 themes (Clinical, Population, AI, Functional)
- [x] Write short summaries for each
- [x] Add key outputs — new data-driven "Key Outputs" section links flagship papers (DOIs) and all tools

## 📚 Publications  ✅ expanded & verified
- [x] Selected publications (10 entries, all metadata verified via Crossref/PubMed)
- [x] Link Google Scholar profile
- [x] Highlight SG10K_Med Nature Communications paper (senior author, featured)
- [x] Add TMEM63B AJHG 2026 work
- [x] Lead-author papers prioritised; role badges; DOI buttons

## 🛠 Tools / Software
- [x] List internal tools (7 entries)
- [ ] Add GitHub links — **0 of 7 tools have links** (need user to confirm which projects are public / repo URLs)
- [x] Keep descriptions concise

## 💰 Grants & Projects
- [x] List active grants (SG100K, PRISM — OF-IRG removed by request)
- [ ] Add funding amounts (optional)
- [ ] Highlight leadership roles — only SG100K has `role: Program leadership`; PRISM entry lacks a role

## 🎤 Talks
- [x] Add recent invited talks (3)
- [x] Add upcoming talks (APCHG 2025)
- [x] Keep to key highlights only

## 🤝 Collaborators (optional)
- [ ] Add key collaborators (KKH, GIS, etc.)

## 📬 Contact
- [x] Add institutional email (obfuscated)
- [x] Add links (Scholar, GitHub)
- [x] Ensure no spam exposure

## 🎨 Design / UX
- [x] Minimal, academic style
- [x] Mobile responsiveness (900px breakpoint)
- [x] Typography-first hierarchy
- [x] Consistent spacing, compact publication cards

## ⚡ Performance
- [x] Optimise hero image — WK_Profile.png (1.1 MB) → WK_Profile.jpg (31 KB, 422×560); total site 1.3 MB → 208 KB
- [x] No heavy non-image assets; single CSS file; no client JS

## 🔒 Security / CI
- [x] Pin GitHub Actions to commit SHA (checkout, setup-node, configure-pages, upload-pages-artifact, deploy-pages — all pinned with version comments)
- [x] Review workflow permissions (minimal: read contents, write pages, id-token)
- [x] No secrets in repo

## 🧹 Cleanup
- [x] Remove unused public assets (5 files removed: logos/duke-nus.svg, logos/gis.svg, logos/singhealth-duke-nus.svg, favicon.svg, singhealth-dukenus-clean.svg)
- [x] .gitignore covers dist/, .astro/, node_modules/, test-results/
- [x] Naming conventions standardised (kebab-case data files)

## 🚀 Future Enhancements
- [ ] Add blog / notes section (optional)
- [ ] Add case studies (variant interpretation examples)
- [ ] Add downloadable CV (PDF) — also unlocks Home-page CV link
- [ ] Add media / press section
- [ ] Consider h-index / citation metric (if desired — currently intentionally absent)