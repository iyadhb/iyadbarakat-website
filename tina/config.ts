import { defineConfig } from 'tinacms';

// Branch that TinaCMS commits edits to. On Cloudflare Pages preview builds this is
// provided automatically; locally it defaults to the migration/main branch.
const branch =
  process.env.TINA_BRANCH ||
  process.env.CF_PAGES_BRANCH ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  // From Tina Cloud (https://app.tina.io) — Iyad creates the project and pastes these
  // into the environment (.env locally, Cloudflare Pages env vars in production).
  clientId: process.env.PUBLIC_TINA_CLIENT_ID || '',
  token: process.env.TINA_TOKEN || '',

  build: {
    outputFolder: 'admin', // visual editor served at /admin
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'assets',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'blog',
        label: 'Blog Posts',
        path: 'src/content/blog',
        format: 'md',
        ui: {
          router: ({ document }) => `/blog/${document._sys.filename}/`,
        },
        fields: [
          { type: 'string', name: 'title', label: 'Title', isTitle: true, required: true },
          {
            type: 'string',
            name: 'description',
            label: 'Meta description',
            required: true,
            ui: { component: 'textarea' },
          },
          { type: 'datetime', name: 'publishDate', label: 'Publish date', required: true },
          { type: 'datetime', name: 'updatedDate', label: 'Updated date' },
          { type: 'string', name: 'author', label: 'Author' },
          { type: 'string', name: 'tags', label: 'Tags', list: true },
          { type: 'image', name: 'heroImage', label: 'Hero image' },
          { type: 'string', name: 'canonical', label: 'Canonical URL' },
          {
            type: 'string',
            name: 'tldr',
            label: 'TL;DR (answer-first summary)',
            ui: { component: 'textarea' },
          },
          { type: 'boolean', name: 'draft', label: 'Draft' },
          { type: 'rich-text', name: 'body', label: 'Body', isBody: true },
        ],
      },
    ],
  },
});
