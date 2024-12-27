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
          <div class="banner-img-text" :style="{color: meetingStep=='meetingTime'?'#FFF5D9':''}">选择会议时间</div>
          <div class="banner-img-line" :style="{color: meetingStep=='meetingTime'?'#FFF5D9':''}">
            <a-divider type="dashed" class="banner-img-line-divider">
              <icon-double-right :style="{color: meetingStep=='meetingTime'?'#FFF5D9':''}" />
            </a-divider>
          </div>
          <div class="banner-img-text" :style="{color: meetingStep=='meetingRoom'?'#FFF5D9':''}">选择会议地点</div>
          <div class="banner-img-line" :style="{color: meetingStep=='meetingRoom'?'#FFF5D9':''}">
            <a-divider type="dashed" class="banner-img-line-divider">
              <icon-double-right :style="{color: meetingStep=='meetingRoom'?'#FFF5D9':''}" />
            </a-divider>
          </div>
          <div class="banner-img-text" :style="{color: meetingStep=='meetingSet'?'#FFF5D9':''}">进行会议设定</div>
          <div class="banner-img-line" :style="{color: meetingStep=='meetingSet'?'#FFF5D9':''}">
            <a-divider type="dashed" class="banner-img-line-divider">
              <icon-double-right :style="{color: meetingStep=='meetingSet'?'#FFF5D9':''}" />
            </a-divider>
          </div>
          <div class="banner-img-text" :style="{color: meetingStep=='meetingInfo'?'#FFF5D9':''}">完成</div>
        </div>
      </div>
    </div>
    <!--    主页面-->
    <div class="container-main">
      <!--       会议时间 -->
      <meeting-time v-show="meetingStep=='meetingTime'" ref="meetingTimeRef"></meeting-time>
      <!--      会议地点-->
      <meeting-room v-show="meetingStep=='meetingRoom'" ref="meetingRoomRef"></meeting-room>
      <!--      会议设定-->
      <meeting-set v-show="meetingStep=='meetingSet'" ref="meetingSetRef"></meeting-set>
      <!--      完成-->
      <meeting-info v-if="meetingStep=='meetingInfo'" ref="meetingInfoRef"></meeting-info>

    </div>


  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, ref, getCurrentInstance, reactive, provide, nextTick } from "vue";
import { getToken, getUserInfo, getUserResources, isLogin } from "@/utils/auth";
import bannerUrl from "@/assets/images/meeting/home/banner.png";
import topbtnUrl1 from "@/assets/images/meeting/home/topbtn1.png";
import topbtnUrl2 from "@/assets/images/meeting/home/topbtn2.png";
import titleBg from "@/assets/images/meeting/home/titleBg.png";
import * as Proto from "@/proto/others_pb.js";
import MsgId from "@/proto/msgid_pb.js";
import { jsCallUE, toFsString } from "@/utils/UEmethod";
import EventBus from "@/utils/EventBus";
import { useRouter } from "vue-router";
const router = useRouter();
import meetingTime from "@/views/DCMeeting/meeting/components/meetingTime.vue";
import meetingRoom from "@/views/DCMeeting/meeting/components/meetingRoom.vue";
import meetingSet from "@/views/DCMeeting/meeting/components/meetingSet.vue";
import meetingInfo from "@/views/DCMeeting/meeting/components/meetingInfo.vue";

let meetingStep = ref("meetingTime");//会议步骤  meetingTime,meetingRoom,meetingSet,meetingInfo

const meetingTimeRef = ref(null);
const meetingRoomRef = ref(null);
const meetingSetRef = ref(null);
const meetingInfoRef = ref(null);


let bg = ref(bannerUrl);
let topBtn1 = ref(topbtnUrl1);
let topBtn2 = ref(topbtnUrl2);


// let ue = getCurrentInstance().appContext.config.globalProperties.ue;
let isShowKey = ref("meeting");

// let 	C2S_GET_MEETING_CENTER_INFO_REQ 	= 20207; // 会议中心信息
// let 	C2S_GET_MEETING_ROOM_LIST_REQ 	= 20211; // 请求会议室信息列表

// console.log(MsgId.C2S_GET_MEETING_CENTER_INFO_REQ, "会议信息Id");
// console.log(MsgId.C2S_GET_MEETING_ROOM_LIST_REQ, "会议室信息列表Id");


function init() {
  // 获取服务器时间
  getMsgServerTime();
}
// 获取服务器时间
const getMsgServerTime = (data) => {
  let InfoReq = new Proto.default.C2SGetServerTimeReq();
// 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求获取服务器时间 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetServerTimeReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  jsCallUE(MsgId.C2S_GETSERVERTIME, bytes);
};

function changeBtnBg() {
  topBtn1.value = topBtn2.value;
  router.push("/DCMeeting");
}

function sharedMeetingMethod(data) {
  meetingStep.value = data;
}

provide("sharedMeetingMethod", sharedMeetingMethod);

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
      //height: 8vh;
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
        }

        .banner-img-line {
          width: 4vw;
          height: 100%;
          display: flex;
          align-items: center;
          color: #ACA592;

          .banner-img-line-divider {
            color: #ACA592;
            border-color: #ACA592;
          }
        }
      }
    }
  }

  .container-main {
    width: 100%;
    margin-top: 3vh;
    height: 89vh;
    overflow: hidden;


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
  /* 设置毛玻璃背景 */
  background-color: rgba(0, 0, 0, 0.5); /* 白色背景，50% 透明度 */
  //background-color: rgba(255, 255, 255, 0.1); /* 半透明背景色 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  border-radius: 20px;
  overflow: hidden;
  border: none;
}

:deep(.arco-divider-text) {
  background-color: transparent;
  color: #ACA592;
  font-size: 1rem;
  line-height: 0.4rem;
}


</style>