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
import Projects from '@/components/Projects'
import About from '@/components/About'

export default {
  name: 'Home',
  components: {
    Navbar,
    Main,
    Skills,
    Projects,
    About,
  }
}
</script>
