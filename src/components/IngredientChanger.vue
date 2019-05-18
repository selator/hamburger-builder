<template>
  <div>
    <div v-if="!shouldShowDetails">
      <div v-for="(ingredient, index) in ingredients" v-bind:key="index" v-on:click="showDetails(ingredient)">{{
        ingredient.name }}
      </div>
      <div v-on:click="removeIngredient()">Remove</div>
    </div>
    <IngredientDetails v-if="shouldShowDetails" v-bind:ingredient="ingredient" v-on:okay="changeIngredient(ingredient)"
                       v-on:cancel="hideDetails()"/>
  </div>
</template>

<script>
  import IngredientDetails from "./IngredientDetails";

  export default {
    name: "IngredientChanger",
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
      changeIngredient(ingredient) {
        this.$store.commit('changeIngredient', {index: parseInt(this.$route.params.index), ingredient});
        this.$router.push('/');
      },
      showDetails(ingredient) {
        this.ingredient = ingredient;
        this.shouldShowDetails = true;
      },
      hideDetails() {
        this.shouldShowDetails = false;
      },
      removeIngredient() {
        this.$store.commit('removeIngredient', parseInt(this.$route.params.index));
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>
