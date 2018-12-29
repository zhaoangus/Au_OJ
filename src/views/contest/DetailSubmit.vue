<template>
  <div class="submit">
    <div class="content-wrapper">
      <div class="title-wrapper">
        <div class="title">1: 母牛的故事</div>
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
  name: 'DetailSubmit'
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .submit
    .content-wrapper
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
          outline: none
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
