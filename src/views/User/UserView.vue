<template>
    <section>
        <h1>User {{ $route.params.id }}</h1>
        <router-view></router-view>
    </section>
</template>

<script>

    export default {
        name: 'UserView',
        data() {
            return {
                isLoggedIn: true
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