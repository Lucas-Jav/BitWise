<template>
    <section>
        <div>
            <h2>User home</h2>
            <p>ID: {{ $route.params.id }}</p>
        </div>
    </section>
</template>

<style scoped>

    section {
        width: 100%;
        min-height: 100vh;
        padding: 50px 10%;
    }

</style>