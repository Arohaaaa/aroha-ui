<template>
    <div id="app-menu" :style="{ width: isCollapse ? 'auto' : '240px' }">
        <slot name="menu-head">
            <div class="app-menu-head">
                <span v-show="!isCollapse">{{ menuHeadTitle }}</span>
                <span @click="handleCollapse"
                    ><svg-icon iconName="collapse"></svg-icon
                ></span>
            </div>
        </slot>
        <el-scrollbar class="menu-wrap">
            <el-menu
                ref="elMenu"
                :collapse="isCollapse"
                :collapse-transition="false"
                :default-active="activeMenuIndex"
                :unique-opened="uniqueOpened"
            >
                <side-menu-item
                    v-for="menu in menus"
                    :key="menu[menuKey]"
                    :item="menu"
                ></side-menu-item>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<script>
import SideMenuItem from "./SideMenuItem";

export default {
    name: "side-menu",
    props: {
        menuHeadTitle: String,
        menus: Array,
        menuKey: {
            type: String,
            default: "code",
        },
        activeMenuIndex: String,
        uniqueOpened: Boolean,
    },
    provide() {
        return {
            elMenu: this,
        };
    },
    components: {
        SideMenuItem,
    },
    data() {
        return {
            isCollapse: false
        }
    },
    methods: {
        handleCollapse() {
            this.isCollapse = !this.isCollapse
            this.$emit('collapse', this.isCollapse)
        },
        handleMenuItemClick(item) {
            this.$emit("menu-item-click", item);
        },
    },
};
</script>
