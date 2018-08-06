<template>
  <div id="app">
    <vHeader/>
    <router-view/>
    <vFooter/>
  </div>
</template>
<script>
import vHeader from '@/components/header'
import vFooter from '@/components/footer'
export default{
  components: {
    vHeader,
    vFooter
  }
}
</script>
<style scoped lang="stylus">
#app
  font-family: 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  position: relative
  box-sizing: border-box
  min-height: 100%
  width: 100%
  padding-bottom: 200px
</style>
