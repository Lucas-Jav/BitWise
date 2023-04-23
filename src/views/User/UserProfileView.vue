<template>
    <main>
        <div class="person">
            <img :src="user.img" :alt="'img-' + user.name">
            <h2>{{ user.name }}</h2>
            <span><strong>ID:</strong>{{ user.id }}</span>
        </div>
        
        
    </main>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'UserProfileView',
        data() {
            return {
                user: {
                    id: '',
                    name: '',
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
            async getUserApi(id) {
                await axios.get(`http://localhost:3000/users/${id}`).then((response) => {
                    const data = response.data;
                    

                    this.user = {
                        id: data.id,
                        name: data.name,
                        email: data.email,
                        password: data.password,
                        birthday: data.birthday,
                        cpf: data.cpf,
                        cep: data.cep,
                        img: data.img,
                    }

                    console.log(this.user)
                    
                })
            }
        },
        created() {
            const userId = this.$route.params.id
            this.getUserApi(userId);
        }
    }

</script>

<style scoped>

    div.person {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    div.person img{
        width: 100px;
    }


</style>