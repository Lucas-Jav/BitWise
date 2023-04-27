<template>
    <section>
        <routerView></routerView>
    </section>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'UserView',
        created() {
            this.segurityCheck(); // assim que carregar a pagina UserView ele verificara o user
        },
        methods: {
            async segurityCheck() { // verifica se o usuario tentou alterar o Id ou o token
                const token = localStorage.getItem('token');
                const id = localStorage.getItem('userId');

                if(token && id) {
                    await axios.get(`http://localhost:3000/users/${id}`).then((response) => {
                        const data = response.data;

                        if((data.id == id) && (data.token == token) && (data.logged)) {
                            this.$router.push('/user/' + localStorage.getItem('userId') + '/home');
                        } else {
                            axios.patch(`http://localhost:3000/users/${id}`, {
                                logged: false
                            })

                            localStorage.removeItem('token');
                            localStorage.removeItem('userID');
                            window.location.reload();
                        }

                    }).catch((error) => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('userID');
                        window.location.reload();
                    })
                }
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