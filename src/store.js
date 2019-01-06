import Vue from 'vue';
import Vuex from 'vuex';

import data from '../data/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    events: data
  },
  mutations: {},
  actions: {}
});
