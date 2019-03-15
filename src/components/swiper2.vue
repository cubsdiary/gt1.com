<template>
  <div class="slider" ref="slider" :style="{width: width}">
    <div class="slider-group" ref="sliderGroup" @transitionend="transitionEnd" :style="{transform: translate3d, transitionDuration: animateTime + 'ms'}">
      <div v-for="(item, index) in imgs" :key="index" >
        <a :href="item.focusUrl">
          <img :src="item.focusImg" alt="">
        </a>
      </div>
    </div>
    <div class="pagination" v-if="pagination">
      <div class="dots" :class="{'dots-active': item === showNumber}" :style="{backgroundColor: color}" v-for="item in slidesNumber" :key="item" @click="goToImg(item)">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'swiper',
  props: {
    /* 一次滑动的默认时间 */
    duration: {
      default: 500
    },
    /* 是否自动播放 */
    autoplay: {
      default: 5000
    },
    slidetype: {
      default: 'left'
    },
    recommends: {
      type: Array,
      required: true
    },
    color: {
      default: '#000'
    },
    pagination: {
      default: true
    },
    width: {
      type: String,
      default: '100%'
    }
  },
  computed: {
    slidesNumber () {
      let number = []
      for (let i = 0; i < this.recommends.length - 2; i++) {
        number.push(i)
      }
      return number
    },
    imgs () {
      let imgs = this.recommends
      let start = this.recommends[0]
      let end = this.recommends[this.recommends.length - 1]
      imgs.push(start)
      imgs.unshift(end)
      return imgs
    }
  },
  data () {
    return {
      imgIndex: 1,
      showNumber: 0,
      domLeft: 0,
      translate3d: '',
      sliderDom: '',
      timer: null,
      animateTime: 0
    }
  },
  methods: {
    /*  动画结束监听   */
    transitionEnd () {
      clearTimeout(this.timer)
      if (this.imgIndex >= this.imgs.length - 1) {
        this.imgIndex = 1
        this.goBackImg(0)
      } else if (this.imgIndex <= 0) {
        this.imgIndex = this.slidesNumber.length
        this.goBackImg(0)
      }
      if (this.autoplay) {
        this.player()
      }
    },
    /*      右向左滑动， 下一页        */
    nextImg (text) {
      if (this.pagination) {
        this.flipNumber('next')
      }
      this.imgIndex += 1
      let time = 0
      time = this.duration
      this.animateImg(time)
    },
    /*      左向右滑动， 下一页        */
    prevImg (text) {
      if (this.pagination) {
        this.flipNumber('prev')
      }
      this.imgIndex -= 1
      let time = this.duration
      this.animateImg(time)
    },
    goToImg (index) {
      this.imgIndex = index + 1
      this.showNumber = index
      this.animateImg(this.duration)
    },
    flipNumber (text) {
      if (text === 'next') {
        this.showNumber += 1
      } else if (text === 'prev') {
        this.showNumber -= 1
      }
      if (this.showNumber > this.slidesNumber.length - 1) {
        this.showNumber = 0
      } else if (this.showNumber < 0) {
        this.showNumber = this.slidesNumber.length - 1
      }
    },
    goBackImg (time) {
      this.animateTime = time
      this.domLeft = -this.imgIndex * this.sliderDom
      this.translate3d = 'translate3d(' + (this.domLeft) + 'px, 0px, 0px)'
    },
    /*      动画效果，设置移动后的坐标 和 动画时间        */
    animateImg (time) {
      this.goBackImg(time)
    },
    /*      初始化设置        */
    init () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      this.sliderDom = this.$refs.slider.offsetWidth
      this.goBackImg(0)
      this.player()
    },
    /*      自动播放       */
    player () {
      this.timer = setTimeout(() => {
        if (this.slidetype === 'right') {
          this.prevImg('init')
        } else if (this.slidetype === 'left') {
          this.nextImg('init')
        }
      }, this.autoplay)
    }
  },
  mounted () {
    this.init()
  },
  watch: {
    recommends () {
      setTimeout(() => {
        this.init()
      }, 20)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
  .slider
    position: relative
    float: right
    min-width: 1200px
    height: 100%
    overflow: hidden
    .pagination
      position: absolute
      left: 0
      bottom: 20px
      width: 100%
      height: 30px
      display: flex
      align-items:flex-end
      justify-content: center
      .dots
        height: 6px
        width: 120px
        opacity: 0.3
        margin: 0 4px
        cursor: pointer
        &.dots-active
          opacity: 0.6
    .slider-group
      height: 100%
      min-width: 1200px
      display: flex
      & > div
        display: flex
        align-items:center
        justify-content: center
        width: 100%
        height: 100%
        flex-shrink: 0
        z-index: 10
        overflow: hidden
        a
          display: inline-block
          width: 100%
          height: 100%
          overflow: hidden
          resize: both
          overflow: hidden
          img
            width: 100%
            height: 100%
            object-fit: cover
</style>
