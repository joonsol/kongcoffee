
import { createWebHistory, createRouter } from "vue-router";
import Product from './components/Product.vue';
import Company from './components/Company.vue';
const routes = [
  {
    path: "/product",
    component: Product,
  },
  {
    path: "/company",
    component: Company,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 
