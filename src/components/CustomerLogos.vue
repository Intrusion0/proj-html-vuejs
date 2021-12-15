<template>
    <section id="container-customer-logos">
        <div class="ms-container">
            <VueSlickCarousel v-bind="settings" class="carousel">
                <div v-for="logo, i in logosDetails" class="test" :key="'I' + i">
                    <img :src="require(`@/assets/img/${logo.image}`)" :alt="logo.name">
                </div>
            </VueSlickCarousel>
        </div>
    </section>
</template>

<script>
import VueSlickCarousel from 'vue-slick-carousel' // Carousel implementato => https://gs-shop.github.io/vue-slick-carousel/?ref=madewithvuejs.com#/
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css' // Style for arrows e dots

export default {
    name: "CustomerLogos",
    components: { VueSlickCarousel },
    data() {
      return {
        settings: { // Settaggi del carosello
            "centerMode": true,
            "centerPadding": "20px",
            "focusOnSelect": true,
            "infinite": true,
            "slidesToShow": 3,
            "speed": 1000,
            "autoplay": true,
            "autoplaySpeed": 2500,
            "cssEase": "linear"
        },
        logosDetails: [
            {
                name: 'Healthy',
                image: 'client-logos-1.png'
            },
            {
                name: 'ColorPeople',
                image: 'client-logos-4.png'
            },
            {
                name: 'TurboPower',
                image: 'client-logos-3.png'
            },
            {
                name: 'Healthy_2',
                image: 'client-logos-2.png'
            }
        ]
      }
    },
};
</script>

<style scoped lang="scss">
$main-color: #fff;
$secondary-color: #c9c9c9;

// section Customer-Logos
section#container-customer-logos { 
    width: 100%;
    height: auto;
    background-image: url('../assets/img/rgb-gradient-bar-for-logo-carrasel.jpg');
    overflow: hidden;
    padding: 40px 0;

    .test {
        margin: 0 15px;
    }

}

</style>
