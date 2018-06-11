// 登录
import * as types from './type';

export default function createLogin() {
  const login = {
    namespace: true,
    state: {
      token: null,
    },
    mutations: {
      [types.LOGIN]: (state, token) => {
        state.token = token;
      },
      [types.LOGOUT]: (state) => {
        state.token = null;
        window.localStorage.removeItem('token');
      },
    },
  };
  return login;
}
