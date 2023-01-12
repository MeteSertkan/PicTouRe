<template>
  <v-container fluid pa-0 ma-0 style="height: 100%;">
    <Stepper stepNumber="1"></Stepper>
    <v-card tile height="100%">
      <v-card class="mx-auto" max-width="900" flat>
        <v-card-title class="headline font-weight-medium">A Picture is Worth a Thousand Words</v-card-title>
        <v-card-subtitle class="subtitle-1 font-weight-medium">More pictures are even better</v-card-subtitle>
        <v-alert
          color="#C51162"
          dark
          icon="mdi-axis-arrow"
          prominent
        >With this application you can determine your travel profile using your own pictures or pictures that you like.</v-alert>
        <v-alert
          color="#C51162"
          dark
          icon="mdi-map-marker"
          prominent
        >Based on your travel profile recommendations for tourism destinations are given.</v-alert>
        <v-card-text class="body-1 font-weight-medium text-justify">
          <p>
            We follow the idiom
            <i>“A picture is worth a thousand words”</i> and use pictures to determine the travel profile of users, i.e. their Seven-Factor representation.
            The
            <a
              href="/#/sevenfactormodel"
              target="blank_"
            >Seven-Factor Model</a> is a well-established framework that captures preferences and the personality of travellers.
            Furthermore, we recommend tourism destinations with respect to the determined travel profile.
          </p>
          <p>Thank you very much for participating in this user study. Your responses will greatly contribute to our research.</p>
        </v-card-text>
        <v-alert icon="mdi-shield-lock-outline" prominent text type="info" class="text-justify">
          All gathered data is anonymized immediately and cannot be traced back to any individual.
          The data will be used for research and in publications.
          We do not store the uploaded pictures at any time.
          Informationen about privacy and data protection at TU Wien is available
          <a
            href="https://www.tuwien.at/en/tu-wien/organisation/service-providers/data-protection-and-document-management/data-protection-at-tu-wien/documents/"
            target="blank_"
          >here</a>.
        </v-alert>
        <v-row align="center" justify="center" dense>
          <v-col cols="12" sm="6">
            <v-checkbox v-model="terms" color="primary" style="justify-content: center">
              <template v-slot:label>
                <div>
                  <b>* I agree to participate in the user study</b>
                </div>
              </template>
            </v-checkbox>
          </v-col>
          <v-col class="text-center" cols="12" sm="4">
            <div>
              <v-btn large :disabled="isDisabled" color="primary" @click="startSurvey()">Start</v-btn>
            </div>
          </v-col>
        </v-row>
      </v-card>
    </v-card>
    <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">OOOPS...</v-card-title>
        <v-card-text class="text-justify">
          Some thing weng wrong!
          The issue may be temporary.
          Please, try it again after some while.
          If the problem perists, please get in touch with us.
          Thank you! 
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            OK
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
import axios from "axios";
import Stepper from "../components/Stepper";
export default {
  components: {
    Stepper
  },
  data() {
    return {
      terms: false,
      dialog: false
    };
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
    formData.append("step", 1);
    axios
      .post(url, formData, config)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
        this.$data.dialog = true;
      });
  },
  computed: {
    isDisabled() {
      return !this.terms;
    }
  },
  methods: {
    startSurvey() {
      this.$router.push({ name: "imageselection" });
    }
  }
};
</script>