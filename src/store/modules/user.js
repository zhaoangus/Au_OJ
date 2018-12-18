const store = {
  state: {
    name: '',
    uid: Number,
    nick: {
      type: String,
      default: ''
    },
    motto: '',
    mail: '',
    school: '',
    solve: {
      type: Number,
      default: 0
    },
    pwd: {
      type: String,
      required: true
    },
    submit: {
      type: Number,
      default: 0
    },
    solved: {
      type: [Number],
      default: []
    },
    unsolved: {
      type: [Number],
      default: []
    }
  },
  mutations: {
    saveName (state, name) {
      state.name = name
    },
    savePwd (state, pwd) {
      state.pwd = pwd
    }
  }
}

export default store
