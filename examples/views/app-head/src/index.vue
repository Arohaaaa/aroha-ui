<template>
  <div id="app-head" :style="{ height: height + 'px', 'background-color': themeColor}">
    <components :is="styleType"></components>
  </div>
</template>

<script>
import style1 from './style1.vue'
import style2 from './style2.vue'
import style3 from './style3.vue'
export default {
  name: 'app-head',
  props: {
    styleType: {
      type: String,
      default: 'style1',
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ['style1', 'style2', 'style3'].indexOf(value) !== -1
      }
    },
    height: {
      type: Number,
      required: true
    }
  },
  components: {
    style1,
    style2,
    style3
  },
  inject: ['themeColor']
}
</script>