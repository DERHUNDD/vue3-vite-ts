import { authRoutes, exceptionRoutes } from './modules/routes';

const asyncRouterMap = [
  {
    path: '/',
    name: 'Layout',
    // redirect: '/home',
    // 基本样式布局
    component: () => import('@/views/layout/baseLayout.vue'),
  },
];
const constantRouterMap = [...asyncRouterMap, ...authRoutes, ...exceptionRoutes];

export { asyncRouterMap, constantRouterMap };
