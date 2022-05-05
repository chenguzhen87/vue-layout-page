import vue from '@vitejs/plugin-vue'
import type { ConfigEnv, UserConfigExport } from 'vite'

// https://vitejs.dev/config/
export default ({ command }: ConfigEnv): UserConfigExport => {
  return {
    server: {
      port: 3003
    },
    optimizeDeps: {
      exclude: ['vue-demi']
    },
    plugins: [
      vue(),
      {
        name: 'html-transform',
        transformIndexHtml (html: string) {
          return html.replace(/{{.*}}/, `/example/vue3/index.ts`)
        },
      },
    ],
  }
}