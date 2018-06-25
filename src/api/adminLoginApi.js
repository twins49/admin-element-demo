// 登录相关的api
import { axios } from '../utils/http';
import { loginApi } from './config/';

export function login(parms) {
  return axios.post(loginApi.accountLogin, parms)
    .then(res => res);
}

export function register(parms) {
  return axios.post(loginApi.accountRegister, JSON.stringify(parms))
    .then(res => res);
}
