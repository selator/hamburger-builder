<template>
  <div>
    <component :is="ingredient.name" />

    <button v-on:click="$emit('cancel')">Cancel</button>
    <button v-on:click="$emit('okay')">OK</button>
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
