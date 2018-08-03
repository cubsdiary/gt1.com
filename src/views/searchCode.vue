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
            <h3>GT1号</h3>
            <h3>配件类型</h3>
          </div>
          <ul class="search-th">
            <li class="search-td">
              <div class="search-gt1 search-box black">
                <h3>
                  <a href="javascript:;">
                    <span>TYO-1342352</span>
                    <Toast :direction="'right'"></Toast>
                  </a>
                </h3>
                <h3>机油滤清器</h3>
              </div>
            </li>
            <li class="search-td">
              <div class="search-gt1 search-box black">
                <h3>
                  <a href="javascript:;">
                    <span>TYO-1342352</span>
                    <Toast :direction="'right'"></Toast>
                  </a>
                </h3>
                <h3>机油滤清器</h3>
              </div>
            </li>
            <li class="search-td">
              <div class="search-gt1 search-box black">
                <h3>
                  <a href="javascript:;">
                    <span>TYO-1342352</span>
                    <Toast :direction="'right'"></Toast>
                  </a>
                </h3>
                <h3>机油滤清器</h3>
              </div>
            </li>
            <li class="search-td">
              <div class="search-gt1 search-box black white">
                <h3>
                  <a href="javascript:;">
                    <span>TYO-1342352</span>
                    <Toast :direction="'right'"></Toast>
                  </a>
                </h3>
                <h3>机油滤清器</h3>
              </div>
              <div class="search-other search-box">
                <h3>对标型号</h3>
                <ul class="other">
                  <li><h3>TYO-1342352</h3></li>
                  <li><h3>TYO-1342352</h3></li>
                  <li><h3>TYO-1342352</h3></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import searchView from '@/components/searchView'
import matchingParts from '@/components/matchingParts'
import Toast from '@/components/toast'
export default {
  name: 'home',
  components: {
    searchView,
    matchingParts,
    Toast
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="stylus">
  ul
    list-style: none
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
        padding-bottom: 150px
        .search-resule
          width: 855px
          float: right
          .search-title
            display: flex
            width: 100%
            height: 40px
            box-sizing: border-box
            padding-left: 30px
            background-color: #727172
            line-height: 40px
            & > h3:nth-child(1)
              width: 254px
              font-size: 16px
              color: #fff
            &  > h3:nth-child(2)
              flex: 1
              font-size: 16px
              color: #fff
          .search-th
            width: 100%
            .search-td
              width: 100%
              .search-box
                display: flex
                box-sizing: border-box
                width: 100%
                min-height: 40px
                padding-left: 30px
                line-height: 40px

                &.black
                  color: #646464
                &.white
                  background-color: #f2f2f2
              .search-gt1
                a
                  position: relative
                  font-size: 16px
                  color: #646464
                  text-decoration: none
                  &:hover
                    text-decoration: underline
                    .toast-info
                      display: block
              .search-gt1 > h3:nth-child(1)
                width: 254px
                font-size: 16px
              .search-gt1 > h3:nth-child(2)
                flex: 1
                font-size: 16px
              .search-other
                background-color: #b5b5b6
                color: #fff
              .search-other > h3
                width: 100px
                font-size: 16px
              .other
                flex: 1
                min-height: 40px
                & > li
                  display: inline-block
                  box-sizing: border-box
                  padding: 5px 0px
                  width: 160px
                  height: 30px
                  line-height: 30px
                  & > h3
                    font-size: 16px
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
