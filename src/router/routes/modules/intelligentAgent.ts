import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';
const session: AppRouteRecordRaw = {
    path: '/intelligentAgent',
    name: 'intelligentAgent',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: '智能体管理',
        requiresAuth: true,
        icon: 'icon-robot',
        order: 4,
        hideInMenu:false
    },
    children:[
        {
            path: '/IntelligentAgent',
            name: 'IntelligentAgent',
            component: () => import('@/views/dmx/IntelligentAgent/index.vue'),
            meta: {
                requiresAuth: true,
                hideInMenu:true,
                roles: ['*'],
            },
        },
    ]
};
export default session;