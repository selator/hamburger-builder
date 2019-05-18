import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ingredients: [],
    possibleIngredients: [
      {name: 'Salad', color: '#7fe02a'},
      {name: 'Seitan', color: '#664411'},
      {name: 'Tomato', color: '#ee0000'},
      {name: 'Pickles', color: '#25c160'}],
    index: 0,
  },
  mutations: {
    addIngredient(state, ingredient) {
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
