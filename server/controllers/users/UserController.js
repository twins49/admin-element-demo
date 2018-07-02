/* eslint-disable */
const Koa = require('koa');
const app = new Koa();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { guid } = require('../../utils/string.js');
/**
 * 用户管理类集合（含 后台注册、后台登录、后台账号列表）
 * @author yoyo
 * @class UserController
 */
class UserController {
  // 后台用户注册
  adminRegister(ctx) {
    const UserModel = mongoose.model('User');
    const newUser = new UserModel(ctx.request.body);
      newUser.save().then(
        ctx.body = {
          code:200,
          message:'注册成功'
        }
      ).catch((err)=> {
        ctx.body = {
          code:500,
          message:err
        }
      })
  }

  // 用户登录
  async adminlogin(ctx) {
    // await ……
    const param = ctx.request.body;
    const UserModel = mongoose.model('User');
    await UserModel.findOne({name:param.name}, { pwd:1 }).exec().then(async (user) => {
      const pwdMatchFlag =bcrypt.compareSync(param.pwd, user.pwd);
      if (pwdMatchFlag) {
        const token = guid();
        ctx.body = {
          code:200,
          message:'登录成功',
          data: {
            token,
          }
        }
      } else {
        ctx.body = {
          code:500,
          message:'账号或者密码错误'
        }
      }
    })
      .catch(()=> {
        ctx.body = {
          code:500,
          message:'账号或者密码错误'
        }
      })

  }

  // 后台账号列表
  async adminAccountLists(ctx) {
    let newArr = []; // 过滤后数组
    let result = {}; // 返回前端结果
    const UserModel = mongoose.model('User');
    await UserModel.find().exec().then(async(users) => {
      if (users) {
        for (let i = 0; i < users.length; i++) {
          newArr.push({
            authority: this._authorityForMat(users[i]['authority']),
            createTime: users[i]['createTime'],
            lastLogin: users[i]['lastLogin'],
            name: users[i]['name'],
          });
        }
        result = {
          code:200,
          message:'获取账号列表成功',
          data:newArr
        }
      } else {
        result = {
          code:500,
          message:'获取账号列表失败',
        }
      }
    })
    ctx.body = result;
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

  _authorityForMat(authority) {
    switch (authority) {
      case 0:
        return '超级管理员';
        break;
      case 1:
        return '管理员';
        break;
      default:
        return '编辑'
        break;
    }
  }
}
module.exports = new UserController();
