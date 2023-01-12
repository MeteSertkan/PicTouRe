<template>
  <v-container fluid pa-0 ma-0 style="height: 100%;">
    <Stepper stepNumber="4"></Stepper>
    <v-card tile height="100%">
      <v-card class="mx-auto" max-width="900" flat>
        <v-card-title class="headline font-weight-medium">Here are some Recommendations</v-card-title>
        <v-card-subtitle class="subtitle-1 font-weight-medium">Which one would you choose?</v-card-subtitle>
        <v-alert
          color="#C51162"
          dark
          icon="mdi-heart"
          prominent
        >Select one of the recommended destinations by simply pressing the corresponding heart-button (press a second time to unselect your choice).</v-alert>
        <v-alert
          color="#C51162"
          dark
          icon="mdi-heart-broken"
          prominent
        >If none of the recommended destinations fit your preferences, please press the according button to further proceed (press a second time to unselect your choice).</v-alert>
        <v-alert
          icon="mdi-information-outline"
          prominent
          text
          type="info"
          class="text-justify"
        >Note, you can find more details about the recommended destinations by simply pressing the considered recommendation's Wikipedia or Google buttons.</v-alert>
        <v-row dense>
          <v-col v-for="(r, index) in recommendations" :key="r.gid" cols="12" :md="column_size">
            <v-card class="rec-card" :disabled="!(selected_gid == 0 || selected_gid == r.gid)" outlined>
              <v-card-title v-text="r.title"></v-card-title>
               <v-card-subtitle v-text="r.subtitle"></v-card-subtitle>
               <slick ref="slick" :options="slickOptions" @afterChange="increasePictureInteractionCount(index)">
                  <img 
                  v-for="n in r.pic_num" 
                  :src="'/pics/' + r.gid + '/' + n + '.jpg'"
                  :key="r.gid + '-' + n"
                 />
               </slick>
              <v-btn fab dark :color='(selected_gid == r.gid) ? "#C51162" : "secondary"' absolute right top style="top: 5px; right: 5px;" @click="select(index, r.gid)">
                <v-icon dark>mdi-heart</v-icon>
              </v-btn>
              <v-btn fab dark small color="secondary" absolute right top style="top: 185px; right: 5px; opacity: 0.7; width: 40px;" @click="next(index)">
                <v-icon dark>mdi-chevron-right</v-icon>
              </v-btn>
              <v-btn fab dark small color="secondary" absolute right top style="top: 185px; left: 5px; opacity: 0.7; width: 40px;" @click="prev(index)">
                <v-icon dark>mdi-chevron-left</v-icon>
              </v-btn>
              <v-card-actions class="rec-card-actions">
                <v-btn color="primary" large icon :href="r.wiki_url" target="_blank"  @click="setInfoInteraction(true, index)">
                  <v-icon>mdi-wikipedia</v-icon>
                </v-btn>
                <v-btn color="primary" large icon :href="r.gtravel_url" target="_blank"  @click="setInfoInteraction(false, index)">
                  <v-icon>mdi-google</v-icon>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
        <v-banner single-line>
          <v-btn :color='(selected_gid == -1) ? "#C51162" : "secondary"' large fab :disabled="!(selected_gid == 0 || selected_gid == -1)" @click="select(-1, -1)" :dark="(selected_gid == -1)">
            <v-icon >mdi-heart-broken</v-icon>
          </v-btn>
          <span style="margin-left: 10px;">Press, if no match!</span>
        </v-banner>
        <v-card-actions>
          <v-spacer></v-spacer>
          <div class="my-2">
            <v-btn
              :disabled="(selected_gid == 0)"
              @click="finish()"
              large
              color="primary"
            >Finish</v-btn>
          </div>
        </v-card-actions>
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
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
  components: {
    Stepper, 
    Slick
  },
  data() {
    return {
      dialog: false,
      selected_position: 0,
      selected_gid: 0,
      recommendations: [], 
      column_size: 6,
      pictureInteractionCounts: [],
      wikiInteractionFlag: [],
      gtravelInteractionFlag: [],
      slickOptions: {
        arrows: false,
        variableWidth: true
      },
    
    };
  }, 
  mounted() {
    //timer
    let url = "http://127.0.0.1:5000/backend/time";
    //let url = "/backend/time";
    const config = {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    };
    let formData = new FormData();
    formData.append("uuid", this.$store.state.id);
    formData.append("step", 4);
    axios
      .post(url, formData, config)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
        this.$data.dialog = true;
      });
    
    // tracking display size
    url = "http://127.0.0.1:5000/backend/display";
    //url = "/backend/display";
    formData = new FormData();
    formData.append("uuid", this.$store.state.id);
    formData.append("display", this.$vuetify.breakpoint.name);
    axios
      .post(url, formData, config)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
        this.$data.dialog = true;
      });


    //recommendation
    url = "http://127.0.0.1:5000/backend/recommend";
    //url = "/backend/recommend";
    const user_id = this.$store.state.id;
    axios
    .get(url, {params: {uuid: user_id}})
    .then(response => {
      console.log(response.data);
      this.recommendations = response.data;
      if(this.recommendations.length == 3) this.column_size = 4;
      this.pictureInteractionCounts = new Array(this.recommendations.length).fill(0);
      this.wikiInteractionFlag = new Array(this.recommendations.length).fill("");
      this.gtravelInteractionFlag = new Array(this.recommendations.length).fill("");
      this.recommendations = this.recommendations.map(r => {
        r.pic_num = this.shuffle(Array.from(new Array(r.pic_num),(val,index)=>index+1))
        return r
      })

    })
    .catch(e => {
      console.log(e);
      this.$data.dialog = true;
    })
  },
  methods: {
    shuffle(arr) {
      var i,
          j,
          temp;
      for (i = arr.length - 1; i > 0; i--) {
          j = Math.floor(Math.random() * (i + 1));
          temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
      }
      return arr;    
    },
    increasePictureInteractionCount(index) {
      this.pictureInteractionCounts[index] = this.pictureInteractionCounts[index] + 1;
    },
    setInfoInteraction(wiki, index) {
      if(wiki) {
        this.wikiInteractionFlag[index] = true;
      }
      else {
        this.gtravelInteractionFlag[index] = true;
      }
    },
    next(idx) {
      this.$refs.slick[idx].next();
    },
    prev(idx) {
      this.$refs.slick[idx].prev();
    },
    reInit(idx) {
        // Helpful if you have to deal with v-for to update dynamic lists
        this.$nextTick(() => {
            this.$refs.slick[idx].reSlick();
        });
    },
    select(selected_index, selected_gid) {
        if(this.selected_gid == selected_gid){
            this.selected_position = 0
            this.selected_gid = 0
        }
        else {
            this.selected_position = selected_index + 1
            this.selected_gid = selected_gid
        }
    },
    finish() {
      const url = "http://127.0.0.1:5000/backend/finish";
      //const url = "/backend/finish";
      const config = {
          headers: {
          "Content-Type": "multipart/form-data"
          }
      };
      const formData = new FormData();
      formData.append("uuid", this.$store.state.id);
      formData.append("position", this.selected_position);
      formData.append("gid", this.selected_gid);
      var i;
      for (i = 0; i < this.pictureInteractionCounts.length; i++) {
        formData.append("pictureInteractionCounts[]", this.pictureInteractionCounts[i]);
      }
      for (i = 0; i < this.wikiInteractionFlag.length; i++) {
        formData.append("wikiInteractionFlag[]", this.wikiInteractionFlag[i]);
      }
      for (i = 0; i < this.gtravelInteractionFlag.length; i++) {
        formData.append("gtravelInteractionFlag[]", this.gtravelInteractionFlag[i]);
      }
      axios
          .post(url, formData, config)
          .then(response => {
              console.log(response.data);
              this.$router.push({ name: "thanks" });
          })
          .catch(e => {
              console.log(e);
              this.$data.dialog = true;
          });
    }
  }
};
</script>

<style>
.rec-card {
  padding: 0px 5px 50px 5px;
}
.rec-card-actions {
  position: absolute;
  bottom: 0px;
  right: 0px;
}
.slick-slide > div {
  padding: 0 0.1rem;
} 
</style>