<template>
  <div class="contest-detail">
    <div class="wrapper">
      <div class="running">
        <div class="text">
          <span class="begin">Begin: {{start}}</span>
          <span class="status">Running</span>
          <span class="end">End: {{end}}</span>
        </div>
        <div class="bar-wrapper">
          <div class="bar">
            <div class="reach" :style="{width:progress+'%'}">
            </div>
          </div>
          <span class="bar-text">{{progress}}%</span>
        </div>
      </div>
      <div class="router">
        <router-link class="overview" :to="{name:'DetailOverview'}">Overview</router-link>
        <router-link class="problem" :to="{name:'DetailProblem', params:{id:1}}">Problem</router-link>
        <router-link class="submit" :to="{name:'DetailSubmit', params:{id:1}}">Submit</router-link>
        <router-link class="status" :to="{name:'DetailStatus'}">Status</router-link>
        <router-link class="ranklist" :to="{name:'DetailRanklist'}">Ranklist</router-link>
      </div>
      <router-view />
      <div class="title"></div>
      <div class="table"></div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { getDate } from '@/util/getDate'
export default {
  name: 'ContestDetail',
  data () {
    return {
      start: '',
      end: '',
      startTime: 0,
      endTime: 0,
      progress: 0.0
    }
  },
  methods: {
    getTime () {
      let id = (this.$route.params.cid)
      axios.get(`/contest/${id}`).then((res) => {
        this.startTime = parseInt(res.data.res.start)
        this.endTime = parseInt(res.data.res.end)
        this.start = getDate(this.startTime)
        this.end = getDate(this.endTime)
      })
    },
    changeBar () {
      // let duration = Date.now() + 3000000 - this.startTime
      // let now = this.endTime - Date.now()
      this.progress = 90.0
    }
  },
  created () {
    this.getTime()
    this.changeBar()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .contest-detail
    background: #f3f5f7
    .wrapper
      margin: 0 20px
      padding: 10px 50px
      font-size: 14px
      color: $textColor
      background: #fff
      .running
        margin: 20px 0
        text-align: center
        font-size: 16px
        border: 1px solid rgba(7, 17, 27, .1)
        .text
          display: flex
          justify-content: space-between
          margin: 20px 40px
        .bar-wrapper
          display: flex
          flex-wrap: nowrap
          margin: 20px 0
          .bar
            flex-grow: 8
            width: 95%
            height: 16px
            border-radius: 16px
            background: #f3f5f7
            text-align: left
            // vertical-align: middle
            .reach
              display: inline-block
              height: 16px
              line-height: 16px
              background: $themeColor
              border-radius: 16px
          .bar-text
            flex-grow: 1
            margin-right: 20px
            color: $themeColor
      .router
        margin: 10px 0
        padding: 8px 0
        border-bottom: 1px solid rgba(7, 17, 27, .1)
        .overview, .problem, .submit, .status, .ranklist
          padding: 0 15px 5px 15px
          color: $textColor
          &:hover
            cursor: pointer
            color: $themeColor
        .router-link-exact-active
          border-bottom: 1px solid $themeColor
</style>
