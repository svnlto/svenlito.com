import Vue from 'vue';
import Vuex from 'vuex';

import events from '@/data/index.json';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events,
  },
  mutations: {},
  actions: {},
});
