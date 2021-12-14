<template>
    <main>
        <!-- Componente Avada-Health -->
        <AvadaHealth />
        <!-- Componente  Meet-Our-Doctors -->
        <MeetOurDoctors />
        <!-- Componente Our-Health-Services -->
        <HealthServices />
    </main>
</template>

<script>
import AvadaHealth from './AvadaHealth.vue';
import MeetOurDoctors from './MeetOurDoctors.vue';
import HealthServices from './HealthServices.vue'

export default {
    name: "Main",
    components: {
        AvadaHealth,
        MeetOurDoctors,
        HealthServices
    }
};
</script>

<style scoped lang="scss">

// Main
main {
    height: auto;
}

</style>
