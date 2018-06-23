const Koa = require('koa');

const app = new Koa();
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();
const cors = require('koa2-cors');


// 加载bodyParser中间件
app.use(bodyParser());
app.use(cors({
  origin: 'http://localhost:8089',
  exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
  maxAge: 5,
  credentials: true,
  allowMethods: ['GET', 'PUT', 'POST', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization', 'Accept', 'x-requested-with'],
}));
// 引入子路由模块
const users = require('./routes/users');
// 挂载子路由
router.use('/api/v1/users', users.routes());
// 加载路由中间件
app.use(router.routes(), router.allowedMethods());


// 开启服务器
app.listen(3000, () => {
  console.log('[demo] route-use-middleware is starting at port 3000');
});
