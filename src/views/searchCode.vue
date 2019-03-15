<template>
  <div class="home-container">
    <div class="home-content">
      <titleBar :title="nowClassify.title + '搜索'"></titleBar>
      <searchView @search="getSearchInfo" v-model="query"></searchView>
      <div class="banner-content">
        <div class="left-con" v-if="nowClassify.id !== 4">
          <titleBar :title="'车型匹配配件'" :height="90" :font="20"></titleBar>
          <matchingParts @match="goMatchProduct"/>
        </div>
        <div class="search-resule">
          <titleBar :title="'搜索结果'" :height="90" :font="20"></titleBar>
          <div class="search-title">
            <h3>GT1号</h3>
            <h3>配件类型</h3>
          </div>
          <ul class="search-th">
            <li class="search-td" v-for="item in showDatas" :key="item.id">
              <div class="search-gt1 search-box black white">
                <h3>
                  <a href="javascript:;" @click="goGoodsInfo(item)">
                    <span>{{item.code}}</span>
                    <Toast :direction="'auto-left'" :img="item.img"></Toast>
                  </a>
                </h3>
                <h3>{{item.name}}</h3>
              </div>
              <div class="search-other" v-if="item.relatedBrands && item.relatedBrands.length">
                <h3>对标型号</h3>
                <ul class="other">
                  <li v-for="(res, index) in item.relatedBrands" :key="index"><h3><span @click="goGoodsInfo(item)">{{res}}</span></h3></li>
                </ul>
              </div>
              <div class="search-other" v-if="item.applicableModels && item.applicableModels.length">
                <h3>原厂号</h3>
                <ul class="other">
                  <li v-for="(res, index) in item.applicableModels" :key="index"><h3><span @click="goGoodsInfo(item)">{{res}}</span></h3></li>
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
import titleBar from '@/components/titleBar'
import {mapGetters} from 'vuex'
export default {
  name: 'home',
  components: {
    searchView,
    matchingParts,
    titleBar,
    Toast
  },
  props: {
    code: {
      type: String,
      required: true
    }
  },
  data () {
    return {
      query: null,
      showDatas: null
    }
  },
  watch: {
    '$route': function (to, from) {
      this.searchData(to.params.code, this.nowClassify.id)
    }
  },
  created () {
    this.query = this.code
    this.searchData(this.code, this.nowClassify.id)
  },
  computed: {
    ...mapGetters([
      'nowClassify'
    ])
  },
  methods: {
    getSearchInfo (res) {
      this.$router.push('/searchcode/' + res)
    },
    goGoodsInfo (item) {
      this.$router.push('/goodsinfo/' + item.id)
    },
    searchData (query, id) {
      this.api_post('/api/website/goodsLists', (res) => {
        if (res.errorCode === 0) {
          this.showDatas = res.data
        }
      }, {
        key: query,
        cateId: id,
        page: 1,
        limit: 100
      })
    },
    goMatchProduct (res) {
      this.$router.push('/searchmodal?car=' + res.car + '&brand=' + res.brand + '&serie=' + res.serie + '&engine=' + res.engine)
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
        display: flex
        width: 100%
        overflow: hidden
        padding-bottom: 150px
        .left-con
          width: 300px
          margin-right: 45px
        .search-resule
          flex: 1
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
                display: flex
                box-sizing: border-box
                width: 100%
                min-height: 30px
                padding-left: 30px
                line-height: 30px
                background-color: #b5b5b6
                color: #fff
                height: 30px
                line-height: 30px
              .search-other > h3
                width: 100px
                font-size: 16px
              .other
                flex: 1
                min-height: 30px
                & > li
                  display: inline-block
                  box-sizing: border-box
                  padding: 0px 20px
                  & > h3
                    font-size: 16px
                    cursor: pointer
                    line-height: normal
                    span:hover
                      text-decoration: underline
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
