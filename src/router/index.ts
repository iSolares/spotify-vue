// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Default from "@/layouts/default/Default.vue"
import Login from "@/views/Login.vue"
import NotFound from "@/views/Not-Found.vue"

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
  {
    path: "/:pathMatch(.*)*",
    name: "Not-Found",
    component: NotFound
  }
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
