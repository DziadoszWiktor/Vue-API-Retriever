import { createRouter, createWebHistory } from 'vue-router'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomeView.vue')
    },
    {
        path: '/home', // add a separate route for "/home"
        redirect: { name: 'Home' } // redirect to the "Home" route
      },
    {
      path: '/about',
      name: 'About',
      component: () => import('./views/AboutView.vue')
    },
    { 
      path: "/:pathMatch(.*)*", 
      name: 'NotFound',
      component: () => import('./views/NotFoundView.vue') 
    }
  ]
})