<template>
  <div class="jumppage">
    <div class="pages" v-if="pageNum<6">
      <div @click="prev" class="prev iconfont">&#xe600;</div>
      <div v-for="(item, index) in pages" class="item" :key="index"
      :class="{active:active===(index+1)}" @click="changePage(item)">{{item}}</div>
      <div @click="next" class="next iconfont">&#xe601;</div>
    </div>
    <div v-else>
      <div class="pages" v-if="active<4">
        <div @click="prev" class="prev iconfont">&#xe600;</div>
        <div v-for="(item, index) in pages" class="item" :key="index"
        :class="{active:active===(index+1)}" @click="changePage(item)">{{item}}</div>
        <div class="point">...</div>
        <div class="item" @click="end">{{pageNum}}</div>
        <div @click="next" class="next iconfont">&#xe601;</div>
      </div>
      <div class="pages" v-else-if="active<(pageNum-2)">
        <div @click="prev" class="prev iconfont">&#xe600;</div>
        <div class="item" @click="start">1</div>
        <div class="point">...</div>
        <div v-for="(item, index) in pages" class="item" :key="index"
        :class="{active:index===1}" @click="changePage(item)">{{item}}</div>
        <div class="point">...</div>
        <div class="item" @click="end">{{pageNum}}</div>
        <div @click="next" class="next iconfont">&#xe601;</div>
      </div>
      <div class="pages" v-else>
        <div @click="prev" class="prev iconfont">&#xe600;</div>
        <div class="item" @click="start">1</div>
        <div class="point">...</div>
        <div v-for="(item, index) in pages" class="item" :key="index"
        :class="{active:active===(index+pageNum-2)}" @click="changePage(item)">{{item}}</div>
        <div @click="next" class="next iconfont">&#xe601;</div>
      </div>
    </div>
    跳至
    <input type="text" class="input" v-model="topage" @keyup.enter="toPage(topage)">
    页
  </div>
</template>

<script>
export default {
  name: 'JumpPage',
  props: {
    news: Array,
    pageNum: Number
  },
  data () {
    return {
      pages: [],
      active: 1,
      topage: 1
    }
  },
  watch: {
    active (val) {
      this.init()
    }
  },
  mounted () {
    this.active = this.$store.state.news.page
    this.init()
  },
  methods: {
    init () {
      if (this.pageNum < 6) {
        let pages = []
        for (let i = 1; i < this.pageNum + 1; i++) {
          pages.push(i)
        }
        this.pages = pages
      } else {
        if (this.active < 4) {
          let pages = [1, 2, 3]
          this.pages = pages
        } else if (this.active < this.pageNum - 2) {
          let pages = [this.active - 1, this.active, this.active + 1]
          this.pages = pages
        } else {
          let pages = [this.pageNum - 2, this.pageNum - 1, this.pageNum]
          this.pages = pages
        }
      }
    },
    changePage (item) {
      this.active = item
      this.$emit('changePage', item)
    },
    start () {
      this.active = 1
      this.$emit('changePage', this.active)
    },
    end () {
      this.active = this.pageNum
      this.$emit('changePage', this.active)
    },
    prev () {
      if (this.active === 1) return
      this.active--
      this.$emit('changePage', this.active)
    },
    next () {
      if (this.active === this.pageNum) return
      this.active++
      this.$emit('changePage', this.active)
    },
    toPage (item) {
      this.active = item
      this.$emit('changePage', item)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '../common/css/base.styl'
  .jumppage
    font-size: 14px
    height: 32px
    .pages
      display: inline-block
      .prev, .next, .point, .item
        display: inline-block
        vertical-align: middle
        margin: 0 2px
        width: 30px
        height: 30px
        line-height: 30px
        text-align: center
        border: 1px solid rgba(7, 17, 27, .1)
        border-radius: 5px
        &:hover
          cursor: pointer
      .active
        display: inline-block
        vertical-align: middle
        margin: 0 2px
        width: 30px
        height: 30px
        line-height: 30px
        text-align: center
        border: 1px solid rgba(7, 17, 27, .1)
        border-radius: 5px
        color: #fff
        background: $themeColor
    .input
      display: inline-block
      appearance: none
      padding: 0 0 0 5px
      width: 50px
      height: 30px
      outline: none
      border: 1px solid rgba(7, 17, 27, .1)
      border-radius: 4px
      &:hover
        border: 1px solid $themeColor
  // .jumppage
  //   font-size: 14px
  //   height: 32px
  //   .pages
  //     display: inline-block
  //     .front, .back, .page1, .page2
  //       display: inline-block
  //       vertical-align: middle
  //       margin: 0 2px
  //       width: 30px
  //       height: 30px
  //       line-height: 30px
  //       text-align: center
  //       border: 1px solid rgba(7, 17, 27, .1)
  //       border-radius: 5px
  //       &:hover
  //         cursor: pointer
  //         border: 1px solid $themeColor
  //     .front
  //       &:hover
  //         cursor: not-allowed
  //         border: 1px solid rgba(7, 17, 27, .1)
  //   .input
  //     display: inline-block
  //     appearance: none
  //     padding: 0 0 0 5px
  //     width: 50px
  //     height: 30px
  //     outline: none
  //     border: 1px solid rgba(7, 17, 27, .1)
  //     border-radius: 4px
  //     &:hover
  //       border: 1px solid $themeColor
</style>
