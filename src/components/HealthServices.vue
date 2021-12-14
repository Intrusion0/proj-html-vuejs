<template>
    <section id="container-health-service">
        <div class="ms-container">
            <img src="@/assets/img/icon-6.png" alt="logo our health services"> <!-- Logo -->
            <h2>
                OUR HEALTH SERVICES
            </h2>
            <div class="divider"></div>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
            </p>
            <div v-for="service, i in servicesDetails" class="container-service" :key="'G' + i">
                <img :src="require(`@/assets/img/${service.icon}`)" :alt="service.service">
                <h3>
                    {{ service.service.toUpperCase() }}
                </h3>
                <p>
                    {{ service.description }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "HealthServices",
    data() {
        return {
            servicesDetails: [
                {
                    icon: 'icon-14.png',
                    service: 'rehabilitation center',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas'
                },
                {
                    icon: 'icon-15.png',
                    service: 'dental implants',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas'
                },
                {
                    icon: 'icon-16.png',
                    service: 'medicine research',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas'
                },
                {
                    icon: 'icon-11.png',
                    service: 'blood bank',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas'
                },
                {
                    icon: 'icon-12.png',
                    service: 'pharmaceutical advice',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas'
                },
                {
                    icon: 'icon-13.png',
                    service: 'medical counseling',
                    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas'
                },
            ]
        }
    }
};
</script>

<style scoped lang="scss">

// section Health Services
section#container-health-service {
    width: 100%;
    text-align: center;
    padding: 80px 0 50px;

    h2 {
        font-weight: 300;
        font-size: 30px;
        margin: 10px 0 25px;
    }

    p {
        width: 60%;
        margin: 30px auto 40px;
        line-height: 35px;
        font-size: 16px;
    }

    div.container-service {
        display: inline-block;
        width: calc((100% / 3) - 40px);
        margin: 45px 20px;

        img {
            width: 25%;
            height: auto;
        }

        h3 {
            font-weight: 400;
            font-size: 15px;
            margin: 20px 0 15px;
        }

        p {
            width: 100%;
            margin: 0;
            font-size: 12px;
            color: #747474;
        }
        
    }
}


</style>
