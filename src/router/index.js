import Vue from 'vue';
import Router from 'vue-router';
import Login from 'views/Login';
import NotFound from 'views/404';
import Home from 'components/MainPage/MainPage';
import Page4 from 'views/nav2/Page4';

Vue.use(Router);

export default new Router({
  routes: [
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
      iconCls: 'fa fa-id-card-o',
      children: [
        { path: '/page4', component: Page4, name: '页面4' },
      ],
    },
  ],
});
