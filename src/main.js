import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@wwtdev/bsds-components-vue3/components.css'
import './index.css'

createApp(App).use(router).mount('#app')
