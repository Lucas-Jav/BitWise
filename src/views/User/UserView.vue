<template>
    <section>
        <routerView></routerView>
    </section>
</template>

<script>


    export default {
        name: 'UserView',
        created() {
            if (localStorage.getItem('token')) {
                this.$router.push('/user/' + localStorage.getItem('userId') + '/home');
            }
        }
    }

</script>

<style scoped>

    section {
        width: 100%;
        min-height: 100vh;
        padding: 50px 10%;
    }


</style>