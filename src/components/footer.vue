<template>
    <section>
        <footer class="top">
            <img :src="logo" :alt="alt" class="logo" loading="lazy">
            <div class="links">
                <div>
                    <h2>Platform</h2>
                    <a href="">links</a>
                    <a href="">links</a>
                    <a href="">links</a>
                    <a href="">links</a>
                    <a href="">links</a>
                </div>
                <div>
                    <h2>Cloud</h2>
                    <a href="">links</a>
                    <a href="">links</a>
                    <a href="">links</a>
                    <a href="">links</a>
                    <a href="">links</a>
                </div>
            </div>
        </footer>
        <footer class="bottom">
            <div class="legal">
                <span>&copy; {{ date }} All rights reserved</span>
                <a href="">License</a>
                <a href="">Terms</a>
                <a href="">Privacy</a>
            </div>
            <div class="links">
                <a :href="linkGit" class="fa-brands fa-github" target="_blank">
                    <img src="https://img.icons8.com/ios-glyphs/30/null/github.png" loading="lazy"/>
                </a>
                <a :href="linkLinke" class="fa-brands fa-linkedin" target="_blank">
                    <img src="https://img.icons8.com/ios-glyphs/30/null/linkedin.png" loading="lazy"/>
                </a>
            </div>
        </footer>
    </section>
</template>

<script>

    export default {
        name: 'FooterVue',
        props: {
            logo: String,
            alt: String
        },
        data() {
            return {
                date: new Date().getFullYear(),
                linkGit: 'https://github.com/Lucas-Jav',
                linkLinke: 'https://www.linkedin.com/in/lucas-oliveira-de-amorim-010329206/'
            }
        }
    }

</script>

<style scoped>

    section {
    left: 0;
    bottom: 0px;
    -webkit-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.65);
    -moz-box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.65);
    box-shadow: 0px 0px 15px 0px rgba(0,0,0,0.65);
    padding-top: 60px;
    }

    img.logo {
        width: 150px;
    }

    footer {
        width: 100%;
        display: flex;
        align-items: flex-start;
        gap: 40px;
        margin: 0 30px;
        color: #000000b9;
    }

    footer.top {
        border-bottom: 1px solid #565959;
        padding-bottom: 20px;
    }

    footer.top .links {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }

    footer.bottom {
        padding: 20px 0;
        justify-content: space-between;
    }

    footer .links > div {
        display: grid;
        gap: 10px;
        margin-bottom: 30px;
    }

    footer h2 {
        margin: 0;
        font-size: 16px;
        font-weight: 400;
        color: #000;
    }

    footer .legal {
        font-size: 12px;
    }

    footer .legal > a {
        margin: 0 4px;
    }


    footer .legal > span {
        margin-right: 10px;
    }

    footer.bottom .links {
        display: flex;
        gap: 18px;
    }

    footer.bottom .links a {
        cursor: pointer;
    }

    @media (width < 620px) {
        footer {
            width: auto;
            flex-direction: column;
        }

        footer.bottom {
            gap: 16px;
            flex-direction: column-reverse;
        }

        footer .legal,
        footer .links {
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    @media (width >= 620px) {
        footer {
            margin: 0 auto;
            max-width: 80%;
            padding: 0;
        }
    }

    footer.bottom .links > a {
        font-size: 24px;
    }

    @media (width < 420px) {
        footer {
            text-align: center;
            align-items: center;
        }

        footer.top .links {
            grid-template-columns: 1fr;
        }

        footer.bottom {
            align-items: center;
        }

        footer .legal > span {
            display: block;
            margin-right: 0;
            margin-bottom: 2px;
        }
    }

</style>