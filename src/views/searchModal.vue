<template>
  <div class="home-container">
    <div class="home-content">
      <div class="template-title height-80">
        <div class="title-bg"></div>
        <div class="title">{{nowClassify.title}}搜索</div>
      </div>
      <searchView @search="getSearchInfo"></searchView>
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
        <matchingParts @match="goMatchProduct"/>
        <div class="search-resule">
          <div class="search-title">
            <img :src="imgUrl + cars.img" alt="">
            <span>{{cars.name}}</span>
          </div>
          <ul class="connect-modal">
            <li class="car-modal" id="car-modal-title">
              <h3 class="lab lab-1">车型</h3>
              <h3 class="lab lab-2">排量</h3>
              <h3 class="lab lab-3">年限</h3>
              <h3 class="lab lab-con lab-title" v-for="item in nowClassify.goodsCates" :key="item.id">{{item.title}}</h3>
            </li>
            <li class="car-modal" v-for="(item, c) in proclass" :key="c" ref="modalList">
              <div class="lab lab-1"><span>{{item.carSerie}}</span></div>
              <div class="lab lab-2"><span>{{item.carEngine}}</span></div>
              <div class="lab lab-3"><span>{{item.carYear}}</span></div>
              <div class="lab lab-con bor" v-for="(res, a) in item.goodsInfo" :key="a">
                <div class="text-more" v-for="(info, b) in res.infos" :key="b">
                  <a href="javascript:;" @click="goodsInfo(info.id)">
                    <span>{{info.code}}</span>
                    <Toast :direction="'auto-right'" :img="info.img"></Toast>
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
import searchView from '@/components/searchView'
import matchingParts from '@/components/matchingParts'
import Toast from '@/components/toast'
import {mapGetters} from 'vuex'
export default {
  name: 'home',
  components: {
    searchView,
    matchingParts,
    Toast
  },
  data () {
    return {
      brand: null,
      car: null,
      serie: null,
      engine: null,
      carInfos: [],
      cars: {}
    }
  },
  created () {
    this.engine = this.$route.query.engine || null
    this.brand = this.$route.query.brand || null
    this.car = this.$route.query.car || null
    this.serie = this.$route.query.serie || null
    if (this.brand === null || this.car === null || this.serie === null || this.engine === null) {
      this.$router.back()
    } else {
      this._getMatchProduct()
    }
  },
  watch: {
    '$route': function (to, from) {
      this.engine = to.query.engine || null
      this.brand = to.query.brand || null
      this.car = to.query.car || null
      this.serie = to.query.serie || null
      this._getMatchProduct()
    }
  },
  computed: {
    proclass () {
      let arr = []
      this.carInfos.forEach(item => {
        let goods = []
        this.nowClassify.goodsCates.forEach((res) => {
          item.goodsInfo.forEach(good => {
            if (res.title === good.name) {
              goods.push(good)
            }
          })
        })
        arr.push(Object.assign(item, {
          goodsInfo: goods
        }))
      })
      return arr
    },
    ...mapGetters([
      'nowClassify'
    ])
  },
  methods: {
    getSearchInfo (res) {
      this.$router.push('/searchcode?query=' + res)
    },
    goMatchProduct (res) {
      this.$router.push('/searchmodal?car=' + res.car + '&brand=' + res.brand + '&serie=' + res.serie + '&engine=' + res.engine)
    },
    goodsInfo (id) {
      this.$router.push('/goodsinfo?goodsid=' + id)
    },
    _getMatchProduct () {
      this.api_post('/api/website/carTypeLists', (res) => {
        if (res.data.code === 0) {
          this.carInfos = res.data.data.carInfos
          this.cars = {
            id: res.data.data.brandId,
            name: res.data.data.brandName,
            img: res.data.data.brandLogo
          }
        }
      }, {
        cateId: this.nowClassify.id,
        type: this.car,
        serieId: this.serie,
        brandId: this.brand,
        engine: this.engine,
        page: 1,
        limit: 100
      })
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
              .lab-title
                justify-content: center
              .lab-1
                width: 160px
              .lab-2
                width: 75px
              .lab-3
                width: 114px
              .lab-con
                box-sizing: border-box
                flex: 1
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
