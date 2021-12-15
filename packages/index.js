import Dialog from './dialog'
import SvgIcon from './svg-icon'
import SideMenu from './side-menu'
import Tabbar from './tabbar'

const components = [
  Dialog,
  SvgIcon,
  SideMenu,
  Tabbar
]

// 全局注册
function bindComponents(Vue) {
  components.forEach(component => {
    Vue.component(component.name, component)
  })
}

const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return
  // 遍历注册全局组件
  bindComponents(Vue)
}

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  Dialog,
  SvgIcon,
  SideMenu,
  Tabbar
}