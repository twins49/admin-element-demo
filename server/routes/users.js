const router = require('koa-router')();

router.get('/api/user/login', (ctx) => {
  ctx.body = 'this a users response!';
});

module.exports = router;
