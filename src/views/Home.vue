<template>
<div class="flex container flex-col mx-auto h-screen pt-16">
  <Navbar />
  <div class="flex container mx-auto h-auto items-center justify-center ">
    <div class="text-center">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbar';

export default {
  name: 'Home',
  components: {

    Navbar,
  }
}
</script>
