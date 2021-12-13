<template>
    <section id="container-avada-health">
        <h2>
            Welcome to Avada Health
        </h2>
        <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
        </p>
        <div class="info-avada-health">
            <div v-for="detail, j in avadaHealthDetails" class="container-info-avada-health" :key="'A' + j">
                <img :src="require(`@/assets/img/${detail.icon}`)" :alt="detail.title">
                <h3>
                    {{ detail.title.toUpperCase() }}
                </h3>
                <p>
                    {{ detail.text }}
                </p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "AvadaHealth",
    data() {
        return {
            avadaHealthDetails: [
                {
                    icon: 'icon-1.png',
                    title: 'same day appointments',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim'
                },
                {
                    icon: 'icon-2.png',
                    title: 'world class facilities',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim'
                },
                {
                    icon: 'icon-3.png',
                    title: 'expert doctors',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim'
                },
                {
                    icon: 'icon-4.png',
                    title: 'complementary therapies',
                    text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptam accusantim'
                },
            ]
        }
    }
};
</script>

<style scoped lang="scss">
$font-weight-general: 300;

// section avada-health
section#container-avada-health {
    width: 100%;
    padding: 80px 0;
    text-align: center;

    h2 {
        font-weight: $font-weight-general;
        font-size: 30px;
        margin-bottom: 25px;
    }

    div.info-avada-health {
        display: flex;

        .container-info-avada-health {
            margin: 0 20px;

            p {
                width: 100%;
                padding: 0;
                font-size: 12px;
                color: #747474;
            }

            h3 {
                font-weight: $font-weight-general;
                font-size: 14px;
                margin: 15px 0;
            }
        }
    }

    p {
        line-height: 32px;
        width: 65%;
        margin: 0 auto;
        padding-bottom: 60px;
        font-size: 18px;
    }
}

</style>
