<template>
  <div class="alert" v-show="visible">
    <i v-if="type==='info'" class="icon iconfont">&#xe623;</i>
    <i v-if="type==='success'" class="icon iconfont">&#xe613;</i>
    <i v-if="type==='error'" class="icon iconfont">&#xe62b;</i>
    <i v-if="type==='warning'" class="icon iconfont">&#xe836;</i>
    <div class="message">message</div>
    <button v-show="closable" @click="close">close</button>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    closable: {
      type: Boolean,
      default: true
    },
    show: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'info'
    }
  },
  data () {
    return {
      visible: this.show
    }
  },
  methods: {
    close () {
      this.visible = false
    }
  },
  mounted () {
    setTimeout(() => {
      this.visible = false
    }, 3000)
  }
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .alert
    position: fixed
    top: 50px
    left: 0
    right: 0
    width: 100px
    height: 50px
    margin: 0 auto
    border: 1px solid $themeColor
    z-index: 100
    .iconfont
      display: inline-block
      color: $themeColor
</style>
