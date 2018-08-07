<template>
  <div class="toast-info" :class="left ? left : direction">
    <div class="box-s" :class="{'left': direction === 'right', 'right': direction === 'left'}"></div>
    <img class="img-info" :src="imgUrl + img"/>
  </div>
</template>

<script>
export default {
  props: {
    direction: {
      type: String,
      default: 'left'
    },
    left: {
      type: String,
      default: ''
    },
    img: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="stylus">
  .toast-info
    display: none
    position: absolute
    top: 0
    width: 225px
    height: 200px
    background-color: #fff
    -webkit-box-shadow: 0 0px 20px #ead8d8
    border-radius: 5px
    z-index: 100
    &.auto
      left: 120%
    &.right
      left: 140px
    &.left
      right: 140px
    .box-s
      position: absolute
      top: 7px
      width: 0
      height: 0
      border-width: 5px
      border-style: solid
      &.right
        right: -10px
        border-color: transparent transparent transparent #fff
      &.left
        left: -10px
        border-color: transparent #fff transparent transparent
    .img-info
      width: 180px
      height: 180px
      display: block
      background-color: red
      margin: 0 auto
      margin-top: 10px
</style>
