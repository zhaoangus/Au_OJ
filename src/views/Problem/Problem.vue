<template>
  <div class="problem">
    <JumpPage class="jump"></JumpPage>
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
          <tr>
            <td class="pid">751</td>
            <td is="router-link" to="/problem/751/descr" class="title">A + B</td>
            <td class="ratio">84.21% (<span class="ratio-num">368</span> / <span class="ratio-num">437</span>)</td>
            <td class="tags">
              <span class="tags-content">level1</span>
            </td>
          </tr>
          <tr>
            <td class="pid">751</td>
            <td class="title">A + B</td>
            <td class="ratio">84.21% (<span class="ratio-num">368</span> / <span class="ratio-num">437</span>)</td>
            <td class="tags">
              <span class="tags-content">level1</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import JumpPage from '@/components/JumpPage'
export default {
  name: 'Problem',
  components: {
    JumpPage
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
