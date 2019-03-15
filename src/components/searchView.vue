<template>
  <div class="search-view">
    <div class="search">
      <input type="text" v-model="search" placeholder="请输入GT1号/原厂号/对标型号" class="search-input" @keyup.enter="goSearch">
      <button type="button" name="button" class="search-btn" @click="goSearch" >搜索</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'searchView',
  props: {
    value: String
  },
  data () {
    return {
      search: ''
    }
  },
  created () {
    this.search = this.value
  },
  methods: {
    goSearch () {
      this.$emit('search', this.search)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .search-view
    display: inline-block
    box-sizing: border-box
    width: 100%
    height: 70px
    background-color: #525252
    padding-top: 15px
    .search
      display: flex
      width: 1160px
      height: 40px
      margin: 0 auto
      overflow: hidden
      .search-input
        box-sizing: border-box
        padding: 0 28px
        width: 933px
        height: 40px
        border: 1px solid #ff6b3e
        border-right: none
        border-radius: 5px 0px 0px 5px
        background-color: #292929
        font-size: 20px
        color: #fff
        outline: none
        overflow: hidden
      .search-btn
        flex: 1
        border: none
        background: none
        outline: none
        background-image: -webkit-linear-gradient(left, #ff8538, #ff663f)
        border-radius: 0px 5px 5px 0px
        font-size: 20px
        color: #fff
        font-weight: bold
        overflow: hidden
</style>
