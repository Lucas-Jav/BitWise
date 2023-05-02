<template>
  <div class="home">
    
    
  </div>
</template>

<script>


  export default {
    name: 'HomeView',
    created() {
      document.title = 'BitWise';
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      if (userId && token) {
        this.$router.push('/user/' + localStorage.getItem('userId') + '/home');
      } else {
        localStorage.removeItem('userId')
        localStorage.removeItem('token')
      }
    }
  }
  
</script>


<style scoped>

  div.home {
    height: 100vh;
  }

</style>