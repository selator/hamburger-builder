<template>
  <div max-width="800px">
    <div>Bun</div>
    <div v-on:click="showChooser()">+</div>
    <div v-for="(ingredient, index) in ingredients" v-bind:key="index" v-on:click="removeAt(index)">{{ ingredient.name }}</div>
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
      },
      removeAt(index) {
        this.$store.commit('setIndex', index);
        this.$router.push('/changer');
      }
    }
  }
</script>

<style scoped>

</style>
