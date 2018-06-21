const router = require('koa-router')();
const UserController = require('../controllers/users/UserController.js');

router.post('/login', async (ctx) => {
  ctx.body = ctx.request.body;
  // UserController.login(ctx);
});

module.exports = router;
