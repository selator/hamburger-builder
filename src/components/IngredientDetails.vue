<template>
  <div>
    <component :is="ingredient.name" />
  </div>
</template>

<script>
  import * as components from "./ingredients";
  export default {
    name: "IngredientDetails",
    components,
    props: {ingredient: undefined},
  }
</script>

<style scoped>

</style>
