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
            <tr align="left">
              <td>1</td>
              <td><router-link to="/user/18H" id="username">18H</router-link></td>
              <td>1701400204 吕佳霖</td>
              <td>爱生活，爱化学；亲近自然，返璞归真。</td>
              <td>273</td>
              <td>283</td>
              <td>96.47%</td>
            </tr>
            <tr align="left">
              <td>1</td>
              <td><router-link to="/user/18H" id="username">18H</router-link></td>
              <td>1701400204 吕佳霖</td>
              <td>爱生活，爱化学；亲近自然，返璞归真。</td>
              <td>273</td>
              <td>283</td>
              <td>96.47%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <JumpPage></JumpPage>
    </div>
  </div>
</template>

<script>
import JumpPage from './JumpPage'
export default {
  name: 'Ranklist',
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
