<template>
  <div class="toast-info right-lv" :style="{width: showWidth}">
    <div class="toast">
      <div class="box-s"></div>
      <ul class="other-list">
        <li v-for="item in data" :key="item" @click="showId(item)">
          <img src="../assets/default.png" alt="">
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      data: [0, 1, 2, 3, 4, 5, 6, 7]
    }
  },
  computed: {
    showWidth () {
      let index = this.data.length > 3 ? 3 : this.data.length
      return index * 120 + 20 + 'px'
    }
  },
  methods: {
    showId (item) {
      console.log(item)
    }
  }
}
</script>

<style scoped lang="stylus">
  .toast-info
    display: none
    position: absolute
    top: 0
    height: 200px
    padding-right: 14px
    z-index: 100
    &.right-lv
      right: 90px
  .toast
    position: relative
    padding: 10px
    background-color: #fff
    -webkit-box-shadow: 0 0px 20px #ead8d8
    border-radius: 5px
    // overflow: hidden
    .box-s
      position: absolute
      right: -10px
      top: 7px
      width: 0
      height: 0
      border-width: 5px
      border-style: solid
      border-color: transparent transparent transparent #fff
    .other-list
      min-width: 120px
      overflow: hidden
      margin: 0 auto
      margin-top: 10px
      li
        display: inline-block
        width: 120px
        height: 120px
        img
          display: block
          width: 100%
          height: 100%
</style>
