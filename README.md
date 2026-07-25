# wirestead.github.io

Landing page and blog for the Wirestead project, published at
https://wirestead.github.io/.

Reference documentation (user guide, contributor guide, API reference) lives
in [wirestead/wirestead-docs](https://github.com/wirestead/wirestead-docs)
and is linked from the [Docs](https://wirestead.github.io/docs/) page, not
duplicated here.

## Structure

- `index.md` — landing page (also lists recent posts)
- `docs.md` — pointer to `wirestead-docs`
- `_posts/` — blog posts (`YYYY-MM-DD-title.md`)
- `_config.yml` — Jekyll site config (theme: [minima](https://github.com/jekyll/minima))

## Local preview

```bash
bundle install
bundle exec jekyll serve
```

Site builds automatically via GitHub Pages on push to `main` (legacy Jekyll
build, no CI workflow required).

## Adding a post

Create `_posts/YYYY-MM-DD-title.md` with:

```markdown
---
layout: post
title: "Post title"
---

Post body in Markdown.
```
