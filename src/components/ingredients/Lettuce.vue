<template>
  <div>
    <div>This is a lettuce. Mostly water.</div>
    <img v-bind:src="`${publicPath}images/lettuce.jpg`" alt="Picture of tomatoes"/>
    <IngredientActions ingredient="lettuce"></IngredientActions>
  </div>
</template>

<script>
  import IngredientActions from './IngredientActions';

  export default {
    name: "Lettuce",
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
