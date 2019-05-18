import Vue from 'vue';
import Router from 'vue-router';
import Hamburger from "../components/Hamburger";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "hambuger",
      component: Hamburger,
    }
  ]
});
