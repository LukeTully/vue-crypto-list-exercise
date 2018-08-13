import Vue from "vue";
import Vuex from "vuex";
import localForage from "localforage";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    items: [],
    criticalError: ''
  },
  actions: {
    ADD_ITEM: function ({
      commit
    }, new_portfolio_item) {
      commit("ADD_ITEM_MUTATION", new_portfolio_item);
    },
    SET_CRITICAL_ERROR: function ({
      commit
    }, error) {
      commit("GEN_CRITICAL_ERROR", error);
    }
  },
  mutations: {
    ADD_ITEM_MUTATION: function (state, new_portfolio_item) {

      /* Adds a new item to our portfolio */
      state.items.push(new_portfolio_item);

      // TODO: Could stand to be abstracted away into a caching layer
      localForage.setItem("portfolio", this.state.items);

    },
    GEN_CRITICAL_ERROR: function (state, error) {
      /* Elevates an error to critical status by assigning it to state */
      state.criticalError = error;

      // Let's try and get the last result we fetched
      localForage.getItem('portfolio').then(result => {
        this.state.items = result;
        state.criticalError = "The connection has been interrupted, but here's what you're portfolio last looked like."
      })
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
