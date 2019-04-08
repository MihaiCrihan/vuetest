<template>
  <div id="app">
    <Menu3puncte/>
    <router-view/>
  </div>
</template>

<script>
import Menu3puncte from './components/Menu3puncte.vue'

export default {
  name: 'app',
  components: {
   Menu3puncte

  }
}
</script>

<style>
html{
    background: gray;

}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-style: bold;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: gray;

}

</style>
