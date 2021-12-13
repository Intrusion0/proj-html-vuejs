<template>
    <main class="ms-container">
        <!-- Componente Avada-Health -->
        <AvadaHealth />
    </main>
</template>

<script>
import AvadaHealth from './AvadaHealth.vue';

export default {
    name: "Main",
    components: {
        AvadaHealth
    }
};
</script>

<style scoped lang="scss">

// Main
main {
    height: auto;
}

</style>
