<template>
  <div class="h-screen w-screen flex z-10 bg-black dark:bg-opacity-60 bg-opacity-40 fixed overflow-auto top-0 left-0 p-10 sm:p-0">
      <div class="container m-auto h-auto sm:w-auto sm:h-auto bg-white rounded-xl p-5 sm:p-8 dark:bg-gray-700">
        <div class="container h-auto">
            
            <div class="h-full relative">
              <button @click="closeModal" class="float-right">
                <svg class="w-6 h-6 dark:text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
                    <section class="mx-auto max-w-2xl">
                      <h2 class="text-4xl text-center tracking-wide font-extrabold circular-font leading-loose mb-2 dark:text-gray-100">{{project.name}}</h2>
                      <div class="shadow-2xl relative">
                        <!-- large image on slides -->
                        <div class="mySlides hidden">
                          <div class="w-full object-cover"> 
                            <img class="w-1/2" :src="project.placeholder_img" />
                          </div>
                        </div>
                        <div class="mySlides hidden">
                          <div class="image2 w-full object-cover"></div>
                        </div>
                        <div class="mySlides hidden">
                          <div class="image3 w-full object-cover"></div>
                        </div>
                        <div class="mySlides hidden">
                          <div class="image4 w-full object-cover"></div>
                        </div>
                        <div class="mySlides hidden">
                          <div class="image5 w-full object-cover"></div>
                        </div>

                        <!-- butttons -->
                        <a class="absolute left-0 inset-y-20 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold" onclick="plusSlides(-1)">❮</a>
                        <a class="absolute right-0 inset-y-20 flex items-center -mt-32 px-4 text-white hover:text-gray-800 cursor-pointer text-3xl font-extrabold" onclick="plusSlides(1)">❯</a>

                        <!-- image description -->
                        <div class="text-center text-white font-light tracking-wider bg-gray-800 py-2">
                          <p id="caption" class="text-gray-200">{{project.placeholder_img}}</p>
                        </div>

                        <!-- smaller images under description -->
                        <div class="flex">
                          <div>
                            <img class="image1 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" @click="currentSlide(1)" :alt="project.placeholder_img">
                          </div>
                          <div>
                            <img class="image2 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" @click="currentSlide(2)" alt="Lawnmower">
                          </div>
                          <div>
                            <img class="image3 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" @click="currentSlide(3)" alt="Globe">
                          </div>
                          <div>
                            <img class="image4 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" @click="currentSlide(4)" alt="Optical Illusion">
                          </div>
                          <div>
                            <img class="image5 description h-24 opacity-50 hover:opacity-100 cursor-pointer" src="#" @click="currentSlide(5)" alt="Lips">
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
import { onMounted } from 'vue'
export default {
  emits: ['close-modal'],
  props:{
    project: Object,
  },
    setup(){

        onMounted(() =>{
            var slideIndex = 1;
            showSlides(slideIndex);
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              var dots = document.getElementsByClassName("description");
              //var captionText = document.getElementById("caption");
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
              //captionText.innerHTML = dots[slideIndex - 1].alt;
            }

          return{
            showSlides,
            currentSlide,
            plusSlides,
          }
        })
        //JS to switch slides and replace text in bar//
        
        return{
        }
    },
    methods: {
      closeModal(){
        this.$emit('close-modal');
      }
    }
}
</script>

<style>
  /*each image is referenced twice in the HTML, but each image only needs to be updated in the CSS*/
  .image1 {
    content: url("https://randomwordgenerator.com/img/picture-generator/52e4d7434f51a914f1dc8460962e33791c3ad6e04e5074417d2c7ed09f4acc_640.jpg")
  }
  .image2 {
    content: url("https://randomwordgenerator.com/img/picture-generator/55e8d146425bb10ff3d8992cc12c30771037dbf852547848702a7fd19545_640.jpg")
  }
  .image3 {
    content: url("https://randomwordgenerator.com/img/picture-generator/55e8d24b4257ac14f1dc8460962e33791c3ad6e04e507440752972d3924cc6_640.jpg")
  }
  .image4 {
    content: url("https://randomwordgenerator.com/img/picture-generator/55e0d44b4b56a414f1dc8460962e33791c3ad6e04e5074417c2d78d2954bcd_640.jpg")
  }
  .image5 {
    content: url("https://randomwordgenerator.com/img/picture-generator/5ee3dc414954b10ff3d8992cc12c30771037dbf85254794e732f7ad7934e_640.jpg")
  }

  .circular-font{
    font-family: 'Circular Std';
  }
</style>