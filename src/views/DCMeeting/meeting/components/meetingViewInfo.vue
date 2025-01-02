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
                  <a-input v-model="meetingform.meetingName" placeholder="从NFC迈向元宇宙" />
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
// 会议申请数据封装和发送

}


// 初始化
function init() {

}

meetingCenterStore.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
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
    if(state.createMeetingInfo.errcode == 0){
      sharedMeetingMethod('meetingInfo');
    }else if(state.createMeetingInfo.errcode == 1){
      message.normal('会议中心不存在');
    }else if(state.createMeetingInfo.errcode == 2){
      message.normal('会议室不存在');
    }else if(state.createMeetingInfo.errcode == 3){
      message.normal('会议室该时间段已被占用');
    }else if(state.createMeetingInfo.errcode == 4){
      message.normal('详情的图片数量上限');
    }else if(state.createMeetingInfo.errcode == 5){
      message.normal('货币不足');
    }else if(state.createMeetingInfo.errcode == 6){
      message.normal('会议开始时间小于当前时间');
    }
  }

});



onBeforeMount(() => {
  init();
});

onMounted(() => {
  EventBus.on("getSelectRoomFun", (data) => {
    // console.log(data,'传来的选择会议室');
    Object.assign(selectedMeetingRoom, data);
  });
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
  width: 100%;
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
