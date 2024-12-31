<template>
  <a-spin class="meeting-picture" :loading="meetingCenterStore.loading" tip="上传中......">
    <!--      定义自定义请求-->
    <!--       :custom-request="customRequest"-->
    <!--    <a-spin :loading="meetingCenterStore.loading" tip="上传中">-->
    <div
        style="
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: auto;
      cursor: pointer;
     "
        @click="uploadFile(0)"
    >
      <img src="@/assets/images/meeting/meeting/application/upImg.png" alt="">
      <div style="margin-top: 1vh;color: #4c4c4c;">添加会议封面</div>
    </div>
    <!--    </a-spin>-->
    <div v-if="meetingCenterStore.coverImage" class="showImg">
      <img id="myMmage" style="  max-width: 100%; /* 确保图片不会超出容器宽度 */height: auto;/* 保持图片的宽高比 */"
           :src="meetingCenterStore.coverImage" alt="Example Image"/>
      <div class="btnList">
        <div class="next-btn" @click="deletImg">删除</div>
        <div class="prve-btn" @click="uploadFile(0)">重新上传</div>
      </div>
    </div>
  </a-spin>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import type {
  FileItem,
  RequestOption
} from "@arco-design/web-vue/es/upload/interfaces";
import {useMeetingCenterStore, useUserStore} from "@/store";
import {userUploadApi} from "@/api/user-center";
import type {DescData} from "@arco-design/web-vue/es/descriptions/interface";
import {webuploadfile} from "@/utils/UEmethod";
import message from "@arco-design/web-vue/es/message";

let meetingCenterStore = useMeetingCenterStore();

const userStore = useUserStore();
const fileList = ref([]);
// const loading = ref(false);


meetingCenterStore.$subscribe((mutation, state) => {
  console.log("mutation", mutation);
  console.log("state", state);
  if (mutation.storeId == "useMeetingCenterStore" && mutation.events.key == "coverImage") {
    console.log("coverImage changed:", state.coverImage);
    fileList.value = [state.coverImage];


  }

});


const uploadChange = (fileItemList: FileItem[], fileItem: FileItem) => {
  fileList.value = [fileItem];
};

const deletImg = () => {
  fileList.value = [];
  meetingCenterStore.coverImage = '';
};

const uploadFile = (type) => {
  webuploadfile(type);
};


defineExpose({
  deletImg,
  fileList
});


</script>

<style scoped lang="less">
.arco-card {
  padding: 14px 0 4px 4px;
  border-radius: 4px;
  background-color: transparent !important;
}

:deep(.arco-avatar-trigger-icon-button) {
  width: 32px;
  height: 32px;
  line-height: 32px;
  //background-color: #e8f3ff;
  .arco-icon-camera {
    margin-top: 8px;
    color: rgb(var(--arcoblue-6));
    font-size: 14px;
  }
}

.meeting-picture {
  width: 100%;
  height: 100%;
  //background: #4b89ff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .showImg {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center; /* 水平居中 */
    align-items: center; /* 垂直居中 */
    overflow: hidden;
  }

  .btnList {
    position: absolute;
    right: 0;
    bottom: 0;

    .next-btn, .prve-btn {
      width: 5rem;
      height: 2rem;
      //background-color: #8c8c8c;
      float: right;
      background-image: url("@/assets/images/meeting/meeting/application/next-btn.png");
      background-size: 100% 100%;
      text-align: center;
      line-height: 2rem;
      color: #FFFFFF;
      cursor: pointer;
      font-size: 0.6rem;
      margin-right: 1vw;
      margin-bottom: 1vh;
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
</style>
