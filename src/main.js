import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import CoffeePlan from './components/CoffeePlan.vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.component('CoffeePlan', CoffeePlan) // globally registered component, we can use it anywhere
app.use(router)

app.mount('#app')
