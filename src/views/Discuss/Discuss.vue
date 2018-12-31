<template>
  <div class="discuss">
    <div class="table-wrapper">
      <JumpPage class="jump" v-if="pageNum" :discuss="discuss" :pageNum="pageNum"
      @changePage="tochangePage"></JumpPage>
      <table>
        <thead>
          <tr align="left">
            <th width="5%">Did</th>
            <th width="55%">Title</th>
            <th width="20%">Author</th>
            <th width="20%">Update</th>
          </tr>
        </thead>
        <tbody>
          <tr align="left" v-for="item in discuss" :key="item.did">
            <td>{{item.did}}</td>
            <td><router-link class="title" :to="{name:'DisDescr',params:{did:item.did}}">{{item.title}}</router-link></td>
            <td><router-link class="author" to="/user/18H">{{item.uid}}</router-link></td>
            <td>{{item.update}}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="new-wrapper">
      <div class="title">
        Create New Thread
      </div>
      <div class="content-wrapper">
        <form action="">
          <div class="content-title">
            <label for="">Title</label>
            <input type="text" v-model="title">
          </div>
          <div class="content">
            <label for="">Content</label>
            <textarea cols="30" rows="10" v-model="content"></textarea>
          </div>
          <div class="btn">
            <button :class="{login:isLogin}" :disabled="isDisabled" @click="submit">Submit</button>
            <span class="ifLogin" v-if="!isLogin">Login to reply</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import JumpPage from '@/components/JumpPage'
import { dateDiff } from '@/util/time'
export default {
  name: 'Discuss',
  components: {
    JumpPage
  },
  data () {
    return {
      discuss: [],
      pageSize: 30,
      pageNum: 0,
      page: 1,
      num: 0,
      title: '',
      content: '',
      isLogin: false,
      isDisabled: true
    }
  },
  // computed: {
  //   discuss () {
  //     return this.$store.state.discuss.content
  //   }
  // },
  methods: {
    getDiscussList () {
      this.page = parseInt(this.$route.query.page) || 1
      this.$store.commit('toCurrentDiscussPage', this.page)
      let param = {
        page: this.page
      }
      axios.get('/discuss', {
        params: param
      }).then((res) => {
        this.discuss = res.data.res
        this.num = res.data.num
        this.pageNum = res.data.pageNum
        this.timeUpNow(res.data.res)
        // this.$store.commit('currentDiscuss', res.data.res)
      })
    },
    reload (currentpage) {
      this.$router.push({
        path: 'discuss',
        query: {
          page: currentpage
        }
      })
      let param = {
        page: currentpage
      }
      this.$store.commit('toCurrentProblemPage', currentpage)
      axios.get('/discuss', {
        params: param
      }).then((res) => {
        this.discuss = res.data.res
        this.pageNum = res.data.pageNum
        this.timeUpNow(res.data.res)
      })
    },
    tochangePage (item) {
      this.reload(item)
    },
    timeUpNow (discuss) {
      discuss.forEach((item) => {
        let diff = dateDiff(item.update)
        item.update = diff
      })
    },
    submit () {
      if (!this.title) {
        alert('标题不能为空')
      } else {
        axios.post('/discuss/submit', {
          title: this.title,
          content: this.content,
          create: Date.now()
        }).then((res) => {
          console.log(res.data)
          if (parseInt(res.data.status) === 0) {
            alert('提交成功！')
            // this.$forceUpdate()
            this.$router.go(0)
          } else {
            console.log('error')
          }
        })
      }
    },
    ifLogin () {
      axios.get('/users/check').then((res) => {
        console.log(res.data.status)
        if (parseInt(res.data.status) === 0) {
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
    this.getDiscussList()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .discuss
    background: #f3f5f7
    .table-wrapper
      margin: 0 20px
      padding: 30px 50px
      background: #fff
      table
        margin: 20px 0
        width: 100%
        font-size: 14px
        color: $textColor
        thead
          font-weight: 700
          border-bottom: 1px solid rgba(7, 17, 27, .1)
          th
            padding: 0 0 15px 0
        tbody
          td
            padding: 15px 0 15px 0
            border-bottom: 1px solid rgba(7, 17, 27, .1)
          .title, .author
            color: $themeColor
            cursor: pointer
    .new-wrapper
      margin: 0 20px
      padding: 0 50px
      font-size: 14px
      color: $textColor
      background: #fff
      .title
        margin-bottom: 20px
        font-weight: 700
        font-size: 16px
      .content-wrapper
        margin: 10px 10px
        .content-title
          display: flex
          label
            flex-wrap: nowrap
            margin: 8px 10px 0 20px
          input
            width: 100%
            height: 25px
            border: 1px solid rgba(7, 17, 27, .1)
            border-radius: 5px
            outline: none
            &:hover
              border: 1px solid $themeColor
        .content
          display: flex
          margin: 20px 0
          label
            flex-wrap: nowrap
            margin-top: 8px
            margin-right: 10px
          textarea
            width: 100%
            height: 60px
            border: 1px solid rgba(7, 17, 27, .1)
            border-radius: 5px
            outline: none
            &:hover
              border: 1px solid $themeColor
        .btn
          margin: 10px 0 0 60px
          button
            width: 70px
            height: 30px
            border-radius: 5px
            outline: none
            background: #f7f7f7
            color: #bbbec4
            border-color: #dddee1
          .login
            background: $themeColor
            color: #fff
            &:hover
              cursor: pointer
              opacity: 0.8
</style>
