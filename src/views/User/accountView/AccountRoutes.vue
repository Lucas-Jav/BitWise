<template>
    <section>
        <div class="top" v-show="$route.name != 'selectCard'">
            <router-link :to="'/user/' + $route.params.id + '/account/select'">Your Account</router-link>
            <span>></span>
            <span>{{ $route.name }}</span>
        </div>
        <router-view></router-view>
    </section>
</template>

<script>

    export default {
        name: 'contaview',
    }

</script>

<style scoped>

    section {
        width: 100%;
        min-height: 80vh;
        padding: 50px 11%;
    }

    @media (max-width: 1547px) {
        section {
            padding: 50px 5%;
        }
    }

    @media (max-width: 425px) {
        section {
            padding: 50px 0px;
        }
    }

    div.top {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 10px;
        padding: 0 30px;
    }

    div.top a {
        opacity: .8;
        font-size: 0.9em;
        padding: 0;
        cursor: pointer;
        background-image: linear-gradient(
            transparent 0%,
            transparent 90%,
            #111 96%,
            #111 100%
        );
        background-repeat: no-repeat;
        background-size: 0% 100%;
        background-position-x: right;
        transition:  background-size 300ms;
    }


    div.top a:hover {
        opacity: 1;
        transition: 1s;
        background-size: 100% 100%;
        background-position-x: left;
    }

    div.top span {
        font-size: 1em;
        font-weight: 400;
    }

</style>