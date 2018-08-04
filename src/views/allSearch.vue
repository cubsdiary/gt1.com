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
        <Banner :recommends="recommends"/>
      </div>
      <div class="template-title font">
        <div class="title-bg"></div>
        <div class="title">热门配件</div>
      </div>
      <div class="hot-parts">
        <div class="hot-title">机油滤清器</div>
        <cycleRolling :data="data1"/>
        <div class="hot-title">空气滤清器</div>
        <cycleRolling :data="data2"/>
        <div class="hot-title">空调滤清器</div>
        <cycleRolling :data="data1"/>
        <div class="hot-title">燃油滤清器</div>
        <cycleRolling  :data="data2"/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import searchView from '@/components/searchView'
import cycleRolling from '@/components/cycleRolling'
import matchingParts from '@/components/matchingParts'
import Banner from '@/components/swiper'

export default {
  name: 'home',
  components: {
    searchView,
    cycleRolling,
    matchingParts,
    Banner
  },
  data () {
    return {
      recommends: [{
        id: 1,
        linkUrl: 'https://y.qq.com/m/act/chunwan2018/v3/index.html?ADTAG=jiaodiantu',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M0000044SNAC19jwin.jpg'
      }, {
        id: 2,
        linkUrl: 'http://y.qq.com/w/album.html?albummid=001u8nwR0H4x7z',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000003b2lHy424XQS.jpg'
      }, {
        id: 3,
        linkUrl: 'https://y.qq.com/apg/156/index.html?ADTAG=5',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000HDstc2PVKnq.jpg'
      }, {
        id: 4,
        linkUrl: 'http://y.qq.com/w/album.html?albummid=003l5sT818BTyn',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000001LLLb51HkIVE.jpg'
      }, {
        id: 5,
        linkUrl: 'https://c.y.qq.com/node/m/client/music_headline/index.html?_hidehd=1&_button=2&zid=619582',
        picUrl: 'http://y.gtimg.cn/music/photo_new/T003R720x288M000000Wq2eW3VkzJ9.jpg'
      }],
      data1: [{
        id: 0,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a1.jpg'
      }, {
        id: 1,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a2.jpg'
      }, {
        id: 2,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a3.jpg'
      }, {
        id: 3,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a4.jpg'
      }, {
        id: 4,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a5.jpg'
      }, {
        id: 5,
        img: 'https://cdn.cubsdiary.com/images/gt1com/1.jpg'
      }, {
        id: 6,
        img: 'https://cdn.cubsdiary.com/images/gt1com/2.jpg'
      }, {
        id: 7,
        img: 'https://cdn.cubsdiary.com/images/gt1com/3.jpg'
      }, {
        id: 8,
        img: 'https://cdn.cubsdiary.com/images/gt1com/4.jpg'
      }, {
        id: 9,
        img: 'https://cdn.cubsdiary.com/images/gt1com/5.jpg'
      }, {
        id: 10,
        img: 'https://cdn.cubsdiary.com/images/gt1com/2.jpg'
      }, {
        id: 11,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a2.jpg'
      }, {
        id: 12,
        img: 'https://cdn.cubsdiary.com/images/gt1com/3.jpg'
      }],
      data2: [{
        id: 0,
        img: 'https://cdn.cubsdiary.com/images/gt1com/1.jpg'
      }, {
        id: 1,
        img: 'https://cdn.cubsdiary.com/images/gt1com/2.jpg'
      }, {
        id: 2,
        img: 'https://cdn.cubsdiary.com/images/gt1com/3.jpg'
      }, {
        id: 3,
        img: 'https://cdn.cubsdiary.com/images/gt1com/4.jpg'
      }, {
        id: 4,
        img: 'https://cdn.cubsdiary.com/images/gt1com/5.jpg'
      }, {
        id: 5,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a5.jpg'
      }, {
        id: 6,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a4.jpg'
      }, {
        id: 7,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a3.jpg'
      }, {
        id: 8,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a2.jpg'
      }, {
        id: 9,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a1.jpg'
      }, {
        id: 10,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a3.jpg'
      }, {
        id: 11,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a3.jpg'
      }, {
        id: 12,
        img: 'https://cdn.cubsdiary.com/images/gt1com/a5.jpg'
      }]
    }
  },
  created () {
    this.api_post('/api/car/branchList', (res) => {
      console.log(res)
    })
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
        height: 343px
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
