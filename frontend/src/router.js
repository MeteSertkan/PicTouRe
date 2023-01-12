import Vue from 'vue';
import Router from 'vue-router';
import About from './views/About.vue';
import ImageSelection from './views/ImageSelection.vue';
import ResultsAndQuestions from './views/ResultsAndQuestions.vue';
import Thanks from './views/Thanks.vue';
import SevenFactorModel from './views/SevenFactorModel.vue';
import Recommendation from './views/Recommendation.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'about',
      component: About
    },
    {
      path: '/imageselection',
      name: 'imageselection',
      component: ImageSelection

    },
    {
      path: '/results-and-questions',
      name: 'results-and-questions',
      component: ResultsAndQuestions
    },
    {
      path: '/recommendation',
      name: 'recommendation',
      component: Recommendation
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks
    },
    {
      path: '/sevenfactormodel',
      name: 'sevenfactormodel',
      component: SevenFactorModel
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});
