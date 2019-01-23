<template>
  <div class="useredit">
    <h1>修改用户信息</h1>
    <div class="row">
      <span class="label-title">Username</span>
      <span class="input-title">
        <input type="text">
      </span>
      <span class="search">
        <button>Search</button>
      </span>
    </div>
    <div class="row">
      <span class="label">Nick</span>
      <span class="input">
        <input type="text">
      </span>
    </div>
    <div class="row">
      <span class="label">Motto</span>
      <span class="input">
        <input type="text">
      </span>
    </div>
    <div class="row">
      <span class="label">School</span>
      <span class="input">
        <input type="text">
      </span>
    </div>
    <div class="row">
      <span class="label">Password</span>
      <span class="input">
        <input type="password" placeholder="Leave it blank if it is not changed">
      </span>
    </div>
    <div class="row">
      <span class="label">CheckPwd</span>
      <span class="input">
        <input type="password" placeholder="Leave it blank if it is not changed">
      </span>
    </div>
    <div class="button">
      <button>Submit</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserEdit'
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .useredit
    color: $textColor
    font-size: 14px
    h1
      margin: 20px 0
      font-size: 24px
    .row
      margin: 10px 0
      padding: 5px 0
      display: flex
      border-bottom: 1px solid rgba(7, 17, 27, .1)
      .label-title
        margin: 5px 15px 5px 0
        line-height: 24px
      .input-title
        margin: 5px 15px 5px 0
        line-height: 20px
        input
          width: 150px
          height: 20px
          outline: none
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:focus, &:hover
            border: 1px solid $themeColor
      .search
        margin: 5px 15px 5px 0
        button
          height: 24px
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 3px
          background: $themeColor
          color: #fff
          &:hover
            cursor: pointer
            opacity: .8
      .label
        flex: 2 1 100px
        margin: 5px 15px 5px 0
        line-height: 30px
      .input
        flex: 21 1 auto
        input
          width: 100%
          height: 30px
          outline: none
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:focus, &:hover
            border: 1px solid $themeColor
    .button
      margin: 20px 0 10px 0
      button
        width: 80px
        height: 30px
        border: 1px solid rgba(7, 17, 27, .1)
        border-radius: 3px
        background: $themeColor
        color: #fff
        &:hover
          cursor: pointer
          opacity: .8
</style>
