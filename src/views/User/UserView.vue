<template>
    <section>
        <router-view></router-view>
    </section>
</template>

<script>

    export default {
        name: 'UserView'
    }

</script>

<style scoped>

    section {
        width: 100%;
        min-height: 100vh;
        padding: 50px 10%;
    }


</style>