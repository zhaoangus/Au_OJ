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
            <tr align="left">
              <td>120</td>
              <td><router-link id="title" to="/">新生练习题汇总一（基本输入输出）</router-link></td>
              <td id="status">Runing</td>
              <td>2018-11-12 00:00:00</td>
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
      <JumpPage></JumpPage>
    </div>
  </div>
</template>

<script>
import JumpPage from '@/components/JumpPage'
export default {
  name: 'Contest',
  components: {
    JumpPage
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
