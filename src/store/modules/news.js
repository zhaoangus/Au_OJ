const store = {
  state: {
    nid: 0,
    title: '',
    create: 0,
    page: 0,
    pageNum: 0,
    content: {}
  },
  mutations: {
    toCurrentNewsPage (state, page) {
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
