import Vuex from 'vuex';
import Vue from "vue";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        ingredients: [],
        possibleIngredients: {
            "lettuce": {name: 'Lettuce', color: '#7fe02a'}
            ,
            "seitan": {
                name: 'Seitan', color:
                    '#664411'
            }
            ,
            "tomato": {
                name: 'Tomato', color:
                    '#ee0000'
            }
            ,
            "pickles": {
                name: 'Pickles', color:
                    '#25c160'
            }
            ,
            "ketchup": {
                name: 'Ketchup', color:
                    '#ff1111'
            }
            ,
            "mustard": {
                name: 'Mustard', color:
                    '#d6c000'
            }
            ,
            "veal": {
                name: 'Veal', color: '#664411', substitutes: ['seitan']
            }
        },
        page: {
            chooser: {
                shouldShowDetails: false
            }
        }
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
