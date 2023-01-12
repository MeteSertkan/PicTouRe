import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueApexCharts from "vue-apexcharts";
import store from './store/store';
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

const vuetifyOptions = {}
Vue.use(Vuetify)

Vue.config.productionTip = false;

Vue.component("apexchart", VueApexCharts);

new Vue({
  store,
  router,
  vuetify: new Vuetify(vuetifyOptions),
  render: h => h(App)
}).$mount('#app')
