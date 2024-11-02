import { createWebHistory, createRouter } from 'vue-router';

import FloatingBubble from '@/components/FloatingBubble.vue';
import Home from '@/components/Home.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/floating-bubble', component: FloatingBubble },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
