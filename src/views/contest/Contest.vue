<template>
  <div class="contest">
    <div class="wrapper">
      <div class="table-wrapper">
        <table>
          <thead>
            <tr align="left">
              <th>CID</th>
              <th>Title</th>
              <th>Status</th>
              <th>Start Time</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr align="left" v-for="item in contest" :key="item.cid">
              <td>{{item.cid}}</td>
              <td><router-link id="title" to="/contest/11">{{item.title}}</router-link></td>
              <td id="status">{{item.status}}</td>
              <td>{{item.start}}</td>
              <td class="type">Public</td>
            </tr>
            <tr align="left">
              <td>120</td>
              <td><router-link id="title" to="/">新生练习题汇总一（基本输入输出）</router-link></td>
              <td id="status">Runing</td>
              <td>2018-11-12 00:00:00</td>
              <td class="type">Public</td>
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
      })
    },
    tochangePage (item) {
      this.reload(item)
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
