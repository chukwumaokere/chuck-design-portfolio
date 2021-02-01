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
              <section class="mx-auto h-full flex sm:flex-col"> <!-- remove max-w-2x -->
                <h2 class="text-4xl text-center tracking-wide font-extrabold circular-font leading-loose mb-2 dark:text-gray-100">{{project.name}}</h2>
                <div class="h-full flex sm:flex-row">
                  <div class="h-100 shadow-2xl relative">

                    <!-- large image on slides -->
                    <div v-for="(image, key) in project.images"  :key="key" class="mySlides hidden">
                        <div class="w-full object-cover"> 
                            <img class="max-w-full mx-auto cursor-pointer" :src="image" @click="openImage(image)" :alt="image.replace('images/project-images-unsorted/', '')" />
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
                    
                    <div class="flex sm:flex-row">
                      <span class="dark:text-gray-200 sm:whitespace-nowrap">Tech Used: </span><div class="flex sm:flex-row sm:flex-wrap sm:ml-2"><span class="bg-green-600 px-1 sm:px-2 rounded text-gray-100 sm:mr-3 sm:mb-2"  v-for="(tech_val, key) in project.tech" :key="key" >{{tech_val}}</span></div>
                    </div>
                    <br>
                    <div class="flex sm:flex-row">
                      <span class="dark:text-gray-200 sm:whitespace-nowrap">Platforms: </span><div class="flex sm:flex-row sm:flex-wrap sm:ml-2"><span class="bg-red-600 px-1 sm:px-2 rounded text-gray-100 sm:mr-3 sm:mb-2" v-for="(platform, key) in project.platforms" :key="key">{{platform}}</span></div>
                    </div>
                    <br>
                    <div class="flex sm:flex-row">
                      <span class="dark:text-gray-200 sm:whitespace-nowrap">Languages: </span><div class="flex sm:flex-row sm:flex-wrap sm:ml-2"><span class="bg-blue-600 px-1 sm:px-2 rounded text-gray-100 sm:mr-3 sm:mb-2" v-for="(language, key) in project.languages" :key="key">{{language}}</span></div>
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

export default {
  emits: ['close-modal'],
  components: {

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