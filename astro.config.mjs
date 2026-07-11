// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import compress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://iyadbarakat.com',
  integrations: [
    // Keep noindex pages out of the sitemap (a sitemap must not advertise
    // noindex URLs). /vault + /operating-system are noindex until Lemon Squeezy
    // is live — remove this filter (and their noindex) at launch so they index.
    sitemap({
      filter: (page) => !/\/(vault|operating-system)\//.test(page),
    }),
    mdx(),
    // Image-only optimisation at build time (via sharp). Any asset — including a
    // Canva-exported hero dropped into public/assets — is compressed consistently
    // with no per-image work.
    // CSS/HTML/SVG/JS compression are intentionally OFF: this library's CSS
    // minifier strips @media queries, which silently broke every responsive
    // breakpoint on the live site (hamburger nav, mobile layouts). Astro/Vite
    // already minify CSS/HTML/JS correctly (with @media intact), so we only rely
    // on this integration for images. The /admin output is excluded outright.
    compress({
      Image: true,
      CSS: false,
      HTML: false,
      SVG: false,
      JavaScript: false,
      Exclude: [/admin\//],
    }),
  ],
  // Static output (default) — Cloudflare Pages serves the built dist/ at the edge.
  vite: {
    // Target older Safari so the CSS minifier keeps traditional `max-width`
    // media queries instead of the modern `width<=…` range syntax (which needs
    // Safari 16.4+). Keeps responsive breakpoints working on older iPhones.
    build: { cssTarget: ['safari13', 'chrome90', 'firefox90'] },
  },
});
