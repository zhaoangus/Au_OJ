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
            <tr align="left" v-for="item in contest" :key="item.cid">
              <td>{{item.cid}}</td>
              <td>
                <span class="link" @click="visit(item)">{{item.title}}</span>
              </td>
              <td id="status">{{item.status}}</td>
              <td>{{item.start}}</td>
              <td class="type">Password</td>
            </tr>
          </tbody>
        </table>
      </div>
      <JumpPage class="jump" v-if="pageNum" :contest="contest" :pageNum="pageNum"
      @changePage="tochangePage"></JumpPage>
    </div>
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
      num: 0
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
    visit (item) {
      if (this.$store.state.user.name) {
        if (item.encrypt) {
          this.$router.push({name: 'DetailOverview', params: {cid: item.cid}})
        }
      } else {
        this.$store.state.user.showLogin = true
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
    position: relative
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
</style>
