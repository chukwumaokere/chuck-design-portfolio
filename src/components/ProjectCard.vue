<template>
  <div class="w-24 h-24 bg-red-400 sm:w-52 sm:h-48 sm:bg-blue-400">
      {{project.id}}
  </div>
</template>

<script>
export default {
    props:{
        project: Object,
    },
    setup(){
        return {

        }
    }
}
</script>

<style>

</style>