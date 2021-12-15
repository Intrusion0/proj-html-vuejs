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
        <!-- Componente Our-Specialties -->
        <OurSpecialties />
        <!-- Componente Make-An-Appointment -->
        <MakeAnAppointment />
        <!-- Componente Customer-Logos -->
        <CustomerLogos />
    </main>
</template>

<script>
import AvadaHealth from './AvadaHealth.vue';
import MeetOurDoctors from './MeetOurDoctors.vue';
import HealthServices from './HealthServices.vue';
import TourOurFacilities from './TourOurFacilities.vue';
import OurSpecialties from './OurSpecialties.vue'
import MakeAnAppointment from './MakeAnAppointment.vue'
import CustomerLogos from './CustomerLogos.vue'

export default {
    name: "Main",
    components: {
        AvadaHealth,
        MeetOurDoctors,
        HealthServices,
        TourOurFacilities,
        OurSpecialties,
        MakeAnAppointment,
        CustomerLogos
    }
};
</script>

<style scoped lang="scss">

// Main
main {
    height: auto;
}

</style>
