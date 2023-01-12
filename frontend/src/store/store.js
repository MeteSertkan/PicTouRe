import Vuex from 'vuex';
import Vue from 'vue';
import uuidv4 from 'uuid/v4';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  state: {
    id: uuidv4(),
    selfassessment: {
      F1: 50,
      F2: 50,
      F3: 50,
      F4: 50,
      F5: 50,
      F6: 50,
      F7: 50
    },
    profile: {
      F1: 50,
      F2: 50,
      F3: 50,
      F4: 50,
      F5: 50,
      F6: 50,
      F7: 50
    },
    questions: {
      Q1: '',
      Q2: '',
      Q3: '',
      Q4: '',
      Q5: '',
      Q6_1: '',
      Q6_2: '',
      Q6_3: '',
      Q6_4: '',
      Q6_5: '',
      Q6_6: '',
      Q6_7: '',
      age: '',
      gender: '',
      education: '',
      travel_frequency: '',
      message: ''

    },
    isUpload: true,
    isLoading: false,
    isNext: true
  },
  getters: {
    getProfileSeries: state => {
      return [
        {
          name: "Picture-Based",
          data: [state.profile.F1, state.profile.F2, state.profile.F3, state.profile.F4, state.profile.F5, state.profile.F6, state.profile.F7]
        }
      ]
    },
    getProfileComparisonSeries: state => {
      return [
        {
          name: "Self-Assessed",
          data: [state.selfassessment.F1, state.selfassessment.F2, state.selfassessment.F3, state.selfassessment.F4, state.selfassessment.F5, state.selfassessment.F6, state.selfassessment.F7]
        },
        {
          name: "Picture-Based",
          data: [state.profile.F1, state.profile.F2, state.profile.F3, state.profile.F4, state.profile.F5, state.profile.F6, state.profile.F7]
        }
      ]
    }
  },
  mutations: {
    updateSelfassessment(state, payload) {
      state.selfassessment = payload
    },
    updateQuestions(state, payload) {
      state.questions = payload
    },
    updateProfile(state, payload) {
      state.profile = payload
    }
  },
  actions: {

  }
});