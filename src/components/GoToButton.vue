<template>
    <a type="button" :class="color" class="whitespace-nowrap mb-4 mr-4 px-4 py-3 sm:flex sm:px-5 sm:py-4 hover:shadow-xl shadow-md rounded-xl transition ease-in duration-200 focus:outline-none hover:text-white text-white text-xl">
      <div class="my-auto flex flex-row h-full items-center justify-center">
        <slot></slot>
        <span class="text-base pl-3 sm:text-lg sm:pl-3">{{text}}</span>
      </div>
    </a>
</template>

<script>
export default {
    props:{
        text: String,
        color: String,
    }
}
</script>

<style>

</style>