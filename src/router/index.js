import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Admin from '../views/Admin.vue'
import Login from '../views/Login.vue'
import { checkUserLoggedIn } from '../utils'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/admin',
    name: 'Admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: Admin,
    beforeEnter: (to, from, next) => {
      // uncoment next line to get make the auth functional
      // const isAuthenticated = checkUserLoggedIn(window.localStorage);
      const isAuthenticated = true;
      
      if(!isAuthenticated) {
        next({ name: 'Login' })
        return
      } else {
        next();
      }
    }
  },
  {
    path:  '/login',
    name: 'Login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
