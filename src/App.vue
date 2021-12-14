<template>
  <div id="app">
    <!-- Header -->
    <Header 
    :details="headerDetails"
    />
    <!-- Main -->
    <Main />
    <!-- Footer -->
    <Footer
    :socialIconDetails="socialsDetails"
    :contactDetails="contactsDetails"
    :departmentDetails="medicalDepartmentsDetails"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Main from "./components/Main.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  },
  data() {
    return {
      headerDetails: [
        {
          name: 'Home',
          link: '#'
        },
        {
          name: 'About',
          link: '#'
        }, 
        {
          name: 'Departments',
          link: '#'
        },
        {
          name: 'Articles',
          link: '#'
        }, 
        {
          name: 'Make Appointment',
          link: '#'
        },
      ],
      socialsDetails: [
        {
          icon: 'facebook-f',
          link: '#'
        },
        {
          icon: 'twitter',
          link: '#'
        },
        {
          icon: 'youtube',
          link: '#'
        },
        {
          icon: 'instagram',
          link: '#'
        },
      ],
      contactsDetails: [
        {
          icon: 'map-marker-alt',
          text: '121 King Street, London United Kingdom'
        },
        {
          icon: 'phone',
          text: '1.800.458.566'
        }
      ],
      medicalDepartmentsDetails: [
        {
          name: 'Cardiology',
          link: '#'
        },
        {
          name: 'Pediactrics',
          link: '#'
        },
        {
          name: 'Diabetes Care',
          link: '#'
        },
        {
          name: 'Pre-natel Care',
          link: '#'
        },
        {
          name: 'Ultrasound Echocardiogram',
          link: '#'
        }
      ]
    }
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+3:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

// General rules
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

// Container general
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Container for centering
.ms-container {
  width: 55%;
  margin: 0 auto;
}

// Divider
.divider {
  width: 22%;
  margin: 0 auto;
  border: 1px solid lightgray;
}

// Color of the button of the input box and color of the placeholder (Make-An-Appointment component) => ! important is required, as some bootstrap vue components are not editable even if you were to add a class. It should never be used, but it was strictly necessary this time.
#datepicker-placeholder {
  color: #c9c9c9;
}

.form-control {
  color: #c9c9c9 !important;
}

#datepicker-placeholder__value_{
  display: flex;
  align-items: center;
  color: #c9c9c9 !important;
}

</style>
