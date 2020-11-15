import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import permissionModules from './modules/permission.js';
import getters from './getters.js';

export default new Vuex.Store({
  modules: {
    permission: permissionModules
  },
  getters
});