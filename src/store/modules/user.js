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
    showLogin: false,
    adminList: {
      type: Array,
      default: [{
        name: 'admin1',
        uid: 1,
        nick: 'admin',
        motto: 'admin',
        mail: 'zhao_angus@163.com',
        school: 'BIT',
        solve: 30,
        pwd: 'admin1angus',
        submit: 36,
        solved: [1, 3, 6, 7, 8, 10, 13, 34, 45, 55, 57, 58, 60, 70, 91,
          101, 104, 109, 120, 129, 139, 140, 143, 159, 190, 201, 203, 205, 245,
          267],
        unsolved: [2, 4, 80, 105, 110, 180],
        isAdmin: true
      }]
    }
  },
  mutations: {
    saveName (state, name) {
      state.name = name
    },
    saveUid (state, uid) {
      state.uid = uid
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
    },
    addAdmin (state, pyload) {
      state.addAdmin.push(pyload)
    }
  }
}

export default store
