<template>
  <v-card flat>
     <VueFileAgent
      ref="vueFileAgent"
      :multiple="true"
      :deletable="true"
      :sortable="true"
      :accept="'image/*'"
      :maxSize="'30MB'"
      :maxFiles="7"
      :thumbnailSize="190"
      :helpText="'Choose pictures'"
      :meta="true"
      :theme="'list'"
      :disabled="dragDropDisabled"
      :errorText="{
        type: 'Invalid file type. Only pictures allowed',
        size: 'Files should not exceed 30MB in size',
      }"
      @select="filesSelected($event)"
      @delete="fileDeleted($event)"
      @sort="fileSorted($event)"
      v-model="filesData"
    ></VueFileAgent>
    <v-card-actions>
      <v-spacer></v-spacer>
      <div class="my-2">
        <v-btn
          :loading="loading"
          :disabled="(!filesDataForUpload.length || loading)" 
          @click="uploadFiles()"
          large
          color="primary"
        >
            Upload {{ filesDataForUpload.length }} files
        </v-btn>
      </div>
    </v-card-actions>
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
  </v-card>
</template>

<script>
import { mapState } from "vuex";
import axios from "axios";
import Vue from 'vue';
import VueFileAgent from 'vue-file-agent';
import VueFileAgentStyles from 'vue-file-agent/dist/vue-file-agent.css';
import { SlickList, SlickItem } from 'vue-slicksort';
Vue.use(VueFileAgent);
Vue.component('vfa-sortable-list', SlickList);
Vue.component('vfa-sortable-item', SlickItem);

export default {
  name: "ImageUpload",
  components: {

  },
  data() {
    return {
      dialog: false,
      dragDropDisabled: false,
      loading: false,
      filesData: [],
      uploadHeaders: {"Content-Type": "multipart/form-data"},
      filesDataForUpload: [],
    }
  }, 
  methods: {
    filesSelected(filesDataNewlySelected) {
      var validFilesData = filesDataNewlySelected.filter(fileData => !fileData.error);
      this.filesDataForUpload = this.filesDataForUpload.concat(validFilesData);
      //this.$refs.vueFileAgent.$children[0].$on('sort-start', this.fileSortStart);
      //this.$refs.vueFileAgent.$children[0].$on('sort-end', this.fileSortEnd);
    },
    fileDeleted(fileData) {
      var i = this.filesDataForUpload.indexOf(fileData);
      if(i !== -1){
        this.filesDataForUpload.splice(i, 1);
      }
    },
    array_move(arr, old_index, new_index) {
      if (new_index >= arr.length) {
          var k = new_index - arr.length + 1;
          while (k--) {
              arr.push(undefined);
          }
      }
      arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    },
    fileSorted(indices){
      console.log(indices);
      this.array_move(this.filesDataForUpload, indices.oldIndex, indices.newIndex);
      const url = "http://127.0.0.1:5000/backend/rank";
      //const url = "/backend/rank";
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      const formData = new FormData();
      formData.append("uuid", this.$store.state.id);
      formData.append("oldIndex", indices.oldIndex);
      formData.append("newIndex", indices.newIndex);
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
    uploadFiles() {
      this.loading=true;
      this.dragDropDisabled = true;
      const url = "http://127.0.0.1:5000/backend/predict";
      //const url = "/backend/predict";
      const config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };
      console.log(this.$store.state.id);
      const files = this.filesDataForUpload;
      console.log(files);
      const formData = new FormData();
      formData.append("uuid", this.$store.state.id);
      var i;
      for (i = 0; i < files.length; i++) {
        formData.append("file[]", files[i].file, files[i].file.name);
      }
      axios
        .post(url, formData, config)
        .then(response => {
          console.log(response.data);
          this.$store.state.profile.F1 = response.data.F1
          this.$store.state.profile.F2 = response.data.F2
          this.$store.state.profile.F3 = response.data.F3
          this.$store.state.profile.F4 = response.data.F4
          this.$store.state.profile.F5 = response.data.F5
          this.$store.state.profile.F6 = response.data.F6
          this.$store.state.profile.F7 = response.data.F7
          this.$router.push({ name: "results-and-questions" });
        })
        .catch(e => {
          console.log(e);
          this.dialog = true;
          this.loading = false
          this.dragDropDisabled = false;
        });
    }
  }
};
</script>

<style>
.vue-file-agent {
  z-index: 1;
}
</style>