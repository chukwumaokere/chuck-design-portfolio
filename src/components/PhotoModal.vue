<template>
  <div class="h-screen w-screen flex z-10 bg-black dark:bg-opacity-60 bg-opacity-40 fixed overflow-auto top-0 left-0 p-10 sm:p-0">
      <div class="container m-auto h-auto sm:my-16 sm:w-auto sm:h-auto bg-white rounded-xl p-5 sm:p-8 dark:bg-gray-700">
        <div class="container h-full">        
            <div class="h-full relative">
              <button @click="closeModal" class="float-right">
                <svg class="w-6 h-6 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <section class="mx-auto w-full sm:w-auto h-full flex flex-col sm:flex-col"> <!-- remove max-w-2x -->
                <h2 class="text-2xl sm:text-4xl text-center tracking-wide font-extrabold circular-font leading-loose mb-2 dark:text-gray-100">{{project.name}}</h2>
                <div class="h-full flex flex-col sm:flex-row">
                  <div class="h-100 shadow-2xl relative mb-5 sm:mb-0">

                    <!-- large image on slides -->
                    <div v-for="(image, key) in project.images"  :key="key" class="mySlides hidden">
                        <div class="w-full object-cover"> 
                            <img class="max-w-full w-2/3 mx-auto cursor-pointer" :src="image" @click="openImage(image)" :alt="image.replace('images/project-images-unsorted/', '')" />
                        </div>
                    </div>

                    <!-- butttons -->
                    <a class="absolute left-0 inset-y-20 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"  id="prevSlideButton">❮</a>
                    <a class="absolute right-0 inset-y-20 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold"  id="nextSlideButton">❯</a>

                    <!-- image description -->
                    <div class="text-center text-white font-light tracking-wider bg-gray-800 py-2">
                      <p id="caption" class="text-gray-200">{{project.placeholder_img}}</p>
                    </div>

                    <!-- smaller images under description -->               
                    <div class="flex flex-row flex-wrap  overflow-y-hidden h-1/3">
                      <div v-for="(image, key) in project.images" @click="currentSlide(key)" :key="key" >
                          <img class="description h-24 opacity-50 hover:opacity-100 cursor-pointer" :src="image" :alt="image.replace('images/project-images-unsorted/', '')">
                      </div>
                      <div class="hidden">
                        <img class="image1 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" @click="currentSlide(1)" :alt="project.placeholder_img">
                      </div>
                    </div>
                    
                  </div>

                  <div class="sm:ml-8 h-100 sm:max-w-xl relative flex flex-col">
                    <span class="text-xl pb-2 dark:text-gray-50 sm:whitespace-nowrap">Product Description</span>
                    <span class="dark:text-gray-200">{{project.desc}}</span>
                    <br>
                    <span class="text-xl pb-2 dark:text-gray-50">Role</span>
                    <span class="dark:text-gray-200">{{project.role_desc}}</span>
                    <br>
                    <br>
                    
                    <div v-if="project.tech && project.tech.length > 0" class="sm:flex sm:flex-row">
                      <span class="dark:text-gray-200 sm:whitespace-nowrap">Tech Used: </span><div class="sm:flex sm:flex-row sm:flex-wrap sm:ml-2"><span class="inline-block w-max bg-green-600 px-1 sm:px-2 rounded text-gray-100 mr-2 mb-2 sm:mr-3 sm:mb-2"  v-for="(tech_val, key) in project.tech" :key="key" >{{tech_val}}</span></div>
                    </div>
                    <br>
                    <div v-if="project.platforms && project.platforms.length > 0" class="sm:flex sm:flex-row">
                      <span class="dark:text-gray-200 sm:whitespace-nowrap">Platforms: </span><div class="sm:flex sm:flex-row sm:flex-wrap sm:ml-2"><span class="inline-block w-max bg-red-600 px-1 sm:px-2 rounded text-gray-100 mr-2 mb-2 sm:mr-3 sm:mb-2" v-for="(platform, key) in project.platforms" :key="key">{{platform}}</span></div>
                    </div>
                    <br>
                    <div v-if="project.languages && project.languages.length > 0" class="sm:flex sm:flex-row">
                      <span class="dark:text-gray-200 sm:whitespace-nowrap">Languages: </span><div class="sm:flex sm:flex-row sm:flex-wrap sm:ml-2"><span class="inline-block w-max bg-blue-600 px-1 sm:px-2 rounded text-gray-100 mr-2 mb-2 sm:mr-3 sm:mb-2" v-for="(language, key) in project.languages" :key="key">{{language}}</span></div>
                    </div>

                    
                     <div class="mt-4 sm:flex sm:flex-wrap">
                      <GoToButton  v-if="project.site_url && project.site_url.apple" :href="project.site_url.apple"  target="_blank" text="View in AppStore" color="bg-red-500 hover:bg-red-700" id="RestartGame">
                        <svg class="w-5 h-5 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                      </GoToButton>
                      <GoToButton v-if="project.site_url && project.site_url.android" :href="project.site_url.android" target="_blank" text="View in Google Play" color="bg-green-500 hover:bg-green-700" id="RefundMove">
                        <svg class="w-5 h-5 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z"/>
                        </svg>
                      </GoToButton>
                      <GoToButton v-if="project.site_url && project.site_url.web" :href="project.site_url.web" target="_blank" text="View Demo" color="bg-blue-500 hover:bg-blue-700" id="RefundMove">
                        <svg class="w-5 h-5 sm:w-5 sm:h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z"/>
                          <path d="M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm13 2v2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 14a1 1 0 0 1-1-1V6h14v7a1 1 0 0 1-1 1H2z"/>
                        </svg>
                      </GoToButton>
                      <GoToButton v-if="project.site_url && project.git_repo" :href="project.git_repo" target="_blank" text="View in GitHub" color="bg-purple-500 hover:bg-purple-700" id="RefundMove">
                        <svg class="w-5 h-5 sm:w-5 sm:h-5 bi bi-github" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                        </svg>
                      </GoToButton>
                    </div>
                    
                  </div>
                  
                </div>
              </section>
            </div>
        </div>
      </div>
  </div>    
  
</template>

<script>
import { onUpdated } from 'vue';
import GoToButton from './GoToButton';
export default {
  emits: ['close-modal'],
  components: {
    GoToButton,
  },
  props:{
    project: Object,
  },
    setup(){

        onUpdated(() =>{
          //JS to switch slides and replace text in bar//
            var slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
           document.getElementById('prevSlideButton').onclick = () => {
             plusSlides(-1);
           }
           document.getElementById('nextSlideButton').onclick = () => {
             plusSlides(1);
           }

            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("description");
              var captionText = document.getElementById("caption");
              if (n > slides.length) {
                  slideIndex = 1
              }
              if (n < 1) {
                  slideIndex = slides.length
              }
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
              }
              for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" opacity-100", "");
              }
              slides[slideIndex - 1].style.display = "block";
              dots[slideIndex - 1].className += " opacity-100";
              captionText.innerHTML = dots[slideIndex - 1].alt;
            }

          return{
            showSlides,
            currentSlide,
          }
        })
  
        return{}
    },
    methods: {
      closeModal(){
        this.$emit('close-modal');
      },
      openImage(src){
        window.open(src, "_blank")  
      },
    }
}
</script>

<style>
  .circular-font{
    font-family: 'Circular Std';
  }
</style>