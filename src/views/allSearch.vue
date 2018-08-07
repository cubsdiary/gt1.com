<template>
  <div class="home-container">
    <div class="home-content">
      <div class="template-title">
        <div class="title-bg"></div>
        <div class="title">滤清器搜索</div>
      </div>
      <searchView @search="getSearchInfo"></searchView>
      <div class="template-title car-bar">
        <div class="title-bg"></div>
        <div class="title">车型匹配配件</div>
      </div>
      <div class="banner-content">
        <matchingParts @match="goMatchProduct"/>
        <Banner :recommends="bannerImgs" v-if="bannerImgs"></Banner>
      </div>
      <div class="template-title font">
        <div class="title-bg"></div>
        <div class="title">热门配件</div>
      </div>
      <div class="hot-parts">
        <div class="" v-for="(item, index) in recommendData" :key="index">
          <div class="hot-title">{{item.name}}</div>
          <cycleRolling :data="item.data"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchView from '@/components/searchView'
import cycleRolling from '@/components/cycleRolling'
import matchingParts from '@/components/matchingParts'
import Banner from '@/components/swiper'
import {mapGetters} from 'vuex'

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
      imgUrlPath: null,
      recommends: null,
      bannerImgs: null
    }
  },
  created () {
    this.getData(this.$route.params.classify)
  },
  watch: {
    '$route': function (to, from) {
      console.log('我变了', to)
      this.getData(to.params.classify)
    }
  },
  computed: {
    recommendData () {
      let arr = []
      for (let key in this.recommends) {
        arr.push({
          name: key,
          data: this.recommends[key]
        })
      }
      return arr
    },
    ...mapGetters([
      'classifyId'
    ])
  },
  methods: {
    getData (id) {
      let _self = this
      this.api_post('/api/website/cateSelectGoods', (res) => {
        if (res.errorCode === 0) {
          _self.bannerImgs = res.data.cateImgs
          _self.recommends = res.data.goods
        }
      }, {
        id: id
      })
    },
    getSearchInfo (res) {
      this.$router.push('/searchcode?query=' + res)
    },
    goMatchProduct (res) {
      this.$router.push('/searchmodal?&type=' + 1 + '&brandid=' + 2 + '&serieid' + 3 + '&engine=' + 4)
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
