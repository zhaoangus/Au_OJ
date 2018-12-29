<template>
  <div class="overview">
    <div class="title-wrapper">
      <div class="title">2018ACM第九周擂台赛赛前训练(动态规划进阶1)</div>
      <div class="start">Start Time:  2018-12-12 22:42:20</div>
      <div class="end">End Time:  2018-12-31 23:59:59</div>
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
          <tr>
            <td></td>
            <td>1</td>
            <td class="td-title"><span class="td-text">母牛的故事</span></td>
            <td>16.00%</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailOverview'
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
