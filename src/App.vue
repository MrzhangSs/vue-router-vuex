<template>
  <div id="app">
    <router-link to="/">
      <button>first</button>
    </router-link>
    <router-link to="/second">
      <button>second</button>
    </router-link>
    <br>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
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
.router-link-active{
  color: red;
  background-color: yellow;
}
</style>
