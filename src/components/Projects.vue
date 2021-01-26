<template>
  <div class="flex flex-col justify-center w-full mx-auto items-center sm:flex sm:flex-col sm:container sm:mx-auto sm:h-auto sm:items-center sm:justify-center sm:w-full">
        <div class="sm:flex">
            <h1 class="circular-font text-4xl sm:text-4xl">Projects</h1>
        </div>
        <p class="py-10 text-xl sm:text-xl text-gray-400">Some of the awesome projects I've created/shipped</p> 
        <span class="grid grid-cols-4 gap-4 sm:flex sm:flex-row sm:space-x-6 sm:pt-5">
            <img src="@/assets/Ai.png" />
            <img src="@/assets/Ae.png" /> 
            <img src="@/assets/Ps.png" />
            <img src="@/assets/Xd.png" />
        </span>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .circular-font{
        font-family: 'Circular Std';
    }
</style>