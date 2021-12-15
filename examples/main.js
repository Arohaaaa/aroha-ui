import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入组件库、样式
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
import gui from '../packages'
import '../packages/theme/src/index.scss'
Vue.use(gui)
import 'normalize.css/normalize.css' // 样式重置
import '@/assets/global.css'
// 导入图标
import './icons'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')