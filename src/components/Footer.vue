<template>
  <div class="footer">
    <div class="server-time">Server Time: {{getTime}}</div>
    <div class="author-info">
      <span class="strong">Au OJ</span>
      by
      <div class="link">
        <a href="https://github.com/zhaoangus" class="github">Angus</a>
        <span class="iconfont">&#xe602;</span>.
      </div>
      The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    getTime: function () {
      let myDate = new Date()
      let seperator1 = '-'
      let seperator2 = ':'
      let month = myDate.getMonth() + 1
      let strDate = myDate.getDate()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 1 && strDate <= 9) {
        strDate = '0' + strDate
      }
      return myDate.getFullYear() + seperator1 + month +
      seperator1 + strDate + ' ' + myDate.getHours() + seperator2 +
      myDate.getMinutes() + seperator2 + myDate.getSeconds()
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .footer
    width: 100%
    height: 60px
    line-height: 30px
    padding: 20px 0
    text-align: center
    font-size: 14px
    color: $textColor
    background: #f3f5f7
    .author-info
      .strong
        font-weight: 700
      .link
        display: inline-block
        color: $themeColor
      a
        color: $themeColor
</style>
