import { StateTree } from 'pinia'
import 'vue-router'
/* eslint-disable import/no-duplicates */

declare interface Window {
  // extend the window
  __INITIAL_STATE__?: {
    pinia: StateTree
  }
}

// with vite-plugin-md, markdowns can be treat as Vue components
declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const component: ComponentOptions
  export default component
}

declare module 'vue-router' {
  import { Pinia } from 'pinia'

  export interface Router {
    pinia: Pinia
  }
}
