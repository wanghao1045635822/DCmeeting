<template>
  <div ref="refModal">
    <a-modal
        v-model:visible="visible"
        @ok="handleOk"
        @cancel="handleCancel"
        :hide-title="false"
        :mask-closable="true"
        :footer="false"
        width="30vw"
        :render-to-body="false"
    >
      <template #title>
        <div class="title">提示</div>
      </template>
      <div class="header">
        <div class="title" style="font-size: 1rem">
          你预约了：
          {{
            parseTime(meetingform.starttime * 1000, "{y}/{m}/{d} {h}:{i}")
          }}
          -
          {{
            parseTime(meetingform.endtime * 1000, "{y}/{m}/{d} {h}:{i}")
          }}
          的{{
            meetingform.selectedMeetingRoom.meetingroomname
          }}会议场景，会议时长共计：{{
            (meetingform.endtime  - meetingform.starttime) / 60 / 60
          }}小时，会议名称：{{
            meetingform.meetingname
          }}，总计费用{{
            meetingform.selectedMeetingRoom.price * (meetingform.endtime  - meetingform.starttime) / 60 / 60
          }}快币，您当前有{{
            meetingCenterStore.roleInfo.kl_kb
          }}快币。
        </div>
      </div>
      <div class="footer">
        <a-button type="primary" shape="round" class="custom-button" @click="handleSubmit">确认申请</a-button>
      </div>
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
let meetingform = reactive({
  name: '',
  post: '',
  section: '1',
  selectedMeetingRoom: {
    meetingroomname: '',
    price: 0
  },
});


watch(
    () => meetingCenterStore.meetingDetails,
    (newVal, oldVal) => {
      console.log("meetingDetails changed:", newVal);
      Object.assign(meetingform, newVal.info);
      console.log(JSON.stringify(meetingform), '传过来的会议信息')
    },
    {
      deep: true, // 开启深度监听
      immediate: true
    }
);

watch(
    () => meetingCenterStore.createMeetingInfo,
    (newVal, oldVal) => {
      console.log("createMeetingInfo changed:", newVal);
      //-1.成功但不弹界面不提示
      // 0.成功
      // 1.会议中心不存在
      // 2.会议室不存在
      // 3.会议室该时间段已被占用
      // 4.详情的图片数量上限
      // 5.货币不足
      // 6.会议开始时间小于当前时间
      if (newVal.errcode == 0) {
        sharedMeetingMethod('meetingInfo');
        Message.normal("《从NFC迈向元宇宙》已提交会议申请");
        setTimeout(() => {
          router.push("/DCMeeting");
        }, 3000);
      } else if (newVal.errcode == 1) {
        message.normal('会议中心不存在');
      } else if (newVal.errcode == 2) {
        message.normal('会议室不存在');
      } else if (newVal.errcode == 3) {
        message.normal('会议室该时间段已被占用');
      } else if (newVal.errcode == 4) {
        message.normal('详情的图片数量上限');
      } else if (newVal.errcode == 5) {
        message.normal('货币不足');
      } else if (newVal.errcode == 6) {
        message.normal('会议开始时间小于当前时间');
      }
    },
    {
      deep: true, // 开启深度监听
      immediate: true
    }
);




// 确认提交
function handleSubmit() {
  // 请求创建会议接口
  jsCallUE(MsgId.C2S_CREATE_MEETING_REQ, meetingCenterStore.bytes);

}

function init() {

}

defineExpose({visible});
onBeforeMount(() => {
  meetingCenterStore.createMeetingInfo.errcode = null;
  init()
});
onMounted(() => {

});
onBeforeUnmount(() => {
  meetingCenterStore.createMeetingInfo.errcode = null;
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
  font-size: 1.2rem;
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
  width: 8vw;
  height: 4.6vh;
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
