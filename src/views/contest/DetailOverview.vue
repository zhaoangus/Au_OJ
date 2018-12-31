<template>
  <div class="overview">
    <div class="title-wrapper">
      <div class="title">{{currentContest.title}}</div>
      <div class="start">Start Time:  {{start}}</div>
      <div class="end">End Time:  {{end}}</div>
    </div>
    <div class="list-wrapper">
      <table>
        <thead>
          <tr>
            <th width="5%">#</th>
            <th width="5%">ID</th>
            <th width="60%">Title</th>
            <th width="30%">Ratio</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in problemList" :key="item.id">
            <td></td>
            <td>{{item.id}}</td>
            <td is="router-link" :to="{name:'DetailProblem',params:{id:item.id}}" class="td-title"><span class="td-text">{{item.title}}</span></td>
            <td>16.00%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getDate } from '@/util/getDate'
export default {
  name: 'DetailOverview',
  data () {
    return {
      currentContest: {},
      problemList: [],
      start: '',
      end: ''
    }
  },
  methods: {
    getOverview () {
      let id = (this.$route.params.cid)
      axios.get(`/contest/${id}`).then((res) => {
        this.currentContest = res.data.res
        this.problemList = res.data.res.problemList
        let startTime = parseInt(this.currentContest.start)
        let endTime = parseInt(this.currentContest.end)
        this.start = getDate(startTime)
        this.end = getDate(endTime)
      })
    }
  },
  created () {
    this.getOverview()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .overview
    .title-wrapper
      margin: 20px 0 10px 0
      text-align: center
      .title, .start, .end
        margin: 20px 0
        font-weight: 700
      .title
        font-size: 20px
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
        tbody
          tr
            border-top: 1px solid rgba(7, 17, 27, .1)
            td
              padding: 10px 0
            .td-title
              .td-text
                color: $themeColor
                &:hover
                  cursor: pointer
</style>
