import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import RegisterView from '@/views/RegisterView.vue'
import LoginView from '@/views/LoginView.vue'
import UserView from '@/views/User/UserView.vue'
import UserAccountView from '@/views/User/UserAccountView.vue'
import UserHomeView from '@/views/User/UserHomeView.vue'
import UserCartView from '@/views/User/UserCartView.vue'
import UserNotFoundView from '@/views/User/UserNotFoundView.vue'
import axios from 'axios'

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
      const id = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      await axios.patch(`http://localhost:3000/users/${id}`, { // bota o usuario como deslogado na aplicação
        logged: false
      })

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
    props: (route) => (
      { userId: route.params.id }, { dados: route.params.dados }
    ),
    children: [
      {
        path: 'home',
        name: 'homeUser',
        component: UserHomeView
      },
      {
        path: 'account',
        name: 'accountUser',
        component: UserAccountView,
        props: (route) => (  // data
          { userId: route.params.id }, { dados: route.params.dados }
        ),
        beforeEnter: (to, from, next) => {
          const authenticatedUserId = localStorage.getItem('userId');
            axios.get(`http://localhost:3000/users/${authenticatedUserId}`).then(res => {
              to.params.dados = res.data;
              next();
            })
        }
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
        axios.get(`http://localhost:3000/users/${authenticatedUserId}`).then(res => { //data
          to.params.dados = res.data;
          next();
        }).catch(err => {
          console.error(err);
          next('/');
        })
        
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  },
  {
    path: '/404',
    name: 'not-found',
    component: UserNotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// guarda de rota global
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('token') !== null && localStorage.getItem('userId') !== null;

  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!isLoggedIn) {
      next({ name: 'not-found' })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    if (isLoggedIn) {
      next({ name: 'home' })
    } else {
      next()
    }
  } else {
    next()
  }
})

/* router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const isAuthenticated = localStorage.getItem('token') !== null;

  if (requiresAuth && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
}); */

export default router
