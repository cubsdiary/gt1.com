<template>
  <div class="vue-select" :class="{'active': activeFlag, 'disable': disabled}" ref="vueSelect" @mouseleave="leave">
    <div class="select-head" @click.stop="activeSelect">
      <input type="hidden" name="" value="">
      <div class="select" :class="{'selected': selected.value}">{{selected.value ? selected.value : '请选择'}}</div>
      <i class="iconfont icon-xia" :class="{'active': activeFlag, 'disable': disabled}"></i>
    </div>
    <transition name="fade">
      <div class="options" v-show="activeFlag">
        <ul :style="{height: autoHeight + 'px'}">
          <li v-for="item in data" :class="selected.id === item.id ? 'active' : ''" :key="item.id" @click.prevent.stop="selectItem(item)">{{item.value}}</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      activeFlag: false,
      selected: {}
    }
  },
  computed: {
    autoHeight () {
      let height = 0
      if (this.data.length >= 8) {
        height = 240
      } else {
        height = this.data.length * 30
      }
      return height
    }
  },
  methods: {
    activeSelect (event) {
      if (this.data.length > 0 && !this.disabled) {
        this.activeFlag = !this.activeFlag
      }
    },
    leave (event) {
      this.activeFlag = false
    },
    selectItem (item) {
      this.activeFlag = false
      this.selected = item
      this.$emit('update', item)
    }
  }
}
</script>

<style scoped lang="stylus">
  ul
    list-style: none
  .vue-select
    position: relative
    width: 360px
    height: 40px
    background-color: #fff
    border: 1px solid rgba(255, 119, 83, .5)
    border-radius: 5px
    cursor: pointer
    &.disable
      background-color: #f0f0f0
      cursor: not-allowed
      color: #ccc
      &:hover
        border: 1px solid rgba(255, 119, 83, .5)
    &:hover
      border-color: rgba(255, 119, 83, 1)
    &.active
      border-color: rgba(255, 119, 83, 1)
      box-shadow: 0 0 0 2px rgba(255,119,83,.2)
    .select-head
      width: 100%
      height: 100%
    .select
      display: inline-block
      box-sizing: border-box
      padding: 0 15px
      width: 90%
      height: 40px
      line-height: 40px
      font-size: 14px
      color: #ccc
      &.selected
        color: #505050
    .icon-xia
      display: inline-block
      color: #505050
      transform: rotate(0deg)
      transition: all .3s
      &.disable
        color: #ccc
      &.active
        transform: rotate(180deg)
    .fade-enter, .fade-leave-to
      opacity: 0
      transform: rotateX(40deg)
    .fade-enter-active, .fade-leave-active
      transition: all .3s
    .options
      display: block
      position: absolute
      top: 40px
      left: 0px
      width: 100%
      padding: 5px 0
      transform-origin: center top 0px
      will-change: transform, opacity
      z-index: 100
      ul
        width: 100%
        padding: 5px 0
        overflow-y: scroll
        background-color: #fff
        border-radius: 5px
        box-shadow: 0 1px 6px rgba(0,0,0,.2)
        li
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
