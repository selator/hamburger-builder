import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    ingredients: [],
    possibleIngredients: [
      {name: 'Lettuce', color: '#7fe02a'},
      {name: 'Seitan', color: '#664411'},
      {name: 'Tomato', color: '#ee0000'},
      {name: 'Pickles', color: '#25c160'},
      {name: 'Ketchup', color: '#ff1111'},
      {name: 'Mustard', color: '#d6c000'},
      {name: 'Veal', color: '#664411', substitutes: ['Seitan']}
    ]
  },
  mutations: {
    addIngredient(state, ingredient) {
      state.ingredients.push(ingredient);
    },
    removeIngredient(state, index) {
      state.ingredients.splice(index, 1);
    },
    changeIngredient(state, {index, ingredient}) {
      state.ingredients[index] = ingredient;
    }
  }
});

export default store;
