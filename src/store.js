import Vue from "vue";
import Vuex from "vuex";
import * as API from './ApiMock.js'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [],
    criticalError: ''
  },
  actions: {
    ADD_ITEM: function({ commit }, new_portfolio_item) {
      commit("ADD_ITEM_MUTATION", new_portfolio_item);
    }
  },
  mutations: {
    ADD_ITEM_MUTATION: function(state, new_portfolio_item) {
      /* Adds a new item to our portfolio */
      state.items.push(new_portfolio_item);
    },
    GEN_CRITICAL_ERROR: function(state, error) {
      /* Elevates an error to critical status by assigning it to state */
      state.criticalError = error;
    }
  },
  getters: {
    items: state => {
      /* Returns our current portfolio state */
      return state.items;
    }
  }
});
export default store;
