import Flicking from '@egjs/vue3-flicking'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

import '@egjs/vue3-flicking/dist/flicking.css'
import './assets/main.css'
// Or, if you have to support IE9
import '@egjs/vue3-flicking/dist/flicking-inline.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('Flicking', Flicking)
app.use(createPinia())
app.use(router)

app.mount('#app')
