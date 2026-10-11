# Wirestead site branding

Production assets copied from
[wirestead/wirestead](https://github.com/wirestead/wirestead/tree/main/assets):

- `wirestead-logo-horizontal.svg` / `wirestead-logo-dark.svg`: responsive homepage
  lockups for light and dark browser color preferences.
- `wirestead-favicon.svg` / `wirestead-favicon-64.png`: favicons.
- `wirestead-logo-square-1024.png`: square logo for Jekyll SEO metadata.

Refresh these files together from the core repository after a brand update.
The favicon links live in `_includes/head.html`, which preserves the Minima 2.5
head template used by GitHub Pages. The bundled Minima theme uses a light background;
dark browser preferences select the dark artwork, so the logo area supplies a
matching background.
