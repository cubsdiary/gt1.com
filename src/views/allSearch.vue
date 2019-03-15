<template>
  <div class="home-container">
    <div class="home-content" v-if="recommends">
      <titleBar :title="nowClassify.title + '搜索'" :font="24"></titleBar>
      <searchView @search="getSearchInfo"></searchView>
      <div :class="`banner-content ${id === 4 ? 'center' : ''}`" :style="{marginBottom: recommends.length ? '' : '80px'}">
        <div class="left-con" v-if="id !== 4">
          <titleBar :title="'车型匹配配件'" :height="90" :font="20"></titleBar>
          <matchingParts @match="goMatchProduct"/>
        </div>
        <Banner :recommends="bannerImgs" v-if="bannerImgs.length" :width="'855px'"></Banner>
      </div>
      <div class="hot-parts" v-if="recommends.length">
        <titleBar :title="'热门配件'" :height="90" :font="20"></titleBar>
        <div class="" v-for="(item, index) in recommends" :key="index">
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
import titleBar from '@/components/titleBar'
import Banner from '@/components/swiper'
import {mapGetters} from 'vuex'

export default {
  name: 'home',
  components: {
    searchView,
    cycleRolling,
    matchingParts,
    Banner,
    titleBar
  },
  data () {
    return {
      imgUrlPath: null,
      recommends: null,
      bannerImgs: null,
      swiper: null,
      bulletIndex: 0
    }
  },
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  created () {
    this.getData(this.id)
  },
  watch: {
    '$route': function (newRouter, oldRouter) {
      this.getData(newRouter.params.classify)
    }
  },
  computed: {
    ...mapGetters([
      'nowClassify'
    ])
  },
  methods: {
    getData (id) {
      this.bannerImgs = null
      this.recommends = null
      let _self = this
      this.api_post('/api/website/cateSelectGoods', (res) => {
        if (res.errorCode === 0) {
          _self.bannerImgs = res.data.data.cateImgs || ['asdfasf']
          _self.recommends = this.recommendData(res.data.data.goods)
        }
      }, {
        id: id
      })
    },
    recommendData (data) {
      let arr = []
      for (let key in data) {
        arr.push({
          name: key,
          data: data[key]
        })
      }
      return arr
    },
    getSearchInfo (res) {
      this.$router.push('/searchcode/' + res)
    },
    goMatchProduct (res) {
      this.$router.push('/searchmodal?car=' + res.car + '&brand=' + res.brand + '&serie=' + res.serie + '&engine=' + res.engine)
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
      .banner-content
        display: flex
        align-items: flex-end
        justify-content: space-between
        width: 100%
        height: 433px
        overflow: hidden
        .left-con
          width: 300px
          margin-right: 45px
        &.center
          justify-content: center
      .hot-parts
        flex: 1
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
