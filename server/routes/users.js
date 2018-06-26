const router = require('koa-router')();
const UserController = require('../controllers/users/UserController.js');
// const mongoose = require('mongoose');


router.post('/login', async (ctx) => {
  await UserController.login(ctx);
});

router.post('/register', async (ctx) => {
  // ctx.body = ctx.request.body;
  UserController.register(ctx);
});

module.exports = router;
