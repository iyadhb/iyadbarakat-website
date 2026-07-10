# iyadbarakat.com — Astro site

Marketing site + blog + landing-page engine for Iyad Barakat, built with **Astro** (static output) and deployed on **Cloudflare Pages**. Migrated from the previous hand-built static HTML (preserved under `legacy/`) with the design, all URLs, checkout links, the Kit form embed, and the `/bonus` code gate kept identical.

## Local development

```bash
npm install
npm run dev        # Astro dev server → http://localhost:4321
npm run build      # static build → dist/
npm run preview    # preview the production build
```

## Project structure

```
src/
  layouts/     BaseLayout, BlogPost, LandingPage
  components/  Nav, Footer, SeoHead, Hero, ProofStrip, ToolkitCards, FaqSection, AuthorBox
  pages/       index.astro, bonus/, privacy/, blog/ (index + [slug]), lp/ (landing pages), rss.xml.js
  content/     blog/*.md   (content collection; schema in src/content.config.ts)
  styles/      global.css  (the design system — CSS vars, components, breakpoints)
public/        robots.txt, favicons, assets/ (images, og-image)
tina/          config.ts   (TinaCMS visual editor schema)
legacy/        snapshot of the previous GitHub Pages site (reference only, not built)
```

## URLs (unchanged from the old site) + new

| URL | Notes |
|-----|-------|
| `/` | Homepage — hero, proof strip, Toolkit storefront, About, Book, Vault, Frameworks, Newsletter (Kit), Contact |
| `/bonus/` | Code-gated reader page (`PRINTREADER`), `noindex` |
| `/privacy/` | Privacy policy |
| `/blog/` | Blog index (new) |
| `/blog/<slug>/` | Blog posts (new) |
| `/lp/<name>/` | Landing pages from the reusable template (new) |
| `/rss.xml` | Blog RSS feed (new) |
| `/sitemap-index.xml` | Auto-generated sitemap (new) |
| `/robots.txt` | Allows all crawlers incl. AI (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, CCBot…) |

## Writing blog posts

Add a Markdown file to `src/content/blog/`. Frontmatter schema (`src/content.config.ts`):

```yaml
---
title: "…"
description: "…"          # meta description
publishDate: 2026-07-10
updatedDate: 2026-07-12   # optional
author: "Iyad Barakat"    # optional (default)
tags: ["AI", "consulting"]
heroImage: "/assets/…"    # optional
canonical: "https://…"    # optional
tldr: "One-paragraph answer-first summary."  # optional, rendered bold at the top (GEO)
draft: false
---
```

`draft: true` posts are excluded from the build, sitemap, and RSS.

## TinaCMS (visual editor)

`tina/config.ts` wires a visual editor over `src/content/blog`.

1. Create a project at **https://app.tina.io**, point it at this GitHub repo.
2. Copy the **Client ID** and a **read/write Token** into env vars:
   - locally: a `.env` file with `PUBLIC_TINA_CLIENT_ID=…` and `TINA_TOKEN=…`
   - on Cloudflare Pages: add the same two vars in the Pages project settings.
3. Local editing: `npm run tina` → opens the editor at `http://localhost:4321/admin`.
4. Edits are committed to git → Cloudflare auto-builds. Once creds are set, switch the Cloudflare build command to `npm run tina-build`.

> Until Tina Cloud creds exist, the site still builds and deploys with the plain `npm run build` command — Tina is additive.

## Deploy — Cloudflare Pages

**Build settings:**
- Framework preset: **Astro**
- Build command: `npm run build`  (later `npm run tina-build`)
- Build output directory: `dist`
- Node version: 18+ (repo uses 22)

**Cutover (no downtime):**
1. Connect this repo to Cloudflare Pages; deploy the branch → verify on the `*.pages.dev` preview.
2. In Cloudflare **Bot Management / “AI Scrapers and Crawlers”**, confirm AI crawlers are **not blocked** (dashboard setting, not code) — we want AI citations.
3. Only then move DNS to Cloudflare (see below). Keep the old GitHub Pages deploy live until verified.
4. Post-cutover: submit `https://iyadbarakat.com/sitemap-index.xml` in Google Search Console.

**DNS at GoDaddy** (apex + www → Cloudflare Pages). Cloudflare shows the exact target for your project; typical records:

| Type | Name | Value |
|------|------|-------|
| CNAME (or ALIAS/ANAME) | `@` | `<project>.pages.dev` |
| CNAME | `www` | `<project>.pages.dev` |

If GoDaddy won't CNAME the apex, either use Cloudflare as the DNS provider (recommended — add the domain to Cloudflare, update GoDaddy nameservers) or use the A/AAAA records Cloudflare Pages provides for the apex. Remove the old GitHub Pages records (the `185.199.108–111.153` A records and the `iyadhb.github.io` CNAME) once cutover is confirmed.
