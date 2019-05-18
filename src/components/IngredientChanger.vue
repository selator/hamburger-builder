<template>
  <div>
    <div v-for="(ingredient, index) in ingredients" v-bind:key="index"  v-on:click="changeIngredient(ingredient)">{{ ingredient.name }}</div>
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
        this.$store.commit('changeIngredient', { index: parseInt(this.$route.params.index), ingredient} );
        this.$router.push('/');
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
