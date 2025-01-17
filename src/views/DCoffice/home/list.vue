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
      <span >公司列表</span>
      <a-button type="primary" shape="circle" @click="closed" class="top-btn">
        <icon-close/>
      </a-button>
    </div>
    <!--    主页面-->
    <div class="container-main">
      <div class="container-main-content">
        <div class="container-main-content-left">
          <a-table :columns="columns"
                   :data="data"
                   class="transparent-table"
                   column-resizable
                   :bordered="{cell:true}"
                   :pagination="false"
                   :hoverable="false"
          >
            <!--          按钮-->
            <template #action="{ record, rowIndex }">
              <a-button type="text" style="color: #FFFFFF">
                邀请
              </a-button>
            </template>
          </a-table>
        </div>
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
import {jsCallUE, toFsString, webcloseui, webgetaccountinfo} from "@/utils/UEmethod";
import EventBus from "@/utils/EventBus";

const columns = reactive([
  {
    title: "坐席",
    dataIndex: "name",
    // width: 150,
    // minWidth: 100,
    align: "center"
  },
  {
    title: "获取方式",
    dataIndex: "getType",
    // width: 120,
    // minWidth: 80,
    align: "center"
  },
  {
    title: "销售",
    dataIndex: "num",
    // width: 300,
    align: "center"
  },
  {
    title: "操作",
    dataIndex: "action",
    slotName: "action",
    align: "center",
    width: 100,
    minWidth: 100
  }
]);

const data = reactive([{
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
  border-radius: 2rem;
  overflow: hidden;
  border: none;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;

  .container-top {
    width: 92%;
    margin-left: 4%;
    height: 12vh;
    text-align: center;
    line-height: 12vh;
    font-size: 2.6rem;
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
    overflow: hidden;
    .container-main-content{
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      .container-main-content-left{
        width: 80vw;
        height: 100%;
        .transparent-table{

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
</style>