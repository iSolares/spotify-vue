// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Default from "@/layouts/default/Default.vue"
import Login from "@/views/Login.vue"

const routes = [
  {
    path: '/home',
    component: Default,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login 
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
