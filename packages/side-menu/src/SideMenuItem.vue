<template>
    <div class="sideMenuItem">
        <template v-if="!hasChildren(item)">
            <el-menu-item
                :index="item[elMenu.menuKey]"
                @click="elMenu.handleMenuItemClick(item)"
            >
                <span class="circle-dot"></span>
                <svg-icon size="24" :iconName="item.icon"></svg-icon>
                <span slot="title" class="menu-name">{{ item.name }}</span>
            </el-menu-item>
        </template>

        <el-submenu
            v-else
            ref="subMenu"
            :index="item[elMenu.menuKey]"
            popper-append-to-body
        >
            <template slot="title">
                <svg-icon size="24" :iconName="item.icon"></svg-icon>
                <span slot="title" class="sidebar-menu-title">{{
                    item.name
                }}</span>
                <!-- <svg-icon class="submenu-right-arrow" iconName="arrow-right"></svg-icon> -->
            </template>
            <side-menu-item
                v-for="child in item.children"
                :key="child.code"
                :item="child"
            />
        </el-submenu>
    </div>
</template>

<script>
export default {
    name: "SideMenuItem",
    props: {
        item: Object,
    },
    inject: ["elMenu"],
    methods: {
        hasChildren(item) {
            return item.children && item.children.length > 0;
        },
    },
};
</script>
