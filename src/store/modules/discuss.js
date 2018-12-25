const store = {
  state: {
    did: 0,
    title: '',
    page: 0,
    pageNum: 0,
    content: {}
  },
  mutations: {
    toCurrentDiscussPage (state, page) {
      state.page = page
    },
    currentDiscuss (state, pyload) {
      state.content = pyload
    }
  },
  getters: {
    getDiscuss: (state) => {
      return state.content
    }
  },
  actions: {
    getCurrentDiscuss ({ commit }) {
      commit('currentDiscuss')
    }
  }
}

export default store
