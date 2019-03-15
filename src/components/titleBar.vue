<template>
  <div class="template-title" :style="{height: height + 'px'}">
    <div class="title-bg"></div>
    <div class="title" :style="{fontSize: font + 'px'}">{{title}}</div>
  </div>
</template>

<script>
export default {
  props: {
    height: {
      type: Number,
      default: 80
    },
    title: {
      type: String,
      required: true
    },
    font: {
      type: Number,
      default: 18
    }
  }
}
</script>

<style scoped lang="stylus">
  .template-title
    box-sizing: border-box
    display: flex
    align-items: flex-end
    width: 100%
    padding-bottom: 30px
    .title-bg
      width: 8px
      height: 15px
      background-color: #ff853b
      margin-right: 22px
    .title
      color: #505050
      font-weight: bold
      line-height: 24px

</style>
