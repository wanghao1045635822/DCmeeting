<template>
  <div class="container">
    <!--侧边栏-->
    <!--    <div class="container-left">-->
    <!--      <div class="container-left-banner">-->
    <!--        <div class="container-left-banner-top">-->
    <!--          <div class="container-left-banner-top-title">-->
    <!--            <img style="width: 100%;height: 100%" src="@/assets/images/meeting/meeting/application/huamian.png" alt="">-->
    <!--          </div>-->
    <!--        </div>-->
    <!--        <meeting-time-show></meeting-time-show>-->
    <!--      </div>-->
    <!--    </div>-->
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
                  <span>{{ meetingform.meetingname }}</span>
                </a-form-item>
                <a-form-item field="name" label="会议封面：">
                  <!--                  <div class="upDataImg"></div>-->
                  <img id="myMmage"
                       style="  max-width: 50%; /* 确保图片不会超出容器宽度 */height: auto;/* 保持图片的宽高比 */"
                       :src="meetingCenterStore.coverImage" alt="Example Image"/>
                </a-form-item>
              </a-form>
            </div>
            <div v-show="setKey=='meetingInfo'" class="meeting-meetingInfo">
              <div class="meetingInfoDiv" v-html="meetingform.meetingdetails"></div>
            </div>
            <div v-show="setKey=='functionSettings'" class="meeting-functionSettings">
              <div class="container-today-title">
                <div class="container-today-title-text">
                  功能设置
                </div>
              </div>
              <a-form
                  :model="meetingform"
                  ref="formRef"
                  label-align="left"
                  :label-col-props="{ span: 4 }"
                  :wrapper-col-props="{ span: 20 }"
              >
                <div class="container-list-meeting">
                  <div class="MeetingSetFrom"
                       v-if="selectedMeetingRoom.screenTypeA || selectedMeetingRoom.screenTypeB || selectedMeetingRoom.screenTypeC ||selectedMeetingRoom.screenTypeD"
                  >
                    <div class="leftTitle">
                      <span>屏幕</span>
                    </div>
                    <div class="rightFrom">
                      <div class="rightFromText" v-if="selectedMeetingRoom.screenTypeA">
                        <a-form-item field="screenTypeA" label="A：">
                          <a-space size="large">
                            <a-radio-group v-model="meetingform.screentypea">
                              <a-radio :value="1">投屏</a-radio>
                              <a-radio :value="2">投票</a-radio>
                              <a-radio :value="3">发言人</a-radio>
                            </a-radio-group>
                          </a-space>
                        </a-form-item>
                      </div>
                      <div class="rightFromText" v-if="selectedMeetingRoom.screenTypeB">
                        <a-form-item field="screenTypeB" label="B：">
                          <a-space size="large">
                            <a-radio-group v-model="meetingform.screentypeb">
                              <a-radio :value="1">投屏</a-radio>
                              <a-radio :value="2">投票</a-radio>
                              <a-radio :value="3">发言人</a-radio>
                            </a-radio-group>
                          </a-space>
                        </a-form-item>
                      </div>
                      <div class="rightFromText" v-if="selectedMeetingRoom.screenTypeC">
                        <a-form-item field="screenTypeC" label="C：">
                          <a-space size="large">
                            <a-radio-group v-model="meetingform.screentypec">
                              <a-radio :value="1">投屏</a-radio>
                              <a-radio :value="2">投票</a-radio>
                              <a-radio :value="3">发言人</a-radio>
                            </a-radio-group>
                          </a-space>
                        </a-form-item>
                      </div>
                      <div class="rightFromText" v-if="selectedMeetingRoom.screenTypeD">
                        <a-form-item field="screenTypeD" label="D：">
                          <a-space size="large">
                            <a-radio-group v-model="meetingform.screentyped">
                              <a-radio :value="1">投屏</a-radio>
                              <a-radio :value="2">投票</a-radio>
                              <a-radio :value="3">发言人</a-radio>
                            </a-radio-group>
                          </a-space>
                        </a-form-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-today-line"
                     v-if="selectedMeetingRoom.screenTypeA || selectedMeetingRoom.screenTypeB || selectedMeetingRoom.screenTypeC ||selectedMeetingRoom.screenTypeD"
                ></div>
                <div class="container-list-meeting">
                  <div class="MeetingSetFrom">
                    <div class="leftTitle">
                      <span>展示区</span>
                    </div>
                    <div class="rightFrom">
                      <div class="rightFromText" style="display: flex;height: 4vh">
                        <a-form-item label="A：" style="width: 50%">
                          <a-space size="large">
                            <span>{{ meetingCenterStore.displayImageA.name }}</span>
                          </a-space>
                        </a-form-item>
                        <a-form-item label="B：" style="width: 50%">
                          <a-space size="large">
                            <span>{{ meetingCenterStore.displayImageB.name }}</span>
                          </a-space>
                        </a-form-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-today-line"></div>
                <div class="container-list-meeting">
                  <div class="MeetingSetFrom">
                    <div class="leftTitle">
                      <span>A坐席</span>
                    </div>
                    <div class="rightFrom" style="flex-direction: column;">
                      <div class="rightFromText">
                        <a-form-item label="名称：">
                          <span>{{ meetingform.seatrulea.seatname }}</span>
                        </a-form-item>
                        <a-form-item label="获取条件：">
                          <span v-if="meetingform.seatrulea.gettype===1">邀请</span>
                          <span v-if="meetingform.seatrulea.gettype===2">申请</span>
                          <span v-if="meetingform.seatrulea.gettype===3">售卖:{{meetingform.seatrulea.price}}</span>
                        </a-form-item>
                        <a-form-item label="坐席编号：">
                          <span v-if="meetingform.seatrulea.sntype===1">自由落座</span>
                          <span v-if="meetingform.seatrulea.sntype===2">随机分配</span>
                          <span v-if="meetingform.seatrulea.sntype===3">固定分配</span>
                        </a-form-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-today-line"></div>
                <div class="container-list-meeting">
                  <div class="MeetingSetFrom">
                    <div class="leftTitle">
                      <span>B坐席</span>
                    </div>
                    <div class="rightFrom" style="flex-direction: column;">
                      <div class="rightFromText">
                        <a-form-item label="名称：">
                          <span>{{ meetingform.seatruleb.seatname }}</span>
                        </a-form-item>
                        <a-form-item label="获取条件：">
                          <span v-if="meetingform.seatruleb.gettype===1">邀请</span>
                          <span v-if="meetingform.seatruleb.gettype===2">申请</span>
                          <span v-if="meetingform.seatruleb.gettype===3">售卖:{{meetingform.seatrulea.price}}</span>
                        </a-form-item>
                        <a-form-item label="坐席编号：">
                          <span v-if="meetingform.seatruleb.sntype===1">自由落座</span>
                          <span v-if="meetingform.seatruleb.sntype===2">随机分配</span>
                          <span v-if="meetingform.seatruleb.sntype===3">固定分配</span>
                        </a-form-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-today-line"></div>
                <div class="container-list-meeting">
                  <div class="MeetingSetFrom">
                    <div class="leftTitle">
                      <span>C坐席</span>
                    </div>
                    <div class="rightFrom" style="flex-direction: column;">
                      <div class="rightFromText">
                        <a-form-item label="名称：">
                          <span>{{ meetingform.seatrulec.seatname }}</span>
                        </a-form-item>
                        <a-form-item label="获取条件：">
                          <span v-if="meetingform.seatrulec.gettype===1">邀请</span>
                          <span v-if="meetingform.seatrulec.gettype===2">申请</span>
                          <span v-if="meetingform.seatrulec.gettype===3">售卖:{{meetingform.seatrulea.price}}</span>
                        </a-form-item>
                        <a-form-item label="坐席编号：">
                          <span v-if="meetingform.seatrulec.sntype===1">自由落座</span>
                          <span v-if="meetingform.seatrulec.sntype===2">随机分配</span>
                          <span v-if="meetingform.seatrulec.sntype===3">固定分配</span>
                        </a-form-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-today-line"></div>
                <div class="container-list-meeting">
                  <div class="MeetingSetFrom">
                    <div class="leftTitle">
                      <span>D坐席</span>
                    </div>
                    <div class="rightFrom" style="flex-direction: column;">
                      <div class="rightFromText">
                        <a-form-item label="名称：">
                          <span>{{ meetingform.seatruled.seatname }}</span>
                        </a-form-item>
                        <a-form-item label="获取条件：">
                          <span v-if="meetingform.seatruled.gettype===1">邀请</span>
                          <span v-if="meetingform.seatruled.gettype===2">申请</span>
                          <span v-if="meetingform.seatruled.gettype===3">售卖:{{meetingform.seatrulea.price}}</span>
                        </a-form-item>
                        <a-form-item label="坐席编号：">
                          <span v-if="meetingform.seatruled.sntype===1">自由落座</span>
                          <span v-if="meetingform.seatruled.sntype===2">随机分配</span>
                          <span v-if="meetingform.seatruled.sntype===3">固定分配</span>
                        </a-form-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-today-line"></div>
                <div class="container-list-meeting">
                  <div class="MeetingSetFrom">
                    <div class="leftTitle">
                      <span>观众区</span>
                    </div>
                    <div class="rightFrom">
                      <div class="rightFromText">
                        <a-form-item label="名称：">
                          <span>{{ meetingform.audiencearearule.seatname }}</span>
                        </a-form-item>
                        <a-form-item label="获取条件：">
                          <span v-if="meetingform.audiencearearule.gettype===1">邀请</span>
                          <span v-if="meetingform.audiencearearule.gettype===2">申请</span>
                          <span v-if="meetingform.audiencearearule.gettype===3">售卖:{{meetingform.seatrulea.price}}</span>
                        </a-form-item>
                        <a-form-item label="坐席编号：">
                          <span v-if="meetingform.audiencearearule.sntype===1">自由落座</span>
                          <span v-if="meetingform.audiencearearule.sntype===2">随机分配</span>
                          <span v-if="meetingform.audiencearearule.sntype===3">固定分配</span>
                        </a-form-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-today-line"></div>
                <div class="container-list-meeting">
                  <div class="MeetingSetFrom">
                    <div class="leftTitle">
                      <span>场景</span>
                    </div>
                    <div class="rightFrom">
                      <div class="rightFromText">
                        <a-form-item label="移动：">
                          <a-space size="large">
                            <span v-if="meetingform.scenerule.isrun == 1">跑步</span>
                            <span v-if="meetingform.scenerule.isjump == 1">跳跃</span>
                          </a-space>
                        </a-form-item>
                        <!--              <a-form-item label="服装：">-->
                        <!--                <a-space size="large">-->
                        <!--                  <a-checkbox-group v-model="meetingform.sceneRule.isFormalWear">-->
                        <!--                    <a-checkbox :value="1">正装</a-checkbox>-->
                        <!--                  </a-checkbox-group>-->
                        <!--                  <a-checkbox-group v-model="meetingform.sceneRule.isMask">-->
                        <!--                    <a-checkbox :value="1">面具</a-checkbox>-->
                        <!--                  </a-checkbox-group>-->
                        <!--                </a-space>-->
                        <!--              </a-form-item>-->
                        <a-form-item label="规则：">
                          <a-space size="large">
                            <span v-if="meetingform.scenerule.isaudiencearealimit == 1">观众区区域限定</span>
                            <span v-if="meetingform.scenerule.isenterspeecharea == 1">不能进入演讲区</span>
                            <span v-if="meetingform.scenerule.ismeetingstartcanmove == 1">会议开始不能走动</span>
                          </a-space>
                        </a-form-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-today-line"></div>
                <div class="container-list-meeting">
                  <div class="MeetingSetFrom">
                    <div class="leftTitle">
                      <span>演讲</span>
                    </div>
                    <div class="rightFrom">
                      <div class="rightFromText">
                        <a-form-item label="获取条件：">
                          <a-space size="large">
                            <span v-if="meetingform.speechrule.gettype===1">邀请</span>
                            <span v-if="meetingform.speechrule.gettype===2">申请</span>
                            <span v-if="meetingform.speechrule.gettype===3">售卖:{{meetingform.speechrule.price}}</span>
                          </a-space>
                        </a-form-item>
                        <a-form-item label="规则：">
                          <a-space size="large">
                            <span v-if="meetingform.speechrule.isspeakerforscreen===1">演讲者投屏权限</span>
                            <span v-if="meetingform.speechrule.isspeakervote===1">演讲者发起投票权限</span>
                            <span v-if="meetingform.speechrule.isbanspeak===1">禁止发言</span>
                            <span v-if="meetingform.speechrule.isbantalk===1">禁止聊天</span>
                            <span v-if="meetingform.speechrule.isbangift===1">禁止送礼</span>
                          </a-space>
                        </a-form-item>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="container-today-line"></div>
              </a-form>
            </div>
          </div>
        </div>
      </div>
      <div class="btnList">
        <div class="prve-btn" style="margin-right: 2vw;" @click="prve">上一步</div>
        <div class="next-btn" @click="next">提交申请</div>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import {inject, nextTick, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref, watch} from "vue";
import {useToggle} from "@vueuse/core";
import titleBannerBg from "@/assets/images/meeting/home/container-banner.png";
import lineBg from "@/assets/images/meeting/home/line.png";
import meetingBtnBg1 from "@/assets/images/meeting/home/meetingBtnBg1.png";
import meetingBtnBg2 from "@/assets/images/meeting/home/meetingBtnBg2.png";
import * as Proto from "@/proto/meeting_pb.js";
import {jsCallUE, toFsString} from "@/utils/UEmethod";
import {storeToRefs} from "pinia";
import {useMeetingCenterStore} from "@/store";
import MsgId from "@/proto/msgid_pb.js";
import {Organization} from "@/api/authority";
import meetingPanel from "@/views/DCMeeting/meeting/components/meeting-panel.vue";
import meetingEditor from "@/views/DCMeeting/meeting/components/meetingEditor.vue";
import meetingSetFrom from "@/views/DCMeeting/meeting/components/meetingSetFrom.vue";
import EventBus from "@/utils/EventBus";
import meetingTimeShow from "@/views/DCMeeting/meeting/components/meetingTimeShow.vue";
import {Message} from "@arco-design/web-vue";
import cloneDeep from "lodash/cloneDeep";
import message from "@arco-design/web-vue/es/message";

let meetingCenterStore = useMeetingCenterStore();
let sharedMeetingMethod = inject("sharedMeetingMethod");
let meetingSetFromRef = ref(null);
let meetingEditorRef = ref(null);

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

let meetingform = reactive({
  "meetingid": "",
  "meetingname": "快来会议",
  "meetingintroduction": "",
  "meetingspeaker": "",
  "meetingguest": "",
  "meetingcoverurl": "https://oss.test.kuailaiyuanyuzhou.com/ChatImages/thumb-1920-425950_1735887534_009.jpg",
  "starttime": 1735939800,
  "endtime": 1735972200,
  "creatorroleid": 0,
  "meetingroomid": 5,
  "meetingcenterid": 2100,
  "meetingcenterkey": 0,
  "scenerule": {
    "isrun": 0,
    "isjump": 0,
    "isformalwear": 0,
    "ismask": 0,
    "isaudiencearealimit": 0,
    "isenterspeecharea": 0,
    "ismeetingstartcanmove": 0
  },
  "seatrulea": {
    "seatname": "A坐席",
    "gettype": 1,
    "price": 10,
    "sntype": 2
  },
  "seatruleb": {
    "seatname": "B坐席",
    "gettype": 1,
    "price": 10,
    "sntype": 2
  },
  "seatrulec": {
    "seatname": "C坐席",
    "gettype": 1,
    "price": 10,
    "sntype": 2
  },
  "seatruled": {
    "seatname": "D坐席",
    "gettype": 1,
    "price": 10,
    "sntype": 2
  },
  "audiencearearule": {
    "seatname": "观众席",
    "gettype": 3,
    "price": 10,
    "sntype": 2
  },
  "speechrule": {
    "gettype": 1,
    "price": 0,
    "isspeakerforscreen": 0,
    "isspeakervote": 0,
    "isbanspeak": 0,
    "isbantalk": 0,
    "isbangift": 0
  },
  "meetingspeakersidList": [

  ],
  "meetingdetails": "<p>这是一篇计算机文章......</p>",
  "meetingdetailsurlList": [

  ],
  "meetingrealstart": 0,
  "screentypea": 0,
  "screentypeb": 0,
  "screentypec": 0,
  "screentyped": 0,
  "advertsList": [

  ],
  "soldseatcount": 0,
  "requesterisbuyed": 0,
  "currentissharescreen": 0,
  "currentsharescreenroldid": 0,
  "currentvotenum": 0,
  "currentistospeak": 0,
  "currenttospeakername": "",
  "requesterisenter": 0
});//会议信息

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

function prve() {
  sharedMeetingMethod("meetingSet");
}



function next() {
  // 请求创建会议接口
  jsCallUE(MsgId.C2S_CREATE_MEETING_REQ, meetingCenterStore.bytes);

}


// 初始化
function init() {

}

meetingCenterStore.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log(mutation.events.key,"属性变化了");
  if (mutation.storeId == "useMeetingCenterStore" && mutation.events.key == "createMeetingInfo") {
    console.log("createMeetingInfo changed:", state.createMeetingInfo);
    //-1.成功但不弹界面不提示
    // 0.成功
    // 1.会议中心不存在
    // 2.会议室不存在
    // 3.会议室该时间段已被占用
    // 4.详情的图片数量上限
    // 5.货币不足
    // 6.会议开始时间小于当前时间
    if (state.createMeetingInfo.errcode == 0) {
      sharedMeetingMethod('meetingInfo');
    } else if (state.createMeetingInfo.errcode == 1) {
      message.normal('会议中心不存在');
    } else if (state.createMeetingInfo.errcode == 2) {
      message.normal('会议室不存在');
    } else if (state.createMeetingInfo.errcode == 3) {
      message.normal('会议室该时间段已被占用');
    } else if (state.createMeetingInfo.errcode == 4) {
      message.normal('详情的图片数量上限');
    } else if (state.createMeetingInfo.errcode == 5) {
      message.normal('货币不足');
    } else if (state.createMeetingInfo.errcode == 6) {
      message.normal('会议开始时间小于当前时间');
    }
  }else if (mutation.storeId == "useMeetingCenterStore" && mutation.events.key == "meetingDetails") {
    Object.assign(meetingform, state.meetingDetails.info);
    console.log(JSON.stringify(meetingform),'传过来的会议信息')
  }

});


onBeforeMount(() => {
  init();
});

onMounted(() => {
  EventBus.on("getSelectRoomFun", (data) => {
    console.log(data,'传来的选择会议室(申请确认页面收)');
    Object.assign(selectedMeetingRoom, data);
  });
});
onBeforeUnmount(() => {
  EventBus.off("getSelectRoomFun");
  meetingCenterStore.bytes = '';
  meetingCenterStore.meetingDetails = '';
});

</script>

<style scoped lang="less">
.container {
  padding-top: 2vh !important;
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
  width: 100%;
  height: 100%;
  //background: #F5F5F5;
  float: right;

  .container-today {
    width: 98%;
    height: 79vh;
    //margin-top: 2%;
    margin-left: 1%;
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

        .meetingInfoDiv {
          width: 96%;
          height: 72vh;
          overflow: auto;
          margin: 2% auto;
        }

        .meeting-functionSettings{
            width: 100%;
            height: 100%;
            overflow: auto;
            scrollbar-width: none; /* Firefox */
            -ms-overflow-style: none; /* IE 和 Edge */

            .container-today-title {
              width: 94%;
              text-align: center;
              border-bottom: 1px dashed #605c5c;
              padding: 1vw;
              margin-left: 3%;
            }

            .container-list-meeting {
              width: 100%;
              padding: 10px;
              margin-top: 0;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-around;

              .MeetingSetFrom {
                width: 100%;
                display: flex;
                //align-items: center;
                .leftTitle {
                  width: 20%;
                  text-align: center;
                  height: 2.2rem;
                  line-height: 2.2rem;
                }

                .rightFrom {
                  width: 80%;
                  display: flex;
                  flex-wrap: wrap;
                  justify-content: flex-start;
                  flex-direction: column;

                  .rightFromText {
                    //margin-right: 4vw;
                    height: 12vh;
                  }
                }
              }
            }

            .container-today-line {
              width: 94%;
              text-align: center;
              border-bottom:1px dashed #605c5c;//虚线
              margin-left: 3%;
            }
          }

          .container-today::-webkit-scrollbar {
            width: 0; /* Safari 和 Chrome */
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

:deep(.arco-card-body) {
  padding: 0;
}

:deep(.arco-form-item-label) {
  font-size: 0.8rem;
  color: #cccccc;
  font-family: 'PingFangSC-Regular';
}

:deep(.arco-form-item) {
  margin: 0;
}

</style>
