<template>
    <footer>
        <!-- Sezione About us -->
        <section class="container-about-us">
            <img src="../assets/img/medical_logo_1x_dark.png" alt="medical logo dark">
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolemue launti totam aperiam, eaque ipsa quae abillo. Invente veriatis et quasi architecto beatae luptatem accusantium, remaperiamsiat. Voluptatem accusest etsium doloremque ludaien. Lorem ipsum sits dolores ets unser.
            </p>
            <span class="divider-footer"></span>
            <span>
                LEARN MORE ABOUT US
            </span>
            <div class="container-socials">
                <ul>
                    <li v-for="socialIcon, j in socialIconDetails" :key="'B' + j">
                        <a :href="socialIcon.link">
                            <font-awesome-icon :icon="['fab', socialIcon.icon]"/>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <!-- Sezione contatti -->
        <section class="container-contact">
            <h3>
                CONTACT INFORMATION
            </h3>
            <div class="divider-contact-departments"></div>
            <ul>
                <li v-for="contact, a in contactDetails" :key="'C' + a">
                    <span>
                        <font-awesome-icon :icon="['fas', contact.icon]" class="contact-icon"/>
                    </span>
                    {{ contact.text }}
                </li>
            </ul>
        </section>
        <!-- Sezione Medical Departments -->
        <section class="container-medical-departments">
            <h3>
                MEICAL DEPARTMENTS
            </h3>
            <div class="divider-contact-departments"></div>
            <ul>
                <li v-for="department, b in departmentDetails" :key="'D' + b">
                    <a :href="department.link">
                        <span>
                            <font-awesome-icon :icon="['fas','chevron-right']"/>
                        </span>
                        {{ department.name }}
                    </a>
                </li>
            </ul>
            <div class="btn-view-our-departments">
                <a href="#">
                    VIEW OUR DEPARTMENTS
                </a>
            </div>
        </section>
        <!-- Componente Copyright -->
        <Copyright />
    </footer>
</template>

<script>
import Copyright from './Copyright.vue'

export default {
    name: "Footer",
    components: {
        Copyright
    },
    props: {
        socialIconDetails: Array,
        contactDetails: Array,
        departmentDetails: Array
    }
};
</script>

<style scoped lang="scss">

// Footer
footer {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding-top: 50px;

    // Container About Us
    .container-about-us {
        width: 40%;
        display: flex;
        flex-direction: column;
        padding-left: 50px;
        margin-right: 45px;

        img {
            width: 47%;
            height: auto;
        }

        p {
            line-height: 40px;
            margin: 25px 0;
            color: #686868;
        }

        span.divider-footer {
            border: 1px solid #e0dede;
            margin-bottom: 10px;
        }

        div.container-socials {
            margin-top: 40px;

            ul {
                display: flex;
                list-style: none;

                li {
                    margin-right: 15px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border-radius: 5px;

                    a {
                        text-decoration: none;
                        color: #fff;
                        padding: 10px 11px;
                    }

                    &:nth-child(1) {
                        background-color: #3c5998;

                        a {
                            padding: 10px 14px;
                        }
                    }

                    &:nth-child(2) {
                        background-color: #54acee;
                    }

                    &:nth-child(3) {
                        background-color: #cd201f;
                    }

                    &:nth-child(4) {
                        background-color: #3f729b;

                        a {
                            padding: 10px 12px;
                        }
                    }
                }
            }
        }
    }

    // Container Contact
    .container-contact {
        width: 30%;
        display: flex;
        flex-direction: column;

        ul {
            list-style: none;

            li {
                display: flex;
                color: #686868;
                margin: 20px 10px;

                .contact-icon {
                    color: #3aafbf;
                }

                span {
                    min-width: 30px;
                }
            }
        }
    }

    // Container Medical Departments
    .container-medical-departments {
        width: calc(30% - 45px);
        display: flex;
        flex-direction: column;

        ul {
            list-style: none;

            li {
                margin: 20px 0;

                a {
                    text-decoration: none;
                    color: #000;

                    span {
                        display: inline-block;
                        background-color: #3aafbf;
                        color: #fff;
                        height: 32px;
                        width: 32px;
                        line-height: 32px;
                        text-align: center;
                        border-radius: 50%;
                        margin-right: 10px;
                    }
                }
            }
        }
        
        div.btn-view-our-departments {
            max-width: 75%;
            font-size: 22px;
            margin-top: 40px;

            a {
                display: flex;
                justify-content: center;
                padding: 10px;
                border: 1px solid #000;
                text-decoration: none;
                color: #000;
            }
        }
    }

    div.divider-contact-departments {
        width: 50px;
        border: 2px solid #3aafbf;
        margin: 30px 0 15px;
    }

    h3 {
        font-weight: 500;
    }

}

</style>
