// 登录相关的api
import { axios } from '../utils/http';
import { loginApi } from './config/';

export default function login(parms) {
  return axios.post(loginApi.accountLogin, parms)
    .then(res => res);
}
