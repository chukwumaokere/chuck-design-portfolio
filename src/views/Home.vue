<template>
<div class="flex container flex-col mx-auto h-screen pt-16">
  <Navbar />
  <Main />
  <Skills />
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';
import Main from '@/components/Main';
import Skills from '@/components/Skills';

export default {
  name: 'Home',
  components: {
    Navbar,
    Main,
    Skills,
  }
}
</script>
