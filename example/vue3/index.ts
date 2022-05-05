import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './index.vue'


createApp(App)
.use(ElementPlus)
.mount('#app')