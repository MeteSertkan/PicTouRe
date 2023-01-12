<template>
  <div>
    <v-app-bar app color="#fcb69f" dark src="https://picsum.photos/1920/1080?random">
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"></v-img>
      </template>
      <template v-slot:extension>
        <v-spacer></v-spacer>
        <div class="subtitle-1">
          A
          <u>Pic</u>ture-Based
          <u>Tou</u>rism
          <u>Re</u>commender
        </div>
        <v-spacer></v-spacer>
      </template>
      <v-spacer></v-spacer>
      <a href="https://pictoprof.ec.tuwien.ac.at">
        <v-img src="@/assets/pictoure_logo_.png" height="40px" width="30px" contain></v-img>
      </a>
      <a href="https://pictoprof.ec.tuwien.ac.at" style="text-decoration: none; color: white;">
        <v-toolbar-title class="display-1 font-weight-black">PicTouRe</v-toolbar-title>
      </a>
      <v-spacer></v-spacer>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>