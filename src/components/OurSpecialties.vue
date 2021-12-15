<template>
    <section id="container-our-specialties">
        <div v-for="specialtie, i in specialtiesDetails" :class="'container-specialtie' +  ' ' + 'container-emergency-care' + (++i)" :key="'H' + i">
            <h3>
                {{ specialtie.title }}
            </h3>
            <img :src="require(`@/assets/img/${specialtie.icon}`)" :alt="specialtie.title">
            <p>
                {{ specialtie.description }}
            </p>
            <span>
                <a :href="specialtie.link">
                    {{ specialtie.textButton.toUpperCase() }}
                </a>
            </span>
            <!-- <img :src="require(`@/assets/img/${service.icon}`)" :alt="service.service"> -->
        </div>
    </section>
</template>

<script>
export default {
    name: "OurSpecialties",
    data() {
        return {
            specialtiesDetails: [
                {
                    title: 'Emergency Care',
                    icon: 'wave-divider.png',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apariam, eaque',
                    textButton: 'Learn more',
                    link: '#'
                },
                {
                    title: 'Expert Diagnostics',
                    icon: 'wave-divider.png',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apariam, eaque',
                    textButton: 'Learn more',
                    link: '#'
                },
                {
                    title: 'Superb Rehabilitation',
                    icon: 'wave-divider.png',
                    description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem apariam, eaque',
                    textButton: 'Learn more',
                    link: '#'
                }
            ]
        }
    }
};
</script>

<style scoped lang="scss">
$main-color: #fff;

// section Our Specialties
section#container-our-specialties {
    width: 100%;
    display: flex;

    .container-specialtie {
        width: calc(100% / 3);
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 65px 20px;

        h3 {
            color: $main-color;
            margin-bottom: 20px;
            font-weight: 500;
        }

        p {
            text-align: center;
            color: $main-color;
            line-height: 32px;
            margin: 10px 0 25px;
            font-weight: 300;
            font-size: 13px;
        }

        span {
            font-weight: 300;
            
            a {
                color: $main-color;
                text-decoration: none;
                padding: 10px 25px;
                border: 2px solid $main-color;

                &:hover {
                    border: 3px solid $main-color;
                    font-weight: 500;
                }
            }
        }
    }
    
    .container-emergency-care1 {
        background-color: #3aafbf;
    }

    .container-emergency-care2 {
        background-color: #3597c3;
    }

    .container-emergency-care3 {
        background-color: #327ec7;
    }
}

</style>
