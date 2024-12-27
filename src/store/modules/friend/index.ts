import { defineStore } from 'pinia';

const useFriendStore  = defineStore('useMeetingCenterStore', {
  persist: false,//关闭本地存储
  state: () => ({
    // 存储接口数据信息对象
    friendList: {},//好友列表数据
    friendInfo: {},//好友详情信息
  }),
  getters: {
    getFriendInfo(state) {
      return { ...state };
    },
  },
  actions: {
    // 更新好友列表数据
    updateFriendListInfo(data: any) {
      this.friendList = data;
    },
    // 更新好友详情信息
    updateFriendInfo(data: any) {
      this.friendInfo = data;
    },
  },
});

export default useFriendStore ;
