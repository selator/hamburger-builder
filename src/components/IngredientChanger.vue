<template>
  <div>
    <div v-for="ingredient in ingredients" v-bind:key="ingredient.id"  v-on:click="changeIngredient(ingredient)">{{ ingredient.name }}</div>
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
      changeIngredient(ingredient) {
        this.$store.commit('changeIngredient', ingredient);
        this.$router.push('/');
      },
      removeIngredient() {
        this.$store.commit('removeIngredient');
        this.$router.push('/');
      }
    }
  }
</script>

<style scoped>

</style>
