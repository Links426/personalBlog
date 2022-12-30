import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './style.css'
import App from './App.vue'
import Vant from 'vant'
import 'vant/lib/index.css'
import router from './router/index'
import 'uno.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
// 引入iconfont
import '@/static/icons/iconfont/iconfont.css'
// 引入pinia
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(router)
app.use(Vant)
app.use(ElementPlus)
app.use(pinia)
app.mount('#app')
