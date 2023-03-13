import { createRouter, createWebHistory } from 'vue-router'
// import Layout from '../layout/layout.vue'
import Layout from '@/layouts/default.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      redirect: '/home',
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('../views/home/home.vue'),
        }
      ]
    },
    {
      path: '/example',
      component: Layout,
      redirect: '/example/table',
      name: 'Example',
      meta: { title: 'Example', icon: 'el-icon-s-help' },
      children: [
        {
          path: 'table',
          name: 'Table',
          component: () => import('@/views/example/HomeView.vue'),
          meta: { title: 'Table', icon: 'table' }
        },
        {
          path: 'tree',
          name: 'Tree',
          component: () => import('@/views/example/AboutView.vue'),
          meta: { title: 'Tree', icon: 'tree' }
        }
      ]
    }
  ]
})

export default router
