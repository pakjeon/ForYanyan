<template>
  <div id="app">
      <clock></clock>
  </div>
</template>

<script>
import clock from './components/clock.vue'

export default {
  name: 'app',
  components: {
    clock
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
