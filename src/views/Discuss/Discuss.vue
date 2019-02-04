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
            <td><router-link class="author" :to="{name: 'Info', params:{uid:item.uid}}">{{item.name}}</router-link></td>
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
    <Alert :type="type" v-if="showAlert" :show="showAlert"
      :message="message"
    ></Alert>
  </div>
</template>

<script>
import axios from 'axios'
import JumpPage from '@/components/JumpPage'
import Alert from '@/components/Alert'
import { dateDiff } from '@/util/time'
export default {
  name: 'Discuss',
  components: {
    JumpPage,
    Alert
  },
  data () {
    return {
      discuss: [],
      pageSize: 20,
      pageNum: 0,
      page: 1,
      num: 0,
      title: '',
      content: '',
      isLogin: false,
      isDisabled: true,
      showName: false,
      type: '',
      message: '',
      showAlert: false
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
        // this.discuss.forEach(item => {
        //   axios.post('/users/name', {
        //     uid: parseInt(item.uid)
        //   }).then(res => {
        //     item.name = res.data.res.name
        //   })
        // })
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
        // this.discuss.forEach(item => {
        //   axios.post('/users/name', {
        //     uid: parseInt(item.uid)
        //   }).then(res => {
        //     item.name = res.data.res.name
        //   })
        // })
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
        this.showAlert = true
        this.message = '标题不能为空'
        this.type = 'error'
        setTimeout(() => {
          this.showAlert = false
        }, 2000)
      } else {
        let user = this.$store.state.user
        axios.post('/discuss/submit', {
          title: this.title,
          uid: user.uid,
          name: user.name,
          content: this.content,
          create: Date.now()
        }).then((res) => {
          if (parseInt(res.data.status) === 0) {
            this.showAlert = true
            this.message = '提交成功'
            this.type = 'success'
            setTimeout(() => {
              this.showAlert = false
            }, 2000)
            // this.$forceUpdate()
            setTimeout(() => {
              this.$router.go(0)
            }, 2500)
          } else {
            this.showAlert = true
            this.message = '提交失败'
            this.type = 'error'
            setTimeout(() => {
              this.showAlert = false
            }, 2000)
          }
        })
      }
    },
    ifLogin () {
      axios.get('/users/check').then((res) => {
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
