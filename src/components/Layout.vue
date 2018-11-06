<template>
  <div class="layout">
    <div class="layout-wrapper">
      <div class="news-left"></div>
      <div class="news">NewsList
        <ul >
          <li class="news-list">
            <span class="iconfont">&#xe6be;</span>
            <div class="news-info">
              <div class="info">
                <a href="#">2018年ACM实验室招新个人赛</a>
              </div>
              <div class="date">2018-10-09 20:37:29</div>
            </div>
          </li>
          <li class="news-list">
            <span class="iconfont">&#xe6be;</span>
            <div class="news-info">
              <div class="info">
                <a href="#">2018年ACM实验室招新个人赛</a>
              </div>
              <div class="date">2018-10-09 20:37:29</div>
            </div>
          </li>
          <li class="news-list">
            <span class="iconfont">&#xe6be;</span>
            <div class="news-info">
              <div class="info">
                <a href="#">2018年ACM实验室招新个人赛</a>
              </div>
              <div class="date">2018-10-09 20:37:29</div>
            </div>
          </li>
          <li class="news-list">
            <span class="iconfont">&#xe6be;</span>
            <div class="news-info">
              <div class="info">
                <a href="#">2018年ACM实验室招新个人赛</a>
              </div>
              <div class="date">2018-10-09 20:37:29</div>
            </div>
          </li>
          <li class="news-list">
            <span class="iconfont">&#xe6be;</span>
            <div class="news-info">
              <div class="info">
                <a href="#">2018年ACM实验室招新个人赛</a>
              </div>
              <div class="date">2018-10-09 20:37:29</div>
            </div>
          </li>
        </ul>
        <JumpPage></JumpPage>
      </div>
      <div class="news-right"></div>
    </div>
  </div>
</template>

<script>
import JumpPage from '@/components/JumpPage'
export default {
  name: 'Layout',
  components: {
    JumpPage
  }
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .layout
    overflow: hidden
    width: 100%
    margin: 10px 0
    .layout-wrapper
      display: flex
      width: 100%
      .news-left, .news-right
        flex-grow: 1
      .news
        display: inline-block
        flex-grow: 4
        margin: 5px 0
        font-size: 40px
        color: $textColor
        .news-list
          display: flex
          margin: 20px 0
          padding: 10px 0
          align-items: center
          font-size: 14px
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:hover
            box-shadow: darkgrey 2px 2px 2px 2px
          .iconfont
            flex-grow: 1
            text-align: center
            font-size: 24px
            color: $themeColor
          .news-info
            display: inline-block
            flex-grow: 9
            .info, .date
              padding: 8px 0
            .info
              a
                cursor: pointer
                color: $themeColor
</style>
