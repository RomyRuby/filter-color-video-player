/*
 * @Date: 2023-10-18 15:14:20
 * @LastEditTime: 2023-10-19 11:30:39
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import { fileURLToPath, URL } from 'node:url';
import AutoImport from 'unplugin-auto-import/vite';
import ElementPlus from 'unplugin-element-plus/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  dedupe: ['vue'],

  server: {
    host: '0.0.0.0',
    port: 8080,
    proxy: {
      "/api": {
        target: "http://101.133.130.23:8091",
        // target:"http://172.16.0.181:8091",
        // target: "http://172.20.102.97:8081",//后端测试地址
        // target: "http://172.21.102.97:8080",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },

  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },

  build: {
    lib: {
      entry: './src/views/RemoveVideoBackground.vue',
      name: 'filter-green-video-player'
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },

  plugins: [
    vue(),
    ElementPlus({}),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [ElementPlusResolver()]
    })
  ],
  css: {
    postcss: {
      plugins: [autoprefixer()]
    }
  }
});
