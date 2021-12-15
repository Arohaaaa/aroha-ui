import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 通用组件
const Icon = () => import('../views/components/icon/index.vue')
const Dialog = () => import('../views/components/dialog/index.vue')
// 表格组件
const GTable = () => import('../views/table/g-table.vue')
const GTreeTable = () => import('../views/table/g-tree-table.vue')
// 布局页面
const GridLayout = () => import('../views/grid-layout/index.vue')
console.log('GridLayout: ', GridLayout);

// 为每个组件创建一个单独的路由页面
const routes = [
  {
    path: '/icon',
    name: 'icon',
    component: Icon
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: Dialog
  },
  {
    path: '/g-table',
    name: 'g-table',
    component: GTable
  },
  {
    path: '/g-tree-table',
    name: 'g-tree-table',
    component: GTreeTable
  },
  {
    path: '/grid-layout',
    name: 'grid-layout',
    component: GridLayout
  }
]

// 捕获重复导航错误
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
  routes
})