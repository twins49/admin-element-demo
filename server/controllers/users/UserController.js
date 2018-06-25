/* eslint-disable */
const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
class UserController {
  // 后台用户注册
  register(ctx) {
    const data = ctx.request.body.data;
    const User = mongoose.model('User');
    const newUser = new User(ctx.request.body);
      newUser.save().then(
        ctx.body = {
          code:200,
          message:'注册成功'
        }
      ).catch(
        ctx.body = {
          code:500,
          message:error
        }
      )
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
