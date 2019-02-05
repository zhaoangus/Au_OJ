<template>
  <div class="manage">
    <div class="wrapper">
      <div class="router">
        <router-link class="user" :to="{name:'UserEdit'}">userEdit</router-link>
        <router-link class="group" :to="{name:'GroupEdit'}">groupEdit</router-link>
        <router-link class="admin" :to="{name:'AdminEdit'}">adminEdit</router-link>
        <router-link class="tag" :to="{name:'TagEdit'}">tagEdit</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Manage'
}
</script>

<style lang="stylus">
  @import '../../common/css/base.styl'
  .manage
    background: #f3f5f7
    .wrapper
      margin: 0 20px
      padding: 10px 50px
      font-size: 14px
      color: $textColor
      background: #fff
      .router
        margin: 10px 0
        padding: 8px 0
        border-bottom: 1px solid rgba(7, 17, 27, .1)
        .user, .group, .admin, .tag
          padding: 0 20px 5px 20px
          color: $textColor
          &:hover
            cursor: pointer
            color: $themeColor
        .router-link-exact-active
          border-bottom: 1px solid $themeColor
</style>
