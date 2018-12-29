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
          <span class="time">{{item.create}}</span>
        </div>
        <div class="discuss">
          <code>{{item.content}}</code>
        </div>
      </div>
      <div class="add-discuss">
        <textarea v-model="reply"></textarea>
      </div>
      <div class="add-btn">
        <button @click="addReply">Add a reply</button>
        <div class="info">You will receive notifications through your email, if anyone replies</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { dateDiff } from '@/util/time'
export default {
  name: 'DisDescr',
  data () {
    return {
      currentDiscuss: {},
      reply: ''
    }
  },
  // computed: {
  //   currentDiscuss () {
  //     return this.$store.state.discuss.content
  //   }
  // },
  methods: {
    getDiscussDetail () {
      let id = parseInt(this.$route.params.did)
      axios.get(`/discuss/${id}`).then((res) => {
        this.currentDiscuss = res.data.res
        this.timeUpNow(res.data.res.comments)
        // this.$store.commit('currentDiscuss', res.data.res)
        console.log(this.currentDiscuss)
      })
    },
    addReply () {
      let id = parseInt(this.$route.params.did)
      let time = Date.now()
      axios.post(`/discuss/${id}`, {
        reply: this.reply,
        create: time
      }).then((res) => {
        this.currentDiscuss = res.data.result.update
        // this.$store.commit('currentDiscuss', res.data.result.update)
        this.$router.go(0)
        // console.log(this.currentDiscuss)
      })
    },
    timeUpNow (discuss) {
      discuss.forEach((item) => {
        let diff = dateDiff(item.create)
        item.create = diff
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
          outline: none
          &:hover
            cursor: pointer
            opacity: 0.8
        .info
          margin: 20px 0
</style>
