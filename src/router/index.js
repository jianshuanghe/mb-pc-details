import Vue from 'vue';
import Router from 'vue-router';
import test from '@/project/test/test';
import login from '@/login/login';
import templatePro from '@/project/projectX/templatePro';
Vue.use(Router);

export default new Router({
  //  mode: 'history',
  // base: bases,
  routes: [
    {
      path: '/test',
      name: 'test',
      meta: {
        title: ''
      },
      component: test
    },
    {
      path: '/login',
      name: 'login',
      meta: {
        title: ''
      },
      component: login
    },
    {
      path: '/',
      name: 'templatePro',
      meta: {
        title: ''
      },
      component: templatePro
    }
  ]
});
