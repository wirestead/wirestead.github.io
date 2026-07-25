---
layout: page
title: Docs
permalink: /docs/
---

- [API reference](https://wirestead.github.io/wirestead/) — generated from
  [wirestead/wirestead-docs](https://github.com/wirestead/wirestead-docs) and
  deployed together with the core repo's coverage report
- [User guide](https://github.com/wirestead/wirestead-docs/blob/main/docs/user/index.md)
- [Contributor guide](https://github.com/wirestead/wirestead-docs/blob/main/docs/contributor/index.md)

The user and contributor guides above are Markdown, rendered on GitHub — they
aren't published as a standalone site. `wirestead-docs` has no GitHub Pages of
its own: `wirestead/wirestead`'s Pages workflow checks it out at build time to
generate the API reference, since `actions/deploy-pages` can only publish to
the Pages site of the repo the workflow runs in.
