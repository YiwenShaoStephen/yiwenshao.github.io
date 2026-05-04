# yiwenshao.github.io

Personal site, built with [Astro](https://astro.build) + Tailwind CSS v4.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # → ./dist
npm run preview  # serves ./dist
```

## Content

All content lives in `src/data/` as typed TS — add a paper by editing one entry:

| File | What |
|---|---|
| `site.ts`       | name, role, affiliation, social links |
| `openSource.ts` | open-source toolkits |
| `updates.ts`    | news entries |
| `works.ts`      | recent works + selected publications, grouped by topic |
| `experience.ts` | positions |

Thumbnails and logos go in `public/images/`.

## Deploy

GitHub Actions in `.github/workflows/deploy.yml` builds on every push to
`main` and publishes to GitHub Pages. To enable: in repo settings →
Pages → Source: `GitHub Actions`.

## Legacy

The previous single-file site is preserved under `legacy/` for reference.
