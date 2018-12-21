import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import news from './modules/news'
import user from './modules/user'
import problem from './modules/problem'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news,
    user,
    problem
  }
  // plugins: [createPersistedState()]
})