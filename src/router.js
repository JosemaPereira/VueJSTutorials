import { createRouter, createWebHistory } from 'vue-router';
import Heroes from './pages/Heroes';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Markdown from './pages/Markdown';

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
  {
    path: '/markdown',
    component: Markdown,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;