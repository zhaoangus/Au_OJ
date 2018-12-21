<template>
  <div class="problem">
    <JumpPage class="jump" v-if="pageNum" :problem="problem" :pageNum="pageNum"
    @changePage="tochangePage"></JumpPage>
    <div class="search">
      <form action="">
        <div class="select">
          <select name="kind">
            <option value="Pid">Pid</option>
            <option value="Title">Title</option>
            <option value="Tag">Tag</option>
          </select>
        </div>
        <div class="search-input">
          <input type="text" placeholder="Please input">
          <span class="iconfont">&#xe631;</span>
        </div>
        <button class="btn">Search</button>
      </form>
    </div>
    <div class="list-wrapper">
      <table cellspacing="10">
        <thead>
          <tr>
            <th class="pid">PID</th>
            <th class="title">Title</th>
            <th class="ratio">Ratio</th>
            <th class="tags">Tags</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in problem" :key="item.pid">
            <td class="pid">{{item.pid}}</td>
            <td is="router-link" to="/problem/751/descr" class="title">{{item.title}}</td>
            <td class="ratio">84.21% (<span class="ratio-num">368</span> / <span class="ratio-num">437</span>)</td>
            <td class="tags">
              <span class="tags-content">{{item.tags}}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import JumpPage from '@/components/JumpPage'
export default {
  name: 'Problem',
  components: {
    JumpPage
  },
  data () {
    return {
      problem: [],
      pageSize: 2,
      pageNum: 0,
      page: 1,
      num: 0
    }
  },
  methods: {
    getProblemList () {
      this.page = parseInt(this.$route.query.page) || 1
      this.$store.commit('toCurrentPage', this.page)
      let param = {
        page: this.page
      }
      axios.get('/problem', {
        params: param
      }).then((res) => {
        this.problem = res.data.res
        this.num = res.data.num
        this.pageNum = res.data.pageNum
      })
    },
    reload (currentpage) {
      this.$router.push({
        path: 'problem',
        query: {
          page: currentpage
        }
      })
      let param = {
        page: currentpage
      }
      axios.get('/problem', {
        params: param
      }).then((res) => {
        this.problem = res.data.res
        this.pageNum = res.data.pageNum
      })
    },
    tochangePage (item) {
      this.reload(item)
      this.getProblemList()
    }
  },
  created () {
    this.getProblemList()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .problem
    position: relative
    margin: 0 20px
    padding: 20px 20px
    .search
      position: absolute
      right: 100px
      top: 20px
      .select
        display: inline-block
        width: 100px;
        height: 30px;
        border-radius: 5px;
        box-shadow: 0 0 5px #ccc;
        position: relative;
        border: 1px solid rgba(7, 17, 27, .1)
        &:hover
          border: 1px solid $themeColor
        select
          border: none
          outline: none
          width: 100%
          height: 30px
          line-height: 30px
          padding-left: 10px
        .select:after
          position: absolute
          width: 14px
          height: 8px
          content: ""
          right: 20px
          top: 45%
          pointer-events: none
      .search-input
        position: relative
        display: inline-block
        width: 150px
        height: 32px
        vertical-align: top
        input
          margin: 0
          padding: 0 0 0 5px
          width: 150px
          height: 30px
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:hover
            border: 1px solid $themeColor
        .iconfont
          position: absolute
          left: 130px
          top: 8px
      .btn
        margin: 0 0 0 5px
        width: 80px
        height: 32px
        color: #fff
        background: $themeColor
        border-radius: 5px
        border: none
    .list-wrapper
      margin: 20px 0
      table
        width: 100%
        text-align: left
        font-size: 14px
        border-bottom: 1px solid rgba(7, 17, 27, .1)
        thead
          font-weight: 700
          th
            padding: 10px 0
          .pid, .tags
            width: 20%
          .title, .rario
            width: 30%
        tbody
          tr
            border-top: 1px solid rgba(7, 17, 27, .1)
            td
              padding: 10px 0
              .ratio-num
                color: $themeColor
                &:hover
                  cursor: pointer
              .tags-content
                padding: 0 3px
                border: 1px solid rgba(7, 17, 27, .1)
                border-radius: 5px
                background: #f7f7f7
                cursor: pointer
            .title
              color: $themeColor
              &:hover
                cursor: pointer
</style>
