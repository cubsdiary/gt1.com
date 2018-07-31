<template>
  <div class="home-container">
    <div class="home-content">
      <div class="template-title">
        <div class="title-bg"></div>
        <div class="title">滤清器搜索</div>
      </div>
      <searchView></searchView>
      <div class="template-title car-bar">
        <div class="title-bg"></div>
        <div class="title">车型匹配配件</div>
      </div>
      <div class="banner-content">
        <matchingParts/>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import searchView from '@/components/searchView'
import matchingParts from '@/components/matchingParts'

export default {
  name: 'home',
  components: {
    searchView,
    matchingParts
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="stylus">
  .home-container
    width: 100%
    overflow: hidden
    .home-content
      width: 1200px
      overflow: hidden
      padding-top: 15px
      margin: 0 auto
      .template-title
        box-sizing: border-box
        display: flex
        align-items: flex-end
        width: 100%
        height: 80px
        padding-bottom: 30px
        &.font
          font-size: 20px
        &.car-bar
          height: 90px
        .title-bg
          width: 8px
          height: 15px
          background-color: #ff853b
          margin-right: 22px
        .title
          font-size: 24px
          color: #505050
          font-weight: bold
          line-height: 24px
      .banner-content
        display: flex
        width: 100%
        height: 460px
      .hot-parts
        width: 100%
        overflow: hidden
        .hot-title
          box-sizing: border-box
          width: 100%
          height: 30px
          font-size: 18px
          line-height: 30px
          color: #848484
          background-color: #f2f2f2
          padding-left: 30px
          margin-bottom: 12px
</style>
