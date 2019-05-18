import Vue from 'vue';
import Router from 'vue-router';
import Hamburger from "../components/Hamburger";
import IngredientAdder from "../components/IngredientAdder";
import IngredientChanger from "../components/IngredientChanger";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "hambuger",
      component: Hamburger,
    },
    {
      path: "/chooser",
      name: "chooser",
      component: IngredientAdder,
    },
    {
      path: "/changer",
      name: "changer",
      component: IngredientChanger,
    }
  ]
});
