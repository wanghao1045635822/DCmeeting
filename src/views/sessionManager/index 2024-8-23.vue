<template>
  <div class="container">
    <!--    <AddSession-->
    <!--      :modalObj="modalObj"-->
    <!--      @addSession="addSession"-->
    <!--      :dialogId="dialogId"-->
    <!--    ></AddSession>-->
    <!--    <a-card class="top-title">AI会话记录</a-card>-->
    <a-row :gutter="[5, 5]" style="margin-top: 3px">
      <a-col :span="1">
        <chatMenu
          @createSession="createSession"
          @querySessionDetail="querySessionDetail"
          @changeAgentType="changeAgentType"
        ></chatMenu>
      </a-col>
      <!--      智能体会话-->
      <a-col :span="23" v-show="agentType == '1'">
        <div class="center">
          <div class="header___lEPyH">
            <div class="chatHeader">
              <div class="chatHeaderBox">
                <!--                <span class="title">{{ agentTitle }}</span>-->

                <a-popover position="bottom" trigger="click">
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
            id="home"
            class="chat-list"
            style="
              width: 80%;
              overflow: auto;
              height: calc(100vh - 380px);
              margin: 0px auto 20px;
            "
          >
            <div
              class="chat-item"
              v-for="(sessionDetail, index) in sessionDetailList"
            >
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
                  <!--                  <a-card :class="{ chatItemAnswer: theme === 'light' }">-->
                  <!--                    <div-->
                  <!--                      :class="{ light: theme === 'light' }"-->
                  <!--                      v-html="sessionDetail.content.replace(/\n/g, '<br/>')"-->
                  <!--                    >-->
                  <!--                    </div>-->
                  <!--                  </a-card>-->
                  <a-textarea
                    readonly
                    auto-size
                    v-model="sessionDetail.content"
                    :class="{ chatItemAnswer: theme === 'light' }"
                    :style="{
                      backgroundColor:
                        theme === 'light' ? '#ffffff' : '#000000',
                    }"
                    style="border: none"
                  >
                  </a-textarea>
                </template>
                <!-- <div>{{ sessionDetail.role === 'assistant' }}</div> -->
                <template #actions>
                  <!-- <div
                    v-for="(item, leng) in messagenList.reference"
                    :key="leng"
                  > -->
                  <div>
                    <div>
                      <template
                        v-for="(v, lix) in getTxt(
                          messagenList.reference,
                          sessionDetail.role,
                          sessionDetail.content,
                          index
                        )"
                        :key="lix"
                      >
                        <div class="icon-box" @click="clickHref(v)">
                          <div>
                            <img :src="getIconByExtension(v.doc_name)" alt="" />
                          </div>
                          <div class="icon-text"> {{ v.doc_name }} </div>
                        </div>
                      </template>
                    </div>
                  </div>

                  <span
                    class="action"
                    v-if="index != 0"
                    @click="copy(sessionDetail.content)"
                  >
                    <icon-copy /> 复制
                  </span>
                  <span
                    class="action"
                    v-if="index != 0 && index == sessionDetailList.length - 1"
                    @click="reGenerate()"
                  >
                    <icon-refresh /> 重新生成
                  </span>
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
                    :style="{
                      backgroundColor:
                        theme === 'light' ? '#ffffff' : '#000000',
                    }"
                    style="border: none"
                  >
                  </a-textarea>
                </template>

                <template #actions>
                  <!-- <div class="icon-box">
                    <div>
                      <img :src="getIconByExtension('pdf')" alt="" />
                    </div>
                    <div class="icon-text"> 文件类型 </div>
                  </div> -->
                  <div
                    class="action"
                    @click="stopChat"
                    style="
                      background: var(--color-bg-2);
                      color: var(--color-primary-light-4);
                    "
                    v-if="displayedText != ''"
                  >
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
                :style="{
                  backgroundColor: theme === 'light' ? '#ffffff' : '#000000',
                }"
                style="border: none"
                :auto-size="{
                  minRows: 12,
                  maxRows: 5,
                }"
              />
              <div style="width: 100%;display: flex;justify-content: space-between">
                <a-button
                  :disabled="onFileSelectedLoading"
                  @click="selectFile"
                  type="text"
                  style="border-radius: 24px"
                >
                  <icon-attachment
                    size="28"
                    style="color: #0960bd"
                  />
                  <input
                    ref="fileInput"
                    type="file"
                    style="display: none"
                    @change="onFileSelected"
                  />
                </a-button>
                  <span
                    style="cursor: pointer;margin-left: 20px;">
                </span>
                <a-button
                  :disabled="chatDis"
                  @click="sentClick"
                  type="text"
                  style="border-radius: 24px"
                  :loading="loading"
                >
                  <icon-send size="32" style="color: #0960bd" />
                </a-button>
              </div>
<!--              <div class="btn-send">-->
<!--                <a-button-->
<!--                  :disabled="chatDis"-->
<!--                  @click="sentClick"-->
<!--                  type="text"-->
<!--                  style="border-radius: 24px"-->
<!--                  :loading="loading"-->
<!--                >-->
<!--                  <icon-send size="32" style="color: #0960bd" />-->
<!--                </a-button>-->
<!--              </div>-->
            </div>
            <!--            <div style="margin-top: 0px">-->
            <!--              <a-upload-->
            <!--                ref="uploadRef"-->
            <!--                :file-list="uploadList"-->
            <!--                :limit="1"-->
            <!--                multiple-->
            <!--                :custom-request="customRequest"-->
            <!--                style="font-size: 24px;margin-bottom: 10px;position: relative;width: 200px">-->
            <!--                <template #upload-button>-->
            <!--                  <icon-attachment style="color: #0960bd;position: absolute;top:-50px;left: 20px;z-index: 10000"/>-->
            <!--                </template>-->
            <!--              </a-upload>-->
            <!--            </div>-->
<!--            <span-->
<!--              style="-->
<!--                position: absolute;-->
<!--                top: 94px;-->
<!--                left: 20px;-->
<!--                z-index: 999;-->
<!--                cursor: pointer;-->
<!--              "-->
<!--            >-->
<!--              <icon-attachment-->
<!--                size="28"-->
<!--                @click="selectFile"-->
<!--                style="color: #0960bd"-->
<!--              />-->
<!--              <input-->
<!--                ref="fileInput"-->
<!--                type="file"-->
<!--                style="display: none"-->
<!--                @change="onFileSelected"-->
<!--              />-->
<!--            </span>-->
            <div class="uploadFileList">
              <div
                class="files"
                v-for="(item, index) in uploaditemList"
                :key="index"
                style="position: relative; width: 200px; margin-top: 10px"
              >
                <a-comment
                  :author="item.name"
                  :content="(item.size/1024).toFixed(2) + 'K'"
                  style="
                    background: var(--color-bg-2);
                    padding: 10px;
                    border-radius: 10px;
                    font-size: 12px;
                  "
                >
                  <template #avatar>
                    <a-spin
                      :loading="onFileSelectedLoading"
                      v-if="onFileSelectedLoading"
                    >
                      <template #icon>
                        <icon-sync />
                      </template>
                    </a-spin>
                    <!--                    <a-button type="text" :loading="onFileSelectedLoading" v-if="onFileSelectedLoading"></a-button>-->
                    <a-avatar v-if="!onFileSelectedLoading">
                      <icon-file style="color: #0960bd" />
                    </a-avatar>
                  </template>
                </a-comment>
                <icon-close-circle-fill
                  size="18px"
                  @click="deleteFile(item)"
                  style="
                    position: absolute;
                    right: -4px;
                    top: -4px;
                    color: red;
                    cursor: pointer;
                  "
                />
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
          <historySession
            @querySessionDetail="querySessionDetail"
            @changeAgentType="changeAgentType"
          ></historySession>
        </div>
      </a-col>
      <a-col :span="23" v-show="agentType == '4'">
        <div class="center" style="padding: 0">
          <smartAi
            @createSession="createSession"
            @querySessionDetail="querySessionDetail"
            @changeAgentType="changeAgentType"
          ></smartAi>
        </div>
      </a-col>
    </a-row>
    <a-modal
      v-model:visible="visible"
      title="修改名称"
      @before-open="handleOpened"
      @cancel="handleCancel"
      :footer="false"
      title-align="start"
    >
      <a-form
        ref="formRef"
        :rules="rules"
        :model="from"
        @submit="handleSubmit"
      >
        <a-form-item field="name" label="名称">
          <a-input v-model="from.name" placeholder="请输入名称" />
        </a-form-item>
        <a-form-item>
          <div style="width: 100%; text-align: right">
            <a-button @click="visible = false">取消</a-button>
            <a-button
              style="margin-left: 10px"
              type="primary"
              html-type="submit"
              >确定</a-button
            >
          </div>
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
  import {
    IconClose,
    IconSearch,
    IconTiktokColor,
  } from '@arco-design/web-vue/es/icon';
  import { useAppStore, useUserStore } from '@/store';
  import {
    computed,
    nextTick,
    onMounted,
    watch,
    reactive,
    ref,
    onBeforeMount,
    onBeforeUnmount,
  } from 'vue';

  import { Message } from '@arco-design/web-vue';
  import { EventSourceParserStream } from 'eventsource-parser/stream';
  import moment from 'moment';
  import chatMenu from '@/views/sessionManager/components/chatMenu.vue';
  import AddSession from '@/views/sessionManager/components/addSession.vue';
  import agentSession from '@/views/sessionManager/components/agentSession.vue';
  import historySession from '@/views/sessionManager/components/historySession.vue';
  import smartAi from '@/views/sessionManager/components/smartAi.vue';
  import setName from '@/views/sessionManager/components/setName.vue';
  import EventBus from '@/utils/EventBus';
  import {
    addSessionApi,
    chatApi,
    getDialogListApi,
    getSessionDetailsApi,
    sessionListApi,
    uploadWithoutKb,
  } from '@/api/session';
  import { getAuthorization } from '@/utils/auth';
  import { queryCanvasList } from '@/api/Agent';
  import { getAgentSessionDetailsApi } from '@/api/agentSession';
  import useClipboard from 'vue-clipboard3';
  import pdfImg1 from '@/assets/session/PDF.png';
  import pdfImg2 from '@/assets/session/wps-write.png';
  import pdfImg3 from '@/assets/session/execl.png';
  import pdfImg4 from '@/assets/session/icon-txt.png';
  import pdfImg5 from '@/assets/session/txt.png';

  // const url = ref('../../assets/session/PDF.png');

  const sessionDetailList = ref([]); //根据会话id出来的会话详情
  const messagenList = ref({});
  const sessionList = ref([]); //会话列表
  const modalObj = reactive({ add: false });
  const dialogId = ref('');
  const chatDis = ref(false);
  const loading = ref(false);
  const agentType = ref('1');
  const agentTitle = ref('未命名会话');
  let chatObj = reactive({});
  let from = reactive({
    name:'未命名会话',
  });
  const isStopChat = ref(false);
  const currIndex = ref(0);
  const displayedText = ref(''); // 正在显示的文字
  let timer: number | null = null;
  const streamStr = ref('');
  const inputMsg = ref('');
  const activeSessionId = ref('');
  const fieldNames = { value: 'id', label: 'name' };
  const dialogs = ref([]);
  const dialogObj = reactive({});
  const agentObj = reactive({});
  const agentList = ref([]);
  const selectValue = ref('');
  const sectionList = ref({});
  const uploadList = ref([]);
  const uploaditemList = ref([]);
  const uploadRef = ref();
  const files = ref([]);
  const file = ref('');
  const fileInput = ref(null);
  const chatDataMeg = reactive({});
  const visible = ref(false);
  let toStop = false;

  const rules = {
    name: [
      {
        required: true,
        message: '名称不允许为空',
      },
    ],
  };

  const handleSubmit = async ({ values, errors }) => {
    if (errors) return;
    let chatData = {
      id: chatObj.id,
      conversation_id: chatObj.id,
      name: from.name,
    };
    const { code, data } = await addSessionApi(chatData);
    if (data) {
      Message.success('修改成功');
      handleCancel();
      queryNewSessionDetail(activeSessionId.value);
    }
  };
  let dataItem = [];
  const getTxt = (data, role, message, index) => {
    if (/##0\$\$/.test(message)) {
      if (role == 'assistant' && index) {
        data.forEach((item) => {
          if (Object.keys(item).length !== 0 && item?.doc_aggs.length > 0) {
            dataItem = item.doc_aggs;
          }
        });
      }
    } else {
      dataItem = [];
    }

    return dataItem;
  };

  const clickHref = (item) => {
    // return Message.warning('暂无法查看');
    window.open(`/api/v1/document/show/${item.doc_id}`, '_blank');
  };

  const getIconByExtension = computed(() => (extension) => {
    const fileExtension = ref('');
    fileExtension.value = extension.split('.').pop();
    switch (fileExtension.value) {
      case 'pptx':
      case 'ppt':
      case 'pdf':
        return pdfImg1; // PDF图标的URL
      case 'docx':
      case 'doc':
        return pdfImg2; // Word图标的URL
      case 'xlsx':
      case 'xls':
        return pdfImg3; // Excel图标的URL
      case 'txt':
        return pdfImg4; // 文本文档图标的URL
      default:
        return pdfImg5; // 默认图标
    }
  });

  const handleClick = () => {
    visible.value = true;
  };
  const handleCancel = () => {
    visible.value = false;
  };

  const handleOpened = (el) => {
    // Object.assign(form,{
    //   name: '',// 用户名
    // });
    // formRef.value.resetFields();
  };

  const selectFile = () => {
    fileInput.value.click();
  };

  let onFileSelectedLoading = ref(false);
  const onFileSelected = (event) => {
    const file = event.target.files[0];
    uploaditemList.value = [
      {
        name: file.name,
        size: file.size,
      },
    ];
    if (file) {
      onFileSelectedLoading.value = true;
      const formData = new FormData();
      formData.append('file', file);
      formData.append('conversation_id', activeSessionId.value);
      uploadWithoutKb(formData).then((res) => {
        // console.log(res);
        if (res.code == 200) {
          console.log(res);
          console.log(uploaditemList.value);
          onFileSelectedLoading.value = false;
          fileInput.value.value = '';
          uploaditemList.value = [];
          Message.success('上传成功');
        } else {
          Message.error('上传失败');
        }
      });
    }
  };

  const deleteFile = (item) => {
    console.log(uploaditemList.value);
    uploaditemList.value = [];
  };

  const { toClipboard } = useClipboard();
  const copy = async (text) => {
    await toClipboard(text); //参数为要复制的文本
  };

  const onChange = (fileList) => {
    // files.value = fileList;
  };

  // 上传文件
  const customRequest = async (option) => {
    const { onProgress, onError, onSuccess, fileItem, name } = option;
    fileItem.status = 'ready';
    if (fileItem.file) {
      const formData = new FormData();
      formData.append('file', fileItem.file);
      formData.append('conversation_id', activeSessionId.value);
      uploadWithoutKb(formData).then((res) => {
        // console.log(res);
        if (res.code == 200) {
          console.log(res);
          console.log(uploadList.value);
          fileItem.status = 'done';
          // uploadList.value = [];
        } else {
          fileItem.status = 'error';
        }
      });
    }
  };

  const DialogList = async () => {
    const { code, data } = await getDialogListApi();
    if (code === 200) {
      if (data) {
        selectValue.value = data[0].id;
        dialogs.value = data.map((item) => {
          return {
            ...item,
            type: 1, //智能体
          };
        });
        console.log(data, 'dialogs');
        queryCanvas();
      }
    }
  };

  const queryCanvas = async (params = {}) => {
    try {
      const { data } = await queryCanvasList(params);
      console.log(data, 'agent');
      agentList.value = data.map((item) => {
        return {
          ...item,
          name: item.title,
          type: 2, //agent
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
  const createSession = async (id, name = '未命名会话') => {
    // 如果有会话id
    console.log(name, '新建会话名称');

    const res = await addSessionApi({
      dialog_id: id,
      conversation_desc: name,
    });
    // console.log(res, "res");
    if (res.code == 200) {
      // console.log(res.data.conversation_id);
      activeSessionId.value = res.data?.conversation_id;
      queryNewSessionDetail(res.data?.conversation_id);
    } else {
      Message.error('创建会话失败，请重试');
    }
  };

  const handleShiftEnter = (event) => {
    event.preventDefault();
    inputMsg.value += '\n';
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
    console.log(dialogObj.type, 'dialogObj');
    if (dialogObj.type == 1) {
      agentType.value = '1';
      querySessionList();
    } else {
      agentType.value = '2';
      queryAgentSessionList();
    }

    // querySessionList();
  };

  // 发送
  const sentClick = () => {
    sendMessage('click');
  };
  // 重新生成
  const reGenerate = () => {
    let inputContent =
      sessionDetailList.value[sessionDetailList.value.length - 2].content;
    startChat(inputContent);
  };

  const sendMessage = async (event) => {
    if (event.keyCode == 13 || event === 'click') {
      if (!event.shiftKey) {
        //只有enter没有shift，或进行你的其他逻辑
        if (event !== 'click') {
          event.preventDefault(); // 阻止默认行为，即不换行
        }

        // if (!activeSessionId.value) {
        //   Message.warning("请选择会话");
        //   chatDis.value = false;
        //   loading.value = false;
        //   return;
        // }

        // if (displayedText.value) {
        //   querySessionList();
        // }

        if (inputMsg.value) {
          startChat(inputMsg.value);

          inputMsg.value = '';
        } else {
          Message.warning('消息不能为空');
        }
      }
    }
  };

  const startChat = async (valMsg) => {
    chatDis.value = true;
    loading.value = true;
    toStop = false;
    sessionDetailList.value.push({
      content: valMsg,
      role: 'user',
    });
    sessionDetailList.value.push({ role: 'last' });
    refreshScroll();
    const response = await fetch(
      '/api/tech/cloudminds/query?modeltype=localragflow',
      {
        method: 'POST',
        headers: {
          'Authorization': getAuthorization(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          conversation_id: activeSessionId.value,
          messages: valMsg,
        }),
      }
    );

    const reader = response?.body
      ?.pipeThrough(new TextDecoderStream())
      .pipeThrough(new EventSourceParserStream())
      .getReader();
    currIndex.value = 0;
    while (true) {
      if (toStop) {
        displayedText.value = '';
        setChatDataMeg(chatDataMeg);
        break;
      }
      const x = await reader?.read();
      if (x) {
        const { done, value } = x;
        // console.log(x, 999);
        try {
          const val = JSON.parse(value?.data || '');
          const d = val?.data;
          if (typeof d !== 'boolean') {
            // console.info("data:", d);
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
            setChatDataMeg(chatDataMeg);
          } else {
            queryNewSessionDetail(activeSessionId.value);
            EventBus.emit('queryAppUsageList');
          }
          break;
        }
      }
    }
    // querySessionList();
    chatDis.value = false;
    loading.value = false;
  };

  const stopChat = async () => {
    // const { code, data } = await stopChatApi(activeSessionId.value);
    // if (code === 200) {
    //   Message.success("已停止");
    //   queryNewSessionDetail(activeSessionId.value);
    // }
    loading.value = false;
    chatDis.value = false;
    isStopChat.value = true;
    toStop = true;
    console.log('stopChat');
    console.log(displayedText.value, 'displayedText');
    console.log(sessionDetailList.value, 'sessionDetailList');
    let inputText =
      sessionDetailList.value[sessionDetailList.value.length - 2].content;
    // 数组合并
    let lastArr = [
      {
        content: inputText,
        role: 'user',
      },
      {
        content: displayedText.value,
        role: 'assistant',
      },
    ];
    sessionDetailList.value = sessionDetailList.value
      .splice(0, sessionDetailList.value.length - 2)
      .concat(lastArr);

    console.log(sessionDetailList.value, 'sessionDetailList2');
    console.log(chatObj, 'chatObj对象');
    chatObj.message = chatObj.message.concat(lastArr);
    Object.assign(chatDataMeg, {
      id: chatObj.id,
      conversation_id: chatObj.id,
      message: sessionDetailList.value,
    });
  };

  const setChatDataMeg = async (chatData) => {
    const { code, data } = await addSessionApi(chatData);
    if (data) {
      //停止定时器
      clearTimeout(timer!);
      timer = null;
      // displayedText.value = "";
      queryNewSessionDetail(activeSessionId.value);
    }
  };

  const queryNewSessionDetail = async (id) => {
    activeSessionId.value = id;
    const { code, data } = await getSessionDetailsApi(id);
    if (code === 200) {
      console.log(data, '新建会话详情');
      Object.assign(chatObj, data);
      sessionDetailList.value = data.message;
      messagenList.value = data;
      agentTitle.value = data.name;
      from.name = data.name;
      refreshScroll(); //刷新滚动条位置
      isStopChat.value = false;
    }
  };

  const changeAgentType = (val, session) => {
    agentType.value = val;
    console.log(val, 'val');
  };

  const querySessionDetail = async (session) => {
    sectionList.value = session;
    activeSessionId.value = session.id;
    from.name = session.name;
    const { code, data } = await getSessionDetailsApi(session.id);
    if (code === 200) {
      sessionDetailList.value = data.message;
      messagenList.value = data;
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
      const container = document.getElementById('home');
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
      Message.warning('查询失败');
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
    EventBus.on('newChat', () => {
      agentType.value = '1';
      createSession('');
    });
  });
  onBeforeUnmount(() => {
    EventBus.off('newChat');
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
        //display: flex;
        //align-items: center;
        width: 78%;
        margin: 0 auto;
        position: relative;

        .center-bottom {
          //position: absolute;
          //width: 100%;
          //bottom: 20px;
          //left: 5%;
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
            top: 90px;
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
      .icon-box {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        background: var(--color-bg-1);
        border: 1px solid var(--color-border-2);
        padding: 10px;
        border-radius: 14px;
        min-width: 200px;
        cursor: pointer;
        .icon-text {
          margin-left: 10px;
        }
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
      overflow: hidden; /* 隐藏超出的内容 */
      text-overflow: ellipsis; /* 使用省略号来代替被隐藏的文字 */
      white-space: nowrap; /* 不换行，使内容在一行内显示 */
      max-width: 200px;

      .title {
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

  :deep(.arco-upload-list-item-operation) {
    //display: none;
  }
</style>
