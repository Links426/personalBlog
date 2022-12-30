const routes = [
  {
    path: '/',
    component: () => import('@/view/main/main.vue'),
    redirect:'/index',
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/view/index/index.vue'),
      },
      {
        path: 'share',
        name: 'Share',
        component: () => import('@/view/personShare/share.vue'),
      },
    ],
  },
]
export default routes
