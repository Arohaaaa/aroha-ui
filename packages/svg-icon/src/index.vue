<template>
    <svg
        ref="svg"
        :class="classObj"
        :style="styleObj"
        aria-hidden="true"
    >
        <use :xlink:href="icon" />
    </svg>
</template>

<script>
export default {
    name: "SvgIcon",
    props: {
        fileId: String,
        getSvgText: Function,
        color: String,
        size: String,
        iconName: String,
        className: String,
    },
    data() {
        return {
            svgText: ''
        }
    },
    computed: {
        classObj() {
            if (this.className) {
                return `svg-icon ${this.className}`;
            } else {
                return "svg-icon";
            }
        },
        icon() {
            return `#icon-${this.iconName}`;
        },
        styleObj() {
            return {
                color: this.color,
                "font-size": this.size + "px",
            };
        },
    },
    mounted() {
        if (this.fileId && this.getSvgText) {
            this.getSvgText(this.fileId).then(res => {
                this.svgText = res.data.data
                this.$refs.svg.innerHtml = res.data.data
            })
        }
    },
};
</script>

<style scoped>
.svg-icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    vertical-align: middle;
    fill: currentColor;
    overflow: hidden;
}
</style>
