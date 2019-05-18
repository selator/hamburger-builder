import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ingredients: []
  },
  mutations: {
    addIngredient (state, ingredient) {
      state.ingredients.push(ingredient);
    }
  }
});

export default store;
