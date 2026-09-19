import type { ApiError } from '../composables/useApi'

declare module '#app' {
  interface RuntimeNuxtHooks {
    'anakata:api-error': (error: ApiError) => void
  }
}

declare module 'nuxt/schema' {
  interface AppConfig {
    anakata?: {
      displayTimeZone?: string
    }
  }
}

export {}
