<template>
<v-stepper :value="stepNumber" alt-labels tile>
    <v-stepper-header>
      <v-stepper-step step="1">About</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="2">Picture Upload</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="3">Profile</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="4">Recommendation</v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step step="5">The End</v-stepper-step>
    </v-stepper-header>
  </v-stepper>
</template>

<script>
export default {
  name: "Stepper",
  props: ['stepNumber']
}
</script>

<style scoped>
</style>