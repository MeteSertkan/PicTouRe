<template>
  <v-card class="mx-auto" max-width="900" flat>
    <v-card-title class="headline font-weight-medium">Questions</v-card-title>
    <v-card-subtitle class="subtitle-1 font-weight-medium">Positions marked with * are required</v-card-subtitle>
    <v-alert
      color="#C51162"
      dark
      icon="mdi-format-list-checks"
      prominent
    >Please indicate your level of agreement with the following statements.</v-alert>
    <v-card-text>
      <v-form class="body-1 text-justify" ref="form" v-model="valid" lazy-validation>
        <span class="question">* It was easy to find 3 to 7 pictures.</span>
        <v-radio-group v-model="questions.Q1" :rules="[v => !!v || 'Required!']" required column>
          <v-radio color="primary" label="Strongly disagree" value="0"></v-radio>
          <v-radio color="primary" label="Disagree" value="1"></v-radio>
          <v-radio color="primary" label="Neutral" value="2"></v-radio>
          <v-radio color="primary" label="Agree" value="3"></v-radio>
          <v-radio color="primary" label="Strongly agree" value="4"></v-radio>
        </v-radio-group>
        <span
          class="question"
        >* I mainly used pictures downloaded from the internet (e.g., Google, Flickr, etc.).</span>
        <v-radio-group v-model="questions.Q2" :rules="[v => !!v || 'Required!']" required column>
          <v-radio color="primary" label="Strongly disagree" value="0"></v-radio>
          <v-radio color="primary" label="Disagree" value="1"></v-radio>
          <v-radio color="primary" label="Neutral" value="2"></v-radio>
          <v-radio color="primary" label="Agree" value="3"></v-radio>
          <v-radio color="primary" label="Strongly agree" value="4"></v-radio>
        </v-radio-group>
        <span class="question">* I mainly used my own pictures.</span>
        <v-radio-group v-model="questions.Q3" :rules="[v => !!v || 'Required!']" required column>
          <v-radio color="primary" label="Strongly disagree" value="0"></v-radio>
          <v-radio color="primary" label="Disagree" value="1"></v-radio>
          <v-radio color="primary" label="Neutral" value="2"></v-radio>
          <v-radio color="primary" label="Agree" value="3"></v-radio>
          <v-radio color="primary" label="Strongly agree" value="4"></v-radio>
        </v-radio-group>
        <span class="question">* I understood the explanations of the Seven-Factors.</span>
        <v-radio-group v-model="questions.Q4" :rules="[v => !!v || 'Required!']" required column>
          <v-radio color="primary" label="Strongly disagree" value="0"></v-radio>
          <v-radio color="primary" label="Disagree" value="1"></v-radio>
          <v-radio color="primary" label="Neutral" value="2"></v-radio>
          <v-radio color="primary" label="Agree" value="3"></v-radio>
          <v-radio color="primary" label="Strongly agree" value="4"></v-radio>
        </v-radio-group>
        <span class="question">* The resulting profile matches my preferences.</span>
        <v-radio-group v-model="questions.Q5" :rules="[v => !!v || 'Required!']" required column>
          <v-radio color="primary" label="Strongly disagree" value="0"></v-radio>
          <v-radio color="primary" label="Disagree" value="1"></v-radio>
          <v-radio color="primary" label="Neutral" value="2"></v-radio>
          <v-radio color="primary" label="Agree" value="3"></v-radio>
          <v-radio color="primary" label="Strongly agree" value="4"></v-radio>
        </v-radio-group>
        <span
          class="question"
        >Which factor in the resulting profile does not match well? (multiple answers allowed)</span>
        <v-checkbox v-model="questions.Q6_1" color="primary" label="Sun &amp; Chill-Out"></v-checkbox>
        <v-checkbox v-model="questions.Q6_2" color="primary" label="Knowledge &amp; Travel"></v-checkbox>
        <v-checkbox v-model="questions.Q6_3" color="primary" label="Independence &amp; History"></v-checkbox>
        <v-checkbox v-model="questions.Q6_4" color="primary" label="Culture &amp; Indulgence"></v-checkbox>
        <v-checkbox v-model="questions.Q6_5" color="primary" label="Social &amp; Sports"></v-checkbox>
        <v-checkbox v-model="questions.Q6_6" color="primary" label="Action &amp; Fun"></v-checkbox>
        <v-checkbox v-model="questions.Q6_7" color="primary" label="Nature &amp; Recreation"></v-checkbox>
        <span
          class="question"
        >How would you adjust the resulting profile? (multiple adjustments allowed)</span>
        <v-row>
          <v-col cols="12">
            <span style="padding-left: 10px;">
              Sun &amp; Chill-Out Score
              <b>{{selfassessment.F1}}</b>
            </span>
            <v-slider v-model="selfassessment.F1" thumb-label @change="adjusted=true"></v-slider>
          </v-col>
          <v-col cols="12">
            <span style="padding-left: 10px;">
              Knowledge &amp; Travel Score
              <b>{{selfassessment.F2}}</b>
            </span>
            <v-slider v-model="selfassessment.F2" thumb-label @change="adjusted=true"></v-slider>
          </v-col>
          <v-col cols="12">
            <span style="padding-left: 10px;">
              Independence &amp; History Score
              <b>{{selfassessment.F3}}</b>
            </span>
            <v-slider v-model="selfassessment.F3" thumb-label @change="adjusted=true"></v-slider>
          </v-col>
          <v-col cols="12">
            <span style="padding-left: 10px;">
              Culture &amp; Indulgence Score
              <b>{{selfassessment.F4}}</b>
            </span>
            <v-slider v-model="selfassessment.F4" thumb-label @change="adjusted=true"></v-slider>
          </v-col>
          <v-col cols="12">
            <span style="padding-left: 10px;">
              Social &amp; Sports Score
              <b>{{selfassessment.F5}}</b>
            </span>
            <v-slider v-model="selfassessment.F5" thumb-label @change="adjusted=true"></v-slider>
          </v-col>
          <v-col cols="12">
            <span style="padding-left: 10px;">
              Action &amp; Fun Score
              <b>{{selfassessment.F6}}</b>
            </span>
            <v-slider v-model="selfassessment.F6" thumb-label @change="adjusted=true"></v-slider>
          </v-col>
          <v-col cols="12">
            <span style="padding-left: 10px;">
              Nature &amp; Recreation Score
              <b>{{selfassessment.F7}}</b>
            </span>
            <v-slider v-model="selfassessment.F7" thumb-label @change="adjusted=true"></v-slider>
          </v-col>
        </v-row>
        <span class="question">* What is your age?</span>
        <v-radio-group v-model="questions.age" :rules="[v => !!v || 'Required!']" required column>
          <v-radio color="primary" label="Under 18" value="1"></v-radio>
          <v-radio color="primary" label="18 - 24" value="2"></v-radio>
          <v-radio color="primary" label="25 - 34" value="3"></v-radio>
          <v-radio color="primary" label="35 - 44" value="4"></v-radio>
          <v-radio color="primary" label="45 - 55" value="5"></v-radio>
          <v-radio color="primary" label="Over 55" value="6"></v-radio>
          <v-radio color="primary" label="Prefer not to say" value="0"></v-radio>
        </v-radio-group>
        <span class="question">* What is your gender?</span>
        <v-radio-group v-model="questions.gender" :rules="[v => !!v || 'Required!']" required column>
          <v-radio color="primary" label="Male" value="1"></v-radio>
          <v-radio color="primary" label="Female" value="2"></v-radio>
          <v-radio color="primary" label="Other" value="3"></v-radio>
          <v-radio color="primary" label="Prefer not to say" value="0"></v-radio>
        </v-radio-group>
        <span class="question">* What is your highest degree of education?</span>
        <v-radio-group v-model="questions.education" :rules="[v => !!v || 'Required!']" required column>
          <v-radio color="primary" label="Less than high school diploma" value="1"></v-radio>
          <v-radio color="primary" label="High school degree or equivalent" value="2"></v-radio>
          <v-radio color="primary" label="Bachelor's degree" value="3"></v-radio>
          <v-radio color="primary" label="Master's degree" value="4"></v-radio>
          <v-radio color="primary" label="Doctorate" value="5"></v-radio>
          <v-radio color="primary" label="Other" value="6"></v-radio>
          <v-radio color="primary" label="Prefer not to say" value="0"></v-radio>
        </v-radio-group>
        <span class="question">* How often do you travel for pleasure (leisure/tourism)?</span>
        <v-radio-group v-model="questions.travel_frequency" :rules="[v => !!v || 'Required!']" required column>
          <v-radio color="primary" label="Less than once a year" value="1"></v-radio>
          <v-radio color="primary" label="1 or 2 times a year" value="2"></v-radio>
          <v-radio color="primary" label="2 or 3 times a year" value="3"></v-radio>
          <v-radio color="primary" label="3 or 4 times a year" value="4"></v-radio>
          <v-radio color="primary" label="4 or 5 times a year" value="5"></v-radio>
          <v-radio color="primary" label="More than 5 times a year" value="6"></v-radio>
          <v-radio color="primary" label="Prefer not to say" value="0"></v-radio>
        </v-radio-group>
        <h3>Comments/Suggestions:</h3>
        <v-textarea class="mx-2" label="Your message" v-model="questions.message" rows="3"></v-textarea>
        <v-alert
          dense
          outlined
          type="error"
          :value="!valid"
          transition="scale-transition"
        >Required information missing! Please, fill out all required fields (marked with *).</v-alert>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="my-2">
            <v-btn @click="formSubmit()" large color="primary">Submit</v-btn>
          </div>
        </v-card-actions>
      </v-form>
    </v-card-text>
    <v-dialog v-model="dialog" max-width="290">
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
          <v-btn color="primary" text @click="dialog = false">OK</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-card>
</template>

<script>
import axios from "axios";
export default {
  name: "Questions",
  components: {
  },
  data() {
    return {
      valid: true,
      dialog: false,
      adjusted: false
    };
  },
  methods: {
    formSubmit() {
      if (!this.$refs.form.validate()) {
        this.valid = false;
        return;
      }
      const url = "http://127.0.0.1:5000/backend/questions";
      //const url = "/backend/questions";
      const config = {
        headers: {
          "Content-Type": "multipart/form-data" //multipart/form-data"
        }
      };
      const formData = new FormData();
      formData.append("uuid", this.$store.state.id);
      formData.append("Q1", this.questions.Q1);
      formData.append("Q2", this.questions.Q2);
      formData.append("Q3", this.questions.Q3);
      formData.append("Q4", this.questions.Q4);
      formData.append("Q5", this.questions.Q5);
      formData.append("Q6_1", this.questions.Q6_1);
      formData.append("Q6_2", this.questions.Q6_2);
      formData.append("Q6_3", this.questions.Q6_3);
      formData.append("Q6_4", this.questions.Q6_4);
      formData.append("Q6_5", this.questions.Q6_5);
      formData.append("Q6_6", this.questions.Q6_6);
      formData.append("Q6_7", this.questions.Q6_7);
      formData.append("age", this.questions.age);
      formData.append("gender", this.questions.gender);
      formData.append("education", this.questions.education);
      formData.append("travel_frequency", this.questions.travel_frequency);
      formData.append("message", this.questions.message);
      formData.append("adjusted", this.adjusted);
      formData.append("F1", this.selfassessment.F1);
      formData.append("F2", this.selfassessment.F2);
      formData.append("F3", this.selfassessment.F3);
      formData.append("F4", this.selfassessment.F4);
      formData.append("F5", this.selfassessment.F5);
      formData.append("F6", this.selfassessment.F6);
      formData.append("F7", this.selfassessment.F7);

      axios
        .post(url, formData, config)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "recommendation" });
        })
        .catch(e => {
          console.log(e);
          this.$data.dialog = true;
        });
    }
  },
  computed: {
    questions: {
      get() {
        return this.$store.state.questions;
      },
      set(value) {
        this.$store.commit("updateQuestions", value);
      }
    },
    selfassessment: {
      get() {
        return this.$store.state.profile;
      },
      set(value) {
        this.$store.commit("updateSelfassessment", value);
      }
    }
  }
};
</script>

<style scoped>
#message {
  width: 100%;
  height: 100px;
  font-size: 16px;
}
.question {
  font-style: italic;
  font-weight: bold;
}
h3 {
  padding: 15px 0;
}
.v-input--selection-controls {
  margin-top: 0px !important;
}
</style>