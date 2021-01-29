<template>
<div class="p-10 sm:flex sm:container sm:flex-col sm:mx-0 sm:px-64 sm:w-full sm:max-w-full h-full sm:pt-16 bg-white dark:bg-gray-700">
  <EmailModal :class="modal_hidden" @close-modal="hideEmailModal" />
  <Navbar class="mb-6 sm:mb-20" @open-email-modal="showEmailModal"  @toggle-dark-mode="toggleDarkMode" />
  <Main id="main" class="mb-12 sm:mb-20"/>
  <Skills id="skills" class="mb-14 sm:mb-20"/>
  <Projects id="projects" class="mb-14 sm:mb-20"/>
  <About id="about" class="pb-14 sm:pb-20"/>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import About from '@/components/About';
import EmailModal from "@/components/EmailModal";
import {ref} from 'vue';
export default {
  name: 'Home',
  components: {
    Navbar,
    Main,
    Skills,
    Projects,
    About,
    EmailModal,
  },
  setup(){
    let modal_hidden = ref("hidden");
    
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark')
        localStorage.setItem('theme', 'dark');
        console.log('setting theme to dark in localstorage');
    } else {
        document.querySelector('html').classList.remove('dark')
        localStorage.setItem('theme', '');
        console.log('setting theme to light in localstorage');
    }
    return {
      modal_hidden,
    }
  },
  methods: {
    showEmailModal(){
      if(this.modal_hidden == "hidden"){
        //console.log('showing email modal');
        this.modal_hidden = "block";
      }
    },
    hideEmailModal(){
      if(this.modal_hidden == "block"){
        //console.log('hiding email modal');
        this.modal_hidden = "hidden";
      }
    },
    toggleDarkMode(){
      if(localStorage.theme === 'dark'){
          console.log('switching theme to white');
          localStorage.setItem('theme', '');
          document.querySelector('html').classList.remove('dark')
      }else if(localStorage.theme===''){
          console.log('switching theme to dark');
          localStorage.setItem('theme', 'dark');
          document.querySelector('html').classList.add('dark')
      }
    }
  }
}
</script>
