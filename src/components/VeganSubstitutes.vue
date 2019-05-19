<template>
    <div>
        <div v-for="ingredient in substitutes" v-bind:key="ingredient.id">
            {{ingredient.name }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "VeganSubstitutes",
        props: {
            substitutes:Array
        }
    }
</script>

<style scoped>

</style>