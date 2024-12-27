import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';
const session: AppRouteRecordRaw = {
    path: '/knowledgeLib',
    name: 'knowledgeLib',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: '知识库管理',
        requiresAuth: true,
        icon: 'icon-storage',
        order: 2,
        hideInMenu:false,
    },
    children:[
        {
            path: '/KnowledgeLib',
            name: 'KnowledgeLib',
            component: () => import('@/views/dmx/knowledgeLib/index.vue'),
            meta: {
                requiresAuth: true,
                hideInMenu:true,
                roles: ['*'],
            },
        },
    ]
};
export default session;