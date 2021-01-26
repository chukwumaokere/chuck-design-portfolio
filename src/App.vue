<template>
  <router-view/>
</template>

<script>

export default {
  watch: {
    '$route' (to){
      document.title = to.meta.title || "Chuck Okere's Design Portfolio"
    },
  },
  name: 'App',
}
</script>

<style>

#app {
  height: 100%;
  width: 100%;
}

</style>
