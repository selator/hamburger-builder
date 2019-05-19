<template>
    <div>
        Made out of blood and violence
        <button v-if="substitutes.length > 0">Vegan options</button>
    </div>
</template>

<script>
    export default {
        name: "Veal",
        computed: {
            substitutes() {
                for (let i of this.$store.state.possibleIngredients) {
                    if (i.name === 'Veal') return i.substitutes || []
                }
                return []
            }
        }
    }
</script>

<style scoped>

</style>
