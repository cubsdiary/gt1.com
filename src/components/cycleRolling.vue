<template>
  <div class="cycle-rolling" @mouseenter.prevent="mouseover" @mouseleave.prevent="mouseleave" ref="cycleRoll">
    <ul ref="cycleList" :style="scrollType ? 'width:' + scrollSize + 'px' : 'height:' + scrollSize + 'px'">
      <li ref="cycleItem" v-for="(item, index) in dataArray" :key="index">
        <div class="content">
          <img :src="imgUrl + item.goodImg" alt="" @click="selectHotImg(item)">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array
    },
    // 滚动元素长度是否相等
    isEqual: {
      type: Boolean,
      default: true
    },
    // 循环滚动次数，0时为 无限循环
    loop: {
      type: Number,
      default: 0
    },
    // 滚动方向  ‘left’, 'right', 'up', 'down'
    direction: {
      type: String,
      default: 'left'
    },
    // 一次滚动的距离
    scrollAmount: {
      type: Number,
      default: 1
    },
    // 滚动一次的时间 ms
    scrollDelay: {
      type: Number,
      default: 5
    }
  },
  data () {
    return {
      dataArray: [],
      cycleRollDom: null,
      scrollW: null,
      scrollH: null,
      cycleListDom: null,
      cycleItem: null,
      listDom: {
        width: 0,
        height: 0
      },
      scrollType: 1,
      scrollSize: 0,
      moveId: null
    }
  },
  created () {
    this.dataArray = this.data.slice()
  },
  mounted () {
    this.init()
  },
  methods: {
    init () {
      this.getDom()
    },
    selectHotImg (item) {
      console.log(item)
    },
    getDom () {
      this.cycleRollDom = this.$refs.cycleRoll
      this.scrollW = this.cycleRollDom.offsetWidth
      this.scrollH = this.cycleRollDom.offsetHeight
      this.listDom.width = this.cycleRollDom.offsetWidth
      this.listDom.height = this.cycleRollDom.offsetHeight
      this.cycleListDom = this.$refs.cycleList
      this.cycleItemDom = this.$refs.cycleItem
      // 滚动类型，1左右，0上下
      this.scrollType = (this.direction === 'left' || this.direction === 'right') ? 1 : 0
      // 防止滚动子元素比滚动元素宽而取不到实际滚动子元素宽度
      this.scrollSize = 10000
      // 获取滚动元素的尺寸
      if (this.isEqual) {
        // scrollSize = $kids[_type ? 'outerWidth' : 'outerHeight']() * $kids.length
        if (this.scrollType) {
          this.scrollSize = this.cycleItemDom[0].offsetWidth * this.cycleItemDom.length
        } else {
          this.scrollSize = this.cycleItemDom[0].offsetHeight * this.cycleItemDom.length
        }
      } else {
        this.cycleItemDom.forEach((item, index) => {
          this.scrollSize = this.cycleItemDom[index][this.scrollType ? 'offsetWidth' : 'offsetHeight'] * this.cycleItemDom.length
        })
      }
      // 滚动元素总尺寸小于容器尺寸，不滚动
      if (this.scrollSize < (this.scrollType ? this.scrollW : this.scrollH)) {
        return
      }
      // 克隆滚动子元素将其插入到滚动元素后，并设定滚动元素宽度
      this.dataArray = this.dataArray.concat(this.dataArray)
      this.scrollSize = this.scrollSize * 2
      // let _self = this
      // this.moveId = setInterval(() => {
      //   let numMoved = 0
      //   _self.scrollFunc()
      // }, _self.scrollDelay)
    },
    scrollFunc () {
      var _dir = (this.direction === 'left' || this.direction === 'right') ? 'scrollLeft' : 'scrollTop'

      if (this.direction === 'left' || this.direction === 'up') {
        let newPos = this.cycleRollDom[_dir] + this.scrollAmount
        if (newPos >= this.scrollSize / 2) {
          newPos -= this.scrollSize
        }
        this.cycleRollDom[_dir] = newPos
      } else {
        let newPos = this.cycleRollDom[_dir] - this.scrollAmount
        if (newPos <= 0) {
          newPos += this.scrollSize
        }
        this.cycleRollDom[_dir] = newPos
      }
    },
    mouseover (e) {
      let _self = this
      // clearInterval(this.moveId)
      this.moveId = setInterval(() => {
        _self.scrollFunc()
      }, _self.scrollDelay)
    },
    mouseleave (e) {
      clearInterval(this.moveId)
      // this.moveId = setInterval(() => {
      // let numMoved = 0
      // _self.scrollFunc()
      // }, _self.scrollDelay)
    }
  },
  beforeDestory () {
    clearInterval(this.moveId)
  }
}
</script>

<style scoped lang="stylus">
  .cycle-rolling
    width: 100%
    height: 136px
    margin-bottom: 20px
    overflow: hidden
    ul
      list-style: none
      li
        float: left
        box-sizing: border-box
        width: 226px
        height: 136px
        color: #fff
        font-size: 40px
        .content
          width: 220px
          height: 136px
          img
            display: block
            width: auto
            height: 100%
</style>
