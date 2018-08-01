<template>
  <div class="home-container">
    <div class="home-content">
      <div class="template-title height-80">
        <div class="title-bg"></div>
        <div class="title">滤清器搜索</div>
      </div>
      <searchView></searchView>
      <div class="template-bar">
        <div class="template-title bar1 height-90">
          <div class="title-bg"></div>
          <div class="title">车型匹配配件</div>
        </div>
        <div class="template-title bar2 height-90">
          <div class="title-bg"></div>
          <div class="title">搜索结果</div>
        </div>
      </div>
      <div class="banner-content">
        <matchingParts/>
        <div class="search-resule">
          <div class="search-title">
            
          </div>
        </div>
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
        padding-bottom: 30px
        &.height-80
          height: 80px
        &.height-90
          height: 90px
        &.font
          font-size: 20px
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
      .template-bar
        display: flex
        width: 100%
        height: 90px
        overflow: hidden
        .bar1
          width: 300px
        .bar2
          flex: 1
          margin-left: 45px
      .banner-content
        width: 100%
        overflow: hidden
        margin-bottom: 100px
        .search-resule
          width: 855px
          height: 1000px
          float: right
          background-color: #f2f2f2
          .search-title
            width: 100%
            height: 1000px
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
