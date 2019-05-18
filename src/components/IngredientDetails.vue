<template>
  <div>
    <Lettuce v-if="$route.params.id ==='lettuce'">ingredient detail page {{ $route.params.id }}</Lettuce>
    <Seitan v-if="$route.params.id ==='seitan'">ingredient detail page {{ $route.params.id }}</Seitan>
  </div>
</template>

<script>
  import Lettuce from "./Lettuce";
  import Seitan from "./Seitan";
  export default {
    name: "IngredientDetails",
    components: {Seitan, Lettuce}
  }
</script>

<style scoped>

</style>
