import { createPinia } from 'pinia';
import useAppStore from './modules/app';
import useUserStore from './modules/user';
import usePinia from './modules/storeMsg';
import useTabBarStore from './modules/tab-bar';
import userModelState from './modules/shareModel';
import useMeetingCenterStore from './modules/dataManagement';
import useFriendStore from './modules/friend';

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' //引入持久化插件

const pinia = createPinia();

pinia.use(piniaPluginPersistedstate) //将插件添加到 pinia 实例上

export { useAppStore, useUserStore,usePinia, useTabBarStore,userModelState,useMeetingCenterStore,useFriendStore };
export default pinia;
