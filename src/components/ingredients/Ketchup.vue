<template>
    <div>Red condiment made of tomatoes.
        <IngredientActions ingredient="ketchup"></IngredientActions>
    </div>
</template>

<script>
    import IngredientActions from './IngredientActions';

    export default {
        name: "Ketchup",
        components: {IngredientActions},
    }
</script>

<style scoped>

</style>
