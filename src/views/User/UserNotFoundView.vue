<template>
    <section>
        <div>
            <h1><strong>404</strong></h1>
            <span>Page Not Found</span>
            <button @click="checkUser">Voltar</button>
        </div>
    </section>
</template>

<script>

    export default {
        name: 'UserNotFoundView',
        methods: {
            checkUser() {
                const userId = localStorage.getItem('userId');
                const token = localStorage.getItem('token')

                if (userId || token) {
                    this.$router.push('/user/' + userId + '/home');
                } else {
                    this.$router.go(-1);
                }
            }
        }
    }

</script>

<style scoped>

    section {
        min-height: 100vh;
        width: 100%;
        padding: 50px 10%;
        display: flex;
        justify-content: center;
    }

    div {
        width: max-content;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    div h1 {
        font-size: 8rem;
        font-weight: 800;
    }

    div span {
        font-size: 3rem;
        text-align: center;
    }

    div button {
        border: 1px solid #000;
        padding: 10px;
        border-radius: 8px;
        font-size: 2rem;
        transition: 0.5s;
        cursor: pointer;
    }

    div button:hover {
        background-color: #000;
        color: #fff;
    }

</style>