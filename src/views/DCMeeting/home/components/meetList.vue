<template>
  <!--侧边栏-->
  <div class="container-left">
    <div class="container-left-banner">
      <div class="container-left-banner-top">
        <div
          class="container-left-banner-top-title"
          v-for="(item,index) of leftBannerData"
          :key="item.key"
          :style="{ backgroundImage:item.active ? 'url('+ (titleBannerBg) +')' :'url('+ ('') +')',
               color:item.active ? '#FFFFFF' : '#ACA592',
               }"
          @click="tableBannerChange(item)"
        >
              <span style="">
                {{ item.title }}
              </span>
          <img v-show="!item.active" style="width: 80%;height: 1px;position: absolute;bottom: -1px;left: 8%"
               :src="lineBg" alt="">
        </div>
      </div>
      <div class="container-left-banner-down">
        <img @click="changeMeetingBtnBg" :src="meetingBtn1" alt="">
      </div>
    </div>
  </div>
  <!--内容区-->
  <div class="container-right">
    <div class="container-today">
      <!--        会议列表-->
      <div class="container-list-meeting">
        <a-card
          hoverable
          class="meeting-card"
          v-for="(item) in meetingInfoList"
          :key="item.meetingRoomId"
          @click="goToDetails(item)"
        >
          <template #cover>
            <div
              :style="{
                    overflow: 'hidden',
                  }"
            >
              <img
                :style="{ width: '100%', height: '26vh', transform: 'translateY(-20px)' }"
                alt="dessert"
                :src="item.meetingcoverurl || 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp'"
              />
            </div>
          </template>
          <div style="color: #FFFFFF;margin-left: 16%">
            <div style="font-size: 1rem">{{ item.meetingname }}</div>
            <div style="font-size: 1.8rem;font-weight: 900;margin: 0.2vh 0;">MEET FUTERE</div>
            <div style="font-size: 1.8rem;">
              <icon-menu />
            </div>
          </div>
        </a-card>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { useToggle } from "@vueuse/core";
import titleBannerBg from "@/assets/images/meeting/home/container-banner.png";
import lineBg from "@/assets/images/meeting/home/line.png";
import meetingBtnBg1 from "@/assets/images/meeting/home/meetingBtnBg1.png";
import meetingBtnBg2 from "@/assets/images/meeting/home/meetingBtnBg2.png";
import * as Proto from "@/proto/meeting_pb.js";
import { jsCallUE, toFsString, webGetRoleId } from "@/utils/UEmethod";
import { storeToRefs } from "pinia";
import { useMeetingCenterStore } from "@/store";
import MsgId from "@/proto/msgid_pb.js";
import { useRouter } from "vue-router";

const router = useRouter();
let meetingCenterStore = useMeetingCenterStore();
const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  defaultValue: {
    type: Boolean,
    default: false
  }
});
let meetingBtn1 = ref(meetingBtnBg1);
let meetingBtn2 = ref(meetingBtnBg2);
let bannerType = ref("Today");
// 首页侧边栏对象列表
const leftBannerData = ref([
  {
    title: "推荐",
    key: "Recommend",
    width: "10%",
    active: false
  },
  {
    title: "今日",
    key: "Today",
    width: "30%",
    active: true
  },
  {
    title: "开放",
    key: "Open",
    width: "30%",
    active: false
  },
  {
    title: "免费",
    key: "Free",
    width: "30%",
    active: false
  },
  {
    title: "过往",
    key: "History",
    width: "30%",
    active: false
  },
  {
    title: "我的",
    key: "My",
    width: "30%",
    active: false
  }
]);
// 进行解构
const {
  meetingCenterList,
  todayMeetingList,
  openMeetingList,
  freenMeetingList,
  historyMeetingList,
  myMeetingList
} = storeToRefs(meetingCenterStore);
// 初始化的假数据隐藏
meetingCenterList.value.infosList = [];
todayMeetingList.value.infosList = [];
openMeetingList.value.infosList = [];
freenMeetingList.value.infosList = [];
historyMeetingList.value.infosList = [];
myMeetingList.value.infosList = [];
let meetingList = ref([]);
// meetingCenterList.value = {
// "infosList": [{
//   "meetingId": "meeting_1731056872",
//   "meetingName": "safasffsdasdfafsdasdf",
//   "meetingIntroduction": "meetingIntroduction",
//   "meetingSpeaker": "meetingSpeaker",
//   "meetingGuest": "meetingGuest",
//   "startTime": "1731058200",
//   "endTime": "1731074400",
//   "creatorRoleId": 134,
//   "meetingRoomId": 2,
//   "meetingCenterId": 1,
//   "sceneRule": { "isRun": 1, "isJump": 1, "isEnterSpeechArea": 1 },
//   "seatRuleA": { "seatName": "seatName", "getType": 3, "snType": 1 },
//   "seatRuleB": { "seatName": "seatName", "getType": 3, "snType": 1 },
//   "seatRuleC": { "seatName": "seatName", "getType": 3, "snType": 1 },
//   "seatRuleD": { "seatName": "seatName", "getType": 3, "snType": 1 },
//   "audienceAreaRule": { "seatName": "seatName", "getType": 3, "snType": 1 },
//   "speechRule": { "getType": 3, "isSpeakerForScreen": 1, "isSpeakerVote": 1 },
//   "meetingSpeakersId": [134],
//   "meetingDetails": "meetingDetails",
//   "meetingDetailsURL": ["1", "2", "3"],
//   "meetingRealStart": 2,
//   "adverts": [{ "advertId": 1, "advertName": "advertName", "advertUrl": "advertUrl" }, {
//     "advertId": 1,
//     "advertName": "advertName",
//     "advertUrl": "advertUrl"
//   }, { "advertId": 1, "advertName": "advertName", "advertUrl": "advertUrl" }, {
//     "advertId": 1,
//     "advertName": "advertName",
//     "advertUrl": "advertUrl"
//   }],
//   "soldSeatCount": 1
// }]
// };

// 左侧table列表点击事件
function tableBannerChange(item) {
  leftBannerData.value.map((items) => {
    items.active = false;
    if (items.key == item.key) {
      items.active = true;
    }
    return items;
  });
  console.log(item.key);
  bannerType.value = item.key;
  // 切换数据
  // if (item.key == "My") {
  //   getMsgMyMeetingList();
  // } else if (item.key == "Today") {
  //   getMsgTodayMeetingList();
  // } else if (item.key == "Open") {
  //   getMsgOpenMeetingList();
  // } else if (item.key == "Free") {
  //   getMsgFreeMeetingList();
  // } else if (item.key == "History") {
  //   getMsgHistoryMeetingList();
  // } else if (item.key == "Recommend") {
  //   getMsgMeetingInfoList();
  // }
  //     if (item.key == "My") {
  //     meetingList.value = myMeetingList.value.infosList;
  //   } else if (item.key == "Today") {
  //     meetingList.value = todayMeetingList.value.infosList;
  //   } else if (item.key == "Open") {
  //     meetingList.value = openMeetingList.value.infosList;
  //   } else if (item.key == "Free") {
  //     meetingList.value = freenMeetingList.value.infosList;
  //   } else if (item.key == "History") {
  //     meetingList.value = historyMeetingList.value.infosList;
  //   } else if (item.key == "Recommend") {
  //     meetingList.value = meetingCenterList.value.infosList;
  //   }
}

// watch(
//   () => todayMeetingList.value,
//   (newVal, oldVal) => {
//     console.log(newVal, "会议列表新值变化");
//     console.log(oldVal, "会议列表旧值变化");
//     meetingList.value = todayMeetingList.value.infosList;
//     console.log(meetingList.value,'选择的会议列表数据');
//   },
//   {
//     deep: true,// 开启深度监听
//     immediate: true //默认执行一次
//   }
// );


let meetingInfoList = computed(() => {
  if (bannerType.value == "My") {
    return myMeetingList.value.infosList;
  } else if (bannerType.value == "Today") {
    return todayMeetingList.value.infosList;
  } else if (bannerType.value == "Open") {
    return openMeetingList.value.infosList;
  } else if (bannerType.value == "Free") {
    return freenMeetingList.value.infosList;
  } else if (bannerType.value == "History") {
    return historyMeetingList.value.infosList;
  } else if (bannerType.value == "Recommend") {
    return meetingCenterList.value.infosList;
  }
});

function changeMeetingBtnBg() {
  meetingBtn1.value = meetingBtn2.value;
  router.push("/meeting");
}

const goToDetails = (item) => {
  meetingCenterStore.updateMeetingInfo(item);
  // 跳转详情页
  router.push({ path: "/conferenceDetails" });
};

// 初始化
function init() {
  // 获取全部会议列表
  getMsgMeetingInfoList();
  // 获取我的会议列表
  getMsgMyMeetingList();
  // 获取今日会议列表
  getMsgTodayMeetingList();
  // 获取开放会议列表
  getMsgOpenMeetingList();
  // 获取免费会议列表
  getMsgFreeMeetingList();
  // 获取过往会议列表
  getMsgHistoryMeetingList();
}

// 请求会议列表(目前是推荐)
const getMsgMeetingInfoList = (data) => {
  // console.log(MsgId.C2S_GET_MEETING_LIST_REQ,'会议列表Id');
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetMeetingListReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求会议列表 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetMeetingListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_MEETING_LIST_REQ, bytes);
};

// 请求今日会议信息列表
const getMsgTodayMeetingList = (data) => {
  // console.log(MsgId.C2S_GET_TODAY_MEETING_LIST_REQ,'会议列表Id');
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetTodayMeetingListReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求今日会议信息列表 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetTodayMeetingListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  // console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_TODAY_MEETING_LIST_REQ, bytes);
};
// 请求开放会议信息列表
const getMsgOpenMeetingList = (data) => {
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetOpenMeetingListReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求开放会议信息列表 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetOpenMeetingListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  // console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_OPEN_MEETING_LIST_REQ, bytes);
};
// 请求免费会议信息列表
const getMsgFreeMeetingList = (data) => {
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetFreenMeetingListReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求免费会议信息列表 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetFreenMeetingListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  // console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_FREE_MEETING_LIST_REQ, bytes);
};
// 请求过往会议信息列表
const getMsgHistoryMeetingList = (data) => {
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetHistoryMeetingListReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求过往会议信息列表 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetHistoryMeetingListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_HISTORY_MEETING_LIST_REQ, bytes);
};

// 请求我的会议信息列表
const getMsgMyMeetingList = (data) => {
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetMyMeetingListReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求我的会议信息列表 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetMyMeetingListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  // console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_MY_MEETING_LIST_REQ, bytes);
};


onBeforeMount(() => {
  webGetRoleId();
  init();
});
onMounted(() => {

});
onBeforeUnmount(() => {

});

</script>

<style scoped lang="less">
.container-left {
  width: 16%;
  height: 100%;
  //background: #a32323;
  float: left;
  position: relative;

  .container-left-banner {
    width: 100%;
    height: 80%;
    //background: #FFFFFF;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    background-image: url("@/assets/images/meeting/home/container-left-banner.png");
    background-size: 100% 100%;
    //font-size: 1rem;
    .container-left-banner-top {
      width: 100%;
      height: 75%;
      margin-top: 3rem;

      .container-left-banner-top-title {
        width: calc(100% - 1px);
        height: 6vh;
        line-height: 6vh;
        text-align: center;
        color: #ACA592;
        position: relative;
        background-size: 100% 100%;
        cursor: pointer;
      }
    }

    .container-left-banner-down {
      width: 100%;
      height: 12vh;
      //background: #FFFFFF;
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      justify-content: center;
      cursor: pointer;

      img {
        margin-top: 4%;
        width: auto;
        height: 70%;
      }
    }
  }

}

.container-right {
  width: 80%;
  height: 100%;
  //background: #F5F5F5;
  float: right;

  .container-today {
    width: 96%;
    height: 90%;
    margin-top: 2%;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 和 Edge */

    .container-list-meeting {
      width: 100%;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      //justify-content: space-around;
      .meeting-card {
        width: 29%;
        height: 42vh;
        margin: 2.6vh 2%;
        cursor: pointer;
      }
    }
  }

  .container-today::-webkit-scrollbar {
    width: 0; /* Safari 和 Chrome */
  }
}

</style>
