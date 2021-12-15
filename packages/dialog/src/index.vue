<template>
    <transition
        name="dialog-fade"
        @after-enter="afterEnter"
        @after-leave="afterLeave"
    >
        <div
            v-show="visible"
            :class="['gd-dialog', customClass]"
            :style="style"
            ref="dialog"
        >
            <!-- header -->
            <div class="gd-dialog__header">
                <slot name="title">
                    <span class="gd-dialog__title">{{ title }}</span>
                </slot>
                <span
                    type="button"
                    class="gd-dialog__headerbtn"
                    v-if="showClose"
                    @click="handleClose"
                >
                    <i class="el-icon el-icon-close"></i>
                </span>
            </div>

            <!-- body -->
            <div class="gd-dialog__body"><slot></slot></div>

            <!-- footer -->
            <div class="gd-dialog__footer">
                <slot name="footer"></slot>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "GdDialog",
    props: {
        visible: Boolean,
        top: {
            type: String,
        },
        left: {
            type: String,
        },
        right: {
            type: String
        },
        bottom: {
            type: String
        },
        title: {
            type: String,
        },
        width: {
            type: String,
            default: "50%",
        },
        customClass: {
            type: String,
        },
        showClose: {
            type: Boolean,
            default: true,
        },
    },
    computed: {
        style() {
            let style = {
                position: 'absolute'
            };
            style.width = this.width;
            style.top = this.top
            style.left = this.left
            style.bottom = this.bottom
            style.right = this.right
            return style;
        },
    },
    methods: {
        afterEnter() {
            this.$emit("opened");
        },
        afterLeave() {
            this.$emit("closed");
        },
        handleClose() {
            this.$emit("update:visible", false);
        },
    },
};
</script>