import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './APP.vue'
import router from './router'

createApp(App).use(router).use(createPinia()).mount('#app')
