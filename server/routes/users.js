const router = require('koa-router')();
const UserController = require('../controllers/users/UserController.js');

// 后台登录
router.post('/login', async (ctx) => {
  await UserController.adminlogin(ctx);
});

// 后台管理员注册
router.post('/register', async (ctx) => {
  UserController.adminRegister(ctx);
});

// 后台账号列表
router.post('/accountLists', async (ctx) => {
  await UserController.adminAccountLists(ctx);
});

module.exports = router;
