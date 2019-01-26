<template>
  <div class="adminedit">
    <h1>增删管理员</h1>
    <div class="row">
      <span class="label-title">Username</span>
      <span class="input-title">
        <input type="text" v-model="admin">
      </span>
      <span class="add">
        <button @click="add">Add</button>
      </span>
    </div>
    <table>
      <thead>
        <tr align="left">
          <th>Username</th>
          <th>Nick</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        <tr align="left" v-for="item in AdminList" :key="item.uid">
          <td>{{item.name}}</td>
          <td>{{item.nick}}</td>
          <td>
            <button v-if="item.name!=='admin1'" @click="remove(item.uid)">Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'AdminEdit',
  data () {
    return {
      admin: '',
      adminList: []
    }
  },
  computed: {
    AdminList () {
      return this.adminList
    }
  },
  methods: {
    add () {
      axios.post('/admin/add', {
        username: this.admin
      }).then(res => {
        if (res.data.code === 0) {
          this.getAdminList()
        }
      })
    },
    remove (uid) {
      axios.post('/admin/remove', {
        uid
      }).then(res => {
        if (res.data.code === 0) {
          this.getAdminList()
        }
      })
    },
    getAdminList () {
      axios.get('/admin/list').then(res => {
        if (res.data.code === 0) {
          this.adminList = res.data.res
          console.log(res)
        }
      })
    }
  },
  mounted () {
    this.getAdminList()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .adminedit
    color: $textColor
    font-size: 14px
    h1
      margin: 20px 0
      font-size: 24px
    .row
      margin: 10px 0
      padding: 5px 0
      display: flex
      border-bottom: 1px solid rgba(7, 17, 27, .1)
      .label-title
        margin: 5px 15px 5px 0
        line-height: 24px
      .input-title
        margin: 5px 15px 5px 0
        line-height: 20px
        input
          width: 150px
          height: 20px
          outline: none
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:focus, &:hover
            border: 1px solid $themeColor
      .add
        margin: 5px 15px 5px 0
        button
          height: 24px
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 3px
          background: $themeColor
          color: #fff
          &:hover
            cursor: pointer
            opacity: .8
    table
      margin: 20px 0
      width: 100%
      font-size: 14px
      color: $textColor
      thead
        font-weight: 700
        border-bottom: 1px solid rgba(7, 17, 27, .1)
        th
          padding: 0 0 15px 0
      tbody
        td
          padding: 15px 0 15px 0
          border-bottom: 1px solid rgba(7, 17, 27, .1)
          button
            height: 24px
            border: 1px solid rgba(7, 17, 27, .1)
            border-radius: 3px
            background: $themeColor
            color: #fff
            &:hover
              cursor: pointer
              opacity: .8
</style>
