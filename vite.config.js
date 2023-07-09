import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from "path";
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
                    @use "@/styles/element/index.scss" as *;
                    @use "@/styles/var.scss" as *;
                `,
      },
    },
  },
  plugins: [
    vue(),

    //ElementPlus按需导入
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      // resolvers: [ElementPlusResolver()],
      resolvers: [
        //自定义主题色
        ElementPlusResolver({importStyle: 'sass'})
      ]
    }),
    // 或者使用 unplugin-element-plus
    /*ElementPlus({
        useSource: true,
    }),*/

  ],
  base: './',
  resolve: {
    alias: {
      /** @ 符号指向 src 目录 */
      '@': resolve(__dirname, "./src")
    }
  },


})
