<template>
  <v-card-text class="body-1 font-weight-medium text-center">
    <div class="factor">
      <div class="tooltip">
        Sun &amp; Chill-Out
        <span class="tooltiptext">a neurotic sun lover, who likes warm weather and sun bathing and does not like
cold, rainy or crowded places</span>
      </div>
      - Score = {{profile.F1}}
    </div>
    <div class="factor">
      <div class="tooltip">
        Knowledge &amp; Travel
        <span class="tooltiptext">an open minded, educational and well-organized tourist, who likes travelling in groups and gaining knowledge, rather than being lazy</span>
      </div>
      - Score = {{profile.F2}}
    </div>
    <div class="factor">
      <div class="tooltip">
        Independence &amp; History
        <span class="tooltiptext">an independent tourist, who is searching for the meaning of life, is interested in history and
tradition, and likes to travel independently, rather than organized tours and travels</span>
      </div>
      - Score = {{profile.F3}}
    </div>
    <div class="factor">
      <div class="tooltip">
        Culture &amp; Indulgence
        <span class="tooltiptext">an extroverted, culture and history loving high-class tourist, who is also a connoisseur of good food and
wine</span>
      </div>
      - Score = {{profile.F4}}
    </div>
    <div class="factor">
      <div class="tooltip">
        Social &amp; Sports
        <span class="tooltiptext">an open minded sportive traveller, who loves to socialize with locals and does
not like areas of intense tourism</span>
      </div>
      - Score = {{profile.F5}}
    </div>
    <div class="factor">
      <div class="tooltip">
        Action &amp; Fun - Score
        <span class="tooltiptext">a jet setting thrill seeker, who loves action, party, and
exclusiveness and avoids quiet and peaceful places</span>
      </div>
      - Score = {{profile.F6}}
    </div>
    <div class="factor">
      <div class="tooltip">
        Nature &amp; Recreation
        <span class="tooltiptext">a nature and silence lover,
who wants to escape from everyday life and avoids crowded places and large cities</span>
      </div>
      - Score = {{profile.F7}}
    </div>
  </v-card-text>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "SevenFactors",
  data() {
    return {};
  },
  computed: mapState(["profile"])
};
</script>

<style scoped>

/* Tooltip container */
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted #C51162; /* If you want dots under the hoverable text */
  font-weight: bold;
}

/* Tooltip text */
.tooltip .tooltiptext {
  visibility: hidden;
  width: 300px;
  background-color: #C51162;
  color: #fff;
  text-align: justify!important;
  border-radius: 6px;
  padding: 5px;
  
  /* Position the tooltip */
  position: absolute;
  z-index: 1;
  bottom: 100%;
  left: 50%;
  margin-left: -120px;
}

/* Show the tooltip text when you mouse over the tooltip container */
.tooltip:hover .tooltiptext {
  visibility: visible;
}
</style>