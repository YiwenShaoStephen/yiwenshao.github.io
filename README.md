# yiwenshao.github.io (v2)

Personal site + blog. Astro 5, Tailwind 4, MDX content collection, static output to `docs/`.

Design direction: **Sonic Lab** — audio is a first-class medium. The hero is a
playable full-duplex waveform, every post gets a deterministic waveform cover
derived from its slug, and posts can embed real samples with `<AudioFigure>`.

## Develop

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # writes ./docs
npm run preview
```

Node 24 with a working npm is required. On the dev pod, fnm's npm symlink is
broken; use the standalone install:

```bash
export PATH=/nljr-home/.local/node/bin:$PATH
```

## Writing a post

Drop a file in `src/content/blog/<slug>.mdx`:

```mdx
---
title: Post title
description: One sentence, shown in listings and RSS.
pubDate: 2026-08-03
lang: en                 # en | zh — drives font stack and justification
translation: <slug>      # optional: slug of the other-language version
tags: [speech, infra]
byline: optional HTML shown under the title
---

import AudioFigure from "../../components/blog/AudioFigure.astro";

Body text.

<AudioFigure src="/audio/sample.wav" label="cv_moshi · greedy" caption="fig. 1 — …" />
```

Reading time, the cover art, the table of contents, tag chips, and the RSS
entry are all derived automatically. Nothing else to register.

Bilingual pairs: give each side `translation:` pointing at the other slug. The
listing shows one row per pair with EN / 中文 buttons; the post header shows a
language toggle.

## Adding real audio

The hero figure currently animates a silent timeline. To make it play an actual
recording, drop a file under `public/audio/` and pass it in `src/pages/index.astro`:

```astro
<DuplexHero src="/audio/duplex-demo.wav" />
```

The transport, playhead, and the lit/dim split of both lanes then follow the
real `currentTime`. Same for `<AudioFigure src="…">` inside posts.

## Structure

```
src/
  components/          site chrome, DuplexHero, PostCover
    blog/              MDX-facing components (AudioFigure, Stage, Lesson, Module, …)
  content/blog/        posts (.mdx)
  data/                CV data: site, updates, works, talks, experience, openSource
  layouts/             Base, Post
  lib/signal.ts        deterministic waveform seeds + reading time
  pages/               index, blog/, rss.xml
  styles/              global.css (site), post.css (article)
```

Everything on the homepage except the blog section reads from `src/data/*.ts` —
edit those files, not the markup.
