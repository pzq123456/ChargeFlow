import { defineConfig } from 'vitepress';
import { themeConfig } from './themeConfig';
import { viteConfig } from './viteConfig';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "USA Chargers",
  base: '/ChargeFlow/',
  themeConfig: themeConfig,
  vite: viteConfig,
})
