<template>
  <div class="flex flex-col justify-center w-full mx-auto items-center sm:flex sm:flex-col sm:container sm:mx-auto sm:h-auto sm:items-center sm:justify-center sm:w-full">
        <div class="sm:flex">
            <h1 class="circular-font text-4xl sm:text-4xl dark:text-white">Projects</h1>
        </div>
        <p class="py-10 text-xl sm:text-xl text-gray-500 dark:text-gray-400">A big list of some of the awesome projects I've created/shipped</p> 
        <ul class="flex flex-row items-center justify-center space-x-3 sm:space-x-20">
            <li :class="{'bg-green-500 bg-opacity-100 rounded px-3 py-1 sm:px-5 text-white dark:text-gray-800 hover:text-white hover:bg-opacity-100' : currentView == 'Recent'}" class="dark:text-gray-400 sm:text-lg whitespace-nowrap cursor-pointer transition-all ease-in hover:bg-green-500 hover:text-black hover:bg-opacity-20 sm:py-1 sm:px-3 hover:px-3 rounded" @click="changeProjects('Recent')">
                <p>Recent Apps</p>
            </li>
            <li :class="{'bg-green-500 bg-opacity-100 rounded px-3 py-1 sm:px-5 text-white dark:text-gray-800 hover:text-white hover:bg-opacity-100' : currentView == 'Mobile'}" class="dark:text-gray-400 sm:text-lg whitespace-nowrap cursor-pointer transition-all ease-in hover:bg-green-500 hover:text-black hover:bg-opacity-20 sm:py-1 sm:px-3 hover:px-3 rounded" @click="changeProjects('Mobile')">
                <p>Mobile Apps</p>
            </li>
            <li :class="{'bg-green-500 bg-opacity-100 rounded px-3 py-1 sm:px-5 text-white dark:text-gray-800 hover:text-white hover:bg-opacity-100' : currentView == 'Web App'}" class="dark:text-gray-400 sm:text-lg whitespace-nowrap cursor-pointer transition-all ease-in hover:bg-green-500 hover:text-black hover:bg-opacity-20 sm:py-1 sm:px-3 hover:px-3 rounded" @click="changeProjects('Web App')">
                <p>Web Apps</p>
            </li>
            <li :class="{'bg-green-500 bg-opacity-100 rounded px-3 py-1 sm:px-5 text-white dark:text-gray-800 hover:text-white hover:bg-opacity-100' : currentView == 'All'}" class="dark:text-gray-400 sm:text-lg whitespace-nowrap cursor-pointer transition-all ease-in hover:bg-green-500 hover:text-black hover:bg-opacity-20 sm:py-1 sm:px-3 hover:px-3 rounded" @click="changeProjects('All')">
                <p class="">All ({{count}})</p>
            </li>
        </ul>
        <div class="grid grid-cols-3 place-items-center gap-4 pt-5 sm:grid sm:grid-cols-4 sm:gap-0 sm:space-x-4 sm:pt-5 sm:place-items-center">
            <ProjectCard v-for="project in selectedapps" :key="project.id" :project="project" @open-photo-modal="openPhotoModal" />
        </div>
    </div>
</template>

<script>
import * as apps from '@/assets/appdb.json';
import ProjectCard from '@/components/ProjectCard';
import {ref} from 'vue';
export default {
    emits: ['open-photo-modal'],
    components:{
        ProjectCard,
    },
    setup(){
        let allapps = apps.default;
        let all_shown_apps = [];
        let selectedapps = ref([]);
        let count = allapps.length;
        let currentView = ref("Recent");
        //init with only apps with show === 1
        allapps.forEach(app => {
            if(app.show === 1){
                all_shown_apps.push(app);
            }
        })
        //update count
        count = all_shown_apps.length;
        //init with recent apps
        allapps.forEach(app => {
            if(app.recent === 1 && app.show === 1){
                selectedapps.value.push(app);
            }
        })
        
        return{
           count,
           allapps,
           selectedapps,
           currentView,
        }
    },
    methods: {
        changeProjects(type){
            //console.log('switching to', type);
            this.currentView = type;
            if (type != 'Recent'){
                if(type == "All"){
                    //this.selectedapps = this.allapps;
                    //console.log('new list', this.selectedapps)
                    this.selectedapps = [];
                    this.allapps.forEach(app => {
                        if(app.show === 1){
                            this.selectedapps.push(app);
                        }
                    })
                    //this.count = this.selectedapps.length;
                }
                if (type != "All"){
                    this.selectedapps = [];
                    this.allapps.forEach(app => {
                        if(app.platforms.includes(type) && app.show === 1){
                            this.selectedapps.push(app);
                        }
                    });
                    //console.log('new list', this.selectedapps)
                }
            }else{
                this.selectedapps = [];
                this.allapps.forEach(app => {
                    if(app.recent === 1 && app.show === 1){
                        this.selectedapps.push(app);
                    }
                });
                //console.log('new list', this.selectedapps)
            }
        },
        openPhotoModal(project){
            this.$emit('open-photo-modal', project);
        }
    }
}
</script>

<style>
    .circular-font{
        font-family: 'Circular Std';
    }
</style>