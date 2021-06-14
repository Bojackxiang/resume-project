import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    username: '',
  },
  actions: {
    LOGIN({commit}, username){
      console.log(1);
      commit(actions.LOGIN, username)
    },
  },
  mutations: {
    increment (state) {
      
      state.count++
    },
    LOGIN(state, username){
      console.log(2);
      state.username = username
    }
  }
})



export default store;