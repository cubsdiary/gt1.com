<template>
  <div class="footer">
    <div class="foot-con">
      <div class="foot-left">
        <ul>
          <li><span>客服热线：</span> 0519-68952127</li>
          <li><span>公司地址：</span> 常州市创意产业园A幢2601</li>
          <li><span>公司邮箱：</span> gt1@gt1.shop</li>
        </ul>
      </div>
      <div class="foot-content"></div>
      <div class="foot-right">
        <dl class="wechat-dl">
          <dt>
            <img src="../assets/wechat.png" alt="">
          </dt>
          <dd class="title">
            <p class="font">扫描关注“GT1养车”</p>
            <p class="font">获取GT1更多资讯</p>
            <p class="english top">SCANNING ATTENTION TO GT1</p>
            <p class="english">GET MORE INFORMATION ON GT1</p>
          </dd>
        </dl>
      </div>
    </div>
    <p class="copyright"><span>江苏奇特异车业科技股份有限公司</span><span>苏ICP备17066259号-1</span><span>Copyright © 2018 All Rights Reserved.</span> </p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="stylus">
  .footer
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 300px
    background-color: #00051a
    padding-top: 80px
    .foot-con
      width: 1200px
      height: 120px
      margin: 0 auto
      display: flex
      align-items: center
      justify-content: center
      .foot-left
        width: 500px
        li
          height: 40px
          line-height: 40px
          font-size: 16px
          color: #fff
          padding-left: 125px
          &:nth-child(1)
            background-image: url(../assets/phone.png)
            background-repeat: no-repeat
            background-position: 100px center
          &:nth-child(2)
            background-image: url(../assets/address.png)
            background-repeat: no-repeat
            background-position: 100px center
          &:nth-child(3)
            background-image: url(../assets/message.png)
            background-repeat: no-repeat
            background-position: 100px center
          span
            margin-right: 30px
      .foot-content
        height: 100px
        width: 1px
        background-color: #8c8e98
      .foot-right
        width: 500px
        padding-left: 70px
        .wechat-dl
          width: 100%
          height: 120px
          dt
            float: left
            width: 120px
            height: 120px
            margin-right: 20px
            img
              display: block
              width: 100%
              height: 100%
          .title
            padding-top: 28px
            float: right
            width: 290px
            .font
              height: 24px
              line-height: 24px
              font-size: 16px
              color: #fff
            .top
              margin-top: 10px
            .english
              height: 18px
              line-height: 18px
              font-size: 14px
              color: #868eaf
    .copyright
      height: 100px
      width: 100%
      display: flex
      align-items: center
      justify-content: center
      span
        margin: 0 9px
        color: #fff
        font-size: 16px
</style>
