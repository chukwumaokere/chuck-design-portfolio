<template>
  <div class="ml-0 w-24 sm:w-52 bg-red-400 sm:bg-blue-400">
      <img :src="project.placeholder_img && project.placeholder_img != '' ? project.placeholder_img : asset_placeholder_img " class="w-full cursor-pointer" @click="openDetailsModal(project)" />
      <!-- {{project.id}} -->
  </div>
</template>

<script>
import asset_placeholder_img from "@/assets/placeholder-image.jpg";
export default {
    props:{
        project: Object,
    },
    setup(){
        return {
            asset_placeholder_img,
        }
    },
    methods: {
        openDetailsModal(project){
            console.log('opening modal for', project)
        }
    }
}
</script>

<style>

</style>