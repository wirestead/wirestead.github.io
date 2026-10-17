# wirestead.github.io

Bilingual introduction page for [Wirestead](https://github.com/wirestead/wirestead).

A buildless HTML/CSS/JavaScript site using the official Wirestead brand assets. It introduces the C++ library, its four transports, and the experimental Python bindings. Reference documentation stays in the core and documentation repositories.

## Files

- `index.html`: English fallback page, content and links
- `styles.css`: responsive layout and official blue/green palette
- `language.js`: English/Korean copy, automatic language selection and switcher
- `assets/`: official logos and favicons
- `.nojekyll`: serve static files without Jekyll processing

## Preview

From this directory:

```sh
python3 -m http.server 8081 --bind 127.0.0.1
```

Open http://127.0.0.1:8081/. No dependencies or build step are needed.

## Languages

A saved language choice takes precedence. Otherwise, the browser's first preferred language selects Korean for `ko` / `ko-*` and English for other languages. No IP or location lookup is performed. The EN / 한국어 switch stores the choice under `wirestead.language` in localStorage; switching still works if storage is blocked. Without JavaScript, the page remains readable in English.

When editing English translations, update the fallback copy in `index.html` as well. Keep code samples and support claims aligned with the core and Python documentation. Do not present experimental Python support or optional TCP TLS as universal capabilities.

## Publishing

GitHub Pages publishes https://wirestead.github.io/ from the `main` branch and root directory `/`, with HTTPS enforced. Pushing to `main` triggers automatic deployment. Existing Jekyll pages and posts have been replaced by this single introduction page.
