const router = require('koa-router')();
const UserController = require('../controllers/users/UserController.js');

router.post('/login', async (ctx) => {
  ctx.body = ctx.request.body;
  // UserController.login(ctx);
});

router.post('/register', async (ctx) => {
  // ctx.body = ctx.request.body;
  UserController.register(ctx);
});

module.exports = router;
