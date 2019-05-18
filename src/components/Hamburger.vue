<template>
  <div>
    <div>Bun</div>
    <div v-on:click="showChooser()">+</div>
    <div v-for="ingredient in ingredients" v-bind:key="ingredient.id">{{ ingredient.name }}</div>
    <div>Bun</div>
  </div>
</template>

<script>
  export default {
    name: "Hamburger",
    computed: {
      ingredients() {
        return this.$store.state.ingredients;
      }
    },
    methods: {
      showChooser() {
        this.$router.push('/chooser');
      }
    }
  }
</script>

<style scoped>

</style>
