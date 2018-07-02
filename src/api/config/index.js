// 各种接口url 配置
/* eslint-disable */
const baseUrl = 'http://localhost:3000/api/v1';

const loginApi = {
  accountLogin: `${baseUrl}/admin-users/login`,
}

const accoutManage = {
  accountRegister: `${baseUrl}/admin-users/register`,
  accountLists: `${baseUrl}/admin-users/accountLists`,
}

export  {
  loginApi,
  accoutManage
}
