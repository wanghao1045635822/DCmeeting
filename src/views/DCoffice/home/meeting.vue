<!--
 * @description: 会议首页
 * @author: wanghao
 * @date: 2024-11-01 14:51:24·
 * @version: V1.0.0
-->
<template>
  <!--  首页-->
  <div class="container">
    <a-button type="primary" shape="circle" @click="closed" class="top-btn">
      <icon-close/>
    </a-button>
    <!--    主页面-->
    <div class="container-main">
      <div class="container-main-content">
        <div class="container-main-content-left">
          <div class="container-main-content-left-main"  @click="joinMeetingFun">
            <div class="container-main-content-left-img">
              <img src="@/assets/images/office/jiaru.png" alt="">
            </div>
            <div class="container-text">加入会议</div>
          </div>
          <div class="container-main-content-left-main">
            <div class="container-main-content-left-img">
              <img src="@/assets/images/office/kuaishu.png" alt="">
            </div>
            <div class="container-text">快速会议</div>
          </div>
          <div class="container-main-content-left-main">
            <div class="container-main-content-left-img">
              <img src="@/assets/images/office/yuding.png" alt="">
            </div>
            <div class="container-text">预约会议</div>
          </div>
        </div>
        <div class="container-right">
          <div class="container-right-title">会议列表</div>
          <div class="container-right-main">
            <div class="container-right-main-content">
              <div class="container-right-main-content-today">{{year}}年{{month}}月{{day}}日 今天</div>
              <div class="container-right-main-content-list">
                <div class="container-right-main-content-list-div">
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-title">王浩预约的会议</div>
                    <div class="container-right-main-btn">
                      <a-button type="text" size="mini">会议详情</a-button>
                      <a-button type="text" size="mini">删除</a-button>
                      <a-button type="primary" size="mini">入会</a-button>
                    </div>
                  </div>
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-down-title">会议时间：15:30-16:00</div>
                    <div class="container-right-main-down-title" style="margin-left: 2%">
                      会议号：
                      <a-tooltip :content="'复制会议号'">
                        <span type="text" class="container-right-main-down-hao">210 517 105</span>
                      </a-tooltip>
                    </div>
                  </div>
                </div>
                <div class="container-right-main-content-list-div">
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-title">王浩预约的会议</div>
                    <div class="container-right-main-btn">
                      <a-button type="text" size="mini">会议详情</a-button>
                      <a-button type="text" size="mini">删除</a-button>
                      <a-button type="primary" size="mini">入会</a-button>
                    </div>
                  </div>
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-down-title">会议时间：15:30-16:00</div>
                    <div class="container-right-main-down-title" style="margin-left: 2%">
                      会议号：
                      <a-tooltip :content="'复制会议号'">
                        <span type="text" class="container-right-main-down-hao">210 517 105</span>
                      </a-tooltip>
                    </div>
                  </div>
                </div>
                <div class="container-right-main-content-list-div">
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-title">王浩预约的会议</div>
                    <div class="container-right-main-btn">
                      <a-button type="text" size="mini">会议详情</a-button>
                      <a-button type="text" size="mini">删除</a-button>
                      <a-button type="primary" size="mini">入会</a-button>
                    </div>
                  </div>
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-down-title">会议时间：15:30-16:00</div>
                    <div class="container-right-main-down-title" style="margin-left: 2%">
                      会议号：
                      <a-tooltip :content="'复制会议号'">
                        <span type="text" class="container-right-main-down-hao">210 517 105</span>
                      </a-tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container-right-main-content">
              <div class="container-right-main-content-today">{{year}}年{{month}}月{{day}}日 今天</div>
              <div class="container-right-main-content-list">
                <div class="container-right-main-content-list-div">
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-title">王浩预约的会议</div>
                    <div class="container-right-main-btn">
                      <a-button type="text" size="mini">会议详情</a-button>
                      <a-button type="text" size="mini">删除</a-button>
                      <a-button type="primary" size="mini">入会</a-button>
                    </div>
                  </div>
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-down-title">会议时间：15:30-16:00</div>
                    <div class="container-right-main-down-title" style="margin-left: 2%">
                      会议号：
                      <a-tooltip :content="'复制会议号'">
                        <span type="text" class="container-right-main-down-hao">210 517 105</span>
                      </a-tooltip>
                    </div>
                  </div>
                </div>
                <div class="container-right-main-content-list-div">
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-title">王浩预约的会议</div>
                    <div class="container-right-main-btn">
                      <a-button type="text" size="mini">会议详情</a-button>
                      <a-button type="text" size="mini">删除</a-button>
                      <a-button type="primary" size="mini">入会</a-button>
                    </div>
                  </div>
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-down-title">会议时间：15:30-16:00</div>
                    <div class="container-right-main-down-title" style="margin-left: 2%">
                      会议号：
                      <a-tooltip :content="'复制会议号'">
                        <span type="text" class="container-right-main-down-hao">210 517 105</span>
                      </a-tooltip>
                    </div>
                  </div>
                </div>
                <div class="container-right-main-content-list-div">
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-title">王浩预约的会议</div>
                    <div class="container-right-main-btn">
                      <a-button type="text" size="mini">会议详情</a-button>
                      <a-button type="text" size="mini">删除</a-button>
                      <a-button type="primary" size="mini">入会</a-button>
                    </div>
                  </div>
                  <div class="container-right-main-content-list-div-top">
                    <div class="container-right-main-down-title">会议时间：15:30-16:00</div>
                    <div class="container-right-main-down-title" style="margin-left: 2%">
                      会议号：
                      <a-tooltip :content="'复制会议号'">
                        <span type="text" class="container-right-main-down-hao">210 517 105</span>
                      </a-tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <joinMeeting ref="joinMeetingRef"></joinMeeting>
  </div>
</template>

<script setup lang="ts">
import {onBeforeMount, onBeforeUnmount, onMounted, ref, getCurrentInstance, reactive} from "vue";
import {getToken, getUserInfo, getUserResources, isLogin} from "@/utils/auth";
import closedUrl from "@/assets/images/meeting/home/topbtn1.png";
import titleBg from "@/assets/images/meeting/home/titleBg.png";
import * as Proto from '@/proto/meeting_pb.js';
import MsgId from '@/proto/msgid_pb.js';
import joinMeeting from '@/views/DCoffice/home/components/joinMeeting.vue'
import {jsCallUE, toFsString, webcloseui, webgetaccountinfo} from "@/utils/UEmethod";
import EventBus from "@/utils/EventBus";

const now = new Date();
const year = now.getFullYear();
const month = now.getMonth() + 1; // 月份从0开始，需要加1
const day = now.getDate();
const joinMeetingRef = ref(null);


function init() {
  // 获取用户信息
  // webgetaccountinfo();

}

// 关闭UE窗口
function closed() {
  // webcloseui();
}


function joinMeetingFun(){
  // 跳转到加入会议弹窗页面
  joinMeetingRef.value.visible = true
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
  //background-color: rgba(0, 0, 0, 0.5); /* 白色背景，50% 透明度 */
  background-color: rgba(255, 255, 255, 0.2); /* 半透明背景色 */
  //backdrop-filter: blur(10px); /* 毛玻璃效果 */
  //-webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  border-radius: 2rem;
  overflow: hidden;
  border: none;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 0;
  color: #FFFFFF;
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

  .container-main {
    width: 100%;
    //margin-top: 2vh;
    height: 100vh;
    overflow: hidden;

    .container-main-content {
      width: 100%;
      height: 100%;
      display: flex;
      .container-main-content-left {
        width: 40vw;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5); /* 白色背景，50% 透明度 */
        display: flex;
        justify-content: space-evenly;
        padding-top: 10vh;
        .container-main-content-left-main{
          cursor: pointer;
          height: 12vh;
          position: relative;
          .container-main-content-left-img{
            background-color: #0471FF;
            border-radius: 1vw;
            width: 6vw;
            height: 6vw;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
              width: 50%;
              height: 50%;
            }
          }
          .container-main-content-left-img:hover{
            background-color: #0471FF;
            border: 10px solid #0471FF;
            margin-top: -2px;
          }
          .container-text{
            width: 100%;
            font-size: 1.2rem;
            text-align: center;
            position: absolute;
            bottom: 0;
          }
        }
      }
      .container-right {
        width: 60vw;
        height: 100%;
        .container-right-title{
          width: 100%;
          height: 10vh;
          text-align: center;
          line-height: 10vh;
          font-size: 2rem;
        }
        .container-right-main{
          //margin-top: 2vh;
          width: 100%;
          padding: 4vh;
          .container-right-main-content{
            width: 100%;
            height: 40vh;
            //background-color: #4b89ff;
            .container-right-main-content-today{
              width: 100%;
              //height: 4vh;
              //line-height: 4vh;
              font-size: 1.2rem;
              //padding-left: 2%;
            }
            .container-right-main-content-list{
              width: 100%;
              padding-top: 2vh;
              .container-right-main-content-list-div{
                width: 90%;
                height: 10vh;
                margin-left: 5%;
                background-color: rgba(0, 0, 0, 0.5); /* 白色背景，50% 透明度 */
                border-radius: 10px;
                margin-bottom: 2vh;
                .container-right-main-content-list-div-top{
                  width: 100%;
                  height: 50%;
                  display: flex;
                  padding-left: 2%;
                  .container-right-main-title{
                    width: 60%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    font-size: 1.2rem;
                  }
                  .container-right-main-btn{
                    width: 40%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;

                  }
                  .container-right-main-down-title{
                    font-size: 1rem;
                    height: 80%;
                    display: flex;
                    align-items: center;
                  }
                  .container-right-main-down-hao{
                    cursor: pointer;
                  }
                  .container-right-main-down-hao:hover{
                    background-color: #605c5c;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
:deep(.arco-btn-text, .arco-btn-text[type='button'], .arco-btn-text[type='submit']){
  color: #FFFFFF;
}
</style>