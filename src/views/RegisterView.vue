<template>
    <section class="register">
        <form class="form_container" @submit="registerNewUser" v-if="registrado">
            <img :src="logo" alt="logo" class="logo_container" loading="lazy">
            <div class="title_container">
                <p class="title">Criar sua conta</p>
                <span class="subtitle">Comece a usar nossa plataforma, basta criar uma conta e aproveitar a experiência.</span>
            </div>
            <br>
            <span v-if="error" class="msgError">{{ msgError }}</span>
            <br>
            <div class="input_container">
                <label class="input_label" for="name_field">Name</label>
                <img src="https://img.icons8.com/ios/50/null/name--v1.png" class="icon" alt="icon" loading="lazy"/>
                <input placeholder="Write your name" title="Nome do usuario" name="input-name" type="text" class="input_field"
                    v-model="name_register" pattern="^[A-Za-zÀ-ÖØ-öø-ÿ\s]{8,20}$" required>
            </div>

            <div class="input_container">
                <label class="input_label" for="username_field">Username</label>
                <img src="https://img.icons8.com/ios/50/null/name--v1.png" class="icon" alt="icon" loading="lazy"/>
                <input placeholder="Write your username" title="Username do usuario" name="input-username" type="text" class="input_field"
                    v-model="username_register" pattern="^[a-zA-Z0-9_]{7,15}$" required>
            </div>

            <div class="input_container">
                <label class="input_label" for="email_field">Email</label>
                <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                        d="M7 8.5L9.94202 10.2394C11.6572 11.2535 12.3428 11.2535 14.058 10.2394L17 8.5"></path>
                    <path stroke-linejoin="round" stroke-width="1.5" stroke="#141B34"
                        d="M2.01577 13.4756C2.08114 16.5412 2.11383 18.0739 3.24496 19.2094C4.37608 20.3448 5.95033 20.3843 9.09883 20.4634C11.0393 20.5122 12.9607 20.5122 14.9012 20.4634C18.0497 20.3843 19.6239 20.3448 20.7551 19.2094C21.8862 18.0739 21.9189 16.5412 21.9842 13.4756C22.0053 12.4899 22.0053 11.5101 21.9842 10.5244C21.9189 7.45886 21.8862 5.92609 20.7551 4.79066C19.6239 3.65523 18.0497 3.61568 14.9012 3.53657C12.9607 3.48781 11.0393 3.48781 9.09882 3.53656C5.95033 3.61566 4.37608 3.65521 3.24495 4.79065C2.11382 5.92608 2.08114 7.45885 2.01576 10.5244C1.99474 11.5101 1.99475 12.4899 2.01577 13.4756Z">
                    </path>
                </svg>
                <input placeholder="name@mail.com" title="Email do usuario" name="input-name" type="text" class="input_field"
                    v-model="email_register" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
            </div>
            <div class="input_container">
                <label class="input_label" for="password_field">Password</label>
                <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                        d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22">
                    </path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                        d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
                    <path fill="#141B34"
                        d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z">
                    </path>
                </svg>
                <input placeholder="Password" title="Password do usuario" name="input-password" type="password" class="input_field"
                    v-model="password_register" pattern="^.{5,}$" required>
            </div>
            <div class="input_container">
                <label class="input_label" for="password_field">Confirm Password</label>
                <svg fill="none" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg" class="icon">
                    <path stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                        d="M18 11.0041C17.4166 9.91704 16.273 9.15775 14.9519 9.0993C13.477 9.03404 11.9788 9 10.329 9C8.67911 9 7.18091 9.03404 5.70604 9.0993C3.95328 9.17685 2.51295 10.4881 2.27882 12.1618C2.12602 13.2541 2 14.3734 2 15.5134C2 16.6534 2.12602 17.7727 2.27882 18.865C2.51295 20.5387 3.95328 21.8499 5.70604 21.9275C6.42013 21.9591 7.26041 21.9834 8 22">
                    </path>
                    <path stroke-linejoin="round" stroke-linecap="round" stroke-width="1.5" stroke="#141B34"
                        d="M6 9V6.5C6 4.01472 8.01472 2 10.5 2C12.9853 2 15 4.01472 15 6.5V9"></path>
                    <path fill="#141B34"
                        d="M21.2046 15.1045L20.6242 15.6956V15.6956L21.2046 15.1045ZM21.4196 16.4767C21.7461 16.7972 22.2706 16.7924 22.5911 16.466C22.9116 16.1395 22.9068 15.615 22.5804 15.2945L21.4196 16.4767ZM18.0228 15.1045L17.4424 14.5134V14.5134L18.0228 15.1045ZM18.2379 18.0387C18.5643 18.3593 19.0888 18.3545 19.4094 18.028C19.7299 17.7016 19.7251 17.1771 19.3987 16.8565L18.2379 18.0387ZM14.2603 20.7619C13.7039 21.3082 12.7957 21.3082 12.2394 20.7619L11.0786 21.9441C12.2794 23.1232 14.2202 23.1232 15.4211 21.9441L14.2603 20.7619ZM12.2394 20.7619C11.6914 20.2239 11.6914 19.358 12.2394 18.82L11.0786 17.6378C9.86927 18.8252 9.86927 20.7567 11.0786 21.9441L12.2394 20.7619ZM12.2394 18.82C12.7957 18.2737 13.7039 18.2737 14.2603 18.82L15.4211 17.6378C14.2202 16.4587 12.2794 16.4587 11.0786 17.6378L12.2394 18.82ZM14.2603 18.82C14.8082 19.358 14.8082 20.2239 14.2603 20.7619L15.4211 21.9441C16.6304 20.7567 16.6304 18.8252 15.4211 17.6378L14.2603 18.82ZM20.6242 15.6956L21.4196 16.4767L22.5804 15.2945L21.785 14.5134L20.6242 15.6956ZM15.4211 18.82L17.8078 16.4767L16.647 15.2944L14.2603 17.6377L15.4211 18.82ZM17.8078 16.4767L18.6032 15.6956L17.4424 14.5134L16.647 15.2945L17.8078 16.4767ZM16.647 16.4767L18.2379 18.0387L19.3987 16.8565L17.8078 15.2945L16.647 16.4767ZM21.785 14.5134C21.4266 14.1616 21.0998 13.8383 20.7993 13.6131C20.4791 13.3732 20.096 13.1716 19.6137 13.1716V14.8284C19.6145 14.8284 19.619 14.8273 19.6395 14.8357C19.6663 14.8466 19.7183 14.8735 19.806 14.9391C19.9969 15.0822 20.2326 15.3112 20.6242 15.6956L21.785 14.5134ZM18.6032 15.6956C18.9948 15.3112 19.2305 15.0822 19.4215 14.9391C19.5091 14.8735 19.5611 14.8466 19.5879 14.8357C19.6084 14.8273 19.6129 14.8284 19.6137 14.8284V13.1716C19.1314 13.1716 18.7483 13.3732 18.4281 13.6131C18.1276 13.8383 17.8008 14.1616 17.4424 14.5134L18.6032 15.6956Z">
                    </path>
                </svg>
                <input placeholder="Password" title="Confirme password" name="input-password-confirm" type="password" class="input_field"
                    v-model="password_confirm_register" @keyup="passwordConfirm" pattern="^.{5,}$" required>
                    
            </div>
            <div class="input_container">
                <label for="data_field" class="input_label">Date</label>
                <img src="https://img.icons8.com/ios/50/null/calendar-10.png" class="icon" alt="icon" loading="lazy"/>
                <input type="date" name="input-date" class="input_field" v-model="date_register" required>
            </div>
            <button title="Sign In" type="submit" class="sign-in_btn">
                <span>Register</span>
            </button>
            <p class="note">Terms of use &amp; Conditions</p>
        </form>
        <div class="form_container" v-else>
            <img src="https://img.icons8.com/color/96/null/verified-account--v1.png" alt="verifique" loading="lazy"/>
            <h2>Parabéns!</h2>
            <span>Sua conta foi criada com sucesso. Você já pode fazer login e começar a 
                explorar todos os recursos disponíveis em nosso site. Agradecemos por se juntar à 
                nossa comunidade e esperamos que você tenha uma ótima experiência conosco.
            </span>
            <router-link to="/login">
                <strong>Login</strong> 
            </router-link>
        </div>
    </section>
</template>

<script>
    import logoimg from '@/assets/logo-navbar.png'
    const dayjs = require('dayjs')
    import axios from 'axios'
    import { generate } from 'gerador-validador-cpf'


    export default {
        name: 'RegisterView',
        data() {
            return {
                logo: logoimg,
                registrado: true, // true por padrao
                error: false, // false por padrao
                msgError: '',
                name_register: '',
                username_register: '',
                email_register: '',
                password_register: '',
                password_confirm_register: '',
                date_register: '',
                date_to_register: '',
                cpf: '',
                cep: '',
                token: '',
                imgPerfil: '',
                cart: [],
                bought: [],
                logged: false
            }
        },
        methods: {
            async registerNewUser(e) {
                e.preventDefault();
                let emailEqual;
                let usernameEqual;

                await axios.get('http://localhost:3000/users').then((response) => {
                    
                    emailEqual = this.checkEmail(this.email_register, response.data); // função verifica se existe um email igual cadastrado
                    usernameEqual = this.checkUsername(this.username_register, response.data); // função verifica se existe um username igual cadastrado

                    if (this.password_register === this.password_confirm_register && emailEqual && usernameEqual) {
                        
                        this.date_to_register = dayjs().format('DD/MM/YYYY'); // data do dia criado
                        this.cpf = generate({ format: true }); // gera um cpf aleatorio

                        const data = {
                            name: this.name_register,
                            username: this.username_register,
                            logged: this.logged,
                            email: this.email_register,
                            password: this.password_register,
                            birthday: dayjs(this.date_register).format('DD/MM/YYYY'),
                            account_created: this.date_to_register,
                            cpf: this.cpf,
                            cep: this.gerarCEP(),
                            token: this.generateToken(),
                            img: this.gerarImg(),
                            cart: this.cart,
                            bought: this.bought
                        }

                        axios({                               // cadastra o usuario
                            method: 'Post',
                            url: 'http://localhost:3000/users',
                            data: data
                        }).then((res)=> {
                            document.querySelector('form').reset();
                            this.registrado = !this.registrado;
                        })

                    } else {
                        this.error = true;

                        if (this.password_register === this.password_confirm_register && usernameEqual) {
                            this.msgError = `Parece que o e-mail que você inseriu já está em uso em nossa plataforma.`;
                            this.email_register = '';
                            emailEqual = '';
                        } else if(!usernameEqual) {
                            this.msgError = `Parece que o username que você inseriu já está em uso em nossa plataforma.`;
                            this.username_register = '';
                            usernameEqual = '';
                        } else {
                            this.msgError = 'Senhas não batem!';
                            this.password_confirm_register = '';
                        }
                        

                        setTimeout(() => {
                            this.error = false;
                            this.msgError = '';
                        }, 5000);

                    }

                })
            },
            checkEmail(email, usuarios) {
                for (let i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].email === email) {
                        return false;
                    }
                }
                return true;
            },
            checkUsername(username, usuarios) {
                for (let i = 0; i < usuarios.length; i++) {
                    if (usuarios[i].username === username) {
                        return false;
                    }
                }
                return true;
            },
            passwordConfirm(e) {
                const input = e.target;

                if (this.password_register === this.password_confirm_register) {
                    input.classList.add('passwordTrue');
                    input.classList.remove('passwordFalse');
                } else {
                    input.classList.remove('passwordTrue');
                    input.classList.add('passwordFalse');
                }
            },
            gerarCEP() {
                let cep = '';
                for (let i = 0; i < 8; i++) {
                    cep += Math.floor(Math.random() * 10);
                    if (i == 1) {
                        cep += '';
                    }
                    if (i == 4) {
                        cep += '-';
                    }
                }
                    return cep;
            },
            gerarImg() {
                const numberRandom = Math.floor(Math.random() * 5000) + 1;
                const img = `https://avatars.dicebear.com/api/bottts/${numberRandom}.svg`;
                
                return img;
            },
            generateToken() {
                const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                const numbers = '0123456789';
                let token = '';
                
                for (let i = 0; i < 5; i++) {
                    token += letters.charAt(Math.floor(Math.random() * letters.length));
                }
                
                for (let i = 0; i < 5; i++) {
                    token += numbers.charAt(Math.floor(Math.random() * numbers.length));
                }

                return token;
            }
        },
        created() {
            if (localStorage.getItem('token')) {
                this.$router.push('/user/' + localStorage.getItem('userId') + '/home');
            }
        },
    }

</script>

<style scoped>
    section.register {
        width: 100%;
        min-height: 100vh;
        padding: 50px 10%;
        display: flex;
        justify-content: center
    }

    input[type="date"] {
        color: #8B8E98;
    }

    input:focus {
        outline: none;
        border: none;
    }

    .passwordTrue {
        outline: 1px solid #16a016 !important;
        border: 1px solid #16a016 !important;
    }

    .passwordFalse {
        outline: 1px solid #c9001b !important;
        border: 1px solid #c9001b !important;
    }


    input[type="date"]:not(:focus) {
        outline: none !important;
        border: 1px solid #e5e5e5 !important;
    }

    input[type="date"]:not(:focus):required:valid {
        outline: 1px solid #16a016 !important;
        border: 1px solid #16a016 !important;
    }


    input:required:valid {
        outline: 1px solid #16a016;
        border: 1px solid #16a016;
    }

    input:required:not(:placeholder-shown):invalid  {
        outline: 1px solid #c9001b;
        border: 1px solid #c9001b;
    }

    div.form_container {
        max-width: 400px;
    }

    div.form_container h2{
        font-size: 1.5rem;
    }

    div.form_container span{
        font-size: 1rem;
        text-align: justify;
        color: #000000d7;
        font-weight: 500;
        line-height: 1.5;
    }

    div.form_container a {
        padding: 5px;
        text-align: center;
        border-radius: 6px;
        cursor: pointer;
        width: 100%;
        border: 1px solid #000;
        background: #000;
        color: #fff;
    }
</style>