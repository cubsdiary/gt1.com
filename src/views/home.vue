<template>
  <div class="home">
    <div class="banner-container" :style="{height: height + 'px'}">
      <Banner :recommends="bannerImgs" v-if="bannerImgs"></Banner>
    </div>
  </div>
</template>

<script>
import Banner from '@/components/swiper2'
export default {
  components: {
    Banner
  },
  data () {
    return {
      bannerImgs: [
        {
          focusId: 1,
          focusUrl: '',
          focusImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533817342416&di=1040adb19b0453bfbadc7924bf341bd6&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F763293ce06bf1e684ef0ea3da43ae5008d8564b8.jpg'
        }, {
          focusId: 2,
          focusUrl: '',
          focusImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533817493531&di=26c6329ade9109e5bd2e055df6fe76ba&imgtype=0&src=http%3A%2F%2Fpicture.ik123.com%2Fuploads%2Fallimg%2F161230%2F12-161230145255.jpg'
        }, {
          focusId: 3,
          focusUrl: '',
          focusImg: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534412244&di=ffc9d1f1a99b336025cc782229bc2454&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F2%2F578c4bb62a974.jpg'
        }
      ],
      height: '100%'
    }
  },
  created () {
    this.height = (document.documentElement.clientHeight || document.body.clientHeight) - 100
    console.log(this.height)
  }
}
</script>

<style scoped lang="stylus">
</style>
