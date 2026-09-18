import { createResolver } from 'nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  css: [resolve('./app/assets/css/main.css')],
  colorMode: {
    preference: 'dark',
    fallback: 'dark',
  },
  fonts: {
    families: [
      { name: 'Oswald', provider: 'google', weights: [300, 400] },
      { name: 'Archivo', provider: 'google', weights: [300, 400, 500] },
      { name: 'IBM Plex Mono', provider: 'google', weights: [400, 500] },
      { name: 'Manrope', provider: 'google', weights: [400, 500, 600] },
    ],
  },
  i18n: {
    defaultLocale: 'en',
    strategy: 'no_prefix',
    locales: [
      { code: 'en', language: 'en', file: 'en.json' },
    ],
  },
})
