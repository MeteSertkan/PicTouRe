<template>
  <v-footer dark padless>
    <v-card flat tile width="100%" class="blue-grey lighten-3 white--text text-center">
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col>
            <a href="https://www.ec.tuwien.ac.at" target="_blank">
              <v-img
                src="../../assets/ec_logo.png"
                aspect-ratio="1"
                contain
                class="blue-grey lighten-3"
                max-height="50"
              ></v-img>
            </a>
          </v-col>
          <v-col>
            <a href="https://informatics.tuwien.ac.at" target="_blank">
              <v-img
                src="../../assets/tu_informatics_logo.png"
                aspect-ratio="1"
                class="blue-grey lighten-3"
                contain
                max-height="30"
              ></v-img>
            </a>
          </v-col>
        </v-row>
      </v-container>
      <v-divider></v-divider>
      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —
        <strong>PicTouRe</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.ec-logo {
  width: 10em;
}
.tu-informatics-logo {
  width: 10em;
}

.cls-1 {
  fill: #0071af;
}
</style>

