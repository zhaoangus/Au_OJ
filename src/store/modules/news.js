const store = {
  state: {
    page: 0,
    pageNum: 0,
    content: []
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
    getTitleById: (state) => (id) => {
      return state.content[id].title
    },
    getContentById: (state) => (id) => {
      return state.content[id].content
    }
  }
}

export default store
