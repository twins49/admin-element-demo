import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// font-awesome
import '@/assets/library/font-awesome-4.7.0/css/font-awesome.min.css';

import App from './App';
import router from './router';
import { createStore } from './store';

Vue.config.productionTip = false;
Vue.use(ElementUI);
const store = createStore();
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});
