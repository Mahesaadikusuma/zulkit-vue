import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: 'Home',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: {
        title: 'Login',
      },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: {
        title: 'Register',
      },
    },

    // path : '/details/:id',
    {
      path: '/product/:id',
      name: 'product',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/DetailView.vue'),
      meta: {
        title: 'Product',
      },
    },
    {
      path: '/success',
      name: 'success',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/SuccessView.vue'),
      meta: {
        title: 'Success',
      },
    },
    {
      path: '/pricing',
      name: 'pricing',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/PricingView.vue'),
      meta: {
        title: 'Pricing',
      },
    },

    {
      // path: '/about',
      // name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import('../views/AboutView.vue'),
    },
  ],
})

// Ini set Set judul global (semua halaman)
router.beforeEach((to, from, next) => {
  console.log(to)
  console.log(from)
  console.log(next)

  if (to.params) {
    document.title = `${to.meta?.title ?? 'Page'} ${('-', to.params.id ?? '')}`
  } else {
    document.title = to.meta?.title ?? 'Default Title'
  }

  next()
})

export default router
