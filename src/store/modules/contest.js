const store = {
  state: {
    cid: 0,
    title: '',
    page: 0,
    pageNum: 0,
    content: {}
  },
  mutations: {
    toCurrentContestPage (state, page) {
      state.page = page
    },
    currentContest (state, pyload) {
      state.content = pyload
    }
  },
  getters: {
    getContest: (state) => {
      return state.content
    }
  },
  actions: {
    getCurrentContest ({ commit }) {
      commit('currentContest')
    }
  }
}

export default store
