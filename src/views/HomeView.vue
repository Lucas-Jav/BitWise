<template>
  <div class="home">
    
    
  </div>
</template>

<script>


  export default {
    name: 'HomeView',
    created() {
      if (localStorage.getItem('token')) {
        this.$router.push('/user/' + localStorage.getItem('userId') + '/home');
      }
    }
  }
  
</script>


<style scoped>

  div.home {
    height: 100vh;
  }

</style>