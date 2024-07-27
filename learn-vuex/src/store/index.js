import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter : 0,
    colorCode : 'blue'  //in order to cover two-way binding for innput field
  },
 
  mutations: {
    increaseCounter(state, response) {
      state.counter+=response;
    },
    decreaseCounter(state) {
      state.counter--;
    },
    setColorCode(state, newVal){
      this.state.colorCode=newVal
    }
  },
// good practice to have equal number of mutations and actions
  actions: {
    increaseCounter({commit}) {
      axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(
        response => {
          commit('increaseCounter', response.data)
        }
      )
    },

  },

  getters: {
    squaredCounter(state){
      return state.counter * state.counter;

    }
  },


  modules: {
  }
})
