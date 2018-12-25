<template>
  <div class="disdescr">
    <div class="wrapper">
      <div class="title">
        {{currentDiscuss.title}}
      </div>
      <div class="discuss-wrapper" v-for="(item,index) in currentDiscuss.comments"
      :key="index">
        <div class="author">
          <span class="auth">{{item.uid}}</span>
          <span class="time">{{item.update}}</span>
        </div>
        <div class="discuss">
          <code>{{item.content}}</code>
        </div>
      </div>
      <div class="discuss-wrapper">
        <div class="author">
          <span class="auth">1800201517</span>
          <span class="time">a month ago</span>
        </div>
        <div class="discuss">
          <code>syntax error : '}'</code>
        </div>
      </div>
      <div class="add-discuss">
        <textarea></textarea>
      </div>
      <div class="add-btn">
        <button>Add a reply</button>
        <div class="info">You will receive notifications through your email, if anyone replies</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'DisDescr',
  data () {
    return {
      currentDiscuss: {}
    }
  },
  computed: {

  },
  methods: {
    getDiscussDetail () {
      let id = parseInt(this.$route.params.did)
      axios.get(`/discuss/${id}`).then((res) => {
        this.currentDiscuss = res.data.res
        console.log(this.currentDiscuss)
      // this.$store.commit('currentNews', this.currentNews)
      // console.log(this.$store.state.news.content)
      })
    }
  },
  created () {
    this.getDiscussDetail()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .disdescr
    background: #f3f5f7
    .wrapper
      margin: 0 20px
      padding: 30px 50px
      background: #fff
      color: $textColor
      font-size: 14px
      .title
        margin-bottom: 20px
        font-size: 28px
        font-weight: bold
      .discuss-wrapper
        margin: 15px 0
        border: 1px solid rgba(7, 17, 27, .1)
        .author
          padding: 10px 15px
          font-weight: bold
          border-bottom: 1px solid rgba(7, 17, 27, .1)
          .time
            font-weight: 400
            float: right
        .discuss
          padding: 10px 15px
          line-height: 20px
          font-family: Consolas, Monaco, monospace
      .add-discuss
        margin: 20px 0
        textarea
          width: 100%
          height: 60px
          outline: none
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:hover, &:focus
            border: 1px solid $themeColor
      .add-btn
        button
          width: 90px
          height: 30px
          background: $themeColor
          color: #fff
          border-radius: 5px
          &:hover
            cursor: pointer
            opacity: 0.8
        .info
          margin: 20px 0
</style>
