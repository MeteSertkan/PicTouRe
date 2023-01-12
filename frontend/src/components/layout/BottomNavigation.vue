<template>
  <v-bottom-navigation color="deep-purple accent-4">
    <v-btn to="/sevenfactormodel" target="_blank" class="body-1 font-weight-medium">
      <span>Seven-Factor Model</span>
      <v-icon>mdi-axis-arrow</v-icon>
    </v-btn>
    <v-btn
      href="https://www.tuwien.at/en/tu-wien/organisation/service-providers/data-protection-and-document-management/data-protection-at-tu-wien/documents/"
      target="_blank"
      class="body-1 font-weight-medium"
    >
      <span>Privacy</span>
      <v-icon>mdi-shield-account-outline</v-icon>
    </v-btn>
    <v-btn href="mailto:mete.sertkan@tuwien.ac.at?subject=PicTouRe - Contact Us" target="_blank" class="body-1 font-weight-medium">
      <span>Contact Us</span>
      <v-icon>mdi-email-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "BottomNavigation"
};
</script>