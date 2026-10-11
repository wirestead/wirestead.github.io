---
layout: home
title: Wirestead
---

<style>
  .wirestead-logo { display: block; background: #fff; }
  @media (prefers-color-scheme: dark) {
    .wirestead-logo { background: #0f172a; }
  }
</style>
<picture class="wirestead-logo">
  <source srcset="{{ '/assets/wirestead-logo-dark.svg' | relative_url }}" media="(prefers-color-scheme: dark)">
  <img src="{{ '/assets/wirestead-logo-horizontal.svg' | relative_url }}" alt="Wirestead" width="620" height="160" style="max-width: 100%; height: auto;">
</picture>

**Robust, simple async communication for modern C++20.**
Serial · TCP · UDP · UDS

`wirestead` provides a unified interface for asynchronous communication across
transports, letting applications switch between Serial, TCP, UDP, and Unix
Domain Sockets with minimal code changes.

- [Source code](https://github.com/wirestead/wirestead)
- [Documentation](/docs/)
- [GitHub organization](https://github.com/wirestead)
