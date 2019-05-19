<template>
  <div>
    <div>This is a tomato.</div>
    <img v-bind:src="`${publicPath}images/tomatoes.jpg`" alt="Picture of tomatoes"/>
    <IngredientActions ingredient="tomato"></IngredientActions>
  </div>
</template>

<script>
  import IngredientActions from './IngredientActions';

  export default {
    name: "Tomato",
    components: {IngredientActions},
    data() {
      return {
        publicPath: process.env.BASE_URL
      }
    }
  }
</script>

<style scoped>

</style>
