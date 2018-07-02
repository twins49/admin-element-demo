import Vue from 'vue';
import Router from 'vue-router';
import Login from 'views/Login';
import NotFound from 'views/404';
import Home from 'components/MainPage/MainPage';
import AdminRegister from 'views/Admin-register/register';
import accountLists from 'views/Admin-register/';
import Page4 from 'views/nav2/Page4';
import Page5 from 'views/nav2/Page5';
import Page6 from 'views/nav2/Page6';

import { createStore } from '../store';

const store = createStore();

Vue.use(Router);
const routes = [
  {
    path: '/login',
    component: Login,
    name: '',
    hidden: true,
  },
  {
    path: '/404',
    component: NotFound,
    name: '404',
    hidden: true,
  },
  {
    path: '/',
    component: Home,
    name: '导航二',
    meta: {
      requireAuth: true,
    },
    iconCls: 'fa fa-id-card-o',
    children: [
      { path: '/page4', component: Page4, name: '页面4' },
      { path: '/page5', component: Page5, name: '页面5' },
      { path: '/page6', component: Page6, name: '页面6' },
    ],
  },
  {
    path: '/',
    component: Home,
    name: '后台注册',
    iconCls: 'el-icon-setting',
    children: [
      { path: '/a-register', component: AdminRegister, name: '管理权限分配', hidden: true },
      { path: '/a-accountLists', component: accountLists, name: '后台用户列表' },
    ],
  },

];
// 每次路由跳转都把token赋值给vuex
if (!store.state.token && window.localStorage.getItem('token')) {
  store.state.toke = window.localStorage.getItem('token');
}

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token || window.localStorage.getItem('token')) {
      next();
    } else {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
      });
    }
  } else {
    next();
  }
});

export default router;
