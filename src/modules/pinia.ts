import { createPinia } from 'pinia'
import { UserModule } from '~/types'

export const install: UserModule = ({ isClient, router, app }) => {
  const pinia = createPinia()
  app.use(pinia)
  router.pinia = pinia

  if (isClient) {
    console.log('setting')
    // @ts-ignore
    if (window.__INITIAL_STATE__?.pinia) {
      // @ts-ignore
      pinia.state.value = JSON.parse(window.__INITIAL_STATE__.pinia)
    }
  }

  return pinia
}
