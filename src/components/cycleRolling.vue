<template>
  <div class="cycle-rolling">

  </div>
</template>

<script>
export default {
  props: {
    // 滚动元素长度是否相等
    isEqual: {
      type: Boolean,
      default: true
    },
    // 循环滚动次数，0时为 无限循环
    loop: {
      type: Number,
      default: 0
    },
    // 滚动方向  ‘left’, 'right', 'up', 'down'
    direction: {
      type: String,
      default: 'left'
    },
    // 一次滚动的距离
    scrollAmount: {
      type: Number,
      default: 1
    },
    // 滚动一次的时间 ms
    scrollDelay: {
      type: Number,
      default: 20
    }
  }
}
</script>

<style scoped lang="stylus">
  .cycle-rolling
    width: 100%
    height: 100px
    background-color: rgba(255, 123, 0, 0.5)
</style>
