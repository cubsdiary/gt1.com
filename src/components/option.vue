<template>

  <h3 @click.prevent.stop="selectItem">
    <slot></slot>
  </h3>

</template>

<script>
import Emitter from '@/common/emitter'
export default {
  mixins: [Emitter],
  props: {
    value: {
      type: Object
    }
  },
  // computed: {
  //   autoHeight () {
  //     let height = 0
  //     if (this.data.length >= 8) {
  //       height = 240
  //     } else {
  //       height = this.data.length * 30
  //     }
  //     return height
  //   }
  // },
  methods: {
    selectItem () {
      this.dispatch('iSelect', 'update', this.value)
      this.$emit('update', this.value)
    }
  }
}
</script>

<style scoped lang="stylus">
  h3
    box-sizing: border-box
    line-height: normal
    padding: 7px 16px
    clear: both
    color: #515a6e
    font-size: 12px!important
    white-space: nowrap
    list-style: none
    cursor: pointer
    transition: background .2s ease-in-out
    &.active
      background-color: #f2f2f2
      color: rgb(255,119,83)
    &:hover
      background-color: #f2f2f2
</style>
