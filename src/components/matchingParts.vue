<template>
  <div class="matching-parts">
    <h2>汽车种类</h2>
    <Select :data="values" @update="getValue" :disabled="true"></Select>
    <h2>生产商</h2>
    <Select :data="values" @update="getValue" :disabled="false"></Select>
    <h2>车型</h2>
    <Select :data="values" @update="getValue" :disabled="false"></Select>
    <h2>发动机排量</h2>
    <Select :data="values" @update="getValue" :disabled="false"></Select>
    <div class="btn-box">
      <div class="button">
        开始匹配
      </div>
    </div>
  </div>
</template>

<script>
import Select from '@/components/select'
export default {
  components: {
    Select
  },
  computed: {
    values () {
      let arr = []
      for (let i = 0; i < 100; i++) {
        arr.push({
          id: i,
          value: i + '-----oops'
        })
      }
      return arr
    }
  },
  methods: {
    getValue (value) {
      console.log(value)
    }
  }
}
</script>

<style scoped lang="stylus">
  .matching-parts
    box-sizing: border-box
    width: 400px
    background-color: #727172
    padding: 25px 20px
    & > h2
      box-sizing: border-box
      padding-left: 16px
      height: 38px
      line-height: 38px
      font-size: 16px
      color: #fff
    .btn-box
      display: flex
      margin-top: 30px
      justify-content: flex-end
      width: 100%
      height: 50px
      .button
        width: 140px
        height: 50px
        background: -webkit-linear-gradient(left, #ff8838, #ff6e3d)
        text-align: center
        line-height: 50px
        font-size: 22px
        color: #fff
        cursor: pointer
</style>
