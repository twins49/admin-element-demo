const Koa = require('koa');

const app = new Koa();
const router = require('koa-router')();

const users = require('./routes/users');

app.use(router.routes(), router.allowedMethods());

router.use('/users', users.routes(), users.allowedMethods());

app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000');
});
