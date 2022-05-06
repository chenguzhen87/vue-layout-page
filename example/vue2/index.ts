// import VueCompositionAPI from '@vue/composition-api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import App from './index.vue'

// Vue.use(VueCompositionAPI)

Vue.use(ElementUI)

new Vue({
  render: h => h(App),
}).$mount('#app')