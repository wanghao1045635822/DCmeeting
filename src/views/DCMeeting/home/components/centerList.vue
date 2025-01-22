<template>
  <div class="center">
    <div class="center-header">
      <div class="center-header-info">
        <a-card hoverable class="center-header-card"
        >
          <template #cover>
            <div
              style="{
                    overflow: hidden;
                    width: 8rem;
                    height: 8rem;
                    margin: 0 auto;
                    margin-top: 1rem;
                  }"
            >
              <img
                :style="{ width: '100%', height: '100%' }"
                alt="dessert"
                src="@/assets/images/meeting/center/user.png"
              />
            </div>
            <div class="center-header-card-img">
              <img src="@/assets/images/meeting/center/userlogo.png" alt="">
              <span style="font-size: 1rem;color: #FFFFFF">{{meetingCenterInfo.ownername}}</span>
            </div>
          </template>
          <div class="center-header-card-msg">
            <div class="center-header-card-msg-top">创建时间:</div>
            <div class="center-header-card-msg-down">{{parseTime(meetingCenterInfo.createtime,'{y}-{m}-{d}')}}</div>
            <div class="center-header-card-msg-top">失效时间:</div>
            <div class="center-header-card-msg-down">{{parseTime(meetingCenterInfo.duetime,'{y}-{m}-{d}')}}</div>
            <div class="center-header-card-msg-top">状态:</div>
            <div class="center-header-card-msg-down">开放</div>
            <div class="center-header-card-msg-top">房间数量:</div>
            <div class="center-header-card-msg-down">
              <div>大型会议室（{{meetingRoomList.infosList.filter(item => item.sitetype == '1').length}}个）</div>
              <div>中型会议室（{{meetingRoomList.infosList.filter(item => item.sitetype == '2').length}}个）</div>
              <div>小型会议室（{{meetingRoomList.infosList.filter(item => item.sitetype == '3').length}}个）</div>
              <div>迷你会议室（{{meetingRoomList.infosList.filter(item => item.sitetype == '4').length}}个）</div>
            </div>
          </div>
        </a-card>
      </div>
    </div>
    <div class="container-bady">
      <!--        中心介绍-->
      <div class="container-list-meeting">
<!--        <a-card hoverable style="display: flex;justify-content: center;align-items: center;cursor: pointer;" class="meeting-card"-->
<!--        >-->
<!--          <div-->
<!--            style="width: 6rem;"-->
<!--          >-->
<!--            <img-->
<!--              style="width: 100%;"-->
<!--              alt="dessert"-->
<!--              src="@/assets/images/meeting/center/add.png"-->
<!--            />-->
<!--            <div style="font-size: 0.8rem;color: #D1CAC5 ;margin-top: 6px;text-align: center">添加新会议室-->
<!--            </div>-->
<!--          </div>-->
<!--        </a-card>-->
        <a-card hoverable class="meeting-card action"
                v-for="(item) in meetingRoomList.infosList"
                :key="item.meetingRoomId"
        >
          <template #cover>
            <div
                style="
                    width: 100%;
                    height: 24vh;
                    overflow: hidden;
                  "
            >
              <img
                  :style="{ width: '100%', height: '100%'}"
                alt="dessert"
                :src="meetingBg"
              />

            </div>
          </template>
          <div class="meeting-card-info">
            <div class="meeting-card-info-top">
              <div class="meeting-card-info-top-title">
                <div class="meeting-card-info-top-title-name">{{item.meetingroomname}}</div>
                <div class="meeting-card-info-top-title-type">
<!--                  会议室场地类型 1.大 2.中 3.小 4.迷你-->
                  <span v-if="item.sitetype == '1' ">大型</span>
                  <span v-if="item.sitetype == '2' ">中型</span>
                  <span v-if="item.sitetype == '3' ">小型</span>
                  <span v-if="item.sitetype == '4' ">迷你</span>
                </div>
              </div>
              <div class="meeting-card-info-top-right">
                <div class="meeting-card-info-top-right-name">快来市</div>
                <div class="meeting-card-info-top-right-number">
                  <span>$</span>
                  <span style="font-size: 1.6rem;font-weight: 800">{{item.price}}</span>
                </div>
                <div class="meeting-card-info-top-right-mins"><span>30</span>mins</div>
              </div>
            </div>
            <div class="meeting-card-info-down">
              <!--              <a-button  size="large" style="background: #373534;color: #FFFFFF;" shape="round">-->
              <!--                <template #icon>-->
              <!--                  <icon-search />-->
              <!--                </template>-->
              <!--                预览-->
              <!--              </a-button>-->
              <div class="meeting-card-info-down-img">
                <img
                  style="width: 100%;"
                  alt="dessert"
                  src="@/assets/images/meeting/center/yl.png"
                  @click="webpreviewroom(item.sceneid+'')"
                />
              </div>
              <div class="meeting-card-info-down-img">
                <img
                  style="width: 100%;"
                  alt="dessert"
                  src="@/assets/images/meeting/center/bj.png"
                />
              </div>
            </div>
          </div>
        </a-card>
      </div>
    </div>
  </div>

</template>

<script lang="ts" setup>
import { computed, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useToggle } from "@vueuse/core";
import lineBg from "@/assets/images/meeting/home/line.png";
import { storeToRefs } from 'pinia';
import { useMeetingCenterStore } from "@/store";
import * as Proto from "@/proto/meeting_pb.js";
import { jsCallUE, toFsString,webpreviewroom } from "@/utils/UEmethod";
import { parseTime } from "@/utils";
import moment from "moment/moment";
import MsgId from "@/proto/msgid_pb.js";
import { useRouter } from "vue-router";
import meetingBgDefault from "@/assets/images/meeting/home/homeoffice.jpg";

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
let meetingBg = ref(meetingBgDefault);
//使用计算属性保存数据
// const meetingInfo = computed(()=>{
//   return meetingCenterStore.meetingCenterInfo;
// });


// 进行解构
const { meetingCenterInfo,meetingRoomList } = storeToRefs(meetingCenterStore);
meetingCenterInfo.value =  {"meetingCenterId":1,"meetingCenterName":"快来会议中心","createTime":"1722441600","dueTime":"1732982400","defaultMeetingRoomSceneId":2105,"ownerId":10086,"ownerName":"快来集团","ownerIcon":3}

meetingRoomList.value = {"infosList":[{"meetingRoomId":1,"meetingRoomName":"北京厅","meetingRoomScreenshots":1,"createTime":"1672567200","siteType":1,"sceneId":2101,"timeInfos":[{"meetingId":"meeting_1729592856","startTime":"1729593000","endTime":"1729602000"},{"meetingId":"meeting_1729592856","startTime":"1729593000","endTime":"1729602000"}],"seatSpeakerTotalNum":100,"seatATotalNum":30,"seatBTotalNum":40,"seatCTotalNum":50,"audienceAreaNum":100,"screenNumA":10,"screenNumB":20,"screenNumC":30,"screenNumD":40,"advertNum":10},{"meetingRoomId":2,"meetingRoomName":"上海厅","meetingRoomScreenshots":1,"createTime":"1672567200","siteType":1,"sceneId":2101,"sceneKey":1,"seatSpeakerTotalNum":100,"seatATotalNum":30,"seatBTotalNum":40,"seatCTotalNum":50,"audienceAreaNum":100,"screenNumA":10,"screenNumB":20,"screenNumC":30,"screenNumD":40,"advertNum":10}]}

let roomTypeNumber = ref(0);


// 初始化
function init(){
  getMeetingCenterInfo();
  getMeetingRoomList();


}

// 请求会议中心信息
const getMeetingCenterInfo = (data) => {
  // console.log(MsgId.C2S_GET_MEETING_CENTER_INFO_REQ,'会议信息Id');
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetMeetingCenterInfoReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求会议中心信息 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetMeetingCenterInfoReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_MEETING_CENTER_INFO_REQ,bytes);
};

// 请求会议室列表
const getMeetingRoomList = (data) => {
  // console.log(MsgId.C2S_GET_MEETING_ROOM_LIST_REQ,'会议室信息列表Id');
  // 请求会议中心信息
  let InfoReq = new Proto.default.C2SGetMeetingRoomListReq();
  InfoReq.setMeetingcenterid(2100);
  InfoReq.setMeetingcenterkey(0);
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求会议室列表 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SGetMeetingRoomListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_GET_MEETING_ROOM_LIST_REQ,bytes);
};


const goToDetails = () => {
  // 跳转详情页
  router.push({ path: '/conferenceDetails' });
}


console.log(meetingRoomList, 'meetingRoomList');

onBeforeMount(() => {
  init();
});
onMounted(() => {

});
onBeforeUnmount(() => {

});

</script>

<style scoped lang="less">
.center {
  width: 100%;
  height: 100%;
  display: flex;

  .center-header {
    width: 26%;
    height: 94%;
    margin-top: 2%;

    .center-header-info {
      width: 100%;
      padding: 10px;
      display: flex;
      flex-wrap: wrap;
      //justify-content: space-around;
      .center-header-card {
        width: 100%;
        height: 80vh;
        margin: 0 2%;

        .center-header-card-img {
          background-image: url("@/assets/images/meeting/center/bg.png");
          background-size: 100% 100%;
          overflow: hidden;
          width: 6.6rem;
          height: 2rem;
          margin: 0 auto;
          margin-top: 0.6rem;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            height: 60%;

          }
        }

        .center-header-card-msg {
          width: 100%;
          color: #FFFFFF;
          font-size: 1rem;
          margin-top: 1rem;
          height: 56vh;
          overflow: auto;
          .center-header-card-msg-top {
            width: 90%;
            padding: 0.6rem;
            margin: 0 auto;
            background-image: url("@/assets/images/meeting/center/banner.png");
            background-size: 100% 100%;
          }

          .center-header-card-msg-down {
            width: 90%;
            padding: 0.8rem 0.4rem;
            margin: 0 auto;
          }
        }
      }
    }
  }

  .container-bady {
    width: 74%;
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

        .meeting-card-info {
          width: 100%;
          //height: 10vh;
          color: #FFFFFF;
          margin-top: 2vh;
          .meeting-card-info-top {
            width: 90%;
            margin-left: 5%;
            display: flex;

            .meeting-card-info-top-title {
              width: 70%;

              .meeting-card-info-top-title-name {
                height: 2rem;
                font-size: 1.2rem;
                //font-weight: 900;
              }

              .meeting-card-info-top-title-type {
                margin-top: 0.4vh;
                font-size: 1rem;
              }
            }

            .meeting-card-info-top-right {
              width: 30%;
              text-align: right;
              .meeting-card-info-top-right-name{
                font-size: 0.8rem;
              }
              .meeting-card-info-top-right-time {
                height: 2.6rem;
                font-size: 1.2rem;
              }
              .meeting-card-info-top-right-mins{
                font-size: 0.8rem;
              }
            }
          }

          .meeting-card-info-down {
            width: 80%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            margin-top: 2vh;
            .meeting-card-info-down-img {
              width: 6rem;
              cursor: pointer;
            }
            .meeting-card-info-down-img:hover {
              border: 1px solid transparent;
            }
          }
        }
      }
    }
  }

  .container-bady::-webkit-scrollbar {
    width: 0; /* Safari 和 Chrome */
  }
}

:deep(.arco-card-body) {
  padding: 0 1rem;
}
</style>
