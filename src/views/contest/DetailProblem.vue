<template>
  <div class="problem">
    <div class="order-wrapper">
      <div class="order" :class="{active: item.id===pid}" @click="toProblem" v-for="item in problemList" :key="item.id">{{item.id}}</div>
    </div>
    <div class="content-wrapper">
      <div class="title-wrapper">
        <div class="title">{{currentProblem.id}}: {{currentProblem.title}}</div>
        <div class="time-limit">
          Time Limit: {{currentProblem.time}}MS  Memory Limit: {{currentProblem.memory}}KB
        </div>
      </div>
      <div class="desc-wrapper">
        <div class="title">Description</div>
        <div class="content">{{currentProblem.description}}</div>
      </div>
      <div class="input-wrapper">
        <div class="title">Input</div>
        <div class="content">{{currentProblem.input}}</div>
      </div>
      <div class="output-wrapper">
        <div class="title">Output</div>
        <div class="content">{{currentProblem.output}}</div>
      </div>
      <div class="samin-wrapper">
        <div class="title">Sample Input <span title="copy" class="iconfont">&#xe800;</span></div>
        <div class="content"><code>{{currentProblem.in}}</code></div>
      </div>
      <div class="samout-wrapper">
        <div class="title">Sample Output <span title="copy" class="iconfont">&#xe800;</span></div>
        <div class="content"><code>{{currentProblem.out}}</code></div>
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
import axios from 'axios'
export default {
  name: 'DetailProblem',
  data () {
    return {
      currentProblem: {},
      problemList: [],
      cid: 0,
      pid: 0
    }
  },
  methods: {
    getProblemDetail () {
      this.cid = parseInt(this.$route.params.cid)
      this.pid = parseInt(this.$route.params.id)
      axios.get(`/contest/${this.cid}/problem/${this.pid}`).then((res) => {
        this.problemList = res.data.res.problemList
        this.problemList.forEach((item) => {
          if (parseInt(item.id) === this.pid) {
            this.currentProblem = item
          }
        })
      })
    },
    toProblem (e) {
      let pid = parseInt(e.target.innerHTML)
      this.$router.push({name: 'DetailProblem', params: {cid: this.cid, id: pid}})
      this.getProblemDetail()
    }
  },
  created () {
    this.getProblemDetail()
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
        margin: 0 5px
        width: 20px
        height: 20px
        padding: 5px
        text-align: center
        line-height: 20px
        border: 1px solid rgba(7, 17, 27, .1)
        border-radius: 5px
        color: $textColor
        &:hover
          cursor: pointer
      .active
        background: $themeColor
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
