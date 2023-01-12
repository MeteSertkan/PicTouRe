<template>
  <v-container fluid pa-0 ma-0 style="height: 100%;">
    <v-card tile height="100%">
      <v-card class="mx-auto" max-width="900" flat>
        <v-card-title class="headline font-weight-medium">The Seven-Factor Model</v-card-title>
        <v-card-subtitle
          class="subtitle-1 font-weight-medium"
        >Where a user is represented as a mixture of seven travel-behavioural factors</v-card-subtitle>
        <v-card-text class="body-1 text-justify">
          The Seven Factor Model is a well-established framework for capturing preferences and personality of travellers. 
          The Seven-Factor Model is the result of a factor analysis combining the “Big Five” personality traits
          <a href="https://psycnet.apa.org/doiLanding?doi=10.1037%2F0022-3514.59.6.1216" target="_blank">(Goldberg 1990)</a>
          , which can be associated with the long-term behaviour of users, and 17 tourist roles proposed by 
          <a href="https://www.sciencedirect.com/science/article/pii/S0160738301000378" target="_blank">Gibson and Yiannakis (2002)</a>
          , representing short-term preferences.These factors form the basis of a seven-dimensional vector space and are referring to travel behavioural patterns summarized as Sun &amp; Chill-Out, Knowledge &amp; Travel, Independence &amp; History, Culture &amp; Indulgence, Social &amp; Sport, Action &amp; Fun, and Nature &amp; Recreation.
          Furthermore, each user is represented as mixture of the Seven-Factors
          <a href="https://link.springer.com/article/10.1007/s40558-014-0017-5" target="_blank">(Neidhadt et al. 2015)</a>
          .
        </v-card-text>
        <v-img src="@/assets/seven_factors.png" />
        <v-card-text class="body-1">
          <h3>F1 - Sun &amp; Chill-Out</h3>
          <p>
            <b style="color: green">You like:</b>
            warm weather, sun, sun bathing, being accessible
          </p>
          <p>
            <b style="color: red">You do not like:</b>
            cold or rainy weather, crowded places
          </p>
          <p>
            <b style="color: blue">You are:</b>
            full of new ideas, ingenious, efficiently, sometimes stressed, moody
          </p>

          <h3>F2 - Knowledge &amp; Travel</h3>
          <p>
            <b style="color: green">You like:</b>
            gaining knowledge, workshops, taking courses
          </p>
          <p>
            <b style="color: red">You do not like:</b>
            doing sweet-little nothing, lying on the beach, having nothing to discover or to experience
          </p>
          <p>
            <b style="color: blue">You are:</b>
            educationally oriented, helpful and unselfish, communicative and open minded, a forgiving nature
          </p>

          <h3>F3 - Independence &amp; History</h3>
          <p>
            <b style="color: green">You like:</b>
            independent travelling, tradition &amp; history, famous locations, discovering the meaning of life
          </p>
          <p>
            <b style="color: red">You do not like:</b>
            organized tours &amp; travels, loud and crowded events
          </p>
          <p>
            <b style="color: blue">You are:</b>
            open minded, a seeker, philosophical, sentimental, a thinker, flexible, curious
          </p>

          <h3>F4 - Culture &amp; Indulgence</h3>
          <p>
            <b style="color: green">You like:</b>
            history, art, culture, first class hotel &amp; travel, gourmet restaurants
          </p>
          <p>
            <b style="color: red">You do not like:</b>
            fast food, low budget hotels, youth hostels
          </p>
          <p>
            <b style="color: blue">You are:</b>
            educated, a connoisseur, full of energy, enthusiastic, curios
          </p>

          <h3>F5 - Social &amp; Sports</h3>
          <p>
            <b style="color: green">You like:</b>
            getting to know the country and its people, trying local delicacies, learning the language and getting in touch with locals
          </p>
          <p>
            <b style="color: red">You do not like:</b>
            ordinary tourist routes, big noisy clubs and locations
          </p>
          <p>
            <b style="color: blue">You are:</b>
            sportive, social, natural, full of energy and positivity
          </p>

          <h3>F6 - Action &amp; Fun</h3>
          <p>
            <b style="color: green">You like:</b>
            action, wild night life, exclusive events, VIP parties
          </p>
          <p>
            <b style="color: red">You do not like:</b>
            calm locations
          </p>
          <p>
            <b style="color: blue">You are:</b>
            thrill seeking, enjoying your life, seeking the challenges, a little bit loud, bubbly
          </p>

          <h3>F7 - Nature &amp; Recreation</h3>
          <p>
            <b style="color: green">You like:</b>
            silence and peace of nature, clearing your mind, relaxing and taking breaks
          </p>
          <p>
            <b style="color: red">You do not like:</b>
            crowded places, large cities and metropolises
          </p>
          <p>
            <b style="color: blue">You are:</b>
            completely relaxed, in balance with your body &amp; soul, decent, not hectic
          </p>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
</style>