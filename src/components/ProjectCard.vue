<template>
  <div class="ml-0 w-24 sm:w-52 bg-green-500 sm:bg-green-500 text-center rounded">
        <img :src="project.placeholder_img && project.placeholder_img != '' ? project.placeholder_img : asset_placeholder_img " class="w-full cursor-pointer" @click="openDetailsModal(project)" />
        <span class="text-white dark:text-gray-800">{{project.name}}</span>
  </div>
</template>

<script>
import asset_placeholder_img from "@/assets/placeholder-image.jpg";

export default {
    emits: ['open-photo-modal'],
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
            console.log('opening modal for', project);
            this.$emit('open-photo-modal', project);
        },
        openImage(src){
            window.open(src, "_blank")  
        }
    }
}
</script>

<style>
</style>