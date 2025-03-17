<!--
 * @description: 个人信息
 * @author: wanghao
 * @date: 2024-11-01 14:51:24·
 * @version: V1.0.0
-->
<template>
  <!--  首页-->
  <div class="container">
    <!--    导航栏-->
    <div class="container-top">
      <span>个人信息</span>
      <a-button type="primary" shape="circle" @click="closed" class="top-btn">
        <icon-close/>
      </a-button>
    </div>
    <!--    主页面-->
    <div class="container-main">
      <div class="container-main-content">
        <div class="container-main-content-left">
          <img src="@/assets/images/image1718085464.webp" alt="">
        </div>
        <div class="container-main-content-center">
          <div class="container-txt">{{useMeetingCenter.roleInfo.role_name}}</div>
          <div class="container-txt">员工ID：{{useMeetingCenter.roleInfo.role_id}}</div>
          <div class="container-txt">职位信息：UE4开发工程师</div>
        </div>
        <div class="container-main-content-right">
          <div class="container-txt" style="visibility: hidden;"></div>
          <div class="container-txt">电子邮箱：{{useMeetingCenter.roleInfo.session_id}}@163.com</div>
          <div class="container-txt">联系电话：{{useMeetingCenter.roleInfo.session_id}}</div>
        </div>
      </div>
      <div class="container-main-bottom">
        <div class="container-main-bottom-content">
          <div class="container-main-bottom-content-left">
            <div class="container-main-bottom-content-center-text">员工信息：</div>
          </div>
          <div class="container-main-bottom-content-center">
            <div class="container-main-bottom-content-center-text">公司名称：<span
                class="center-text-color">{{'新快来集团'}}</span></div>
            <div class="container-main-bottom-content-center-text">所属部门：<span
                class="center-text-color">技术部</span></div>
            <div class="container-main-bottom-content-center-text">小组：<span class="center-text-color">技术组</span>
            </div>
            <div class="container-main-bottom-content-center-text">入职时间：<span
                class="center-text-color">2022.9.22</span></div>
            <div class="container-main-bottom-content-center-text">合同年限：<span class="center-text-color">3年</span>
            </div>
          </div>
          <div class="container-main-bottom-content-right">
            <div class="container-main-bottom-content-center-text">上级领导：<span
                class="center-text-color">新快来</span></div>
            <div class="container-main-bottom-content-center-text">职位名称：<span
                class="center-text-color">前端工程师</span></div>
            <div class="container-main-bottom-content-center-text">职位级别：<span class="center-text-color">P8</span>
            </div>
            <div class="container-main-bottom-content-center-text">到期时间:：<span
                class="center-text-color">2025.09.21</span></div>
            <div class="container-main-bottom-content-center-text">工作状态：<span class="center-text-color">在职</span>
            </div>
          </div>
        </div>
        <div class="container-main-bottom-content">
          <div class="container-main-bottom-content-left">
            <div class="container-main-bottom-content-center-text">休假信息：</div>
          </div>
          <div class="container-main-bottom-content-center">
            <div class="container-main-bottom-content-center-text">调休：<span class="center-text-color">5天</span></div>
            <div class="container-main-bottom-content-center-text">年假：<span class="center-text-color">15天</span>
            </div>
            <div class="container-main-bottom-content-center-text">产护假：<span class="center-text-color">15天</span>
            </div>
          </div>
          <div class="container-main-bottom-content-right">
            <div class="container-main-bottom-content-center-text">事假：<span class="center-text-color">3天</span></div>
            <div class="container-main-bottom-content-center-text">病假：<span class="center-text-color">1天</span></div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onMounted, ref, getCurrentInstance, reactive, watch} from "vue";
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
import {useMeetingCenterStore} from "@/store";

const useMeetingCenter = useMeetingCenterStore();


function init() {
  // 获取用户信息
  webgetaccountinfo();

}

// 关闭UE窗口
function closed() {
  webcloseui();
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
  //overflow: hidden;
  border: none;
  width: 800px;
  height: 600px;
  //水平垂直居中
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  .container-top {
    width: 92%;
    margin-left: 4%;
    height: 8vh;
    text-align: center;
    line-height: 8vh;
    font-size: 1.6rem;
    color: #FFFFFF;
    border-bottom: 1px solid #FFFFFF;

    .top-btn {
      width: 2vw;
      height: 2vw;
      font-size: 1.6rem;
      background-color: #bab7b7;
      position: absolute;
      right: 1vw;
      top: 1vh;
      cursor: pointer;
    }
  }

  .container-main {
    width: 100%;
    margin-top: 2vh;
    height: 48vh;
    overflow: hidden;

    .container-main-content {
      width: 100%;
      height: 10vh;
      display: flex;
      justify-content: flex-start;

      .container-main-content-left {
        width: 10vw;
        height: 100%;
        display: flex;
        justify-content:center;
        align-items: center;

        img {
          //width: 100%;
          height: 100%;
        }
      }

      .container-main-content-center {
        width: 20vw;
        margin-left: 2vw;
        //margin-top: 1vh;
        //background-color: #4b89ff;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .container-main-content-right {
        width: 30vw;
        margin-left: 2vw;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .container-txt {
        color: #FFFFFF;
        font-size: 1rem;
        padding: 0.4vh 0;
      }
    }

    .container-main-bottom {
      width: 100%;
      margin-top: 4vh;

      .container-main-bottom-content {
        width: 100%;
        display: flex;
        justify-content: flex-start;
        margin-top: 2vh;

        .container-main-bottom-content-left {
          width: 15%;
          display: flex;
          justify-content: flex-end;
        }

        .container-main-bottom-content-center {
          margin-left: 2vw;
          width: 30%;
        }

        .container-main-bottom-content-right {
          margin-left: 2.4vw;
          width: 35%;
        }
      }

      .container-main-bottom-content-center-text {
        color: #FFFFFF;
        font-size: 1rem;
        padding: 0.4vh 0;
      }
    }

  }

  .center-text-color {
    color: #118bd6;
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
</style>