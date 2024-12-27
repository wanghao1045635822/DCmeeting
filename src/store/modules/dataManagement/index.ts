import { defineStore } from 'pinia';

const useMeetingCenterStore  = defineStore('useMeetingCenterStore', {
  persist: false,//关闭本地存储
  state: () => ({
    // 存储接口数据信息对象
    roleId: '',//登录角色id
    coverImage: '',//封面图片
    displayImageA: {},//展示区图片A
    displayImageB: {},//展示区图片B
    serverTime: {},//获取服务器时间（秒）
    attendMeeting: {},//请求出席会议
    meetingCenterList: {},//会议列表(目前显示推荐)
    todayMeetingList:{},//今日会议信息列表
    openMeetingList:{},//开放会议信息列表
    freenMeetingList:{},//免费会议信息列表
    historyMeetingList:{},//过往会议信息列表
    myMeetingList:{},//我的会议信息列表
    meetingCenterInfo: {},//会议中心详情信息
    meetingInfo: {},//会议详情信息
    meetingRoomList: {},//会议中心会议室列表
    meetingTicketsList: {},//会议门票信息列表
    meetingTickets: {},//购买会议门票结果
    meetingSeatInfoList: {},//会议可出售的坐席总数列表
    createMeetingInfo: {},//会议创建信息
  }),
  getters: {
    getMeetingInfo(state) {
      return { ...state };
    },
  },
  actions: {
    // 更新登录角色id
    updateRoleId(data: any) {
      this.roleId = data;
    },
    // 更新服务器时间
    updateServerTime(data: any) {
      this.serverTime = data;
    },
    // 更新出席会议
    updateAttendMeeting(data: any) {
      this.attendMeeting = data;
    },
    // 更新会议列表数据
    updateMeetingListInfo(data: any) {
      this.meetingCenterList = data;
    },
    // 更新今日会议信息列表
    updateTodayMeetingListInfo(data: any) {
      this.todayMeetingList = data;
    },
    // 开放会议信息列表
    updateOpenMeetingListInfo(data: any) {
      this.openMeetingList = data;
    },
    // 免费会议信息列表
    updateFreenMeetingListInfo(data: any) {
      this.freenMeetingList = data;
    },
    // 过往会议信息列表
    updateHistoryMeetingListInfo(data: any) {
      this.historyMeetingList = data;
    },
    // 我的会议信息列表
    updateMyMeetingListInfo(data: any) {
      this.myMeetingList = data;
    },
    // 更新会议中心详情信息
    updateMeetingCenterInfo(data: any) {
      this.meetingCenterInfo = data;
    },
    // 更新会议详情信息
    updateMeetingInfo(data: any) {
      this.meetingInfo = data;
    },
    // 更新会议室列表数据
    updateMeetingRoomListInfo(data: any) {
      this.meetingRoomList = data;
    },
    // 更新会议门票信息列表数据
    updateMeetingTicketsListInfo(data: any) {
      this.meetingTicketsList = data;
    },
    // 返回购买会议门票结果
    updateMeetingTicketsInfo(data: any) {
      this.meetingTickets = data;
    },
    // 更新会议可出售的坐席总数列表
    updateMeetingSeatInfoListInfo(data: any) {
      this.meetingSeatInfoList = data;
    },
    // 会议创建信息
    updateCreateMeetingInfo(data: any) {
      this.createMeetingInfo = data;
    },
  },
});

export default useMeetingCenterStore ;
