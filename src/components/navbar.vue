<template>
    <header>
        <router-link :to="'/user/' + ($route.params.id || userId) + '/home'" v-if="($route.params.id || (token && userId))"> <!-- logo/ancora user logado -->
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <router-link to="/" v-else> <!-- logo/ancora user deslogado -->
            <img :src="logo" :alt="alt" id="logo">
        </router-link>
        <nav class="desktop" v-if="($route.params.id || (token && userId))"> <!-- section for desktop logged-->
            <router-link :to="'/user/' + ($route.params.id || userId) + '/home'">Home</router-link>
            <router-link :to="'/user/' + ($route.params.id || userId) + '/account'">Account</router-link>
            <router-link :to="'/user/' + ($route.params.id || userId) + '/cart'">Cart</router-link>
            <router-link to="" @click="$emit('logout'),toggleModal">Exit</router-link>
        </nav>
        <nav class="desktop" v-else> <!-- section for desktop offline -->
            <router-link to="/">Home</router-link>
            <router-link to="/login">Login</router-link>
            <router-link to="/register">Register</router-link>
        </nav>
        <nav class="mobile"> <!-- section for mobile -->
            <label class="burger" for="burger">
                <input type="buttom" id="burger" @click="$emit('openModal')">
                <span></span>
                <span></span>
                <span></span>
            </label>
        </nav>
    </header>
</template>

<script>

export default {
    name: 'Navbar',
    props: {
        logo: String,
        alt: String,
        userId: String,
        token: String
    },
    emits: [
        'openModal',
        'logout'
    ]
}

</script>

<style scoped>
    nav.mobile {
        display: none;
    }

    header {
        width: 100%;
        height: 70px;
        border-bottom: 1px solid #565959;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 10%;
    }

    @media (max-width: 1552px) {
        header {
            padding: 10px 20px;
        }
    }

    header a  {
        display: flex;
        align-items: center;
    }

    header nav.desktop {
        display: flex;
        gap: 10px;
    }

    header nav.desktop a {
        cursor: pointer;
        font-size: 1rem;
        border-bottom: 1px solid transparent;
    }

    header nav.desktop a:hover {
        transition: 1s;
        border-bottom: 1px solid #111;
    }

    img {
        height: 60px;
        cursor: pointer;
    }

    @media (width <=768px) {
        img {
            height: 50px;
        }

        header nav.desktop {
            display: none !important;
            opacity: 0;
            visibility: hidden;
        }

        nav.mobile {
            display: block;
        }

        .burger {
            position: relative;
            width: 30px;
            height: 20px;
            background: transparent;
            cursor: pointer;
            display: block;
        }

        .burger input {
            display: none;
        }

        .burger span {
            display: block;
            position: absolute;
            height: 2px;
            width: 100%;
            background: black;
            border-radius: 9px;
            opacity: 1;
            left: 0;
        }

        .burger span:nth-of-type(1) {
            top: 0px;
            transform-origin: left center;
        }

        .burger span:nth-of-type(2) {
            top: 50%;
            transform: translateY(-50%);
            transform-origin: left center;
        }

        .burger span:nth-of-type(3) {
            top: 100%;
            transform-origin: left center;
            transform: translateY(-100%);
        }

        
    }
</style>