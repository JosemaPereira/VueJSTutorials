import { createRouter, createWebHistory } from 'vue-router';
import Heroes from './pages/Heroes';
import Calendar from './pages/Calendar';
import Home from './pages/Home';

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/heroes',
    component: Heroes,
  },
  {
    path: '/calendar',
    component: Calendar,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
