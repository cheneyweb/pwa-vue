import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

const domain = 'http://localhost:3636'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    banScorll: false,
    homeScroll: 0,
    statScroll: 0,
    exploreScroll: 0
  },
  mutations: {
    changeDrawer(state, params) {
      state.drawer = params
    },
    changeBanScorll(state, params) {
      state.banScorll = params
    },
    setHomeScroll(state, params) {
      state.homeScroll = params
    },
    setExploreScroll(state, params) {
      state.exploreScroll = params
    },
    setStatScroll(state, params) {
      state.statScroll = params
    }
  },
  actions: {
    async reg(state, data) {
      const res = await axios.post(`${domain}/gserver/xnosql/user/create`, data)
      return res.data
    },
    async login(state, data) {
      const res = await axios.post(`${domain}/gserver/auth/login`, data)
      return res.data
    }
  }
})
