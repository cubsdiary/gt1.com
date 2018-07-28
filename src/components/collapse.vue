<template>
  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"

    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    >
    <ul class="connect-modal" v-if="show">
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
      <li class="car-modal" v-for="item in data" :key="item">
        <div class="lab lab-1"><span>车型</span></div>
        <div class="lab lab-2"><span>排量</span></div>
        <div class="lab lab-3"><span>年限</span></div>
        <div class="lab lab-4 bor">
          <div class="text-more">
            <span>
              燃滤
              <div class="toast-info right-lv">
                <div class="box-s"></div>
                <img class="img-info" src="../assets/default.png"></img>
              </div>
            </span>
          </div>
        </div>
        <div class="lab lab-5 bor">
          <div class="text-more">
            <!-- <Toast :right="1"></Toast> -->
            <span>燃滤</span>
          </div>
        </div>
        <div class="lab lab-6 bor">
          <div class="text-more">
            <!-- <Toast :right="1"></Toast> -->
            <span>燃滤
              <div class="toast-info right-lv">
                <div class="box-s"></div>
                <img class="img-info" src="../assets/default.png"></img>
              </div>
            </span>
          </div>
          <div class="text-more">
            <!-- <Toast :right="1"></Toast> -->
            <span>燃滤
              <div class="toast-info right-lv">
                <div class="box-s"></div>
                <img class="img-info" src="../assets/default.png"></img>
              </div>
            </span>
          </div>
          <div class="text-more">
            <!-- <Toast :right="1"></Toast> -->
            <span>燃滤
              <div class="toast-info right-lv">
                <div class="box-s"></div>
                <img class="img-info" src="../assets/default.png"></img>
              </div>
            </span>
          </div>
        </div>
        <div class="lab lab-7 bor">
          <div class="text-more">
            <!-- <Toast :right="1"></Toast> -->
            <span>燃滤</span>
          </div></div>
        <div class="lab lab-8 bor">
          <div class="text-more">
            <!-- <Toast :right="2"></Toast> -->
            <span>其他配件</span>
          </div>
        </div>
      </li>
    </ul>
  </transition>
</template>

<script>
import {addClass, removeClass} from '../assets/utils/dom'
export default {
  props: {
    show: {
      type: Boolean
    },
    data: {
      type: Array
    }
  },
  methods: {
    beforeEnter (el) {
      el.style.height = 0 + 'px'
      el.style.opacity = 0
    },
    enter (el, done) {
      addClass(el, 'collapse-transition')
      el.style.height = this.data.length * 44 + 38 + 'px'
      el.style.opacity = 1
      done()
    },
    afterEnter (el) {
      removeClass(el, 'collapse-transition')
      console.log('afterEnter', el.style.height + '----')
    },
    beforeLeave (el) {
      el.style.height = this.data.length * 44 + 38 + 'px'
      el.style.opacity = 1
      console.log('beforeLeave', el.style.height + '----')
    },
    leave (el, done) {
      addClass(el, 'collapse-transition')
      el.style.height = 0 + 'px'
      el.style.opacity = 0
      console.log('leave', el.style.height + '----')
      done()
    },
    afterLeave (el) {
      removeClass(el,'collapse-transition')
      console.log('afterLeave', el.style.height + '---')
    }
  }
}
</script>

<style scoped lang="stylus">
  .collapse-transition
    transition: all 10s
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
          .toast-info
            display: none
            position: absolute
            top: 0
            width: 225px
            height: 200px
            background-color: #fff
            -webkit-box-shadow: 0 0px 20px #ead8d8
            border-radius: 5px
            z-index: 100
            &.right-lv
              right: 140px
            &.right-other
              right: 104px
            .box-s
              position: absolute
              right: -10px
              top: 7px
              width: 0
              height: 0
              border-width: 5px
              border-style: solid
              border-color: transparent transparent transparent #fff
            .img-info
              width: 180px
              height: 180px
              display: block
              background-color: red
              margin: 0 auto
              margin-top: 10px
        span
          cursor: pointer
          &:hover
            font-weight: bold
            .toast-info
              display: block
</style>
