// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rijtheorie.topherhunt.com',
  trailingSlash: 'always',
  integrations: [mdx(), preact()],
  vite: { plugins: [tailwindcss()] },
});
