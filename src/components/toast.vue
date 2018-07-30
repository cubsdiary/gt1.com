<template>
  <div class="toast-info right-lv">
    <div class="box-s"></div>
    <img class="img-info" src="../assets/default.png"/>
  </div>
</template>

<script>
export default {
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
    &.right-lv
      right: 140px
    .box-s
      position: absolute
      right: -10px
      top: 7px
      width: 0
      height: 0
      border-width: 5px
      border-style: solid
      border-color: transparent transparent transparent #fff
    .img-info
      width: 180px
      height: 180px
      display: block
      background-color: red
      margin: 0 auto
      margin-top: 10px
</style>
