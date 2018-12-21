const store = {
  state: {
    nid: 0,
    title: '',
    page: 0,
    pageNum: 0,
    content: {}
  },
  mutations: {
    toCurrentPage (state, page) {
      state.page = page
    },
    currentNews (state, pyload) {
      state.content = pyload
    }
  },
  getters: {
    getNews: (state) => {
      return state.content
    }
  },
  actions: {
    getCurrentNews ({ commit }) {
      commit('currentNews')
    }
  }
}

export default store