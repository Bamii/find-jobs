import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'
require('dotenv').config()

createApp(App).use(router).mount('#app')
