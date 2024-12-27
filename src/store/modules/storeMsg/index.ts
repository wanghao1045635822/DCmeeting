import { defineStore } from 'pinia';

const useStoreMsg  = defineStore('storeMsg', {
  state: () => ({
    kbobj: {},
  }),

  getters: {
    getkbObj(state) {
      return { ...state };
    },
  },

  actions: {
    // Set user's information
    setkbObj(obj) {
      this.kbobj = obj;
    },
    // Reset user's information
    resetkbObj() {
      this.$reset();
    },
  },
});

export default useStoreMsg ;
