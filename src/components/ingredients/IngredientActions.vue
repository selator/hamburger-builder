<template>
    <div>
        <button v-on:click="handleCancel()">Cancel</button>
        <button v-on:click="handleOkay(ingredient)">OK</button>
        <button v-if="substitutes.length > 0">Vegan options</button>
    </div>
</template>

<script>
export default {
    name: 'IngredientActions',
    props: {
        'substitutes': Array,
        ingredient: Object
    },
    methods: {
        handleCancel() {
            window.console.log("cancel")
        },
        handleOkay(ingredient) {
            window.console.log("ok")
            this.$store.commit('addIngredient', ingredient);
            this.$router.push('/');
        }
    }
}
</script>
