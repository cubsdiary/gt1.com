<template>
  <div class="matching-parts">
    <select class="" name="" size="1">
      <option v-for="item in values" :key="item" :value="item">{{item + '----OO'}}</option>
    </select>
  </div>
</template>

<script>
export default {
  computed: {
    values () {
      let arr = []
      for (let i = 0; i < 100; i++) {
        arr.push(i)
      }
      return arr
    }
  }
}
</script>

<style scoped lang="stylus">
  .matching-parts
    width: 400px
    background-color: #727172
</style>
