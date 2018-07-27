<template>
  <div class="goodsinfo-container">
    <div class="goodsinfo-content">
      <searchView />
      <div class="navigation">
        <div class="left">
          <div class="title">搜索列表</div>
        </div>
        <div class="right">
          <a href="#">订购站点：www.QTYCY.shop.com</a>
        </div>
      </div>
      <div class="goodsinfo-tab1">
        <div class="info-left">

        </div>
        <div class="info-right">
          <div class="info-title">参数详情</div>
          <ul>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">GT1</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">机油滤清器</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">小型轿车/皮卡/摩托</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">124mm</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">90ooKM</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">124mm</div>
            </li>
            <li>
              <div class="li-title">类别：</div>
              <div class="li-info">90ooKM</div>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab2-title">
        <div class="left-title">
          产品对应号
        </div>
        <div class="right-title">
          适配车型
        </div>
      </div>
      <div class="goodsinfo-tab2">
        <div class="info-left">
          <div class="info-title">
            <h3>品牌号</h3>
            <h4>型号</h4>
          </div>
          <ul>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">GT1</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">机油滤清器</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">小型轿车/皮卡/摩托</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">124mm</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">90ooKM</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">124mm</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">90ooKM</div>
            </li>
          </ul>
        </div>
        <div class="info-right">
          <div class="info-title">
            <h3>适配车型</h3>
            <h4>型号</h4>
          </div>
          <ul>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">GT1</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">机油滤清器</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">小型轿车/皮卡/摩托</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">124mm</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">90ooKM</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">124mm</div>
            </li>
            <li>
              <div class="li-title">类别</div>
              <div class="li-info">90ooKM</div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import searchView from '@/components/searchView'
export default {
  components: {
    searchView
  }
}
</script>

<style scoped lang="stylus">
  .goodsinfo-container
    width: 100%
    overflow: hidden
    .goodsinfo-content
      width: 1200px
      overflow: hidden
      padding-top: 15px
      margin: 0 auto
      .navigation
        height: 80px
        display: flex
        box-sizing: border-box
        padding-top: 28px
        padding-left: 20px
        .left
          width: 100px
          height: 30px
          background-image: url('')
          background-position: right center
          background-repeat: no-repeat
          .title
            width: 74px
            height: 100%
            border-bottom: 1px solid #9e9e9e
            font-size: 18px
            line-height: 24px
            color: #919191
        .right
          flex: 1
          display: flex
          justify-content: flex-end
          box-sizing: border-box
          padding-top: 30px
          a
            font-size: 16px
            line-height: 16px
            color: #707071
            text-decoration: underline
      .goodsinfo-tab1
        height: 387px
        display: flex
        .info-left
          flex: 1
        .info-right
          display: flex
          flex-direction: column
          width: 560px
          border: 1px solid #525252
          height: 380px
          .info-title
            box-sizing: border-box
            height: 38px
            padding-left: 36px
            line-height: 38px
            background-color: #525252
            font-size: 16px
            background-color: #525252
            color: #fff
          ul
            flex: 1
            list-style: none
            width: 100%
            overflow: hidden
          li
            box-sizing: border-box
            padding-left: 36px
            display: flex
            height: 56px
            line-height: 56px
            font-size: 18px
            &:nth-child(2n+1)
              background-color: #f4f4f4
            .li-title
              color: #b8b8b8
            .li-info
              flex: 1
              padding-right: 46px
              text-align: right
      .tab2-title
        display: flex
        height: 58px
        padding-top: 25px
        font-size: 20px
        color: #4e4e4e
        font-weight: bold
        line-height: 58px
        .left-title
          flex: 1
          margin-right: 80px
          padding-left: 36px
        .right-title
          box-sizing: border-box
          width: 562px
          padding-left: 36px
      .goodsinfo-tab2
        min-height: 120px
        display: flex
        .info-left
          flex: 1
          margin-right: 80px
        .info-right
          display: flex
          flex-direction: column
          width: 562px
        .info-title
          display: flex
          box-sizing: border-box
          height: 38px
          padding-left: 36px
          padding-right: 46px
          line-height: 38px
          background-color: #525252
          h3
            font-size: 16px
            color: #fff
          h4
            flex: 1
            text-align: right
            font-size: 16px
            color: #fff
        ul
          flex: 1
          list-style: none
          width: 100%
          overflow: hidden
        li
          box-sizing: border-box
          padding-left: 36px
          display: flex
          height: 44px
          line-height: 44px
          font-size: 16px
          font-weight: bold
          color: #4e4e4e
          &:nth-child(2n+1)
            background-color: #f4f4f4
          .li-info
            flex: 1
            padding-right: 46px
            text-align: right
</style>
