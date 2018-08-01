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
            <img src="../assets/default.png" alt="">
            <span>本田</span>
          </div>
          <ul class="connect-modal">
            <li class="car-modal" id="car-modal-title">
              <h3 class="lab lab-1">车型</h3>
              <h3 class="lab lab-2">排量</h3>
              <h3 class="lab lab-3">年限</h3>
              <h3 class="lab lab-4">机滤</h3>
              <h3 class="lab lab-5">空滤(空气)</h3>
              <h3 class="lab lab-6">燃滤</h3>
              <h3 class="lab lab-7">空调滤</h3>
            </li>
            <li class="car-modal" v-for="item in [0, 1, 2, 3]" :key="item" ref="modalList">
              <div class="lab lab-1"><span>车型</span></div>
              <div class="lab lab-2"><span>排量</span></div>
              <div class="lab lab-3"><span>年限</span></div>
              <div class="lab lab-4 bor">
                <div class="text-more">
                  <a href="javascript:;">
                    <span>燃滤</span>
                    <Toast></Toast>
                  </a>
                </div>
              </div>
              <div class="lab lab-5 bor">
                <div class="text-more">
                  <a href="javascript:;">
                    <span>燃滤</span>
                    <Toast></Toast>
                  </a>
                </div>
              </div>
              <div class="lab lab-6 bor">
                <div class="text-more">
                  <a href="javascript:;">
                    <span>燃滤</span>
                    <Toast></Toast>
                  </a>
                </div>
                <div class="text-more">
                  <a href="javascript:;">
                    <span>燃滤</span>
                    <Toast></Toast>
                  </a>
                </div>
                <div class="text-more">
                  <a href="javascript:;">
                    <span>燃滤</span>
                    <Toast></Toast>
                  </a>
                </div>
              </div>
              <div class="lab lab-7 bor">
                <div class="text-more">
                  <a href="javascript:;">
                    <span>燃滤</span>
                    <Toast></Toast>
                  </a>
                </div>
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
          background-color: #f2f2f2
          .search-title
            box-sizing: border-box
            display: flex
            align-items: center
            border: 1px solid #e7e7e7
            width: 100%
            height: 40px
            padding-left: 27px
            img
              display: block
              width: 30px
              height: 30px
            span
              font-size: 16px
              color: #646464
              margin-left: 20px
          .connect-modal
            width: 100%
            .car-modal
              display: flex
              box-sizing: border-box
              min-height: 44px
              font-size: 14px
              line-height: 44px
              color: #4e4e4e
              padding-left: 27px
              &#car-modal-title
                height: 38px
                background-color: #525252
                color: #fff
                h3
                  font-size: 16px
              &:nth-child(2n+1)
                background-color: #fafafa
              .lab
                display: flex
                flex-direction: column
                justify-content: center
              .lab-1
                flex: 1
              .lab-2
                width: 75px
              .lab-3
                width: 114px
              .lab-4, .lab-5, .lab-6, .lab-7
                box-sizing: border-box
                width: 120px
                padding: 10px 0px
              .bor
                text-decoration: underline
                .text-more
                  position: relative
                  width: 100%
                  height: 24px
                  line-height: 24px
                  a
                    font-size: 14px
                    color: #4e4e4e
                    &:hover
                      font-weight: bold
                      .toast-info
                        display: block
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
