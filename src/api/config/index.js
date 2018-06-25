// 各种接口url 配置
/* eslint-disable */
const baseUrl = 'http://localhost:3000/api/v1';

const loginApi = {
  accountLogin: `${baseUrl}/admin-users/login`,
  accountRegister: `${baseUrl}/admin-users/register`
}

export  {
  loginApi
}
