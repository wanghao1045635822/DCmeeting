<!--
 * @description: 会议列表首页
 * @author: wanghao
 * @date: 2024-11-01 14:51:24
 * @version: V1.0.0
-->
<template>
  <!--  首页-->
  <div class="container">
    <!--    导航栏-->
    <div class="container-top">
      <img @click="changeBtnBg" class="top-btn" :src="topBtn1" alt="">
      <div class="banner-img" :style="{ backgroundImage:'url('+ (bg) +')' }">
        <div class="banner-img-title">
          <div
              v-for="(item, index) of tableHeaderData"
              :key="item.key"
              class="banner-img-text"
              :class="{ active: item.active }"
              :style="{ backgroundImage:item.active ? 'url('+ (titleBg) +')' :'url('+ ('') +')' }"
              @click="tableHeaderChange(item)"
          >
            {{ item.title }}
          </div>
        </div>
      </div>
    </div>
    <!--    主页面-->
    <div class="container-main">
      <!--       会议详情信息 -->
      <!--      与会者-->
      <meeting-details ref="meetingDetailsRefs" :meetingType="meetingType"
                       v-if="isShowKey == 'BasicInformation' && roleType == 2 && meetingType !== 2"></meeting-details>
      <!--      创建者-->
      <meeting-details-creator ref="meetingDetailsCreatorRefs" :meetingType="meetingType"
                               v-if="isShowKey == 'BasicInformation' && roleType == 0 && meetingType !== 2"></meeting-details-creator>
      <!--      演讲者-->
      <meeting-details-speaker ref="meetingDetailsSpeakerRefs" :meetingType="meetingType"
                               v-if="isShowKey == 'BasicInformation' && roleType == 1 && meetingType !== 2"></meeting-details-speaker>
      <!--      会议结束-->
      <meeting-details-end ref="MeetingDetailsEndRefs"
                           v-if="isShowKey == 'BasicInformation' && meetingType == 2"></meeting-details-end>
      <!--      会议准备投票，审批-->
      <meeting-preparation ref="meetingPreparationRefs"
                           v-if="isShowKey == 'ConferencePreparation'"></meeting-preparation>
      <!--      会议统计-->
      <!--      <meeting-vip-seats ref="meetingVipSeatsRefs" v-if="isShowKey == 'ConferencePreparation'"></meeting-vip-seats>-->
    </div>


  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onMounted, ref, getCurrentInstance, reactive, provide, watch} from "vue";
import {getToken, getUserInfo, getUserResources, isLogin} from "@/utils/auth";
import bannerUrl from "@/assets/images/meeting/home/banner.png";
import topbtnUrl1 from "@/assets/images/meeting/home/topbtn1.png";
import topbtnUrl2 from "@/assets/images/meeting/home/topbtn2.png";
import titleBg from "@/assets/images/meeting/home/titleBg.png";
import * as Proto from "@/proto/meeting_pb.js";
import MsgId from "@/proto/msgid_pb.js";
import {jsCallUE, toFsString, webattendmeeting} from "@/utils/UEmethod";
import EventBus from "@/utils/EventBus";
import {useRouter} from "vue-router";
import meetingDetails from "@/views/DCMeeting/conferenceDetails/components/meetingDetails.vue";
import meetingDetailsCreator from "@/views/DCMeeting/conferenceDetails/components/meetingDetailsCreator.vue";
import meetingDetailsSpeaker from "@/views/DCMeeting/conferenceDetails/components/meetingDetailsSpeaker.vue";
import MeetingDetailsEnd from "@/views/DCMeeting/conferenceDetails/components/meetingDetailsEnd.vue";
import meetingPreparation from "@/views/DCMeeting/conferenceDetails/components/meetingPreparation.vue";
import meetingVipSeats from "@/views/DCMeeting/conferenceDetails/components/meetingVipSeats.vue";


import {useMeetingCenterStore} from "@/store";
import {parseTime} from "@/utils";
import message from "@arco-design/web-vue/es/message";

const router = useRouter();
let meetingCenterStore = useMeetingCenterStore();
let meetingInfo = reactive(meetingCenterStore.meetingInfo);
let meetingRoleId = ref(meetingCenterStore.roleId);

const meetingDetailsRefs = ref(null);
const meetingDetailsCreatorRefs = ref(null);
const meetingDetailsSpeakerRefs = ref(null);
const MeetingDetailsEndRefs = ref(null);
const meetingPreparationRefs = ref(null);
const meetingVipSeatsRefs = ref(null);

let meetingType = ref(0);//0:未开始，1:进行中，2:已结束
let roleType = ref(0);//0:创建者，1:演讲者 ，2:嘉宾


let bg = ref(bannerUrl);
let topBtn1 = ref(topbtnUrl1);
let topBtn2 = ref(topbtnUrl2);
// 首页banner对象列表
const tableHeaderData = ref([
  {
    title: "基本信息",
    key: "BasicInformation",
    width: "30%",
    active: true
  },
  {
    title: "会议准备",
    key: "ConferencePreparation",
    width: "10%",
    active: false
  }
]);

function tableHeaderChange(item) {
  tableHeaderData.value.map((items) => {
    items.active = false;
    if (items.key == item.key) {
      items.active = true;
      isShowKey.value = item.key;
    }
    return items;
  });
}

// let ue = getCurrentInstance().appContext.config.globalProperties.ue;
let isShowKey = ref("BasicInformation");

// 初始化
function init() {
  let currentTime = parseTime(new Date(), "{yyyy}-{mm}-{dd} {hh}:{ii}:{ss}");//获取当前系统时间
  // 判断会议状态（根据时间判断会议是否结束）
  if (new Date(currentTime).getTime() > meetingInfo.endtime * 1000) {
    meetingType.value = 2;
  } else if (new Date(currentTime).getTime() < meetingInfo.starttime * 1000) {
    meetingType.value = 0;
  } else {
    meetingType.value = 1;
  }
  console.log(meetingRoleId.value == meetingInfo.creatorroleid, "是否是当前登录人");
  console.log(meetingRoleId.value, "当前登录人");
  console.log(meetingInfo.creatorroleid, "会议创建人人");
  // 判断登陆者在当前会议中的角色
  if (meetingRoleId.value == meetingInfo.creatorroleid) {
    // 创建者
    roleType.value = 0;
  } else if (meetingInfo.meetingspeakersidList.indexOf(meetingRoleId.value) > -1) {
    // 演讲者
    roleType.value = 1;
  } else {
    // 嘉宾
    roleType.value = 2;
  }

}

function changeBtnBg() {
  topBtn1.value = topBtn2.value;
  router.push("/DCMeeting");
}

//请求会议信息列表
function enterMeeting() {
  // 请求会议中心信息
  // let InfoReq = new Proto.default.C2SAttendMeetingReq();
  // InfoReq.setMeetingid(meetingCenterStore.meetingInfo.meetingid);
  // // 序列化
  // const bytes = InfoReq.serializeBinary();
  //
  // console.log("请求会议信息列表 data:", bytes);
  //
  // // 反序列化
  // const userDeserialized = Proto.default.C2SAttendMeetingReq.deserializeBinary(bytes);
  // console.log("Deserialized data:", userDeserialized)
  // jsCallUE(MsgId.C2S_ATTEND_MEETING_REQ, bytes);
  // 调用进入会议方法
  console.log('会议id：'+meetingCenterStore.meetingInfo.meetingid+'')
  webattendmeeting(meetingCenterStore.meetingInfo.meetingid+'');
}


provide("enterMeeting", enterMeeting);




watch(
    () => meetingCenterStore.attendMeeting,
    (newVal, oldVal) => {
      console.log("attendMeeting changed:", newVal);
      //-1.成功但不弹界面不提示
      // 0.成功
      // 1.会议中心不存在
      // 2.会议室不存在
      // 3.会议不存在或已结束
      // 4.会议还未开始
      // 5.会议已结束
      // 6.没购票
      if (newVal.errcode == 0) {
        message.normal("进入会议成功");
      } else if (newVal.errcode == 1) {
        message.normal("会议中心不存在");
      } else if (newVal.errcode == 2) {
        message.normal("会议室不存在");
      } else if (newVal.errcode == 3) {
        message.normal("会议不存在或已结束");
      } else if (newVal.errcode == 4) {
        message.normal("会议还未开始");
      } else if (newVal.errcode == 5) {
        message.normal("会议已结束");
      } else if (newVal.errcode == 6) {
        console.log("没购票");
        message.normal("没购票");
      }
    },
    {
      deep: true, // 开启深度监听
      immediate: true
    }
);


onBeforeMount(async () => {
  init();
  // 调用全局方法
  // const { proxy } = getCurrentInstance()
  // proxy.$globalFunction();

});
onMounted(() => {
  // EventBus.on('queryMeetingCenterList',(data)=>{
  //
  // });
  console.log("会议详情信息", JSON.stringify(meetingCenterStore.meetingInfo));
});
onBeforeUnmount(() => {
  // EventBus.off('queryMeetingCenterList')
});

</script>

<style scoped lang="less">
.container {
  background: transparent;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  //background-image: url("@/assets/images/meeting/home/BG.png");
  background-size: 100% 100%;
  overflow: hidden;

  .container-top {
    //background-image: url("@/assets/images/meeting/home/banner.png");
    width: 100%;
    //height: 8vh;

    .top-btn {
      width: 10vw;
      //height: 10vh;
      position: absolute;
      top: 0;
      left: 0;
      cursor: pointer;
    }

    .banner-img {
      width: 93vw;
      margin-left: 7.2vw;
      height: 8vh;
      background-size: cover;

      .banner-img-title {
        display: flex;
        justify-content: center;
        color: #ACA592;
        height: 100%;
        font-size: 1rem;
        font-weight: 500;

        .banner-img-text {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 10vw;
          height: 100%;
          background-size: 100% 100%;
          cursor: pointer;
        }
      }
    }
  }

  .container-main {
    width: 100%;
    margin-top: 3vh;
    height: 89vh;
    overflow: hidden;

    //color: #52d10a;
  }

  .active {
    color: #FFFFFF;
  }

  .icon-hover {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    transition: all 0.1s;
  }

  .icon-hover:hover {
    background-color: rgb(var(--gray-2));
  }
}

:deep(.arco-card) {
  /* 设置半透明背景 */
  //background-color: rgba(0, 0, 0, 0.4); /* 白色背景，50% 透明度 */
  //border-radius: 20px;
  //overflow: hidden;
  //border: none;
  //box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}


</style>