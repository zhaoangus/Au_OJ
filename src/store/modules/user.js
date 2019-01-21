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
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false
    },
    showLogin: false
  },
  mutations: {
    saveName (state, name) {
      state.name = name
    },
    savePwd (state, pwd) {
      state.pwd = pwd
    },
    saveAdmin (state) {
      state.isAdmin = true
    },
    logoutAdmin (state) {
      state.isAdmin = false
    },
    showLoginFn (state, pyload) {
      state.showLogin = true
    },
    hideLoginFn (state, pyload) {
      state.showLogin = false
    }
  }
}

export default store
