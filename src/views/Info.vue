<template>
  <div class="info">
    <div class="wrapper">
      <div class="left">
        <div class="avatar-wrapper">
          <div class="avatar">
            <img src="../assets/img/avatar.png">
          </div>
          <div class="name">{{userInfo.name}}</div>
        </div>
        <div class="person-info">
          <div class="nick">
            <span class="iconfont">&#xe8bb;</span>
            <span class="nick">Nick: {{userInfo.nick||'none'}}</span>
          </div>
          <div class="group">
            <span class="iconfont">&#xe6f2;</span>
            <span class="group">Group: {{userInfo.school||'none'}}</span>
          </div>
          <div class="motto">
            <span class="iconfont">&#xe9da;</span>
            <span class="motto">Motto: {{userInfo.motto}}</span>
          </div>
        </div>
        <div class="submit-wrapper">
          <div class="solve">
            <div class="number">{{userInfo.solve}}</div>
            <div class="title">Solved</div>
          </div>
          <div class="submit">
            <div class="number">{{userInfo.submit}}</div>
            <div class="title">Submit</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="title-wrapper">
          <span @click="toOverview" class="overview" :class="{active: showOverview}">Overview</span>
          <span @click="toEdit" class="edit" :class="{active: !showOverview}">Edit</span>
        </div>
        <div v-if="showOverview" class="show-overview">
          <div class="solved-wrapper">
            <div class="title">Solved</div>
            <div class="content">
              <div class="link-wrapper" v-for="(item, index) in userInfo.solved" :key="index">
                <router-link :to="{name:'Descr',params:{pid:item}}" class="link">{{item}}</router-link>
              </div>
            </div>
          </div>
          <div class="unsolved-wrapper">
            <div class="title">Unsolved</div>
            <div class="content">
              <div class="link-wrapper" v-for="(item, index) in userInfo.unsolved" :key="index">
                <router-link :to="{name:'Descr',params:{pid:item}}" class="link">{{item}}</router-link>
              </div>
            </div>
          </div>
        </div>
        <div v-else class="show-edit">
          <form action="">
            <div class="nick">
              <div class="label-wrapper">
                <label for="">Nick</label>
              </div>
              <input type="text" v-model="nick">
            </div>
            <div class="motto">
              <div class="label-wrapper">
                <label for="">Motto</label>
              </div>
              <input type="text" v-model="motto">
            </div>
            <div class="school">
              <div class="label-wrapper">
                <label for="">School</label>
              </div>
              <input type="text" v-model="school">
            </div>
            <div class="mail">
              <div class="label-wrapper">
                <label for="">Mail</label>
              </div>
              <input type="text" v-model="mail">
            </div>
            <div class="password">
              <div class="label-wrapper">
                <label for="">Password</label>
              </div>
              <input v-model="password" type="password" placeholder="Leave it blank if it is not changed">
            </div>
            <div class="checkpwd">
              <div class="label-wrapper">
                <label for="">Checkpwd</label>
              </div>
              <input :class="{error: checkError}" v-model="checkpwd" type="password" placeholder="Leave it blank if it is not changed">
              <!-- <div class="error-info">{{tips}}</div> -->
            </div>
            <div class="btn">
              <button @click="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Info',
  data () {
    return {
      showOverview: true,
      userInfo: {},
      nick: '',
      motto: '',
      school: '',
      mail: '',
      password: '',
      checkpwd: '',
      // tips: '111'
      checkError: false
    }
  },
  methods: {
    toOverview () {
      this.showOverview = true
    },
    toEdit () {
      this.showOverview = false
    },
    getUserInfo () {
      let uid = this.$route.params.uid
      axios.get(`/user/${uid}`).then(res => {
        this.userInfo = res.data.res
        this.nick = this.userInfo.nick
        this.motto = this.userInfo.motto
        this.school = this.userInfo.school
        this.mail = this.userInfo.mail
      })
    },
    submit () {
      let uid = this.$route.params.uid
      if (this.password !== this.checkpwd) {
        this.checkError = true
        this.checkpwd = ''
      } else {
        axios.post(`/user/${uid}`, {
          nick: this.nick,
          motto: this.motto,
          school: this.school,
          mail: this.mail,
          password: this.password,
          checkpwd: this.checkpwd
        }).then(res => {
          console.log(res.data.res)
        })
      }
    }
  },
  mounted () {
    this.getUserInfo()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .info
    background: #f3f5f7
    .wrapper
      display: flex
      margin: 0 20px
      color: $textColor
      font-size: 14px
      background: #fff
      .left
        flex: 1
        .avatar-wrapper
          margin: 20px 0
          text-align: center
          .name
            margin: 10px 0
            font-size: 28px
            font-weight: bold
        .person-info
          padding: 0 40px
          .nick, .group, .motto
            margin: 10px 0
            vertical-align: top
        .submit-wrapper
          position: relative
          margin: 20px 40px
          padding: 45px 0
          text-align: center
          border: 1px solid rgba(7, 17, 27, .2)
          .solve
            position: absolute
            top: 0
            left: 0
            padding: 15px 0 0 80px
            font-weight: bold
            .number
              margin: 5px 0
              font-size: 28px
          .submit
            position: absolute
            top: 0
            right: 0
            padding: 15px 80px 0 0
            font-weight: bold
            .number
              margin: 5px 0
              font-size: 28px
      .right
        flex: 2
        .title-wrapper
          margin: 20px
          border-bottom: 1px solid rgba(7, 17, 27, .1)
          .overview, .edit
            display: inline-block
            padding: 10px 20px
            cursor: pointer
            &:hover
              opacity: 0.8
              color: $themeColor
          .active
            color: $themeColor
            border-bottom: 2px solid $themeColor
        .show-overview
          margin: 0 20px
          .solved-wrapper
            .title
              margin: 20px 0
            .content
              margin: 0 20px
              .link-wrapper
                display: inline-block
                .link
                  margin: 0 5px
                  color: $themeColor
          .unsolved-wrapper
            .title
              margin: 20px 0
            .content
              margin: 0 20px
              .link
                margin: 0 5px
                color: $themeColor
        .show-edit
          margin: 0 20px
          .nick, .motto, .school, .mail, .password, .checkpwd
            margin: 15px 0
            width: 80%
            .label-wrapper
              display: inline-block
              position: relative
              width: 100px
              label
                display: inline-block
            input
              padding: 0 5px
              width: 60%
              height: 30px
              border-radius: 5px
              border: 1px solid rgba(7, 17, 27, .1)
              outline: none
              &:hover, &:focus
                border: 1px solid $themeColor
              &::placeholder
                color: rgba(7, 17, 27, .3)
            .error
              border: 1px solid red
          .btn
            margin: 30px 0 0 105px
            button
              width: 80px
              height: 35px
              border-radius: 5px
              background: $themeColor
              color: #fff
              outline: none
              &:hover
                cursor: pointer
                opacity: 0.8
</style>
