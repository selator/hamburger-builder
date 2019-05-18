import Vue from 'vue';
import Router from 'vue-router';
import Hamburger from "../components/Hamburger";
import IngredientChooser from "../components/IngredientChooser";

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
      component: IngredientChooser,
    }
  ]
});
