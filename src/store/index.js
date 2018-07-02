import Vue from 'vue';
import Vuex from 'vuex';
import createClock from './clock';
import createAdminLogin from './adminLogin';

Vue.use(Vuex);

/* eslint-disable import/prefer-default-export */
export function createStore() {
  const clock = createClock(); // 添加一个功能存储模块
  const adminLogin = createAdminLogin();

  return new Vuex.Store({
    strict: true, // 严格模式的状态库
    modules: {
      clock,
      adminLogin,
    },
  });
}
