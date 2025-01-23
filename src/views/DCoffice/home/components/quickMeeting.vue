<template>
  <div ref="refModal" class="container">
    <a-modal
        v-model:visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        :hide-title="false"
        :mask-closable="true"
        :fullscreen="false"
        :footer="false"
        width="60vw"
        :render-to-body="false"
    >
      <template #title>
        <div class="title">EXPRESS CONFERENCE</div>
      </template>
      <div class="header">
        <a-input v-model="meetingform.meetingNumber" class="meetingNumber" placeholder="请输入会议号"
                 :max-length="100"/>
      </div>
      <div class="Employee">
        <img src="@/assets/images/office/user.png" alt="" style="width: 12%;">
      </div>
      <div class="body">
        <span>
          <a-button type="primary" shape="circle">
            <template #icon>
              <img src="@/assets/images/office/sx.png" alt="">
            </template>
          </a-button>
          <a-button type="text" shape="circle" style="margin-left: 1vw;">
            <template #icon>
              <img src="@/assets/images/office/yy.png" alt="">
            </template>
          </a-button>
        </span>
        <a-button type="primary">
          复制邀请信息
        </a-button>
        <a-button type="primary">
          添加参会人
        </a-button>
        <a-button type="primary">
          进入会议
        </a-button>
      </div>
      <!--      <div class="footer">-->
      <!--        <a-button type="primary" shape="round" class="custom-button" @click="handleSubmit">确认申请</a-button>-->
      <!--      </div>-->
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import {ref, reactive, watch, onBeforeMount, onMounted, onBeforeUnmount, inject} from "vue";
import {jsCallUE} from "@/utils/UEmethod";
import MsgId from "@/proto/msgid_pb.js";
import {useMeetingCenterStore} from "@/store";
import {useRouter} from "vue-router";
import {parseTime} from "@/utils";
import message from "@arco-design/web-vue/es/message";
import {Message} from "@arco-design/web-vue";
import {Organization} from "@/api/authority";

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

let meetingform = ref<Organization>({
  meetingNumber: "",// 会议号
});

const visible = ref(false);

const handleClick = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};

// 确认提交
function handleSubmit() {


}

function init() {

}

defineExpose({visible});

onBeforeMount(() => {
  init()
});
onMounted(() => {

});
onBeforeUnmount(() => {

});
</script>

<style scoped lang="less">
.container {
  .title {
    color: #FFFFFF;
    font-size: 1.6rem;
    font-weight: 900;
  }

  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    .meetingNumber {
      width: 60%;
      height: 3rem;
      border-radius: 1.8rem;
    }
  }

  .Employee {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 26vh;
  }

  .body {
    width: 80%;
    height: 6vh;
    margin-left: 10%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    margin-top: 3vh;
  }
}


:deep(.arco-modal) {
  /* 设置毛玻璃背景 */
  background-color: rgba(250, 250, 250, 0.3); /* 白色背景，50% 透明度 */
  //background-color: rgba(0, 0, 0, 0.1); /* 白色背景，50% 透明度 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  border-radius: 20px;
  overflow: hidden;
  border: none;
}

:deep(.arco-modal-mask) {
  /* 设置毛玻璃背景 */
  //background-color: rgba(0, 0, 0, 0.1); /* 白色背景，50% 透明度 */
  //background-color: rgba(255, 255, 255, 0.5); /* 半透明背景色 */
  //backdrop-filter: blur(10px); /* 毛玻璃效果 */
  //-webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
}

.custom-button {
  font-size: 1rem;
  padding: 0.5rem 1.4rem;
  background-color: #ca9157; /* 自定义背景颜色 */
  //border-color: #9F866B; /* 自定义边框颜色 */
  color: #614B33; /* 自定义文字颜色 */
}

.custom-button:hover {
  background-color: #c88040; /* 鼠标悬停时的背景颜色 */
  //border-color: #9F866B; /* 鼠标悬停时的边框颜色 */
  color: #614B33; /* 自定义文字颜色 */
}

.custom-button:active {
  background-color: #D7C3AB; /* 鼠标悬停时的背景颜色 */
  //border-color: #D7C3AB; /* 鼠标悬停时的边框颜色 */
  color: #614B33; /* 自定义文字颜色 */
  border: 1px solid transparent;
}


:deep(.arco-input-wrapper) {
  background-color: rgba(0, 0, 0, 0.5);
  color: #cccccc;
}

:deep(.arco-textarea-wrapper) {
  background-color: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
}

:deep(.arco-select-view-single) {
  background-color: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
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
