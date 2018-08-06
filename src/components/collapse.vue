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
        <h3 class="lab lab-4">机滤</h3>
        <h3 class="lab lab-5">空滤(空气)</h3>
        <h3 class="lab lab-6">燃滤</h3>
        <h3 class="lab lab-7">空调滤</h3>
        <h3 class="lab lab-8"></h3>
      </li>
      <li class="car-modal" v-for="item in data" :key="item" ref="modalList">
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
        <div class="lab lab-8 bor">
          <div class="text-more">
            <a href="javascript:;">
              <span>其他配件</span>
              <clickToast></clickToast>
            </a>
          </div>
        </div>
      </li>
    </ul>
  </transition>
</template>

<script>
import Toast from '@/components/toast'
import clickToast from '@/components/clickToast'
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
  methods: {
    beforeEnter (el) {
      // if (!this.transition) {
      //   return
      // }
      el.style.height = 0 + 'px'
    },
    enter (el, done) {
      // if (!this.transition) {
      //   return
      // }
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
      // if (!this.transition) {
      //   return
      // }
      el.style.overflow = 'visible'
    },
    beforeLeave (el) {
      // if (!this.transition) {
      //   return
      // }
      el.style.overflow = 'hidden'
    },
    leave (el, done) {
      // if (!this.transition) {
      //   return
      // }
      el.style.height = 0 + 'px'
      setTimeout(() => {
        done()
      }, 300)
    },
    afterLeave (el) {
      // if (!this.transition) {
      //   return
      // }
      el.style.overflow = 'hidden'
    }
  }
}
</script>

<style scoped lang="stylus">
  .connect-modal
    width: 100%
    overflow: hidden
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
        width: 100px
      .lab-3
        flex: 1
      .lab-4, .lab-5, .lab-6, .lab-7
        box-sizing: border-box
        width: 126px
        padding: 10px 0px
      .lab-8
        width: 90px
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
