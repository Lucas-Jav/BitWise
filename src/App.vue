<template>
  <Navbar :logo="logo" alt="logo"/>
  <router-view/>
  <footerVue :logo="logo" alt="logo"/>

</template>

<script>
  import Navbar from '@/components/navbar.vue';
  import logoNav from '@/assets/logo-navbar.png'
  import FooterVue from '@/components/footer.vue';

  export default {
    name: 'App',
    data() {
      return {
        logo: logoNav
      }
    },
    components: {
      Navbar,
      FooterVue
    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100%;
    height: 100%;
  }

  a, button {
    all: unset;
  }

</style>