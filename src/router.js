import { createRouter, createWebHistory } from 'vue-router';
import Heroes from './pages/Heroes';
import Calendar from './pages/Calendar';
import Home from './pages/Home';
import Markdown from './pages/Markdown';
import Slider from './pages/Slider';
import Calculator from './pages/Calculator';
import ReusableModal from './pages/ReusableModal';

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
  {
    path: '/slider',
    component: Slider,
  },
  {
    path: '/calculator',
    component: Calculator,
  },
  {
    path: '/modal',
    component: ReusableModal,
  },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
