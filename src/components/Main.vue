<template>
    <main>
        <!-- Componente Avada-Health -->
        <AvadaHealth />
        <!-- Componente  Meet-Our-Doctors -->
        <MeetOurDoctors />
        <!-- Componente Our-Health-Services -->
        <HealthServices />
        <!-- Componente Tour-Our-Facilities -->
        <TourOurFacilities />
    </main>
</template>

<script>
import AvadaHealth from './AvadaHealth.vue';
import MeetOurDoctors from './MeetOurDoctors.vue';
import HealthServices from './HealthServices.vue';
import TourOurFacilities from './TourOurFacilities.vue';

export default {
    name: "Main",
    components: {
        AvadaHealth,
        MeetOurDoctors,
        HealthServices,
        TourOurFacilities
    }
};
</script>

<style scoped lang="scss">

// Main
main {
    height: auto;
}

</style>
