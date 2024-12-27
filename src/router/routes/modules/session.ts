import { DEFAULT_LAYOUT } from '../base';
import { AppRouteRecordRaw } from '../types';
const session: AppRouteRecordRaw = {
    path: '/sessionManager',
    name: 'sessionManager',
    component: DEFAULT_LAYOUT,
    meta: {
        locale: 'menu.session',
        requiresAuth: true,
        icon: 'icon-voice',
        order: 1,
        hideInMenu:false
    },
    children:[
        {
            path:'/SessionManager',
            name:"SessionManager",
            meta:{
                requiresAuth: true,
                hideInMenu:true,
                roles: ['*'],
                // activeMenu:'session'
            },
            component:()=>import('@/views/sessionManager/index.vue'),
        }
    ]
};
export default session;