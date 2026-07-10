// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://iyadbarakat.com',
  integrations: [sitemap(), mdx()],
  // Static output (default) — Cloudflare Pages serves the built dist/ at the edge.
});
