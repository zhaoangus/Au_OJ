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
    <div @click=triggerLogin class="login-nav">
      Login/Register
    </div>
    <transition name="fade">
      <div v-show="showLogin" class="login" @click=loginfade>
        <div class="login-wrapper">
          <div class="login-label">
            <div @click="tologin" class="login-title" :class="{active: loginActive}">Login</div>
            <div @click="toregis" class="register-title" :class="{active: regisActive}">Register</div>
          </div>
          <div v-if="showLoginContent" class="login-content">
            <form action="" id="login">
              <div class="input-wrapper">
                <label for="">Username</label>
                <input type="text">
                <div id="name-input-err"></div>
              </div>
              <div class="input-wrapper">
                <label for="">Password</label>
                <input type="password">
                <div id="password-input-err"></div>
              </div>
              <button class="button-control" type="submit">Submit</button>
            </form>
          </div>
          <div v-else class="regis-content">
            regis
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      showLogin: false,
      loginActive: true,
      regisActive: false,
      showLoginContent: true
    }
  },
  methods: {
    triggerLogin () {
      this.showLogin = true
    },
    loginfade () {
      if (event.currentTarget === event.target) {
        this.showLogin = false
      }
    },
    tologin () {
      this.loginActive = true
      this.showLoginContent = true
      this.regisActive = false
    },
    toregis () {
      this.loginActive = false
      this.showLoginContent = false
      this.regisActive = true
    }
  }
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
    .login-nav
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
    .login
      position: fixed
      z-index: 2
      top: 0
      left: 0
      width: 100%
      height: 100%
      overflow: auto
      color: $textColor
      background: rgba(7, 17, 27, 0.4)
      background-filter: blur(10px)
      transition: opacity .5s
      &.fade-enter, &.fade-leave-to
        opacity: 0
      .login-wrapper
        position: absolute
        z-index: 100
        padding: 10px
        top: 30%
        left: 30%
        width: 40%
        height: 60%
        background: #fff
        .login-label
          margin: 20px 0
          border-bottom: 1px solid rgba(7, 17, 27, .1)
          .login-title, .register-title
            display: inline-block
            margin: 0 10px
            padding: 5px 10px
            &:hover
              cursor: pointer
          .active
            color: $themeColor
            border-bottom: 1px solid $themeColor
</style>
