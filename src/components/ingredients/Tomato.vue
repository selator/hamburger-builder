<template>
  <div>
    <div>This is a tomato.</div>
    <img v-bind:src="`${publicPath}images/tomatoes.jpg`" alt="Picture of tomatoes"/>
  </div>
</template>

<script>
  export default {
    name: "Tomato",
    data() {
      return {
        publicPath: process.env.BASE_URL
      }
    }
  }
</script>

<style scoped>

</style>
