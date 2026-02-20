# Marcus Astro Theme

A minimal, editorial Astro theme inspired by calm personal blogs and designed for technical writing.

## Features

- Structured front page with sectioned lists (Posts + Micro)
- Content collections with typed frontmatter (`posts`, `micro`)
- Responsive reading width (optimized around `880px` content column)
- Optional sticky left TOC on long-form post pages
- Light/dark mode with persistent preference (`localStorage`)
- Clearly-marked sample content included so the theme works out of the box

## Quick start

```bash
npm install
npm run dev
```

## Theme structure

- `src/layouts/BaseLayout.astro` — metadata, shell, and global header
- `src/components/Header.astro` — minimal top navigation
- `src/components/ThemeToggle.astro` — client-side theme switching
- `src/pages/` — homepage, list pages, and dynamic content routes
- `src/content/` — sample posts and micro notes

## Build checks

```bash
npm run check
npm run build
```


## Sample content note

All files under `src/content/` are intentionally demo placeholders so you can safely replace them.


## Where to see the sample website

This repo now supports **two Astro deployments from one repository**:

- **Production**: `main`/`master` branch → `gh-pages` root
- **Development preview**: `dev` branch → `gh-pages/preview/`

For a project site, URLs are typically:

- Prod: `https://sudheer.github.io/marcus-astro/`
- Dev: `https://sudheer.github.io/marcus-astro/preview/`

## GitHub Pages setup (one-time)

Yes, this is mostly a one-time setup.

1. Open **Actions** and run **Bootstrap gh-pages branch** once.
   - This creates `gh-pages` so it appears in Pages branch selection.
2. Open **Settings → Pages** in your repository.
3. Under **Build and deployment**, choose:
   - **Source**: `Deploy from a branch`
   - **Branch**: `gh-pages`
   - **Folder**: `/(root)`
4. Save.

After that:

- pushing to `main`/`master` runs `.github/workflows/deploy-prod.yml`
- pushing to `dev` runs `.github/workflows/deploy-dev.yml`

The workflows publish to the same `gh-pages` branch, with prod at root and dev under `/preview/`.

## Review website before merging (PR previews)

A pull request preview workflow is included at `.github/workflows/preview.yml`.

When you open or update a PR:

1. GitHub Actions builds the site.
2. It uploads the built static site as an artifact (`site-preview-dist`).
3. It comments on the PR with a direct workflow-run link and download instructions.

This lets you review the built website safely before merging to `main`, without requiring Pages preview permissions.


## Troubleshooting `/preview/` 404

If `https://sudheer.github.io/marcus-astro/preview/` shows 404, it usually means Pages is reading the wrong branch.

Verify this exact setup:

1. **Settings → Pages**
2. **Source** = `Deploy from a branch`
3. **Branch** = `gh-pages`
4. **Folder** = `/(root)`
5. Save

Then run:

- **Actions → Deploy development site** (manual run is okay) to publish `/preview/`
- **Actions → Deploy production site** to refresh root site

Important: if Pages is set to any branch other than `gh-pages` (for example your feature branch), `/preview/` will not exist there and returns 404.


### Why `gh-pages` was missing

GitHub only shows existing branches in Pages settings. If `gh-pages` was never created, it will not appear in the dropdown. Running the bootstrap workflow once fixes that.


## If you see Jekyll error on `.astro` files

If GitHub logs show `Invalid YAML front matter ... .astro`, your repo is being built by the default **pages build and deployment** (Jekyll) job on source branch files.

Fix:

1. Set **Settings → Pages → Source** to `Deploy from a branch`
2. Select branch `gh-pages`, folder `/(root)`
3. Run **Bootstrap gh-pages branch** once (if missing)
4. Re-run deploy workflows

This repository also includes `_config.yml` + `.nojekyll` fallback to avoid Jekyll parsing Astro source if branch configuration is temporarily incorrect.
