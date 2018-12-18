<template>
  <div class="news">
    <div class="overview-wrapper">
      <div class="content">
        Overview
      </div>
    </div>
    <div class="content-wrapper">
      <div v-if="news" class="title">
        <!-- 2018年ACM实验室招新个人赛 -->
        {{news.title}}
      </div>
      <div class="date">2018-10-09 20:37:29</div>
      <div v-if="news" class="content">
        <!-- 10月13日 周六 13:30 ~ 16:30
        在塞北305 面向新老生开展一次招新赛
        题目已经由小黑mua出好了，大家踊跃参加哦~

        2018ACM招新报名群：905458438 -->
        {{news.content}}
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
// import { mapGetters } from 'vuex'
export default {
  name: 'News',
  props: {
    nid: 0
  },
  data () {
    return {
      id: 0,
      pageNews: [],
      currentNews: {}
    }
  },
  computed: {
    news () {
      return this.$store.state.news.content
    }
  },
  created () {
    let id = parseInt(this.$route.params.nid)
    axios.get(`/news/${id}`).then((res) => {
      this.currentNews = res.data.res
      this.$store.commit('currentNews', this.currentNews)
      console.log(this.$store.state.news.content)
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .overview-wrapper
    margin: 30px 40px
    border-bottom: 1px solid rgba(7, 17, 27, .1)
    .content
      display: inline-block
      padding: 10px 10px
      border-bottom: 1px solid $themeColor
      font-size: 14px
      color: $themeColor
      cursor: pointer
  .content-wrapper
    margin: 30px 40px
    .title
      margin: 10px 0
      font-size: 24px
      font-weight: 700
    .date
      padding: 15px 0 15px 0
      font-size: 14px
      font-weight: 700
      border-bottom: 1px solid rgba(7, 17, 27, .1)
    .content
      padding: 15px 0
      font-size: 14px
</style>
