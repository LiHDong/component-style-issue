import {
  createRouter, createWebHistory,
} from 'vue-router';

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/test',
      component: () => import(/* webpackChunkName: "test" */ './views/Test.vue'),
    },
  ],
});

export default router;
