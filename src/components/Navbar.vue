<template>
   <div class="sm:flex sm:relative sm:w-full" id="nav">
    <button @click="openEmailModal" class="flex sm:px-3 mb-5 sm:mb-0 sm:flex rounded transition ease-in focus:outline-none hover:text-black text-blue-500 dark:text-red-400 animate-bounce">
        <svg class="w-6 h-6 sm:w-6 sm:h-6 " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
        <p class="pl-3 sm:pl-3 circular-font">Lets Work Together!</p>
    </button> 
    <div class="flex text-base sm:text-base sm:absolute sm:right-0 ">
       <!--  <router-link to="/" class="circular-font light">HOME</router-link> | -->
        <!--<router-link to="/web" class="circular-font light">PROJECTS</router-link> |-->
        <div class="container flex">
        <a href="#projects" class="circular-font pt-3 light align-middle pr-5 dark:text-gray-200">PROJECTS</a>
        <!-- <router-link to="/mobile" class="circular-font light">MOBILE PROJECTS</router-link> | -->
        <!-- <router-link to="/other" class="circular-font light">SERVICES</router-link> | -->
        <!-- <router-link to="/about" class="circular-font light">ABOUT</router-link>  -->
        <a href="#about" class="circular-font pt-3 light align-middle pr-5 dark:text-gray-200">ABOUT</a>
        <button @click="toggleDarkMode" class="flex items-center focus:outline-none justify-center dark:hover:bg-opacity-10 text-gray-400 hover:text-gray-700 dark:hover:text-indigo-100 dark:text-indigo-500 h-10 w-10 transition ease-in rounded hover:bg-black hover:bg-opacity-10 dark:hover:bg-white:bg-opacity-10 ">
            <svg class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
        </button>
        </div>

    </div>
  </div>
</template>

<script>
export default {
    emits: ['open-email-modal', 'toggle-dark-mode'],
    setup(){
        return {}
    },
    methods: {
        openEmailModal(){
            //console.log('opening modal')
            this.$emit('open-email-modal');
        },
        toggleDarkMode(){
            this.$emit('toggle-dark-mode')
        }
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