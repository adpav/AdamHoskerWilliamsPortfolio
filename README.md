# Adam Hosker-Williams portfolio

The portfolio is built with Astro and deployed to GitHub Pages. The existing
homepage remains a static Astro page, with its original CSS, JavaScript and
assets served from `public/`.

The GitHub Pages repository setting must use **GitHub Actions** as its
deployment source. The workflow builds and deploys from the `main` branch.

## Local development

```sh
npm ci
npm run dev
```

Create a production build with `npm run build`; preview it locally with
`npm run preview`.

## Adding a Notebook entry

Add a Markdown file under `src/content/notebook/` with this frontmatter:

```md
---
title: "A useful title"
description: "A short introduction."
published: 2026-10-26
type: note
tags:
  - Web
theme: default
featured: false
draft: false
---

Write the entry here.
```

Use one `type`: `essay`, `note`, `collection`, `experiment` or `process`. Use up to
two `tags` from the topic list in `src/notebook.ts` (e.g. `Design systems`, `AI`,
`Code`, `Web`); the build fails on anything else. Entries
marked `draft: true` are omitted from the index and build output. The optional
`theme` value is metadata for future art direction; all entries currently use
the accessible default article presentation.
