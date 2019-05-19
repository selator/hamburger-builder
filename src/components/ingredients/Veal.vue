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
                for (let i of this.$store.state.possibleIngredients) {
                    if (i.name === 'Veal') return i.substitutes || []
                }
                return []
            },
            ingredient() {
                for (let i of this.$store.state.possibleIngredients) {
                    if (i.name === 'Veal') return i
                }
                return {}
            }
        }
    }
</script>

<style scoped>

</style>
