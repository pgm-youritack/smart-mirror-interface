import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/scss/index.scss'
import store from './store'
import { createPinia } from 'pinia'
const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(store)
app.mount('#app')
