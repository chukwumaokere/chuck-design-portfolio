<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<script>

export default {
  watch: {
    '$route' (to){
      document.title = to.meta.title || "Chuck Okere Design Portfolio"
    },
  },
  name: 'App',
}
</script>

<style>
#app {
  /*
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  */
  /*
  text-align: center;
  color: #2c3e50;
  */
  height: 100%;
  width: 100%;
}

</style>
