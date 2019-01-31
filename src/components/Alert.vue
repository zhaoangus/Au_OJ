<template>
  <transition name="slide">
    <div class="alert" v-if="visible">
      <i v-if="type==='info'" class="icon iconfont" :class="{isInfo:type==='info'}">&#xe623;</i>
      <i v-if="type==='success'" class="icon iconfont" :class="{isSuccess:type==='success'}">&#xe613;</i>
      <i v-if="type==='error'" class="icon iconfont" :class="{isError:type==='error'}">&#xe62b;</i>
      <i v-if="type==='warning'" class="icon iconfont" :class="{isWarning:type==='warning'}">&#xe836;</i>
      <div class="message">{{message}}</div>
      <!-- <button v-show="closable" @click="close">close</button> -->
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    show: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'info'
    },
    message: {
      type: String
    }
  },
  data () {
    return {
      visible: false,
      isInfo: false,
      isSuccess: false,
      isError: false,
      isWarning: false
    }
  },
  methods: {
    getVisible () {
      this.visible = this.show
    },
    setTime () {
      setTimeout(() => {
        this.visible = false
      }, 2000)
    }
  },
  mounted () {
    this.getVisible()
    this.setTime()
  }
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .alert
    position: fixed
    top: 50px
    left: 50%
    transform: translate(-50%, -50%)
    padding: 10px 5px
    text-align: center
    border: 1px solid rgba(7, 17, 27, .1)
    border-radius: 5px
    z-index: 100
    background: #fff
    &.slide-enter-active, &.slide-leave-active
      transition: all .5s linear
    &.slide-enter, &.slide-leave-to
      top: 0
    .iconfont
      display: inline-block
      margin: 0 5px
      vertical-align: middle
      color: $themeColor
    .isInfo
      color: $themeColor
    .isSuccess
      color: green
    .isError
      color: red
    .isWarning
      color: yellow
    .message
      display: inline-block
      margin-right: 5px
</style>
