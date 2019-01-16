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
  data () {
    return {
      date: new Date()
    }
  },
  computed: {
    getTime: function () {
      let myDate = this.date
      let seperator1 = '-'
      let seperator2 = ':'
      let month = myDate.getMonth() + 1
      let strDate = myDate.getDate()
      let strH = myDate.getHours()
      let strM = myDate.getMinutes()
      let strS = myDate.getSeconds()
      if (month >= 1 && month <= 9) {
        month = '0' + month
      }
      if (strDate >= 1 && strDate <= 9) {
        strDate = '0' + strDate
      }
      if (strH >= 0 && strH <= 9) {
        strH = '0' + strH
      }
      if (strM >= 0 && strM <= 9) {
        strM = '0' + strM
      }
      if (strS >= 0 && strS <= 9) {
        strS = '0' + strS
      }
      return myDate.getFullYear() + seperator1 + month +
      seperator1 + strDate + ' ' + strH + seperator2 +
      strM + seperator2 + strS
    }
  },
  mounted () {
    let _this = this
    this.timer = setInterval(() => {
      _this.date = new Date()
    }, 1000)
  },
  beforeDestroy () {
    if (this.timer) {
      clearInterval(this.timer)
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
        cursor: pointer
      a
        color: $themeColor
</style>
