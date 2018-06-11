import Vue from 'vue';
import Router from 'vue-router';
import Login from 'views/Login';
import NotFound from 'views/404';
import Home from 'components/MainPage/MainPage';
import Page4 from 'views/nav2/Page4';
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
    name: '',
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
    ],
  },
];
const router = new Router({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(r => r.meta.requireAuth)) {
    if (store.state.token) {
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
