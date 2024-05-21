import { defineConfig } from 'astro/config'

import UnoCSS from 'unocss/astro'

import alpine from '@astrojs/alpinejs'

export default defineConfig({
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    alpine({
      
    }),
  ],
})