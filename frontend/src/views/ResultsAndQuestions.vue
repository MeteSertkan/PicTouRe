<template>
  <v-container fluid pa-0 ma-0 style="height: 100%;">
    <Stepper stepNumber="3"></Stepper>
    <v-card tile height="100%">
      <v-card class="mx-auto" max-width="900" flat>
        <v-card-title class="headline font-weight-medium">Your Profile</v-card-title>
        <v-card-subtitle class="subtitle-1 font-weight-medium">Based on the pictures you provided</v-card-subtitle>
        <Profile />
        <SevenFactors />
        <v-alert icon="mdi-information-outline" prominent text type="info" class="text-justify">
          <p>
            Note, people are depicted as a mixture of the Seven-Factors.
            Each factor ranges from 0 to 100, where 0 means that the respective factor does not at all reflect your travel preferences and 100 means that it reflects it perfectly.
          </p>
          <p>
            For a brief description of the Seven-Factors please hover (on mobile: touch) the considered factor.
            More detailes about the Seven-Factors are provided
            <a
              href="/#/sevenfactormodel"
              target="blank_"
            >here</a>.
          </p>
        </v-alert>
      </v-card>
      <v-divider></v-divider>
      <Questions />
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
import Profile from "../components/Profile";
import SevenFactors from "../components/SevenFactors";
import Questions from "../components/Questions";
import Stepper from "../components/Stepper";

export default {
  components: {
    Profile,
    SevenFactors,
    Questions,
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
    formData.append("step", 3);
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
};
</script>

<style scoped>
</style>