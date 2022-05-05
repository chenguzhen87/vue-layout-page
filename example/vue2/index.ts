import ElementUI from 'element-ui'
/*import VueCompositionAPI from '@vue/composition-api'
Vue.use(VueCompositionAPI)*/
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './index.vue'

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')