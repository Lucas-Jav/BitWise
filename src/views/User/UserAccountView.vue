<template>
    <main>
        <div class="person">
            <h2>Sua conta</h2>
            
            <div class="cards">
                <router-link class="card" v-for="(card, key) in cards" :to="card.link"  :key="key">
                <img :src="card.src" alt="icon" loading="lazy">
                <div class="content">
                    <h1>{{ card.title }}</h1>
                    <span>{{ card.description }}</span>
                </div>
                </router-link>
            </div>
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
                },
                cards: []
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
            document.title = 'Sua conta';
            this.getUserApi();

            this.cards = [
                {
                    title: 'Seus pedidos',
                    description: 'Rastrear, devolver ou comprar produtos novamente',
                    src: 'https://img.icons8.com/external-itim2101-lineal-color-itim2101/64/000000/external-delivery-man-male-occupation-avatar-itim2101-lineal-color-itim2101.png',
                    link: `/user/${this.user.id}/account/requests`
                },
                {
                    title: 'Acesso e segurança',
                    description: 'Gerenciar senha, e-mail, cpf e número de celular',
                    src: 'https://img.icons8.com/fluency/96/000000/cyber-security.png',
                    link: `/user/${this.user.id}/account/security`
                },
                {
                    title: 'Endereços',
                    description: 'Alterar endereços para pedidos',
                    src: 'https://img.icons8.com/bubbles/100/000000/address.png',
                    link: `/user/${this.user.id}/account/address`
                },
                {
                    title: 'Seus pagamentos',
                    description: 'Gerenciar ou adicionar formas de pagamento e ver suas transações',
                    src: 'https://img.icons8.com/fluency/96/000000/request-money.png',
                    link: `/user/${this.user.id}/account/payment`
                },
                {
                    title: 'Atendimento',
                    description: 'Explorar opções de autoatendimento, artigos de ajuda ou fale conosco',
                    src: 'https://img.icons8.com/bubbles/100/000000/online-support.png',
                    link: `/user/${this.user.id}/account/service`
                },
                {
                    title: 'Vales-presente',
                    description: 'Ver saldo ou resgatar um vale presente',
                    src: 'https://img.icons8.com/color/96/000000/gift--v1.png',
                    link: `/user/${this.user.id}/account/gifts`
                },
                {
                    title: 'Suas mensagens',
                    description: 'Visualize ou responda a mensagens da BitWise, vendedores e compradores',
                    src: 'https://img.icons8.com/retro/96/000000/mailbox-closed-flag-up.png',
                    link: `/user/${this.user.id}/account/messages`
                },
                {
                    title: 'Suas listas',
                    description: 'Gerenciar, compartilhar, ou criar listas de desejos',
                    src: 'https://img.icons8.com/bubbles/100/000000/list.png',
                    link: `/user/${this.user.id}/account/list`
                }
            ]
        }
    }

</script>

<style scoped>

    div.person {
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
    }

    div.person img{
        width: 120px;
    }

    div.person h2 {
        padding: 0 30px;
    }

    div.person div.cards {
        margin: 30px;
        display: flex;
        gap: 30px;
        flex-wrap: wrap;
        flex-direction: row;
    }

    @media (max-width: 1339px) {
        div.person div.cards {
            justify-content: center;
        }
    }

    @media (max-width: 445px) { 
        div.person div.cards {
            margin: 30px 0;
        }
    }


    div.cards a.card {
        display: flex;
        align-items: center;
        padding: 20px;
        gap: 10px;
        width: 320px;
        height: 100px;
        border-radius: 6px;
        border: 1px solid #eee;
        cursor: pointer;
    }

    div.cards a.card:hover {
        background-color: #eee;
    }

    div.cards a.card img {
        height: 70px;
        width: auto;
    }

    div.cards a.card div.content {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    div.content h1 {
        color: #111;
        font-size: 1em;
    }

    div.content span {
        font-size: .8em;
        color: #565959;
    }

    @media (max-width: 375px) {
        div.cards a.card {
            width: 260px;
            padding: 15px;
        }


        div.cards a.card img {
        height: 60px;
    }
    }


</style>