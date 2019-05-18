<template>
  <div>
    <div v-for="ingredient in ingredients" v-bind:key="ingredient.id"  v-on:click="changeIngredient(ingredient.name)">{{ ingredient.name }}</div>
    <div v-on:click="removeIngredient()">Remove</div>
  </div>
</template>

<script>
  export default {
    name: "IngredientChanger",
    computed: {
      ingredients() {
        return this.$store.state.possibleIngredients;
      }
    },
    methods: {
      changeIngredient(name) {
        this.$store.commit('changeIngredient', {name});
        this.$router.push('/');
      },
      removeIngredient() {
        this.$store.commit('removeIngredient', {name});
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>
