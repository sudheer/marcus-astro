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

Right now, this repo is **not published automatically yet** unless GitHub Pages is enabled for the repository.

Once enabled, the sample site will be available at:

- `https://sudheer.github.io/marcus-astro/` (project pages), or
- your configured custom domain if you set one.

### Enable GitHub Pages (one-time)

1. Push this branch to your GitHub repo.
2. In GitHub: **Settings → Pages**.
3. Under **Build and deployment**, choose **GitHub Actions**.
4. Merge to `main` (or `master`) to trigger deployment.
5. Check the **Actions** tab for the `Deploy to GitHub Pages` workflow.

CI runs on PRs and pushes via `.github/workflows/ci.yml`.


## Review website before merging (PR previews)

A pull request preview workflow is included at `.github/workflows/preview.yml`.

When you open or update a PR:

1. GitHub Actions builds the site.
2. It uploads the built static site as an artifact (`site-preview-dist`).
3. It comments on the PR with a direct workflow-run link and download instructions.

This lets you review the built website safely before merging to `main`, without requiring Pages preview permissions.
