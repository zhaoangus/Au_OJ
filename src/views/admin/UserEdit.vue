<template>
  <div class="useredit">
    <h1>修改用户信息</h1>
    <div class="row">
      <span class="label-title">Username</span>
      <span class="input-title">
        <input type="text" v-model="username">
      </span>
      <span class="search">
        <button @click="getUserInfo">Search</button>
      </span>
    </div>
    <div class="row">
      <span class="label">Nick</span>
      <span class="input">
        <input type="text" v-model="nick">
      </span>
    </div>
    <div class="row">
      <span class="label">Motto</span>
      <span class="input">
        <input type="text" v-model="motto">
      </span>
    </div>
    <div class="row">
      <span class="label">School</span>
      <span class="input">
        <input type="text" v-model="school">
      </span>
    </div>
    <div class="row">
      <span class="label">Password</span>
      <span class="input">
        <input type="password" v-model="password" placeholder="Leave it blank if it is not changed">
      </span>
    </div>
    <div class="row">
      <span class="label">CheckPwd</span>
      <span class="input">
        <input :class="{error: checkError}" type="password" v-model="checkpwd" placeholder="Leave it blank if it is not changed">
      </span>
    </div>
    <div class="button">
      <button @click="submit">Submit</button>
    </div>
    <Alert :type="type" v-if="showAlert" :show="showAlert"
      :message="message"
    ></Alert>
  </div>
</template>

<script>
import axios from 'axios'
import Alert from '@/components/Alert'
export default {
  name: 'UserEdit',
  components: {
    Alert
  },
  data () {
    return {
      username: '',
      uid: '',
      nick: '',
      motto: '',
      school: '',
      password: '',
      checkpwd: '',
      userInfo: {},
      checkError: false,
      type: '',
      message: '',
      showAlert: false
    }
  },
  methods: {
    getUserInfo () {
      axios.post('/user', {
        username: this.username
      }).then(res => {
        if (res.data.code === 0) {
          this.userInfo = res.data.res
          this.uid = this.userInfo.uid
          this.nick = this.userInfo.nick
          this.motto = this.userInfo.motto
          this.school = this.userInfo.school
          this.password = this.userInfo.pwd
          this.checkpwd = this.userInfo.pwd
        } else {
          this.showAlert = true
          this.message = '无此用户信息'
          this.type = 'error'
          setTimeout(() => {
            this.showAlert = false
          }, 2000)
        }
      })
    },
    submit () {
      if (this.password !== this.checkpwd) {
        this.checkError = true
      } else {
        let uid = this.uid
        axios.post(`/user/${uid}`, {
          nick: this.nick,
          motto: this.motto,
          school: this.school,
          mail: this.mail,
          password: this.password
        }).then(res => {
          if (res.data.code === 0) {
            this.showAlert = true
            this.message = '修改成功！'
            this.type = 'success'
            setTimeout(() => {
              this.showAlert = false
            }, 2000)
          } else {
            this.showAlert = true
            this.message = '出错了！'
            this.type = 'error'
            setTimeout(() => {
              this.showAlert = false
            }, 2000)
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .useredit
    color: $textColor
    font-size: 14px
    h1
      margin: 20px 0
      font-size: 24px
    .row
      margin: 10px 0
      padding: 5px 0
      display: flex
      border-bottom: 1px solid rgba(7, 17, 27, .1)
      .label-title
        margin: 5px 15px 5px 0
        line-height: 24px
      .input-title
        margin: 5px 15px 5px 0
        line-height: 20px
        input
          width: 150px
          height: 20px
          outline: none
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:focus, &:hover
            border: 1px solid $themeColor
      .search
        margin: 5px 15px 5px 0
        button
          height: 24px
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 3px
          background: $themeColor
          color: #fff
          &:hover
            cursor: pointer
            opacity: .8
      .label
        flex: 2 1 100px
        margin: 5px 15px 5px 0
        line-height: 30px
      .input
        flex: 21 1 auto
        input
          width: 100%
          height: 30px
          outline: none
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:focus, &:hover
            border: 1px solid $themeColor
        .error
          border: 1px solid red
    .button
      margin: 20px 0 10px 0
      button
        width: 80px
        height: 30px
        border: 1px solid rgba(7, 17, 27, .1)
        border-radius: 3px
        background: $themeColor
        color: #fff
        &:hover
          cursor: pointer
          opacity: .8
</style>
