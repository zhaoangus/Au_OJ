<template>
  <div class="contest">
    <div class="wrapper">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr align="left">
              <th width="5%">CID</th>
              <th width="40%">Title</th>
              <th width="10%">Status</th>
              <th width="30%">Start Time</th>
              <th width="15%">Type</th>
            </tr>
          </thead>
          <tbody>
            <tr align="left" v-for="(item, index) in contest" :key="item.cid">
              <td>{{item.cid}}</td>
              <td>
                <span class="link" @click="visit(item, index)">{{item.title}}</span>
              </td>
              <td id="status">{{status[item.status-1]}}</td>
              <td>{{item.start}}</td>
              <td class="type">Password</td>
            </tr>
          </tbody>
        </table>
      </div>
      <JumpPage class="jump" v-if="pageNum" :contest="contest" :pageNum="pageNum"
      @changePage="tochangePage"></JumpPage>
    </div>
    <transition name="fade">
      <div class="encrypt-wrapper" v-show="showEncrypt">
        <div class="encrypt">
          <div class="input">
            <input type="text" placeholder="Please enter password" v-model="input_encrypy">
          </div>
          <div class="btn">
            <button class="cancel" @click="cancel">取消</button>
            <button class="confirm" @click="confirm">确认</button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import axios from 'axios'
import JumpPage from '@/components/JumpPage'
import { getDate } from '@/util/getDate'
export default {
  name: 'Contest',
  components: {
    JumpPage
  },
  data () {
    return {
      contest: [],
      pageSize: 20,
      pageNum: 0,
      page: 1,
      num: 0,
      status: ['Ended', 'Runing'],
      showEncrypt: false,
      input_encrypy: '',
      index: 0,
      item: {}
    }
  },
  methods: {
    getContestList () {
      this.page = parseInt(this.$route.query.page) || 1
      this.$store.commit('toCurrentContestPage', this.page)
      let param = {
        page: this.page
      }
      axios.get('/contest', {
        params: param
      }).then((res) => {
        this.contest = res.data.res
        this.num = res.data.num
        this.pageNum = res.data.pageNum
        this.contest.forEach((item) => {
          item.start = getDate(parseInt(item.start))
        })
      })
    },
    reload (currentpage) {
      this.$router.push({
        path: 'contest',
        query: {
          page: currentpage
        }
      })
      let param = {
        page: currentpage
      }
      // this.$store.commit('toCurrentProblemPage', currentpage)
      axios.get('/contest', {
        params: param
      }).then((res) => {
        this.contest = res.data.res
        this.pageNum = res.data.pageNum
        this.contest.forEach((item) => {
          item.start = getDate(parseInt(item.start))
        })
      })
    },
    tochangePage (item) {
      this.reload(item)
    },
    visit (item, index) {
      if (this.$store.state.user.name) {
        if (item.encrypt) {
          this.showEncrypt = true
          this.index = index
          this.item = item
        }
      } else {
        this.$store.state.user.showLogin = true
      }
    },
    cancel () {
      this.showEncrypt = false
    },
    confirm () {
      if (this.contest[this.index].encrypt === this.input_encrypy) {
        this.$router.push({name: 'DetailOverview', params: {cid: this.item.cid}})
      } else {
        console.log('false')
      }
    }
  },
  created () {
    this.getContestList()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .wrapper
    margin: 20px 40px
    padding: 0 40px
    font-size: 14px
    color: $textColor
    .table-wrapper
      margin: 40px 0 20px 0
      table
        width: 100%
        thead
          font-weight: bold
          tr
            border-bottom: 1px solid rgba(7, 17, 27, .1)
            th
              padding: 0 0 15px 0
        tbody
          tr
            td
              padding: 15px 0 15px 0
              border-bottom: 1px solid rgba(7, 17, 27, .1)
              .link
                color: $themeColor
                cursor: pointer
            #title
              color: $themeColor
              &:hover
                cursor: pointer
            #status
              color: red
              font-weight: bold
            .type
              font-weight: bold
  .encrypt-wrapper
    position: fixed
    z-index: 2
    top: 0
    left: 0
    width: 100%
    height: 100%
    overflow: auto
    color: $textColor
    background: rgba(7, 17, 27, 0.4)
    background-filter: blur(10px)
    transition: opacity .5s
    &.fade-enter, &.fade-leave-to
      opacity: 0
    .encrypt
      position: absolute
      z-index: 100
      padding: 10px
      top: 30%
      left: 33%
      width: 33%
      height: 25%
      text-align: center
      background: #fff
      border-radius: 10px
      .input
        display: inline-block
        margin: 20px 0
        text-align: center
        height: 40px
        width: 95%
        input
          width: 100%
          height: 30px
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          outline: none
          &:focus, &:hover
            border: 1px solid $themeColor
            box-shadow: 0 0 3px $themeColor
      .btn
        margin: 10px 0
        text-align: right
        button
          display: inline-block
          margin-left: 10px
          width: 60px
          height: 35px
          vertical-align: middle
          border-radius: 5px
          outline: none
          font-size: 14px
          background: $themeColor
          color: #fff
          border-color: #dddee1
          &:hover
            cursor: pointer
            opacity: 0.8
        .cancel
          background: #fff
          color: $textColor
          &:hover
            color: $themeColor
</style>
