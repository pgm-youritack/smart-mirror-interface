import { createApp } from 'vue'
import App from './App.vue'
import VueCookies from 'vue-cookies'
import router from './router'
import './assets/scss/index.scss'
import { createPinia } from 'pinia'
const app = createApp(App)
app.use(createPinia())
app.use(VueCookies)
app.use(router)
router.isReady().then(() => {
  app.mount('#app')
})
