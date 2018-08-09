<template>
  <div class="goodsinfo-container">
    <div class="goodsinfo-content">
      <searchView @search="getSearchInfo" v-model="query"/>
      <div class="navigation">
        <div class="left">
          <div class="title">搜索列表</div>
          <i class="icon"></i>
        </div>
        <div class="right">
          <a href="#">订购站点：www.QTYCY.shop.com</a>
        </div>
      </div>
      <div class="goodsinfo-tab1">
        <div class="info-left">
          <div class="img-show">
            <h2>{{goodsInfo.code}}</h2>
            <img :src="imgUrl + imgs[imgsIndex]" alt="">
          </div>
          <ul class="mini-img-list">
            <li class="mini-img" :class="{active: index === imgsIndex}" v-for="(item, index) in imgs" :key="index" @click="switchImgs(index)">
              <img :src="imgUrl + item" alt="">
            </li>
          </ul>
        </div>
        <div class="info-right">
          <div class="info-title">参数详情</div>
          <ul>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">GT1</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">机油滤清器</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">小型轿车/皮卡/摩托</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">124mm</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">90ooKM</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">124mm</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">90ooKM</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab2-title">
        <div class="left-title">
          <span>产品对应号</span>
          <i class="icon-font-1"></i>
        </div>
        <div class="right-title">
          <span>适配车型</span>
          <i class="icon-font-1"></i>
        </div>
      </div>
      <div class="goodsinfo-tab2">
        <div class="info-left">
          <div class="info-title">
            <h3>品牌号</h3>
            <h4>型号</h4>
          </div>
          <ul>
            <li v-for="(item, index) in goodsInfo.applicables" :key="index">
              <div class="li-title">{{item.name}}</div>
              <div class="li-info">{{item.factoryCode}}</div>
            </li>
          </ul>
        </div>
        <div class="info-right">
          <div class="info-title">
            <h3>适配车型</h3>
            <h4>型号</h4>
          </div>
          <ul>
            <li v-for="(item, index) in goodsInfo.relateds" :key="index">
              <div class="li-title">{{item.name}}</div>
              <div class="li-info">{{item.productCode}}</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab3-title">
        <span>车型匹配</span>
        <i class="icon-font-1"></i>
      </div>
      <ul class="goodsinfo-tab3">
        <li class="car-brand" v-for="(item, index) in carGoods" :key="index">
          <div class="car-title">
            <img :src="imgUrl + item.brandLogo" alt="">
            <span>{{item.brandName}}</span>
            <a href="javascript:;" @click="toggleClick(0)">
              <i class="icon" :class="{'translate': showType1}"></i>
              <span>收起</span></a>
          </div>
          <Collapse v-show="showType1" :data="item.carInfos"></Collapse>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import searchView from '@/components/searchView'
import Collapse from '@/components/collapse'
import {mapGetters} from 'vuex'
export default {
  components: {
    searchView,
    Collapse
  },
  data () {
    return {
      showType1: false,
      goodsInfo: [],
      imgs: '',
      imgsIndex: 0,
      carGoods: null,
      query: null
    }
  },
  watch: {
    '$route': function (to, from) {
      console.log('我变了', to.query)
      this.getGoodsInfo(to.query.goodsid)
    }
  },
  created () {
    this.getGoodsInfo(this.$route.query.goodsid)
  },
  computed: {
    ...mapGetters([
      'nowClassify'
    ])
  },
  methods: {
    getGoodsInfo (id) {
      this.api_post('/api/website/getGoodInfo', (res) => {
        if (res.data.code === 0) {
          this.goodsInfo = res.data.data
          this.imgs = res.data.data.imgs.split(',')
          this.carGoods = res.data.data.carGoods
        }
        console.log(res)
      }, {
        goodId: id,
        pcateId: this.nowClassify.id
      })
    },
    getSearchInfo (res) {
      this.$router.push('/searchcode?query=' + res)
    },
    toggleClick (index) {
      if (index === 0) {
        this.showType1 = !this.showType1
      } else if (index === 1) {
        this.showType2 = !this.showType2
      } else if (index === 2) {
        this.showType3 = !this.showType3
      }
    },
    switchImgs (index) {
      this.imgsIndex = index
    }
  }
}
</script>

<style scoped lang="stylus">
  .goodsinfo-container
    width: 100%
    // overflow: hidden
    ul
      list-style: none
    .goodsinfo-content
      width: 1200px
      // overflow: hidden
      padding-top: 15px
      margin: 0 auto
      .navigation
        height: 80px
        display: flex
        box-sizing: border-box
        padding-top: 28px
        padding-left: 20px
        .left
          width: 100px
          height: 30px
          overflow: hidden
          .title
            display: inline-block
            box-sizing: border-box
            width: 73px
            height: 100%
            border-bottom: 1px solid #9e9e9e
            font-size: 18px
            line-height: 24px
            color: #919191
            margin-right: 14px
            float: left
          .icon
            display: inline-block
            width: 12px
            height: 30px
            background-image: url('../assets/icon.png')
            background-position: -124px -193px
            background-repeat: no-repeat
        .right
          flex: 1
          display: flex
          justify-content: flex-end
          box-sizing: border-box
          padding-top: 30px
          a
            font-size: 16px
            line-height: 16px
            color: #707071
            text-decoration: underline
      .goodsinfo-tab1
        height: 385px
        display: flex
        .info-left
          flex: 1
          display: flex
          margin-right: 80px
          .img-show
            position: relative
            width: 480px
            overflow: hidden
            h2
              position: absolute
              top: 0
              left: 0
              width: 100%
              line-height: 30px
              font-size: 30px
              color: #434343
              font-weight: bolder
              text-align: center
            img
              display: block
              height: 100%
              width: auto
              margin: 0 auto
          .mini-img-list
            flex: 1
            display: flex
            flex-direction: column
            justify-content: center
            align-items: flex-end
            .mini-img
              box-sizing: border-box
              width: 70px
              height: 70px
              margin: 5px 0
              border: 1px solid #525252
              cursor: pointer
              &.active
                border: 1px solid #ff6b3e
              img
                display: block
                width: 100%
                height: auto
        .info-right
          display: flex
          flex-direction: column
          width: 560px
          border: 1px solid #525252
          height: 383px
          .info-title
            box-sizing: border-box
            height: 36px
            padding-left: 36px
            line-height: 38px
            background-color: #525252
            font-size: 16px
            background-color: #525252
            color: #fff
          ul
            flex: 1
            list-style: none
            width: 100%
            overflow: hidden
          li
            box-sizing: border-box
            padding-left: 36px
            display: flex
            height: 58px
            line-height: 58px
            font-size: 18px
            &:nth-child(2n+1)
              background-color: #f4f4f4
            .li-title
              color: #b8b8b8
            .li-info
              flex: 1
              padding-right: 46px
              text-align: right
      .tab2-title
        display: flex
        height: 80px
        padding-top: 25px
        font-size: 20px
        color: #4e4e4e
        font-weight: bold
        line-height: 58px
        .left-title
          flex: 1
          margin-right: 80px
          padding-left: 36px
          .icon-font-1
            display: inline-block
            width: 200px
            height: 12px
            margin-left: 16px
            background-image: url('../assets/icon.png')
            background-position: 0px 0px
            background-repeat: no-repeat
        .right-title
          box-sizing: border-box
          width: 562px
          padding-left: 36px
          .icon-font-1
            display: inline-block
            width: 200px
            height: 12px
            margin-left: 16px
            background-image: url('../assets/icon.png')
            background-position: 0px -62px
            background-repeat: no-repeat
      .goodsinfo-tab2
        min-height: 120px
        display: flex
        .info-left
          flex: 1
          margin-right: 80px
        .info-right
          display: flex
          flex-direction: column
          width: 562px
        .info-title
          display: flex
          box-sizing: border-box
          height: 38px
          padding-left: 36px
          padding-right: 46px
          line-height: 38px
          background-color: #525252
          h3
            font-size: 16px
            color: #fff
          h4
            flex: 1
            text-align: right
            font-size: 16px
            color: #fff
        ul
          flex: 1
          list-style: none
          width: 100%
          overflow: hidden
        li
          box-sizing: border-box
          padding-left: 36px
          display: flex
          height: 44px
          line-height: 44px
          font-size: 16px
          font-weight: bold
          color: #4e4e4e
          &:nth-child(2n+1)
            background-color: #f4f4f4
          .li-info
            flex: 1
            padding-right: 46px
            text-align: right
      .tab3-title
        display: flex
        align-items: center
        height: 80px
        padding-top: 25px
        font-size: 20px
        color: #4e4e4e
        font-weight: bold
        .icon-font-1
          display: inline-block
          width: 313px
          height: 12px
          margin-left: 16px
          background-image: url('../assets/icon.png')
          background-position: 0px -125px
          background-repeat: no-repeat
      .goodsinfo-tab3
        width: 100%
        margin-bottom: 100px
        .car-brand
          width: 100%
          margin-bottom: 5px
          .car-title
            box-sizing: border-box
            display: flex
            align-items: center
            min-height: 66px
            background-color: #f9f9f9
            padding: 0px 56px 0px 24px
            img
              display: inline-block
              width: 50px
              height: 50px
              background-color: rgba(255, 255, 0, 0.6)
              margin-right: 18px
            span
              flex: 1
              font-size: 16px
              color :#4e4e4e
              font-weight: bold
              line-height: normal
            a
              color: #aaaaaa
              font-size: 14px
              text-decoration: none
              .icon
                display: inline-block
                background-image: url('../assets/icon.png')
                background-position: -200px -196px
                background-repeat: no-repeat
                width: 20px
                height: 14px
                transform-origin: center center
                transition: all .3s
                &.translate
                  transform: rotate(-180deg) translateY(-4px)

</style>
