<template>
   <div class="flex relative w-full" id="nav">
    <button @click="openEmailModal" class="flex rounded transition ease-in duration-200 focus:outline-none px-3 hover:text-black text-blue-500">
        <svg class=" w-6 h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
        <p class="pl-3  circular-font">Lets Work Together!</p>
    </button>
    <div class="absolute right-0">
        <router-link to="/" class="circular-font light">HOME</router-link> |
        <router-link to="/web" class="circular-font light">WEB PROJECTS</router-link> |
        <router-link to="/mobile" class="circular-font light">MOBILE PROJECTS</router-link> |
        <router-link to="/other" class="circular-font light">SERVICES</router-link> |
        <router-link to="/about" class="circular-font light">ABOUT</router-link> 
    </div>
  </div>
</template>

<script>
export default {
    setup(){
        return {}
    },
    methods: {
        openEmailModal(){
            console.log('opening modal')
        },
    }
}
</script>

<style>
.light {
    font-weight: 100 !important;
}
.circular-font{
    font-family: 'Circular Std Book';
    font-style: normal;
    font-weight: 500;
}
</style>