import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import news from './modules/news'
import user from './modules/user'
import problem from './modules/problem'
import discuss from './modules/discuss'
import contest from './modules/contest'
import ranklist from './modules/ranklist'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news,
    user,
    problem,
    discuss,
    contest,
    ranklist
  }
  // plugins: [createPersistedState()]
})
