<template>
  <div class="disdescr">
    <div class="wrapper">
      <div class="title">
        {{currentDiscuss.title}}
      </div>
      <div class="discuss-wrapper" v-for="(item,index) in currentDiscuss.comments"
      :key="index">
        <div class="author">
          <span class="auth">{{item.name}}</span>
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
        <button :class="{login:isLogin}" :disabled="isDisabled" @click="addReply">Add a reply</button>
        <div class="info">You will receive notifications through your email, if anyone replies</div>
      </div>
    </div>
    <Alert :type="type" v-if="showAlert" :show="showAlert"
      :message="message"
    ></Alert>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from '@/components/Alert'
import { dateDiff } from '@/util/time'
export default {
  name: 'DisDescr',
  components: {
    Alert
  },
  data () {
    return {
      currentDiscuss: {},
      reply: '',
      isLogin: false,
      isDisabled: true,
      type: '',
      message: '',
      showAlert: false
    }
  },
  methods: {
    getDiscussDetail () {
      let id = parseInt(this.$route.params.did)
      axios.get(`/discuss/${id}`).then((res) => {
        this.currentDiscuss = res.data.res
        this.timeUpNow(res.data.res.comments)
      })
    },
    addReply () {
      let id = parseInt(this.$route.params.did)
      let time = Date.now()
      if (this.reply) {
        let user = this.$store.state.user
        axios.post(`/discuss/${id}`, {
          reply: this.reply,
          uid: user.uid,
          name: user.name,
          create: time
        }).then((res) => {
          if (res.data.status === 0) {
            this.showAlert = true
            this.message = '添加回复成功'
            this.type = 'success'
            setTimeout(() => {
              this.showAlert = false
            }, 2000)
            let user = this.$store.state.user
            this.currentDiscuss.comments.push({uid: user.uid, name: user.name, content: this.reply, create: time})
            this.timeUpNow(this.currentDiscuss.comments)
            this.reply = ''
          }
        })
      } else {
        this.showAlert = true
        this.message = '内容不能为空！'
        this.type = 'error'
        setTimeout(() => {
          this.showAlert = false
        }, 2000)
      }
    },
    timeUpNow (discuss) {
      discuss.forEach((item) => {
        let diff = dateDiff(item.create)
        item.create = diff
      })
    },
    ifLogin () {
      axios.get('/users/check').then((res) => {
        console.log(res.data.status)
        if (parseInt(res.data.status) === 0 || parseInt(res.data.status) === 2) {
          this.isLogin = true
          this.isDisabled = false
          this.$store.commit('saveName', res.data.result.userName)
          this.$store.commit('savePwd', res.data.result.userPwd)
        } else {
          this.isLogin = false
          this.isDisabled = true
        }
      })
    }
  },
  created () {
    this.ifLogin()
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
          background: #f7f7f7
          color: #bbbec4
          border-color: #dddee1
          border-radius: 5px
          outline: none
        .login
          background: $themeColor
          color: #fff
          &:hover
            cursor: pointer
            opacity: 0.8
        .info
          margin: 20px 0
</style>
