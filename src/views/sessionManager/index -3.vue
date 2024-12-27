<template>
  <div class="container">
<!--    <AddSession-->
<!--      :modalObj="modalObj"-->
<!--      @addSession="addSession"-->
<!--      :dialogId="dialogId"-->
<!--    ></AddSession>-->
    <!--    <a-card class="top-title">AI会话记录</a-card>-->
    <a-row :gutter="[5, 5]" style="margin-top: 3px;">
      <a-col :span="1">
        <chatMenu @createSession="createSession" @querySessionDetail="querySessionDetail" @changeAgentType="changeAgentType"></chatMenu>
      </a-col>
      <!--      智能体会话-->
      <a-col :span="23" v-show="agentType == '1'">
        <div class="center">
          <div class="header___lEPyH">
            <div class="chatHeader">
              <div class="chatHeaderBox">
                <span class="title">{{agentTitle}}</span>
              </div>
            </div>
          </div>
          <a-scrollbar
            ref="scrollbar"
            id="home"
            class="chat-list"
            style="
              width: 90%;
              overflow: auto;
              height: calc(100vh - 300px);
              margin: 0px auto 20px;
            "
          >
            <div class="chat-item" v-for="sessionDetail in sessionDetailList">
              <a-comment v-if="sessionDetail.role === 'user'">
                <template #avatar>
                  <img
                    class="icon-user-jpg"
                    src="../../assets/images/icon-user.jpg"
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
                    src="../../assets/images/icon-chart.png"
                    alt="本地图片"
                  />
                </template>
                <template #content>
                  <a-card :class="{ chatItemAnswer: theme === 'light' }">
                    <div :class="{ light: theme === 'light' }"
                    >{{ sessionDetail.content }}
                    </div>
                  </a-card>
                </template>
              </a-comment>
              <a-comment v-else-if="sessionDetail.role === 'last'">
                <template #avatar>
                  <img
                    class="icon-user-jpg"
                    src="../../assets/images/icon-chart.png"
                    alt="本地图片"
                  />
                </template>
                <template #content>
                  <a-textarea
                    readonly
                    auto-size
                    v-model="displayedText"
                    :class="{ chatItemAnswer: theme === 'light' }"
                  >
                  </a-textarea>
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
              <!-- <a-textarea
              v-model="inputMsg"
              @keydown.shift.enter="sendMessage"
              style="height: 180px"
              placeholder="输入您想了解的内容，Shift+Enter发送"
              :max-length="500"
              allow-clear
              show-word-limit
            >
            </a-textarea> -->
              <a-textarea
                v-model="inputMsg"
                @keydown.shift.enter="handleShiftEnter"
                @keydown.enter="sendMessage"
                placeholder="输入您想了解的内容，Shift+Enter换行，Enter发送"
                allow-clear
                show-word-limit
                :disabled="chatDis"
                :class="{ textItemAnswer: theme === 'dark' }"
                :auto-size="{
                  minRows: 12,
                  maxRows: 5,
                }"
              />
              <div class="btn-send">
                <!-- <icon-send size="32" /> -->
                <a-button
                  :disabled="chatDis"
                  @click="sentClick"
                  type="primary"
                  style="border-radius: 24px"
                  :loading="loading"
                  size="large"
                >发送
                </a-button
                >
              </div>
            </div>
          </div>
        </div>
      </a-col>
      <a-col :span="23" v-show="agentType == '2'">
        <div class="center">
          <agentSession :modalObj="agentObj"></agentSession>
        </div>
      </a-col>
      <a-col :span="23" v-show="agentType == '3'">
        <div class="center" style="padding: 0">
          <historySession @querySessionDetail="querySessionDetail" @changeAgentType="changeAgentType"></historySession>
        </div>
      </a-col>
      <a-col :span="23" v-show="agentType == '4'">
        <div class="center" style="padding: 0">
          <smartAi @createSession="createSession" @querySessionDetail="querySessionDetail" @changeAgentType="changeAgentType"></smartAi>
        </div>
      </a-col>
    </a-row>
  </div>
</template>
<script setup lang="ts">
import {
  IconClose,
  IconSearch,
  IconTiktokColor
} from "@arco-design/web-vue/es/icon";
import { useAppStore, useUserStore } from "@/store";
import { computed, nextTick, onMounted, watch, reactive, ref, onBeforeMount, onBeforeUnmount } from "vue";

import { Message } from "@arco-design/web-vue";
import { EventSourceParserStream } from "eventsource-parser/stream";
import moment from "moment";
import chatMenu from "@/views/sessionManager/components/chatMenu.vue";
import AddSession from "@/views/sessionManager/components/addSession.vue";
import agentSession from "@/views/sessionManager/components/agentSession.vue";
import historySession from "@/views/sessionManager/components/historySession.vue";
import smartAi from "@/views/sessionManager/components/smartAi.vue";
import EventBus from "@/utils/EventBus";
import {
  addSessionApi,
  chatApi,
  getDialogListApi,
  getSessionDetailsApi,
  sessionListApi
} from "@/api/session";
import { getAuthorization } from "@/utils/auth";
import { queryCanvasList } from "@/api/Agent";
import { getAgentSessionDetailsApi } from "@/api/agentSession";

const sessionDetailList = ref([]); //根据会话id出来的会话详情
const sessionList = ref([]); //会话列表
const modalObj = reactive({ add: false });
const dialogId = ref("");
const chatDis = ref(false);
const loading = ref(false);
const agentType = ref("1");
const agentTitle = ref("未命名会话");

const currIndex = ref(0);
const displayedText = ref(""); // 正在显示的文字
let timer: number | null = null;
const streamStr = ref("");
const inputMsg = ref("");
const activeSessionId = ref("");
const fieldNames = { value: "id", label: "name" };
const dialogs = ref([]);
const dialogObj = reactive({});
const agentObj = reactive({});
const agentList = ref([]);
const selectValue = ref("");
const sectionList = ref({});
const DialogList = async () => {
  const { code, data } = await getDialogListApi();
  if (code === 200) {
    if (data) {
      selectValue.value = data[0].id;
      dialogs.value = data.map((item) => {
        return {
          ...item,
          type: 1 //智能体
        };
      });
      console.log(data, "dialogs");
      queryCanvas();
    }
  }
};

const queryCanvas = async (params = {}) => {
  try {
    const { data } = await queryCanvasList(params);
    console.log(data, "agent");
    agentList.value = data.map((item) => {
      return {
        ...item,
        name: item.title,
        type: 2 //agent
      };
    });
    // 合并数组
    dialogs.value = dialogs.value.concat(agentList.value);

    // 判断当前是智能体或agent
    // console.log(val, 'val');
    // if (dialogs.value.length > 0) {
    //   dialogChange(dialogs.value[0].id);
    // }
    //新建会话
    createSession(dialogs.value[0].id);


  } catch (err) {
    // you can report use errorHandler or other
  } finally {
  }
};
// 新建会话
const createSession = async (id) => {
  const res = await addSessionApi({
    dialog_id: id,
    conversation_desc: "未命名会话"
  });
  // console.log(res, "res");
  if (res.code == 200) {
    // console.log(res.data.conversation_id);
    activeSessionId.value = res.data?.conversation_id;
    queryNewSessionDetail(res.data?.conversation_id);
  } else {
    Message.error("创建会话失败，请重试");
  }

};


const handleShiftEnter = (event) => {
  event.preventDefault();
  inputMsg.value += "\n";
};
const dialogChange = (val) => {
  // 判断当前是智能体或agent
  // console.log(val, 'val');
  dialogId.value = val;
  dialogs.value.forEach((item) => {
    if (item.id === val) {
      Object.assign(dialogObj, item);
    }
  });
  console.log(dialogObj.type, "dialogObj");
  if (dialogObj.type == 1) {
    agentType.value = 1;
    querySessionList();
  } else {
    agentType.value = 2;
    queryAgentSessionList();
  }

  // querySessionList();
};
const sentClick = () => {
  sendMessage("click");
};
const sendMessage = async (event) => {
  if (event.keyCode == 13 || event === "click") {
    if (!event.shiftKey) {
      //只有enter没有shift，或进行你的其他逻辑
      if (event !== "click") {
        event.preventDefault(); // 阻止默认行为，即不换行
      }

      chatDis.value = true;
      loading.value = true;
      if (!activeSessionId.value) {
        Message.warning("请选择会话");
        chatDis.value = false;
        loading.value = false;
        return;
      }

      // if (displayedText.value) {
      //   querySessionList();
      // }

      if (inputMsg.value) {
        sessionDetailList.value.push({
          content: inputMsg.value,
          role: "user"
        });
        sessionDetailList.value.push({ role: "last" });
        refreshScroll();
        const response = await fetch(
          "/api/tech/cloudminds/query?modeltype=localragflow",
          {
            method: "POST",
            headers: {
              "Authorization": getAuthorization(),
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              conversation_id: activeSessionId.value,
              messages: inputMsg.value
            })
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
              const val = JSON.parse(value?.data || "");
              const d = val?.data;
              if (typeof d !== "boolean") {
                console.info("data:", d);
                streamStr.value = d.content;
                startDisplayStr();
              }
            } catch (e) {
              console.warn(e);
            }
            if (done) {
              console.info("done");
              displayedText.value = "";
              queryNewSessionDetail(activeSessionId.value);
              break;
            }
          }
        }
        // querySessionList();
        chatDis.value = false;
        loading.value = false;
        inputMsg.value = "";
      } else {
        Message.warning("消息不能为空");
        chatDis.value = false;
        loading.value = false;
      }
    }
  }
};

const queryNewSessionDetail = async (id) => {
  activeSessionId.value = id;
  const { code, data } = await getSessionDetailsApi(id);
  if (code === 200) {
    sessionDetailList.value = data.message;
    agentTitle.value = data.name;
    refreshScroll(); //刷新滚动条位置
  }
};

const changeAgentType = (val,session) => {
  agentType.value = val;
  console.log(val, "val");
}

const querySessionDetail = async (session) => {
  sectionList.value = session;
  activeSessionId.value = session.id;
  const { code, data } = await getSessionDetailsApi(session.id);
  if (code === 200) {
    sessionDetailList.value = data.message;
    refreshScroll(); //刷新滚动条位置
  }
};
const queryAgentSessionDetail = async (id) => {
  const { code, data } = await getAgentSessionDetailsApi(id);
  if (code == 0) {
    Object.assign(agentObj, data);
    // sessionDetailList.value = data.message;
    // refreshScroll(); //刷新滚动条位置
  }
};
const scrollbar = ref(null);
const refreshScroll = () => {
  nextTick(() => {
    const container = document.getElementById("home");
    scrollbar.value.scrollTop(container.scrollHeight);
  });
};
// 查询会话列表
const querySessionList = async () => {
  const { code, data } = await sessionListApi(selectValue.value);
  if (code === 200) {
    sessionList.value = data;
    activeSessionId.value = data[0].id; //默认选择第一个
    querySessionDetail(data[0]);
  } else {
    Message.warning("查询失败");
  }
};

// 查询会话列表
const queryAgentSessionList = async () => {
  // const { code, data } = await sessionListApi(selectValue.value);
  // if (code === 200) {
  //
  // } else {
  //   Message.warning('查询失败');
  // }
  queryAgentSessionDetail(selectValue.value);
};

//新增会话之后刷新会话列表
const addSession = () => {
  querySessionList();
};
onBeforeMount(() => {
  // DialogList();
  //新建会话
  createSession('');
});
onMounted(() => {
  EventBus.on("newChat", () => {
    agentType.value = 1;
    createSession('');
  });
});
onBeforeUnmount(() => {
  EventBus.off("newChat");
});

const appStore = useAppStore();
const theme = computed(() => {
  return appStore.theme;
});

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
</script>
<style scoped lang="scss">
.isLeftActive {
  background-color: #ededf5;
}

.left-list-item {
  margin-bottom: 2px;
}

.left-list-item:hover {
  background-color: #ededf5;
}

.dark {
  color: gray !important;
}

.container {
  .top-title {
    line-height: 32px;
    font-size: 16px;
    color: #333;
  }

  .left-select {
    :deep(.arco-select-view-single) {
      border-radius: 5px;
    }
  }

  .center,
  .right {
    box-sizing: border-box;
    height: calc(100vh - 200px);
  }

  .left {
    /* height: calc(100vh - 160px);
    overflow-y: auto;
    overflow-x: hidden;*/
    border: 0px;

    .left-list {
      .item {
        cursor: pointer;

        .text,
        .time {
          line-height: 30px;
        }

        .text {
          color: black;
          padding-left: 10px;
        }

        .time {
          color: gray;
          font-size: 12px;
          padding-left: 10px;
        }
      }
    }
  }

  .card-btn-1 {
    margin: 8px 15px;
    width: 100%;
    border-radius: 5px;
  }

  .card-btn-2 {
    margin: 10px 10px;
  }

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
    position: relative;
    padding-left: 50px;

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
          right: 10px;
          bottom: 10px;
          z-index: 10;
        }

        :deep(.arco-btn-size-large) {
          height: 28px;
          width: 60px;
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

  .right {
    .right-top {
      display: flex;
      justify-content: space-between;

      .right-title {
        font-size: 25px;
        color: black;
      }

      .right-btn {
        position: relative;
        left: 20px;
        top: 0px;
      }
    }

    .right-tag {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;

      :deep(.arco-btn-primary) {
        margin-bottom: 10px !important;

        &:hover {
          background-color: #e9f3ff;
          color: rgb(22, 93, 255);
        }
      }
    }

    .right-list {
      .right-item {
        border-radius: 10px;
        margin-top: 10px;
        padding: 10px;
        min-height: 120px;
        background-color: #e9f3ff;

        .item-title {
          text-align: center;
          line-height: 40px;
          font-size: 20px;
          font-family: 黑体;
          color: #333;
        }
      }
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
  }
}
</style>
