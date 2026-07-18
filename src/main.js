import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './index.css'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

createApp(App).use(router).mount('#app')
