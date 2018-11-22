<template>
  <div class="status">
    <div class="wrapper">
      <div class="select-wrapper">
        <div class="user">
          <label for="">User</label>
          <input type="text" placeholder="username">
        </div>
        <div class="pid">
          <label for="">Pid</label>
          <input type="text" placeholder="pid">
        </div>
        <div class="judge">
          <label for="">Judge</label>
          <select name="" id="">
            <option value="">ALL</option>
            <option value="">Pending</option>
            <option value="">Running & Judge</option>
            <option value="">Compile Error</option>
            <option value="">Accepted</option>
            <option value="">Runtime Error</option>
          </select>
        </div>
        <div class="lang">
          <label for="">Language</label>
          <select name="" id="">
            <option value="">ALL</option>
            <option value="">C</option>
            <option value="">C++</option>
            <option value="">Java</option>
          </select>
        </div>
        <div class="btn-search">
          <button>
            <span class="iconfont">&#xe631;</span>
            Search
          </button>
        </div>
      </div>
      <JumpPage></JumpPage>
      <div class="table-wrapper">
        <table cellspacing="10">
          <thead>
            <tr align="left">
              <th>SID</th>
              <th>PID</th>
              <th>Username</th>
              <th>Judge</th>
              <th>Time/ms</th>
              <th>Memory/kb</th>
              <th>Language</th>
              <th>Submit Time</th>
            </tr>
          </thead>
          <tbody>
            <tr align="left">
              <td>39995</td>
              <td><router-link id="pid" to="/problem/751/descr">751</router-link></td>
              <td><router-link id="username" to="/user/18H">18H034160339</router-link></td>
              <td :class="status">Accepted</td>
              <td>1</td>
              <td>1728</td>
              <td>C++</td>
              <td>2018-11-22 18:35:36</td>
            </tr>
            <tr align="left">
              <td>39995</td>
              <td><router-link id="pid" to="/problem/751/descr">751</router-link></td>
              <td><router-link id="username" to="/user/18H">18H034160339</router-link></td>
              <td :class="status">Accepted</td>
              <td>1</td>
              <td>1728</td>
              <td>C++</td>
              <td>2018-11-22 18:35:36</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import JumpPage from '@/components/JumpPage'
export default {
  name: 'Status',
  components: {
    JumpPage
  },
  data () {
    return {
      status: {
        isAccepted: true,
        isPending: false,
        isRunJudge: false,
        isCompileErr: false,
        isRunErr: false
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .wrapper
    margin: 20px 40px
    font-size: 14px
    color: $textColor
    .select-wrapper
      margin: 0 0 20px 0
      text-align: center
      .user, .pid, .judge, .lang, .btn-search
        display: inline-block
      .user, .pid
        margin: 0 30px
        label
          diaplay: inline-block
          margin-right: 10px
        input
          padding-left: 5px
          width: 150px
          height: 30px
          outline: none
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:focus, &:hover
            border: 1px solid $themeColor
      .judge, .lang
        margin: 0 20px
        label
          display: inline-block
          margin-right: 10px
        select
          width: 150px
          height: 30px
          outline: none
          border: 1px solid rgba(7, 17, 27, .1)
          &:hover
            cursor: pointer
            border: 1px solid $themeColor
      .lang
        select
          width: 80px
      .btn-search
        .iconfont
          font-size: 12px
        button
          height: 30px
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          background: $themeColor
          color: #fff
          &:hover
            cursor: pointer
            opacity: .8
    .table-wrapper
      margin: 20px 0
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
            #pid, #username
              color: $themeColor
            .isAccepted
              color: red
            .isRunJudge, .pending
              color: #000
            .isCompileErr
              color: purple
            .isRunErr
              color: green
</style>
