<template>
  <div class="ranklist">
    <div class="wrapper">
      <div class="search-wrapper">
        <label for="">Group</label>
        <select name="" id="">
          <option value="">ALL</option>
          <option value="">测试用户组</option>
        </select>
        <button>Search</button>
      </div>
      <div class="table-wrapper">
        <table>
          <thead>
            <tr align="left">
              <th>Rank</th>
              <th>Username</th>
              <th>Nick</th>
              <th>Motto</th>
              <th>Solve</th>
              <th>Submit</th>
              <th>Ratio</th>
            </tr>
          </thead>
          <tbody>
            <tr align="left" v-for="(item, index) in ranklist" :key="item.uid">
              <td>{{index+1}}</td>
              <td><router-link :to="{name:'Info',params:{uid:item.uid}}" id="username">{{item.name}}</router-link></td>
              <td>{{item.nick}}</td>
              <td>{{item.motto}}</td>
              <td>{{item.solve}}</td>
              <td>{{item.submit}}</td>
              <td>{{item.submit!==0?(item.solve/item.submit*100).toFixed(2)+'%':0}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <JumpPage class="jump" v-if="pageNum" :ranklist="ranklist" :pageNum="pageNum"
      @changePage="tochangePage"></JumpPage>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import JumpPage from '@/components/JumpPage'
export default {
  name: 'Ranklist',
  components: {
    JumpPage
  },
  data () {
    return {
      ranklist: [],
      pageSize: 10,
      pageNum: 0,
      page: 1,
      num: 0
    }
  },
  methods: {
    getRankList () {
      this.page = parseInt(this.$route.query.page) || 1
      this.$store.commit('toCurrentRanklistPage', this.page)
      let param = {
        page: this.page
      }
      axios.get('/ranklist', {
        params: param
      }).then((res) => {
        this.ranklist = res.data.res
        this.num = res.data.num
        this.pageNum = res.data.pageNum
        console.log(this.ranklist)
      })
    },
    reload (currentpage) {
      this.$router.push({
        path: 'ranklist',
        query: {
          page: currentpage
        }
      })
      let param = {
        page: currentpage
      }
      this.$store.commit('toCurrentRanklistPage', this.page)
      axios.get('/ranklist', {
        params: param
      }).then((res) => {
        this.ranklist = res.data.res
        this.pageNum = res.data.pageNum
      })
    },
    tochangePage (item) {
      this.reload(item)
    }
  },
  mounted () {
    this.getRankList()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .wrapper
    position: relative
    margin: 20px 40px
    padding: 20px 40px
    font-size: 14px
    color: $textColor
    .search-wrapper
      position: absolute
      right: 20px
      top: 0
      label
        display: inline-block
        margin-right: 10px
      select
        width: 150px
        height: 30px
        outline: none
        border: 1px solid rgba(7, 17, 27, .1)
        border-radius: 5px
        &:hover
          border: 1px solid $themeColor
          cursor: pointer
      button
        width: 70px
        height: 30px
        background: $themeColor
        color: #fff
        border: 1px solid rgba(7, 17, 27, .1)
        border-radius: 5px
        &:hover
          opacity: .8
          cursor: pointer
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
            #username
              color: $themeColor
              &:hover
                cursor: pointer
</style>
