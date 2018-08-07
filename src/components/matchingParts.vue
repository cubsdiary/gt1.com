<template>
  <div class="matching-parts">
    <h2>汽车种类</h2>
    <Select v-model="model" style="width:100%" @on-change="getValue">
      <Option v-for="item in carClassify" :value="item.id" :key="item.name">{{ item.name }}</Option>
    </Select>
    <h2>生产商</h2>
    <Select v-model="model1" style="width:100%" filterable>
      <Option v-for="item in brandList" :value="item.id" :key="item.id">{{ item.name }}</Option>
    </Select>
    <h2>车系</h2>
    <Select v-model="model2" style="width:100%" filterable @on-change="getValue">
      <OptionGroup v-for="res in modalList" :label="res.name" :key="res.name">
        <Option v-for="item in res.sons" :value="item.id" :key="item.id">{{ item.name }}</Option>
      </OptionGroup>
    </Select>
    <h2>发动机排量</h2>
    <Select v-model="model3" style="width:100%">
      <Option v-for="(item, index) in displacement" :value="item" :key="index">{{ item }}</Option>
    </Select>
    <div class="btn-box">
      <div class="button" @click="goMatchProduct">
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
      model: null,
      model1: null,
      model2: null,
      model3: null,
      brandList: null,
      modalList: null,
      displacement: null,
      value: null
    }
  },
  created () {
    this.getBrand()
    this.getCarModal()
    this.getDisplacement()
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
    getValue () {
      console.log(this.model2)
    },
    getBrand () {
      this.api_post('/api/car/branchList', (res) => {
        if (res.errorCode === 0) {
          this.brandList = res.data
        }
        console.log(res)
      })
    },
    getCarModal () {
      this.api_post('/api/car/firmList', (res) => {
        if (res.errorCode === 0) {
          this.modalList = res.data
        }
        console.log(res)
      }, {
        brandId: 33
      })
    },
    getDisplacement () {
      this.api_post('/api/car/displacementList', (res) => {
        if (res.errorCode === 0) {
          this.displacement = res.data
        }
        console.log(res)
      }, {
        code: 19
      })
    },
    goMatchProduct () {
      this.$emit('match', this.value)
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
