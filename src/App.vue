<template>
  <div id="app">
    <!-- Header -->
    <Header />
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
};
</script>

<style lang="scss">

// General rules
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// Container general
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

</style>
