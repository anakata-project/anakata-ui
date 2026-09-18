import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  extends: ['..'],
  modules: ['@nuxt/eslint'],
  css: [fileURLToPath(new URL('./app/assets/css/styleguide.css', import.meta.url))],
  eslint: {
    config: {
      // Use the generated ESLint config for lint root project as well
      rootDir: fileURLToPath(new URL('..', import.meta.url))
    }
  },
  devServer: {
    port: 3010,
  },
})
