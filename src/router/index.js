import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import UserView from '@/views/User/UserView.vue'
import UserProfileView from '@/views/User/UserProfileView.vue'
import UserHomeView from '@/views/User/UserHomeView'
import UserCartView from '@/views/User/UserCartView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/register',
    name: 'register',
    component:  RegisterView
  },
  {
    path: '/user',
    name: 'user',
    component: UserView,
    children: [
      {
        path: ':id/home',
        name: 'homeUser',
        component: UserHomeView
      },
      {
        path: ':id/profile',
        name: 'profileUser',
        component: UserProfileView
      },
      {
        path: ':id/cart',
        name: 'cartUser',
        component: UserCartView
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
