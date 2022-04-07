import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "D:/Repositories/laravel-nuxt-survey/frontend/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}