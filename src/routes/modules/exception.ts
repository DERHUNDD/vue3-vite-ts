// 错误页
export default [
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/exception/404.vue'),
    meta: { title: '404-未找到该页', keepAlive: true, icon: 'HomeOutlined' },
    children: [],
  },
  {
    path: '/403',
    name: '403',
    component: () => import('@/views/exception/403.vue'),
    meta: { title: '403-权限访问此站', keepAlive: true, icon: 'HomeOutlined' },
    children: [],
  },
  {
    path: '/500',
    name: '500',
    component: () => import('@/views/exception/500.vue'),
    meta: { title: '500-内部服务器错误', keepAlive: true, icon: 'HomeOutlined' },
    children: [],
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: () => import('@/views/exception/404.vue'),
    meta: { title: '404-未找到该页', keepAlive: true, icon: 'HomeOutlined' },
    children: [],
  },
];
