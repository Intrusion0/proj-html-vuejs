<template>
    <section id="container-meet-our-doctors">
        <div class="ms-container">
            <img src="@/assets/img/icon-5.png" alt="logo meet our doctors"> <!-- Logo -->
            <h2>
                MEET OUR DOCTORS
            </h2>
            <div class="divider-doctors"></div>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
            </p>
            <div v-for="doctor, i in doctorsDetails" class="doctor-card" :key="'E' + i">
                <img :src="require(`@/assets/img/${doctor.picture}`)" :alt="doctor.name"> <!-- Foto dottore -->
                <h3>
                    {{ doctor.name.toUpperCase() }} <!-- Nome dottore -->
                </h3>
                <span class="doctor-sector">
                    {{ doctor.sector }} <!-- Settore dottore -->
                </span>
                <p>
                    {{ doctor.description }} <!-- Descrizione dottore -->
                </p>
                <span v-for="social, j in doctor.socials" :class="'social-icons' + (++j)" :key="'F' + j">  <!-- Social dottore -->
                    <a :href="social.link">
                        <font-awesome-icon :icon="['fab', social.icon]"/>
                    </a>
                </span>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "MeetOurDoctors",
    data() {
        return {
            doctorsDetails: [
                {
                    name: 'Jon Snow',
                    picture: 'doctor-1.jpg',
                    sector: 'Anesthesiologist',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
                    socials: [
                        {
                            icon: 'facebook-f',
                            link: '#'
                        },
                        {
                            icon: 'twitter',
                            link: '#'
                        },
                        {
                            icon: 'instagram',
                            link: '#'
                        }
                    ]
                },
                {
                    name: 'Tony Stark',
                    picture: 'doctor-2.jpg',
                    sector: 'Cardiologist',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
                    socials: [
                        {
                            icon: 'facebook-f',
                            link: '#'
                        },
                        {
                            icon: 'twitter',
                            link: '#'
                        },
                        {
                            icon: 'instagram',
                            link: '#'
                        }
                    ]
                },
                {
                    name: 'Anna Smith',
                    picture: 'doctor-3.jpg',
                    sector: 'Nurse Practitioner',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque',
                    socials: [
                        {
                            icon: 'facebook-f',
                            link: '#'
                        },
                        {
                            icon: 'twitter',
                            link: '#'
                        },
                        {
                            icon: 'instagram',
                            link: '#'
                        }
                    ]
                },
            ]
        }
    }
};
</script>

<style scoped lang="scss">

// section Meet Our Doctors
section#container-meet-our-doctors {
    width: 100%;
    background-color: #f7f7f7;
    padding: 100px 0;
    text-align: center;

    h2 {
        font-weight: 300;
        font-size: 30px;
        margin: 10px 0 25px;
    }

    div.divider-doctors {
        width: 22%;
        margin: 0 auto;
        border: 1px solid lightgray;
    }

    p {
        width: 60%;
        margin: 30px auto 40px;
        line-height: 35px;
        font-size: 16px;
    }

    div.doctor-card {
        display: inline-block;
        width: calc((100% / 3) - 40px);
        background-color: #fff;
        margin: 0 20px;
        text-align: left;

        img {
            width: 100%;
            height: auto;
        }

        h3 {
            font-weight: 400;
            margin: 40px 35px 15px;
        }

        span.doctor-sector {
            margin: 40px 35px;
            font-size: 18px;
        }

        p {
            width: auto;
            margin: 25px 35px;
            font-size: 12px;
            color: #747474;
        }

        span.social-icons1, span.social-icons2, span.social-icons3 {
            display: inline-block;
            margin: 20px 0 60px 10px;

            a {
                text-decoration: none;
                color: #fff;
                padding: 10px 11px;
                border-radius: 5px;
            }
        }

        // Icona di Facebook
        span.social-icons1 {
            margin-left: 35px;

            a {
                background-color: #3c5998;
                padding: 10px 14px;
            }
        }

        // Icona di Twitter
        span.social-icons2 {

            a {
                background-color: #54acee;
            }
        }

        // Icona di Instagram
        span.social-icons3 {

            a {
                background-color: #3f729b;
            }
        }
        
    }
}


</style>
