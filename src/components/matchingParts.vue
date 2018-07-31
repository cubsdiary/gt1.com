<template>
  <div class="matching-parts">
    <Select :data="values" @update="getValue" :disabled="true"></Select>
    <Select :data="values" @update="getValue" :disabled="false"></Select>
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
    width: 400px
    background-color: #727172
</style>
