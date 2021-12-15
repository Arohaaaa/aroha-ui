<template>
  <div id="app">
    <app-head :height="appHeadheight"></app-head>

    <div id="app-body" :style="{ height: `calc(100% - ${appHeadheight}px)` }">
      <aside id="app-aside">
        <side-menu
          menuHeadTitle="基础平台资源整合"
          :menus="menus"
          @menu-item-click="handleMenuClick"
          :activeMenuIndex="activeMenuIndex"
          uniqueOpened
        ></side-menu>
      </aside>

      <main id="app-main">
        <!-- <tabbar :tags="tags"></tabbar> -->
        <el-scrollbar>
          <router-view class="content-body"></router-view>
        </el-scrollbar>
      </main>
    </div>
  </div>
</template>

<script>
import ConfigPath from "./config/path";
import AppHead from './views/app-head'

export default {
  components: {
    AppHead
  },
  data() {
    return {
      appHeadheight: 60,
      activeMenuIndex: '',
      menus: [
        {
          name: "布局",
          code: "grid-layout",
          icon: '栏目管理',
          openType: 'tab'
        },
        {
          name: "普通组件",
          code: "normal",
          icon: '栏目管理',
          children: [
            {
              code: "icon",
              name: "图标",
              openType: 'tab'
            },
            {
              code: "dialog",
              name: "对话框",
              openType: 'tab'
            }
          ],
        },
        {
          name: "表格组件",
          code: "table",
          icon: '栏目管理',
          children: [
            {
              name: "树-表格",
              code: "g-tree-table",
              openType: 'tab'
            },
          ],
        },
      ],
      tags: [],
    };
  },
  watch: {
    $route(newRoute) {
      this.activeMenuIndex = newRoute.name
    }
  },
  provide() {
    return {
      themeColor: '#1a8af9'
    }
  },
  methods: {
    // 菜单点击
    handleMenuClick(item) {
      if (item.openType == "tab") {
        this.$router.push({
          name: item.code,
        });
      } else if (item.openType == "window") {
        window.open(item.absolutePath, "_blank");
      }
    },
    // 添加系统菜单
    appendSystemMenus() {
      // 部署环境对象map
      const ENV_MAP = ConfigPath.ENV_MAP;
      // 部署项目地址
      const APP_MAP = ConfigPath.APP_MAP;
      let systemMenus = [];
      Object.keys(ENV_MAP).forEach((envKey) => {
        // 部署环境对象
        let { name: envName, path: envPath } = ENV_MAP[envKey];
        let menu = {};
        menu.name = envName;
        menu.code = envKey;
        menu.icon = '栏目管理'
        menu.children = [];
        Object.keys(APP_MAP).forEach((appKey) => {
          let { name: appName, path: appPath } = APP_MAP[appKey];
          menu.children.push({
            name: appName,
            code: envKey + '_' + appKey,
            absolutePath: envPath + appPath,
            openType: 'window'
          });
        });
        systemMenus.push(menu)
      });

      this.menus = this.menus.concat(systemMenus)
    },
  },
  created() {
    this.appendSystemMenus();
  },
};
</script>
