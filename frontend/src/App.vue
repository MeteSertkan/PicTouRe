<template>
  <div id="app">
    <v-app>
      <Header />
      <v-content class="body-1 font-weight-medium">
        <router-view />
      </v-content>
      <BottomNavigation />
      <Footer />
    </v-app>
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import BottomNavigation from "./components/layout/BottomNavigation";
export default {
  name: "app",
  components: {
    Header,
    BottomNavigation,
    Footer
  }
};
</script>

<style>

</style>
