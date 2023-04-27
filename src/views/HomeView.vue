<template>
  <div class="home">
    
    
  </div>
</template>

<script>


  export default {
    name: 'HomeView',
    created() {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      if (userId && token) {
        this.$router.push('/404');
      } else {
        localStorage.removeItem('userId')
      }
    }
  }
  
</script>


<style scoped>

  div.home {
    height: 100vh;
  }

</style>