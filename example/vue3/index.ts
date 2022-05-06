import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import VueLayoutPage from '../../dist/index.es'
import '../../dist/style.css'
import App from './index.vue'

createApp(App)
.use(ElementPlus)
.use(VueLayoutPage)
.mount('#app')