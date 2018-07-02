import * as types from './types'; // 引入常量函数名

export default function createClock() {
  const clock = {
    namespaced: true, // 开启命名空间
    // 这里放变量
    state: {
      count: 0,
    },
    // 我们在外界通过mutation里面的函数改state,而不是直接用this.$state.count++
    mutations: {
      [types.SET_CLOCK](state, data) {
        state.count += data;
      },
    },
    // action是用来commit单个或者多个mutation函数
    actions: {
      async addCount({ commit }, step = 1) {
        await commit(types.SET_CLOCK, step);
      },
    },
    // 这个相当于vue里面的computed 计算属性，可以用来做过滤，或者筛选
    getters: {
      filterCount: state => Math.sin(state.count),
    },
  };

  return clock;
}
