import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "guest"
declare module "D:/Repositories/laravel-nuxt-survey/frontend/node_modules/nuxt3/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}