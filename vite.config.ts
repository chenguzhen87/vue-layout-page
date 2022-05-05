
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vueJsx({pragma: 'createElement'})],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/vueLayoutPage.ts'),
      name: 'VueLayoutPage',
      fileName: (format) => `vue-layout-page.${format}.js`
    },
    rollupOptions: {
      external: [
        'vue',
        'vue-demi',
      ],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          'vue': 'Vue',
          'vue-demi': 'VueDemi',
        }
      },
    }
  },
  optimizeDeps: {
    exclude: ['vue-demi']
  },
})