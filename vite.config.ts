import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Component from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import Unocss from 'unocss/vite'
import { presetUno, presetAttributify, presetIcons } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { VantResolver } from 'unplugin-vue-components/resolvers'

import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? './' : '/',
  plugins: [
    vue(),
    Unocss({
      // 使用Unocss
      presets: [presetUno(), presetAttributify(), presetIcons()],
      shortcuts: {
        'flex-center': 'flex justify-center items-center',
        'flex-center-col': 'flex flex-col justify-center items-center',
        'pb-tabbar': 'pb-77px',
        'pb-navbar': 'pb-54px',
      },
      transformers: [transformerDirectives()],
    }),
    Component({
      dirs: ['src/components', 'src/**/components', 'src/**/**/components'],
      resolvers: [VantResolver(), ElementPlusResolver()],
    }),
    AutoImport({
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    // 这里配置需要注意：Vite新版本resolve配置改为对象形式，如下：
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src'),
      },
      {
        find: 'views',
        replacement: resolve(__dirname, 'src/views'),
      },
      {
        find: 'routes',
        replacement: resolve(__dirname, 'src/router'),
      },
      {
        find: 'store',
        replacement: resolve(__dirname, 'src/store'),
      },
      {
        find: 'utils',
        replacement: resolve(__dirname, 'src/utils'),
      },
      {
        find: 'styles',
        replacement: resolve(__dirname, 'src/styles'),
      },
    ],
  },
})
