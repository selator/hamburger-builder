<template>
  <div>
    <Lettuce v-if="ingredient.name ==='Lettuce'">ingredient detail page {{ $route.params.id }}</Lettuce>
    <Seitan v-if="ingredient.name ==='Seitan'">ingredient detail page {{ $route.params.id }}</Seitan>
    <button v-on:click="$emit('cancel')">Cancel</button>
    <button v-on:click="$emit('okay')">OK</button>
  </div>
</template>

<script>
  import Lettuce from "./Lettuce";
  import Seitan from "./Seitan";
  export default {
    name: "IngredientDetails",
    components: {Seitan, Lettuce},
    props: {ingredient: undefined},
  }
</script>

<style scoped>

</style>
