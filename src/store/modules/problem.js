const store = {
  state: {
    pid: 0,
    title: '',
    page: 0,
    pageNum: 0,
    content: {}
  },
  mutations: {
    toCurrentProblemPage (state, page) {
      state.page = page
    },
    currentProblem (state, pyload) {
      state.content = pyload
    }
  },
  getters: {
    getProblem: (state) => {
      return state.content
    }
  },
  actions: {
    getCurrentProblem ({ commit }) {
      commit('currentProblem')
    }
  }
}

export default store
