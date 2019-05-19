<template>
    <div>
        <div v-for="ingredient in substitutes" v-bind:key="ingredient.id">
            <div v-on:click="showDetails(ingredient)">{{ingredient.name }}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "VeganSubstitutes",
        props: {
            substitutes: Array
        },
        methods: {
            showDetails(ingredient) {
                this.$store.state.page.chooser.selectedIngredient = ingredient;
            }
        }
    }
</script>

<style scoped>

</style>