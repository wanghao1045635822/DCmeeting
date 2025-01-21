<template>
  <div class="container-today">
    <div class="container-lf glass">
      <div class="gaiyao">
        <div class="gaiyao-title">
          <div class="title-text-top">MEETING SUMMARY</div>
          <div class="title-text">会议概要</div>
        </div>
        <div class="meetingline"><img src="@/assets/images/meeting/conferenceDetails/meetingLine.png" alt=""></div>
      </div>
      <div class="meetingInfo">
        <div class="meetingInfo-list">
          <div class="meetingInfo-list-left">
            <img src="@/assets/images/meeting/conferenceDetails/1.png" alt="">
          </div>
          <div class="meetingInfo-list-center">
            <img src="@/assets/images/meeting/conferenceDetails/4.png" alt="">
          </div>
          <div class="meetingInfo-list-right-name">
            {{ meetingInfo.meetingname }}
          </div>
        </div>
        <div class="meetingInfo-list">
          <div class="meetingInfo-list-left">
            <img src="@/assets/images/meeting/conferenceDetails/2.png" alt="">
          </div>
          <div class="meetingInfo-list-center">
            <img src="@/assets/images/meeting/conferenceDetails/4.png" alt="">
          </div>
          <div class="meetingInfo-list-right">
            <div class="meetingInfo-list-right-img">
              <img src="@/assets/images/meeting/conferenceDetails/icon.png" alt="">
              <div class="meetingInfo-list-right-img-title">Ning Li</div>
            </div>
            <div class="meetingInfo-list-right-img">
              <img src="@/assets/images/meeting/conferenceDetails/icon.png" alt="">
              <div class="meetingInfo-list-right-img-title">Ning Li</div>
            </div>
            <div class="meetingInfo-list-right-img">
              <img src="@/assets/images/meeting/conferenceDetails/icon.png" alt="">
              <div class="meetingInfo-list-right-img-title">Ning Li</div>
            </div>
          </div>
        </div>
        <div class="meetingInfo-list">
          <div class="meetingInfo-list-left">
            <img src="@/assets/images/meeting/conferenceDetails/3.png" alt="">
          </div>
          <div class="meetingInfo-list-center">
            <img src="@/assets/images/meeting/conferenceDetails/4.png" alt="">
          </div>
          <div class="meetingInfo-list-right">
            <div class="meetingInfo-list-right-img">
              <img src="@/assets/images/meeting/conferenceDetails/icon.png" alt="">
              <div class="meetingInfo-list-right-img-title">Ning Li</div>
            </div>
            <div class="meetingInfo-list-right-img">
              <img src="@/assets/images/meeting/conferenceDetails/icon.png" alt="">
              <div class="meetingInfo-list-right-img-title">Ning Li</div>
            </div>
            <div class="meetingInfo-list-right-img">
              <img src="@/assets/images/meeting/conferenceDetails/icon.png" alt="">
              <div class="meetingInfo-list-right-img-title">Ning Li</div>
            </div>
          </div>
        </div>
        <div class="meetingline"><img src="@/assets/images/meeting/conferenceDetails/downline.png" alt=""></div>
      </div>
      <div class="dataStatistics">
        <div class="dataStatistics-title">
          <div class="title-text-top">会议详情</div>
          <div class="title-text">The metaverse is a shared virtual (虚拟的) 3D world, or worlds, The word is a
            combination (结合) of “meta” , whichmeans beyond, and "yerse" , which refers to "universe" , The word first
            appeared in a 1992 science fiction bookcalled Snow Crash. in this story, people wear virtual reality [VR)
            headsets to see and join the metaverse.
          </div>
        </div>
      </div>
    </div>
    <div class="container-rt">
      <div class="meeting-time">
        <div class="meeting-time-title">
          <div class="title-text">
            <div class="title-text-top-Num">{{ startDate }} - {{ endDate }}</div>
            <div class="title-text-top-time">{{ startTime }} - {{ endTime }}</div>
          </div>
        </div>
      </div>
      <div class="meeting-time-list glass">
        <div class="meeting-time-list-item"
             v-if="meetingInfo.seatrulea.gettype == 3
">
          <div class="meeting-time-list-item-left">
            <div class="meeting-time-list-item-left-top">
              $<span
                class="meeting-time-list-item-left-top-price">{{ meetingInfo.seatrulea.price }}</span>
              <span class="meeting-time-list-item-left-top-name">{{ meetingInfo.seatrulea.seatname }}</span>
            </div>
            <div class="meeting-time-list-item-left-down">
              <span
                  class="meeting-time-list-item-left-down-num">剩余数量：{{
                  meetingInfo.seatrulea.availableGuantity
                }}</span>
              <span class="meeting-time-list-item-left-down-select">座位选择：
                <!--                坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配-->
                <span v-if="meetingInfo.seatrulea.sntype==1">自由落座</span>
                <span v-if="meetingInfo.seatrulea.sntype==2">随机分配</span>
                <span v-if="meetingInfo.seatrulea.sntype==3">固定分配</span>
              </span>
            </div>
          </div>
          <div class="meeting-time-list-item-right">
            <img class="meeting-time-list-item-right-btn"
                 @click="buyMeetingTickets(1, 0)"
                 v-if="(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 1)
             )"
                 src="@/assets/images/meeting/conferenceDetails/up.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 0 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 1)
             )"
                 src="@/assets/images/meeting/conferenceDetails/noMeeting.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 1 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 1)
             )"
                 @click="enterMeeting"
                 src="@/assets/images/meeting/conferenceDetails/joinMeeting.png" alt="">
          </div>
        </div>
        <div class="meeting-time-list-item"
             v-if="meetingInfo.seatruleb.gettype == 3">
          <div class="meeting-time-list-item-left">
            <div class="meeting-time-list-item-left-top">
              $<span
                class="meeting-time-list-item-left-top-price">{{ meetingInfo.seatruleb.price }}</span>
              <span class="meeting-time-list-item-left-top-name">{{ meetingInfo.seatruleb.seatname }}</span>
            </div>
            <div class="meeting-time-list-item-left-down">
              <span
                  class="meeting-time-list-item-left-down-num">剩余数量：{{
                  meetingInfo.seatruleb.availableGuantity
                }}</span>
              <span class="meeting-time-list-item-left-down-select">座位选择：
                <!--                坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配-->
                <span v-if="meetingInfo.seatruleb.sntype==1">自由落座</span>
                <span v-if="meetingInfo.seatruleb.sntype==2">随机分配</span>
                <span v-if="meetingInfo.seatruleb.sntype==3">固定分配</span>
              </span>
            </div>
          </div>
          <div class="meeting-time-list-item-right">
            <img class="meeting-time-list-item-right-btn"
                 @click="buyMeetingTickets(2, 0)"
                 v-if="(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 2)
             )"
                 src="@/assets/images/meeting/conferenceDetails/up.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 0 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 2)
             )"
                 src="@/assets/images/meeting/conferenceDetails/noMeeting.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 1 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 2)
             )"
                 @click="enterMeeting"
                 src="@/assets/images/meeting/conferenceDetails/joinMeeting.png" alt="">
          </div>
        </div>
        <div class="meeting-time-list-item"
             v-if="meetingInfo.seatrulec.gettype == 3">
          <div class="meeting-time-list-item-left">
            <div class="meeting-time-list-item-left-top">
              $<span
                class="meeting-time-list-item-left-top-price">{{ meetingInfo.seatrulec.price }}</span>
              <span class="meeting-time-list-item-left-top-name">{{ meetingInfo.seatrulec.seatname }}</span>
            </div>
            <div class="meeting-time-list-item-left-down">
              <span
                  class="meeting-time-list-item-left-down-num">剩余数量：{{
                  meetingInfo.seatrulec.availableGuantity
                }}</span>
              <span class="meeting-time-list-item-left-down-select">座位选择：
                <!--                坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配-->
                <span v-if="meetingInfo.seatrulec.sntype==1">自由落座</span>
                <span v-if="meetingInfo.seatrulec.sntype==2">随机分配</span>
                <span v-if="meetingInfo.seatrulec.sntype==3">固定分配</span>
              </span>
            </div>
          </div>
          <div class="meeting-time-list-item-right">
            <img class="meeting-time-list-item-right-btn"
                 @click="buyMeetingTickets(3, 0)"
                 v-if="(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 3)
             )"
                 src="@/assets/images/meeting/conferenceDetails/up.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 0 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 3)
             )"
                 src="@/assets/images/meeting/conferenceDetails/noMeeting.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 1 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 3)
             )"
                 @click="enterMeeting"
                 src="@/assets/images/meeting/conferenceDetails/joinMeeting.png" alt="">
          </div>
        </div>
        <div class="meeting-time-list-item"
             v-if="meetingInfo.seatruled.gettype == 3">
          <div class="meeting-time-list-item-left">
            <div class="meeting-time-list-item-left-top">
              $<span
                class="meeting-time-list-item-left-top-price">{{ meetingInfo.seatruled.price }}</span>
              <span class="meeting-time-list-item-left-top-name">{{ meetingInfo.seatruled.seatname }}</span>
            </div>
            <div class="meeting-time-list-item-left-down">
              <span
                  class="meeting-time-list-item-left-down-num">剩余数量：{{
                  meetingInfo.seatruled.availableGuantity
                }}</span>
              <span class="meeting-time-list-item-left-down-select">座位选择：
                <!--                坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配-->
                <span v-if="meetingInfo.seatruled.sntype==1">自由落座</span>
                <span v-if="meetingInfo.seatruled.sntype==2">随机分配</span>
                <span v-if="meetingInfo.seatruled.sntype==3">固定分配</span>
              </span>
            </div>
          </div>
          <div class="meeting-time-list-item-right">
            <img class="meeting-time-list-item-right-btn"
                 @click="buyMeetingTickets(4, 0)"
                 v-if="(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 4)
             )"
                 src="@/assets/images/meeting/conferenceDetails/up.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 0 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 4)
             )"
                 src="@/assets/images/meeting/conferenceDetails/noMeeting.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 1 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 4)
             )"
                 @click="enterMeeting"
                 src="@/assets/images/meeting/conferenceDetails/joinMeeting.png" alt="">
          </div>
        </div>
        <div class="meeting-time-list-item">
          <div class="meeting-time-list-item-left">
            <div class="meeting-time-list-item-left-top">
              $<span
                class="meeting-time-list-item-left-top-price">{{ meetingInfo.audiencearearule.price }}</span>
              <span class="meeting-time-list-item-left-top-name">{{ meetingInfo.audiencearearule.seatname }}</span>
            </div>
            <div class="meeting-time-list-item-left-down">
              <span
                  class="meeting-time-list-item-left-down-num">剩余数量：{{
                  meetingInfo.audiencearearule.availableGuantity
                }}</span>
              <span class="meeting-time-list-item-left-down-select">座位选择：
                <!--                坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配-->
                <span v-if="meetingInfo.audiencearearule.sntype==1">自由落座</span>
                <span v-if="meetingInfo.audiencearearule.sntype==2">随机分配</span>
                <span v-if="meetingInfo.audiencearearule.sntype==3">固定分配</span>
              </span>
            </div>
          </div>
          <div class="meeting-time-list-item-right">
            <img class="meeting-time-list-item-right-btn"
                 @click="buyMeetingTickets(5, 0)"
                 v-if="(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 5)
             )"
                 src="@/assets/images/meeting/conferenceDetails/up.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 0 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 5)
             )"
                 src="@/assets/images/meeting/conferenceDetails/noMeeting.png" alt="">
            <img class="meeting-time-list-item-right-btn" style="width: 90%" v-if="meetingType == 1 && !(
               !meetingCenterStore.meetingTicketsList.info ||
               (meetingCenterStore.meetingTicketsList.info && meetingCenterStore.meetingTicketsList.info.ticketstype != 5)
             )"
                 @click="enterMeeting"
                 src="@/assets/images/meeting/conferenceDetails/joinMeeting.png" alt="">
          </div>
        </div>
        <!--        <div class="meeting-time-enter" v-if="meetingType == 1">-->
        <!--          <img class="meeting-time-enter-btn"-->
        <!--               @click="enterMeeting"-->
        <!--               src="@/assets/images/meeting/conferenceDetails/enter.png" alt="">-->
        <!--        </div>-->
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, watch, inject,watchEffect} from "vue";
import {useToggle} from "@vueuse/core";
import {useMeetingCenterStore} from "@/store";
import {parseTime} from "@/utils";
import * as Proto from "@/proto/meeting_pb.js";
import {jsCallUE} from "@/utils/UEmethod";
import MsgId from "@/proto/msgid_pb.js";
import cloneDeep from "lodash/cloneDeep";
import message from "@arco-design/web-vue/es/message";

const props = defineProps({
  loading: {
    type: Boolean,
    default: false
  },
  meetingType: {
    type: Number,
    default: 0
  }
});


let meetingCenterStore = useMeetingCenterStore();
let meetingInfo = reactive(meetingCenterStore.meetingInfo);
let meetingSeatInfo = reactive(meetingCenterStore.meetingSeatInfoList);
let startDate = parseTime(meetingInfo.starttime * 1000, "{y}/{m}/{d}");
let endDate = parseTime(meetingInfo.endtime * 1000, "{y}/{m}/{d}");
let startTime = parseTime(meetingInfo.starttime * 1000, "{hh}:{ii}");
let endTime = parseTime(meetingInfo.endtime * 1000, "{hh}:{ii}");


const enterMeeting = inject("enterMeeting");


// 获取门票信息列表
function getTicketInfoList() {
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetMeetingTicketsInfoReq();
  InfoReq.setMeetingid(meetingCenterStore.meetingInfo.meetingid);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求会议门票信息 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetMeetingTicketsInfoReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_MEETING_TICKETS_INFO_REQ, bytes);
}


// 获取会议可出售的坐席总数列表
function getSeatInfoList() {
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetMeetingSeatInfoReq();
  InfoReq.setMeetingid(meetingCenterStore.meetingInfo.meetingid);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求可出售的坐席总数 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetMeetingSeatInfoReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_MEETING_SEAT_INFO_REQ, bytes);
}

//请求购买会议门票
function buyMeetingTickets(ticketsType, num) {
  // 请求会议中心信息
  let C2SInfoReq = new Proto.default.C2SBuyMeetingTicketsReq();
  let InfoReq = new Proto.default.MsgMeetingTicketsInfo();
  // 封装购票信息
  InfoReq.setMeetingid(meetingCenterStore.meetingInfo.meetingid);
  InfoReq.setTicketstype(ticketsType);
  InfoReq.setSeatnum(num);
  C2SInfoReq.setInfo(InfoReq);

  // 序列化
  const bytes = C2SInfoReq.serializeBinary();

  console.log("请求可出售的坐席总数 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SBuyMeetingTicketsReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_BUY_MEETING_TICKETS_REQ, bytes);
}


watch(
    () => meetingCenterStore.meetingSeatInfoList,
    (newVal, oldVal) => {
      console.log("meetingSeatInfoList changed:", newVal);
      if (newVal && newVal.seatatotalnum) {
        meetingInfo.seatrulea.availableGuantity = newVal.seatatotalnum;
        meetingInfo.seatruleb.availableGuantity = newVal.seatbtotalnum;
        meetingInfo.seatrulec.availableGuantity = newVal.seatctotalnum;
        meetingInfo.seatruled.availableGuantity = newVal.seatdtotalnum;
        meetingInfo.audiencearearule.availableGuantity = newVal.audienceareanum;
      }
    },
    {
      deep: true, // 开启深度监听
      immediate: true
    }
);

watch(
    () => meetingCenterStore.meetingTickets.errcode,
    (newVal, oldVal) => {
      console.log("meetingTickets changed:", newVal);
      // 处理 meetingTickets 的变化逻辑
      // 在这里处理 meetingTickets 的变化逻辑
      // 0.成功
      // 1.除观众席外的其他席位编号不可为0
      // 2.坐席已经被售出
      // 3.类型相同的重复购买或坐席档位低与当前坐席档位
      // 4.货币不足
      if (newVal == -1) {
        message.normal("购买失败");
      } else if (newVal == 0) {
        message.normal("购买成功");
        //查询下购买列表
        getTicketInfoList();
      } else if (newVal == 1) {
        message.normal("除观众席外的其他席位编号不可为0");
      } else if (newVal == 2) {
        message.normal("坐席已经被售出");
      } else if (newVal == 3) {
        message.normal("类型相同的重复购买或坐席档位低与当前坐席档位");
      } else if (newVal == 4) {
        message.normal("货币不足");
      }
    },
    {
      deep: true, // 开启深度监听
      immediate: true
    }
);


function init() {
  // 获取购票信息列表
  getSeatInfoList();
  // 请求者是否购票 1.是 0.否
  console.log(meetingCenterStore.meetingInfo,'会议详情信息');
  // if (meetingCenterStore.meetingInfo.requesterisbuyed == 1) {
  //   getTicketInfoList();
  // }
  getTicketInfoList();
  console.log(props.meetingType, "详情界面传来的会议类型");
}

defineExpose({
  getTicketInfoList
});

onBeforeMount(() => {
  init();
});
onMounted(() => {
  // console.log("会议详情信息", JSON.stringify(meetingCenterStore.meetingInfo));
  // console.log("会议可出售的坐席总数列信息", meetingCenterStore.meetingSeatInfoList);

});
onBeforeUnmount(() => {
  meetingCenterStore.meetingTickets = {
    errcode: undefined
  };
  meetingCenterStore.attendMeeting = {
    errcode: undefined
  };
});


</script>

<style scoped lang="less">
.container-today {
  width: 100%;
  height: 90%;
  margin: 0 auto;
  margin-top: 2%;
  overflow: auto;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* IE 和 Edge */
  //background-color: #9c5eff;
  display: flex;
  justify-content: space-evenly;

  .container-lf {
    width: 48%;
    padding: 10px;

    .gaiyao {
      width: 96%;
      margin-left: 2%;
      height: 20vh;
      background-image: url("@/assets/images/meeting/conferenceDetails/gaiyao.png");
      background-size: cover;
      position: relative;

      .gaiyao-title {
        position: absolute;
        left: 0;
        bottom: 1vh;
        color: #E6DCD1;

        .title-text-top {
          font-weight: 900;
          font-size: 1.6rem;
          font-family: 'Aemstel-LineHorizontal';
        }

        .title-text {
          font-weight: 900;
          font-size: 4rem;
          font-family: 'zihun35hao-jindianyahei';
        }
      }

      .meetingline {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -2px;

        img {
          width: 100%;
        }
      }
    }

    .meetingInfo {
      margin-top: 3vh;
      width: 96%;
      margin-left: 2%;
      padding-bottom: 3vh;
      position: relative;

      .meetingline {
        width: 100%;
        position: absolute;
        left: 0;
        bottom: -2px;

        img {
          width: 100%;
        }
      }

      img {
        height: 100%;
      }

      .meetingInfo-list {
        display: flex;
        height: 8vh;
        margin-bottom: 4vh;

        .meetingInfo-list-left {

        }

        .meetingInfo-list-center {
          margin-left: 6%;
        }

        .meetingInfo-list-right-name {
          color: #FFFFFF;
          width: 70%;
          display: flex;
          align-items: center;
          margin-left: 4%;
          font-size: 1rem;
        }

        .meetingInfo-list-right {
          width: 70%;
          margin-left: 4%;
          display: flex;
          align-items: center;

          .meetingInfo-list-right-img {
            width: 12%;
            margin-left: 1vw;
            display: flex;
            flex-direction: column;
            align-items: center;

            .meetingInfo-list-right-img-title {
              color: #FFFFFF;
            }

            img {
              width: 100%;
            }
          }
        }
      }
    }

    .dataStatistics {
      //margin-top: 2vh;
      width: 96%;
      margin-left: 2%;
      color: #FFFFFF;

      .title-text-top {
        font-weight: 900;
        font-size: 1.4rem;
      }

      .title-text {
        font-size: 1rem;
        margin-top: 1vh;
      }
    }
  }

  .container-rt {
    width: 46%;
    //padding: 10px;
    display: flex;
    flex-direction: column;

    .meeting-time {
      width: 96%;
      height: 18vh;
      background-image: url("@/assets/images/meeting/conferenceDetails/time.png");
      background-size: 100% 100%;

      .meeting-time-title {
        display: flex;
        justify-content: flex-end;
        width: 100%;
        color: #B39E86;
        margin-top: 4vh;
        padding-top: 1vh;
        padding-right: 2vw;

        .title-text {
          font-weight: 900;

          .title-text-top-Num {
            font-size: 1rem;
          }

          .title-text-top-time {
            margin-top: 2vh;
            font-size: 2rem;
          }
        }
      }
    }

    .meeting-time-list {
      width: 96%;
      margin-top: 2vh;
      height: 62vh;
      overflow: auto;
      padding-bottom: 2vh;
      //box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      .meeting-time-list-item {
        width: 92%;
        margin-top: 2vh;
        margin-left: 4%;
        height: 12vh;
        display: flex;
        /* 设置半透明背景 */
        background-color: rgba(0, 0, 0, 0.6); /* 白色背景，50% 透明度 */
        border-radius: 20px;
        overflow: hidden;
        border: none;
        color: #FFFFFF;

        .meeting-time-list-item-left {
          width: 70%;
          //display: flex;
          //align-items: center;
          //justify-content: center;
          //font-size: 1rem;
          //margin-left: 2rem;
          margin-top: 2vh;
          padding-left: 2vw;

          .meeting-time-list-item-left-top {
            padding: 1vh 0;

            .meeting-time-list-item-left-top-price {
              font-size: 2rem;
            }

            .meeting-time-list-item-left-top-name {
              margin-left: 6px;
            }
          }

          .meeting-time-list-item-left-down {
            display: flex;
            align-items: center;
            justify-content: space-between;

            .meeting-time-list-item-left-down-select {
              margin-right: 20%;
            }
          }
        }

        .meeting-time-list-item-right {
          width: 30%;
          display: flex;
          align-items: center;
          justify-content: center;

          .meeting-time-list-item-right-btn {
            width: 60%;
            //height: 3.3vh;
            cursor: pointer;
          }

          .meeting-time-list-item-right-btn:active {
            //background-image: url("@/assets/images/meeting/conferenceDetails/up.png");
            //background-size: cover;
            border: 2px solid transparent;
          }
        }
      }
    }

    .meeting-time-enter {
      width: 100%;
      display: flex;
      justify-content: center;
      justify-items: center;
      margin-top: 2vh;

      .meeting-time-enter-btn {
        height: 6vh;
        cursor: pointer;
      }

      .meeting-time-enter-btn:active {
        //background-image: url("@/assets/images/meeting/conferenceDetails/up.png");
        //background-size: cover;
        border: 2px solid transparent;
      }
    }
  }
}

.container-today::-webkit-scrollbar {
  width: 0; /* Safari 和 Chrome */
}

.meeting-time-list::-webkit-scrollbar {
  width: 0; /* Safari 和 Chrome */
}

</style>
