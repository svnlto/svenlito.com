import Vue from 'vue';
import VueAnalytics from 'vue-analytics';
import VueMq from 'vue-mq';
import WebFont from 'webfontloader';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

const isProd = process.env.NODE_ENV === 'production';

WebFont.load({
  classes: false,
  events: false,
  custom: {
    families: ['apercu, iosevka'],
    urls: ['/fonts.css']
  }
});

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
    small: 479,
    medium: 838,
    large: Infinity
  }
});

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app');
