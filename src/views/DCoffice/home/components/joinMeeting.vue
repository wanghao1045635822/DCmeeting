<template>
  <div ref="refModal">
    <a-modal
        v-model:visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        :hide-title="false"
        :mask-closable="true"
        :footer="false"
        width="80vw"
        :render-to-body="false"
    >
      <template #title>
        <div class="title">EXPRESS CONFERENCE</div>
      </template>
      <div class="header">

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

const router = useRouter();
let meetingCenterStore = useMeetingCenterStore();
let sharedMeetingMethod = inject("sharedMeetingMethod");
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
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px
}

.refModal-body {
  margin-top: 2vh;
}

.title {
  color: #FFFFFF;
  font-size: 1.6rem;
  font-weight: 900;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 3vh;
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
</style>
