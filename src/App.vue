<template>
  <div id="app">
    <Hamburger />
  </div>
</template>

<script>
import Hamburger from './components/Hamburger.vue'

export default {
  name: 'app',
  components: {
    Hamburger
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
