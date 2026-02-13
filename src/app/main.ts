import './assets/styles/tw.main.style.css'

import '@murzex/mvue/style'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
