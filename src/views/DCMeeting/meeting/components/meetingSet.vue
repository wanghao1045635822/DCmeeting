<template>
  <div class="container">
    <!--侧边栏-->
    <div class="container-left">
      <div class="container-left-banner">
        <div class="container-left-banner-top">
          <div class="container-left-banner-top-title">
            <img style="width: 100%;height: 100%" src="@/assets/images/meeting/meeting/application/huamian.png" alt="">
          </div>
        </div>
        <meeting-time-show></meeting-time-show>
      </div>
    </div>
    <!--内容区-->
    <div class="container-right">
      <div class="container-today">
        <div class="container-list-meeting glass">
          <!--        左边设置标题-->
          <div class="leftTable">
            <div class="container-list-meeting-list">
              <div
                class="container-list-meeting-list-info"
                v-for="(item,index) in leftBannerData"
                :key="item.key"
                :style="{color: item.key == setKey?'#FFF5D9':''}"
                @click="tableBannerChange(item)"
              >
                <span>{{ item.title }}</span>
                <img v-show="item.active" class="lfimg" src="@/assets/images/meeting/meeting/application/dian.png"
                     alt="">
                <img v-show="item.active" class="rtimg" src="@/assets/images/meeting/meeting/application/hu.png" alt="">
              </div>
            </div>
          </div>
          <!--          右边设置内容-->
          <div class="rightCenter">
            <div v-show="setKey=='information'" class="meeting-information">
              <a-form
                :model="meetingform"
                ref="formRef"
                style="
                  margin-top: 4vh;
"
                :label-col-props="{ span: 4 }"
                :wrapper-col-props="{ span: 19 }"
                label-align="right"

              >
                <a-form-item field="meetingName" label="会议名称：">
                  <a-input v-model="meetingform.meetingName" placeholder="从NFC迈向元宇宙" max-length="100" />
                </a-form-item>
                <a-form-item field="name" label="会议封面：">
                  <div class="upDataImg">
                    <meeting-panel ref="meetingPanelRef"></meeting-panel>
                  </div>
                </a-form-item>
              </a-form>
            </div>
            <div v-show="setKey=='meetingInfo'" class="meeting-meetingInfo">
              <meeting-editor ref="meetingEditorRef"></meeting-editor> />
            </div>
            <div v-show="setKey=='functionSettings'" class="meeting-functionSettings">
              <meeting-set-from ref="meetingSetFromRef" />
            </div>
          </div>
        </div>
      </div>
      <div class="btnList">
        <div class="prve-btn" style="margin-right: 2vw;" @click="prve">上一步</div>
        <div class="next-btn" @click="next">提交申请</div>
      </div>
    </div>
    <voting-pop ref="votingPops"></voting-pop>
  </div>

</template>

<script lang="ts" setup>
import { inject, nextTick, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, watch } from "vue";
import { useToggle } from "@vueuse/core";
import titleBannerBg from "@/assets/images/meeting/home/container-banner.png";
import lineBg from "@/assets/images/meeting/home/line.png";
import meetingBtnBg1 from "@/assets/images/meeting/home/meetingBtnBg1.png";
import meetingBtnBg2 from "@/assets/images/meeting/home/meetingBtnBg2.png";
import * as Proto from "@/proto/meeting_pb.js";
import { jsCallUE, toFsString } from "@/utils/UEmethod";
import { storeToRefs } from "pinia";
import { useMeetingCenterStore } from "@/store";
import MsgId from "@/proto/msgid_pb.js";
import { Organization } from "@/api/authority";
import meetingPanel from "@/views/DCMeeting/meeting/components/meeting-panel.vue";
import meetingEditor from "@/views/DCMeeting/meeting/components/meetingEditor.vue";
import meetingSetFrom from "@/views/DCMeeting/meeting/components/meetingSetFrom.vue";
import EventBus from "@/utils/EventBus";
import meetingTimeShow from "@/views/DCMeeting/meeting/components/meetingTimeShow.vue";
import { Message } from "@arco-design/web-vue";
import cloneDeep from "lodash/cloneDeep";
import message from "@arco-design/web-vue/es/message";
import votingPop from "@/views/DCMeeting/meeting/components/votingPop.vue"

let meetingCenterStore = useMeetingCenterStore();
let sharedMeetingMethod = inject("sharedMeetingMethod");
let meetingSetFromRef = ref(null);
let meetingEditorRef = ref(null);
let votingPops = ref<any>(null);

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
let selectedMeetingRoom = reactive({});//选择的会议室信息包括会议时间
// 首页侧边栏对象列表
const leftBannerData = ref([
  {
    title: "基本信息",
    key: "information",
    width: "10%",
    active: true
  },
  {
    title: "会议详情",
    key: "meetingInfo",
    width: "30%",
    active: false
  },
  {
    title: "功能设定",
    key: "functionSettings",
    width: "30%",
    active: false
  }
]);

let setKey = ref("information");
let meetingPanelRef = ref();

let meetingform = ref<Organization>({
  meetingName: "快来会议",// 会议名称
  fileList: []
});

function tableBannerChange(item) {
  leftBannerData.value.map((items) => {
    items.active = false;
    if (items.key == item.key) {
      items.active = true;
      setKey.value = item.key;
    }
    return items;
  });


}

function changeMeetingBtnBg() {
  meetingBtn1.value = meetingBtn2.value;
}

function prve() {
  sharedMeetingMethod("meetingRoom");
}

function next() {
  // 表单校验
  if (!meetingform.value.meetingName) {
    Message.normal("请输入会议名称");
    return;
  }

  if(!meetingCenterStore.coverImage){
    // 图片信息（必填）
    console.log(meetingCenterStore.coverImage, "图片信息（必填）");
    // 获取图片路径
    Message.normal('请上传会议封面');
    return;
  }

  // if(JSON.stringify(meetingCenterStore.displayImageA)=="{}" ){
  //   // 图片信息（必填）
  //   console.log(meetingCenterStore.displayImageA, "A图片信息（必填）");
  //   // 获取图片路径
  //   Message.normal('请上传A广告位');
  //   return;
  // }
  //
  // if(JSON.stringify(meetingCenterStore.displayImageB)=="{}" ){
  //   // 图片信息（必填）
  //   console.log(meetingCenterStore.displayImageB, "B图片信息（必填）");
  //   // 获取图片路径
  //   Message.normal('请上传B广告位');
  //   return;
  // }

  // 数据封装并提交
  sendMeetingInfo();
  // sharedMeetingMethod("meetingViewInfo");

}

// 会议申请数据封装和发送
function sendMeetingInfo() {
  // 选择的会议时间和会议室信息
  // console.log(selectedMeetingRoom, "选择的会议时间和会议室信息");
  // 会议设置的参数信息
  console.log(meetingSetFromRef.value.meetingform, "会议设置的参数信息");
  // 最终封装成会议请求的参数信息
  let startTime = new Date(selectedMeetingRoom.date.startTime).getTime() / 1000;
  let endTime = new Date(selectedMeetingRoom.date.endTime).getTime() / 1000;
  // console.log(startTime, endTime);

  let meetingformData = meetingSetFromRef.value.meetingform;


  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SCreateMeetingReq();
  let meetingInfoReq = new Proto.default.MsgMeetingInfo();

  // 封装会议信息MsgMeetingInfo     ********************************设置顶级字段****************************
  meetingInfoReq.setMeetingname(meetingform.value.meetingName);// 会议名称
  meetingInfoReq.setMeetingintroduction("");// 会议介绍
  // meetingInfoReq.setMeetingspeaker('');//会议演讲者们id
  // meetingInfoReq.setMeetingguest('');// 会议嘉宾
  meetingInfoReq.setMeetingcoverurl(meetingCenterStore.coverImage);// 会议封面
  // ***********时间1732876200这种就会解析不成功************************
  // meetingInfoReq.setStarttime(new Long(1236545221,0));// 会议开始时间
  meetingInfoReq.setStarttime(startTime);// 会议开始时间
  meetingInfoReq.setEndtime(endTime);// 会议结束时间
  // meetingInfoReq.setCreatorroleid(1);// 创建者角色id
  meetingInfoReq.setMeetingroomid(parseInt(selectedMeetingRoom.meetingroomid));// 会议室id
  meetingInfoReq.setMeetingcenterid(2100);// 会议中心id
  meetingInfoReq.setMeetingcenterkey(0);// 会议中心key
  meetingInfoReq.setMeetingdetails(meetingEditorRef.value.meetingDetails);// 会议详情文本 todo:: 此应该传递富文本数据，看是否改成全字符串传入
  // meetingInfoReq.setMeetingdetailsurlList([]);// 会议详情插图URL
  meetingInfoReq.setMeetingrealstart(0);// 会议真正开始 0.否 1.是 2.提前结束
  meetingInfoReq.setScreentypea(meetingformData.screenTypeA);// 会议室A类屏幕类型 0.无该类屏幕 1.投屏 2.投票 3.发言人
  meetingInfoReq.setScreentypeb(meetingformData.screenTypeB);// 会议室B类屏幕类型 0.无该类屏幕 1.投屏 2.投票 3.发言人
  meetingInfoReq.setScreentypec(meetingformData.screenTypeC);// 会议室C类屏幕类型 0.无该类屏幕 1.投屏 2.投票 3.发言人
  meetingInfoReq.setScreentyped(meetingformData.screenTypeD);// 会议室D类屏幕类型 0.无该类屏幕 1.投屏 2.投票 3.发言人
  // meetingInfoReq.setSoldseatcount(0);// 坐席售卖计数
  // meetingInfoReq.setRequesterisbuyed(0);// 请求者是否购票 1.是 0.否
  // meetingInfoReq.setCurrentissharescreen(0);// 当前是否分享屏幕 0.否 1.是
  // meetingInfoReq.setCurrentsharescreenroldid(0);// 当前分享屏幕的角色id
  // meetingInfoReq.setCurrentvotenum(0);// 当前发起的投票编号
  // meetingInfoReq.setCurrentistospeak(3);// 当前是否分享发言 3.是 4.否
  // meetingInfoReq.setCurrenttospeakername('');// 当前分享发言人的名字
  // meetingInfoReq.setRequesterisenter(0);// 请求者是否进入过当前会议


  // 序列化:坐席A
  // 封装会议信息：MsgMeetingSeatRule   ************************************************
  let MsgMeetingSeatRuleA = new Proto.default.MsgMeetingSeatRule();// 会议坐席规则（A）
  MsgMeetingSeatRuleA.setSeatname(meetingformData.seatRuleA.seatName);// 坐席名称
  MsgMeetingSeatRuleA.setGettype(meetingformData.seatRuleA.getType);// 获取条件 1.邀请 2.申请 3.售卖
  MsgMeetingSeatRuleA.setPrice(meetingformData.seatRuleA.price);// 价格
  MsgMeetingSeatRuleA.setSntype(meetingformData.seatRuleA.snType);// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配

  // 序列化:坐席B
  let MsgMeetingSeatRuleB = new Proto.default.MsgMeetingSeatRule();// 会议坐席规则（B）
  MsgMeetingSeatRuleB.setSeatname(meetingformData.seatRuleB.seatName);// 坐席名称
  MsgMeetingSeatRuleB.setGettype(meetingformData.seatRuleB.getType);// 获取条件 1.邀请 2.申请 3.售卖
  MsgMeetingSeatRuleB.setPrice(meetingformData.seatRuleB.price);// 价格
  MsgMeetingSeatRuleB.setSntype(meetingformData.seatRuleB.snType);// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配

  // 序列化：坐席C
  let MsgMeetingSeatRuleC = new Proto.default.MsgMeetingSeatRule();// 会议坐席规则（C）
  MsgMeetingSeatRuleC.setSeatname(meetingformData.seatRuleC.seatName);// 坐席名称
  MsgMeetingSeatRuleC.setGettype(meetingformData.seatRuleC.getType);// 获取条件 1.邀请 2.申请 3.售卖
  MsgMeetingSeatRuleC.setPrice(meetingformData.seatRuleC.price);// 价格
  MsgMeetingSeatRuleC.setSntype(meetingformData.seatRuleC.snType);// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配


  // 序列化：坐席D
  let MsgMeetingSeatRuleD = new Proto.default.MsgMeetingSeatRule();// 会议坐席规则（D）
  MsgMeetingSeatRuleD.setSeatname(meetingformData.seatRuleD.seatName);// 坐席名称
  MsgMeetingSeatRuleD.setGettype(meetingformData.seatRuleD.getType);// 获取条件 1.邀请 2.申请 3.售卖
  MsgMeetingSeatRuleD.setPrice(meetingformData.seatRuleD.price);// 价格
  MsgMeetingSeatRuleD.setSntype(meetingformData.seatRuleD.snType);// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配


  // 序列化：观众
  let MsgMeetingSeatRule = new Proto.default.MsgMeetingSeatRule();// 会议群众规则
  MsgMeetingSeatRule.setSeatname(meetingformData.audienceAreaRule.seatName);// 坐席名称
  MsgMeetingSeatRule.setGettype(meetingformData.audienceAreaRule.getType);// 获取条件 1.邀请 2.申请 3.售卖
  MsgMeetingSeatRule.setPrice(meetingformData.audienceAreaRule.price);// 价格
  MsgMeetingSeatRule.setSntype(meetingformData.audienceAreaRule.snType);// 坐席编号类型 0.无 1.自由落座 2.随机分配 3.固定分配


  // 序列化：演讲
  // 封装会议信息：MsgMeetingSpeechRule   ************************************************
  let MsgMeetingSpeechRule = new Proto.default.MsgMeetingSpeechRule();// 会议演讲规则
  MsgMeetingSpeechRule.setGettype(meetingformData.speechRule.getType);// 获取条件 1.邀请 2.申请 3.售卖
  // MsgMeetingSpeechRule.setPrice(meetingformData.speechRule.price);// 价格
  MsgMeetingSpeechRule.setIsspeakerforscreen(meetingformData.speechRule.isSpeakerForScreen.length > 0 ? 1 : 0);// 是否演讲者投屏权限 0.否 1.是
  MsgMeetingSpeechRule.setIsspeakervote(meetingformData.speechRule.isSpeakerVote.length > 0 ? 1 : 0);// 是否演讲者发起投票权限 0.否 1.是
  MsgMeetingSpeechRule.setIsbanspeak(meetingformData.speechRule.isBanSpeak.length>0?1:0);// 是否禁止发言 0.否 1.是
  MsgMeetingSpeechRule.setIsbantalk(meetingformData.speechRule.isBanTalk.length>0?1:0);// 是否禁止聊天 0.否 1.是
  MsgMeetingSpeechRule.setIsbangift(meetingformData.speechRule.isBanGift.length>0?1:0);// 是否禁止送礼 0.否 1.是


  // 序列化:场景
  // 封装会议信息：MsgMeetingSceneRule   ************************************************
  let MsgMeetingSceneRule = new Proto.default.MsgMeetingSceneRule();// 会议场景规则
  MsgMeetingSceneRule.setIsrun(meetingformData.sceneRule.isRun.length > 0 ? 1 : 0);// 是否能跑 0.否 1.是
  MsgMeetingSceneRule.setIsjump(meetingformData.sceneRule.isJump.length > 0 ? 1 : 0);// 是否能跑 0.否 1.是
  MsgMeetingSceneRule.setIsformalwear(meetingformData.sceneRule.isFormalWear.length > 0 ? 1 : 0);// 是否能跑 0.否 1.是
  MsgMeetingSceneRule.setIsmask(meetingformData.sceneRule.isMask.length > 0 ? 1 : 0);// 是否能跑 0.否 1.是
  MsgMeetingSceneRule.setIsaudiencearealimit(meetingformData.sceneRule.isAudienceAreaLimit.length > 0 ? 1 : 0);// 是否能跑 0.否 1.是
  MsgMeetingSceneRule.setIsenterspeecharea(meetingformData.sceneRule.isEnterSpeechArea.length > 0 ? 1 : 0);// 是否能跑 0.否 1.是
  MsgMeetingSceneRule.setIsmeetingstartcanmove(meetingformData.sceneRule.isMeetingStartCanMove.length > 0 ? 1 : 0);// 是否能跑 0.否 1.是


  let MsgMeetingAdvert = new Proto.default.MsgMeetingAdvert();// 会议室展示区单元(广告位)
  // // 会议室展示区单元(广告位)
  // MsgMeetingAdvert.setAdvertid(item.advertId);// 单元编号id
  // MsgMeetingAdvert.setAdvertname(item.advertName);// 广告资源的文件名
  // MsgMeetingAdvert.setAdverturl(item.advertUrl);// 广告资源的Url
  // 会议室展示区单元(广告位)
  // 广告位封装：Msg
  if(JSON.stringify(meetingCenterStore.displayImageA)!="{}"){
    let MsgMeetingAdvert = new Proto.default.MsgMeetingAdvert();// 会议室展示区单元(广告位)
    MsgMeetingAdvert.setAdvertid(1);// 单元编号id
    MsgMeetingAdvert.setAdvertname(meetingCenterStore.displayImageA.name);// 广告资源的文件名
    MsgMeetingAdvert.setAdverturl(meetingCenterStore.displayImageA.url);// 广告资源的Url
    meetingInfoReq.addAdverts(MsgMeetingAdvert);
  }
  if(JSON.stringify(meetingCenterStore.displayImageB)!="{}" ){
    let MsgMeetingAdvert = new Proto.default.MsgMeetingAdvert();// 会议室展示区单元(广告位)
    MsgMeetingAdvert.setAdvertid(2);// 单元编号id
    MsgMeetingAdvert.setAdvertname(meetingCenterStore.displayImageB.name);// 广告资源的文件名
    MsgMeetingAdvert.setAdverturl(meetingCenterStore.displayImageB.url);// 广告资源的Url
    meetingInfoReq.addAdverts(MsgMeetingAdvert);
  }



  // 配置坐席规则
  meetingInfoReq.setSeatrulea(MsgMeetingSeatRuleA);
  meetingInfoReq.setSeatruleb(MsgMeetingSeatRuleB);
  meetingInfoReq.setSeatrulec(MsgMeetingSeatRuleC);
  meetingInfoReq.setSeatruled(MsgMeetingSeatRuleD);
  //配置观众规则



  meetingInfoReq.setAudiencearearule(MsgMeetingSeatRule);
  //配置场景规则
  meetingInfoReq.setScenerule(MsgMeetingSceneRule);
  //配置演讲规则
  meetingInfoReq.setSpeechrule(MsgMeetingSpeechRule);
  // 会议室展示区单元
  // meetingInfoReq.setAdvertsList([]);

  InfoReq.setInfo(meetingInfoReq);// 会议信息

  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求会议信息:", bytes);


  // 反序列化
  const userDeserialized = Proto.default.C2SCreateMeetingReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  console.log(JSON.stringify(userDeserialized.toObject()));

  meetingCenterStore.meetingDetails = userDeserialized.toObject();
  // 保存选中的会议室信息
  meetingCenterStore.meetingDetails.info.selectedMeetingRoom = selectedMeetingRoom;
  meetingCenterStore.bytes = bytes;

  // sharedMeetingMethod("meetingViewInfo");
  // 跳转到确认弹窗页面
  votingPops.value.visible = true

  // sharedMeetingMethod("meetingInfo");

}

// 初始化
function init() {

}

// 创建会议状态监听
// watch(
//   () => meetingCenterStore.createMeetingInfo,
//   (newVal, oldVal) => {
//     console.log(newVal, "createMeetingInfo状态发生变化");
//     //-1.成功但不弹界面不提示
//     // 0.成功
//     // 1.会议中心不存在
//     // 2.会议室不存在
//     // 3.会议室该时间段已被占用
//     // 4.详情的图片数量上限
//     // 5.货币不足
//     // 6.会议开始时间小于当前时间
//     if(newVal.errcode == 0){
//       sharedMeetingMethod('meetingInfo');
//     }else if(newVal.errcode == 1){
//       message.normal('会议中心不存在');
//     }else if(newVal.errcode == 2){
//       message.normal('会议室不存在');
//     }else if(newVal.errcode == 3){
//       message.normal('会议室该时间段已被占用');
//     }else if(newVal.errcode == 4){
//       message.normal('详情的图片数量上限');
//     }else if(newVal.errcode == 5){
//       message.normal('货币不足');
//     }else if(newVal.errcode == 6){
//       message.normal('会议开始时间小于当前时间');
//     }
//   },
//   {
//     deep: true // 开启深度监听
//     // immediate: true
//   }
// );

// meetingCenterStore.$subscribe((mutation, state) => {
//   console.log("mutation", mutation);
//   console.log("state", state);
//   if (mutation.storeId == "useMeetingCenterStore" && mutation.events.key == "createMeetingInfo") {
//     console.log("createMeetingInfo changed:", state.createMeetingInfo);
//     //-1.成功但不弹界面不提示
//     // 0.成功
//     // 1.会议中心不存在
//     // 2.会议室不存在
//     // 3.会议室该时间段已被占用
//     // 4.详情的图片数量上限
//     // 5.货币不足
//     // 6.会议开始时间小于当前时间
//     if(state.createMeetingInfo.errcode == 0){
//       sharedMeetingMethod('meetingInfo');
//     }else if(state.createMeetingInfo.errcode == 1){
//       message.normal('会议中心不存在');
//     }else if(state.createMeetingInfo.errcode == 2){
//       message.normal('会议室不存在');
//     }else if(state.createMeetingInfo.errcode == 3){
//       message.normal('会议室该时间段已被占用');
//     }else if(state.createMeetingInfo.errcode == 4){
//       message.normal('详情的图片数量上限');
//     }else if(state.createMeetingInfo.errcode == 5){
//       message.normal('货币不足');
//     }else if(state.createMeetingInfo.errcode == 6){
//       message.normal('会议开始时间小于当前时间');
//     }
//   }
//
// });



onBeforeMount(() => {
  init();
});

onMounted(() => {
  EventBus.on("getSelectRoomFun", (data) => {
    // console.log(data,'传来的选择会议室');
    Object.assign(selectedMeetingRoom, data);
  });
  // 在页面加载完成时强制设置输入框焦点
  window.onload = function() {
    const input = document.querySelector('input'); // 替换为具体的输入框选择器
    console.log(input);
    if (input) {
      input.focus();
    }
  };

});
onBeforeUnmount(() => {
  EventBus.off("getSelectRoomFun");
});

</script>

<style scoped lang="less">
.container{
  padding-top: 2vh!important;
}
.container-left {
  width: 18%;
  height: 79vh;
  //background: #a32323;
  float: left;
  position: relative;

  .container-left-banner {
    width: 100%;
    height: 100%;
    //background: #FFFFFF;
    position: absolute;
    //top: 10%;
    left: -1vw;
    right: 0;
    background-image: url("@/assets/images/meeting/meeting/application/leftBg.png");
    background-size: 100% 100%;
    //font-size: 1rem;
    .container-left-banner-top {
      width: 100%;
      margin-top: 3rem;

      .container-left-banner-top-title {
        width: calc(100% - 3.4vw);
        height: 48vh;
        margin: 0 auto;
        position: relative;
        background-size: 100% 100%;
        background-color: #FFFFFF;

      }
    }

    .container-left-banner-down {
      bottom: 2vh;
    }
  }

}

.container-right {
  width: 82%;
  height: 100%;
  //background: #F5F5F5;
  float: right;

  .container-today {
    width: 98%;
    height: 79vh;
    //margin-top: 2%;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 和 Edge */

    .container-list-meeting {
      width: 100%;
      margin-top: 0.4vh;
      height: calc(100% - 2vh);
      display: flex;
      flex-wrap: wrap;
      //justify-content: space-around;

      .leftTable {
        width: 20%;
        height: 100%;

        .container-list-meeting-list {
          margin-top: 10vh;

          .container-list-meeting-list-info {
            width: 100%;
            height: 4vh;
            line-height: 4vh;
            //background: #1d2129;
            color: #cccccc;
            text-align: center;
            cursor: pointer;
            position: relative;

            .lfimg {
              position: absolute;
              top: 0;
              right: 4vw;
              height: 100%;
            }

            .rtimg {
              position: absolute;
              top: 0;
              right: 0;
              height: 100%;
            }
          }
        }
      }

      .rightCenter {
        width: 80%;
        height: 100%;
        //background-color: #1d2129;
        //background-image: url("@/assets/images/meeting/meeting/application/rightBj.png");
        //background-size: 100% 100%;
        background-color: rgba(0, 0, 0, 0.8); /* 白色背景，50% 透明度 */
        color: #cccccc;

        .meeting-information {
          width: 100%;

          .upDataImg {
            width: 100%;
            height: 56vh;
            //background-color: #cccccc;
            border: 1px dashed #4c4c4c;
          }
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

:deep(.arco-form-item-label) {
  font-size: 0.8rem;
  color: #cccccc;
  font-family: 'PingFangSC-Regular';
}

:deep(.arco-input-wrapper) {
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px dashed #4c4c4c;
  color: #cccccc;
}

</style>
