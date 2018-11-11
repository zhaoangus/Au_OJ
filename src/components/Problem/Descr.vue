<template>
  <div class="desc">
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
    <div class="content-wrapper">
      <div class="title-wrapper">
        <div class="title">751: A + B</div>
        <div class="time-limit">
          Time Limit: 1000MS  Memory Limit: 32768KB
        </div>
      </div>
      <div class="desc-wrapper">
        <div class="title">Description</div>
        <div class="content">输入两个数字，输出这两个数字的和</div>
      </div>
      <div class="input-wrapper">
        <div class="title">Input</div>
        <div class="content">输入有多组样例，每行有2个数字</div>
      </div>
      <div class="output-wrapper">
        <div class="title">Output</div>
        <div class="content">对于每个样例，输出2个数字的和</div>
      </div>
      <div class="samin-wrapper">
        <div class="title">Sample Input <span title="copy" class="iconfont">&#xe800;</span></div>
        <div class="content"><code>1 2</code></div>
      </div>
      <div class="samout-wrapper">
        <div class="title">Sample Output <span title="copy" class="iconfont">&#xe800;</span></div>
        <div class="content"><code>3</code></div>
      </div>
      <div class="submit">
        <button>
          <span class="iconfont">&#xe640;</span>
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Descr'
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
    .nav-wrapper
      margin: 30px 40px
      border-bottom: 1px solid rgba(7, 17, 27, .1)
      .nav
        .descr
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          border-bottom: 1px solid $themeColor
          .link-descr
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
        .stat
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          .link-stat
            color: #000
            &:hover
              color: $themeColor
    .content-wrapper
      margin: 10px 40px
      color: $textColor
      .title-wrapper
        text-align: center
        .title
          margin: 20px 0
          color: #9799ca
          font-size: 26px
          font-weight: 700
        .time-limit
          margin: 10px 0
          font-size: 12px
          font-weight: 700
      .desc-wrapper, .input-wrapper, .output-wrapper, .samin-wrapper, .samout-wrapper
        .title
          margin: 20px 0
          padding: 20px 0
          font-size: 20px
          font-weight: 700
          color: #9799ca
          border-bottom: 1px solid rgba(7, 17, 27, .1)
        .content
          margin: 10px 0
          font-size: 14px
          color: #495060
      .samin-wrapper, .samout-wrapper
        .title
          .iconfont
            &:hover
              cursor: pointer
        .content
          padding: 10px 10px
          background: #eceff1
      .submit
        button
          margin: 10px 0
          padding: 5px 10px
          text-align: center
          font-size: 12px
          color: #495060
          border: 1px solid rgba(7, 17, 27, .3)
          border-radius: 10px
          &:hover
            color: #e040fb
            border: 1px solid #e040fb
          .iconfont
            display: inline-block
            font-size: 12px
</style>
