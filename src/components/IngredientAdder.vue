<template>
  <div>
    <div v-if="!shouldShowDetails">
      <div v-for="ingredient in ingredients" v-bind:key="ingredient.id" v-on:click="showDetails(ingredient)">{{
        ingredient.name }}
      </div>
    </div>
    <IngredientDetails v-if="shouldShowDetails" v-bind:ingredient="ingredient" v-on:okay="addIngredient(ingredient)"
                       v-on:cancel="hideDetails()"/>
  </div>
</template>

<script>
  import IngredientDetails from "./IngredientDetails";

  export default {
    name: "IngredientAdder",
    components: {IngredientDetails},
    data() {
      return {shouldShowDetails: false, ingredient: {}};
    },
    computed: {
      ingredients() {
        return this.$store.state.possibleIngredients;
      }
    },
    methods: {
      showDetails(ingredient) {
        this.ingredient = ingredient;
        this.shouldShowDetails = true;
      },
      hideDetails() {
        this.shouldShowDetails = false;
      },
      addIngredient(ingredient) {
        this.$store.commit('addIngredient', ingredient);
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>
