<template>
    <footer>
        <section class="container-about-us">

        </section>
        <section class="container-medical-departments">

        </section>
        <section class="container-contact">

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
    }
};
</script>

<style scoped lang="scss">

// Footer
footer {
    width: 100%;

    
}

</style>
