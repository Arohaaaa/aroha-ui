<template>
    <div class="tabbar">
        <components :is="styleType"></components>
    </div>
</template>

<script>
import style1 from './style1'
import style2 from './style2'

export default {
    name: "tabbar",
    props: {
        styleType: {
            type: String,
            default: 'style1'
        },
        validator: function (value) {
            // 这个值必须匹配下列字符串中的一个
            return ['style1', 'style2'].indexOf(value) !== -1
        }
    },
    components: {
        style1,
        style2
    },
    provide() {
        return {
            tabbar: this
        }
    }
};
</script>
