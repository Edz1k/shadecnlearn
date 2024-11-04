import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductsView from '@/views/ProductsView.vue';
import CustomerView from '@/views/CustomerView.vue';
import SettingsView from '@/views/SettingsView.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/products',
      name: 'ProductsView',
      component: ProductsView,
    },
    {
      path: '/customers',
      name: 'CustomerView',
      component: CustomerView,
    },
    {
      path: '/settings',
      name: 'SettingsView',
      component: SettingsView,
    },
  ],
})

export default router
