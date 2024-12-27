import { defineStore } from 'pinia';

const userModelState  = defineStore('shareModel', {
  // persist: true,
  state: () => ({
    hrefUrl: '',
  }),

  getters: {
    getkbObj(state) {
      return { ...state };
    },
  },

  actions: {

    getHrefUrl(url: string) {
        this.hrefUrl=url
      },
  },
});

export default userModelState ;
