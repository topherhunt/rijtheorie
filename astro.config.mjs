// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

// SITE_URL / BASE_PATH are set by the deploy workflow (e.g. GitHub Pages project sites live under /<repo>/).
export default defineConfig({
  site: process.env.SITE_URL ?? 'http://localhost:4321',
  base: process.env.BASE_PATH ?? '/',
  trailingSlash: 'always',
  integrations: [mdx(), preact()],
  vite: { plugins: [tailwindcss()] },
});
