<template>
  <div class="container-today">
    <div class="container-rt">
      <div class="meeting-time">
        <div class="meeting-time-title">
          <div class="title-text">
            <div class="title-text-top-Num">{{ startDate }} - {{ endDate }}</div>
            <div class="title-text-top-time">{{ startTime }} - {{ endTime }}</div>
          </div>
        </div>
      </div>
      <div class="meeting-time-list">

      </div>
    </div>
    <div class="container-lf">
      <div class="gaiyao">
        <div class="gaiyao-title">
          <div class="title-text-top">从NFT迈向元宇宙</div>
          <div class="title-text">METAVERSE</div>
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
          <div class="meetingInfo-list-right-btn">
            <a-button v-if="meetingType == 1" type="primary" shape="round" class="custom-button" @click="enterMeeting">
              进入
            </a-button>
            <a-button v-if="meetingType == 0" type="primary" shape="round" class="custom-button">未开启</a-button>
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
          <div class="meetingInfo-list-right-btn">
            <!--            <a-button type="primary" shape="round" class="custom-button" @click="invitationFriend.visible = true">邀请</a-button>-->
            <!--            <a-button type="primary" shape="round" class="custom-button">审核</a-button>-->
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
            <!--            <div class="meetingInfo-list-right-img">-->
            <!--              <img src="@/assets/images/meeting/conferenceDetails/icon.png" alt="">-->
            <!--              <div class="meetingInfo-list-right-img-title">Ning Li</div>-->
            <!--            </div>-->
            <!--            <div class="meetingInfo-list-right-img">-->
            <!--              <img src="@/assets/images/meeting/conferenceDetails/icon.png" alt="">-->
            <!--              <div class="meetingInfo-list-right-img-title">Ning Li</div>-->
            <!--            </div>-->
          </div>
          <div class="meetingInfo-list-right-btn">
            <!--            <a-button type="primary" shape="round" class="custom-button">邀请</a-button>-->
            <!--            <a-button type="primary" shape="round" class="custom-button">审核</a-button>-->
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
    <invitation ref="invitationFriend"></invitation>
  </div>

</template>

<script lang="ts" setup>
import { inject, onBeforeMount, onBeforeUnmount, onMounted, reactive, ref } from "vue";
import { useToggle } from "@vueuse/core";
import { useMeetingCenterStore } from "@/store";
import { parseTime } from "@/utils";
import invitation from "@/views/DCMeeting/conferenceDetails/components/invitation.vue";
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

const invitationFriend = ref(null);
let meetingCenterStore = useMeetingCenterStore();
let meetingInfo = reactive(meetingCenterStore.meetingInfo);

let startDate = parseTime(meetingInfo.starttime * 1000, "{y}/{m}/{d}");
let endDate = parseTime(meetingInfo.endtime * 1000, "{y}/{m}/{d}");
let startTime = parseTime(meetingInfo.starttime * 1000, "{hh}:{ii}");
let endTime = parseTime(meetingInfo.endtime * 1000, "{hh}:{ii}");


const enterMeeting = inject("enterMeeting");



onBeforeMount(() => {

});
onMounted(() => {
  console.log("会议详情信息", JSON.stringify(meetingCenterStore.meetingInfo));
});
onBeforeUnmount(() => {

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
    background-image: url("@/assets/images/meeting/conferenceDetails/bgRight.png");
    background-size: 100% 100%;

    .gaiyao {
      width: 96%;
      margin-left: 2%;
      height: 20vh;
      position: relative;

      .gaiyao-title {
        position: absolute;
        left: 0;
        bottom: 1vh;
        color: #E6DCD1;

        .title-text-top {
          font-weight: 900;
          font-size: 1.6rem;
          font-family: 'Adobe Heiti Std R';
        }

        .title-text {
          font-weight: 900;
          font-size: 4rem;
          font-family: 'Fontquan-XinYilogoTi-Regular';
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
          margin-left: 4%;
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
            width: 20%;
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
      border-radius: 20px;
      background-image: url("@/assets/images/meeting/conferenceDetails/bgLeft.png");
      background-size: 100% 100%;

      .meeting-time-list-item {
        width: 92%;
        margin-top: 2vh;
        margin-left: 4%;
        height: 12vh;
        display: flex;

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
          }

          .meeting-time-list-item-left-down {
            .meeting-time-list-item-left-down-select {
              margin-left: 30%;
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
  }
}

.container-today::-webkit-scrollbar {
  width: 0; /* Safari 和 Chrome */
}

.meetingInfo-list-right-btn {
  width: 28%;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.custom-button {
  height: 2rem;
  font-size: 0.8rem;
  padding: 0.5rem 1.4rem;
  background-color: #505050; /* 自定义背景颜色 */
  border-color: #505050; /* 自定义边框颜色 */
  color: #cccccc; /* 自定义文字颜色 */
}

.custom-button:hover {
  background-color: #505050; /* 鼠标悬停时的背景颜色 */
  border-color: #505050; /* 鼠标悬停时的边框颜色 */
}

.custom-button:active {
  background-color: #605c5c; /* 鼠标悬停时的背景颜色 */
  border-color: #605c5c; /* 鼠标悬停时的边框颜色 */
}
</style>
