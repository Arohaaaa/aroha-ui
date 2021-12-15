<template>
  <div>
    <!-- 左侧按钮区 -->
    <slot name="left"></slot>

    <!-- 标签栏 -->
    <div class="tags-wrap">
      <div ref="tags-box">
        <el-tag
          closable
          class="tag"
          :class="{ activeTag: item.code == activeTag.code }"
          v-for="item in tags"
          :key="item.code"
          @click="$emit('tag-click', item)"
          @close="$emit('tag-close', 'one', item)"
        >
          <el-tooltip
            class="tag-item"
            effect="dark"
            :content="item.appName"
            placement="bottom"
          >
            <i class="cireMark"></i>
            <span>{{ item.name }}</span>
          </el-tooltip>
        </el-tag>
      </div>
    </div>

    <!-- 右侧按钮区 -->
    <slot name="right"></slot>
    <div class="tags-close-menu">
      关闭操作
      <ul>
        <li @click="$emit('tag-close', 'other')">关闭其他标签</li>
        <li @click="$emit('tag-close', 'left')">关闭左侧标签</li>
        <li @click="$emit('tag-close', 'right')">关闭右侧标签</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  inject: ['tabbar'],
  computed: {
    activeTag() {
      return this.tabbar.activeTag
    },
    tags() {
      return this.tabbar.tags
    }
  }
};
</script>

<style>
</style>