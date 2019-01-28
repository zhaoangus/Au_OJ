<template>
  <div class="news">
    <div class="overview-wrapper">
      <div class="tab">
        Overview
      </div>
    </div>
    <div class="content-wrapper">
      <div v-if="news" class="title">
        {{news.title}}
      </div>
      <div class="date">2018-10-09 20:37:29</div>
      <div v-if="news" class="content" v-html="news.content">
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
      // content: `<h1>111</h1>
      // <br><h2 style="color: red;font-size: 24px">222</h2><br><button>btn</button>`
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
    .tab
      display: inline-block
      padding: 10px 10px
      border-bottom: 1px solid $themeColor
      color: $themeColor
      font-size: 14px
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
</style>
