<template>
  <!--      内容-->
  <div class="header___lEPyH">
    <div class="chatHeader">
      <div class="chatHeaderBox">
<!--        <span class="title">{{agentTitle}}</span>-->
        <a-popover
          position="bottom"
          trigger="click"
        >
          <a-button border
          >
            <span style="
                       width: 100px;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    ">{{ from.name }}</span>
            <icon-down style="margin-left: 4px" />
          </a-button>
          <template #content>
            <a-button
              type="text"
              class="button"
              style="color: #2a2a2b"
              @click="handleClick()"
            >
              <template #icon>
                <icon-edit />
              </template>
              修改名称
            </a-button>
            <!--                    <a-divider style="margin: 10px 0" />-->
          </template>
        </a-popover>
      </div>
    </div>
  </div>
  <a-scrollbar
    ref="scrollbar"
    id="agentHome"
    class="chat-list"
    style="
              width: 80%;
              overflow: auto;
              height: calc(100vh - 380px);
              margin: 0px auto 20px;
            "
  >
    <div class="chat-item" v-for="(sessionDetail,index) in sessionDetailList">
      <a-comment v-if="sessionDetail.role === 'user'">
        <template #avatar>
          <img
            class="icon-user-jpg"
            src="../../../assets/images/icon-user.jpg"
            alt="本地图片"
          />
        </template>
        <template #content>
          <div :class="{ chartUserText: theme === 'light' }"
          >{{ sessionDetail.content }}
          </div>
        </template>
      </a-comment>
      <a-comment v-else-if="sessionDetail.role === 'assistant'">
        <template #avatar>
          <img
            class="icon-user-jpg"
            src="../../../assets/images/icon-chart.png"
            alt="本地图片"
          />
        </template>
        <template #content>
<!--          <a-card :class="{ chatItemAnswer: theme === 'light' }">-->
<!--            <div :class="{ light: theme === 'light' }"-->
<!--            >{{ sessionDetail.content }}-->
<!--            </div>-->
<!--          </a-card>-->
          <a-textarea
            readonly
            auto-size
            v-model="sessionDetail.content"
            :class="{ chatItemAnswer: theme === 'light' }"
            :style="{ backgroundColor: theme === 'light' ? '#ffffff' : '#000000'}"
            style="border: none"
          >
          </a-textarea>
        </template>
        <template #actions>
                  <span class="action" v-if="index != 0" @click="copy(sessionDetail.content)">
                     <icon-copy /> 复制
                  </span>
          <span class="action"  v-if="index != 0 && index == sessionDetailList.length - 1" @click="reGenerate()">
                     <icon-refresh /> 重新生成
                  </span>
        </template>
      </a-comment>
      <a-comment v-else-if="sessionDetail.role === 'last'">
        <template #avatar>
          <img
            class="icon-user-jpg"
            src="../../../assets/images/icon-chart.png"
            alt="本地图片"
          />
        </template>
        <template #content>
          <a-textarea
            readonly
            auto-size
            v-model="displayedText"
            :class="{ chatItemAnswer: theme === 'light' }"
            :style="{backgroundColor: theme === 'light' ? '#ffffff' : '#000000'}"
            style="border: none"
          >
          </a-textarea>
        </template>
        <template #actions>
          <div class="action"
               @click="stopChat"
               style="background: var(--color-bg-2);color: var(--color-primary-light-4);" v-if="displayedText != ''">
            <icon-record-stop />
            停止生成
          </div>
        </template>
      </a-comment>
    </div>
    <!-- <div class="chartStart" v-if="isStart" @click="startChat"
      >停止生成</div
    >
    <div class="chartStart v-else" @click="stopChat">重新生成</div> -->
  </a-scrollbar>
  <div class="chat_bottom">
    <div class="center-bottom">
      <a-textarea
        v-model="inputMsg"
        @keydown.shift.enter="handleShiftEnter"
        @keydown.enter="sendMessage"
        placeholder="输入您想了解的内容，Shift+Enter换行，Enter发送"
        allow-clear
        show-word-limit
        :disabled="chatDis"
        :class="{ textItemAnswer: theme === 'dark' }"
        :style="{backgroundColor: theme === 'light' ? '#ffffff' : '#000000'}"
        style="border: none"
        :auto-size="{
                  minRows: 12,
                  maxRows: 5,
                }"
      />
      <div style="width: 100%;display: flex;justify-content: space-between">
        <span></span>
        <a-button
          :disabled="chatDis"
          @click="sentClick"
          type="text"
          style="border-radius: 24px"
          :loading="loading"
        >
          <icon-send size="32" style="color: #0960bd;"/>
        </a-button
        >
      </div>
<!--      <div class="btn-send">-->
<!--        &lt;!&ndash; <icon-send size="32" /> &ndash;&gt;-->
<!--        <a-button-->
<!--          :disabled="chatDis"-->
<!--          @click="sentClick"-->
<!--          type="text"-->
<!--          style="border-radius: 24px"-->
<!--          :loading="loading"-->
<!--        >-->
<!--          <icon-send size="32" style="color: #0960bd;"/>-->
<!--        </a-button-->
<!--        >-->
<!--      </div>-->
    </div>
    <a-modal v-model:visible="visible" title="修改名称" @before-open="handleOpened" @cancel="handleCancel" :footer="false" title-align="start">
      <a-form ref="formRef" :rules="rules" :model="from" @submit="handleSubmit" >
        <a-form-item field="name" label="名称">
          <a-input v-model="from.name" placeholder="请输入名称"/>
        </a-form-item>
        <a-form-item>
          <div style="width: 100%;text-align: right">
            <a-button @click="visible = false">取消</a-button>
            <a-button style="margin-left: 10px" type="primary" html-type="submit">确定</a-button>
          </div>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, watch, defineEmits, onMounted, reactive, computed, nextTick, onBeforeUnmount } from "vue";
import { Message } from '@arco-design/web-vue';
import { useAppStore } from "@/store";
import { getAuthorization } from "@/utils/auth";
import { EventSourceParserStream } from 'eventsource-parser/stream';
import { agentResetApi, agentSetApi, getAgentSessionDetailsApi } from "@/api/agentSession";
import EventBus from '@/utils/EventBus';
import useClipboard from "vue-clipboard3";
import { addSessionApi, getSessionDetailsApi } from "@/api/session";
const props = defineProps({
  modalObj: Object,
});

// const emit = defineEmits(['addSession']);

const sessionDetailList = ref([]); //根据会话id出来的会话详情
const sessionList = ref([]); //会话列表
const modalObj = reactive({ });
const dialogId = ref('');
const chatDis = ref(false);
const loading = ref(false);
const agentTitle = ref("未命名会话");


const currIndex = ref(0);
const displayedText = ref(''); // 正在显示的文字
let timer: number | null = null;
const streamStr = ref('');
const inputMsg = ref('');
const activeSessionId = ref('');
const fieldNames = { value: 'id', label: 'name' };
const agentObj = reactive({});
const agentList = ref([]);
const selectValue = ref('');
const sectionList = ref({});
let chatObj = reactive({});
const isStopChat = ref(false)
const appStore = useAppStore();
const theme = computed(() => {
  return appStore.theme;
});
let from = reactive({
  name:'未命名会话',
});

const visible = ref(false);
let isHistory = ref(false);//是否是历史记录
let dsl = reactive({});
const chatDataMeg = reactive({});


const rules = {
  name: [
    {
      required: true,
      message:'名称不允许为空',
    },
  ],
}

const handleSubmit = async({values, errors}) => {
  if(errors) return;
  console.log(agentObj, 'agentObj');
  let chatData = {
    id:agentObj.id,
    conversation_id:agentObj.id,
    name: from.name
  }
  const { code, data } = await addSessionApi(chatData);
  if (data) {
    Message.success("修改成功");
    handleCancel()
  }
}

const handleClick = () => {
  visible.value = true;
};
const handleCancel = () => {
  visible.value = false;
}

const handleOpened =(el) => {
  // Object.assign(form,{
  //   name: '',// 用户名
  // });
  // formRef.value.resetFields();
}


// 初始化页面
const initPage = async () => {
  agentSet();
};

const createNewAgent = async (session) => {
  console.log(session,'新建agent会话对象');
  Object.assign(agentObj, session);
  isHistory.value = false;
  initPage();
}
// 调用set方法
const agentSet = async () => {
  const res = await agentSetApi({
    id: agentObj.id,
    title: agentObj.title,
    dsl: agentObj.dsl,
  });
  // console.log(res,'agentSet');
  if (res.code == 0) {
    agentReset();
  }
}
// 调用reset方法
const agentReset = async () => {
  const res = await agentResetApi({
    id: agentObj.id,
  });
  if (res.code == 0) {
    // Message.success('修改成功');
    agentCompletion();
  }
}
// 调用completion方法
const agentCompletion = async () => {
  const response = await fetch(
    '/api/v1/canvas/completion',
    {
      method: 'POST',
      headers: {
        'Authorization': getAuthorization(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: agentObj.id
      }),
    }
  );

  const reader = response?.body
    ?.pipeThrough(new TextDecoderStream())
    .pipeThrough(new EventSourceParserStream())
    .getReader();
  currIndex.value = 0;
  while (true) {
    const x = await reader?.read();
    if (x) {
      const { done, value } = x;
      console.log(x, 999);
      try {
        const val = JSON.parse(value?.data || '');
        const d = val?.data;
        if (typeof d !== 'boolean') {
          console.info('data:', d);
          streamStr.value = d.content;
          startDisplayStr();
        }
      } catch (e) {
        console.warn(e);
      }
      if (done) {
        console.info('done');
        displayedText.value = '';
        queryAgentSessionDetail(agentObj.id);
        break;
      }
    }
  }
  chatDis.value = false;
  loading.value = false;
  inputMsg.value = '';
}
// 调用get方法
const queryAgentSessionDetail = async (id) => {
  const { code, data } = await getAgentSessionDetailsApi(id);
  if (code == 0) {
    console.log(data,'agent会话详情');
    Object.assign(chatObj, data);
    sessionDetailList.value = data.dsl.messages;
    agentTitle.value = `${data.title}` || '未命名会话';
    from.name = `${data.title}` || '未命名会话';
    refreshScroll(); //刷新滚动条位置
  }
};

// 历史记录跳转获取agent会话详情
const querySessionDetail = async (session) => {
  activeSessionId.value = session.id;
  from.name = session.name;
  const { code, data } = await getSessionDetailsApi(session.id);
  if (code == 200) {
    sessionDetailList.value = data.message.messages;
    const res = await getAgentSessionDetailsApi(session.dialog_id);
    if (res.code == 0) {
      console.log(res.data,'agent会话详情');
      Object.assign(agentObj, res.data);
      Object.assign(chatObj, res.data);
      Object.assign(dsl, res.data.dsl);
      refreshScroll(); //刷新滚动条位置
    }
  }
};


const { toClipboard } = useClipboard();
const copy = async (text) => {
  await toClipboard(text);    //参数为要复制的文本
}


const sentClick = () => {
  sendMessage('click');
};

// 重新生成
const reGenerate = () => {
  let inputContent = sessionDetailList.value[sessionDetailList.value.length-2].content
  startChat(inputContent)
};

const sendMessage = async (event) => {
  if (event.keyCode == 13 || event === 'click') {
    if (!event.shiftKey) {
      //只有enter没有shift，或进行你的其他逻辑
      if (event !== 'click') {
        event.preventDefault(); // 阻止默认行为，即不换行
      }

      // chatDis.value = true;
      // loading.value = true;
      // if (!agentObj.id) {
      //   Message.warning('请选择会话');
      //   chatDis.value = false;
      //   loading.value = false;
      //   return;
      // }

      // if (displayedText.value) {
      //   querySessionList();
      // }

      if (inputMsg.value) {
        startChat(inputMsg.value)
        inputMsg.value = '';
      } else {
        Message.warning('消息不能为空');
        chatDis.value = false;
        loading.value = false;
      }
    }
  }
};


const startChat = async(valMsg)=>{
  sessionDetailList.value.push({
    content: valMsg,
    role: 'user',
  });
  sessionDetailList.value.push({ role: 'last' });
  refreshScroll();
  let chatStr = {
    id: agentObj.id,
    message: valMsg,
  }
  if(isHistory.value){
    chatStr.dsl = dsl;
  }
  const response = await fetch(
    '/api/v1/canvas/completion',
    {
      method: 'POST',
      headers: {
        'Authorization': getAuthorization(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chatStr),
    }
  );

  const reader = response?.body
    ?.pipeThrough(new TextDecoderStream())
    .pipeThrough(new EventSourceParserStream())
    .getReader();
  currIndex.value = 0;
  while (true) {
    const x = await reader?.read();
    if (x) {
      const { done, value } = x;
      // console.log(x, 999);
      try {
        const val = JSON.parse(value?.data || '');
        const d = val?.data;
        if (typeof d !== 'boolean') {
          console.info('data:', d);
          streamStr.value = d.content;
          startDisplayStr();
        }
      } catch (e) {
        console.warn(e);
      }
      if (done) {
        console.info('done');
        displayedText.value = '';
        if (isStopChat.value) {
          isStopChat.value = false;
          setChatDataMeg(chatDataMeg);
        } else {
          queryAgentSessionDetail(agentObj.id);
          EventBus.emit('queryAppUsageList');
        }
        break;
      }
    }
  }
  chatDis.value = false;
  loading.value = false;
}

const stopChat=async()=>{
  // const { code, data } = await stopChatApi(agentObj.id);
  // if (code === 200) {
  //   Message.success("已停止");
  // }
  loading.value = false;
  chatDis.value = false;
  isStopChat.value = true;
  console.log('stopChat');
  console.log(displayedText.value, 'displayedText');
  console.log(sessionDetailList.value, 'sessionDetailList');
  let inputText = sessionDetailList.value[sessionDetailList.value.length-2].content
  // 数组合并
  let lastArr = [{
    content: inputText,
    role: "user"
  },{
    content: displayedText.value,
    role: "assistant"
  }]
  sessionDetailList.value = sessionDetailList.value.splice(0, sessionDetailList.value.length-2).concat(lastArr);
  console.log(sessionDetailList.value, 'sessionDetailList2');
  console.log(chatObj, 'chatObj对象');
  chatObj.dsl.messages = chatObj.dsl.messages.concat(lastArr);
  Object.assign(chatDataMeg, {
    id: chatObj.id,
    conversation_id: chatObj.id,
    message: sessionDetailList.value,
  });

}


const setChatDataMeg = async (chatData) => {
  const { code, data } = await addSessionApi(chatData);
  if (data) {
    //停止定时器
    clearTimeout(timer!);
    timer = null;
    // displayedText.value = "";
    queryAgentSessionDetail(chatObj.id);
  }
};

const handleShiftEnter = (event) => {
  event.preventDefault();
  inputMsg.value += '\n';
};



//文字动态输出
const startDisplayStr = () => {
  if (timer) {
    clearTimeout(timer!);
  }
  const res = streamStr.value;
  // 将数组中的字符串拼接起来
  if (currIndex.value < res.length) {
    displayedText.value += res[currIndex.value];
    currIndex.value++;
    setTimeout(startDisplayStr, 100);
    refreshScroll();
  } else {
    clearTimeout(timer!);
    timer = null;
  }
};

const scrollbar = ref(null);
const refreshScroll = () => {
  nextTick(() => {
    const container = document.getElementById('agentHome');
    scrollbar.value.scrollTop(container.scrollHeight);
  });
};


onMounted(() => {
  EventBus.on('createAgent', (data) => {
    createNewAgent(data);
  });
  EventBus.on('queryAgentSessionDetail', (data) => {
    isHistory.value = true;
    querySessionDetail(data);
  });
});
onBeforeUnmount(() => {
  EventBus.off('createAgent');
  EventBus.off('queryAgentSessionDetail');
});

watch(
  () => props.modalObj,
  (newVal, oldVal) => {
    // Object.assign(agentObj, newVal);
    //调用agent初始化方法
    if(JSON.stringify(newVal) != '{}'){
      // initPage();
    }
  },{
    immediate: true,
    deep: true
  }
);
</script>

<style scoped lang="scss">

.dark {
  color: gray !important;
}

.container {
  .chatItemAnswer {
    box-sizing: border-box;
    background: #f1f1f1;
    border-radius: 14px;
    .light {
      box-sizing: border-box;
      background: #f1f1f1;
      border-radius: 14px;
    }
  }
  .textItemAnswer {
    background-color: #373739;
  }

  .center {
    box-sizing: border-box;
    height: calc(100vh - 200px);
    position: relative;

    .center-title {
      line-height: 60px;
      font-size: 25px;
      font-family: 黑体;
      color: deepskyblue;
    }

    .center-content {
      font-size: 14px;
      color: gray;
    }

    .center-question {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      .center-question-left {
        margin-top: 5px;
        margin-left: 20px;
      }

      .center-question-right {
        margin-right: 20px;
      }
    }
    .center-list {
      margin-top: 10px;

      .item {
        border-radius: 10px;
        margin-top: 10px;
        padding: 10px;
        min-height: 120px;
        background-color: #e9f3ff;
        .item-content {
          color: #666;
        }
        .item-title {
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          font-family: 黑体;
          color: #333;
        }
      }
    }
    .chartStart {
      color: #4955f5;
      cursor: pointer;
      font-family: PingFangSC-Medium;
      font-size: 12px;
      font-weight: 500;
    }
    .chat_bottom {
      display: flex;
      align-items: center;
      width: 78%;
      margin: 0 auto;
      .center-bottom {
        // position: absolute;
        // width: 90%;
        // bottom: 20px;
        // left: 5%;
        background: #fff;
        border: 1px solid #00000014;
        border-radius: 24px;
        display: flex;
        flex: 1 1;
        flex-direction: column;
        overflow: hidden;
        position: relative;
        // padding-top:10px;
        :deep(.arco-textarea-wrapper) {
          border-radius: 24px;
        }

        .btn-send {
          position: absolute !important;
          right: 4px;
          top: 80px;
          z-index: 10;
        }
        :deep(.arco-btn-size-large) {
          height: 28px;
          width: 50px;
        }
      }
      :deep(.arco-textarea-wrapper) {
        padding-top: 5px;
      }
    }
  }
  .chat-item {
    padding: 10px 0;
    .chartUserText {
      font-weight: 600;
      font-size: 14px;
      color: #333;
      margin-top: 4px;
    }
    .icon-user-jpg {
      border: 1px solid #d9d9d9;
    }
  }
}
.header___lEPyH {
  width: 100%;
  height: 46px;
  position: relative;
  backdrop-filter: blur(15px);
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-backdrop-filter: blur(15px);
  .chatHeaderBox {
    width: auto;
    border-radius: 8px;
    padding: 4px 20px;
    transition: all var(--animation-duration) var(--animation-transition);
    display: flex;
    align-items: flex-end;
    overflow: hidden;        /* 隐藏超出的内容 */
    text-overflow: ellipsis; /* 使用省略号来代替被隐藏的文字 */
    white-space: nowrap;     /* 不换行，使内容在一行内显示 */
    max-width: 200px;
    .title{
      color: var(--color-text-1);
      font-size: 12px;
    }
  }
}

.action {
  cursor: pointer;
  display: inline-block;
  padding: 0 10px;
  color: var(--color-text-1);
  line-height: 24px;
  background: transparent;
  border-radius: 2px;
  cursor: pointer;
  transition: all 0.1s ease;
  font-size: 12px;
}
.action:hover {
  background: var(--color-fill-3);
}
</style>
