import { createRouter,createWebHashHistory } from 'vue-router';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import { appRoutes } from './routes';
import { REDIRECT_MAIN, NOT_FOUND_ROUTE } from './routes/base';
import createRouteGuard from './guard';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'DCMeeting',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/success',
      name: 'success',
      component: () => import('@/views/result/success/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/DCMeeting',
      name: 'DCMeeting',
      component: () => import('@/views/DCMeeting/home/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: () => import('@/views/DCMeeting/meeting/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/conferenceDetails',
      name: 'conferenceDetails',
      component: () => import('@/views/DCMeeting/conferenceDetails/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/officeDetails',
      name: 'officeDetails',
      component: () => import('@/views/DCoffice/home/index.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/officeList',
      name: 'officeList',
      component: () => import('@/views/DCoffice/home/list.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: '/officeMeeting',
      name: 'officeMeeting',
      component: () => import('@/views/DCoffice/home/meeting.vue'),
      meta: {
        requiresAuth: false,
      },
    },
    // ...appRoutes,
    // REDIRECT_MAIN,
    // NOT_FOUND_ROUTE,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

createRouteGuard(router);

export default router;
