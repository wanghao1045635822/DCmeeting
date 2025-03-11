<!--
 * @description: 公司列表
 * @author: wanghao
 * @date: 2024-11-01 14:51:24·
 * @version: V1.0.0
-->
<template>
  <!--  首页-->
  <div class="container">
    <!--    导航栏-->
    <div class="container-top">
      <span >办公室切换</span>
      <a-button type="primary" shape="circle" @click="closed" class="top-btn">
        <icon-close/>
      </a-button>
    </div>
    <!--    主页面-->
    <div class="container-main">
      <div class="container-main-content">
        <a-card hoverable class="meeting-card"
                v-for="(item) in getRoomList"
                :key="item.key"
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
          <div style="width: 100%;display: flex;justify-content: space-between;color: #FFFFFF;margin-top: 2vh;">
            <div>
              <div style="font-size: 1.2rem;">{{ item.name }}</div>
              <div style="font-size: 1rem;padding: 1.6vh 0;">人数：99人</div>
            </div>
            <div style="font-size: 1.8rem;color: #FFFFFF;">
              <a-button type="primary" :size="'small'"  @click="closed" class="top-btn" style="margin-top: 3vh">
                进入
              </a-button>
            </div>
          </div>
        </a-card>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onMounted, ref, getCurrentInstance, reactive} from "vue";
import {getToken, getUserInfo, getUserResources, isLogin} from "@/utils/auth";
import closedUrl from "@/assets/images/meeting/home/topbtn1.png";
import titleBg from "@/assets/images/meeting/home/titleBg.png";
import * as Proto from '@/proto/meeting_pb.js';
import MsgId from '@/proto/msgid_pb.js';
import centerList from '@/views/DCMeeting/home/components/centerList.vue'
import meetList from '@/views/DCMeeting/home/components/meetList.vue'
import dataStatistics from '@/views/DCMeeting/home/components/dataStatistics.vue'
import {jsCallUE, toFsString, webcloseui, webgetaccountinfo, webpreviewroom} from "@/utils/UEmethod";
import EventBus from "@/utils/EventBus";
import cloneDeep from "lodash/cloneDeep";
import meetingBgDefault from "@/assets/images/meeting/home/homeoffice.jpg";
import {area} from "./interface"
let meetingBg = ref(meetingBgDefault);
const getRoomList = reactive([{
  key: "1",
  name: "演讲者",
  num: 23000,
  getType: "邀请"
}, {
  key: "2",
  name: "专家席",
  num: 25000,
  getType: "邀请"
}, {
  key: "3",
  name: "贵宾席",
  num: 22000,
  getType: "申请（2000快币）"
}, {
  key: "4",
  name: "普通席",
  num: 17000,
  getType: "购票（500快币）"
}, {
  key: "5",
  name: "观众席",
  num: 27000,
  getType: "免费"
}]);


function init() {
  // 获取用户信息
  // webgetaccountinfo();
  console.log(area({
    name: '王浩',
    width: 1200,
    height: 800,
    color: '#ffffff',
  }));
}

// 关闭UE窗口
function closed() {
  // webcloseui();
}


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
})
onBeforeUnmount(() => {
  // EventBus.off('queryMeetingCenterList')
})

</script>

<style scoped lang="less">
.container {
  /* 设置毛玻璃背景 */
  background-color: rgba(0, 0, 0, 0.5); /* 白色背景，50% 透明度 */
  //background-color: rgba(255, 255, 255, 0.2); /* 半透明背景色 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  //border-radius: 2rem;
  overflow: hidden;
  border: none;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;

  .container-top {
    width: 92%;
    margin-left: 4%;
    height: 10vh;
    text-align: center;
    line-height: 10vh;
    font-size: 2rem;
    color: #FFFFFF;
    border-bottom: 1px solid #FFFFFF;

    .top-btn {
      width: 3vw;
      height: 3vw;
      font-size: 1.6rem;
      background-color: #bab7b7;
      position: absolute;
      right: 2vw;
      top: 2vh;
      cursor: pointer;
    }
  }

  .container-main {
    width: 100%;
    margin-top: 2vh;
    height: 80vh;
    overflow-y: auto;
    .container-main-content{
        width: 100%;
        padding: 10px;
        display: flex;
        flex-wrap: wrap;
        //justify-content: space-around;
        .meeting-card {
          width: 29%;
          height: 38vh;
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
  //修改表格背景
  :deep(.arco-table-th) {
    /* 设置半透明背景 */
    background-color: rgba(0, 0, 0, 0.2); /* 白色背景，50% 透明度 */
    //border-radius: 20px;
    overflow: hidden;
    //border: none;
    color: #FFFFFF;

  }

  :deep(.arco-table-td) {
    background: transparent;
    color: #FFFFFF;
  }

  :deep(.arco-table-border .arco-table-tr .arco-table-th){
    border-color: #A59D9DFF;
  }
  :deep(.arco-table-border .arco-table-tr .arco-table-td){
    border-color: #A59D9DFF;
  }
  :deep(.arco-table-border .arco-table-container){
    border-color: #A59D9DFF;
  }
  :deep(.arco-table-th){
    border-color: #A59D9DFF;
  }
  :deep(.arco-table .arco-table-cell){
    padding: 2vh 16px;
  }
  :deep(.arco-btn-text:hover, .arco-btn-text[type='button']:hover, .arco-btn-text[type='submit']:hover){
    background-color: rgba(0, 0, 0, 0.2); /* 白色背景，50% 透明度 */
  }
}
:deep(.arco-card) {
  /* 设置毛玻璃背景 */
  //background-color: rgba(0, 0, 0, 0.2); /* 白色背景，50% 透明度 */
  background-color: rgba(255, 255, 255, 0.1); /* 半透明背景色 */
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
:deep(.arco-btn-text, .arco-btn-text[type='button'], .arco-btn-text[type='submit']) {
  background-color: #8c8c8c;
}

:deep(.arco-btn-text:hover, .arco-btn-text[type='button'], .arco-btn-text[type='submit']) {
  background-color: #4e4b4b;
}

:deep(.arco-btn-primary, .arco-btn-primary[type='button'], .arco-btn-primary[type='submit']) {
  background-color: #8c8c8c;
}

:deep(.arco-btn-primary:hover, .arco-btn-primary[type='button'], .arco-btn-primary[type='submit']) {
  background-color: #4e4b4b;
}
</style>