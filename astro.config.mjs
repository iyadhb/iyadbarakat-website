// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import compress from '@playform/compress';

// https://astro.build/config
export default defineConfig({
  site: 'https://iyadbarakat.com',
  integrations: [
    sitemap(),
    mdx(),
    // Optimise built output at build time (images via sharp, plus CSS/HTML/SVG).
    // Runs on every build, so any asset — including a Canva-exported hero dropped
    // into public/assets — is compressed consistently with no per-image work.
    // JavaScript is skipped (Astro/Vite already minify, and it avoids reprocessing
    // the large prebuilt Tina admin bundle); the /admin output is excluded outright
    // to leave that third-party app untouched.
    compress({
      Image: true,
      SVG: true,
      CSS: true,
      HTML: true,
      JavaScript: false,
      Exclude: [/admin\//],
    }),
  ],
  // Static output (default) — Cloudflare Pages serves the built dist/ at the edge.
});
