<template>
  <div>
    <div v-for="ingredient in ingredients" v-bind:key="ingredient.id"  v-on:click="addIngredient(ingredient)">{{ ingredient.name }}</div>
  </div>
</template>

<script>
  export default {
    name: "IngredientAdder",
    computed: {
      ingredients() {
        return this.$store.state.possibleIngredients;
      }
    },
    methods: {
      addIngredient(ingredient) {
        this.$store.commit('addIngredient', ingredient);
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>
