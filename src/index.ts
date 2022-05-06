
import { App, Component, Plugin } from 'vue-demi'
import VueLayoutPage from './VueLayoutPage'

function defineComponentPlugin(): Plugin | Component {
  return {
    install: (app: App) => {
      app.component(VueLayoutPage.name,VueLayoutPage)
    },
    ...VueLayoutPage
  }
  
}

export default defineComponentPlugin()
