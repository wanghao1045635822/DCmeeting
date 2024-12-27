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
      <!--       中心介绍 -->
      <center-list v-if="isShowKey == 'center'"></center-list>
      <!--       会议列表 -->
      <meet-list v-if="isShowKey == 'meeting'"></meet-list>
      <!--       数据统计 -->
      <data-statistics v-if="isShowKey == 'dataStatistics'"></data-statistics>
    </div>


  </div>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount, onMounted, ref,getCurrentInstance, reactive  } from "vue";
import { getToken, getUserInfo, getUserResources, isLogin } from "@/utils/auth";
import bannerUrl from "@/assets/images/meeting/home/banner.png";
import topbtnUrl1 from "@/assets/images/meeting/home/topbtn1.png";
import topbtnUrl2 from "@/assets/images/meeting/home/topbtn2.png";
import titleBg from "@/assets/images/meeting/home/titleBg.png";
import   * as Proto from '@/proto/meeting_pb.js';
import MsgId from '@/proto/msgid_pb.js';
import centerList from '@/views/DCMeeting/home/components/centerList.vue'
import meetList from '@/views/DCMeeting/home/components/meetList.vue'
import dataStatistics from '@/views/DCMeeting/home/components/dataStatistics.vue'
import { jsCallUE, toFsString } from "@/utils/UEmethod";
import EventBus from "@/utils/EventBus";


let bg = ref(bannerUrl);
let topBtn1 = ref(topbtnUrl1);
let topBtn2 = ref(topbtnUrl2);
// 首页banner对象列表
const tableHeaderData = ref([
  {
    title: "会议列表",
    key: "meeting",
    width: "30%",
    active: true
  },
  {
    title: "中心介绍",
    key: "center",
    width: "10%",
    active: false
  },
  // {
  //   title: "数据统计",
  //   key: "dataStatistics",
  //   width: "30%",
  //   active: false
  // }
]);


// let ue = getCurrentInstance().appContext.config.globalProperties.ue;
let isShowKey = ref('meeting');

// let 	C2S_GET_MEETING_CENTER_INFO_REQ 	= 20207; // 会议中心信息
// let 	C2S_GET_MEETING_ROOM_LIST_REQ 	= 20211; // 请求会议室信息列表

// console.log(MsgId.C2S_GET_MEETING_CENTER_INFO_REQ,'会议信息Id');
// console.log(MsgId.C2S_GET_MEETING_ROOM_LIST_REQ,'会议室信息列表Id');


function init(){

  let InfoReq = new Proto.default.C2SGetMeetingCenterInfoReq();
  InfoReq.setMeetingcenterid(1);


// 序列化
  const bytes = InfoReq.serializeBinary();


  console.log("Serialized data:", toFsString(bytes));

  jsCallUE(2007,toFsString(bytes));

}

function changeBtnBg() {
  topBtn1.value = topBtn2.value;
}

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


onBeforeMount(async () => {
  // init();
  // 调用全局方法
  // const { proxy } = getCurrentInstance()
  // proxy.$globalFunction();

});
onMounted(()=>{
  // EventBus.on('queryMeetingCenterList',(data)=>{
  //
  // });
})
onBeforeUnmount(()=>{
  // EventBus.off('queryMeetingCenterList')
})

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
:deep(.arco-card){
  /* 设置毛玻璃背景 */
  background-color: rgba(0, 0, 0, 0.5); /* 白色背景，50% 透明度 */
  //background-color: rgba(255, 255, 255, 0.1); /* 半透明背景色 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  border-radius: 20px;
  overflow: hidden;
  border: none;
}





</style>