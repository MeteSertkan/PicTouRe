<template>
  <v-container fluid pa-0 ma-0 style="height: 100%;">
    <Stepper stepNumber="5"></Stepper>
    <v-card tile height="100%">
      <v-card class="mx-auto" max-width="900" flat>
        <v-card-title class="headline font-weight-medium">Thank you very much!</v-card-title>
        <v-card-subtitle
          class="subtitle-1 font-weight-medium"
        >Your participation will greatly contribute to our research.</v-card-subtitle>
        <v-alert
          color="#C51162"
          dark
          icon="mdi-share-variant"
          prominent
        >Please, share this user study with your family, friends and/or colleagues. This would help us a lot!</v-alert>
        <div class="text-center">
          <v-btn class="mx-2" fab dark x-large color="#3b5999" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fpictoprof.ec.tuwien.ac.at">
            <v-icon dark>mdi-facebook</v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark x-large color="#55acee" target="_blank" href="https://twitter.com/share?url=https%3A%2F%2Fpictoprof.ec.tuwien.ac.at">
            <v-icon dark>mdi-twitter</v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark x-large color="#0077B5" target="_blank" href="https://www.linkedin.com/shareArticle?url=https%3A%2F%2Fpictoprof.ec.tuwien.ac.at&title=PicTouRe&source=pictoprof.ec.tuwien.ac.at">
            <v-icon dark>mdi-linkedin</v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark x-large color="#25D366" target="_blank" href="https://wa.me/whatsappphonenumber/?text=https%3A%2F%2Fpictoprof.ec.tuwien.ac.at">
            <v-icon dark>mdi-whatsapp</v-icon>
          </v-btn>
          <v-btn class="mx-2" fab dark x-large color="secondary" traget="_blank" href="mailto:?subject=PicTouRe%20-%20A%20Picture-Based%20Tourism%20Recommender%20-%20User%20Study&body=https%3A%2F%2Fpictoprof.ec.tuwien.ac.at">
            <v-icon dark>mdi-email</v-icon>
          </v-btn>
        </div>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import Stepper from "../components/Stepper";
export default {
  components: {
    Stepper
  },
  mounted() {
    const url = "http://127.0.0.1:5000/backend/time";
    //const url = "/backend/time";
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    const formData = new FormData();
    formData.append("uuid", this.$store.state.id);
    formData.append("step", 5);
    axios
      .post(url, formData, config)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
        this.$data.dialog = true;
      });
  }
}
</script>

<style scoped>
</style>
