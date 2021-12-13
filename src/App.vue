<template>
  <div id="app">
    <!-- Header -->
    <Header 
    :details="headerDetails"
    />
    <!-- Main -->
    <Main />
    <!-- Footer -->
    <Footer />
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
          link: ''
        },
        {
          name: 'About',
          link: ''
        }, 
        {
          name: 'Departments',
          link: ''
        },
        {
          name: 'Articles',
          link: ''
        }, 
        {
          name: 'Make Appointment',
          link: ''
        },
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
}

// Container general
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

// Container for centering
.ms-container {
  width: 48%;
  margin: 0 auto;
}

</style>
