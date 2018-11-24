<template>
  <div class="sub">
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
      </div>
      <div class="lang">
        <div class="title">Language</div>
        <select>
          <option value="C++">C++(G++)</option>
          <option value="C">C(GCC)</option>
          <option value="Java">Java(openJDK)</option>
        </select>
      </div>
      <div class="submit">
        <textarea placeholder="Paste your code here"></textarea>
      </div>
      <div class="btn">
        <button class="first">Submit</button>
        <button>Reset</button>
        Please Log in First
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sub'
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
    .nav-wrapper
      margin: 30px 40px
      color: $textColor
      border-bottom: 1px solid rgba(7, 17, 27, .1)
      .nav
        .sub
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          border-bottom: 1px solid $themeColor
          .link-sub
            color: $themeColor
        .descr
          display: inline-block
          padding: 10px 20px
          font-size: 14px
          cursor: pointer
          .link-descr
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
      margin: 0 40px
      color: $textColor
      .title-wrapper
        text-align: center
        .title
          margin: 20px 0
          color: #9799ca
          font-size: 26px
          font-weight: 700
      .lang
        margin: 10px 0
        .title
          margin: 10px 0
          font-size: 14px
        select
          width: 100%
          height: 30px
          font-size: 14px
          text-align: center
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 5px
          &:focus
            border: 1px solid $themeColor
          option
            line-height: 15px
          &:hover
            background: $themeColor
            color: #fff
      .submit
        margin: 20px 0
        textarea
          width: 100%
          height: 300px
          border: 1px solid rgba(7, 17, 27, .1)
          &:hover
            border: 1px solid $themeColor
      .btn
        margin: 20px 0
        font-size: 14px
        button
          padding: 10px 15px
          outline: none
          border-radius: 5px
          border: 1px solid rgba(7, 17, 27, .1)
          &:hover
            color: $themeColor
            border: 1px solid $themeColor
        .first
          margin-right: 10px
</style>
