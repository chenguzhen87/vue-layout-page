import { App } from 'vue-demi'
import VueLayoutPage from './vueLayoutPage'

VueLayoutPage.install = (app: App)=>{
    app.component('VueLayoutPage',VueLayoutPage)
}

export default VueLayoutPage