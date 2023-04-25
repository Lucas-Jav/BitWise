<template>
    <section class="modais">
        <header class="modalheader">
            <img :src="logo" alt="logo" loading="lazy">
            <button @click="$emit('closeModal')">
                <strong>X</strong>
            </button>
        </header>
        <main>

        </main>
        <footer v-if="$route.params.id || userId" class="modalfooter"> <!-- section for mobile logged -->
            <router-link to="" class="login" @click="$emit('closeModal'),$emit('logout')">
                <strong>Exit</strong>
            </router-link>
        </footer>
        <footer v-else class="modalfooter"> <!-- section for mobile not logged -->
            <router-link to="/login" class="login" @click="$emit('closeModal')">
                <strong>Login</strong>
            </router-link>
            <router-link to="/register" @click="$emit('closeModal')">
                <strong>Register</strong>
            </router-link>
        </footer>
    </section>
</template>

<script>

    export default {
        name: 'ModalHeader',
        props: {
            logo: String,
            userId: String
        },
        emits: [
            'closeModal',
            'logout'
        ]
    }

</script>

<style scoped>

    section.modais {
        display: flex;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: #fff;
        top: 0;
        z-index: 100;
    }

    header.modalheader {
        width: 100%;
        height: 70px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10%;
        border-bottom: 2px solid #000;
    }

    header.modalheader img {
        height: 50px;
    }

    header.modalheader button {
        font-size: 25px;
    }

    footer.modalfooter {
        width: 100%;
        height: auto;
        border-top: 2px solid #000;
        position: fixed;
        bottom: 0;
        padding: 20px 10%;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    footer.modalfooter a {
        text-align: center;
        padding: 10px;
        font-size: 25px;
        border-bottom: 1px solid transparent;
    }

    footer.modalfooter a:hover:not(.login) {
        border-bottom: 1px solid #000;
    }

    footer.modalfooter a.login {
        border: 1px solid #000;
        border-radius: 6px;
        background: #000;
        color: #fff;
    }

</style>