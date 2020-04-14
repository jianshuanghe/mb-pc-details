// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {api1, api2, api3, api4, apiProd2} from './api';
import store from './store';
import ElementUI from 'element-ui';
import myToast from 'easytoast-f-vue';
import 'element-ui/lib/theme-chalk/index.css';
import {urlCrypto} from './utils/urlCrypto';
import {showModule} from './utils/showModule';
import {postMessage} from './utils/postMessage';

const EVN = require('../config/evn');

Vue.use(ElementUI);

Vue.use(myToast);

Vue.prototype.EVN = EVN; // 环境变量

Vue.prototype.api1 = api1; // 短信
Vue.prototype.api2 = api2; // 业务
Vue.prototype.api3 = api3; // 图片
Vue.prototype.api4 = api4; // 当前域名
Vue.prototype.apiProd2 = apiProd2; // 生产业务

Vue.prototype.urlCrypto = urlCrypto;

Vue.prototype.showModule = showModule;

Vue.prototype.postMessage = postMessage;

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;

  next();
});
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
   // mixins: [wxConfig],
  render: h => h(App)
  // template: '<App/>',
  // components: { App }
});
