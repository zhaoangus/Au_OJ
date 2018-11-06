<template>
  <div class="jumppage">
    <div class="pages">
      <span class="front iconfont">&#xe600;</span>
      <span class="page1">1</span>
      <span class="page2">2</span>
      <span class="back iconfont">&#xe601;</span>
    </div>
    跳至
    <input type="text" class="input" placeholder="1">
    页
  </div>
</template>

<script>
export default {
  name: 'JumpPage'
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .jumppage
    font-size: 14px
    height: 32px
    .pages
      display: inline-block
      .front, .back, .page1, .page2
        display: inline-block
        vertical-align: middle
        margin: 0 2px
        width: 30px
        height: 30px
        line-height: 30px
        text-align: center
        border: 1px solid rgba(7, 17, 27, .1)
        border-radius: 5px
        &:hover
          cursor: pointer
          border: 1px solid $themeColor
      .front
        &:hover
          cursor: not-allowed
          border: 1px solid rgba(7, 17, 27, .1)
    .input
      display: inline-block
      appearance: none
      padding: 0 0 0 5px
      width: 50px
      height: 30px
      border: 1px solid rgba(7, 17, 27, .1)
      border-radius: 4px
      &:hover
        border: 1px solid $themeColor
</style>
