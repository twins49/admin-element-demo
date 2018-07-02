// 登录相关的api
import { axios } from '../utils/http';
import { loginApi, accoutManage } from './config/';

// 后台登录
export async function adminlogins(parms) {
  const result = await axios.post(loginApi.accountLogin, parms);
  return result;
}
// 后台账号注册
export function register(parms) {
  return axios.post(accoutManage.accountRegister, JSON.stringify(parms))
    .then(res => res);
}

// 获取后台账号列表
export function adminAccountLists() {
  return axios.post(accoutManage.accountLists)
    .then(res => res);
}
