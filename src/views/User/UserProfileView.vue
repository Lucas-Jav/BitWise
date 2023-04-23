<template>
    <div>
        <h2>User Profile</h2>
        <p>ID: {{ $route.params.id }}</p>
    </div>
</template>

<script>


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
                        cpf: data.cpf
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