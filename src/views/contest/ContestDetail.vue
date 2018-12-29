<template>
  <div class="contest-detail">
    <div class="wrapper">
      <div class="running">
        <div class="text">
          <span class="begin">Begin: 2018-12-13 00:00:00</span>
          <span class="status">Running</span>
          <span class="end">End: 2018-12-31 23:59:59</span>
        </div>
        <div class="bar-wrapper">
          <div class="bar">
            <span class="reach"></span>
            <span class="still"></span>
          </div>
          <span class="bar-text">83.2%</span>
        </div>
      </div>
      <div class="router">
        <router-link class="overview" :to="{name:'DetailOverview'}">Overview</router-link>
        <router-link class="problem" :to="{name:'DetailProblem', params:{id:11}}">Problem</router-link>
        <router-link class="submit" :to="{name:'DetailSubmit', params:{id:11}}">Submit</router-link>
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
export default {
  name: 'ContestDetail'
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
            vertical-align: middle
            .reach
              display: inline-block
              width: 70%
              height: 16px
              border-radius: 16px
              background: $themeColor
            .still
              display: inline-block
              width: 25%
              height: 16px
              border-radius: 16px
              background: #f3f5f7
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
</style>
