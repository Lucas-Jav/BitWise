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
    component: LoginView,
    async logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      this.$router.push('/login');
    },
    beforeRouteEnter(to, from, next) {
      const vm = this;
      vm.logout();
      next();
    },
  },
  {
    path: '/register',
    name: 'register',
    component:  RegisterView
  },
  {
    path: '/user/:id',
    name: 'user',
    component: UserView,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'home',
        name: 'homeUser',
        component: UserHomeView
      },
      {
        path: 'profile',
        name: 'profileUser',
        component: UserProfileView
      },
      {
        path: 'cart',
        name: 'cartUser',
        component: UserCartView
      }
    ],
    beforeEnter: (to, from, next) => {
      const userId = to.params.id;
      const authenticatedUserId = localStorage.getItem('userId');

      if (userId === authenticatedUserId) {
        next();
      } else {
        next('/login');
      }
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
