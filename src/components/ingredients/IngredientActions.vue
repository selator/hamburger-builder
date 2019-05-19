<template>
    <div>
        <button v-on:click="handleCancel()">Cancel</button>
        <button v-on:click="handleOkay()">OK</button>
        <button v-if="substitutes.length > 0">Vegan options</button>
    </div>
</template>

<script>
    export default {
        name: 'IngredientActions',

        computed: {
            substitutes() {
                return this.$store.state.possibleIngredients[this.ingredient].substitutes || []
            }
        },
        props: {
            ingredient: String
        },
        methods: {
            handleCancel() {
                this.$store.state.page.chooser.shouldShowDetails = false;
            },
            handleOkay() {
                this.$store.commit('addIngredient', this.$store.state.possibleIngredients[this.ingredient]);
                this.$router.push('/');
                this.$store.state.page.chooser.shouldShowDetails = false;
            }
        }
    }
</script>
