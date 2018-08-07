<template>
  <div class="header">
    <div class="header-con">
      <h1><a class="logo" href="#"><img src="../assets/logo60@3x.png" alt="">  </a></h1>
      <ul>
        <li><router-link to="/home" >首页</router-link></li>
        <li>
          <a src="#" class="product">
            <span>产品</span>
            <div class="product-list">
              <!-- <div class="box-s"></div> -->
              <ul>
                <li v-for="(item, index) in classify" :key="index" @click="goRouter(item)">{{item.title}}</li>
              </ul>
            </div>
          </a>
        </li>
        <li><router-link to="/aboutus">关于GT1</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  created () {
    if (!this.classify) {
      this.getClassify()
    }
  },
  computed: {
    ...mapGetters([
      'classify',
      'nowClassify'
    ])
  },
  methods: {
    getClassify () {
      this.api_post('/api/website/goodsCateList', (res) => {
        if (res.errorCode === 0) {
          this.saveClassifySession(res.data)
        }
      })
    },
    goRouter (item) {
      this.saveNowClassifySession(item)
      this.$router.push({name: 'allSearch', params: {classify: item.id}})
    },
    ...mapActions([
      'saveClassifySession',
      'saveNowClassifySession'
    ])
  }
}
</script>

<style scoped lang="stylus">
  ul
    list-style: none
  .header
    width: 100%
    height: 100px
    box-shadow: 0px 2px 4px rgba(150, 150, 150, .2)
    user-select: none
    .header-con
      width: 1200px
      height: 100%
      margin: 0 auto
      background-color: #fff
      h1
        width: 70px
        padding: 15px
        height: 70px
        float: left
        img
          display: inline-block
          width: 70px
          height: 70px
      & > ul
        float: right
        width: auto
        height: 100px
        & > li
          position: relative
          float: left
          padding-left: 77px
          line-height: 100px
          height: 100px
          .product:hover
            .product-list
              display: block
          .product-list
            display: none
            position: absolute
            left: -10px
            top: 60px
            padding: 10px 0px
            width: 200px
            height: auto
            background-color: #f2f2f2
            & > ul
              & > li
                height: 35px
                line-height: 35px
                text-align: center
            .box-s
              position: absolute
              right: 40px
              top: -10px
              width: 0
              height: 0
              border-width: 5px
              border-style: solid
              border-color: transparent transparent #fff transparent
          span
            cursor: pointer
          a
            font-size: 18px
            color: #242424
            text-decoration: none
            transition: all .2s
            &.active-class
              text-decoration: underline
              font-size: 19px
              color: red
</style>
