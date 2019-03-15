<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    >
    <ul class="connect-modal" :style="{transition: 'all .3s ease-in-out'}">
      <li class="car-modal" id="car-modal-title">
        <h3 class="lab lab-1">车型</h3>
        <h3 class="lab lab-2">排量</h3>
        <h3 class="lab lab-3">年限</h3>
        <h3 class="lab lab-con" v-for="(item, index) in nowClassify.goodsCates" :key="index">{{item.title}}</h3>
        <h3 class="lab lab-8"></h3>
      </li>
      <li class="car-modal" v-for="(item, index) in proclass" :key="index" ref="modalList">
        <div class="lab lab-1"><span>{{item.carSerie}}</span></div>
        <div class="lab lab-2"><span>{{item.carEngine}}</span></div>
        <div class="lab lab-3"><span>{{item.carYear}}</span></div>
        <div class="lab lab-con bor" v-for="(res, id) in item.goodsInfo" :key="id">
          <div class="text-more" v-for="(info, is) in res.infos" :key="is">
            <a href="javascript:;" @click="toggleGoodsInfo(info.id)">
              <span>{{info.code}}</span>
              <Toast :img="info.img" :direction="'auto-right'"></Toast>
            </a>
          </div>
        </div>
        <div class="lab lab-8 bor">
          <div class="text-more">
            <!-- <a href="javascript:;">
              <span>其他配件</span>
              <clickToast></clickToast>
            </a> -->
          </div>
        </div>
      </li>
    </ul>
  </transition>
</template>

<script>
import Toast from '@/components/toast'
import clickToast from '@/components/clickToast'
import {mapGetters} from 'vuex'
export default {
  components: {
    Toast,
    clickToast
  },
  props: {
    show: {
      type: Boolean
    },
    data: {
      type: Array
    },
    transition: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    proclass () {
      let arr = []
      this.data.forEach(item => {
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
    beforeEnter (el) {
      el.style.height = 0 + 'px'
    },
    enter (el, done) {
      let allHeight = 0
      this.$refs.modalList.forEach((item, index) => {
        allHeight += item.offsetHeight
      })
      el.style.height = allHeight + 38 + 'px'
      setTimeout(() => {
        done()
      }, 300)
    },
    afterEnter (el) {
      el.style.overflow = 'visible'
    },
    beforeLeave (el) {
      el.style.overflow = 'hidden'
    },
    leave (el, done) {
      el.style.height = 0 + 'px'
      setTimeout(() => {
        done()
      }, 300)
    },
    afterLeave (el) {
      el.style.overflow = 'hidden'
    },
    toggleGoodsInfo (id) {
      if (id !== this.$route.query.goodsid) {
        this.$router.push('/goodsinfo/' + id)
      }
    }
  }
}
</script>

<style scoped lang="stylus">
  .connect-modal
    width: 100%
    // overflow: hidden
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
        .lab-con
          justify-content: center
        h3
          font-size: 16px
      &:nth-child(2n+1)
        background-color: #fafafa
      .lab
        display: flex
        flex-direction: column
      .lab-1
        width: 200px
      .lab-2
        width: 100px
      .lab-3
        width: 200px
      .lab-con
        width: 160px
        box-sizing: border-box
        padding: 10px 0px
      .lab-8
        flex: 1
        justify-content: center
        .text-more
          text-align: right
          padding-right: 27px
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
</style>
