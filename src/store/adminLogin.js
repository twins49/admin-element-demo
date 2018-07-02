import { adminlogins } from 'api/adminApi';

import * as types from './types'; // 引入常量函数名

export default function createAdminLogin() {
  const adminlogin = {
    namespaced: true, // 开启命名空间
    // 这里放变量
    state: {
      adminToken: null,
    },
    // 我们在外界通过mutation里面的函数改state,而不是直接用this.$state.count++
    mutations: {
      [types.SET_TOKEN](state, token) {
        state.adminToken = token;
        window.localStorage.setItem('token', token);
      },
      [types.DELETE_TOKEN](state) {
        state.adminToken = null;
        window.localStorage.removeItem('token');
      },
    },
    // action是用来commit单个或者多个mutation函数
    actions: {
      // 后台登录
      login({ commit }, formData) {
        // 调用后台登录API
        return adminlogins(formData).then(({ data }) => {
          if (data.code === 200) {
            commit(types.SET_TOKEN, data.data.token);
          }
          return data;
        })
          .catch((err) => {
            throw err;
          });
      },
    },
    // 这个相当于vue里面的computed 计算属性，可以用来做过滤，或者筛选
    getters: {
      // filterCount: state => Math.sin(state.count),
    },
  };

  return adminlogin;
}
