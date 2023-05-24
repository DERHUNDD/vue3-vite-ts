import { createRouter, createWebHashHistory } from 'vue-router';
import { constantRouterMap } from './baseRouter';

const router = createRouter({
  history: createWebHashHistory(), //可传参数，配置base路径，例如'/app'
  routes: constantRouterMap,
});

export default router;
