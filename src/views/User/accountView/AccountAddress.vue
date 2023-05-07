<template>
    <main>
        
    </main>
</template>

<script>

    export default {
        name: 'addressUser',
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
            document.title = 'Seus endereços';
            this.getUserApi()
        }
    }

</script>