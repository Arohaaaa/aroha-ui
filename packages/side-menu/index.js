import SideMenu from './src'

SideMenu.install = function (Vue) {
  Vue.component(SideMenu.name, SideMenu)
}

export default SideMenu
