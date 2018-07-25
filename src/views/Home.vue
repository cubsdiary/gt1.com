<template>
  <div class="home-container">
    <div class="home-nav">

    </div>
    <div class="home-content">
      <searchView></searchView>
      <cycleRolling/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import searchView from '@/components/searchView.vue'
import cycleRolling from '@/components/cycleRolling.vue'

export default {
  name: 'home',
  components: {
    searchView,
    cycleRolling
  }
}
</script>
<style scoped lang="stylus">
  .home-container
    width: 100%
    overflow: hidden
    .home-nav
      width: 100%
      height: 100px
    .home-content
      width: 1200px
      overflow: hidden
      padding-top: 15px
      margin: 0 auto

</style>
