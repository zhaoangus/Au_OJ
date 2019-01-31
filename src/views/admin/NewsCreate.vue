<template>
  <div class="news-create">
    <h1>新增消息</h1>
    <div class="row">
      <span class="label-title">Title</span>
      <span class="input-title">
        <input type="text" v-model="title">
      </span>
    </div>
    <div class="row">
      <div class="editor">
        <vue-editor v-model="content"></vue-editor>
      </div>
    </div>
    <div class="btn">
      <button @click="submit">Submit</button>
    </div>
    <Alert :type="type" v-if="showAlert" :show="showAlert"
      :message="message"
    ></Alert>
  </div>
</template>

<script>
import axios from 'axios'
import { VueEditor } from 'vue2-editor'
import Alert from '@/components/Alert'
export default {
  name: 'NewsCreate',
  data () {
    return {
      title: '',
      content: '',
      showAlert: false,
      message: '',
      type: ''
    }
  },
  methods: {
    submit () {
      if (!this.title) {
        this.showAlert = true
        this.message = 'title cannot be empty!'
        this.type = 'error'
        setTimeout(() => {
          this.showAlert = false
        }, 2000)
      } else {
        axios.post('/admin/newscreate', {
          title: this.title,
          content: this.content,
          create: Date.now()
        }).then(res => {
          if (res.data.code === 0) {
            this.showAlert = true
            this.message = '新增消息成功！'
            this.type = 'success'
            setTimeout(() => {
              this.showAlert = false
            }, 2000)
          }
        })
      }
    }
  },
  components: {
    VueEditor,
    Alert
  }
}
</script>

<style lang="stylus" scoped>
  @import '../../common/css/base.styl'
  .news-create
    margin: 0 20px
    padding: 10px 50px
    font-size: 14px
    color: $textColor
    background: #fff
    h1
      margin: 20px 0
      font-size: 24px
    .row
      margin: 10px 0
      padding: 5px 0
      display: flex
      border-bottom: 1px solid rgba(7, 17, 27, .1)
      .label-title
        margin: 10px 15px 5px 0
        line-height: 24px
        font-size: 16px
      .input-title
        margin: 5px 15px 5px 0
        line-height: 20px
        input
          width: 300px
          height: 30px
          outline: none
          border: 1px solid rgba(7, 17, 27, .1)
          border-radius: 3px
          &:focus, &:hover
            border: 1px solid $themeColor
    .btn
      margin: 5px 15px 5px 0
      button
        width: 100px
        height: 30px
        border: 1px solid rgba(7, 17, 27, .1)
        border-radius: 3px
        background: $themeColor
        color: #fff
        &:hover
          cursor: pointer
          opacity: .8
</style>
