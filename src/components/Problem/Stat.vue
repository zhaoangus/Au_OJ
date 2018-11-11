<template>
  <div class="stat">
    <div class="nav-wrapper">
      <div class="nav">
        <div class="descr">
          <router-link class="link-descr" to="/problem/751/descr">Description</router-link>
        </div>
        <div class="sub">
          <router-link class="link-sub" to="/problem/751/sub">Submit</router-link>
        </div>
        <div class="stat">
          <router-link class="link-stat" to="/problem/751/stat">Statistics</router-link>
        </div>
      </div>
    </div>
    stat
  </div>
</template>

<script>
export default {
  name: 'Stat'
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
    .nav-wrapper
      margin: 30px 40px
      border-bottom: 1px solid rgba(7, 17, 27, .1)
      .nav
        .stat
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          border-bottom: 1px solid $themeColor
          .link-stat
            color: $themeColor
        .sub
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          .link-sub
            color: #000
            &:hover
              color: $themeColor
        .descr
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          .link-descr
            color: #000
            &:hover
              color: $themeColor
</style>
