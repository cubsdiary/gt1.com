<template>
  <div class="matching-parts">
    <h2>汽车种类</h2>
    <Select v-model="model" style="width:100%">
      <Option v-for="item in carClassify" :value="item.name" :key="item.name">{{ item.name }}</Option>
    </Select>
    <h2>生产商</h2>
    <!-- <Select :data="values" @update="getValue" :disabled="false"></Select> -->
    <h2>车系</h2>
    <!-- <Select :data="values" @update="getValue" :disabled="false"></Select> -->
    <h2>发动机排量</h2>
    <!-- <Select :data="values" @update="getValue" :disabled="false"></Select> -->
    <div class="btn-box">
      <div class="button">
        开始匹配
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carClassify: [{
        id: 1,
        name: '轿车(2-9人)'
      }],
      model: null
    }
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
    display: inline-block
    box-sizing: border-box
    width: 300px
    background-color: #727172
    padding: 20px 20px
    & > h2
      box-sizing: border-box
      padding-left: 16px
      height: 30px
      line-height: 30px
      font-size: 14px
      color: #fff
    .btn-box
      display: flex
      margin-top: 15px
      justify-content: flex-end
      width: 100%
      height: 40px
      .button
        width: 140px
        height: 40px
        background: -webkit-linear-gradient(left, #ff8838, #ff6e3d)
        text-align: center
        line-height: 40px
        font-size: 16px
        color: #fff
        cursor: pointer
</style>
