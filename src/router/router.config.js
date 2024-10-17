/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        // name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/ehcarts-demo',
        // name: 'ehcarts-demo',
        component: () => import('@/views/ehcarts-demo/index'),
        meta: { title: 'ecahrts', keepAlive: false }
      },
      {
        path: '/home-test',
        // name: 'home-test',
        component: () => import('@/views/home/homeTest'),
        meta: { title: 'homeTest', keepAlive: false }
      }
    ]
  },
  {
    path: '*',
    component: () => import('@/views/error-page/404')
  }
]
