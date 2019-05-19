<template>
    <div>This is plain gluten. No animals were harmed in the making of this burger patty.
        <IngredientActions ingredient="seitan"></IngredientActions>

    </div>

</template>

<script>
    import IngredientActions from './IngredientActions';

    export default {
        name: "Seitan",
        components: {IngredientActions},
    }
</script>

<style scoped>

</style>
