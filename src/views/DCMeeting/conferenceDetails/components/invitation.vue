<template>
  <div ref="refModal">
    <a-modal
      v-model:visible="visible"
      @ok="handleOk"
      @cancel="handleCancel"
      :hide-title="true"
      :mask-closable="true"
      :footer="false"
      width="30vw"
      :render-to-body="false"
    >
      <div class="header">
        <div class="title">好友列表</div>
      </div>
      <div class="refModal-body">

      </div>
      <div class="footer">
        <!--        <a-button type="primary" shape="round" class="custom-button">确认申请</a-button>-->
      </div>
    </a-modal>
  </div>
</template>

<script lang="ts" setup>
import { ref, reactive, watch, onBeforeMount,onMounted,onBeforeUnmount,defineExpose } from "vue";
import { useFriendStore } from "@/store";
import * as Proto from "@/proto/friend_pb.js";
import { jsCallUE, toFsString } from "@/utils/UEmethod";
import { storeToRefs } from "pinia";
import MsgId from "@/proto/msgid_pb.js";

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
const friendStore = useFriendStore();
const visible = ref(false);

const show = () => {
  visible.value = true;
};
const handleOk = () => {
  visible.value = false;
};
const handleCancel = () => {
  visible.value = false;
};
let form = reactive({
  name: "",
  post: "",
  section: "1",
  isRead: false
});
const handleSubmit = (data) => {
  console.log(data);
};

// 初始化
function init() {
  getMsgFriendList();

}

// 请求获取好友列表
const getMsgFriendList = (data) => {
  // console.log(MsgId.C2S_FRIEND_LIST_REQ,'会议列表Id');
  // 请求好友信息
  let InfoReq = new Proto.default.C2SFriendListReq();
  // 序列化
  const bytes = InfoReq.serializeBinary();

  console.log("请求好友列表 data:", bytes);

  // 反序列化
  const userDeserialized = Proto.default.C2SFriendListReq.deserializeBinary(bytes);
  console.log("Deserialized data:", userDeserialized.toObject());
  console.log(JSON.stringify(userDeserialized.toObject()));

  jsCallUE(MsgId.C2S_FRIEND_LIST_REQ, bytes);
};

defineExpose({ visible });


onBeforeMount(() => {
  init();
});
onMounted(() => {
  console.log("会议详情信息", JSON.stringify(friendStore.friendList));
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
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  margin-top: 1vh;
}

:deep(.arco-modal) {
  /* 设置毛玻璃背景 */
  //background-color: rgba(250, 250, 250, 0.2); /* 白色背景，50% 透明度 */
  background-color: rgba(250, 250, 250, 0.2); /* 白色背景，50% 透明度 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
  border-radius: 20px;
  overflow: hidden;
  border: none;
}

:deep(.arco-modal-mask) {
  /* 设置毛玻璃背景 */
  background-color: rgba(0, 0, 0, 0.5); /* 白色背景，50% 透明度 */
  //background-color: rgba(255, 255, 255, 0.5); /* 半透明背景色 */
  backdrop-filter: blur(10px); /* 毛玻璃效果 */
  -webkit-backdrop-filter: blur(10px); /* 兼容 Safari */
}

.selects, .add-selects {
  height: 6vh;
  background-color: rgba(0, 0, 0, 0.5); /* 白色背景，50% 透明度 */
  padding: 0 1vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5vh 0;
  border-radius: 5px;
  color: #FFFFFF;

  .selects-title {
    width: 5vw;
  }

  .selects-input {
    width: 24vw;
    height: 4vh;
  }
}

.add-selects {
  .add-selects-title {
    width: 100%;
    text-align: center;
    cursor: pointer;
  }
}

.add-selects:active {
  border-radius: 10px;
  color: #cccccc;
}

.custom-button {
  width: 8vw;
  height: 4.6vh;
  font-size: 1rem;
  padding: 0.5rem 1.4rem;
  background-color: #9F866B; /* 自定义背景颜色 */
  border-color: #9F866B; /* 自定义边框颜色 */
  color: #614B33; /* 自定义文字颜色 */
}

.custom-button:hover {
  background-color: #9F866B; /* 鼠标悬停时的背景颜色 */
  border-color: #9F866B; /* 鼠标悬停时的边框颜色 */
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
