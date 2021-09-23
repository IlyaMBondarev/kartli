import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
    async loadInfo() {
      const info = await ( await fetch('api/info.json') ).json();
      return info;
    }
  },
  modules: {
  }
})
