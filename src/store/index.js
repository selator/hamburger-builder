import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ingredients: [],
    possibleIngredients: [{name: 'Salad'}, {name: 'Seitan'}, {name: 'Tomato'}, {name: 'Pickles'}],
    index: 0,
  },
  mutations: {
    addIngredient (state, ingredient) {
      state.ingredients.push(ingredient);
    },
    removeIngredient(state) {
      state.ingredients.splice(state.index, 1);
    },
    changeIngredient(state, ingredient) {
      state.ingredients[state.index] = ingredient;
    },
    setIndex(state, index) {
      state.index = index;
    }
  }
});

export default store;
