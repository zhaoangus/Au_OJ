<template>
  <div class="desc">
    <div class="nav-wrapper">
      <div class="nav">
        <div class="descr">
          <router-link class="link-descr" :to="{name:'Descr',params:{pid}}">Description</router-link>
        </div>
        <div class="sub">
          <router-link class="link-sub" :to="{name:'Sub',params:{pid}}">Submit</router-link>
        </div>
        <div class="stat">
          <router-link class="link-stat" :to="{name:'Stat',params:{pid}}">Statistics</router-link>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="title-wrapper">
        <div class="title">{{currentProblem.pid}}: {{currentProblem.title}}</div>
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
        <div class="content" v-for="(item,index) in inputContent" :key="index"><code>{{item}}</code></div>
      </div>
      <div class="samout-wrapper">
        <div class="title">Sample Output <span title="copy" class="iconfont">&#xe800;</span></div>
        <div class="content" v-for="(item,index) in outputContent" :key="index"><code>{{item}}</code></div>
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
  name: 'Descr',
  data () {
    return {
      pid: 0,
      pageProblem: [],
      currentProblem: {},
      inputContent: [],
      outputContent: []
    }
  },
  computed: {
    problem () {
      return this.$store.state.problem.content
    }
  },
  methods: {
    getProblemDescr () {
      let id = parseInt(this.$route.params.pid)
      axios.get(`/problem/${id}/descr`).then((res) => {
        this.currentProblem = res.data.res
        this.formatIn()
        this.formatOut()
        this.$store.commit('currentProblem', this.currentProblem)
      })
    },
    formatIn () {
      let input = this.currentProblem.in
      let index = 0
      for (let i = 0; i < input.length; i++) {
        if (input[i] === '\n') {
          this.inputContent.push(input.slice(index, i))
          index = i + 1
        } else if (i === input.length - 1) {
          this.inputContent.push(input.slice(index, i + 1))
        }
      }
    },
    formatOut () {
      let output = this.currentProblem.out
      let index = 0
      for (let i = 0; i < output.length; i++) {
        if (output[i] === '\n') {
          this.outputContent.push(output.slice(index, i))
          index = i + 1
        } else if (i === output.length - 1) {
          this.outputContent.push(output.slice(index, i + 1))
        }
      }
    }
  },
  mounted () {
    this.getProblemDescr()
    this.pid = this.$route.params.pid
  }
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
