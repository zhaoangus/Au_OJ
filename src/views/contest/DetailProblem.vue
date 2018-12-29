<template>
  <div class="problem">
    <div class="order-wrapper">
      <div class="order">1</div>
      <div class="order">2</div>
    </div>
    <div class="content-wrapper">
      <div class="title-wrapper">
        <div class="title">1: 母牛的故事</div>
        <div class="time-limit">
          Time Limit: 2000MS  Memory Limit: 64000KB
        </div>
      </div>
      <div class="desc-wrapper">
        <div class="title">Description</div>
        <div class="content">有一头母牛，它每年年初生一头小母牛。每头小母牛从第四个年头开始，每年年初也生一头小母牛。请编程实现在第n年的时候，共有多少头母牛(结果对10000取余)？</div>
      </div>
      <div class="input-wrapper">
        <div class="title">Input</div>
        <div class="content">输入数据由多个测试实例组成，每个测试实例占一行，包括一个整数n{{range}}，n的含义如题目中描述。 n=0表示输入数据的结束，不做处理。</div>
      </div>
      <div class="output-wrapper">
        <div class="title">Output</div>
        <div class="content">对于每个测试实例，输出在第n年的时候母牛的数量取模10000。 每个输出占一行。</div>
      </div>
      <!-- <div class="samin-wrapper">
        <div class="title">Sample Input <span title="copy" class="iconfont">&#xe800;</span></div>
        <div class="content" v-for="(item,index) in inputContent" :key="index"><code>{{item}}</code></div>
      </div>
      <div class="samout-wrapper">
        <div class="title">Sample Output <span title="copy" class="iconfont">&#xe800;</span></div>
        <div class="content" v-for="(item,index) in outputContent" :key="index"><code>{{item}}</code></div>
      </div> -->
      <div class="samin-wrapper">
        <div class="title">Sample Input <span title="copy" class="iconfont">&#xe800;</span></div>
        <div class="content"><code>1 2 3</code></div>
      </div>
      <div class="samout-wrapper">
        <div class="title">Sample Output <span title="copy" class="iconfont">&#xe800;</span></div>
        <div class="content"><code>1 2 3</code></div>
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
  name: 'DetailProblem',
  data () {
    return {
      range: '(1 <= n <= 2000000000)'
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .problem
    .order-wrapper
      marhin: 10px 0
      .order
        display: inline-block
        margin: 0 2px
        width: 20px
        height: 20px
        padding: 5px
        text-align: center
        line-height: 20px
        background: $themeColor
        border: 1px solid $themeColor
        border-radius: 5px
        color: #fff
    .content-wrapper
      margin: 10px 0
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
      .desc-wrapper, .input-wrapper, .output-wrapper
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
          margin: 20px 0
          padding: 20px 0
          font-size: 20px
          font-weight: 700
          color: #9799ca
          border-bottom: 1px solid rgba(7, 17, 27, .1)
          .iconfont
            &:hover
              cursor: pointer
        .content
          padding: 5px 10px
          font-size: 14px
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
          outline: none
          &:hover
            color: #e040fb
            border: 1px solid #e040fb
          .iconfont
            display: inline-block
            font-size: 12px
</style>
