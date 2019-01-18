const store = {
  state: {
    did: 0,
    title: '',
    page: 0,
    pageNum: 0,
    content: {}
  },
  mutations: {
    toCurrentRanklistPage (state, page) {
      state.page = page
    },
    currentRanklist (state, pyload) {
      state.content = pyload
    }
  },
  getters: {
    getRanklist: (state) => {
      return state.content
    }
  },
  actions: {
    getCurrentRanklist ({ commit }) {
      commit('currentRanklist')
    }
  }
}

export default store
