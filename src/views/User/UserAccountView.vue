<template>
    <main>
        <div class="person">
            
            
        </div>
        
        
    </main>
</template>

<script>

    export default {
        name: 'UserAccountView',
        props: ['dados'],
        data() {
            return {
                user: {
                    id: '',
                    name: '',
                    username: '',
                    email: '',
                    password: '',
                    birthday: '',
                    cpf: '',
                    cep: '',
                    img: '',
                    cart: [],
                    bought: []
                }
            }
        },
        methods: {
            getUserApi() {
                const data = this.dados;
                    this.user = {
                        id: data.id,
                        name: data.name,
                        username: data.username,
                        email: data.email,
                        password: data.password,
                        birthday: data.birthday,
                        cpf: data.cpf,
                        cep: data.cep,
                        img: data.img,
                    }

                return this.user;
            }
        },
        created() {
            document.title = 'Your Account';
            this.getUserApi();
        }
    }

</script>

<style scoped>

    div.person {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
    }

    div.person img{
        width: 120px;
    }

    


</style>