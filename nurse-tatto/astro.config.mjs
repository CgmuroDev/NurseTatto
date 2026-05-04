import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://cgmurodev.github.io',
  base: '/NurseTatto',
  integrations: [tailwind()]
});
