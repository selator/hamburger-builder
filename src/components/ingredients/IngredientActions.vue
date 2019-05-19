<template>
    <div>
        <button v-on:click="handleCancel()">Cancel</button>
        <button v-on:click="handleOkay()">OK</button>
        <div>Vegan Substitutes</div>
        <VeganSubstitutes v-if="substitutes.length > 0" v-bind:substitutes="substitutes"></VeganSubstitutes>
    </div>
</template>

<script>
    import VeganSubstitutes from "../VeganSubstitutes";

    export default {
        name: 'IngredientActions',
        components: {VeganSubstitutes},
        computed: {
            substitutes() {
                const substitutesArray = [];
                for (let s of this.$store.state.possibleIngredients[this.ingredient].substitutes) {
                    substitutesArray.push(this.$store.state.possibleIngredients[s])
                }
                return substitutesArray;
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
