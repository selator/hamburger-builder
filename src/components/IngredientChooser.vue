<template>
  <div>
    <div v-for="ingredient in ingredients" v-bind:key="ingredient.id"  v-on:click="addIngredient(ingredient.name)">{{ ingredient.name }}</div>
  </div>
</template>

<script>
  export default {
    name: "IngredientChooser",
    computed: {
      ingredients() {
        return this.$store.state.possibleIngredients;
      }
    },
    methods: {
      addIngredient(name) {
        this.$store.commit('addIngredient', {name});
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>
