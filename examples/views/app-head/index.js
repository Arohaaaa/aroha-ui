import AppHead from './src'

AppHead.install = function (Vue) {
  Vue.component(AppHead.name, AppHead)
}

export default AppHead
