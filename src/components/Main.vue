<template>
    <div class="landing sm:container sm:mx-auto sm:h-auto sm:items-center sm:justify-center">
        <div class="landingWrapper sm:w-full sm:flex">
            <div class="landingL sm:flex-none sm:w-1/2">
                <h1 class="circular-font text-3xl sm:text-4xl dark:text-white">Chuck Okere.</h1>
                <p class="text-xl sm:text-xl text-gray-500 dark:text-gray-400">Hi, my name is Chuck Okere.</p> 
                <p class="text-xl pt-5 sm:pt-5 sm:text-xl text-gray-500 dark:text-gray-400 ">I can be your <span class="text-blue-500">UI/UX Designer</span>, <span class="text-purple-400"> Product Designer</span>, <span class="text-green-500">Full-Stack Developer</span>, and <span class="text-red-400">Solutions Architect</span>.</p>
                <p class="text-base pt-5 sm:pt-5 sm:text-xl text-gray-500 dark:text-gray-400"> I excel in:</p>
                <ul class="list-disc pt-3 sm:pt-3 sm:text-xl text-gray-500 dark:text-gray-400"> 
                    <li class="ml-10">Clean Code</li>
                    <li class="ml-10">Interaction Design</li>
                    <li class="ml-10">Accessible Design</li>
                    <li class="ml-10">Business Solutions</li>
                </ul>
                <div class="flex justify-center pt-10 sm:pt-24 sm:block ">
                    <a href="/documents/Stylized-Resume.pdf" @click="downloadCV" class="flex place-self-center sm:float-left px-4 py-3 sm:flex sm:px-5 sm:py-4 hover:shadow-lg shadow-md rounded transition ease-in duration-200 focus:outline-none hover:text-white text-white text-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        <svg class="w-6 h-6 sm:w-7 sm:h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        <p class="text-base pl-3 sm:text-lg sm:pl-3 circular-font">Download Resume/CV</p>
                    </a>
                </div>
            </div>
            <div class="landingR hidden sm:block w-1/2 h-1/2 sm:w-full sm:h-full">
                <img class="float-right" alt="Chucks Face" src="../assets/Face_image.png">
            </div>
        </div>
        <div class="flex pt-10 sm:pt-0 sm:flex justify-center sm:justify-center mx-auto sm:mx-auto sm:place-self-center sm:mt-20 animate-bounce transition ease-in duration-1200">
            <div class="scroll ">
                <img class="w-3 sm:w-full sm:h-full" src="../assets/Scroll.png">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    setup(){
        return {}
    },
    methods: {
        downloadCV(){
            console.log("downloading cv")
        }
    }
}
</script>

<style>
    .circular-font{
        font-family: 'Circular Std';
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
</style>