# Wang Qiheng - Academic Homepage

A bilingual, static academic homepage for PhD applications, research outreach, and evolving project documentation.

## Update content

All homepage content is in `content/site-data.js`. The file is organized by `zh` and `en`, and each section maps directly to a part of the site:

- `research.items`: current research directions
- `work.items`: project cards and expandable abstracts
- `experience.items`: research and project trajectory
- `output.items`: papers in preparation, software copyrights, and awards

For a new paper or project, copy an item in `zh.work.items`, then add its matching English entry in `main.js` inside `translatedWork()`. The layout needs no changes.

## Personal portrait

Put the final portrait at `assets/portrait.jpg`. Until then, the site intentionally shows a quiet monogram placeholder rather than a stock photo.

## Preview locally

Open `index.html` in a browser. For a more production-like preview, use any static server, for example:

```powershell
npx serve .
```

## Next evolution

This first version keeps the homepage dependency-free and easy to host. When you are ready for paper pages or a research blog, move long-form project text into `content/projects/*.md` and introduce a small static-site generator such as Astro or Eleventy; the current card data can remain the homepage index.
