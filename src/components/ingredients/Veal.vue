<template>
    <div>
        Made out of blood and violence
        <IngredientActions v-bind:substitutes="substitutes" v-bind:ingredient="ingredient"></IngredientActions>
    </div>
</template>

<script>
    import IngredientActions from './IngredientActions';

    export default {
        name: "Veal",
        components: {IngredientActions},
        computed: {
            substitutes() {
                return this.$store.state.possibleIngredients.veal.substitutes || [];
            },
            ingredient() {
                return this.$store.state.possibleIngredients.veal;

            }
        }
    }
</script>

<style scoped>

</style>
