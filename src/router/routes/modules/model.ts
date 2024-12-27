import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';
const session: AppRouteRecordRaw = {
    path: '/model',
    name: 'model',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: '模型管理',
        requiresAuth: true,
        icon: 'icon-relation',
        order: 3,
        hideInMenu:false
    },
    children:[
        {
            path: '/model',
            name: 'model',
            component: () => import('@/views/dmx/model/index.vue'),
            meta: {
                requiresAuth: true,
                hideInMenu:true,
                roles: ['*'],
            },
        },
    ]
};
export default session;