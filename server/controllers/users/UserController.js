/* eslint-disable */
const Koa = require('koa');
const app = new Koa();

class UserController {
  // 用户注册
  async register() {
    // await ……
    app.use( ctx => {
      let request = ctx.request
      let request_query = request.query
      let request_querystring = request.querystring

      let ctx_query = ctx.query
      let ctx_querystring = ctx.querystring

      ctx.body = {
          request_query,
          request_querystring,
          ctx_query,
          ctx_querystring
      }
    })
  }

  // 用户登录
  async login(ctx) {
    // await ……
    // ctx.body = ctx.request;
  }

  // 用户退出
  async logout() {
    // await ……
  }

  // 更新用户资料
  async put() {
    // await ……
  }

  // 删除用户
  async deluser() {
    // await ……
  }

  // 重置密码
  async resetpwd() {
    // await ……
  }
}
module.exports = new UserController();
