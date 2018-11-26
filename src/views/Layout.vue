<template>
  <div class="layout">
    <div class="layout-wrapper">
      <div class="news-left"></div>
      <div class="news">NewsList
        <ul >
          <li class="news-list" v-for="item in news" :key="item.nid">
            <span class="iconfont">&#xe6be;</span>
            <div class="news-info">
              <div class="info">
                <router-link to="/newsdetail/1">{{item.title}}</router-link>
              </div>
              <div class="date">2018-10-09 20:37:29</div>
            </div>
          </li>
        </ul>
        <JumpPage :news="news" :pageNum="pageNum" :currentPage="page"
        @changePage="tochangePage"></JumpPage>
      </div>
      <div class="news-right"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import JumpPage from '@/components/JumpPage'
export default {
  name: 'Layout',
  components: {
    JumpPage
  },
  data () {
    return {
      news: [],
      page: 1,
      pageSize: 2,
      pageNum: 1
    }
  },
  methods: {
    getNewsList () {
      this.page = parseInt(this.$route.query.page)
      let param = {
        page: this.page
      }
      axios.get('/news', {
        params: param
      }).then((res) => {
        this.news = res.data.res
        this.pageNum = res.data.pageNum
      })
    },
    reload (currentpage) {
      this.$router.push({
        path: 'news',
        query: {
          page: currentpage
        }
      })
    },
    tochangePage (item) {
      this.reload(item)
      this.getNewsList()
    }
  },
  mounted () {
    this.getNewsList()
    console.log(this.page)
  },
  watch: {
    '$route' (to, from) {
      if (to !== from) {
        this.page = this.currentPage
      }
    }
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
        .jumppage
          font-size: 14px
          height: 32px
          .pages
            display: inline-block
            .front, .back, .page1, .page2
              display: inline-block
              vertical-align: middle
              margin: 0 2px
              width: 30px
              height: 30px
              line-height: 30px
              text-align: center
              border: 1px solid rgba(7, 17, 27, .1)
              border-radius: 5px
              &:hover
                cursor: pointer
                border: 1px solid $themeColor
            .front
              &:hover
                cursor: not-allowed
                border: 1px solid rgba(7, 17, 27, .1)
          .input
            display: inline-block
            appearance: none
            padding: 0 0 0 5px
            width: 50px
            height: 30px
            outline: none
            border: 1px solid rgba(7, 17, 27, .1)
            border-radius: 4px
            &:hover
              border: 1px solid $themeColor
</style>
