import Vue from 'vue';
import Vuex from 'vuex';
import createLogin from './login';

Vue.use(Vuex);

/* eslint-disable import/prefer-default-export */
export function createStore() {
  const login = createLogin();
  return new Vuex.Store({
    modules: {
      login,
    },
  });
}
