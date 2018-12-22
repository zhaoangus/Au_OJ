<template>
  <div class="stat">
    <div class="nav-wrapper">
      <div class="nav">
        <div class="descr">
          <router-link class="link-descr" :to="{name:'Descr',params:{pid}}">Description</router-link>
        </div>
        <div class="sub">
          <router-link class="link-sub" :to="{name:'Sub',params:{pid}}">Submit</router-link>
        </div>
        <div class="stat">
          <router-link class="link-stat" :to="{name:'Stat',params:{pid}}">Statistics</router-link>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="content-left">
        <div class="table-wrapper">
          <table>
            <thead>
              <tr align="left">
                <th>Result</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr align="left">
                <td>Total Submissions</td>
                <td><span class="amount">370</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="content-right">
        <div class="table-wrapper">
          <table cellspacing="10">
            <thead>
              <tr align="left">
                <th>Rank</th>
                <th>Username</th>
                <th>Time</th>
                <th>Memory</th>
                <th>length</th>
                <th>Lang</th>
                <th>Submit Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td><span class="username">12H23f333dwd</span></td>
                <td>144</td>
                <td>20316</td>
                <td>328</td>
                <td>Java</td>
                <td>2018-10-12 20:59:23</td>
              </tr>
              <tr>
                <td>2</td>
                <td><span class="username">aaaaa</span></td>
                <td>4</td>
                <td>1720</td>
                <td>140</td>
                <td>C++</td>
                <td>2018-10-10 20:11:23</td>
              </tr>
            </tbody>
          </table>
        </div>
        <JumpPage></JumpPage>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import JumpPage from '@/components/JumpPage'
export default {
  name: 'Stat',
  components: {
    JumpPage
  },
  data () {
    return {
      pid: 0,
      currentProblem: {}
    }
  },
  methods: {
    getProblemStat () {
      let id = parseInt(this.$route.params.pid)
      console.log(id)
      axios.get(`/problem/${id}/stat`).then((res) => {
        this.currentProblem = res.data.res
        // this.$store.commit('currentProblem', this.currentProblem)
        // console.log(this.$store.state.problem.content)
      })
    }
  },
  mounted () {
    this.getProblemStat()
    this.pid = this.$route.params.pid
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
    .nav-wrapper
      margin: 30px 40px
      border-bottom: 1px solid rgba(7, 17, 27, .1)
      .nav
        .stat
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          border-bottom: 1px solid $themeColor
          .link-stat
            color: $themeColor
        .sub
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          .link-sub
            color: #000
            &:hover
              color: $themeColor
        .descr
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          .link-descr
            color: #000
            &:hover
              color: $themeColor
    .content-wrapper
      display: flex
      margin: 30px 40px
      color: $textColor
      .content-left
        flex-grow: 1.5
        .table-wrapper
          table
            width: 100%
            font-size: 14px
            thead
              font-weight: 700
              border-bottom: 1px solid rgba(7, 17, 27, .1)
              th
                margin: 0 20px
                padding: 0 0 15px 0
            tbody
              td
                padding: 15px 0 0 0
                .amount
                  color: $themeColor
                  cursor: pointer
      .content-right
        flex-grow: 1.5
        .table-wrapper
          margin-bottom: 20px
          table
            width: 100%
            font-size: 14px
            thead
              font-weight: 700
              border-bottom: 1px solid rgba(7, 17, 27, .1)
              th
                margin: 0 20px
                padding: 0 0 15px 0
            tbody
              tr
                border-bottom: 1px solid rgba(7, 17, 27, .1)
                td
                  padding: 15px 0 10px 0
                  .username
                    color: $themeColor
                    cursor: pointer
</style>
