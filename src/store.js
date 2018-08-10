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
    },
    DELETE_ITEM: function({ commit }, item_id) {
      commit("DELETE_ITEM_MUTATION", item_id);
    },
  },
  mutations: {
    ADD_ITEM_MUTATION: function(state, new_portfolio_item) {
      
      state.items.push(new_portfolio_item);
    },
    DELETE_ITEM_MUTATION: function(state, item_id) {
      state.items.splice(item_id, 1);
    },
    GEN_CRITICAL_ERROR: function(state, error) {
      state.criticalError = error;
    }
  },
  getters: {
    items: state => {
      return state.items;
    }
  }
});
export default store;
