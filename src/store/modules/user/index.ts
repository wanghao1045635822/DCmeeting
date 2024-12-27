import { defineStore } from 'pinia';
import {
  login as userLogin,
  logout as userLogout,
  getUserInfo,
  LoginData,
} from '@/api/user';
import { setToken, clearToken, setUserInfo, setUserResources, clearUserResources } from "@/utils/auth";
import { removeRouteListener } from '@/utils/route-listener';
import { UserState } from './types';
import useAppStore from '../app';
import router from "@/router";


const useUserStore = defineStore('user', {
  state: (): UserState => ({
    name: undefined,
    avatar: undefined,
    job: undefined,
    organization: undefined,
    location: undefined,
    email: undefined,
    introduction: undefined,
    personalWebsite: undefined,
    jobName: undefined,
    organizationName: undefined,
    locationName: undefined,
    phone: undefined,
    registrationDate: undefined,
    accountId: undefined,
    certification: undefined,
    role: '',
    resources:undefined,
    hrefUrl:undefined
  }),

  getters: {
    userInfo(state: UserState): UserState {
      return { ...state };
    },
  },

  actions: {
    switchRoles() {
      return new Promise((resolve) => {
        this.role = this.role === 'user' ? 'admin' : 'user';
        resolve(this.role);
      });
    },
    // Set user's information
    setInfo(partial: Partial<UserState>) {
      this.$patch(partial);
    },

    // Reset user's information
    resetInfo() {
      clearUserResources()
      this.$reset();
    },

    // Get user's information
    async info() {
      const res = await getUserInfo();

      this.setInfo(res.data);
    },

    // Login
    async login(loginForm: LoginData):string {
      try {
        const res = await userLogin(loginForm);

        setToken(res.data.access_token);
        const userInfo = {
          avatar: res.data.avatar,
          name: res.data.nickname,
          email: res.data.email,
        };
     
        if(res.data?.roles.length>0)
            this.resources=res.data.roles[0].resources;
            setUserInfo(JSON.stringify(userInfo));
            setUserResources(JSON.stringify(this.resources))
        for (const r of this.resources) {
          if (r.menuType == 0) {
            return r.component
          }
        }
      } catch (err) {
        clearToken();
        throw err;
      }
    },
    logoutCallBack() {
      const appStore = useAppStore();
      this.resetInfo();
      clearToken();
      removeRouteListener();
      appStore.clearServerMenu();
    },
    // Logout
    async logout() {
      try {
        await userLogout();
      } finally {
        router.push({
          name: "login",
        });
        this.logoutCallBack();
      }
    },


    getHreFurl(url: string) {
      this.hrefUrl=url
    },
  },
});

export default useUserStore;
