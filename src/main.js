import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueMq from 'vue-mq';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const isProd = process.env.NODE_ENV === 'production';

Vue.use(VueAnalytics, {
  id: 'UA-30900799-1',
  router,
  debug: {
    enabled: !isProd,
    sendHitTask: isProd
  }
});

Vue.use(VueMq, {
  breakpoints: {
    sm: 800,
    md: Infinity
  }
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
