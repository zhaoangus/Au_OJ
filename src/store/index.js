import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
import news from './modules/news'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    news
  }
  // plugins: [createPersistedState()]
})
