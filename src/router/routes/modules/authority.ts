import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const AUTHORITY: AppRouteRecordRaw = {
  path: '/authority',
  name: 'authority',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: 'menu.authority',
    requiresAuth: true,
    icon: 'icon-lock',
    order: 5,
    activeMenu:false,
  },
  children: [
    {
      path: 'users',
      name: 'users',
      component: () => import('@/views/authority/users/index.vue'),
      meta: {
        locale: 'menu.user.title',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'organization',
      name: 'organization',
      component: () => import('@/views/authority/organization/index.vue'),
      meta: {
        locale: 'menu.organization.title',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'resource',
      name: 'resource',
      component: () => import('@/views/authority/resource/index.vue'),
      meta: {
        locale: 'menu.resource.title',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/authority/role/index.vue'),
      meta: {
        locale: 'menu.role.title',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default AUTHORITY;