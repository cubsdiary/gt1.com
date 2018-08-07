<template>
  <div class="matching-parts">
    <h2>汽车种类</h2>
    <Select v-model="car" style="width:100%" @on-change="getValue">
      <Option v-for="item in carClassify" :value="item.id" :key="item.name">{{ item.name }}</Option>
    </Select>
    <h2>生产商</h2>
    <Select v-model="brand" style="width:100%" filterable>
      <Option v-for="item in brandList" :value="item.id" :key="item.id">{{ item.name }}</Option>
    </Select>
    <h2>车系</h2>
    <Select v-model="serie" style="width:100%" filterable @on-change="getValue" :disabled="!brand">
      <OptionGroup v-for="res in serieList" :label="res.name" :key="res.name">
        <Option v-for="item in res.sons" :value="item.id" :key="item.id">{{ item.name }}</Option>
      </OptionGroup>
    </Select>
    <h2>发动机排量</h2>
    <Select v-model="engine" style="width:100%" :disabled="!serie">
      <Option v-for="(item, index) in engineList" :value="item" :key="index">{{ item }}</Option>
    </Select>
    <div class="btn-box">
      <div class="button" @click="goMatchProduct">
        开始匹配
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      carClassify: [{
        id: 1,
        name: '轿车(2-9人)'
      }],
      car: 1,
      brand: null,
      serie: null,
      engine: null,
      serieList: null,
      engineList: null,
      value: null
    }
  },
  created () {
    this.getBrand()
  },
  watch: {
    brand: function (newBrand, oldBrand) {
      if (newBrand !== null) {
        this.getCarModal(newBrand)
      }
    },
    serie: function (newSerie, oldSerie) {
      if (newSerie !== null) {
        this.getDisplacement(newSerie)
      }
    }
  },
  computed: {
    ...mapGetters([
      'brandList'
    ])
  },
  methods: {
    getValue () {
      console.log(this.model2)
    },
    getBrand () {
      this.api_post('/api/car/branchList', (res) => {
        if (res.errorCode === 0) {
          this.saveBrandListSession(res.data)
        }
      })
    },
    getCarModal (id) {
      this.api_post('/api/car/firmList', (res) => {
        if (res.errorCode === 0) {
          this.serieList = res.data
        }
      }, {
        brandId: id
      })
    },
    getDisplacement (id) {
      this.api_post('/api/car/displacementList', (res) => {
        if (res.errorCode === 0) {
          this.engineList = res.data
        }
      }, {
        code: id
      })
    },
    goMatchProduct () {
      if (this.car === null || this.brand === null || this.serie === null || this.engine === null) {
        this.$Message.warning({
          content: 'tiancuole',
          closable: true
        })
      } else {
        this.$emit('match', this.value)
      }
    },
    ...mapActions([
      'saveBrandListSession'
    ])
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
