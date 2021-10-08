/*
 * @Description:
 * @Version: 1.0
 * @Author: xiaozhangtx
 * @Date: 2021-10-04 13:22:31
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    index: window.sessionStorage.getItem('index'),
  },
  mutations: {
    // 主题色1 深蓝色
    theme1(state) {
      state.index = 1
    },
    // 主题色2 橘黄色
    theme2(state) {
      state.index = 2
    },
  },
  actions: {},
  modules: {},
})
