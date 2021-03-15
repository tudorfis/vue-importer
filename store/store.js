
const store = Vuex.createStore({
  state() {
    return {
      counter: 0,
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
  },
  actions: {
    increment(context) {
      context.commit("increment")
    },
  },
  getters: {
    counter(state) {
      return state.counter
    },
  },
})

export default store
