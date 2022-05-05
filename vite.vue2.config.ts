import type { ConfigEnv, UserConfigExport } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    server: {
      port: 3002
    },
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    plugins: [
      createVuePlugin(),
      {
        name: 'html-transform',
        transformIndexHtml (html: string) {
          return html.replace(/{{.*}}/, `/example/vue2/index.ts`)
        },
      },
    ],
  }
}