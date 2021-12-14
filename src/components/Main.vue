<template>
    <main>
        <!-- Componente Avada-Health -->
        <AvadaHealth />
        <!-- Componente  -->
        <MeetOurDoctors />
    </main>
</template>

<script>
import AvadaHealth from './AvadaHealth.vue';
import MeetOurDoctors from './MeetOurDoctors.vue';

export default {
    name: "Main",
    components: {
        AvadaHealth,
        MeetOurDoctors
    }
};
</script>

<style scoped lang="scss">

// Main
main {
    height: auto;
}

</style>
