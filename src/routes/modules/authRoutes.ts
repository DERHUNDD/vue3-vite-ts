// 登录页
export default [
  {
    path: '/auth',
    component: () => import('@/views/auth/login.vue'),
    redirect: '/auth/login',
    hidden: true,
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('@/views/auth/login.vue'),
      },
    ],
  },
];
