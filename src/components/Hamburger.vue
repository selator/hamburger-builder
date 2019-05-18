<template>
  <div class="hamburger">
    <div class="bun">Bun</div>
    <div v-on:click="showChooser()" class="plus">+</div>
    <div v-for="(ingredient, index) in ingredients" v-bind:key="index" v-on:click="removeAt(index)" v-bind:style="getColorStyle(ingredient.color)">{{ ingredient.name }}</div>
    <div class="bun">Bun</div>
  </div>
</template>

<script>
  export default {
    name: "Hamburger",
    computed: {
      ingredients() {
        return this.$store.state.ingredients.slice().reverse();
      }
    },
    methods: {
      showChooser() {
        this.$router.push('/chooser');
      },
      removeAt(index) {
        this.$router.push(`/changer/${this.$store.state.ingredients.length - index - 1}`);
      },
      getColorStyle(color) {
        return `background-color: ${color}`;
      }
    }
  }
</script>

<style scoped>
.hamburger {
  max-width: 300px;
  font-weight: bold;
  color: white;
}
.bun {
  background-color: chocolate;
}
.plus {
  color: black;
}
</style>
