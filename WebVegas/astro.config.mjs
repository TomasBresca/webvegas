// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    react()
  ],
  output: 'static',
  build: {
    format: 'directory',
    assets: '_astro'
  },
  compressHTML: true, 
  scopedStyleStrategy: 'where'
});
