<template>
    <div>
        <component :is="ingredient.name"/>
    </div>
</template>

<script>
    import * as components from "./ingredients";

    export default {
        name: "IngredientDetails",
        components,
        computed: {
            ingredient() {
                return this.$store.state.page.chooser.selectedIngredient
            }
        },
    }
</script>

<style scoped>

</style>
