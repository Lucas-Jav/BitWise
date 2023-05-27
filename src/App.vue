<template>  
  <Navbar :logo="logo" alt="logo"  @openModal="togleModal" 
  @logout="logout" :userId="IdUsuario" :token="tokenUser"/>
  <ModalMenuVue v-if="modal" :logo="logo" @closeModal="togleModal"  
  @logout="logout" :userId="IdUsuario" :token="tokenUser"/> 
  <router-view />
  <footerVue :logo="logo" alt="logo"/>
</template>

<script>
  import Navbar from '@/components/navbar.vue';
  import logoNav from '@/assets/logo-navbar.png'
  import FooterVue from '@/components/footer.vue';
  import ModalMenuVue from '@/components/modalMenu.vue';
  import axios from 'axios';

  export default {
    name: 'App',
    data() {
      return {
        logo: logoNav,
        modal: false, // false === fechado OU true === aberto
        IdUsuario: localStorage.getItem('userId') ?? false ,
        tokenUser: localStorage.getItem('token') ?? false
      }
    },
    components: {
      Navbar,
      FooterVue,
      ModalMenuVue
    },
    methods: {
      togleModal() {  // abre ou fecha o modal
        this.modal = !this.modal;
      },
      async logout() {
        this.IdUsuario = false;

        const id = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        await axios.patch(`http://localhost:3000/users/${id}`, { // bota o usuario como deslogado na aplicação
          logged: false
        })

        localStorage.removeItem('token');
        localStorage.removeItem('userId');
        this.$router.push('/login');
      }
    },
    created() {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      if (userId && token) {
        console.log('tudo okay')
      } else {
        localStorage.removeItem('userId')
        localStorage.removeItem('token')
      }
    
    }
  }

</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');


  *,
  *::before,
  *::after {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    width: 100%;
    height: 100%;
  }

  a, button {
    all: unset;
  }

  .form_container {
    width: fit-content;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 50px 40px 20px 40px;
    background-color: #ffffff;
    box-shadow: 0px 106px 42px rgba(0, 0, 0, 0.01),
      0px 59px 36px rgba(0, 0, 0, 0.05), 0px 26px 26px rgba(0, 0, 0, 0.09),
      0px 7px 15px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1);
    border-radius: 11px;
    font-family: "Inter", sans-serif;
  }

  .logo_container {
    box-sizing: border-box;
    height: 60px;
    background: linear-gradient(180deg, rgba(248, 248, 248, 0) 50%, #F8F8F888 100%);
    border: 1px solid #F7F7F8;
    border-radius: 11px;
  }

  .title_container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  .title {
    margin: 0;
    font-size: 1.25rem;
    font-weight: 700;
    color: #212121;
  }

  .subtitle {
    font-size: 0.725rem;
    max-width: 80%;
    text-align: center;
    line-height: 1.1rem;
    color: #8B8E98
  }

  .input_container {
    width: 100%;
    height: fit-content;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .icon {
    width: 20px;
    position: absolute;
    z-index: 99;
    left: 12px;
    bottom: 9px;
  }

  .input_label {
    font-size: 0.75rem;
    color: #8B8E98;
    font-weight: 600;
  }

  .input_field {
    width: auto;
    height: 40px;
    padding: 0 0 0 40px;
    border-radius: 7px;
    outline: none;
    border: 1px solid #e5e5e5;
    filter: drop-shadow(0px 1px 0px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    transition: all 0.3s cubic-bezier(0.15, 0.83, 0.66, 1);
  }

  .input_field:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 0px 2px #242424;
    background-color: transparent;
  }

  .sign-in_btn {
    width: 100%;
    height: 40px;
    border: 0;
    background: #000;
    border-radius: 7px;
    outline: none;
    text-align: center;
    color: #ffffff;
    cursor: pointer;
    margin-top: 10px;
  }

  .sign-in_ggl {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #ffffff;
    border-radius: 7px;
    outline: none;
    color: #242424;
    border: 1px solid #e5e5e5;
    filter: drop-shadow(0px 1px 0px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    cursor: pointer;
  }

  .sign-in_apl {
    width: 100%;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #212121;
    border-radius: 7px;
    outline: none;
    color: #ffffff;
    border: 1px solid #e5e5e5;
    filter: drop-shadow(0px 1px 0px #efefef)
      drop-shadow(0px 1px 0.5px rgba(239, 239, 239, 0.5));
    cursor: pointer;
  }

  .separator {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    color: #8B8E98;
  }

  .separator .line {
    display: block;
    width: 100%;
    height: 1px;
    border: 0;
    background-color: #e8e8e8;
  }

  .note {
    font-size: 0.75rem;
    color: #8B8E98;
    text-decoration: underline;
  }

  .msgError {
    border: 1px solid #c9001b;
    padding: 5px;
    font-size: 15px;
    max-width: 490px;
    border-radius: 6px;
    color: #c9001b;
    background: #e4445a6c;
  }

</style>