import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';

const DMX: AppRouteRecordRaw = {
  path: '/dmx',
  name: 'dmx',
  component: DEFAULT_LAYOUT,
  meta: {
    locale: '大模型',
    icon: 'icon-user',
    requiresAuth: true,
    order: 0,
    hideInMenu:false
  },
  children: [
    {
      path: 'knowledgeLib',
      name: 'knowledgeLib',
      component: () => import('@/views/dmx/knowledgeLib/index.vue'),
      meta: {
        locale: '知识库管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'model',
      name: 'model',
      component: () => import('@/views/dmx/model/index.vue'),
      meta: {
        locale: '模型管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
    {
      path: 'intelligentAgent',
      name: 'intelligentAgent',
      component: () => import('@/views/dmx/IntelligentAgent/index.vue'),
      meta: {
        locale: '智能体管理',
        requiresAuth: true,
        roles: ['*'],
      },
    },
  ],
};

export default DMX;
