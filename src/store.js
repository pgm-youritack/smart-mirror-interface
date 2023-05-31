import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'
const store = createStore({
  plugins: [createPersistedState({ storage: window.sessionStorage })],
  state: {
    sessionToken: null
  },
  mutations: {
    setSessionToken(state, token) {
      state.sessionToken = token
    }
  },
  actions: {
    updateSessionToken({ commit }, token) {
      commit('setSessionToken', token)
    }
  }
  // other modules, actions, getters, etc.
})

export default store
