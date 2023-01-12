<template>
  <v-container fluid pa-0 ma-0 style="height: 100%;">
    <Stepper stepNumber="2"></Stepper>
    <v-card tile height="100%">
      <v-card class="mx-auto" max-width="900" flat>
        <v-card-title class="headline font-weight-medium">Upload Your Pictures</v-card-title>
        <v-card-subtitle class="subtitle-1 font-weight-medium">To determine your travel profile</v-card-subtitle>
        <v-alert
          color="#C51162"
          dark
          icon="mdi-island"
          prominent
        >Imagine the next vacation you would love to take.</v-alert>
        <v-alert
          color="#C51162"
          dark
          icon="mdi-image-multiple"
          prominent
        >Select 3 to 7 pictures that would describe the vacation in your mind well. You can use your own pictures or pictures downloaded from the internet.</v-alert>
        <v-alert
          color="#C51162"
          dark
          icon="mdi-sort"
          prominent
        >Rank the selected pictures according to their relevance, where top means most relevant.</v-alert>
        <v-alert icon="mdi-information-outline"  prominent text type="info" class="text-justify">
          <ul>
            <li>
              In order to rank the pictures, click and hold (on mobile: touch) the picture you want to re-rank and move it to the anticipated position.
            </li>
            <li>
              The uploading and processing of the pictures can take some time. Thank you for your patience.
            </li>
            <li>
              Please note, that we explicitly DO NOT SAVE the uploaded pictures at any time!
            </li>
          </ul>
        </v-alert>
        <v-card-title class="headline font-weight-medium">Select and Rank Here</v-card-title>
        <v-card-subtitle class="subtitle-1 font-weight-medium">And then press the upload-button</v-card-subtitle>
        <ImageUpload />
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
import ImageUpload from "../components/ImageUpload";
import Stepper from "../components/Stepper";

export default {
  components: {
    ImageUpload,
    Stepper
  },
  data() {
    return {
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
    formData.append("step", 2);
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
};
</script>