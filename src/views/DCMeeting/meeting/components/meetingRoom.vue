<template>
  <div class="container">
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
            <img v-show="!item.active" style="width: 80%;height: 1px;position: absolute;bottom: -1px;left: 8%;"
                 :src="lineBg" alt="">
          </div>
        </div>
        <meeting-time-show></meeting-time-show>
      </div>
    </div>
    <!--内容区-->
    <div class="container-right">
      <div class="container-today">
        <!--        会议列表-->
        <div class="container-list-meeting">
          <a-card hoverable class="meeting-card"
                  v-for="(item) in getRoomList"
                  :key="item.meetingroomid"
                  @click="selectRoom(item)"
          >
            <template #cover>
              <div
                  style="
                    width: 100%;
                    height: 22vh;
                    overflow: hidden;
                  "
              >
                <img
                    :style="{ width: '100%', height: '100%'}"
                    alt="dessert"
                    :src="meetingBg"
                />
                <img class="meeting-card-yulan" src="@/assets/images/meeting/meeting/application/yulan.png" alt="">
                <svg v-show="item.selected" t="1732698933563" class="icon meeting-card-yulan"
                     style="left: -2.2vw;top: 0;width: 8vw;height: 8vh" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="11994">
                  <path
                      d="M113.777778 0h897.099852L0 1010.87763V113.777778a113.777778 113.777778 0 0 1 113.777778-113.777778z"
                      fill="#c29D71" p-id="11995"></path>
                  <path
                      d="M600.974222 165.546667l-264.229926 259.792592a37.812148 37.812148 0 0 1-5.840592 7.319704l-14.070519 13.653333c-7.812741 7.509333-16.952889 10.884741-20.48 7.471408L153.031111 308.565333c-3.527111-3.413333-0.037926-12.250074 7.736889-19.797333l14.108444-13.653333c7.774815-7.585185 16.952889-10.884741 20.48-7.509334l107.368297 108.847408 255.886222-257.024a20.404148 20.404148 0 0 1 28.216889 0l14.108444 13.653333a18.887111 18.887111 0 0 1 0 27.306667"
                      fill="#ffffff" p-id="11996"></path>
                </svg>
              </div>
            </template>
            <div style="width: 100%;display: flex;justify-content: space-around;color: #FFFFFF;margin-top: 2vh;">
              <div>
                <div style="font-size: 1rem;">{{ item.meetingroomname }}</div>
                <div style="font-size: 1.4rem;font-weight: 900;padding: 1.6vh 0;">MEET FUTERE</div>
              </div>
              <div style="font-size: 1.8rem;color: #FFFFFF;" @click="bianhaung(item)">
                <icon-menu/>
              </div>
            </div>
          </a-card>
        </div>
      </div>
      <div class="btnList">
        <div class="prve-btn" style="margin-right: 2vw;" @click="prve">上一步</div>
        <div class="next-btn" @click="next">下一步</div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {inject, nextTick, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import {useToggle} from "@vueuse/core";
import titleBannerBg from "@/assets/images/meeting/home/container-banner.png";
import lineBg from "@/assets/images/meeting/home/line.png";
import * as Proto from "@/proto/meeting_pb.js";
import {jsCallUE, toFsString} from "@/utils/UEmethod";
import {storeToRefs} from "pinia";
import {useMeetingCenterStore} from "@/store";
import MsgId from "@/proto/msgid_pb.js";
import EventBus from "@/utils/EventBus";
import meetingTimeShow from "@/views/DCMeeting/meeting/components/meetingTimeShow.vue";
import {Message} from "@arco-design/web-vue";
import {formatDate} from "@/utils";
import cloneDeep from "lodash/cloneDeep";
import meetingBgDefault from "@/assets/images/meeting/home/images.jpg";

let meetingCenterStore = useMeetingCenterStore();
let sharedMeetingMethod = inject("sharedMeetingMethod");
let startDay = ref("");
let endDay = ref("");
let startTime = ref("");
let endTime = ref("");
let selectedRoom = reactive({});
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
let meetingBg = ref(meetingBgDefault);
// 首页侧边栏对象列表
const leftBannerData = ref([
  {
    title: "全部",
    key: "all",
    width: "10%",
    active: false
  },
  {
    title: "大型会场",
    key: "Large",
    width: "30%",
    active: true
  },
  {
    title: "中型会场",
    key: "Medium",
    width: "30%",
    active: false
  },
  {
    title: "小型会场",
    key: "small",
    width: "30%",
    active: false
  },
  {
    title: "迷你会场",
    key: "mini",
    width: "30%",
    active: false
  }
]);

// 进行解构
const {meetingRoomList} = storeToRefs(meetingCenterStore);

meetingRoomList.value = {
  "infosList": [{
    "meetingId": "meeting_1731056872",
    "meetingRoomName": "safasffsdasdfafsdasdf",
    "meetingIntroduction": "meetingIntroduction",
    "meetingSpeaker": "meetingSpeaker",
    "meetingGuest": "meetingGuest",
    "startTime": "1731058200",
    "endTime": "1731074400",
    "creatorRoleId": 134,
    "meetingRoomId": 2,
    "meetingCenterId": 1,
    "sceneRule": {"isRun": 1, "isJump": 1, "isEnterSpeechArea": 1},
    "seatRuleA": {"seatName": "seatName", "getType": 3, "snType": 1},
    "seatRuleB": {"seatName": "seatName", "getType": 3, "snType": 1},
    "seatRuleC": {"seatName": "seatName", "getType": 3, "snType": 1},
    "seatRuleD": {"seatName": "seatName", "getType": 3, "snType": 1},
    "audienceAreaRule": {"seatName": "seatName", "getType": 3, "snType": 1},
    "speechRule": {"getType": 3, "isSpeakerForScreen": 1, "isSpeakerVote": 1},
    "meetingSpeakersId": [134],
    "meetingDetails": "meetingDetails",
    "meetingDetailsURL": ["1", "2", "3"],
    "meetingRealStart": 2,
    "adverts": [{"advertId": 1, "advertName": "advertName", "advertUrl": "advertUrl"}, {
      "advertId": 1,
      "advertName": "advertName",
      "advertUrl": "advertUrl"
    }, {"advertId": 1, "advertName": "advertName", "advertUrl": "advertUrl"}, {
      "advertId": 1,
      "advertName": "advertName",
      "advertUrl": "advertUrl"
    }],
    "soldSeatCount": 1
  }]
};

let getRoomList = ref([
  {
    "meetingId": "meeting_1731056872",
    "meetingRoomName": "safasffsdasdfafsdasdf",
    "meetingIntroduction": "meetingIntroduction",
    "meetingSpeaker": "meetingSpeaker",
    "meetingGuest": "meetingGuest",
    "startTime": "1731058200",
    "endTime": "1731074400",
    "creatorRoleId": 134,
    "meetingRoomId": 2,
    "meetingCenterId": 1,
    "sceneRule": {"isRun": 1, "isJump": 1, "isEnterSpeechArea": 1},
    "seatRuleA": {"seatName": "seatName", "getType": 3, "snType": 1},
    "seatRuleB": {"seatName": "seatName", "getType": 3, "snType": 1},
    "seatRuleC": {"seatName": "seatName", "getType": 3, "snType": 1},
    "seatRuleD": {"seatName": "seatName", "getType": 3, "snType": 1},
    "audienceAreaRule": {"seatName": "seatName", "getType": 3, "snType": 1},
    "speechRule": {"getType": 3, "isSpeakerForScreen": 1, "isSpeakerVote": 1},
    "meetingSpeakersId": [134],
    "meetingDetails": "meetingDetails",
    "meetingDetailsURL": ["1", "2", "3"],
    "meetingRealStart": 2,
    "adverts": [{"advertId": 1, "advertName": "advertName", "advertUrl": "advertUrl"}, {
      "advertId": 1,
      "advertName": "advertName",
      "advertUrl": "advertUrl"
    }, {"advertId": 1, "advertName": "advertName", "advertUrl": "advertUrl"}, {
      "advertId": 1,
      "advertName": "advertName",
      "advertUrl": "advertUrl"
    }],
    "soldSeatCount": 1
  }
]);
let getMeetingTime = reactive({});

watch(
    () => meetingCenterStore.meetingRoomList,
    (newVal, oldVal) => {
      console.log(newVal, "会议室新值变化");
      // 此处并没有做类型筛选
      getRoomList.value = cloneDeep(newVal).infosList;
    },
    {
      deep: true // 开启深度监听
      // immediate: true
    }
);


function tableBannerChange(item) {
  // 选择会议室清空
  selectedRoom = {};
  // 数据初始化
  getRoomList.value = getRoomList.value.map((items) => {
    items.selected = false;
    return items;
  });
  let meetingRoomListData = cloneDeep(meetingRoomList.value).infosList;
  // meetingRoomList.value.infosList;
  leftBannerData.value.map((items) => {
    items.active = false;
    if (items.key == item.key) {
      items.active = true;
      if (item.key == "all") {
        getRoomList.value = meetingRoomListData;
      } else if (item.key == "Large") {
        getRoomList.value = meetingRoomListData.filter(item => item.sitetype == "1");
      } else if (item.key == "Medium") {
        getRoomList.value = meetingRoomListData.filter(item => item.sitetype == "2");
      } else if (item.key == "small") {
        getRoomList.value = meetingRoomListData.filter(item => item.sitetype == "3");
      } else if (item.key == "mini") {
        getRoomList.value = meetingRoomListData.filter(item => item.sitetype == "4");
      }
    }
    return items;
  });
}

// 选择会议室
function selectRoom(item) {
  Object.assign(selectedRoom, item);
  // console.log(selectedRoom, "selectedRoom");
  getRoomList.value = getRoomList.value.map((items) => {
    items.selected = false;
    if (items.meetingroomid == item.meetingroomid) {
      items.selected = true;
    }
    return items;
  });


}

function bianhaung(item) {
  console.log(item, "item");
  // jsCallUE(2008,item.meetingRoomId);
  // 会议中心
  // item.meetingRoomName = '哈尔滨会议室'
  // console.log(meetingRoomList.value.infosList);


}

function prve() {
  sharedMeetingMethod("meetingTime");
}

function next() {
  if (JSON.stringify(selectedRoom) === "{}") {
    Message.normal("请选择会议室");
  } else {
    selectedRoom.date = getMeetingTime;
    console.log(selectedRoom, "selectedRoom");
    // 将选择会的会议室传递出去
    EventBus.emit("getSelectRoomFun", selectedRoom);
    sharedMeetingMethod("meetingSet");
  }


}

// 初始化
function init() {

}

// 请求会议室列表
const getMeetingRoomList = (data) => {
  // console.log(MsgId.C2S_GET_MEETING_ROOM_LIST_REQ, "会议室信息列表Id");
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetMeetingRoomListReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // InfoReq.setStarttime(2);
  // InfoReq.setEndtime(3);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求会议室列表 data:", bytes);

  const userDeserialized = Proto.default.C2SGetMeetingRoomListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());

  jsCallUE(MsgId.C2S_GET_MEETING_ROOM_LIST_REQ, bytes);
};

onBeforeMount(() => {
  getMeetingRoomList();

});
onMounted(() => {
  EventBus.on("getRoomFun", (data) => {
    Object.assign(getMeetingTime, data);
    console.log(data, "传来的会议时间");
    //todo::拿到会议时间和会议室时间进行筛选
    //   startDay.value = formatDate(new Date(data.startTime));


  });
});
onBeforeUnmount(() => {
  EventBus.off("getRoomFun");
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
    height: 62vh;
    //background: #FFFFFF;
    position: absolute;
    top: 10%;
    left: -1vw;
    right: 0;
    background-image: url("@/assets/images/meeting/meeting/application/leftBg.png");
    background-size: 100% 100%;
    //font-size: 1rem;
    .container-left-banner-top {
      width: 100%;
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
  }

}

.container-right {
  width: 80%;
  height: 100%;
  //background: #F5F5F5;
  float: right;

  .container-today {
    width: 96%;
    height: 74vh;
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
        padding-bottom: 2vh;
        cursor: pointer;

        .meeting-card-yulan {
          width: 6vw;
          position: absolute;
          right: 0;
          top: 0;
          cursor: pointer;
        }

        .meeting-card-yulan:active {
          border: 1px solid transparent;
        }
      }
    }
  }

  .container-today::-webkit-scrollbar {
    width: 0; /* Safari 和 Chrome */
  }

  .btnList {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3vh;

    .next-btn, .prve-btn {
      width: 8rem;
      height: 3rem;
      //background-color: #8c8c8c;
      float: right;
      background-image: url("@/assets/images/meeting/meeting/application/next-btn.png");
      background-size: 100% 100%;
      text-align: center;
      line-height: 3rem;
      color: #FFFFFF;
      cursor: pointer;
    }

    .next-btn:active {
      background-image: url("@/assets/images/meeting/meeting/application/next-btn1.png");
      background-size: 100% 100%;
      border: 1px solid transparent;
      border-bottom: none;
    }

    .prve-btn:active {
      background-image: url("@/assets/images/meeting/meeting/application/next-btn1.png");
      background-size: 100% 100%;
      border: 1px solid transparent;
      border-bottom: none;
    }
  }
}

:deep(.arco-card-body) {
  padding: 0;
}

</style>
