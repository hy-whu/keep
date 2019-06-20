import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var store = new Vuex.Store({
  state: {
    slogan: '坚持一个月，证明给TA看',
    exeDetail: {}
  },
  mutations: {
    changeSlogan (state, varl) {
      console.log(varl)
      state.slogan = varl.word
    },
    changeContent (state, varl) {
      state.exeDetail = varl
    }
  }
})
export default store
