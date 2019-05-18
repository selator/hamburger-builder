<template>
  <div>
    <Salad v-if="$route.params.id ==='salad'">ingredient detail page {{ $route.params.id }}</Salad>
    <Seitan v-if="$route.params.id ==='seitan'">ingredient detail page {{ $route.params.id }}</Seitan>
  </div>
</template>

<script>
  import Salad from "./Salad";
  import Seitan from "./Seitan";
  export default {
    name: "IngredientDetails",
    components: {Seitan, Salad}
  }
</script>

<style scoped>

</style>
