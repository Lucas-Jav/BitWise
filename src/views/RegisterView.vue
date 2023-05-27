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
                <img src="https://img.icons8.com/ios/100/null/username.png" class="icon" alt="icon" loading="lazy"/>
                <input placeholder="Write your username" title="Username do usuario" name="input-username" type="text" class="input_field"
                    v-model="username_register" pattern="^[a-zA-Z0-9_]{7,15}$" required>
            </div>

            <div class="input_container">
                <label class="input_label" for="email_field">Email</label>
                <img src="https://img.icons8.com/ios/100/null/apple-mail.png" class="icon" alt="icon" loading="lazy"/>
                <input placeholder="name@mail.com" title="Email do usuario" name="input-name" type="text" class="input_field"
                    v-model="email_register" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required>
            </div>
            <div class="input_container">
                <label class="input_label" for="password_field">Password</label>
                <img src="https://img.icons8.com/ios/100/null/password--v1.png" class="icon" alt="icon" loading="lazy"/>
                <input placeholder="Password" title="Password do usuario" name="input-password" type="password" class="input_field"
                    v-model="password_register" pattern="^.{5,}$" required>
            </div>
            <div class="input_container">
                <label class="input_label" for="password_field">Confirm Password</label>
                <img src="https://img.icons8.com/ios/100/null/password--v1.png" class="icon" alt="icon" loading="lazy"/>
                <input placeholder="Password" title="Confirme password" name="input-password-confirm" type="password" class="input_field"
                    v-model="password_confirm_register" @keyup="passwordConfirm" pattern="^.{5,}$" required>
            </div>
            <div class="input_container">
                <label for="data_field" class="input_label">Date</label>
                <img src="https://img.icons8.com/ios/100/null/calendar-10.png" class="icon" alt="icon" loading="lazy"/>
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

    input[type="date"]:required:focus {
        outline: 1px solid #000 !important;
        border: 1px solid #000 !important;
    }

    input[type="date"]:required:focus:valid {
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