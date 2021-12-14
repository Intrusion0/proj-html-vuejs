<template>
    <section id="container-tour-our-facilities">
        <div class="ms-container">
            <img src="@/assets/img/icon-7.png" alt="tour our facilities">
            <h2>
                TOUR OUR FACILITIES
            </h2>
            <div class="divider"></div>
            <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae
            </p>
            <a href="#">
                <img src="@/assets/img/play-icon.png" alt="play icon">
            </a>
        </div>
    </section>
</template>

<script>
export default {
    name: "TourOurFacilities",
};
</script>

<style scoped lang="scss">

// section Meet Our Doctors
section#container-tour-our-facilities {
    width: 100%;
    text-align: center;
    background-image: url('../assets/img/paralax-bg-tour-facilities.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 140px 0;

    h2 {
        color: #fff;
        font-weight: 300;
        font-size: 30px;
        margin: 10px 0 25px;
    }

    p {
        width: 60%;
        color: #fff;
        margin: 30px auto 40px;
        line-height: 35px;
        font-size: 16px;
    }
}

</style>
