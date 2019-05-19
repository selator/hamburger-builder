<template>
  <div>
    <div v-if="!shouldShowDetails">
      <div v-for="ingredient in ingredients" v-bind:key="ingredient.id" v-on:click="showDetails(ingredient)">{{
        ingredient.name }}
      </div>
    </div>
    <IngredientDetails v-if="shouldShowDetails" v-bind:ingredient="ingredient" 
                       v-on:cancel="hideDetails()"/>
  </div>
</template>

<script>
  import IngredientDetails from "./IngredientDetails";

  export default {
    name: "IngredientAdder",
    components: {IngredientDetails},
    data() {
      return { ingredient: {}};
    },
    computed: {
      shouldShowDetails(){
        return this.$store.state.page.chooser.shouldShowDetails;
      },
      ingredients() {
        return this.$store.state.possibleIngredients;
      }
    },
    methods: {
      showDetails(ingredient) {
        this.$store.state.page.chooser.selectedIngredient = ingredient;
        this.$store.state.page.chooser.shouldShowDetails=true;

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
