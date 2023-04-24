import { createStore } from 'vuex'
import { toyService } from '../services/toy.service'
export const store = createStore({
 state: {
  msg: 'Store Is Running'
 },
 mutations: {},
 actions: {},
 getters: {
  getMsg(state) {
   return state.msg
  }
 },
 modules: {}
})
