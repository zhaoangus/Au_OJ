<template>
  <div class="header">
    <div class="items">
      <div class="item-wrapper">
        <router-link class="home" to="/">
          <span class="iconfont icon-home">&#xe621;</span>
          Home
        </router-link>
      </div>
      <div class="item-wrapper">
        <router-link class="problem" to="/problem">
          <span class="iconfont icon-problem">&#xe62a;</span>
          Problem
        </router-link>
      </div>
      <div class="item-wrapper">
        <span class="iconfont icon-diccuss">&#xe620;</span>
        <span class="diccuss">Diccuss</span>
      </div>
      <div class="item-wrapper">
        <span class="iconfont icon-status">&#xe63b;</span>
        <span class="status">Status</span>
      </div>
      <div class="item-wrapper">
        <span class="iconfont icon-ranklist">&#xe721;</span>
        <span class="ranklist">Ranklist</span>
      </div>
      <div class="item-wrapper">
        <span class="iconfont icon-contest">&#xe62d;</span>
        <span class="contest">Contest</span>
      </div>
      <div class="item-wrapper">
        <span class="iconfont icon-faq">&#xe605;</span>
        <span class="faq">FAQ</span>
      </div>
    </div>
    <div class="login-wrapper">
      Login/Register
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .header
    display: flex
    justify-content: space-between
    white-space: nowrap
    height: 62px
    font-size: 14px
    background: #fff
    &:first-child
      margin: 0 0 0 30px
    .items
      display: inline-block
      min-width: 900px
      .item-wrapper
        display: inline-block
        height: 60px
        line-height: 60px
        padding: 0 20px
        text-align: center
        &:hover
          color: $themeColor
          cursor: pointer
          border-bottom: 2px solid $themeColor
    .login-wrapper
      display: inline-block
      margin-right: 5%
      margin-top: 14px
      height: 20px
      line-height: 20px
      padding: 5px 10px
      border: 1px solid $themeColor
      border-radius: 10px
      &:hover
        color: $themeColor
        cursor: pointer
</style>
