import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'
import { createPinia } from 'pinia'

/** @type {import('vitepress').Theme} */

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'element-plus/theme-chalk/dark/css-vars.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // use the plugin
    app.use(createPinia()) // pinia

    // https://element-plus.org/zh-CN/component/icon.html
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
      app.component(key, component)
    } // 全局注册 ElementPlusIconsVue


  }
}
